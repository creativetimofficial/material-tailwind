const tab = {
  defaultProps: {
    className: "",
    disabled: false,
  },
  styles: {
    base: {
      tab: {
        display: "grid",
        placeItems: "place-items-center",
        textAlign: "text-center",
        width: "w-full",
        height: "h-full",
        position: "relative",
        bg: "bg-transparent",
        p: "p-1",
        color: "text-blue-grey-900",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
        userSelect: "select-none",
        cursor: "cursor-pointer",
      },
      indicator: {
        position: "absolute",
        top: "top-0",
        left: "left-0",
        right: "right-0",
        zIndex: "z-10",
        height: "h-full",
        bg: "bg-white",
        borderRadius: "rounded-md",
        boxShadow: "shadow",
      },
    },
  },
};

export default tab;
