import typographyColors from "theme/components/typography/typographyColors";

const alert = {
  defaultProps: {
    variant: "paragraph",
    color: "blue-grey",
    textGradient: false,
    className: "",
  },
  styles: {
    variants: {
      h1: {
        root: "block antialiased -tracking-tighter",
        family: "font-serif",
        weight: "font-semibold",
        size: "text-5xl leading-tight",
      },
      h2: {
        root: "block antialiased -tracking-tighter",
        family: "font-serif",
        weight: "font-semibold",
        size: "text-4xl leading-[1.3]",
      },
      h3: {
        root: "block antialiased -tracking-tighter",
        family: "font-serif",
        weight: "font-semibold",
        size: "text-3xl leading-snug",
      },
      h4: {
        root: "block antialiased -tracking-tighter",
        family: "font-sans",
        weight: "font-semibold",
        size: "text-2xl leading-snug",
      },
      h5: {
        root: "block antialiased",
        family: "font-sans",
        weight: "font-semibold",
        size: "text-xl leading-snug",
      },
      h6: {
        root: "block antialiased",
        family: "font-sans",
        weight: "font-semibold",
        size: "text-base leading-relaxed",
      },
      lead: {
        root: "block antialiased",
        family: "font-sans",
        weight: "font-normal",
        size: "text-xl leading-relaxed",
      },
      paragraph: {
        root: "block antialiased",
        family: "font-sans",
        weight: "font-light",
        size: "text-base leading-relaxed",
      },
      small: {
        root: "block antialiased",
        family: "font-sans",
        weight: "font-light",
        size: "text-sm leading-normal",
      },
    },
    colors: typographyColors,
    textGradient: "bg-clip-text text-transparent",
  },
};

export default alert;
