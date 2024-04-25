import type { DeepPartial } from "@types";

export type CheckboxTheme = DeepPartial<typeof checkboxTheme>;
export type CheckboxIndicatorTheme = DeepPartial<typeof checkboxIndicatorTheme>;

export const checkboxTheme = {
  defaultProps: {
    color: "primary",
  },
  baseStyle:
    "inline-block relative h-5 w-5 rounded bg-surface transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none",
  color: {
    primary: "data-[checked=true]:bg-primary text-primary-foreground",
    secondary: "data-[checked=true]:bg-secondary text-secondary-foreground",
    info: "data-[checked=true]:bg-info text-info-foreground",
    success: "data-[checked=true]:bg-success text-success-foreground",
    warning: "data-[checked=true]:bg-warning text-warning-foreground",
    error: "data-[checked=true]:bg-error text-error-foreground",
  },
};

export const checkboxIndicatorTheme = {
  baseStyle:
    "pointer-events-none absolute left-2/4 top-2/4 text-current -translate-x-2/4 -translate-y-2/4 scale-75 opacity-0 transition-all duration-200 ease-in data-[checked=true]:scale-100 data-[checked=true]:opacity-100",
};
