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
    "fixed z-[9998] p-4 bg-background w-80 h-80 shadow-2xl shadow-black/5 border-surface data-[placement=top]:top-0 data-[placement=top]:left-0 data-[placement=right]:top-0 data-[placement=right]:right-0 data-[placement=bottom]:bottom-0 data-[placement=bottom]:left-0 data-[placement=left]:top-0 data-[placement=left]:left-0 data-[placement=top]:w-screen data-[placement=bottom]:w-screen data-[placement=left]:h-screen data-[placement=right]:h-screen border border-surface data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in data-[open=true]:data-[placement=top]:motion-safe:slide-in-from-top-10 data-[open=true]:data-[placement=bottom]:motion-safe:slide-in-from-bottom-10 data-[open=true]:data-[placement=left]:motion-safe:slide-in-from-left-10 data-[open=true]:data-[placement=right]:motion-safe:slide-in-from-right-10",
};

export const drawerOverlayTheme = {
  defaultProps: {
    lockScroll: true,
  },
  baseStyle:
    "fixed inset-0 w-screen h-screen z-[9997] bg-black/50 data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in",
};

export const drawerDismissTriggerTheme = {
  baseStyle: "outline-none",
};
