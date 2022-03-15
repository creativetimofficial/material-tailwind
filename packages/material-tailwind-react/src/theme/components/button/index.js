import buttonFilled from "@material-tailwind/react/theme/components/button/buttonFilled";
import buttonGradient from "@material-tailwind/react/theme/components/button/buttonGradient";

export const button = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "hello",
    fullWidth: false,
    className: "",
  },
  styles: {
    root: "inline-block align-middle select-none",
    typography: {
      family: "font-sans",
      size: "text-xs",
      weight: "font-bold",
      align: "text-center",
    },
    size: {
      sm: {
        padding: {
          x: "px-6",
          y: "py-2.5",
        },
        border: {
          width: "border-0",
          radius: "rounded-lg",
          color: "border-transparent",
        },
        typography: {
          size: "size-xs",
          weight: "font-bold",
        },
      },
      md: {
        padding: {
          x: "px-6",
          y: "py-2.5",
        },
        border: {
          width: "border-0",
          radius: "rounded-lg",
          color: "border-transparent",
        },
        typography: {
          size: "size-xs",
          weight: "font-bold",
        },
      },
      lg: {
        padding: {
          x: "px-7",
          y: "py-3",
        },
        border: {
          width: "border-0",
          radius: "rounded-lg",
          color: "border-transparent",
        },
        typography: {
          size: "size-sm",
          weight: "font-bold",
        },
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
    },
    fullWidth: "block w-full",
  },
};

export default button;
