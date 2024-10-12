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
    "relative flex items-start w-full border rounded-md p-2 data-[pill=true]:rounded-full",
  variant: {
    ghost: {
      primary: "bg-primary/10 border-transparent text-primary",
      secondary: "bg-secondary/10 border-transparent text-secondary-foreground",
      info: "bg-info/10 border-transparent text-info",
      success: "bg-success/10 border-transparent text-success",
      warning: "bg-warning/10 border-transparent text-warning",
      error: "bg-error/10 border-transparent text-error",
    },
    solid: {
      primary: "bg-primary border-primary text-primary-foreground",
      secondary: "bg-secondary border-secondary text-secondary-foreground",
      info: "bg-info border-info text-info-foreground",
      success: "bg-success border-success text-success-foreground",
      warning: "bg-warning border-warning text-warning-foreground",
      error: "bg-error border-error text-error-foreground",
    },
    outline: {
      primary: "bg-transparent border-primary text-primary",
      secondary: "bg-transparent border-secondary text-secondary-foreground",
      info: "bg-transparent border-info text-info",
      success: "bg-transparent border-success text-success",
      warning: "bg-transparent border-warning text-warning",
      error: "bg-transparent border-error text-error",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary text-primary-foreground",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary text-secondary-foreground",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info text-info-foreground",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success text-success-foreground",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning text-warning-foreground",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error text-error-foreground",
    },
  },
};

export const alertContentTheme = {
  baseStyle: "w-full text-sm font-sans leading-none m-1.5",
};

export const alertIconTheme = {
  baseStyle: "grid place-items-center shrink-0 p-1",
};

export const alertDismissTriggerTheme = {
  baseStyle: "outline-none",
};
