import { For } from "solid-js";
// types
import type { DeepOmit, DeepPick, DeepRequired } from "ts-essentials";
import type {
  autoplay,
  autoplayDelay,
  loop,
  navigation,
  nextArrow,
  prevArrow,
  transition,
} from "../../../types/components/carousel";

export interface CarouselStylesType {
  defaultProps: {
    prevArrow: prevArrow;
    nextArrow: nextArrow;
    navigation: navigation;
    autoplay: autoplay;
    autoplayDelay: autoplayDelay;
    transition?: transition;
    loop: loop;
    class: string;
  };
  styles: {
    base: {
      carousel: object;
      slide: object;
    };
  };
}

export const carousel: CarouselStylesType = {
  defaultProps: {
    prevArrow: (props) => {
      return (
        <button
          onClick={() => props.handlePrev()}
          disabled={!props.loop && props.firstIndex}
          class="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
        >
          <svg
            class="-ml-1 h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      );
    },
    nextArrow: (props) => (
      <button
        onClick={() => props.handleNext()}
        disabled={!props.loop && props.lastIndex}
        class="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="ml-1 h-7 w-7"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    ),
    navigation: (props) => (
      <div class="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        <For each={new Array(props.length).fill("")}>
          {(_, i) => (
            <span
              class={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                props.activeIndex === i() + 1 ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => props.setActiveIndex(i() + 1)}
            />
          )}
        </For>
      </div>
    ),
    autoplay: false,
    autoplayDelay: 5000,
    transition: {
      easing: "ease-out",
      duration: 0.5,
    },
    loop: false,
    class: "",
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
