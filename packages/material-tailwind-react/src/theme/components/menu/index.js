const menu = {
  defaultProps: {
    placement: "bottom-start",
    offset: 5,
    dismiss: {},
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  styles: {
    base: {
      bg: "bg-white",
      minWidth: "min-w-[180px]",
      p: "p-3",
      border: "border border-blue-grey-50",
      borderRadius: "rounded-md",
      boxShadow: "shadow-lg shadow-blue-grey-500/10",
      fontFamily: "font-sans",
      fontSize: "text-sm",
      fontWeight: "font-normal",
      color: "text-blue-grey-500",
      overflow: "overflow-auto",
      outline: "focus:outline-none",
    },
  },
};

export default menu;
