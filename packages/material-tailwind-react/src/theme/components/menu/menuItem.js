const menuItem = {
  defaultProps: {
    className: "",
    disabled: false,
  },
  styles: {
    base: {
      item: {
        display: "block",
        width: "w-full",
        pt: "pt-[9px]",
        pb: "pb-2",
        px: "px-4",
        borderRadius: "rounded-md",
        textAlign: "text-start",
        lightHeight: "leading-tight",
        cursor: "cursor-pointer",
        userSelect: "select-none",
        transition: "transition-all",
        bg: "hover:bg-blue-grey-50 hover:bg-opacity-80 focus:bg-blue-grey-50 focus:bg-opacity-80 active:bg-blue-grey-50 active:bg-opacity-80",
        color: "hover:text-blue-grey-900 focus:text-blue-grey-900 active:text-blue-grey-900",
      },
      disabled: {
        opacity: "opacity-50",
        cursor: "cursor-not-allowed",
        userSelect: "select-none",
        bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
        color: "hover:text-blue-grey-500 focus:text-blue-grey-500 active:text-blue-grey-500",
      },
    },
  },
};

export default menuItem;
