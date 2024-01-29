import type { DeepPartial } from "@types";

export type ProgressTheme = DeepPartial<typeof progressTheme>;
export type ProgressBarTheme = DeepPartial<typeof progressBarTheme>;

export const progressTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
  },
  baseStyle: "w-full bg-secondary-dark block rounded-full overflow-hidden",
  size: {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  },
};

export const progressBarTheme = {
  baseStyle: "h-full rounded-none",
  color: {
    primary: "bg-primary-main",
    secondary: "bg-secondary-main",
    info: "bg-info-main",
    success: "bg-success-main",
    warning: "bg-warning-main",
    error: "bg-error-main",
  },
};
