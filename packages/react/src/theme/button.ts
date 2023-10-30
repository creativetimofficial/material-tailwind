import type { DeepPartial } from "@types";

export type ButtonTheme = DeepPartial<typeof buttonTheme>;

export const buttonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    fullWidth: false,
  },
  baseStyle:
    "inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
  rounded: "rounded-full",
  fullWidth: "flex w-full",
  size: {
    sm: "text-sm leading-none py-1.5 px-2.5 rounded-md",
    md: "text-sm leading-none py-2.5 px-3.5 rounded-md",
    lg: "text-base leading-none py-3.5 px-5 rounded-lg",
  },
  variant: {
    ghost: {
      primary:
        "bg-transparent border-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 hover:border-primary-main/5 focus:border-primary-main/5 dark:text-primary-dm-main dark:hover:bg-primary-dm-main/5 dark:focus:bg-primary-dm-main/5 dark:hover:border-primary-dm-main/5 dark:focus:border-primary-dm-main/5",
      secondary:
        "bg-transparent border-transparent text-secondary-content hover:bg-secondary-main/10 focus:bg-secondary-main/10 hover:border-secondary-main/10 focus:border-secondary-main/10 dark:text-secondary-dm-content dark:hover:bg-secondary-dm-main/10 dark:focus:bg-secondary-dm-main/10 dark:hover:border-secondary-dm-main/10 dark:focus:dm-border-secondary-main/10",
      info: "bg-transparent border-transparent text-info-main hover:bg-info-main/10 focus:bg-info-main/10 hover:border-info-main/10 focus:border-info-main/10 dark:text-info-dm-main dark:hover:bg-info-dm-main/10 dark:focus:bg-info-dm-main/10 dark:hover:dm-border-info-main/10 dark:focus:border-info-dm-main/10",
      success:
        "bg-transparent border-transparent text-success-main hover:bg-success-main/10 focus:bg-success-main/10 hover:border-success-main/10 focus:border-success-main/10 dark:text-success-dm-main dark:hover:bg-success-dm-main/10 dark:focus:bg-success-dm-main/10 dark:hover:border-success-dm-main/10 dark:focus:border-success-dm-main/10",
      warning:
        "bg-transparent border-transparent text-warning-dark hover:bg-warning-main/10 focus:bg-warning-main/10 hover:border-warning-main/10 focus:border-warning-main/10 dark:text-warning-dm-dark dark:hover:bg-warning-dm-main/10 dark:focus:bg-warning-dm-main/10 dark:hover:border-warning-dm-main/10 dark:focus:border-warning-dm-main/10",
      error:
        "bg-transparent border-transparent text-error-main hover:bg-error-main/10 focus:bg-error-main/10 hover:border-error-main/10 focus:border-error-main/10 dark:text-error-dm-main dark:hover:bg-error-dm-main/10 dark:focus:bg-error-dm-main/10 dark:hover:border-error-dm-main/10 dark:focus:border-error-dm-main/10",
    },
    solid: {
      primary:
        "bg-primary-main border-primary-dark text-primary-content hover:bg-primary-light focus:bg-primary-light dark:bg-primary-dm-main dark:border-primary-dm-dark dark:text-primary-dm-content dark:hover:bg-primary-dm-light dark:focus:bg-primary-dm-light",
      secondary:
        "bg-secondary-main border-secondary-dark text-secondary-content hover:bg-secondary-light focus:bg-secondary-light dark:bg-secondary-dm-main dark:border-secondary-dm-dark dark:text-secondary-dm-content dark:hover:bg-secondary-dm-light dark:focus:bg-secondary-dm-light",
      info: "bg-info-main border-info-dark text-info-content hover:bg-info-light focus:bg-info-light dark:bg-info-dm-main dark:border-info-dm-dark dark:text-info-dm-content dark:hover:bg-info-dm-light dark:focus:bg-info-dm-light",
      success:
        "bg-success-main border-success-dark text-success-content hover:bg-success-light focus:bg-success-light dark:bg-success-dm-main dark:border-success-dm-dark dark:text-success-dm-content dark:hover:bg-success-dm-light dark:focus:bg-success-dm-light",
      warning:
        "bg-warning-main border-warning-dark text-warning-content hover:bg-warning-light focus:bg-warning-light dark:bg-warning-dm-main dark:border-warning-dm-dark dark:text-warning-dm-content dark:hover:bg-warning-dm-light dark:focus:bg-warning-dm-light",
      error:
        "bg-error-main border-error-dark text-error-content hover:bg-error-light focus:bg-error-light dark:bg-error-dm-main dark:border-error-dm-dark dark:text-error-dm-content dark:hover:bg-error-dm-light dark:focus:bg-error-dm-light",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main hover:text-primary-content focus:text-primary-content hover:border-primary-dark focus:border-primary-dark dark:border-primary-dm-main dark:text-primary-dm-main dark:hover:bg-primary-dm-main dark:focus:bg-primary-dm-main dark:hover:text-primary-dm-content dark:focus:text-primary-dm-content dark:hover:border-primary-dm-dark dark:focus:border-primary-dm-dark",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main hover:text-secondary-content focus:text-secondary-content hover:border-secondary-dark focus:border-secondary-dark dark:border-secondary-dm-dark dark:text-secondary-dm-content dark:hover:bg-secondary-dm-main dark:focus:bg-secondary-dm-main dark:hover:text-secondary-dm-content dark:focus:text-secondary-dm-content dark:hover:border-secondary-dm-dark dark:focus:border-secondary-dm-dark",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main hover:text-info-content focus:text-info-content hover:border-info-dark focus:border-info-dark dark:border-info-dm-main dark:text-info-dm-main dark:hover:bg-info-dm-main dark:focus:bg-info-dm-main dark:hover:text-info-dm-content dark:focus:text-info-dm-content dark:hover:border-info-dm-dark dark:focus:border-info-dm-dark",
      success:
        "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main hover:text-success-content focus:text-success-content hover:border-success-dark focus:border-success-dark dark:border-success-dm-main dark:text-success-dm-main dark:hover:bg-success-dm-main dark:focus:bg-success-dm-main dark:hover:text-success-dm-content dark:focus:text-success-dm-content dark:hover:border-success-dm-dark dark:focus:border-success-dm-dark",
      warning:
        "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main hover:text-warning-content focus:text-warning-content hover:border-warning-dark focus:border-warning-dark dark:border-warning-dm-dark dark:text-warning-dm-dark dark:hover:bg-warning-dm-main dark:focus:bg-warning-dm-main dark:hover:text-warning-dm-content dark:focus:text-warning-dm-content dark:hover:border-warning-dm-dark dark:focus:border-warning-dm-dark",
      error:
        "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main hover:text-error-content focus:text-error-content hover:border-error-dark focus:border-error-dark dark:border-error-dm-main dark:text-error-dm-main dark:hover:bg-error-dm-main dark:focus:bg-error-dm-main dark:hover:text-error-dm-content dark:focus:text-error-dm-content dark:hover:border-error-dm-dark dark:focus:border-error-dm-dark",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-dark text-primary-content hover:opacity-90 focus:opacity-90 dark:from-primary-dm-dark dark:to-primary-dm-light dark:border-primary-dm-dark dark:text-primary-dm-content",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-dark text-secondary-content hover:opacity-90 focus:opacity-90 dark:from-secondary-dm-dark dark:to-secondary-dm-light dark:border-secondary-dm-dark dark:text-secondary-dm-content",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-dark text-info-content hover:opacity-90 focus:opacity-90 dark:from-info-dm-dark dark:to-info-dm-light dark:border-info-dm-dark dark:text-info-dm-content",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-dark text-success-content hover:opacity-90 focus:opacity-90 dark:from-success-dm-dark dark:to-success-dm-light dark:border-success-dm-dark dark:text-success-dm-content",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-dark text-warning-content hover:opacity-90 focus:opacity-90 dark:from-warning-dm-dark dark:to-warning-dm-light dark:border-warning-dm-dark dark:text-warning-dm-content",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-dark text-error-content hover:opacity-90 focus:opacity-90 dark:from-error-dm-dark dark:to-error-dm-light dark:border-error-dm-dark dark:text-error-dm-content",
    },
  },
};

export default buttonTheme;
