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
  baseStyle: "outline-hidden group",
};

export const tooltipContentTheme = {
  baseStyle:
    "rounded-md bg-black dark:bg-white border-black dark:border-white px-1.5 py-1 text-xs text-white dark:text-black shadow-lg shadow-black/5 outline-hidden",
};

export const tooltipArrowTheme = {
  baseStyle:
    "h-2 w-2 rounded-bl border border-inherit bg-inherit [clip-path:polygon(0_0,100%_100%,0_100%)] data-[placement^=bottom]:rotate-135 data-[placement^=left]:rotate-225 data-[placement^=right]:rotate-45 data-[placement^=top]:-rotate-45",
};
