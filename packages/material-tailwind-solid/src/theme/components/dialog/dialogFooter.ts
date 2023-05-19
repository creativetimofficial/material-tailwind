// types

export interface DialogFooterStylesType {
  defaultProps: {
    class: string;
  };
  styles: {
    base: object;
  };
}

export const dialogFooter: DialogFooterStylesType = {
  defaultProps: { class: "" },
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
