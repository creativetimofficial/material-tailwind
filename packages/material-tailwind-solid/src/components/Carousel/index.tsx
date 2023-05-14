// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import { Motion } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import {
  For,
  Show,
  children,
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  splitProps,
} from "solid-js";

import type {
  autoplay,
  autoplayDelay,
  loop,
  navigation,
  nextArrow,
  prevArrow,
  slideRef,
  transition,
} from "../../types/components/carousel";

export interface CarouselProps {
  prevArrow?: prevArrow;
  nextArrow?: nextArrow;
  navigation?: navigation;
  autoplay?: autoplay;
  autoplayDelay?: autoplayDelay;
  transition?: transition;
  loop?: loop;
  slideRef?: slideRef;
}

export const Carousel: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & CarouselProps> = (
  props,
) => {
  // 1. init
  let containerRef!: HTMLDivElement;
  const theme = useTheme();

  const [index, setIndex] = createSignal(1);
  const [prev, setPrev] = createSignal<number | undefined>(undefined);

  const [width, setWidth] = createSignal(0);

  // 2. set default props

  const mergedProps = mergeProps(() => theme().carousel.defaultProps, props);
  const childrens = children(() => props.children);
  const childs = children(() => props.children);
  const childsLength = createMemo(() => childrens.toArray().length);
  const firstIndex = 1;
  const lastIndex = createMemo(() => childsLength() + 1);

  const [motionProps, rest] = splitProps(mergedProps, [
    "prevArrow",
    "nextArrow",
    "navigation",
    "autoplay",
    "autoplayDelay",
    "transition",
    "loop",
    "class",
    "slideRef",
  ]);

  // 3. set styles
  const carouselClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().carousel.styles.base.carousel)), motionProps.class),
  );
  const slideClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().carousel.styles.base.slide))),
  );

  // 4. set carousel functions

  const handleNext = () => {
    const nextIndex = index() < lastIndex() ? index() + 1 : index();
    setPrev(index());
    setIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = index() > 0 ? index() - 1 : index();
    setPrev(index());
    setIndex(nextIndex);
  };

  const handleResize = () => {
    setPrev(undefined); //prevent animation on resize
    setWidth(containerRef?.clientWidth);
  };

  onMount(() => window.addEventListener("resize", handleResize));

  onCleanup(() => window.removeEventListener("resize", handleResize));

  createEffect(() => {
    if (!motionProps.autoplay) return;
    const timer = setInterval(() => handleNext(), motionProps.autoplayDelay);
    onCleanup(() => clearInterval(timer));
  });

  // 5. return
  return (
    <div {...rest} ref={containerRef} class={carouselClasses()}>
      <Motion.div
        class="flex"
        ref={motionProps.slideRef}
        animate={{ x: -index() * (width() || containerRef.clientWidth || 0) }}
        transition={{
          ...motionProps.transition,
          duration:
            (index() === childsLength() && prev() === 0) ||
            (index() === 1 && prev() === childsLength() + 1) ||
            !prev()
              ? 0
              : motionProps.transition?.duration,
        }}
        onMotionComplete={() => {
          if (!motionProps.loop) return;
          //Jump to first
          if (index() === childsLength() + 1 && prev() === childsLength()) {
            setPrev(index());
            setIndex(1);
          }
          //Jump to last
          if (index() === 0 && prev() === 1) {
            setPrev(index());
            setIndex(childsLength());
          }
        }}
      >
        <div class={slideClasses()}>{childs.toArray()[childs.toArray().length - 1]}</div>
        <For each={childrens.toArray()}>{(child) => <div class={slideClasses()}>{child}</div>}</For>
        <div class={slideClasses()}>{childs.toArray()[0]}</div>
      </Motion.div>

      {/* arrows */}
      <Show when={!!mergedProps.prevArrow}>
        {mergedProps.prevArrow({
          loop: mergedProps.loop,
          handlePrev,
          activeIndex: index(),
          firstIndex: index() === firstIndex,
        })}
      </Show>
      <Show when={!!mergedProps.nextArrow}>
        {mergedProps.nextArrow({
          loop: mergedProps.loop,
          handleNext,
          activeIndex: index(),
          lastIndex: index() === childsLength(),
        })}
      </Show>
      {/* navigation */}
      <Show when={!!mergedProps.navigation}>
        {mergedProps.navigation({
          setActiveIndex: setIndex,
          activeIndex: index(),
          length: childsLength(),
        })}
      </Show>
    </div>
  );
};

// Carousel.propTypes = {
//   className: propTypesClassName,
//   children: propTypesChildren,
//   nextArrow: propTypesNextArrow,
//   prevArrow: propTypesPrevArrow,
//   navigation: propTypesNavigation,
//   autoplay: propTypesAutoplay,
//   autoplayDelay: propTypesAutoplayDelay,
//   transition: propTypesTransition,
//   loop: propTypesLoop,
//   slideRef: propTypesSlideRef,
// };

// Carousel.displayName = "MaterialTailwind.Carousel";

export default Carousel;
