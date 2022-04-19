const accordion = {
  defaultProps: {
    className: "",
    animate: {
      unmount: {},
      mount: {},
    },
  },
  styles: {
    base: {
      container: {
        display: "block",
        position: "relative",
        width: "w-full",
      },
      header: {
        initial: {
          display: "flex",
          justifyContent: "justify-between",
          alignItems: "items-center",
          width: "w-full",
          py: "py-4",
          borderWidth: "border-b border-b-blue-grey-100",
          color: "text-blue-grey-700",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-xl",
          fontWeight: "font-semibold",
          lineHeight: "leading-snug",
          userSelect: "select-none",
          hover: "hover:text-blue-grey-900",
          transition: "transition-colors",
        },
        active: { color: "!text-blue-grey-900" },
        icon: {
          width: "w-5",
          height: "h-5",
          ml: "ml-4",
        },
      },
      body: {
        display: "block",
        width: "w-full",
        py: "py-4",
        color: "text-grey-700",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-light",
        lineHeight: "leading-normal",
      },
      disabled: {
        pointerEvents: "pointer-events-none",
        opacity: "opacity-50",
      },
    },
  },
};

export default accordion;
