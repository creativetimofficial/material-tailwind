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
    sm: "text-sm leading-none min-w-[28px] min-h-[28px] rounded-md",
    md: "text-sm leading-none min-w-[36px] min-h-[36px] rounded-md",
    lg: "text-base leading-none min-w-[46px] min-h-[46px] rounded-lg",
  },
  variant: buttonTheme.variant,
};
