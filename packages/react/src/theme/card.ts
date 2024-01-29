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
  baseStyle: "w-full rounded-lg border shadow-lg overflow-hidden",
  variant: {
    ghost: {
      default: "bg-white/10 border-transparent shadow-transparent",
      primary: "bg-primary-main/10 border-transparent shadow-transparent",
      secondary: "bg-secondary-main/10 border-transparent shadow-transparent",
      info: "bg-info-main/10 border-transparent shadow-transparent",
      success: "bg-success-main/10 border-transparent shadow-transparent",
      warning: "bg-warning-main/10 border-transparent shadow-transparent",
      error: "bg-error-main/10 border-transparent shadow-transparent",
    },
    solid: {
      default: "bg-white border-secondary-main shadow-primary-dark/5",
      primary: "bg-primary-main border-primary-dark shadow-primary-dark/25",
      secondary:
        "bg-secondary-main border-secondary-dark shadow-secondary-dark/25",
      info: "bg-info-main border-info-dark shadow-info-dark/25",
      success: "bg-success-main border-success-dark shadow-success-dark/25",
      warning: "bg-warning-main border-warning-dark shadow-warning-dark/25",
      error: "bg-error-main border-error-dark shadow-error-dark/25",
    },
    outline: {
      default: "bg-transparent border-white shadow-transparent",
      primary: "bg-transparent border-primary-main shadow-transparent",
      secondary: "bg-transparent border-secondary-main shadow-transparent",
      info: "bg-transparent border-info-main shadow-transparent",
      success: "bg-transparent border-success-main shadow-transparent",
      warning: "bg-transparent border-warning-main shadow-transparent",
      error: "bg-transparent border-error-main shadow-transparent",
    },
    gradient: {
      default: "bg-white border-secondary-main shadow-primary-dark/5",
      primary:
        "bg-gradient-to-t from-primary-dark to-primary-light shadow-primary-main/25 border-primary-main",
      secondary:
        "bg-gradient-to-t from-secondary-dark to-secondary-light shadow-secondary-main/25 border-secondary-main",
      info: "bg-gradient-to-t from-info-dark to-info-light shadow-info-main/25 border-info-main",
      success:
        "bg-gradient-to-t from-success-dark to-success-light shadow-success-main/25 border-success-main",
      warning:
        "bg-gradient-to-t from-warning-dark to-warning-light shadow-warning-main/25 border-warning-main",
      error:
        "bg-gradient-to-t from-error-dark to-error-light shadow-error-main/25 border-error-main",
    },
  },
};

export const cardHeaderTheme = {
  baseStyle: "w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-[5px] m-1.5",
};

export const cardBodyTheme = {
  baseStyle: "w-full h-full rounded px-3 py-2",
};

export const cardFooterTheme = {
  baseStyle: "w-full px-3 pt-1.5 pb-3 rounded",
};
