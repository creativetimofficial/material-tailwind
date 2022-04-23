import buttonFilled from "./buttonFilled";
import buttonGradient from "./buttonGradient";
import buttonOutlined from "./buttonOutlined";
import buttonText from "./buttonText";
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
      initial: {
        display: "inline-block",
        verticalAlign: "middle",
        userSelect: "none",
        fontFamily: "font-sans",
        fontWeight: "font-medium",
        textAlign: "center",
        textTransform: "uppercase",
        transition: "transition-all",
      },
      fullWidth: {
        display: "block",
        width: "w-full",
      },
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
  },
};

export default button;
