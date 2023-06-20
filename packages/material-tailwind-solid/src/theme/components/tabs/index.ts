// types
import type { orientation } from "../../../types/components/tabs";

export interface TabsStylesType {
  defaultProps: {
    class: string;
    orientation: orientation;
  };
  styles: {
    base: Record<string, string>;
    vertical: Record<string, string>;
    horizontal: Record<string, string>;
  };
}

export const tabs: TabsStylesType = {
  defaultProps: {
    class: "",
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
