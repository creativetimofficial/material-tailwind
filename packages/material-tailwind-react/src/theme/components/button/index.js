import buttonFilled from "theme/components/button/buttonFilled";
import buttonGradient from "theme/components/button/buttonGradient";
import buttonOutlined from "theme/components/button/buttonOutlined";
import buttonText from "theme/components/button/buttonText";

const button = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "light-blue",
    fullWidth: false,
    ripple: true,
    className: "",
  },
  styles: {
    root: "inline-block align-middle select-none",
    typography: {
      family: "font-sans",
      size: "text-xs",
      weight: "font-medium",
      align: "text-center",
      transform: "uppercase",
    },
    sizes: {
      sm: {
        padding: {
          x: "px-4",
          y: "py-2",
        },
        border: {
          radius: "rounded-lg",
          color: "border-transparent",
        },
        typography: {
          size: "text-xs",
          weight: "font-medium",
        },
      },
      md: {
        padding: {
          x: "px-6",
          y: "py-3",
        },
        border: {
          radius: "rounded-lg",
          color: "border-transparent",
        },
        typography: {
          size: "text-xs",
          weight: "font-medium",
        },
      },
      lg: {
        padding: {
          x: "px-7",
          y: "py-3.5",
        },
        border: {
          radius: "rounded-lg",
          color: "border-transparent",
        },
        typography: {
          size: "text-sm",
          weight: "font-medium",
        },
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
    fullWidth: "block w-full",
    transition: "transition-all",
  },
};

export default button;
