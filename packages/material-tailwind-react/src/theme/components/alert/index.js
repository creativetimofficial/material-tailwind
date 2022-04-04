import alertFilled from "theme/components/alert/alertFilled";
import alertGradient from "theme/components/alert/alertGradient";
import validColors from "utils/validColors";

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
  valid: {
    variants: ["filled", "gradient"],
    colors: validColors,
  },
  styles: {
    base: {
      position: "relative",
      display: "block",
      width: "w-full",
      fontFamily: "font-sans",
      fontSize: "text-base",
      fontWeight: "font-regular",
      px: "px-4",
      py: "py-4",
      borderRadius: "rounded-lg",
    },
    variants: {
      filled: alertFilled,
      gradient: alertGradient,
    },
  },
};

export default alert;
