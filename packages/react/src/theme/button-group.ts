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
  baseStyle: "inline-flex data-[full-width=true]:w-full",
  vertical:
    "flex-col [&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:rounded-none [&:first-child:not([data-variant=ghost])]:[&_*]:rounded-b-none [&:last-child:not([data-variant=ghost])]:[&_*]:rounded-t-none [&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:border-t-0 [&:last-child:not([data-variant=ghost])]:[&_*]:border-t-0",
  horizontal:
    "flex-row [&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:rounded-none [&:first-child:not([data-variant=ghost])]:[&_*]:rounded-r-none [&:last-child:not([data-variant=ghost])]:[&_*]:rounded-l-none [&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:border-l-0 [&:last-child:not([data-variant=ghost])]:[&_*]:border-l-0",
};
