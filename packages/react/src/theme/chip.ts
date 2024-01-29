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
    md: "text-[13px] leading-none p-[3px]",
    lg: "text-[15px] leading-none p-1",
  },
  variant: {
    ghost: {
      primary: "bg-primary-main/10 border-transparent text-primary-a",
      secondary:
        "bg-secondary-main/10 border-transparent text-secondary-content",
      info: "bg-info-main/10 border-transparent text-info-main",
      success: "bg-success-main/10 border-transparent text-success-main",
      warning: "bg-warning-main/10 border-transparent text-warning-dark",
      error: "bg-error-main/10 border-transparent text-error-main",
    },
    solid: {
      primary: "bg-primary-main border-primary-main text-primary-content",
      secondary:
        "bg-secondary-main border-secondary-main text-secondary-content",
      info: "bg-info-main border-info-main text-info-content",
      success: "bg-success-main border-success-main text-success-content",
      warning: "bg-warning-main border-warning-main text-warning-content",
      error: "bg-error-main border-error-main text-error-content",
    },
    outline: {
      primary: "bg-transparent border-primary-main text-primary-main",
      secondary: "bg-transparent border-secondary-dark text-secondary-content",
      info: "bg-transparent border-info-main text-info-main",
      success: "bg-transparent border-success-main text-success-main",
      warning: "bg-transparent border-warning-dark text-warning-dark",
      error: "bg-transparent border-error-main text-error-main",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-main text-primary-content",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-main text-secondary-content",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-main text-info-content",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-main text-success-content",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-main text-warning-content",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-main text-error-content",
    },
  },
};

export const chipLabelTheme = {
  baseStyle: "font-inherit text-inherit leading-none",
  size: {
    sm: "my-0.5 mx-1.5",
    md: "my-[3.5px] mx-2",
    lg: "my-[4.5px] mx-2.5",
  },
};

export const chipIconTheme = {
  baseStyle: "grid place-items-center shrink-0 rounded-full",
  size: {
    sm: "translate-x-px w-3.5 h-3.5",
    md: "translate-x-0.5 w-4 h-4",
    lg: "translate-x-[3px] w-5 h-5",
  },
};

export const chipDismissTriggerTheme = {
  defaultProps: {
    ripple: true,
  },
  baseStyle: "grid place-items-center shrink-0 border rounded-full p-px",
  size: {
    sm: "-translate-x-px ms-0.5 w-3.5 h-3.5 stroke-2",
    md: "-translate-x-0.5 ms-1 w-4 h-4 stroke-2",
    lg: "-translate-x-[3px] ms-1.5 w-5 h-5 stroke-2",
  },
};
