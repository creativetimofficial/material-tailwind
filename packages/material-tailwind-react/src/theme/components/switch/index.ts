import switchColors from "./switchColors";

// types
import type {
  color,
  label,
  ripple,
  className,
  disabled,
  objectType,
} from "../../../types/components/checkbox";
import { propTypesColor } from "../../../types/components/checkbox";

export interface SwitchButtonStylesType {
  defaultProps?: {
    color?: color;
    label?: label;
    ripple?: ripple;
    className?: className;
    disabled?: disabled;
    containerProps?: objectType;
    labelProps?: objectType;
    circleProps?: objectType;
  };
  valid?: {
    colors?: string[];
  };
  styles?: {
    base?: {
      root?: object;
      container?: object;
      input?: object;
      circle?: object;
      ripple?: object;
      label?: object;
      disabled?: object;
    };
    colors: typeof switchColors;
  };
}

export const switchButton: SwitchButtonStylesType = {
  defaultProps: {
    color: "blue",
    label: "",
    ripple: true,
    className: "",
    disabled: false,
    containerProps: undefined,
    labelProps: undefined,
    circleProps: undefined,
  },
  valid: {
    colors: propTypesColor,
  },
  styles: {
    base: {
      root: {
        display: "inline-flex",
        alignItems: "items-center",
      },
      container: {
        position: "relative",
        display: "inline-block",
        width: "w-8",
        height: "h-4",
        cursor: "cursor-pointer",
        borderRadius: "rounded-full",
      },
      input: {
        peer: "peer",
        appearance: "appearance-none",
        width: "w-8",
        height: "h-4",
        position: "absolute",
        background: "bg-blue-gray-100",
        borderRadius: "rounded-full",
        cursor: "cursor-pointer",
        transition: "transition-colors duration-300",
      },
      circle: {
        bg: "bg-white",
        width: "w-5",
        height: "h-5",
        borderWidth: "border",
        borderColor: "border-blue-gray-100",
        borderRadius: "rounded-full",
        boxShadow: "shadow-md",
        position: "absolute",
        top: "top-2/4",
        left: "-left-1",
        transform: "-translate-y-2/4 peer-checked:translate-x-full",
        transition: "transition-all duration-300",
        cursor: "cursor-pointer",
        before: {
          content: "before:content['']",
          display: "before:block",
          bg: "before:bg-blue-gray-500",
          width: "before:w-10",
          height: "before:h-10",
          borderRadius: "before:rounded-full",
          position: "before:absolute",
          top: "before:top-2/4",
          left: "before:left-2/4",
          transform: "before:-translate-y-2/4 before:-translate-x-2/4",
          transition: "before:transition-opacity",
          opacity: "before:opacity-0 hover:before:opacity-10",
        },
      },
      ripple: {
        display: "inline-block",
        top: "top-2/4",
        left: "left-2/4",
        transform: "-translate-x-2/4 -translate-y-2/4",
        p: "p-5",
        borderRadius: "rounded-full",
      },
      label: {
        color: "text-gray-700",
        fontWeight: "font-light",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        mt: "mt-px",
        ml: "ml-3",
        mb: "mb-0",
      },
      disabled: {
        opacity: "opacity-50",
        pointerEvents: "pointer-events-none",
      },
    },
    colors: switchColors,
  },
};

export default switchButton;
