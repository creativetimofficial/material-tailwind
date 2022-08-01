// types
import type {
  placement,
  offset,
  dismiss,
  animate,
  className,
} from "../../../types/components/popover";

export interface PopoverStylesType {
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

export const popover: PopoverStylesType = {
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
      bg: "bg-white",
      p: "p-4",
      border: "border border-blue-gray-50",
      borderRadius: "rounded-lg",
      boxShadow: "shadow-lg shadow-blue-gray-500/10",
      fontFamily: "font-sans",
      fontSize: "text-sm",
      fontWeight: "font-normal",
      color: "text-blue-gray-500",
      outline: "focus:outline-none",
      overflowWrap: "break-words",
      whiteSpace: "whitespace-normal",
    },
  },
};

export default popover;
