import type { DeepPartial } from "@types";

export type TimelineTheme = DeepPartial<typeof timelineTheme>;
export type TimelineItemTheme = DeepPartial<typeof timelineItemTheme>;
export type TimelineHeaderTheme = DeepPartial<typeof timelineHeaderTheme>;
export type TimelineIconTheme = DeepPartial<typeof timelineIconTheme>;
export type TimelineSeparatorTheme = DeepPartial<typeof timelineSeparatorTheme>;
export type TimelineBodyTheme = DeepPartial<typeof timelineBodyTheme>;

export const timelineTheme = {
  defaultProps: {
    color: "primary",
    mode: "timeline",
    orientation: "horizontal",
  },
  baseStyle:
    "flex w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=horizontal]:items-center",
};

export const timelineItemTheme = {
  baseStyle:
    "group data-[orientation=horizontal]:block data-[orientation=vertical]:flex data-[orientation=vertical]:gap-x-6 aria-disabled:select-none aria-disabled:pointer-events-none",
};

export const timelineHeaderTheme = {
  baseStyle: "relative",
};

export const timelineIconTheme = {
  baseStyle:
    "relative z-10 grid h-10 w-10 place-items-center rounded-full bg-surface text-surface-foreground",
  color: {
    primary:
      "group-data-[active=true]:bg-primary group-data-[active=true]:text-primary-foreground group-data-[completed=true]:bg-primary group-data-[completed=true]:text-primary-foreground",
    secondary:
      "group-data-[active=true]:bg-secondary group-data-[active=true]:text-secondary-foreground group-data-[completed=true]:bg-secondary group-data-[completed=true]:text-secondary-foreground",
    info: "group-data-[active=true]:bg-info group-data-[active=true]:text-info-foreground group-data-[completed=true]:bg-info group-data-[completed=true]:text-info-foreground",
    success:
      "group-data-[active=true]:bg-success group-data-[active=true]:text-success-foreground group-data-[completed=true]:bg-success group-data-[completed=true]:text-success-foreground",
    warning:
      "group-data-[active=true]:bg-warning group-data-[active=true]:text-warning-foreground group-data-[completed=true]:bg-warning group-data-[completed=true]:text-warning-foreground",
    error:
      "group-data-[active=true]:bg-error group-data-[active=true]:text-error-foreground group-data-[completed=true]:bg-error group-data-[completed=true]:text-error-foreground",
  },
};

export const timelineSeparatorTheme = {
  baseStyle:
    "bg-surface absolute data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:top-0 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:-translate-y-1/2",
  color: {
    primary: "group-data-[completed=true]:bg-primary",
    secondary: "group-data-[completed=true]:bg-secondary",
    info: "group-data-[completed=true]:bg-info",
    success: "group-data-[completed=true]:bg-success",
    warning: "group-data-[completed=true]:bg-warning",
    error: "group-data-[completed=true]:bg-error",
  },
};

export const timelineBodyTheme = {
  baseStyle:
    "data-[orientation=vertical]:pb-8 data-[orientation=horizontal]:py-4 text-foreground",
};
