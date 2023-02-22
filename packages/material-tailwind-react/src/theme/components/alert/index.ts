import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";
import alertOutlined from "./alertOutlined";
import alertGhost from "./alertGhost";

// types
import type {
  variant,
  color,
  icon,
  open,
  action,
  onClose,
  animate,
  className,
} from "../../../types/components/alert";
import { propTypesVariant, propTypesColor } from "../../../types/components/alert";

export interface AlertStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    icon?: icon;
    open?: open;
    action?: action;
    onClose?: onClose;
    animate?: animate;
    className?: className;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      alert?: object;
      action?: object;
    };
    variants?: {
      alert?: {
        filled?: typeof alertFilled;
        gradient?: typeof alertGradient;
        outlined?: typeof alertOutlined;
        ghost?: typeof alertGhost;
      };
      action?: {
        filled?: typeof alertFilled;
        gradient?: typeof alertGradient;
        outlined?: typeof alertOutlined;
        ghost?: typeof alertGhost;
      };
    };
  };
}

export const alert: AlertStylesType = {
  defaultProps: {
    variant: "filled",
    color: "blue",
    icon: undefined,
    open: true,
    action: undefined,
    onClose: undefined,
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
      alert: {
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
      action: {
        position: "!absolute",
        top: "top-3.5",
        right: "right-3.5",
        rounded: "rounded-lg",
        padding: "p-0.5",
        overflow: "overflow-hidden",
        transition: "transition-all",
      },
    },
    variants: {
      alert: {
        filled: alertFilled,
        gradient: alertGradient,
        outlined: alertOutlined,
        ghost: alertGhost,
      },
      action: {
        filled: alertFilled,
        gradient: alertGradient,
        outlined: alertOutlined,
        ghost: alertGhost,
      },
    },
  },
};

export default alert;
