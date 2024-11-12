import type { DeepPartial } from "@types";

export type AccordionTheme = DeepPartial<typeof accordionTheme>;
export type AccordionItemTheme = DeepPartial<typeof accordionItemTheme>;
export type AccordionTriggerTheme = DeepPartial<typeof accordionTriggerTheme>;
export type AccordionContentTheme = DeepPartial<typeof accordionContentTheme>;

export const accordionTheme = {
  defaultProps: {
    type: "single",
  },
};

export const accordionItemTheme = {
  defaultProps: {
    disabled: false,
  },
  baseStyle:
    "group block w-full items-center justify-between cursor-pointer border-b border-surface aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none",
};

export const accordionTriggerTheme = {
  baseStyle:
    "flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-black",
};

export const accordionContentTheme = {
  baseStyle: "block pb-5 text-sm text-foreground h-0 data-[open=true]:h-auto",
};
