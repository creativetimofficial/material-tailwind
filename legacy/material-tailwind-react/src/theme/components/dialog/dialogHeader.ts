// types
import type { className } from "../../../types/components/dialog";

export interface DialogHeaderStylesType {
  defaultProps?: {
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const dialogHeader: DialogHeaderStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "flex",
      alignItems: "items-center",
      flexShrink: "shrink-0",
      p: "p-4",
      color: "text-blue-gray-900",
      fontSmoothing: "antialiased",
      fontFamily: "font-sans",
      fontSize: "text-2xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-snug",
    },
  },
};

export default dialogHeader;
