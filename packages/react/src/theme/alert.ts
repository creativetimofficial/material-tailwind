import type { DeepPartial } from "@types";

export type AlertTheme = DeepPartial<typeof alertTheme>;
export type AlertContentTheme = DeepPartial<typeof alertContentTheme>;
export type AlertIconTheme = DeepPartial<typeof alertIconTheme>;
export type AlertDismissTriggerTheme = DeepPartial<
  typeof alertDismissTriggerTheme
>;

export const alertTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    rounded: false,
  },
  baseStyle:
    "relative flex w-full items-center border select-none text-base font-sans font-medium rounded-md p-2",
  rounded: "rounded-full",
  variant: {
    ghost: {
      primary:
        "bg-primary-main/10 border-transparent text-primary-main dark:bg-primary-dm-main/10 dark:text-primary-dm-main",
      secondary:
        "bg-secondary-main/10 border-transparent text-secondary-content dark:bg-secondary-dm-main/10 dark:text-secondary-dm-content",
      info: "bg-info-main/10 border-transparent text-info-main dark:bg-info-dm-main/10 dark:text-info-dm-main",
      success:
        "bg-success-main/10 border-transparent text-success-main dark:bg-success-dm-main/10 dark:text-success-dm-main",
      warning:
        "bg-warning-main/10 border-transparent text-warning-dark dark:bg-warning-dm-main/10 dark:text-warning-dm-dark",
      error:
        "bg-error-main/10 border-transparent text-error-main dark:bg-error-dm-main/10 dark:text-error-dm-main",
    },
    solid: {
      primary:
        "bg-primary-main border-primary-main text-primary-content dark:bg-primary-dm-main dark:border-primary-dm-main dark:text-primary-dm-content",
      secondary:
        "bg-secondary-main border-secondary-main text-secondary-content dark:bg-secondary-dm-main dark:border-secondary-dm-main dark:text-secondary-dm-content",
      info: "bg-info-main border-info-main text-info-content dark:bg-info-dm-main dark:border-info-dm-main dark:text-info-dm-content",
      success:
        "bg-success-main border-success-main text-success-content dark:bg-success-dm-main dark:border-success-dm-main dark:text-success-dm-content",
      warning:
        "bg-warning-main border-warning-main text-warning-content dark:bg-warning-dm-main dark:border-warning-dm-main dark:text-warning-dm-content",
      error:
        "bg-error-main border-error-main text-error-content dark:bg-error-dm-main dark:border-error-dm-main dark:text-error-dm-content",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main dark:border-primary-dm-main dark:text-primary-dm-main",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content dark:border-secondary-dm-dark dark:text-secondary-dm-content",
      info: "bg-transparent border-info-main text-info-main dark:border-info-dm-main dark:text-info-dm-main",
      success:
        "bg-transparent border-success-main text-success-main dark:border-success-dm-main dark:text-success-dm-main",
      warning:
        "bg-transparent border-warning-dark text-warning-dark dark:border-warning-dm-dark dark:text-warning-dm-dark",
      error:
        "bg-transparent border-error-main text-error-main dark:border-error-dm-main dark:text-error-dm-main",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-main text-primary-content dark:from-primary-dm-dark dark:to-primary-dm-light dark:border-primary-dm-main dark:text-primary-dm-content",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-main text-secondary-content dark:from-secondary-dm-dark dark:to-secondary-dm-light dark:border-secondary-dm-main dark:text-secondary-dm-content",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-main text-info-content dark:from-info-dm-dark dark:to-info-dm-light dark:border-info-dm-main dark:text-info-dm-content",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-main text-success-content dark:from-success-dm-dark dark:to-success-dm-light dark:border-success-dm-main dark:text-success-dm-content",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-main text-warning-content dark:from-warning-dm-dark dark:to-warning-dm-light dark:border-warning-dm-main dark:text-warning-dm-content",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-main text-error-content dark:from-error-dm-dark dark:to-error-dm-light dark:border-error-dm-main dark:text-error-dm-content",
    },
  },
};

