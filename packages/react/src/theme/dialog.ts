import type { DeepPartial } from "@types";

export type DialogTheme = DeepPartial<typeof dialogTheme>;
export type DialogTriggerTheme = DeepPartial<typeof dialogTriggerTheme>;
export type DialogContentTheme = DeepPartial<typeof dialogContentTheme>;
export type DialogOverlayTheme = DeepPartial<typeof dialogOverlayTheme>;
export type DialogDismissTriggerTheme = DeepPartial<
  typeof dialogDismissTriggerTheme
>;

export const dialogTheme = {
  defaultProps: {
    size: "md",
  },
};

export const dialogTriggerTheme = {
  baseStyle: "outline-none",
};

export const dialogContentTheme = {
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
    "fixed z-[9998] top-1/2 left-1/2 -translate-x-1/2 px-4 py-3 max-h-[calc(100vh-32px)] overflow-y-auto -translate-y-1/2 bg-background w-full h-full rounded-xl shadow-2xl shadow-black/5 border border-surface data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in data-[open=true]:motion-safe:zoom-in-95 data-[open=true]:motion-safe:slide-in-from-left-1/2 data-[open=true]:motion-safe:slide-in-from-top-1/2",
  size: {
    xs: "w-8/12 sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 h-max",
    sm: "w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 h-max",
    md: "w-10/12 md:w-8/12 lg:w-6/12 h-max",
    lg: "w-10/12 lg:w-8/12 h-max",
    xl: "w-11/12 lg:w-10/12 h-max",
    screen: "w-full h-full rounded-none max-h-screen",
  },
};

export const dialogOverlayTheme = {
  defaultProps: {
    lockScroll: true,
  },
  baseStyle:
    "fixed inset-0 w-screen h-screen z-[9997] bg-black/50 data-[open=true]:motion-safe:animate-in data-[open=true]:motion-safe:fade-in",
};

export const dialogDismissTriggerTheme = {
  baseStyle: "outline-none",
};
