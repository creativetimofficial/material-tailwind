import type { DeepPartial } from "@types";

export type ButtonTheme = DeepPartial<typeof buttonTheme>;

export const buttonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    isPill: false,
    isFullWidth: false,
  },
  baseStyle:
    "inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed",
  isPill: "rounded-full",
  isFullWidth: "flex w-full",
  size: {
    sm: "text-sm leading-none py-1.5 px-2.5 rounded-md",
    md: "text-sm leading-none py-2.5 px-3.5 rounded-md",
    lg: "text-base leading-none py-3.5 px-5 rounded-lg",
  },
  variant: {
    ghost: {
      primary:
        "bg-transparent border-transparent text-primary hover:bg-primary/5 hover:border-primary/5",
      secondary:
        "bg-transparent border-transparent text-secondary-foreground hover:bg-secondary/10 hover:border-secondary/10",
      info: "bg-transparent border-transparent text-info hover:bg-info/10 hover:border-info/10",
      success:
        "bg-transparent border-transparent text-success hover:bg-success/10 hover:border-success/10",
      warning:
        "bg-transparent border-transparent text-warning hover:bg-warning/10 hover:border-warning/10",
      error:
        "bg-transparent border-transparent text-error hover:bg-error/10 hover:border-error/10",
    },
    solid: {
      primary:
        "bg-primary border-primary text-primary-foreground hover:bg-primary-light hover:border-primary-light",
      secondary:
        "bg-secondary border-secondary text-secondary-foreground hover:bg-secondary-light hover:border-secondary-light",
      info: "bg-info border-info text-info-foreground hover:bg-info-light hover:border-info-light",
      success:
        "bg-success border-success text-success-foreground hover:bg-success-light hover:border-success-light",
      warning:
        "bg-warning border-warning text-warning-foreground hover:bg-warning-light hover:border-warning-light",
      error:
        "bg-error border-error text-error-foreground hover:bg-error-light hover:border-error-light",
    },
    outline: {
      primary:
        "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      secondary:
        "bg-transparent border-secondary text-secondary-foreground hover:bg-secondary",
      info: "bg-transparent border-info text-info hover:bg-info hover:text-info-foreground",
      success:
        "bg-transparent border-success text-success hover:bg-success hover:text-success-foreground",
      warning:
        "bg-transparent border-warning text-warning hover:bg-warning hover:text-warning-foreground",
      error:
        "bg-transparent border-error text-error hover:bg-error hover:text-error-foreground",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary text-primary-foreground hover:brightness-105",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary text-secondary-foreground hover:brightness-105",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info text-info-foreground hover:brightness-105",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success text-success-foreground hover:brightness-105",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning text-warning-foreground hover:brightness-105",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error text-error-foreground hover:brightness-105",
    },
  },
};
