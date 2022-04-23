import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";
import validColors from "../../../utils/validColors";

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
      unmount: {},
      mount: {},
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
