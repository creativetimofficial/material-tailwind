import ghost from "./timelineIconColors/ghost";
import filled from "./timelineIconColors/filled";
import outlined from "./timelineIconColors/outlined";
import gradient from "./timelineIconColors/gradient";
import { color, variant, propTypeColor, propTypeVariant } from "../../../types/components/timeline";

export interface TimelineIconStyleTypes {
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
    variants?: {
      ghost?: typeof ghost;
      filled?: typeof filled;
      outlined?: typeof outlined;
      gradient?: typeof gradient;
    };
  };
}

export const timelineIcon: TimelineIconStyleTypes = {
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
      width: "w-max",
      height: "w-max",
      padding: "p-1.5",
      position: "relative",
      zIndex: "z-[2]",
      flexShrink: "flex-shrink-0",
      borderRadius: "rounded-full",
      overflow: "overflow-hidden",
    },
    variants: {
      ghost,
      filled,
      outlined,
      gradient,
    },
  },
};

export default timelineIcon;
