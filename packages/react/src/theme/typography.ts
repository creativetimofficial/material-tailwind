import type { DeepPartial } from "@types";

export type TypographyTheme = DeepPartial<typeof typographyTheme>;

export const typographyTheme = {
  defaultProps: {
    variant: "p",
    color: "inherit",
    isGradient: false,
  },
  baseStyle: "block font-sans antialiased",
  variant: {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold",
    p: "text-base font-normal",
    small: "text-sm font-normal",
  },
  color: {
    inherit: "text-inherit",
    primary: "text-primary-main dark:text-primary-dm-main",
    secondary: "text-secondary-main dark:text-secondary-dm-main",
    info: "text-info-main dark:text-info-dm-main",
    success: "text-success-main dark:text-success-dm-main",
    warning: "text-warning-main dark:text-warning-dm-main",
    error: "text-error-main dark:text-error-dm-main",
  },
};
