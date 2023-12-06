import type { DeepPartial } from "@types";

export type SwitchTheme = DeepPartial<typeof switchTheme>;

export const switchTheme = {
  defaultProps: {
    color: "primary",
  },
  baseStyle: "appearance-none relative inline-block rounded-full w-10 h-6",
  trackStyle:
    "before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-secondary-dark before:transition-colors before:duration-300 before:ease-in dark:before:bg-secondary-dm-main",
  circleStyle:
    "after:absolute after:top-2/4 after:left-0.5 after:-translate-y-2/4 after:w-5 after:h-5 after:bg-white after:rounded-full checked:after:translate-x-[calc(100%-4px)] after:transition-transform after:duration-300 after:ease-in dark:after:bg-primary-dark",
  color: {
    primary:
      "checked:before:bg-primary-main dark:checked:before:bg-primary-dm-main",
    secondary:
      "checked:before:bg-secondary-main dark:checked:before:bg-secondary-dm-main",
    info: "checked:before:bg-info-main dark:checked:before:bg-info-dm-main",
    success:
      "checked:before:bg-success-main dark:checked:before:bg-success-dm-main",
    warning:
      "checked:before:bg-warning-main dark:checked:before:bg-warning-dm-main",
    error: "checked:before:bg-error-main dark:checked:before:bg-error-dm-main",
  },
};

export default switchTheme;
