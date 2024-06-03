import type { DeepPartial } from "@types";

export type NavbarTheme = DeepPartial<typeof navbarTheme>;

export const navbarTheme = {
  defaultProps: {
    variant: "solid",
    color: "default",
  },
  baseStyle: "w-full rounded-lg border shadow-lg overflow-hidden p-2",
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
      default: "bg-transparent border-surface shadow-transparent",
      primary: "bg-transparent border-primary shadow-transparent",
      secondary: "bg-transparent border-secondary shadow-transparent",
      info: "bg-transparent border-info shadow-transparent",
      success: "bg-transparent border-success shadow-transparent",
      warning: "bg-transparent border-warning shadow-transparent",
      error: "bg-transparent border-error shadow-transparent",
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
