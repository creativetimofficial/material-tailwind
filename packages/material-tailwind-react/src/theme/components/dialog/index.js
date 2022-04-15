const dialog = {
  defaultProps: {
    size: "md",
    dismiss: {},
    animate: {
      unmount: {
        opacity: 0,
        transformOrigin: "top",
        transform: "translateY(-50px)",
      },
      mount: {
        opacity: 1,
        transformOrigin: "top",
        transform: "translateY(0px)",
      },
    },
    className: "",
  },
  valid: {
    sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
  },
  styles: {
    base: {
      backdrop: {
        display: "grid",
        placeItems: "place-items-center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "w-screen",
        height: "h-screen",
        backgroundColor: "bg-black",
        backgroundOpacity: "bg-opacity-60",
        backdropFilter: "backdrop-blur-sm",
      },
      container: {
        position: "relative",
        bg: "bg-white",
        m: "m-4",
        borderRadius: "rounded-lg",
        boxShadow: "shadow-2xl",
        color: "text-blue-grey-500",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
        overflow: "overflow-hidden",
      },
    },
    sizes: {
      xs: {
        width: "w-1/4",
        minWidth: "min-w-[25%]",
        maxWidth: "max-w-[25%]",
      },
      sm: {
        width: "w-1/3",
        minWidth: "min-w-[33.333333%]",
        maxWidth: "max-w-[33.333333%]",
      },
      md: {
        width: "w-2/5",
        minWidth: "min-w-[40%]",
        maxWidth: "max-w-[40%]",
      },
      lg: {
        width: "w-3/5",
        minWidth: "min-w-[60%]",
        maxWidth: "max-w-[60%]",
      },
      xl: {
        width: "w-3/4",
        minWidth: "min-w-[75%]",
        maxWidth: "max-w-[75%]",
      },
      xxl: {
        display: "flex",
        flexDirection: "flex-col",
        width: "w-screen",
        minWidth: "min-w-[100vw]",
        maxWidth: "max-w-[100vw]",
        height: "h-screen",
        minHeight: "min-h-[100vh]",
        maxHeight: "max-h-[100vh]",
        m: "m-0",
        borderRadius: "rounded-none",
      },
    },
  },
};

export default dialog;
