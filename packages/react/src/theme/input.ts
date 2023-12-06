import type { DeepPartial } from "@types";

export type InputTheme = DeepPartial<typeof inputTheme>;

export const inputTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    rounded: false,
    fullWidth: false,
    isError: false,
    isSuccess: false,
  },
  baseStyle: "relative max-w-[240px] w-full",
  rounded: "rounded-full",
  fullWidth: "max-w-full",
  inputStyle:
    "peer h-full w-full outline-none focus:outline-none text-secondary-content placeholder:text-gray-400 bg-transparent ring-transparent border border-secondary-dark transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none",
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
  size: {
    sm: "text-sm leading-none py-[4.5px] px-1.5 rounded-md ring",
    md: "text-sm leading-none py-[8.5px] px-2.5 rounded-md ring",
    lg: "text-base leading-none py-[12.25px] px-3.5 rounded-lg ring-4",
  },
  iconStyle:
    "pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 peer-hover:text-secondary-content peer-focus:text-secondary-content transition-all duration-300 ease-in",
  startIcon: "left-[7px]",
  endIcon: "right-[7px]",
  isError: "border-error-main",
  isSuccess: "border-success-main",
};

export default inputTheme;
