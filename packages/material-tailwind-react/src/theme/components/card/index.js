import cardFilled from "theme/components/card/cardFilled";
import cardGradient from "theme/components/card/cardGradient";
import validColors from "utils/validColors";

const card = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
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
