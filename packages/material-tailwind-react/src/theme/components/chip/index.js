import chipFilled from "theme/components/chip/chipFilled";
import chipGradient from "theme/components/chip/chipGradient";

const chip = {
  defaultProps: {
    variant: "filled",
    color: "light-blue",
    icon: "",
    show: true,
    dismissble: {
      action: "",
      onClose: () => {},
    },
    animate: {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    },
    className: "",
  },
  styles: {
    root: "relative inline-block whitespace-nowrap align-baseline select-none",
    spacing: {
      x: "px-3.5",
      y: "py-2",
    },
    border: {
      radius: "rounded-md",
    },
    typography: {
      family: "font-sans",
      size: "text-xs",
      weight: "font-bold",
      transform: "uppercase",
      align: "center",
      lineHeight: "leading-none",
    },
    variants: {
      filled: chipFilled,
      gradient: chipGradient,
    },
  },
};

export default chip;
