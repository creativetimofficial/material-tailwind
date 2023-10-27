import type { DeepPartial } from "@types";

export type ButtonGroupTheme = DeepPartial<typeof buttonGroupTheme>;

export const buttonGroupTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    fullWidth: false,
    orientation: "horizontal",
  },
  baseStyle: "inline-flex",
  vertical: "flex-col",
  horizontal: "flex-row",
  verticalAppearance:
    "[&:not(:first-child):not(:last-child)]:[&_*]:rounded-none first:[&_*]:rounded-b-none last:[&_*]:rounded-t-none [&:not(:first-child):not(:last-child)]:[&_*]:border-t-0 last:[&_*]:border-t-0",
  horizontalAppearance:
    "[&:not(:first-child):not(:last-child)]:[&_*]:rounded-none first:[&_*]:rounded-r-none last:[&_*]:rounded-l-none [&:not(:first-child):not(:last-child)]:[&_*]:border-l-0 last:[&_*]:border-l-0",
  fullWidth: "w-full",
};

export default buttonGroupTheme;
