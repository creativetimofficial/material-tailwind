const typo = (theme) => ({
  "*": {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "h1,h2,h3,h4,h5,h6": {
    "font-weight": "400",
    "letter-spacing": "-.05rem",
    "margin-bottom": ".5rem",
    color: theme("colors.gray.900"),
  },
  a: {
    color: theme("colors.gray.900"),
  },
  "h1,.heading-1": {
    "font-size": "3rem",
    "line-height": "1.25",
  },
  "h2,.heading-2": {
    "font-size": "2.25rem",
    "line-height": "1.3",
  },
  "h3,.heading-3": {
    "font-size": "1.875rem",
    "line-height": "1.375",
  },
  "h4,.heading-4": {
    "font-size": "1.5rem",
    "line-height": "1.375",
  },
  "h5,.heading-5": {
    "font-size": "1.25rem",
    "line-height": "1.375",
  },
  "h6,.heading-6": {
    "font-size": "1rem",
    "line-height": "1.625",
    "text-transform": "uppercase",
  },
  ".lead": {
    "font-size": "1.25rem",
    "line-height": "1.625",
    "font-weight": "400",
  },
  p: {
    "line-height": "1.625",
    "font-weight": "300",
  },
  ".text-gradient": {
    "background-clip": "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "z-index": "1",
    position: "relative",
  },
});

module.exports.typo = typo;
