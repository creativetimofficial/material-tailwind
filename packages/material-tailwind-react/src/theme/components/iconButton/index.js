import buttonFilled from "theme/components/button/buttonFilled";
import buttonGradient from "theme/components/button/buttonGradient";
import buttonOutlined from "theme/components/button/buttonOutlined";
import buttonText from "theme/components/button/buttonText";
import validColors from "utils/validColors";

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
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};

export default button;
