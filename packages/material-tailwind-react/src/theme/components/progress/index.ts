import progressFilled from "./progressFilled";
import progressGradient from "./progressGradient";

// types
import type {
  variant,
  color,
  value,
  label,
  barProps,
  className,
} from "../../../types/components/progress";
import { propTypesVariant, propTypesColor } from "../../../types/components/progress";

export interface ProgressStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    value?: value;
    label?: label;
    barProps?: barProps;
    className?: className;
  };
  valid: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      container?: {
        initial?: object;
        withLabel?: object;
      };
      bar?: object;
    };
    variants?: {
      filled?: typeof progressFilled;
      gradient?: typeof progressGradient;
    };
  };
}

export const progress: ProgressStylesType = {
  defaultProps: {
    variant: "filled",
    color: "blue",
    value: 0,
    label: false,
    className: "",
    barProps: {},
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      container: {
        initial: {
          display: "flex",
          justifyContent: "flex-start",
          bg: "bg-blue-gray-50",
          overflow: "overflow-hidden",
          width: "w-full",
          height: "h-1.5",
          borderRadius: "rounded-sm",
          fontFamily: "font-sans",
          fontSize: "text-xs",
          fontWeight: "font-medium",
        },
        withLabel: {
          height: "h-4",
          borderRadius: "rounded",
        },
      },
      bar: {
        display: "flex",
        justifyContent: "justify-center",
        alignItems: "items-center",
        height: "h-full",
      },
    },
    variants: {
      filled: progressFilled,
      gradient: progressGradient,
    },
  },
};

export default progress;
