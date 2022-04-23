import chipFilled from "./chipFilled";
import chipGradient from "./chipGradient";
import chipCloseButtonColors from "./chipCloseButtonColors";
import validColors from "../../../utils/validColors";

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
      display: "inline-block",
      align: "align-baseline",
      fontFamily: "font-sans",
      fontSize: "text-xs",
      fontWeight: "font-bold",
      textTransform: "uppercase",
      textAlign: "center",
      lineHeight: "leading-none",
      whiteSpace: "whitespace-nowrap",
      py: "py-2",
      px: "px-3.5",
      borderRadius: "rounded-md",
      userSelect: "select-none",
    },
    variants: {
      filled: chipFilled,
      gradient: chipGradient,
    },
    closeButtonColor: chipCloseButtonColors,
  },
};

export default chip;
