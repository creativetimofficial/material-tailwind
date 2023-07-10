import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

// types
import type { variant, color, shadow, floated } from "../../../types/components/card";
import { propTypesVariant, propTypesColor } from "../../../types/components/card";
import type { DeepRequired } from "ts-essentials";

export interface CardHeaderStylesType {
  defaultProps: {
    variant: variant;
    color: color;
    shadow: shadow;
    floated: floated;
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
      floated: object;
    };
    variants: {
      filled: typeof cardFilled;
      gradient: typeof cardGradient;
    };
  };
}

const cardHeader: CardHeaderStylesType = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
    floated: true,
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
        backgroundClip: "bg-clip-border",
        mt: "mt-4",
        mx: "mx-4",
        borderRadius: "rounded-xl",
        overflow: "overflow-hidden",
      },
      shadow: {
        boxShadow: "shadow-lg",
      },
      floated: {
        mt: "-mt-6",
      },
    },
    variants: {
      filled: cardFilled,
      gradient: cardGradient,
    },
  },
};

export default cardHeader;
