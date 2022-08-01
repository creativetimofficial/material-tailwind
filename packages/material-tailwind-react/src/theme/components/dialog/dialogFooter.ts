// types
import type { className } from "../../../types/components/dialog";

export interface DialogFooterStylesType {
  defaultProps?: {
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const dialogFooter: DialogFooterStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "flex",
      alignItems: "items-center",
      justifyContent: "justify-end",
      flexShrink: "shrink-0",
      flexWrap: "flex-wrap",
      p: "p-4",
      color: "text-blue-gray-500",
    },
  },
};

export default dialogFooter;
