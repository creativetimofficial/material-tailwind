import cardFilled from "theme/components/card/cardFilled";
import cardGradient from "theme/components/card/cardGradient";
import validColors from "utils/validColors";

const cardHeader = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
    floated: true,
    className: "",
  },
  valid: {
    variants: ["filled", "gradient"],
    colors: ["transparent", "white", ...validColors],
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
        mt: "!-mt-6",
      },
    },
    variants: {
      filled: cardFilled,
      gradient: cardGradient,
    },
  },
};

export default cardHeader;
