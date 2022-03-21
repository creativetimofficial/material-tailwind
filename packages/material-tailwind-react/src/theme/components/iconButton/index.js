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
    root: "grid place-items-center inline-block align-middle select-none",
    typography: {
      family: "font-sans",
      size: "text-xs",
      weight: "font-semibold",
      align: "text-center",
      transform: "uppercase",
    },
    sizes: {
      sm: {
        spacing: {
          width: "w-8 max-w-[32px]",
          height: "h-8 max-h-[32px]",
        },
        border: {
          radius: "rounded-lg",
        },
        typography: {
          size: "text-xs",
          weight: "font-medium",
        },
      },
      md: {
        spacing: {
          x: "w-10 max-w-[40px]",
          y: "h-10 max-h-[40px]",
        },
        border: {
          radius: "rounded-lg",
        },
        typography: {
          size: "text-xs",
          weight: "font-medium",
        },
      },
      lg: {
        spacing: {
          width: "w-12 max-w-[48px]",
          height: "h-12 max-h-[48px]",
        },
        border: {
          radius: "rounded-lg",
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
    transition: "transition-all",
  },
};

export default button;
