// types
import type { className } from "../../../types/components/tabs";

export interface TabPanelStylesType {
  defaultProps?: {
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const tabPanel: TabPanelStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      width: "w-full",
      height: "h-max",
      color: "text-gray-700",
      p: "p-4",
      fontSmoothing: "antialiased",
      fontFamily: "font-sans",
      fontSize: "text-base",
      fontWeight: "font-light",
      lineHeight: "leading-relaxed",
    },
  },
};

export default tabPanel;
