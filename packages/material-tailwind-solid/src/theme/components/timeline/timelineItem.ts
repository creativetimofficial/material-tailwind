import type { color, variant } from "../../../types/components/timeline";
import { propTypeColor, propTypeVariant } from "../../../types/components/timeline";

export interface TimelineItemStyleTypes {
  defaultProps: {
    color: color;
    variant: variant;
  };
  valid: {
    colors: color[];
    variants: variant[];
  };
  styles: {
    base: Record<string, string>;
  };
}

export const timelineItem: TimelineItemStyleTypes = {
  defaultProps: {
    color: "blue",
    variant: "filled",
  },
  valid: {
    colors: [...propTypeColor],
    variants: [...propTypeVariant],
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
