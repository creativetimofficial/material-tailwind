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
    "inline-flex data-[width=full]:w-full data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:rounded-none data-[orientation=horizontal]:[&:first-child:not([data-variant=ghost])]:[&_*]:rounded-r-none data-[orientation=horizontal]:[&:last-child:not([data-variant=ghost])]:[&_*]:rounded-l-none data-[orientation=horizontal]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:border-l-0 data-[orientation=horizontal]:[&:last-child:not([data-variant=ghost])]:[&_*]:border-l-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:rounded-none data-[orientation=vertical]:[&:first-child:not([data-variant=ghost])]:[&_*]:rounded-b-none data-[orientation=vertical]:[&:last-child:not([data-variant=ghost])]:[&_*]:rounded-t-none data-[orientation=vertical]:[&:not(:first-child):not(:last-child):not([data-variant=ghost])]:[&_*]:border-t-0 data-[orientation=vertical]:[&:last-child:not([data-variant=ghost])]:[&_*]:border-t-0",
};
