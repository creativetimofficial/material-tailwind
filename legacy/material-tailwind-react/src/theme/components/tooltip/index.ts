// types
import type {
  interactive,
  placement,
  offset,
  dismiss,
  animate,
  className,
} from "../../../types/components/popover";

export interface TooltipStylesType {
  defaultProps?: {
    interactive?: interactive;
    placement?: placement;
    offset?: offset;
    dismiss?: dismiss;
    animate?: animate;
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const tooltip: TooltipStylesType = {
  defaultProps: {
    interactive: false,
    placement: "top",
    offset: 5,
    dismiss: {},
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  styles: {
    base: {
      bg: "bg-black",
      py: "py-1.5",
      px: "px-3",
      borderRadius: "rounded-lg",
      fontFamily: "font-sans",
      fontSize: "text-sm",
      fontWeight: "font-normal",
      color: "text-white",
      outline: "focus:outline-none",
      overflowWrap: "break-words",
      zIndex: "z-[999]",
      whiteSpace: "whitespace-normal",
    },
  },
};

export default tooltip;
