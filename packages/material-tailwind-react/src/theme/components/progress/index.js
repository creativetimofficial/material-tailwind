import progressFilled from "theme/components/progress/progressFilled";
import progressGradient from "theme/components/progress/progressGradient";

const alert = {
  defaultProps: {
    variant: "filled",
    color: "light-blue",
    value: 0,
    label: false,
    className: "",
    barProps: {},
  },
  styles: {
    root: "bg-blue-grey-100 overflow-hidden flex",
    spacing: {
      width: "w-full",
      height: "h-1.5",
    },
    border: {
      radius: "rounded-sm",
    },
    typography: {
      family: "font-sans",
      size: "text-xs",
      weight: "font-medium",
    },
    variants: {
      filled: progressFilled,
      gradient: progressGradient,
    },
    withLabel: {
      spacing: {
        width: "w-full",
        height: "h-4",
      },
      border: {
        radius: "rounded",
      },
    },
    bar: {
      root: "flex justify-center items-center h-full",
    },
  },
};

export default alert;
