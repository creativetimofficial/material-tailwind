import alertFilled from "theme/components/alert/alertFilled";
import alertGradient from "theme/components/alert/alertGradient";

const alert = {
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
    root: "relative block w-full",
    spacing: {
      x: "px-4",
      y: "py-4",
    },
    border: {
      radius: "rounded-lg",
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
  },
};

export default alert;
