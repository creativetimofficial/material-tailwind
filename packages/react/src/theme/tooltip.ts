import type { DeepPartial } from "@types";

export type TooltipTheme = DeepPartial<typeof tooltipTheme>;
export type TooltipTriggerTheme = DeepPartial<typeof tooltipTriggerTheme>;
export type TooltipContentTheme = DeepPartial<typeof tooltipContentTheme>;
export type TooltipArrowTheme = DeepPartial<typeof tooltipArrowTheme>;

export const tooltipTheme = {
  defaultProps: {
    placement: "top",
    offset: 8,
    interactive: false,
  },
};

export const tooltipTriggerTheme = {
  baseStyle: "outline-none group",
};

export const tooltipContentTheme = {
  baseStyle:
    "rounded-md bg-black dark:bg-white border-black dark:border-white px-1.5 py-1 text-xs text-white dark:text-black shadow-lg shadow-black/5 outline-none",
};

export const tooltipArrowTheme = {
  baseStyle:
    "h-2 w-2 rounded-bl border border-[inherit] bg-inherit [clip-path:polygon(0_0,_100%_100%,_0_100%)] data-[placement^=bottom]:rotate-[135deg] data-[placement^=left]:rotate-[225deg] data-[placement^=right]:rotate-45 data-[placement^=top]:-rotate-45",
};
