import type { DeepPartial } from "@types";

export type TextareaTheme = DeepPartial<typeof textareaTheme>;

export const textareaTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    resize: false,
    isError: false,
    isSuccess: false,
  },
  baseStyle:
    "peer block w-full resize-none outline-none focus:outline-none text-black dark:text-white placeholder:text-foreground/60 bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success data-[resize=true]:resize-y",
  color: {
    primary:
      "hover:border-primary hover:ring-primary/10 focus:border-primary focus:ring-primary/10",
    secondary:
      "hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:ring-secondary/10",
    info: "hover:border-info hover:ring-info/10 focus:border-info focus:ring-info/10",
    success:
      "hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10",
    warning:
      "hover:border-warning hover:ring-warning/10 focus:border-warning focus:ring-warning/10",
    error:
      "hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10",
  },
  size: {
    sm: "text-sm shadow-sm p-2 rounded-md ring",
    md: "text-sm shadow-sm p-2.5 rounded-md ring",
    lg: "text-base shadow-sm p-3 rounded-lg ring-4",
  },
};
