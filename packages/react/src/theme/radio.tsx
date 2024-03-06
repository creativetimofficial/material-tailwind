import type { DeepPartial } from "@types";

export type RadioTheme = DeepPartial<typeof radioTheme>;
export type RadioItemTheme = DeepPartial<typeof radioItemTheme>;
export type RadioIndicatorTheme = DeepPartial<typeof radioIndicatorTheme>;

export const radioTheme = {
  defaultProps: {
    color: "primary",
    orientation: "vertical",
  },
  baseStyle:
    "flex gap-2 data-[orientation=horizontal]:items-center data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
};

export const radioItemTheme = {
  baseStyle:
    "group block relative h-5 w-5 shrink-0 rounded-full bg-surface transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none",
  color: {
    primary: "data-[checked=true]:bg-primary text-primary-foreground",
    secondary: "data-[checked=true]:bg-secondary text-secondary-foreground",
    info: "data-[checked=true]:bg-info text-info-foreground",
    success: "data-[checked=true]:bg-success text-success-foreground",
    warning: "data-[checked=true]:bg-warning text-warning-foreground",
    error: "data-[checked=true]:bg-error text-error-foreground",
  },
};

export const radioIndicatorTheme = {
  baseStyle:
    "pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100",
};
