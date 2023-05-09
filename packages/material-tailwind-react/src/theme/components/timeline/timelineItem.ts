import { color, variant, propTypeColor, propTypeVariant } from "../../../types/components/timeline";

export interface TimelineItemStyleTypes {
  defaultProps?: {
    color?: color;
    variant?: variant;
  };
  valid?: {
    colors?: string[];
    variants?: string[];
  };
  styles?: {
    base?: object;
  };
}

export const timelineItem: TimelineItemStyleTypes = {
  defaultProps: {
    color: "blue",
    variant: "filled",
  },
  valid: {
    colors: propTypeColor,
    variants: propTypeVariant,
  },
  styles: {
    base: {
      display: "flex",
      position: "relative",
      flexDirection: "flex-col",
      gap: "gap-2",
    },
  },
};

export default timelineItem;
