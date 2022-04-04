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
      display: "inline-block",
      verticalAlign: "middle",
      userSelect: "none",
      fontFamily: "font-sans",
      fontWeight: "font-medium",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "transition-all",
    },
    sizes: {
      sm: {
        fontSize: "text-xs",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-lg",
      },
      md: {
        fontSize: "text-xs",
        py: "py-3",
        px: "px-6",
        borderRadius: "rounded-lg",
      },
      lg: {
        fontSize: "text-sm",
        py: "py-3.5",
        px: "px-7",
        borderRadius: "rounded-lg",
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
    fullWidth: "block w-full",
  },
};

export default button;
