import type { DeepPartial } from "@types";

export type CollapseTheme = DeepPartial<typeof collapseTheme>;

export const collapseTheme = {
  baseStyle:
    "block w-full origin-top transition-all duration-500 ease-in data-[open=true]:h-auto data-[open=false]:h-0 data-[open=false]:overflow-hidden",
};

export default collapseTheme;
