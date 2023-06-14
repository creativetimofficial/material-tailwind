// types
import type {
  color,
  size,
  min,
  max,
  step,
  inputProps,
  thumbClassName,
  trackClassName,
  barClassName,
} from "../../../types/components/slider";
import { propTypesSize } from "../../../types/components/slider";
import { colorPropType } from "../../../types/generic";
import sliderColor from "./sliderColor";

export interface SliderStyleTypes {
  defaultProps: {
    color: color;
    size: size;
    min?: min;
    max?: max;
    step: step;
    class: string;
    thumbClassName: thumbClassName;
    trackClassName: trackClassName;
    barClassName: barClassName;
    inputProps?: inputProps;
  };
  valid: {
    sizes: size[];
    colors: color[];
  };
  styles: {
    base: {
      container: Record<string, string>;
      slider: Record<string, string>;
      track: Record<string, string>;
      thumb: Record<string, string>;
      bar: Record<string, string>;
    };
    sizes: {
      sm: {
        container: object;
        slider: object;
        track: object;
        thumb: object;
        bar: object;
      };
      md: {
        container: object;
        slider: object;
        track: object;
        thumb: object;
        bar: object;
      };
      lg: {
        container: object;
        slider: object;
        track: object;
        thumb: object;
        bar: object;
      };
    };
    colors: typeof sliderColor;
  };
}

export const slider: SliderStyleTypes = {
  defaultProps: {
    color: "blue",
    size: "md",
    min: undefined,
    max: undefined,
    step: "any",
    class: "",
    trackClassName: "",
    thumbClassName: "",
    barClassName: "",
    inputProps: undefined,
  },
  valid: {
    sizes: [...propTypesSize],
    colors: [...colorPropType],
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        minWidth: "min-w-[200px]",
      },
      slider: {
        width: "w-full",
        position: "absolute",
        inset: "inset-0",
        backgroundColor: "bg-transparent",
        cursor: "cursor-pointer",
        outline: "focus:outline-none focus:outline-0",
        appearance: "appearance-none [-webkit-appearance:none]",
      },
      track: {
        height: "[&::-webkit-slider-runnable-track]:h-full [&::-moz-range-track]:h-full",
        borderRadius:
          "[&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:rounded-full",
        backgroundColor:
          "[&::-webkit-slider-runnable-track]:bg-blue-gray-100 [&::-moz-range-track]:bg-blue-gray-100",
      },
      thumb: {
        appearance:
          "[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:[-webkit-appearance:none] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:[-webkit-appearance:none]",
        borderRadius: "[&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:rounded-full",
        border: "[&::-moz-range-thumb]:border-0 [&::-webkit-slider-thumb]:border-0",
        ringWidth: "[&::-moz-range-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-2",
        ringColor: "[&::-moz-range-thumb]:ring-current [&::-webkit-slider-thumb]:ring-current",
        backgroundColor: "[&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:bg-white",
        position: "[&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:relative",
        zIndex: "[&::-moz-range-thumb]:z-20 [&::-webkit-slider-thumb]:z-20",
      },
      bar: {
        position: "absolute",
        inset: "inset-0",
        zIndex: "z-10",
        borderRadius: "rounded-l-full",
        height: "h-full",
        pointerEvents: "pointer-events-none",
        backgroundColor: "bg-current",
      },
    },
    sizes: {
      sm: {
        container: {
          height: "h-1",
        },
        thumb: {
          width: "[&::-moz-range-thumb]:w-2.5 [&::-webkit-slider-thumb]:w-2.5",
          height: "[&::-moz-range-thumb]:h-2.5 [&::-webkit-slider-thumb]:h-2.5",
          marginTop: "[&::-moz-range-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:-mt-[3px]",
        },
        slider: {},
        track: {},
        bar: {},
      },
      md: {
        container: {
          height: "h-2",
        },
        thumb: {
          width: "[&::-moz-range-thumb]:w-3.5 [&::-webkit-slider-thumb]:w-3.5",
          height: "[&::-moz-range-thumb]:h-3.5 [&::-webkit-slider-thumb]:h-3.5",
          marginTop: "[&::-moz-range-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:-mt-[3px]",
        },
        slider: {},
        track: {},
        bar: {},
      },
      lg: {
        container: {
          height: "h-3",
        },
        thumb: {
          width: "[&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:w-5",
          height: "[&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:h-5",
          marginTop: "[&::-moz-range-thumb]:-mt-1 [&::-webkit-slider-thumb]:-mt-1",
        },
        slider: {},
        track: {},
        bar: {},
      },
    },
    colors: sliderColor,
  },
};

export default slider;
