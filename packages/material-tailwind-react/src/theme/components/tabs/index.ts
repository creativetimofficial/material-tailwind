// types
import type { className, orientation } from "../../../types/components/tabs";

export interface TabsStylesType {
  defaultProps?: {
    className?: className;
    orientation?: orientation;
  };
  styles?: {
    base?: object;
    vertical?: object;
    horizontal?: object;
  };
}

export const tabs: TabsStylesType = {
  defaultProps: {
    className: "",
    orientation: "horizontal",
  },
  styles: {
    base: {
      overflow: "overflow-hidden",
    },
    horizontal: {
      display: "block",
    },
    vertical: {
      display: "flex",
    },
  },
};

export default tabs;
