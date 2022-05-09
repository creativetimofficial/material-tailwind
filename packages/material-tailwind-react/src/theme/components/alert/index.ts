import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";

// types
import type {
  variant,
  color,
  icon,
  show,
  dismissible,
  animate,
  className,
} from "../../../types/components/alert";
import { propTypesVariant, propTypesColor } from "../../../types/components/alert";

export interface AlertStylesType {
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
      filled?: typeof alertFilled;
      gradient?: typeof alertGradient;
    };
  };
}

export const alert: AlertStylesType = {
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
      display: "block",
      width: "w-full",
      fontFamily: "font-sans",
      fontSize: "text-base",
      fontWeight: "font-regular",
      px: "px-4",
      py: "py-4",
      borderRadius: "rounded-lg",
    },
    variants: {
      filled: alertFilled,
      gradient: alertGradient,
    },
  },
};

export default alert;
