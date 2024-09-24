import type { DeepPartial } from "@types";

export type SliderTheme = DeepPartial<typeof sliderTheme>;
export type SliderRangeTheme = DeepPartial<typeof sliderRangeTheme>;
export type SliderThumbTheme = DeepPartial<typeof sliderThumbTheme>;
export type SliderTickTheme = DeepPartial<typeof sliderTickTheme>;

export const sliderTheme = {
  defaultProps: {
    size: "md",
    color: "primary",
  },
  baseStyle: "relative select-none rounded-full bg-surface",
  size: {
    sm: "h-0.5",
    md: "h-1",
    lg: "h-1.5",
  },
};

export const sliderRangeTheme = {
  baseStyle: "h-full rounded-full",
  color: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    info: "bg-info",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  },
};

export const sliderThumbTheme = {
  baseStyle:
    "rounded-full shadow shadow-black/10 outline-none ring ring-transparent",
  size: {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-5 h-5",
  },
  color: {
    primary:
      "bg-primary border-primary focus:ring-primary/10 active:ring-primary/10",
    secondary:
      "bg-secondary border-secondary focus:ring-secondary/10 active:ring-secondary/10",
    info: "bg-info border-info focus:ring-info/10 active:ring-info/10",
    success:
      "bg-success border-success focus:ring-success/10 active:ring-success/10",
    warning:
      "bg-warning border-warning focus:ring-warning/10 active:ring-warning/10",
    error: "bg-error border-error focus:ring-error/10 active:ring-error/10",
  },
};

export const sliderTickTheme = {
  baseStyle:
    "absolute h-full -translate-x-1/2 text-foreground before:absolute before:left-1/2 before:rounded-full before:content-['']",
  size: {
    sm: "text-xs before:h-1 before:w-px top-2.5 before:-top-2.5",
    md: "text-sm before:h-2 before:w-px top-3 before:-top-3",
    lg: "text-base before:h-2.5 before:w-0.5 top-3.5 before:-top-3.5 ",
  },
  color: {
    primary: "before:bg-primary",
    secondary: "before:bg-secondary",
    info: "before:bg-info",
    success: "before:bg-success",
    warning: "before:bg-warning",
    error: "before:bg-error",
  },
};
