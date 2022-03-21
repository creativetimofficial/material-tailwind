const avatar = {
  defaultProps: {
    variant: "rounded",
    size: "md",
    className: "",
  },
  styles: {
    root: "inline-block relative object-cover object-center",
    sizes: {
      xs: {
        with: "w-6",
        height: "h-6",
        borderRadius: "rounded-md",
      },
      sm: {
        with: "w-9",
        height: "h-9",
        borderRadius: "rounded-md",
      },
      md: {
        with: "w-12",
        height: "h-12",
        borderRadius: "rounded-lg",
      },
      lg: {
        with: "w-[58px]",
        height: "h-[58px]",
        borderRadius: "rounded-lg",
      },
      xl: {
        with: "w-[74px]",
        height: "h-[74px]",
        borderRadius: "rounded-xl",
      },
      xxl: {
        with: "w-[110px]",
        height: "h-[110px]",
        borderRadius: "rounded-2xl",
      },
    },
    variants: {
      rounded: "",
      circular: "rounded-full",
    },
  },
};

export default avatar;
