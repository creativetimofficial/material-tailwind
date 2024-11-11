import type { DeepPartial } from "@types";

export type TabsTheme = DeepPartial<typeof tabsTheme>;
export type TabsListTheme = DeepPartial<typeof tabsListTheme>;
export type TabsTriggerTheme = DeepPartial<typeof tabsTriggerTheme>;
export type TabsPanelTheme = DeepPartial<typeof tabsPanelTheme>;
export type TabsTriggerIndicatorTheme = DeepPartial<
  typeof tabsTriggerIndicatorTheme
>;

export const tabsTheme = {
  defaultProps: {
    orientation: "horizontal",
  },
  baseStyle:
    "flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row gap-2",
};

export const tabsListTheme = {
  baseStyle:
    "relative flex shrink-0 w-max data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md p-1 bg-surface-light dark:bg-surface",
};

export const tabsTriggerTheme = {
  baseStyle:
    "inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-black dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none",
};

export const tabsPanelTheme = {
  baseStyle: "p-1 w-full block",
};

export const tabsTriggerIndicatorTheme = {
  baseStyle:
    "bg-background rounded shadow-sm shadow-black/10 transition-all duration-300 ease-in",
};
