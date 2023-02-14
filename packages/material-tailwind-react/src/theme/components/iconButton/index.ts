import buttonFilled from "../button/buttonFilled";
import buttonGradient from "../button/buttonGradient";
import buttonOutlined from "../button/buttonOutlined";
import buttonText from "../button/buttonText";

// types
import type {
  variant,
  size,
  color,
  fullWidth,
  ripple,
  className,
} from "../../../types/components/button";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/button";

export interface IconButtonStyleTypes {
  defaultProps?: {
    variant?: variant;
    size?: size;
    color?: color;
    fullWidth?: fullWidth;
    ripple?: ripple;
    className?: className;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: object;
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
    variants?: {
      filled?: typeof buttonFilled;
      gradient?: typeof buttonGradient;
      outlined?: typeof buttonOutlined;
      text?: typeof buttonText;
    };
  };
}

export const iconButton: IconButtonStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "blue",
    fullWidth: false,
    ripple: true,
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      position: "relative",
      verticalAlign: "align-middle",
      userSelect: "select-none",
      fontFamily: "font-sans",
      fontWeight: "font-medium",
      textAlign: "text-center",
      textTransform: "uppercase",
      transition: "transition-all",
      disabled: "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
    },
    sizes: {
      sm: {
        width: "w-8",
        maxWidth: "max-w-[32px]",
        height: "h-8",
        maxHeight: "max-h-[32px]",
        borderRadius: "rounded-lg",
        fontSize: "text-xs",
      },
      md: {
        width: "w-10",
        maxWidth: "max-w-[40px]",
        height: "h-10",
        maxHeight: "max-h-[40px]",
        borderRadius: "rounded-lg",
        fontSize: "text-xs",
      },
      lg: {
        width: "w-12",
        maxWidth: "max-w-[48px]",
        height: "h-12",
        maxHeight: "max-h-[48px]",
        borderRadius: "rounded-lg",
        fontSize: "text-sm",
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};

export default iconButton;
