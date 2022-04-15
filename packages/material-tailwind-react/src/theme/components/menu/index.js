const menu = {
  defaultProps: {
    placement: "bottom-start",
    offset: 5,
    dismiss: {},
    animate: {
      unmount: {
        opacity: 0,
        transformOrigin: "top",
        transform: "scale(0.95)",
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
      mount: {
        opacity: 1,
        transformOrigin: "top",
        transform: "scale(1)",
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
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
      boxShadow: "shadow-lg shadow-blue-grey-50",
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
