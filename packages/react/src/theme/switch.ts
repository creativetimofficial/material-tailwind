import type { DeepPartial } from "@types";

export type SwitchTheme = DeepPartial<typeof switchTheme>;

export const switchTheme = {
  defaultProps: {
    color: "primary",
  },
  baseStyle:
    "appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-surface before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-surface after:bg-background after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-white",
  color: {
    primary: "checked:before:bg-primary checked:after:border-primary",
    secondary: "checked:before:bg-secondary checked:after:border-secondary",
    info: "checked:before:bg-info checked:after:border-info",
    success: "checked:before:bg-success checked:after:border-success",
    warning: "checked:before:bg-warning checked:after:border-warning",
    error: "checked:before:bg-error checked:after:border-error",
  },
};
