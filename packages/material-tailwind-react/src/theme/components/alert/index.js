import alertFilled from "theme/components/alert/alertFilled";
import alertGradient from "theme/components/alert/alertGradient";

const alert = {
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
    root: "relative block w-full",
    spacing: {
      x: "px-4",
      y: "py-4",
    },
    border: {
      radius: "rounded-md",
    },
    typography: {
      family: "font-sans",
      size: "text-base",
      weight: "font-regular",
    },
    variants: {
      filled: alertFilled,
      gradient: alertGradient,
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

export default alert;
