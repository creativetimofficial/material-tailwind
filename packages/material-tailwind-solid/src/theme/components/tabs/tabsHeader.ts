// types

export interface TabsHeaderStylesType {
  defaultProps: {
    class: string;
  };
  styles: {
    base: Record<string, string>;
    horizontal: Record<string, string>;
    vertical: Record<string, string>;
  };
}

export const tabsHeader: TabsHeaderStylesType = {
  defaultProps: {
    class: "",
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
