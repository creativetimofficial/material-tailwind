// types
import type { className } from "../../../types/components/tabs";

export interface TabsStylesType {
  defaultProps?: {
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const tabs: TabsStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "block",
      overflow: "overflow-hidden",
    },
  },
};

export default tabs;
