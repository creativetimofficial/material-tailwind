const inputOutlinedLabel: object = {
  position: "-top-1.5",
  fontSize: "peer-placeholder-shown:text-sm",
  floated: {
    fontSize: "text-[11px] peer-focus:text-[11px]",
  },
  before: {
    content: "before:content[' ']",
    display: "before:block",
    boxSizing: "before:box-border",
    width: "before:w-2.5",
    height: "before:h-1.5",
    mt: "before:mt-[6.5px]",
    mr: "before:mr-1",
    borderColor: "peer-placeholder-shown:before:border-transparent",
    borderRadius: "before:rounded-tl-md",
    floated: {
      bt: "before:border-t peer-focus:before:border-t-2",
      bl: "before:border-l peer-focus:before:border-l-2",
    },
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
    borderColor: "peer-placeholder-shown:after:border-transparent",
    borderRadius: "after:rounded-tr-md",
    floated: {
      bt: "after:border-t peer-focus:after:border-t-2",
      br: "after:border-r peer-focus:after:border-r-2",
    },
    pointerEvents: "after:pointer-events-none",
    transition: "after:transition-all",
    disabled: "peer-disabled:after:border-transparent",
  },
};

export default inputOutlinedLabel;
