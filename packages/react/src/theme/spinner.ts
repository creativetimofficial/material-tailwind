import type { DeepPartial } from "@types";

export type SpinnerTheme = DeepPartial<typeof spinnerTheme>;

export const spinnerTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
  },
  baseStyle: "text-surface animate-spin",
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
    xxl: "h-12 w-12",
  },
  color: {
    primary: "text-primary",
    secondary: "text-secondary brightness-90",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  },
};
