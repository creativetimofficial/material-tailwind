const dialogBody = {
  defaultProps: {
    className: "",
    divider: false,
  },
  styles: {
    base: {
      initial: {
        position: "relative",
        display: "flex",
        flex: "flex-auto",
        p: "p-4",
        color: "text-blue-grey-500",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
      },
      divider: {
        borderTop: "border-t",
        borderTopColor: "border-t-blue-grey-100",
        borderBottom: "border-b",
        borderBottomColor: "border-b-blue-grey-100",
      },
    },
  },
};

export default dialogBody;
