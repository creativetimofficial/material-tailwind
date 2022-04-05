import switchColors from "theme/components/switch/switchColors";
import validColors from "utils/validColors";

const switchButton = {
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
        display: "inline-block",
        width: "w-8",
        height: "h-4",
        cursor: "cursor-pointer",
        borderRadius: "rounded-full",
      },
      input: {
        peer: "peer",
        appearance: "appearance-none",
        width: "w-8",
        height: "h-4",
        position: "absolute",
        background: "bg-blue-grey-100",
        borderRadius: "rounded-full",
        cursor: "cursor-pointer",
        transition: "transition-colors duration-300",
      },
      circle: {
        bg: "bg-white",
        width: "w-5",
        height: "h-5",
        borderWidth: "border",
        borderColor: "border-blue-grey-100",
        borderRadius: "rounded-full",
        boxShadow: "shadow-md",
        position: "absolute",
        top: "top-2/4",
        left: "-left-1",
        transform: "-translate-y-2/4 peer-checked:translate-x-full",
        transition: "transition-all duration-300",
        cursor: "cursor-pointer",
        before: {
          content: "before:content['']",
          display: "before:block",
          bg: "before:bg-blue-grey-500",
          width: "before:w-10",
          height: "before:h-10",
          borderRadius: "before:rounded-full",
          position: "before:absolute",
          top: "before:top-2/4",
          left: "before:left-2/4",
          transform: "before:-translate-y-2/4 before:-translate-x-2/4",
          transition: "before:transition-opacity",
          opacity: "before:opacity-0 hover:before:opacity-10",
        },
      },
      ripple: {
        display: "inline-block",
        top: "top-2/4",
        left: "left-2/4",
        transform: "-translate-x-2/4 -translate-y-2/4",
        p: "p-5",
        borderRadius: "rounded-full",
      },
      label: {
        color: "text-grey-700",
        fontWeight: "font-light",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        mt: "mt-px",
        ml: "ml-3",
      },
    },
    colors: switchColors,
  },
};

export default switchButton;
