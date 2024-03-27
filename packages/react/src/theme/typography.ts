import type { DeepPartial } from "@types";

export type TypographyTheme = DeepPartial<typeof typographyTheme>;

export const typographyTheme = {
  defaultProps: {
    type: "p",
    color: "inherit",
    isGradient: false,
  },
  baseStyle: "font-sans antialiased",
  color: {
    inherit: "text-inherit",
    primary: "text-primary",
    secondary: "text-secondary",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  },
  type: {
    h1: "block font-bold text-6xl",
    h2: "block font-bold text-5xl",
    h3: "block font-bold text-4xl",
    h4: "block font-bold text-3xl",
    h5: "block font-bold text-2xl",
    h6: "block font-bold text-xl",
    lead: "block font-normal text-lg",
    p: "block font-normal text-base",
    small: "inline-block font-normal text-small",
  },
};
