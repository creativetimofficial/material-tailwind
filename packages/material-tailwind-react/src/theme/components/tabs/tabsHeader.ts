// types
import type { className } from "../../../types/components/tabs";

export interface TabsHeaderStylesType {
  defaultProps?: {
    className?: className;
  };
  styles?: {
    base?: object;
    horizontal?: object;
    vertical?: object;
  };
}

export const tabsHeader: TabsHeaderStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "flex",
      position: "relative",
      bg: "bg-blue-gray-50",
      bgOpacity: "bg-opacity-60",
      borderRadius: "rounded-lg",
      p: "p-1",
    },
    horizontal: {
      flexDirection: "flex-row",
    },
    vertical: {
      flexDirection: "flex-col",
    },
  },
};

export default tabsHeader;
