import type { DeepPartial } from "@types";

export type ProgressTheme = DeepPartial<typeof progressTheme>;
export type ProgressBarTheme = DeepPartial<typeof progressBarTheme>;

export const progressTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
  },
  baseStyle:
    "w-full bg-secondary-dark block rounded-full overflow-hidden dark:bg-secondary-dm-main",
  size: {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  },
};

export const progressBarTheme = {
  baseStyle: "h-full rounded-none",
  color: {
    primary: "bg-primary-main dark:bg-primary-dm-main",
    secondary: "bg-secondary-main dark:bg-secondary-dm-dark",
    info: "bg-info-main dark:bg-info-dm-main",
    success: "bg-success-main dark:bg-success-dm-main",
    warning: "bg-warning-main dark:bg-warning-dm-main",
    error: "bg-error-main dark:bg-error-dm-main",
  },
};
