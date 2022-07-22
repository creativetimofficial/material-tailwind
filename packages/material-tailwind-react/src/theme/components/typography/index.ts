import typographyColors from "./typographyColors";

// types
import type {
  variant,
  color,
  asType,
  textGradient,
  className,
} from "../../../types/components/typography";
import { propTypesVariant, propTypesColor } from "../../../types/components/typography";

export interface TypographyStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    as?: asType;
    textGradient?: textGradient;
    className?: className;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    variants?: {
      h1?: object;
      h2?: object;
      h3?: object;
      h4?: object;
      h5?: object;
      h6?: object;
      lead?: object;
      paragraph?: object;
      small?: object;
    };
    textGradient?: object;
    colors?: typeof typographyColors;
  };
}

export const typography: TypographyStylesType = {
  defaultProps: {
    variant: "paragraph",
    color: "inherit",
    textGradient: false,
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    variants: {
      h1: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-5xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-tight",
      },
      h2: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-4xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-[1.3]",
      },
      h3: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-3xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
      },
      h4: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-2xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
      },
      h5: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
      },
      h6: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-semibold",
        lineHeight: "leading-relaxed",
      },
      lead: {
        display: "block",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-xl",
        fontWeight: "font-normal",
        lineHeight: "leading-relaxed",
      },
      paragraph: {
        display: "block",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
      },
      small: {
        display: "block",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-light",
        lineHeight: "leading-normal",
      },
    },
    textGradient: {
      bgClip: "bg-clip-text",
      color: "text-transparent",
    },
    colors: typographyColors,
  },
};

export default typography;
