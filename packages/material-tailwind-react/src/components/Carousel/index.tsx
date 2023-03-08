import React from "react";

// framer-motion
import { animate, AnimationOptions, motion, useMotionValue } from "framer-motion";

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
  transitionDuration,
  loop,
  className,
  propTypesChildren,
  propTypesClassName,
  propTypesNextArrow,
  propTypesPrevArrow,
  propTypesNavigation,
  propTypesAutoplay,
  propTypesAutoplayDelay,
  propTypesTransitionDuration,
  propTypesLoop,
} from "../../types/components/carousel";

export interface CarouselProps extends React.ComponentProps<"div"> {
  children: children;
  prevArrow?: prevArrow;
  nextArrow?: nextArrow;
  navigation?: navigation;
  autoplay?: autoplay;
  autoplayDelay?: autoplayDelay;
  transitionDuration?: transitionDuration;
  loop?: loop;
  className?: className;
}

const transition: AnimationOptions<any> = {
  type: "spring",
  bounce: 0,
};

export function Carousel({
  children,
  prevArrow,
  nextArrow,
  navigation,
  autoplay,
  autoplayDelay,
  transitionDuration,
  loop,
  className,
  ...rest
}: CarouselProps) {
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
  className = className ?? defaultProps.className;
  prevArrow = prevArrow ?? defaultProps.prevArrow;
  nextArrow = nextArrow ?? defaultProps.nextArrow;
  navigation = navigation ?? defaultProps.navigation;
  autoplay = autoplay ?? defaultProps.autoplay;
  autoplayDelay = autoplayDelay ?? defaultProps.autoplayDelay;
  transitionDuration = transitionDuration ?? defaultProps.transitionDuration;
  loop = loop ?? defaultProps.loop;

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
    const controls = animate(x, calculateNewX(), { ...transition, duration: transitionDuration });

    return controls.stop;
  }, [calculateNewX, index, x, transitionDuration]);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      animate(x, calculateNewX(), { ...transition, duration: transitionDuration });
    })
  }, [calculateNewX, transitionDuration, x])

  React.useEffect(() => {
    if (!autoplay) {
      return;
    }

    const timer = setInterval(() => handleNext(), autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, handleNext, autoplayDelay]);

  // 5. return
  return (
    <div {...rest} ref={containerRef} className={carouselClasses}>
      {childrens.map((child, i) => (
        <motion.div
          key={i}
          className={slideClasses}
          style={{
            x,
            left: `${i * 100}%`,
            right: `${i * 100}%`,
          }}
        >
          {child}
        </motion.div>
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
}

Carousel.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
  nextArrow: propTypesNextArrow,
  prevArrow: propTypesPrevArrow,
  navigation: propTypesNavigation,
  autoplay: propTypesAutoplay,
  autoplayDelay: propTypesAutoplayDelay,
  transitionDuration: propTypesTransitionDuration,
  loop: propTypesLoop,
};

Carousel.displayName = "MaterialTailwind.Carousel";

export default Carousel;
