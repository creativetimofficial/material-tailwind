import inputOutlined from "./inputOutlined";
import inputStandard from "./inputStandard";
import inputStatic from "./inputStatic";
import validColors from "../../../utils/validColors";

const input = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "light-blue",
    label: "",
    error: false,
    success: false,
    icon: "",
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
        disabled: "disabled:bg-blue-grey-50 disabled:border-0",
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
      icon: {
        position: "absolute",
        color: "text-blue-grey-500",
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
