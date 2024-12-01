import React from "react";

// framer-motion
import { animate, m, useMotionValue, LazyMotion, domAnimation } from "framer-motion";

// @floating-ui
import { useMergeRefs } from "@floating-ui/react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import {
  children,
  prevArrow,
  nextArrow,
  navigation,
  autoplay,
  autoplayDelay,
  transition,
  loop,
  className,
  slideRef,
  propTypesChildren,
  propTypesClassName,
  propTypesNextArrow,
  propTypesPrevArrow,
  propTypesNavigation,
  propTypesAutoplay,
  propTypesAutoplayDelay,
  propTypesTransition,
  propTypesLoop,
  propTypesSlideRef,
} from "../../types/components/carousel";

export interface CarouselProps extends React.ComponentProps<"div"> {
  children: children;
  prevArrow?: prevArrow;
  nextArrow?: nextArrow;
  navigation?: navigation;
  autoplay?: autoplay;
  autoplayDelay?: autoplayDelay;
  transition?: transition;
  loop?: loop;
  className?: className;
  slideRef?: slideRef;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      prevArrow,
      nextArrow,
      navigation,
      autoplay,
      autoplayDelay,
      transition,
      loop,
      className,
      slideRef,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { carousel } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = carousel;
    const x = useMotionValue(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [index, setIndex] = React.useState(0);
    const childrens: any = React.Children.toArray(children);

    // 2. set default props
    prevArrow = prevArrow ?? defaultProps.prevArrow;
    nextArrow = nextArrow ?? defaultProps.nextArrow;
    navigation = navigation ?? defaultProps.navigation;
    autoplay = autoplay ?? defaultProps.autoplay;
    autoplayDelay = autoplayDelay ?? defaultProps.autoplayDelay;
    transition = transition ?? defaultProps.transition;
    loop = loop ?? defaultProps.loop;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const carouselClasses = twMerge(classnames(objectsToString(base.carousel)), className);
    const slideClasses = twMerge(classnames(objectsToString(base.slide)));

    // 4. set carousel functions
    const calculateNewX = React.useCallback(
      () => -index * (containerRef.current?.clientWidth || 0),
      [index],
    );

    const handleNext = React.useCallback(() => {
      const idx = loop ? 0 : index;
      setIndex(index + 1 === childrens.length ? idx : index + 1);
    }, [index, loop, childrens.length]);

    const handlePrev = () => {
      const idx = loop ? childrens.length - 1 : 0;
      setIndex(index - 1 < 0 ? idx : index - 1);
    };

    React.useEffect(() => {
      const controls = animate(x, calculateNewX(), transition);

      return controls.stop;
    }, [calculateNewX, index, x, transition]);

    React.useEffect(() => {
      window.addEventListener("resize", () => {
        animate(x, calculateNewX(), transition);
      });
    }, [calculateNewX, transition, x]);

    React.useEffect(() => {
      if (!autoplay) {
        return;
      }

      const timer = setInterval(() => handleNext(), autoplayDelay);

      return () => clearInterval(timer);
    }, [autoplay, handleNext, autoplayDelay]);

    const mergedRefs = useMergeRefs([containerRef, ref]);

    // 5. return
    return (
      <div {...rest} ref={mergedRefs} className={carouselClasses}>
        {childrens.map((child, i) => (
          <LazyMotion key={i} features={domAnimation}>
            <m.div
              ref={slideRef}
              className={slideClasses}
              style={{
                x,
                left: `${i * 100}%`,
                right: `${i * 100}%`,
              }}
            >
              {child}
            </m.div>
          </LazyMotion>
        ))}

        {/* arrows */}
        {prevArrow && prevArrow({ loop, handlePrev, activeIndex: index, firstIndex: index === 0 })}
        {nextArrow &&
          nextArrow({
            loop,
            handleNext,
            activeIndex: index,
            lastIndex: index === childrens.length - 1,
          })}

        {/* navigation */}
        {navigation &&
          navigation({ setActiveIndex: setIndex, activeIndex: index, length: childrens.length })}
      </div>
    );
  },
);

Carousel.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
  nextArrow: propTypesNextArrow,
  prevArrow: propTypesPrevArrow,
  navigation: propTypesNavigation,
  autoplay: propTypesAutoplay,
  autoplayDelay: propTypesAutoplayDelay,
  transition: propTypesTransition,
  loop: propTypesLoop,
  slideRef: propTypesSlideRef,
};

Carousel.displayName = "MaterialTailwind.Carousel";

export default Carousel;
