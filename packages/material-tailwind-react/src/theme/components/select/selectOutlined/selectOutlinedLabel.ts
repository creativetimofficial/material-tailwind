const selectOutlinedLabel: object = {
  position: "-top-1.5",
  before: {
    content: "before:content[' ']",
    display: "before:block",
    boxSizing: "before:box-border",
    width: "before:w-2.5",
    height: "before:h-1.5",
    mt: "before:mt-[6.5px]",
    mr: "before:mr-1",
    borderRadius: "before:rounded-tl-md",
    pointerEvents: "before:pointer-events-none",
    transition: "before:transition-all",
    disabled: "peer-disabled:before:border-transparent",
  },
  after: {
    content: "after:content[' ']",
    display: "after:block",
    flexGrow: "after:flex-grow",
    boxSizing: "after:box-border",
    width: "after:w-2.5",
    height: "after:h-1.5",
    mt: "after:mt-[6.5px]",
    ml: "after:ml-1",
    borderRadius: "after:rounded-tr-md",
    pointerEvents: "after:pointer-events-none",
    transition: "after:transition-all",
    disabled: "peer-disabled:after:border-transparent",
  },
};

export default selectOutlinedLabel;
