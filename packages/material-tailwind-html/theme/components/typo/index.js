const typo = (theme) => ({
  "*": {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "h1,h2,h3,h4,h5,h6": {
    fontWeight: theme("fontWeight.normal"),
    letterSpacing: "-.05rem",
    marginBottom: theme("spacing.2"),
    color: theme("colors.grey.900")
  },
  "a": {
    color: theme("colors.grey.900")
  },
  "h1,.heading-1": {
    fontSize: theme("fontSize.5xl"),
    lineHeight: theme("lineHeight.5")
  },
  "h2,.heading-2": {
    fontSize: theme("fontSize.4xl"),
    lineHeight: "1.3"
  },
  "h3,.heading-3": {
    fontSize: theme("fontSize.3xl"),
    lineHeight: theme("lineHeight.snug")
  },
  "h4,.heading-4": {
    fontSize: theme("fontSize.2xl"),
    lineHeight: theme("lineHeight.snug")
  },
  "h5,.heading-5": {
    fontSize: theme("fontSize.xl"),
    lineHeight: theme("lineHeight.snug")
  },
  "h6,.heading-6": {
    fontSize: theme("fontSize.base"),
    lineHeight: theme("lineHeight.relaxed"),
    textTransform: "uppercase"
  },
  ".lead": {
    fontSize: theme("fontSize.xl"),
    lineHeight: theme("lineHeight.relaxed"),
    fontWeight: theme("fontWeight.normal"),
  },
  "p": {
    lineHeight: theme("lineHeight.relaxed"),
    fontWeight: theme("fontWeight.light"),
  },
  ".text-gradient": {
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    zIndex: "1",
    position: "relative"
  }
});

module.exports.typo = typo;