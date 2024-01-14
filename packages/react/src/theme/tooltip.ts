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
  baseStyle: "outline-none",
};

export const tooltipContentTheme = {
  baseStyle:
    "rounded-md bg-primary-main border-primary-main px-1.5 pt-1 pb-[3px] text-xs text-primary-content shadow-lg shadow-primary-main/5 outline-none dark:border-primary-dm-main dark:bg-primary-dm-main dark:shadow-primary-dark/5 dark:text-primary-dm-content",
};

export const tooltipArrowTheme = {
  baseStyle:
    "h-2 w-2 rounded-bl-[3px] border border-[inherit] bg-inherit [clip-path:polygon(0_0,_100%_100%,_0_100%)] data-[placement^=bottom]:rotate-[135deg] data-[placement^=left]:rotate-[225deg] data-[placement^=right]:rotate-45 data-[placement^=top]:-rotate-45",
};
