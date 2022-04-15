const tooltip = {
  defaultProps: {
    placement: "bottom-start",
    offset: 5,
    dismiss: {},
    animate: {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    },
    className: "",
  },
  styles: {
    base: {
      bg: "bg-black",
      py: "py-1.5",
      px: "px-3",
      borderRadius: "rounded-md",
      fontFamily: "font-sans",
      fontSize: "text-sm",
      fontWeight: "font-normal",
      color: "text-white",
      outline: "focus:outline-none",
      overflowWrap: "break-words",
      whiteSpace: "whitespace-normal",
    },
  },
};

export default tooltip;
