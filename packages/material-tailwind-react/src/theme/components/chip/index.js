import chipFilled from "theme/components/chip/chipFilled";
import chipGradient from "theme/components/chip/chipGradient";

const chip = {
  defaultProps: {
    variant: "filled",
    color: "light-blue",
    icon: "",
    show: false,
    dismissble: {
      action: false,
      onClose: false,
    },
    animate: {},
    transitionProps: {},
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
    animation: {
      transition: {
        transitionProperty: "opacity",
        transitionDuration: "300ms",
        transitionTimingFunction: "linear",
        opacity: 0,
      },
      state: {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      },
    },
  },
};

export default chip;
