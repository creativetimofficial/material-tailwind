import type { DeepPartial } from "@types";

export type PopoverTheme = DeepPartial<typeof popoverTheme>;
export type PopoverTriggerTheme = DeepPartial<typeof popoverTriggerTheme>;
export type PopoverContentTheme = DeepPartial<typeof popoverContentTheme>;
export type PopoverArrowTheme = DeepPartial<typeof popoverArrowTheme>;

export const popoverTheme = {
  defaultProps: {
    placement: "top",
    offset: 12,
  },
};

export const popoverTriggerTheme = {
  baseStyle: "inline-block",
};

export const popoverContentTheme = {
  defaultProps: {
    disabled: false,
    initialFocus: 0,
    returnFocus: true,
    guards: true,
    modal: false,
    visuallyHiddenDismiss: true,
    closeOnFocusOut: true,
    order: ["content"],
  },
  baseStyle:
    "rounded-lg border border-secondary-dark bg-white px-3 py-2 text-sm text-primary-dark shadow-xl shadow-primary-main/[0.025] outline-none dark:border-secondary-dm-main dark:bg-primary-dark dark:shadow-primary-main/5 dark:text-primary-dm-dark",
};

export const popoverArrowTheme = {
  baseStyle:
    "h-4 w-4 rounded-bl border border-[inherit] bg-inherit [clip-path:polygon(0_0,_100%_100%,_0_100%)] data-[placement^=bottom]:rotate-[135deg] data-[placement^=left]:rotate-[225deg] data-[placement^=right]:rotate-45 data-[placement^=top]:-rotate-45",
};
