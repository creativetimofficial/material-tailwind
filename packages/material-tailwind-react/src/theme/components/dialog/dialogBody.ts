// types
import type { className, divider } from "../../../types/components/dialog";

export interface DialogBodyStylesType {
  defaultProps?: {
    className?: className;
    divider?: divider;
  };
  styles?: {
    base?: {
      initial?: object;
      divider?: object;
    };
  };
}

export const dialogBody: DialogBodyStylesType = {
  defaultProps: {
    className: "",
    divider: false,
  },
  styles: {
    base: {
      initial: {
        position: "relative",
        p: "p-4",
        color: "text-blue-gray-500",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
      },
      divider: {
        borderTop: "border-t",
        borderTopColor: "border-t-blue-gray-100",
        borderBottom: "border-b",
        borderBottomColor: "border-b-blue-gray-100",
      },
    },
  },
};

export default dialogBody;
