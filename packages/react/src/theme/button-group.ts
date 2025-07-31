import type { DeepPartial } from "@types";

export type ButtonGroupTheme = DeepPartial<typeof buttonGroupTheme>;

export const buttonGroupTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    isFullWidth: false,
    isPill: false,
    orientation: "horizontal",
  },
  baseStyle:
    "inline-flex data-[width=full]:w-full data-[orientation=horizontal]:flex-row **:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:data-[orientation=horizontal]:rounded-none **:[&:first-child:not([data-variant=ghost])]:data-[orientation=horizontal]:rounded-r-none **:[&:last-child:not([data-variant=ghost])]:data-[orientation=horizontal]:rounded-l-none **:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:data-[orientation=horizontal]:border-l-0 **:[&:last-child:not([data-variant=ghost])]:data-[orientation=horizontal]:border-l-0 data-[orientation=vertical]:flex-col **:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:data-[orientation=vertical]:rounded-none **:[&:first-child:not([data-variant=ghost])]:data-[orientation=vertical]:rounded-b-none **:[&:last-child:not([data-variant=ghost])]:data-[orientation=vertical]:rounded-t-none **:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:data-[orientation=vertical]:border-t-0 **:[&:last-child:not([data-variant=ghost])]:data-[orientation=vertical]:border-t-0",
};