export const alertContentTheme = {
  baseStyle: "font-inherit w-full text-inherit leading-none m-1.5",
};

export const alertIconTheme = {
  baseStyle: "grid place-items-center shrink-0 w-5 h-5 mx-1",
};

export const alertDismissTriggerTheme = {
  defaultProps: {
    ripple: true,
    isPill: false,
  },
  baseStyle:
    "grid place-items-center shrink-0 w-5 h-5 border mr-1 ml-3 stroke-[1.5] rounded",
  isPill: "rounded-full",
  variant: {
    ghost: {
      primary:
        "bg-primary-main/25 border-transparent text-primary-main dark:bg-primary-dm-main/25 dark:text-primary-dm-main",
      secondary:
        "bg-secondary-main/25 border-transparent text-secondary-content dark:bg-secondary-dm-main/25 dark:text-secondary-dm-content",
      info: "bg-info-main/25 border-transparent text-info-main dark:bg-info-dm-main/25 dark:text-info-dm-main",
      success:
        "bg-success-main/25 border-transparent text-success-main dark:bg-success-dm-main/25 dark:text-success-dm-main",
      warning:
        "bg-warning-main/25 border-transparent text-warning-dark dark:bg-warning-dm-main/25 dark:text-warning-dm-dark",
      error:
        "bg-error-main/25 border-transparent text-error-main dark:bg-error-dm-main/25 dark:text-error-dm-main",
    },
    solid: {
      primary:
        "bg-primary-dark border-primary-dark text-primary-content dark:bg-primary-dm-dark dark:border-primary-dm-dark dark:text-primary-dm-content",
      secondary:
        "bg-secondary-dark border-secondary-dark text-secondary-content dark:bg-secondary-dm-dark dark:border-secondary-dm-dark dark:text-secondary-dm-content",
      info: "bg-info-dark border-info-dark text-info-content dark:bg-info-dm-dark dark:border-info-dm-dark dark:text-info-dm-content",
      success:
        "bg-success-dark border-success-dark text-success-content dark:bg-success-dm-dark dark:border-success-dm-dark dark:text-success-dm-content",
      warning:
        "bg-warning-dark border-warning-dark text-warning-content dark:bg-warning-dm-dark dark:border-warning-dm-dark dark:text-warning-dm-content",
      error:
        "bg-error-dark border-error-dark text-error-content dark:bg-error-dm-dark dark:border-error-dm-dark dark:text-error-dm-content",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main dark:border-primary-dm-main dark:text-primary-dm-main",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content dark:border-secondary-dm-dark dark:text-secondary-dm-content",
      info: "bg-transparent border-info-main text-info-main dark:border-info-dm-main dark:text-info-dm-main",
      success:
        "bg-transparent border-success-main text-success-main dark:border-success-dm-main dark:text-success-dm-main",
      warning:
        "bg-transparent border-warning-dark text-warning-dark dark:border-warning-dm-dark dark:text-warning-dm-dark",
      error:
        "bg-transparent border-error-main text-error-main dark:border-error-dm-main dark:text-error-dm-main",
    },
    gradient: {
      primary:
        "bg-primary-dark border-primary-dark text-primary-content dark:bg-primary-dm-dark dark:border-primary-dm-dark dark:text-primary-dm-content",
      secondary:
        "bg-secondary-dark border-secondary-dark text-secondary-content dark:bg-secondary-dm-dark dark:border-secondary-dm-dark dark:text-secondary-dm-content",
      info: "bg-info-dark border-info-dark text-info-content dark:bg-info-dm-dark dark:border-info-dm-dark dark:text-info-dm-content",
      success:
        "bg-success-dark border-success-dark text-success-content dark:bg-success-dm-dark dark:border-success-dm-dark dark:text-success-dm-content",
      warning:
        "bg-warning-dark border-warning-dark text-warning-content dark:bg-warning-dm-dark dark:border-warning-dm-dark dark:text-warning-dm-content",
      error:
        "bg-error-dark border-error-dark text-error-content dark:bg-error-dm-dark dark:border-error-dm-dark dark:text-error-dm-content",
    },
  },
};

export default alertTheme;
