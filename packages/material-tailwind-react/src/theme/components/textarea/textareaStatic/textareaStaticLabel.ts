const textareaStaticLabel: object = {
  position: "-top-2.5",
  fontSize: "text-sm peer-focus:text-sm",
  after: {
    content: "after:content[' ']",
    display: "after:block",
    width: "after:w-full",
    position: "after:absolute",
    bottom: "after:-bottom-1",
    left: "left-0",
    borderWidth: "after:border-b-2",
    scale: "after:scale-x-0",
    floated: {
      scale: "peer-focus:after:scale-x-100",
    },
    transition: "after:transition-transform after:duration-300",
  },
};

export default textareaStaticLabel;
