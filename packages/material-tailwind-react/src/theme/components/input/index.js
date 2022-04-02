import inputOutlined from "theme/components/input/inputOutlined/index";

const input = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "light-blue",
    label: "",
    inputProps: {},
    labelProps: {},
    className: "",
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
      },
      input: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-grey-800",
        fontFamily: "font-sans",
        fontWeight: "font-light",
        outline: "outline-0 focus:outlined-0",
        disabled: "disabled:bg-grey-300 disabled:border-0",
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
        simple: {
          fontSize: "peer-placeholder-shown:text-sm",
          color: "peer-placeholder-shown:text-grey-500",
        },
        floated: {
          fontSize: "text-[11px] peer-focus:text-[11px]",
          lineHeight: "leading-tight peer-focus:leading-tight",
        },
        disabled:
          "peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-grey-500",
        transition: "transition-all",
      },
    },
    variants: {
      outlined: inputOutlined,
    },
  },
};

export default input;
