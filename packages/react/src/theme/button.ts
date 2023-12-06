import type { DeepPartial } from "@types";

export type ButtonTheme = DeepPartial<typeof buttonTheme>;

export const buttonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    rounded: false,
    fullWidth: false,
  },
  baseStyle:
    "inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
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
        "bg-primary-main border-primary-main text-primary-content hover:bg-primary-light focus:bg-primary-light hover:border-primary-light focus:border-primary-light dark:bg-primary-dm-main dark:border-primary-dm-main dark:text-primary-dm-content dark:hover:bg-primary-dm-light dark:focus:bg-primary-dm-light dark:hover:border-primary-dm-light dark:focus:border-primary-dm-light",
      secondary:
        "bg-secondary-main border-secondary-main text-secondary-content hover:bg-secondary-light focus:bg-secondary-light hover:border-secondary-light focus:border-secondary-light dark:bg-secondary-dm-main dark:border-secondary-dm-main dark:text-secondary-dm-content dark:hover:bg-secondary-dm-light dark:focus:bg-secondary-dm-light dark:hover:border-secondary-dm-light dark:focus:border-secondary-dm-light",
      info: "bg-info-main border-info-main text-info-content hover:bg-info-light focus:bg-info-light hover:border-info-light focus:border-info-light dark:bg-info-dm-main dark:border-info-dm-main dark:text-info-dm-content dark:hover:bg-info-dm-light dark:focus:bg-info-dm-light dark:hover:border-info-dm-light dark:focus:border-info-dm-light",
      success:
        "bg-success-main border-success-main text-success-content hover:bg-success-light focus:bg-success-light hover:border-success-light focus:border-success-light dark:bg-success-dm-main dark:border-success-dm-main dark:text-success-dm-content dark:hover:bg-success-dm-light dark:focus:bg-success-dm-light dark:hover:border-success-dm-light dark:focus:border-success-dm-light",
      warning:
        "bg-warning-main border-warning-main text-warning-content hover:bg-warning-light focus:bg-warning-light hover:border-warning-light focus:border-warning-light dark:bg-warning-dm-main dark:border-warning-dm-main dark:text-warning-dm-content dark:hover:bg-warning-dm-light dark:focus:bg-warning-dm-light dark:hover:border-warning-dm-light dark:focus:border-warning-dm-light",
      error:
        "bg-error-main border-error-main text-error-content hover:bg-error-light focus:bg-error-light hover:border-error-light focus:border-error-light dark:bg-error-dm-main dark:border-error-dm-main dark:text-error-dm-content dark:hover:bg-error-dm-light dark:focus:bg-error-dm-light dark:hover:border-error-dm-light dark:focus:border-error-dm-light",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main hover:text-primary-content focus:text-primary-content hover:border-primary-main focus:border-primary-main dark:border-primary-dm-main dark:text-primary-dm-main dark:hover:bg-primary-dm-main dark:focus:bg-primary-dm-main dark:hover:text-primary-dm-content dark:focus:text-primary-dm-content dark:hover:border-primary-dm-main dark:focus:border-primary-dm-main",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main hover:text-secondary-content focus:text-secondary-content hover:border-secondary-main focus:border-secondary-main dark:border-secondary-dm-dark dark:text-secondary-dm-content dark:hover:bg-secondary-dm-main dark:focus:bg-secondary-dm-main dark:hover:text-secondary-dm-content dark:focus:text-secondary-dm-content dark:hover:border-secondary-dm-main dark:focus:border-secondary-dm-main",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main hover:text-info-content focus:text-info-content hover:border-info-main focus:border-info-main dark:border-info-dm-main dark:text-info-dm-main dark:hover:bg-info-dm-main dark:focus:bg-info-dm-main dark:hover:text-info-dm-content dark:focus:text-info-dm-content dark:hover:border-info-dm-main dark:focus:border-info-dm-main",
      success:
        "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main hover:text-success-content focus:text-success-content hover:border-success-main focus:border-success-main dark:border-success-dm-main dark:text-success-dm-main dark:hover:bg-success-dm-main dark:focus:bg-success-dm-main dark:hover:text-success-dm-content dark:focus:text-success-dm-content dark:hover:border-success-dm-main dark:focus:border-success-dm-main",
      warning:
        "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main hover:text-warning-content focus:text-warning-content hover:border-warning-main focus:border-warning-main dark:border-warning-dm-dark dark:text-warning-dm-dark dark:hover:bg-warning-dm-main dark:focus:bg-warning-dm-main dark:hover:text-warning-dm-content dark:focus:text-warning-dm-content dark:hover:border-warning-dm-main dark:focus:border-warning-dm-main",
      error:
        "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main hover:text-error-content focus:text-error-content hover:border-error-main focus:border-error-main dark:border-error-dm-main dark:text-error-dm-main dark:hover:bg-error-dm-main dark:focus:bg-error-dm-main dark:hover:text-error-dm-content dark:focus:text-error-dm-content dark:hover:border-error-dm-main dark:focus:border-error-dm-main",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-main text-primary-content hover:opacity-90 focus:opacity-90 dark:from-primary-dm-dark dark:to-primary-dm-light dark:border-primary-dm-main dark:text-primary-dm-content",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-main text-secondary-content hover:opacity-90 focus:opacity-90 dark:from-secondary-dm-dark dark:to-secondary-dm-light dark:border-secondary-dm-main dark:text-secondary-dm-content",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-main text-info-content hover:opacity-90 focus:opacity-90 dark:from-info-dm-dark dark:to-info-dm-light dark:border-info-dm-main dark:text-info-dm-content",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-main text-success-content hover:opacity-90 focus:opacity-90 dark:from-success-dm-dark dark:to-success-dm-light dark:border-success-dm-main dark:text-success-dm-content",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-main text-warning-content hover:opacity-90 focus:opacity-90 dark:from-warning-dm-dark dark:to-warning-dm-light dark:border-warning-dm-main dark:text-warning-dm-content",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-main text-error-content hover:opacity-90 focus:opacity-90 dark:from-error-dm-dark dark:to-error-dm-light dark:border-error-dm-main dark:text-error-dm-content",
    },
  },
};

export default buttonTheme;
