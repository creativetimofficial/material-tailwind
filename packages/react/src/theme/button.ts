export const buttonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
  },
  baseStyle:
    "inline-block border align-middle select-none font-sans font-medium text-center transition-all duration-300 disabled:saturate-50 disabled:shadow-none disabled:pointer-events-none",
  rounded: "rounded-full",
  fullWidth: "block w-full",
  size: {
    sm: "text-sm leading-none py-2 px-2.5 rounded-md",
    md: "text-sm leading-none py-2.5 px-3.5 rounded-md",
    lg: "text-base leading-none py-3.5 px-5 rounded-lg",
  },
  variant: {
    ghost: {
      primary:
        "bg-transparent border-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 active:bg-primary-transparent hover:border-primary-main/5 focus:border-primary-main/5 active:border-transparent",
      secondary:
        "bg-transparent border-transparent text-secondary-content hover:bg-secondary-main/10 focus:bg-secondary-main/10 active:bg-secondary-transparent hover:border-secondary-main/10 focus:border-secondary-main/10 active:border-transparent",
      info: "bg-transparent border-transparent text-info-main hover:bg-info-main/10 focus:bg-info-main/10 active:bg-info-transparent hover:border-info-main/10 focus:border-info-main/10 active:border-transparent",
      success:
        "bg-transparent border-transparent text-success-main hover:bg-success-main/10 focus:bg-success-main/10 active:bg-success-transparent hover:border-success-main/10 focus:border-success-main/10 active:border-transparent",
      warning:
        "bg-transparent border-transparent text-warning-dark hover:bg-warning-main/10 focus:bg-warning-main/10 active:bg-warning-transparent hover:border-warning-main/10 focus:border-warning-main/10 active:border-transparent",
      error:
        "bg-transparent border-transparent text-error-main hover:bg-error-main/10 focus:bg-error-main/10 active:bg-error-transparent hover:border-error-main/10 focus:border-error-main/10 active:border-transparent",
    },
    solid: {
      primary:
        "bg-primary-main border-primary-dark text-primary-content hover:bg-primary-light focus:bg-primary-light active:bg-primary-main",
      secondary:
        "bg-secondary-main border-secondary-dark text-secondary-content hover:bg-secondary-light focus:bg-secondary-light active:bg-secondary-main",
      info: "bg-info-main border-info-dark text-info-content hover:bg-info-light focus:bg-info-light active:bg-info-main",
      success:
        "bg-success-main border-success-dark text-success-content hover:bg-success-light focus:bg-success-light active:bg-success-main",
      warning:
        "bg-warning-main border-warning-dark text-warning-content hover:bg-warning-light focus:bg-warning-light active:bg-warning-main",
      error:
        "bg-error-main border-error-dark text-error-content hover:bg-error-light focus:bg-error-light active:bg-error-main",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main active:bg-transparent hover:text-primary-content focus:text-primary-content active:text-primary-main hover:border-primary-dark focus:border-primary-dark active:border-primary-main",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main active:bg-transparent hover:text-secondary-content focus:text-secondary-content active:text-secondary-main hover:border-secondary-dark focus:border-secondary-dark active:border-secondary-main",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main active:bg-transparent hover:text-info-content focus:text-info-content active:text-info-main hover:border-info-dark focus:border-info-dark active:border-info-main",
      success:
        "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main active:bg-transparent hover:text-success-content focus:text-success-content active:text-success-main hover:border-success-dark focus:border-success-dark active:border-success-main",
      warning:
        "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main active:bg-transparent hover:text-warning-content focus:text-warning-content active:text-warning-main hover:border-warning-dark focus:border-warning-dark active:border-warning-main",
      error:
        "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main active:bg-transparent hover:text-error-content focus:text-error-content active:text-error-main hover:border-error-dark focus:border-error-dark active:border-error-main",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-dark text-primary-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-dark text-secondary-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-dark text-info-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-dark text-success-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-dark text-warning-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-dark text-error-content hover:opacity-90 focus:opacity-90 active:opacity-100",
    },
  },
};

export default buttonTheme;
