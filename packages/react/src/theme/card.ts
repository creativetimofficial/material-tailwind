import type { DeepPartial } from "@types";

export type CardTheme = DeepPartial<typeof cardTheme>;
export type CardHeaderTheme = DeepPartial<typeof cardHeaderTheme>;
export type CardBodyTheme = DeepPartial<typeof cardBodyTheme>;
export type CardFooterTheme = DeepPartial<typeof cardFooterTheme>;

export const cardTheme = {
  defaultProps: {
    variant: "solid",
    color: "default",
  },
  baseStyle: "w-full rounded-lg border shadow-sm overflow-hidden",
  variant: {
    ghost: {
      default: "bg-background/10 border-transparent shadow-transparent",
      primary: "bg-primary/10 border-transparent shadow-transparent",
      secondary: "bg-secondary/10 border-transparent shadow-transparent",
      info: "bg-info/10 border-transparent shadow-transparent",
      success: "bg-success/10 border-transparent shadow-transparent",
      warning: "bg-warning/10 border-transparent shadow-transparent",
      error: "bg-error/10 border-transparent shadow-transparent",
    },
    solid: {
      default: "bg-background border-surface shadow-black/5",
      primary: "bg-primary border-primary-dark shadow-primary-dark/25",
      secondary: "bg-secondary border-secondary-dark shadow-secondary-dark/25",
      info: "bg-info border-info-dark shadow-info-dark/25",
      success: "bg-success border-success-dark shadow-success-dark/25",
      warning: "bg-warning border-warning-dark shadow-warning-dark/25",
      error: "bg-error border-error-dark shadow-error-dark/25",
    },
    outline: {
      default: "bg-transparent border-surface shadow-black/5",
      primary: "bg-transparent border-primary shadow-black/5",
      secondary: "bg-transparent border-secondary shadow-black/5",
      info: "bg-transparent border-info shadow-black/5",
      success: "bg-transparent border-success shadow-black/5",
      warning: "bg-transparent border-warning shadow-black/5",
      error: "bg-transparent border-error shadow-black/5",
    },
    gradient: {
      default: "bg-background border-surface shadow-black/5",
      primary:
        "bg-gradient-to-t from-primary-dark to-primary-light shadow-primary/25 border-primary",
      secondary:
        "bg-gradient-to-t from-secondary-dark to-secondary-light shadow-secondary/25 border-secondary",
      info: "bg-gradient-to-t from-info-dark to-info-light shadow-info/25 border-info",
      success:
        "bg-gradient-to-t from-success-dark to-success-light shadow-success/25 border-success",
      warning:
        "bg-gradient-to-t from-warning-dark to-warning-light shadow-warning/25 border-warning",
      error:
        "bg-gradient-to-t from-error-dark to-error-light shadow-error/25 border-error",
    },
  },
};

export const cardHeaderTheme = {
  baseStyle: "w-[calc(100%-16px)] h-max rounded m-2",
};

export const cardBodyTheme = {
  baseStyle: "w-full h-max rounded px-3.5 py-2.5",
};

export const cardFooterTheme = {
  baseStyle: "w-full px-3.5 pt-2 pb-3.5 rounded",
};
