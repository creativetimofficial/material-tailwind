import checkboxColors from "./checkboxColors";
import validColors from "../../../utils/validColors";

const checkbox = {
  defaultProps: {
    color: "light-blue",
    label: "",
    icon: "",
    containerProps: {},
    labelProps: {},
    ripple: true,
    className: "",
  },
  valid: {
    colors: validColors,
  },
  styles: {
    base: {
      root: {
        display: "inline-flex",
        alignItems: "items-center",
      },
      container: {
        position: "relative",
        display: "flex",
        alignItems: "items-center",
        cursor: "cursor-pointer",
        p: "p-3",
        borderRadius: "rounded-full",
      },
      input: {
        peer: "peer",
        position: "relative",
        appearance: "appearance-none",
        width: "w-5",
        height: "h-5",
        borderWidth: "border",
        borderRadius: "rounded-md",
        borderColor: "border-blue-grey-200",
        cursor: "cursor-pointer",
        transition: "transition-all",
        before: {
          content: "before:content['']",
          display: "before:block",
          bg: "before:bg-blue-grey-500",
          width: "before:w-12",
          height: "before:h-12",
          borderRadius: "before:rounded-full",
          position: "before:absolute",
          top: "before:top-2/4",
          left: "before:left-2/4",
          transform: "before:-translate-y-2/4 before:-translate-x-2/4",
          opacity: "before:opacity-0 hover:before:opacity-10",
          transition: "before:transition-opacity",
        },
      },
      label: {
        color: "text-grey-700",
        fontWeight: "font-light",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        mt: "mt-px",
      },
    },
    colors: checkboxColors,
  },
};

export default checkbox;
