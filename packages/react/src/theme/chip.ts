import type { DeepPartial } from "@types";

export type ChipTheme = DeepPartial<typeof chipTheme>;
export type ChipLabelTheme = DeepPartial<typeof chipLabelTheme>;
export type ChipIconTheme = DeepPartial<typeof chipIconTheme>;
export type ChipDismissTriggerTheme = DeepPartial<
  typeof chipDismissTriggerTheme
>;

export const chipTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
  },
  baseStyle:
    "relative inline-flex items-center border select-none font-sans font-medium rounded-full",
  size: {
    sm: "text-xs leading-none p-0.5",
    md: "text-xs leading-none p-0.5",
    lg: "text-sm leading-none p-1",
  },
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

export const chipLabelTheme = {
  baseStyle: "font-inherit text-inherit leading-none",
  size: {
    sm: "my-0.5 mx-1.5",
    md: "my-1 mx-2",
    lg: "my-1.5 mx-2.5",
  },
};

export const chipIconTheme = {
  baseStyle: "grid place-items-center shrink-0 rounded-full",
  size: {
    sm: "translate-x-px w-3.5 h-3.5",
    md: "translate-x-0.5 w-4 h-4",
    lg: "translate-x-1 w-5 h-5",
  },
};

export const chipDismissTriggerTheme = {
  defaultProps: {
    ripple: true,
  },
  baseStyle: "grid place-items-center shrink-0 rounded-full p-px",
  size: {
    sm: "-translate-x-px ms-0.5 w-4 h-4 stroke-2",
    md: "-translate-x-0.5 ms-1 w-5 h-5 stroke-2",
    lg: "-translate-x-1 ms-1.5 w-6 h-6 stroke-2",
  },
};
