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
  baseStyle: "inline-block",
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
    "fixed z-[9998] top-1/2 left-1/2 -translate-x-1/2 px-4 py-3 -translate-y-1/2 bg-white w-full h-full dark:bg-primary-dark rounded-xl shadow-2xl shadow-primary-dark/5 dark:shadow-primary-dark/10 border border-secondary-dark dark:border-secondary-dm-main",
  size: {
    xs: "w-2/12 h-max",
    sm: "w-4/12 h-max",
    md: "w-6/12 h-max",
    lg: "w-8/12 h-max",
    xl: "w-10/12 h-max",
    screen: "w-full h-full rounded-none",
  },
};

export const dialogOverlayTheme = {
  defaultProps: {
    lockScroll: true,
  },
  baseStyle:
    "fixed inset-0 w-screen h-screen z-[9997] bg-primary-dark/50 dark:bg-primary-dark/80",
};

export const dialogDismissTriggerTheme = {
  baseStyle: "absolute top-3 right-3",
};
