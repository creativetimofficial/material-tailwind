import progressFilled from "theme/components/progress/progressFilled";
import progressGradient from "theme/components/progress/progressGradient";
import validColors from "utils/validColors";

const alert = {
  defaultProps: {
    variant: "filled",
    color: "light-blue",
    value: 0,
    label: false,
    className: "",
    barProps: {},
  },
  valid: {
    variants: ["filled", "gradient"],
    colors: validColors,
  },
  styles: {
    base: {
      container: {
        display: "flex",
        justifyContent: "flex-start",
        bg: "bg-blue-grey-50",
        overflow: "overflow-hidden",
        width: "w-full",
        height: "h-1.5",
        borderRadius: "rounded-sm",
        fontFamily: "font-sans",
        fontSize: "text-xs",
        fontWeight: "font-medium",
      },
      bar: {
        display: "flex",
        justifyContent: "justify-center",
        alignItems: "items-center",
        height: "h-full",
      },
    },
    variants: {
      filled: progressFilled,
      gradient: progressGradient,
    },
    withLabel: {
      height: "h-4",
      borderRadius: "rounded",
    },
  },
};

export default alert;
