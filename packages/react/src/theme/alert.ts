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
    "relative flex w-full items-center border select-none text-base font-sans font-medium rounded-md p-2 data-[pill=true]:rounded-full",
  variant: {
    ghost: {
      primary: "bg-primary-main/10 border-transparent text-primary-main",
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

export const alertContentTheme = {
  baseStyle: "font-inherit w-full text-inherit leading-none m-1.5",
};

export const alertIconTheme = {
  baseStyle: "grid place-items-center shrink-0 w-5 h-5 mx-1",
};

export const alertDismissTriggerTheme = {
  defaultProps: {
    ripple: true,
  },
  baseStyle:
    "grid place-items-center shrink-0 w-5 h-5 me-1 ms-3 rounded-full stroke-[1.5] text-inherit",
};
