import type { DeepPartial } from "@types";

export type InputTheme = DeepPartial<typeof inputTheme>;
export type InputFieldTheme = DeepPartial<typeof inputFieldTheme>;
export type InputIconTheme = DeepPartial<typeof inputIconTheme>;

export const inputTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    isRounded: false,
    isFullWidth: false,
    isError: false,
    isSuccess: false,
  },
  baseStyle: "relative max-w-[240px] w-full aria-disabled:cursor-not-allowed",
  isRounded: "rounded-full",
  isFullWidth: "max-w-full",
  size: {
    sm: "text-sm leading-none rounded-md",
    md: "text-sm leading-none rounded-md",
    lg: "text-base leading-none rounded-lg",
  },
};

export const inputFieldTheme = {
  baseStyle:
    "h-full w-full outline-none rounded-[inherit] text-inherit leading-[inherit] focus:outline-none text-secondary-content placeholder:text-gray-400 bg-transparent ring-transparent border border-secondary-dark transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none dark:border-secondary-dm-main dark:text-secondary-dm-content dark:placeholder:text-gray-700 data-[error=true]:border-error-main dark:data-[error=true]:border-error-dm-main data-[success=true]:border-success-main dark:data-[success=true]:border-success-dm-main select-none",
  size: {
    sm: "py-[4.5px] px-1.5 ring data-[icon-placement=start]:ps-6 data-[icon-placement=end]:pe-6",
    md: "py-[8.5px] px-2.5 ring data-[icon-placement=start]:ps-8 data-[icon-placement=end]:pe-8",
    lg: "py-[12.25px] px-3.5 ring-4 data-[icon-placement=start]:ps-10 data-[icon-placement=end]:pe-10",
  },
  color: {
    primary:
      "hover:border-primary-main hover:ring-primary-main/10 focus:border-primary-main focus:ring-primary-main/10 dark:hover:border-primary-dm-main dark:hover:ring-primary-dm-main/20 dark:focus:border-primary-dm-main dark:focus:ring-primary-dm-main/20",
    secondary:
      "hover:border-secondary-main hover:ring-secondary-main/10 focus:border-secondary-main focus:ring-secondary-main/10 dark:hover:border-secondary-dm-main dark:hover:ring-secondary-dm-main/20 dark:focus:border-secondary-dm-main dark:focus:ring-secondary-dm-main/20",
    info: "hover:border-info-main hover:ring-info-main/10 focus:border-info-main focus:ring-info-main/10 dark:hover:border-info-dm-main dark:hover:ring-info-dm-main/20 dark:focus:border-info-dm-main dark:focus:ring-info-dm-main/20",
    success:
      "hover:border-success-main hover:ring-success-main/10 focus:border-success-main focus:ring-success-main/10 dark:hover:border-success-dm-main dark:hover:ring-success-dm-main/20 dark:focus:border-success-dm-main dark:focus:ring-success-dm-main/20",
    warning:
      "hover:border-warning-main hover:ring-warning-main/10 focus:border-warning-main focus:ring-warning-main/10 dark:hover:border-warning-dm-main dark:hover:ring-warning-dm-main/20 dark:focus:border-warning-dm-main dark:focus:ring-warning-dm-main/20",
    error:
      "hover:border-error-main hover:ring-error-main/10 focus:border-error-main focus:ring-error-main/10 dark:hover:border-error-dm-main dark:hover:ring-error-dm-main/20 dark:focus:border-error-dm-main dark:focus:ring-error-dm-main/20",
  },
};

export const inputIconTheme = {
  defaultProps: {
    placement: "start",
  },
  baseStyle:
    "pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-700 peer-hover:text-secondary-content peer-focus:text-secondary-content transition-all duration-300 ease-in dark:peer-hover:text-secondary-dm-content dark:peer-focus:text-secondary-dm-content overflow-hidden",
  size: {
    sm: "w-4 h-4 data-[placement=start]:left-[5px] data-[placement=end]:right-[5px]",
    md: "w-5 h-5 data-[placement=start]:left-[7px] data-[placement=end]:right-[7px]",
    lg: "w-6 h-6 data-[placement=start]:left-[9px] data-[placement=end]:right-[9px]",
  },
};
