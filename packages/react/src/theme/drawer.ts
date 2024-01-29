import type { DeepPartial } from "@types";

export type DrawerTriggerTheme = DeepPartial<typeof drawerTriggerTheme>;
export type DrawerPanelTheme = DeepPartial<typeof drawerPanelTheme>;
export type DrawerOverlayTheme = DeepPartial<typeof drawerOverlayTheme>;
export type DrawerDismissTriggerTheme = DeepPartial<
  typeof drawerDismissTriggerTheme
>;

export const drawerTriggerTheme = {
  baseStyle: "outline-none",
};

export const drawerPanelTheme = {
  defaultProps: {
    disabled: false,
    initialFocus: 0,
    returnFocus: true,
    guards: true,
    modal: false,
    visuallyHiddenDismiss: true,
    closeOnFocusOut: true,
    order: ["content"],
    placement: "right",
  },
  baseStyle:
    "fixed z-[9998] p-4 bg-white w-full h-full shadow-2xl shadow-primary-dark/5 border-secondary-dark data-[placement=top]:top-0 data-[placement=top]:left-0 data-[placement=right]:top-0 data-[placement=right]:right-0 data-[placement=bottom]:bottom-0 data-[placement=bottom]:left-0 data-[placement=left]:top-0 data-[placement=left]:left-0 data-[placement=top]:w-screen data-[placement=bottom]:w-screen data-[placement=left]:h-screen data-[placement=right]:h-screen",
};

export const drawerOverlayTheme = {
  defaultProps: {
    lockScroll: true,
  },
  baseStyle: "fixed inset-0 w-screen h-screen z-[9997] bg-primary-dark/50",
};

export const drawerDismissTriggerTheme = {
  baseStyle: "outline-none",
};
