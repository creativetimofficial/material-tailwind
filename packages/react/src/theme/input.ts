import type { DeepPartial } from "@types";

export type InputTheme = DeepPartial<typeof inputTheme>;
export type InputFieldTheme = DeepPartial<typeof inputFieldTheme>;
export type InputIconTheme = DeepPartial<typeof inputIconTheme>;

export const inputTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    isPill: false,
    isError: false,
    isSuccess: false,
  },
  baseStyle:
    "relative w-full aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full",
  size: {
    sm: "text-sm leading-none rounded-md",
    md: "text-sm leading-none rounded-md",
    lg: "text-base leading-none rounded-lg",
  },
};

export const inputFieldTheme = {
  baseStyle:
    "h-full w-full outline-none rounded-[inherit] text-inherit leading-[inherit] focus:outline-none text-black dark:text-white placeholder:text-foreground/60 bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none",
  size: {
    sm: "py-[4.5px] px-1.5 ring data-[icon-placement=start]:ps-6 data-[icon-placement=end]:pe-6",
    md: "py-[8.5px] px-2.5 ring data-[icon-placement=start]:ps-8 data-[icon-placement=end]:pe-8",
    lg: "py-[12.25px] px-3.5 ring-4 data-[icon-placement=start]:ps-10 data-[icon-placement=end]:pe-10",
  },
  color: {
    primary:
      "hover:border-primary hover:ring-primary/10 focus:border-primary focus:ring-primary/10",
    secondary:
      "hover:border-secondary hover:ring-secondary/10 focus:border-secondary focus:ring-secondary/10",
    info: "hover:border-info hover:ring-info/10 focus:border-info focus:ring-info/10",
    success:
      "hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10",
    warning:
      "hover:border-warning hover:ring-warning/10 focus:border-warning focus:ring-warning/10",
    error:
      "hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10",
  },
};

export const inputIconTheme = {
  defaultProps: {
    placement: "start",
  },
  baseStyle:
    "pointer-events-none absolute top-1/2 -translate-y-1/2 text-foreground/70 peer-hover:text-black peer-focus:text-black dark:peer-hover:text-white dark:peer-focus:text-white transition-all duration-300 ease-in overflow-hidden",
  size: {
    sm: "w-4 h-4 data-[placement=start]:left-[5px] data-[placement=end]:right-[5px]",
    md: "w-5 h-5 data-[placement=start]:left-[7px] data-[placement=end]:right-[7px]",
    lg: "w-6 h-6 data-[placement=start]:left-[9px] data-[placement=end]:right-[9px]",
  },
};
