// types

export interface TabPanelStylesType {
  defaultProps: {
    class: string;
  };
  styles: {
    base: Record<string, string>;
  };
}

export const tabPanel: TabPanelStylesType = {
  defaultProps: {
    class: "",
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
