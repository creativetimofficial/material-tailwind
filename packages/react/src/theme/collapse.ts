import type { DeepPartial } from "@types";

export type CollapseTheme = DeepPartial<typeof collapseTheme>;

export const collapseTheme = {
  baseStyle:
    "block w-full overflow-hidden origin-top transition-all duration-500 ease-in",
  openStyle: "h-auto",
  closeStyle: "h-0",
};

export default collapseTheme;
