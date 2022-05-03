import chipFilled from "./chipFilled";
import chipGradient from "./chipGradient";
import chipCloseButtonColors from "./chipCloseButtonColors";

// types
import type {
  variant,
  color,
  icon,
  show,
  dismissible,
  animate,
  className,
} from "../../../types/components/chip";
import { propTypesVariant, propTypesColor } from "../../../types/components/chip";

export interface ChipStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    icon?: icon;
    show?: show;
    dismissble?: dismissible;
    animate?: animate;
    className?: className;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: object;
    variants?: {
      filled?: typeof chipFilled;
      gradient?: typeof chipGradient;
    };
    closeButtonColor?: typeof chipCloseButtonColors;
  };
}

export const chip: ChipStylesType = {
  defaultProps: {
    variant: "filled",
    color: "blue",
    icon: undefined,
    show: true,
    dismissble: {
      action: "",
      onClose: () => {},
    },
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      position: "relative",
      display: "inline-block",
      align: "align-baseline",
      fontFamily: "font-sans",
      fontSize: "text-xs",
      fontWeight: "font-bold",
      textTransform: "uppercase",
      textAlign: "center",
      lineHeight: "leading-none",
      whiteSpace: "whitespace-nowrap",
      py: "py-2",
      px: "px-3.5",
      borderRadius: "rounded-lg",
      userSelect: "select-none",
    },
    variants: {
      filled: chipFilled,
      gradient: chipGradient,
    },
    closeButtonColor: chipCloseButtonColors,
  },
};

export default chip;
