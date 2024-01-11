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
      default:
        "bg-white/10 border-transparent shadow-transparent dark:bg-primary-dark/10 dark:border-transparent dark:shadow-transparent",
      primary:
        "bg-primary-main/10 border-transparent shadow-transparent dark:bg-primary-dm-main/10 dark:border-transparent dark:shadow-transparent",
      secondary:
        "bg-secondary-main/10 border-transparent shadow-transparent dark:bg-secondary-dm-main/10 dark:border-transparent dark:shadow-transparent",
      info: "bg-info-main/10 border-transparent shadow-transparent dark:bg-info-dm-main/10 dark:border-transparent dark:shadow-transparent",
      success:
        "bg-success-main/10 border-transparent shadow-transparent dark:bg-success-dm-main/10 dark:border-transparent dark:shadow-transparent",
      warning:
        "bg-warning-main/10 border-transparent shadow-transparent dark:bg-warning-dm-main/10 dark:border-transparent dark:shadow-transparent",
      error:
        "bg-error-main/10 border-transparent shadow-transparent dark:bg-error-dm-main/10 dark:border-transparent dark:shadow-transparent",
    },
    solid: {
      default:
        "bg-white border-secondary-main shadow-primary-dark/5 dark:bg-primary-dark dark:border-secondary-dm-main dark:shadow-transparent",
      primary:
        "bg-primary-main border-primary-dark shadow-primary-dark/25 dark:bg-primary-dm-main dark:border-primary-dm-dark dark:shadow-transparent",
      secondary:
        "bg-secondary-main border-secondary-dark shadow-secondary-dark/25 dark:bg-secondary-dm-main dark:border-secondary-dm-dark dark:shadow-transparent",
      info: "bg-info-main border-info-dark shadow-info-dark/25 dark:bg-info-dm-main dark:border-info-dm-dark dark:shadow-transparent",
      success:
        "bg-success-main border-success-dark shadow-success-dark/25 dark:bg-success-dm-main dark:border-success-dm-dark dark:shadow-transparent",
      warning:
        "bg-warning-main border-warning-dark shadow-warning-dark/25 dark:bg-warning-dm-main dark:border-warning-dm-dark dark:shadow-transparent",
      error:
        "bg-error-main border-error-dark shadow-error-dark/25 dark:bg-error-dm-main dark:border-error-dm-dark dark:shadow-transparent",
    },
    outline: {
      default:
        "bg-transparent border-white shadow-transparent dark:bg-transparent dark:border-primary-dark dark:shadow-transparent",
      primary:
        "bg-transparent border-primary-main shadow-transparent dark:bg-transparent dark:border-primary-dm-main dark:shadow-transparent",
      secondary:
        "bg-transparent border-secondary-main shadow-transparent dark:bg-transparent dark:border-secondary-dm-main dark:shadow-transparent",
      info: "bg-transparent border-info-main shadow-transparent dark:bg-transparent dark:border-info-dm-main dark:shadow-transparent",
      success:
        "bg-transparent border-success-main shadow-transparent dark:bg-transparent dark:border-success-dm-main dark:shadow-transparent",
      warning:
        "bg-transparent border-warning-main shadow-transparent dark:bg-transparent dark:border-warning-dm-main dark:shadow-transparent",
      error:
        "bg-transparent border-error-main shadow-transparent dark:bg-transparent dark:border-error-dm-main dark:shadow-transparent",
    },
    gradient: {
      default:
        "bg-white border-secondary-main shadow-primary-dark/5 dark:bg-primary-dark dark:border-secondary-dm-main dark:shadow-transparent",
      primary:
        "bg-gradient-to-t from-primary-dark to-primary-light shadow-primary-main/25 border-primary-main dark:from-primary-dm-dark dark:to-primary-dm-light dark:border-primary-dm-main dark:shadow-transparent",
      secondary:
        "bg-gradient-to-t from-secondary-dark to-secondary-light shadow-secondary-main/25 border-secondary-main dark:from-secondary-dm-dark dark:to-secondary-dm-light dark:border-secondary-dm-main dark:shadow-transparent",
      info: "bg-gradient-to-t from-info-dark to-info-light shadow-info-main/25 border-info-main dark:from-info-dm-dark dark:to-info-dm-light dark:border-info-dm-main dark:shadow-transparent",
      success:
        "bg-gradient-to-t from-success-dark to-success-light shadow-success-main/25 border-success-main dark:from-success-dm-dark dark:to-success-dm-light dark:border-success-dm-main dark:shadow-transparent",
      warning:
        "bg-gradient-to-t from-warning-dark to-warning-light shadow-warning-main/25 border-warning-main dark:from-warning-dm-dark dark:to-warning-dm-light dark:border-warning-dm-main dark:shadow-transparent",
      error:
        "bg-gradient-to-t from-error-dark to-error-light shadow-error-main/25 border-error-main dark:from-error-dm-dark dark:to-error-dm-light dark:border-error-dm-main dark:shadow-transparent",
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
