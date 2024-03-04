import type { DeepPartial } from "@types";

export type ListTheme = DeepPartial<typeof listTheme>;
export type ListItemTheme = DeepPartial<typeof listItemTheme>;
export type ListItemStartTheme = DeepPartial<typeof listItemStartTheme>;
export type ListItemEndTheme = DeepPartial<typeof listItemEndTheme>;

export const listTheme = {
  baseStyle: "flex flex-col gap-0.5 min-w-[240px]",
};

export const listItemTheme = {
  defaultProps: {
    ripple: true,
  },
  baseStyle:
    "flex items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans font-normal transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-foreground hover:text-surface-dark hover:bg-surface/70 focus:bg-surface/70 focus:text-surface-dark data-[selected=true]:bg-surface/70 data-[selected=true]:text-surface-dark",
};

export const listItemStartTheme = {
  baseStyle: "grid place-items-center shrink-0 me-2.5",
};

export const listItemEndTheme = {
  baseStyle: "grid place-items-center shrink-0 ps-2.5 ms-auto",
};
