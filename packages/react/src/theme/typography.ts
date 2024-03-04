import type { DeepPartial } from "@types";

export type TypographyTheme = DeepPartial<typeof typographyTheme>;

export const typographyTheme = {
  defaultProps: {
    type: "p",
    color: "inherit",
    isGradient: false,
  },
  baseStyle:
    "block font-sans antialiased font-bold data-[type=h1]:text-[clamp(2rem,4vw,3.5rem)] data-[type=h2]:text-[clamp(1.75rem,3.5vw,3rem)] data-[type=h3]:text-[clamp(1.5rem,3vw,2.5rem)] data-[type=h4]:text-[clamp(1.25rem,2.5vw,2rem)] data-[type=h5]:text-[clamp(1rem,2vw,1.5rem)] data-[type=h6]:text-[clamp(0.75rem,1.5vw,1.25rem)] data-[type=p]:text-base data-[type=small]:text-sm data-[type=p]:font-normal data-[type=small]:font-normal",
  color: {
    inherit: "text-inherit",
    primary: "text-primary",
    secondary: "text-secondary",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  },
};
