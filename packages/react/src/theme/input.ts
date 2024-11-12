import type { DeepPartial } from "@types";

export type InputTheme = DeepPartial<typeof inputTheme>;
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
    "w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-black dark:text-white placeholder:text-foreground/60 bg-transparent ring-transparent border border-surface transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full",
  size: {
    sm: "text-sm rounded-md py-1.5 px-2 ring shadow-sm data-[icon-placement=start]:ps-7 data-[icon-placement=end]:pe-7",
    md: "text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9",
    lg: "text-base rounded-lg py-3 leading-none px-3 ring-4 shadow-sm data-[icon-placement=start]:ps-11 data-[icon-placement=end]:pe-11",
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
    sm: "w-4 h-4 data-[placement=start]:left-2 data-[placement=end]:right-2",
    md: "w-5 h-5 data-[placement=start]:left-2.5 data-[placement=end]:right-2.5",
    lg: "w-6 h-6 data-[placement=start]:left-3 data-[placement=end]:right-3",
  },
};
