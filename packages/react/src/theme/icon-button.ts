import { buttonTheme } from "./button";
import type { DeepPartial } from "@types";

export type IconButtonTheme = DeepPartial<typeof iconButtonTheme>;

export const iconButtonTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
    ripple: true,
    isCircular: false,
  },
  baseStyle:
    "inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full",
  size: {
    xs: "text-sm min-w-[30px] min-h-[30px] rounded-md shadow-sm hover:shadow",
    sm: "text-sm min-w-[34px] min-h-[34px] rounded-md shadow-sm hover:shadow",
    md: "text-sm min-w-[38px] min-h-[38px] rounded-md shadow-sm hover:shadow-md",
    lg: "text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg",
    xl: "text-base min-w-[50px] min-h-[50px] rounded-lg shadow-sm hover:shadow-lg",
  },
  variant: buttonTheme.variant,
};
