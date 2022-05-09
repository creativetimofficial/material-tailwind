import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

// types
import type { variant, color, shadow, floated, className } from "../../../types/components/card";
import { propTypesVariant, propTypesColor } from "../../../types/components/card";

export interface CardStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    shadow?: shadow;
    className?: className;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      shadow?: object;
    };
    variants?: {
      filled?: typeof cardFilled;
      gradient?: typeof cardGradient;
    };
  };
}

const card: CardStylesType = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        position: "relative",
        display: "flex",
        flexDirection: "flex-col",
        backgroundClip: "bg-clip-border",
        borderRadius: "rounded-xl",
      },
      shadow: {
        boxShadow: "shadow-md",
      },
    },
    variants: {
      filled: cardFilled,
      gradient: cardGradient,
    },
  },
};

export default card;
