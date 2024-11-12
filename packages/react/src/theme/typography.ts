import type { DeepPartial } from "@types";

export type TypographyTheme = DeepPartial<typeof typographyTheme>;

export const typographyTheme = {
  defaultProps: {
    type: "p",
    color: "inherit",
  },
  baseStyle: "font-sans antialiased",
  color: {
    inherit: "text-inherit",
    default: "text-black dark:text-white",
    primary: "text-primary",
    secondary: "text-secondary",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  },
  type: {
    h1: "font-bold text-4xl md:text-5xl lg:text-6xl",
    h2: "font-bold text-3xl md:text-4xl lg:text-5xl",
    h3: "font-bold text-2xl md:text-3xl lg:text-4xl",
    h4: "font-bold text-xl md:text-2xl lg:text-3xl",
    h5: "font-bold text-lg md:text-xl lg:text-2xl",
    h6: "font-bold text-base md:text-lg lg:text-xl",
    lead: "text-base md:text-lg",
    p: " text-base",
    small: "text-sm",
  },
};
