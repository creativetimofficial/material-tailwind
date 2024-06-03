import type { DeepPartial } from "@types";

export type BreadcrumbTheme = DeepPartial<typeof breadcrumbTheme>;
export type BreadcrumbLinkTheme = DeepPartial<typeof breadcrumbLinkTheme>;
export type BreadcrumbSeparatorTheme = DeepPartial<
  typeof breadcrumbSeparatorTheme
>;

export const breadcrumbTheme = {
  baseStyle: "flex flex-wrap items-center gap-1 p-1",
};

export const breadcrumbLinkTheme = {
  baseStyle:
    "inline-flex items-center gap-1.5 text-sm text-black dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary",
};

export const breadcrumbSeparatorTheme = {
  baseStyle:
    "inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-black dark:text-white",
};
