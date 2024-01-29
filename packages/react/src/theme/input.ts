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
  baseStyle: "relative w-full aria-disabled:cursor-not-allowed",
  isPill: "rounded-full",
  size: {
    sm: "text-sm leading-none rounded-md",
    md: "text-sm leading-none rounded-md",
    lg: "text-base leading-none rounded-lg",
  },
};

export const inputFieldTheme = {
  baseStyle:
    "h-full w-full outline-none rounded-[inherit] text-inherit leading-[inherit] focus:outline-none text-secondary-content placeholder:text-gray-400 bg-transparent ring-transparent border border-secondary-dark transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error-main border-error-dm-main data-[success=true]:border-success-main select-none",
  size: {
    sm: "py-[4.5px] px-1.5 ring data-[icon-placement=start]:ps-6 data-[icon-placement=end]:pe-6",
    md: "py-[8.5px] px-2.5 ring data-[icon-placement=start]:ps-8 data-[icon-placement=end]:pe-8",
    lg: "py-[12.25px] px-3.5 ring-4 data-[icon-placement=start]:ps-10 data-[icon-placement=end]:pe-10",
  },
  color: {
    primary:
      "hover:border-primary-main hover:ring-primary-main/10 focus:border-primary-main focus:ring-primary-main/10",
    secondary:
      "hover:border-secondary-main hover:ring-secondary-main/10 focus:border-secondary-main focus:ring-secondary-main/10",
    info: "hover:border-info-main hover:ring-info-main/10 focus:border-info-main focus:ring-info-main/10",
    success:
      "hover:border-success-main hover:ring-success-main/10 focus:border-success-main focus:ring-success-main/10",
    warning:
      "hover:border-warning-main hover:ring-warning-main/10 focus:border-warning-main focus:ring-warning-main/10",
    error:
      "hover:border-error-main hover:ring-error-main/10 focus:border-error-main focus:ring-error-main/10",
  },
};

export const inputIconTheme = {
  defaultProps: {
    placement: "start",
  },
  baseStyle:
    "pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 peer-hover:text-secondary-content peer-focus:text-secondary-content transition-all duration-300 ease-in overflow-hidden",
  size: {
    sm: "w-4 h-4 data-[placement=start]:left-[5px] data-[placement=end]:right-[5px]",
    md: "w-5 h-5 data-[placement=start]:left-[7px] data-[placement=end]:right-[7px]",
    lg: "w-6 h-6 data-[placement=start]:left-[9px] data-[placement=end]:right-[9px]",
  },
};
