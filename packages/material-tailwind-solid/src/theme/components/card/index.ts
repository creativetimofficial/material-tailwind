import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

// types
import type { color, shadow, variant } from "../../../types/components/card";
import { propTypesColor, propTypesVariant } from "../../../types/components/card";
import type { DeepRequired } from "ts-essentials";

export interface CardStylesType {
  defaultProps: {
    variant: variant;
    color: color;
    shadow: shadow;
    class: string;
  };
  valid: {
    variants: variant[];
    colors: color[];
  };
  styles: {
    base: {
      initial: object;
      shadow: object;
    };
    variants: {
      filled: typeof cardFilled;
      gradient: typeof cardGradient;
    };
  };
}

const card: CardStylesType = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
    class: "",
  },
  valid: {
    variants: [...propTypesVariant],
    colors: [...propTypesColor],
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
