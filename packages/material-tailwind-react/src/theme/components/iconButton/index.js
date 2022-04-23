import iconButtonFilled from "./iconButtonFilled";
import iconButtonGradient from "./iconButtonGradient";
import iconButtonOutlined from "./iconButtonOutlined";
import iconButtonText from "./iconButtonText";
import validColors from "../../../utils/validColors";

const button = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "light-blue",
    fullWidth: false,
    ripple: true,
    className: "",
  },
  valid: {
    variants: ["filled", "outlined", "gradient", "text"],
    sizes: ["sm", "md", "lg"],
    colors: validColors,
  },
  styles: {
    base: {
      display: "inline-grid",
      placeItems: "place-items-center",
      userSelect: "none",
      fontFamily: "font-sans",
      fontWeight: "font-medium",
      textAlign: "text-center",
      textTransform: "uppercase",
      transition: "transition-all",
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
      filled: iconButtonFilled,
      gradient: iconButtonGradient,
      outlined: iconButtonOutlined,
      text: iconButtonText,
    },
  },
};

export default button;
