import type { DeepPartial } from "@types";

export type ProgressTheme = DeepPartial<typeof progressTheme>;
export type ProgressBarTheme = DeepPartial<typeof progressBarTheme>;

export const progressTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
  },
  baseStyle: "w-full bg-surface block rounded-full overflow-hidden",
  size: {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  },
};

export const progressBarTheme = {
  baseStyle: "h-full rounded-none",
  color: {
    primary: "bg-primary",
    secondary: "bg-secondary brightness-90",
    info: "bg-info",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  },
};
