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
        fontFamily: "font-serif",
        fontSize: "text-5xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-tight",
        textTransform: "normal-case",
      },
      h2: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-serif",
        fontSize: "text-4xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-[1.3]",
        textTransform: "normal-case",
      },
      h3: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-serif",
        fontSize: "text-3xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
        textTransform: "normal-case",
      },
      h4: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-2xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
        textTransform: "normal-case",
      },
      h5: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
        textTransform: "normal-case",
      },
      h6: {
        display: "block",
        fontSmoothing: "antialiased",
        letterSpacing: "tracking-normal",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-semibold",
        lineHeight: "leading-relaxed",
        textTransform: "normal-case",
      },
      lead: {
        display: "block",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-xl",
        fontWeight: "font-normal",
        lineHeight: "leading-relaxed",
        textTransform: "normal-case",
      },
      paragraph: {
        display: "block",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
        textTransform: "normal-case",
      },
      small: {
        display: "block",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-light",
        lineHeight: "leading-normal",
        textTransform: "normal-case",
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
