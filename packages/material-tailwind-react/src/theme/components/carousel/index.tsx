import React from "react";

// types
import type {
  prevArrow,
  nextArrow,
  navigation,
  autoplay,
  autoplayDelay,
  transition,
  loop,
  className,
} from "../../../types/components/carousel";

export interface CarouselStylesType {
  defaultProps?: {
    prevArrow?: prevArrow;
    nextArrow?: nextArrow;
    navigation?: navigation;
    autoplay?: autoplay;
    autoplayDelay?: autoplayDelay;
    transition?: transition;
    loop?: loop;
    className?: className;
  };
  styles?: {
    base?: {
      carousel?: object;
      slide?: object;
    };
  };
}

export const carousel: CarouselStylesType = {
  defaultProps: {
    prevArrow: ({ loop, handlePrev, firstIndex }) => {
      return (
        <button
          onClick={handlePrev}
          disabled={!loop && firstIndex}
          className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            className="-ml-1 h-7 w-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      );
    },
    nextArrow: ({ loop, handleNext, lastIndex }) => (
      <button
        onClick={handleNext}
        disabled={!loop && lastIndex}
        className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          className="ml-1 h-7 w-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    ),
    navigation: ({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
              activeIndex === i ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    ),
    autoplay: false,
    autoplayDelay: 5000,
    transition: {
      type: "tween",
      duration: 0.5,
    },
    loop: false,
    className: "",
  },
  styles: {
    base: {
      carousel: {
        position: "relative",
        width: "w-full",
        height: "h-full",
        overflowX: "overflow-x-hidden",
        display: "flex",
      },

      slide: {
        width: "w-full",
        height: "h-full",
        display: "inline-block",
        flex: "flex-none",
      },
    },
  },
};

export default carousel;
