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
  baseStyle: "outline-none group",
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
    "min-w-40 rounded-lg space-y-0.5 border border-surface bg-background p-1 text-sm text-foreground shadow-xl shadow-black/[0.025] outline-none",
};

export const menuItemTheme = {
  defaultProps: {
    ripple: true,
    closeOnClick: true,
  },
  baseStyle:
    "w-full text-start flex items-center py-1.5 px-2.5 rounded align-middle select-none outline-none font-sans  transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-foreground hover:text-black dark:hover:text-white hover:bg-surface focus:bg-surface focus:text-black dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70",
};
