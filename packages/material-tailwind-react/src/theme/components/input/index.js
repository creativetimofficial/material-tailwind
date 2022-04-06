import inputOutlined from "theme/components/input/inputOutlined/index";
import inputStandard from "theme/components/input/inputStandard/index";
import inputStatic from "theme/components/input/inputStatic/index";
import validColors from "utils/validColors";

const input = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "light-blue",
    label: "",
    labelProps: {},
    className: "",
  },
  valid: {
    variants: ["standard", "outlined", "static"],
    sizes: ["md", "lg"],
    colors: validColors,
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        minWidth: "min-w-[200px]",
      },
      input: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-blue-grey-700",
        fontFamily: "font-sans",
        fontWeight: "font-light",
        outline: "outline-0 focus:outlined-0",
        disabled: "disabled:bg-blue-grey-100 disabled:border-0",
        transition: "transition-all",
      },
      label: {
        display: "flex",
        width: "w-full",
        height: "h-full",
        userSelect: "select-none",
        pointerEvents: "pointer-events-none",
        position: "absolute",
        left: "left-0",
        fontWeight: "font-light",
        color: "peer-placeholder-shown:text-blue-grey-500",
        lineHeight: "leading-tight peer-focus:leading-tight",
        disabled:
          "peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-grey-500",
        transition: "transition-all",
      },
    },
    variants: {
      outlined: inputOutlined,
      standard: inputStandard,
      static: inputStatic,
    },
  },
};

export default input;
