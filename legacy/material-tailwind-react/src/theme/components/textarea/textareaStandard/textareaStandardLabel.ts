const textareaStandardLabel: object = {
  position: "-top-1.5",
  fontSize: "peer-placeholder-shown:text-sm",
  floated: {
    fontSize: "text-[11px] peer-focus:text-[11px]",
  },
  after: {
    content: "after:content[' ']",
    display: "after:block",
    width: "after:w-full",
    position: "after:absolute",
    bottom: "after:-bottom-0",
    left: "left-0",
    borderWidth: "after:border-b-2",
    scale: "after:scale-x-0",
    floated: {
      scale: "peer-focus:after:scale-x-100",
    },
    transition: "after:transition-transform after:duration-300",
  },
};

export default textareaStandardLabel;
