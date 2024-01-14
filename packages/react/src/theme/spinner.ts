import type { DeepPartial } from "@types";

export type SpinnerTheme = DeepPartial<typeof spinnerTheme>;

export const spinnerTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
  },
  baseStyle: "text-secondary-dark dark:text-secondary-dm-main animate-spin",
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
    xxl: "h-12 w-12",
  },
  color: {
    primary: "text-primary-main dark:text-primary-dm-main",
    secondary: "text-secondary-main dark:text-secondary-dm-dark",
    info: "text-info-main dark:text-info-dm-main",
    success: "text-success-main dark:text-success-dm-main",
    warning: "text-warning-main dark:text-warning-dm-main",
    error: "text-error-main dark:text-error-dm-main",
  },
};
