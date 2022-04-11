import selectOutlined from "theme/components/select/selectOutlined/index";
import selectStandard from "theme/components/select/selectStandard/index";
import selectStatic from "theme/components/select/selectStatic/index";
import validColors from "utils/validColors";

const select = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "light-blue",
    label: "",
    error: false,
    success: false,
    arrow: "",
    icon: "",
    labelProps: {},
    menuProps: {},
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
      select: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-blue-grey-700",
        fontFamily: "font-sans",
        fontWeight: "font-light",
        textAlign: "text-left",
        outline: "outline-0 focus:outlined-0",
        disabled: "disabled:bg-blue-grey-100 disabled:border-0",
        transition: "transition-all",
      },
      arrow: {
        base: {
          position: "absolute",
          top: "top-2/4",
          right: "right-2",
          pt: "pt-px",
          width: "w-5",
          height: "h-5",
          color: "text-blue-grey-400",
          transform: "rotate-0 -translate-y-2/4",
          transition: "transition-all",
        },
        active: {
          transform: "rotate-180",
          pt: "pt-0",
          pb: "pb-px",
        },
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
        transition: "transition-all",
      },
      menu: {
        position: "absolute",
        width: "w-full",
        maxHeight: "max-h-60",
        bg: "bg-white",
        mt: "mt-1",
        p: "p-3",
        borderRadius: "rounded-md",
        boxShadow: "shadow-lg shadow-blue-grey-50",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-normal",
        color: "text-blue-grey-500",
        overflow: "overflow-auto",
        outline: "focus:outline-none",
      },
      option: {
        pt: "pt-[9px]",
        pb: "pb-2",
        px: "px-4",
        borderRadius: "rounded-md",
        lightHeight: "leading-tight",
        cursor: "cursor-pointer",
        userSelect: "select-none",
        transition: "transition-all",
      },
      optionActive: {
        bg: "bg-blue-grey-50 bg-opacity-80",
        color: "text-blue-grey-900",
      },
      optionDisabled: {
        bg: "opacity-50",
        cursor: "cursor-not-allowed",
        userSelect: "select-none",
      },
    },
    variants: {
      outlined: selectOutlined,
      standard: selectStandard,
      static: selectStatic,
    },
  },
};

export default select;
