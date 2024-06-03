import type { DeepPartial } from "@types";

export type SwitchTheme = DeepPartial<typeof switchTheme>;

export const switchTheme = {
  defaultProps: {
    color: "primary",
  },
  baseStyle:
    "appearance-none relative inline-block rounded-full w-10 h-6 before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-surface before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0.5 after:-translate-y-2/4 after:w-5 after:h-5 after:bg-background after:rounded-full checked:after:translate-x-[calc(100%-4px)] after:transition-transform after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-white",
  color: {
    primary: "checked:before:bg-primary",
    secondary: "checked:before:bg-secondary",
    info: "checked:before:bg-info",
    success: "checked:before:bg-success",
    warning: "checked:before:bg-warning",
    error: "checked:before:bg-error",
  },
};
