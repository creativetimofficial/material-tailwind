export const iconButtonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
  },
  baseStyle:
    "inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
  rounded: "rounded-full",
  size: {
    sm: "text-sm leading-none min-w-[32px] min-h-[32px] rounded-md",
    md: "text-sm leading-none min-w-[36px] min-h-[36px] rounded-md",
    lg: "text-base leading-none min-w-[46px] min-h-[46px] rounded-lg",
  },
  variant: {
    ghost: {
      primary:
        "bg-transparent border-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 hover:border-primary-main/5 focus:border-primary-main/5",
      secondary:
        "bg-transparent border-transparent text-secondary-content hover:bg-secondary-main/10 focus:bg-secondary-main/10 hover:border-secondary-main/10 focus:border-secondary-main/10",
      info: "bg-transparent border-transparent text-info-main hover:bg-info-main/10 focus:bg-info-main/10 hover:border-info-main/10 focus:border-info-main/10",
      success:
        "bg-transparent border-transparent text-success-main hover:bg-success-main/10 focus:bg-success-main/10 hover:border-success-main/10 focus:border-success-main/10",
      warning:
        "bg-transparent border-transparent text-warning-dark hover:bg-warning-main/10 focus:bg-warning-main/10 hover:border-warning-main/10 focus:border-warning-main/10",
      error:
        "bg-transparent border-transparent text-error-main hover:bg-error-main/10 focus:bg-error-main/10 hover:border-error-main/10 focus:border-error-main/10",
    },
    solid: {
      primary:
        "bg-primary-main border-primary-dark text-primary-content hover:bg-primary-light focus:bg-primary-light",
      secondary:
        "bg-secondary-main border-secondary-dark text-secondary-content hover:bg-secondary-light focus:bg-secondary-light",
      info: "bg-info-main border-info-dark text-info-content hover:bg-info-light focus:bg-info-light",
      success:
        "bg-success-main border-success-dark text-success-content hover:bg-success-light focus:bg-success-light",
      warning:
        "bg-warning-main border-warning-dark text-warning-content hover:bg-warning-light focus:bg-warning-light",
      error:
        "bg-error-main border-error-dark text-error-content hover:bg-error-light focus:bg-error-light",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main hover:text-primary-content focus:text-primary-content hover:border-primary-dark focus:border-primary-dark",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main hover:text-secondary-content focus:text-secondary-content hover:border-secondary-dark focus:border-secondary-dark",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main hover:text-info-content focus:text-info-content hover:border-info-dark focus:border-info-dark",
      success:
        "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main hover:text-success-content focus:text-success-content hover:border-success-dark focus:border-success-dark",
      warning:
        "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main hover:text-warning-content focus:text-warning-content hover:border-warning-dark focus:border-warning-dark",
      error:
        "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main hover:text-error-content focus:text-error-content hover:border-error-dark focus:border-error-dark",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-dark text-primary-content hover:opacity-90 focus:opacity-90",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-dark text-secondary-content hover:opacity-90 focus:opacity-90",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-dark text-info-content hover:opacity-90 focus:opacity-90",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-dark text-success-content hover:opacity-90 focus:opacity-90",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-dark text-warning-content hover:opacity-90 focus:opacity-90",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-dark text-error-content hover:opacity-90 focus:opacity-90",
    },
  },
};

export default iconButtonTheme;
