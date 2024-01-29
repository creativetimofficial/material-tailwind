import type { DeepPartial } from "@types";

export type SwitchTheme = DeepPartial<typeof switchTheme>;

export const switchTheme = {
  defaultProps: {
    color: "primary",
  },
  baseStyle: "appearance-none relative inline-block rounded-full w-10 h-6",
  trackStyle:
    "before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-secondary-dark before:transition-colors before:duration-200 before:ease-in",
  circleStyle:
    "after:absolute after:top-2/4 after:left-0.5 after:-translate-y-2/4 after:w-5 after:h-5 after:bg-white after:rounded-full checked:after:translate-x-[calc(100%-4px)] after:transition-transform after:duration-200 after:ease-in",
  color: {
    primary: "checked:before:bg-primary-main",
    secondary: "checked:before:bg-secondary-main",
    info: "checked:before:bg-info-main",
    success: "checked:before:bg-success-main",
    warning: "checked:before:bg-warning-main",
    error: "checked:before:bg-error-main",
  },
};
