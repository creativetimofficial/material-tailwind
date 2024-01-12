import type { DeepPartial } from "@types";

export type CollapseTheme = DeepPartial<typeof collapseTheme>;

export const collapseTheme = {
  baseStyle:
    "block w-full h-0 overflow-hidden data-[open=true]:h-auto data-[open=true]:overflow-visible",
};
