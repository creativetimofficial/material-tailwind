import type { DeepPartial } from "@types";

export type MenuTheme = DeepPartial<typeof menuTheme>;
export type MenuTriggerTheme = DeepPartial<typeof menuTriggerTheme>;
export type MenuContentTheme = DeepPartial<typeof menuContentTheme>;
export type MenuItemTheme = DeepPartial<typeof menuItemTheme>;

export const menuTheme = {
  defaultProps: {
    placement: "bottom",
    offset: 5,
  },
};

export const menuTriggerTheme = {
  baseStyle: "inline-block outline-none",
};

export const menuContentTheme = {
  defaultProps: {
    disabled: false,
    initialFocus: 0,
    returnFocus: true,
    guards: true,
    modal: false,
    visuallyHiddenDismiss: true,
    closeOnFocusOut: true,
    order: ["content"],
  },
  baseStyle:
    "min-w-[160px] rounded-lg space-y-0.5 border border-secondary-dark bg-white p-1 text-sm text-primary-dark shadow-xl shadow-primary-main/[0.025] outline-none dark:border-secondary-dm-main dark:bg-primary-dark dark:shadow-primary-main/5 dark:text-primary-dm-dark",
};

export const menuItemTheme = {
  defaultProps: {
    ripple: true,
    closeOnClick: true,
  },
  baseStyle:
    "w-full text-start flex items-center py-1.5 px-2.5 rounded-[5px] align-middle select-none outline-none font-sans font-normal transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-primary-main hover:bg-primary-main/10 focus:bg-primary-main/10 dark:text-primary-dm-main dark:hover:bg-primary-dm-main/10 dark:focus:bg-primary-dm-main/10",
};
