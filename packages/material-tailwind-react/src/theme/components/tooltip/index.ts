// types
import type {
  placement,
  offset,
  dismiss,
  animate,
  className,
} from "../../../types/components/popover";

export interface TooltipStylesType {
  defaultProps?: {
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
      borderRadius: "rounded-md",
      fontFamily: "font-sans",
      fontSize: "text-sm",
      fontWeight: "font-normal",
      color: "text-white",
      outline: "focus:outline-none",
      overflowWrap: "break-words",
      whiteSpace: "whitespace-normal",
    },
  },
};

export default tooltip;
