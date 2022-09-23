const chipVariant = (theme, background) => ({
  backgroundColor: theme(`${background}.100`),
  color: theme(`${background}.500`),

  "&.chip-gradient": {
    backgroundImage: `linear-gradient(to top right, ${theme(`${background}.600`)}, ${theme(`${background}.400`)})`
  }
});

const chip = (theme) => ({ 
  ".chip": {
    fontSize: theme("fontSize.xs"),
    fontWeight: theme("fontWeight.semibold"),
    lineHeight: theme("lineHeight.none"),
    color: theme("colors.white"),
    display: "inline-block",
    padding: "0.55em 0.9em",
    borderRadius: "0.45rem",
    textTransform: "uppercase",

    "&.chip-md": {
      padding: "0.65em 1em"
    },
    "&.chip-lg": {
      padding: ".85em 1.375em"
    },
  },
  ".chip-pink": chipVariant(theme, "colors.pink"),
  ".chip-purple": chipVariant(theme, "colors.purple"),
  ".chip-deep-purple": chipVariant(theme, "colors.deep-purple"),
  ".chip-indigo": chipVariant(theme, "colors.indigo"),
  ".chip-blue": chipVariant(theme, "colors.blue"),
  ".chip-light-blue": chipVariant(theme, "colors.light-blue"),
  ".chip-cyan": chipVariant(theme, "colors.cyan"),
  ".chip-teal": chipVariant(theme, "colors.teal"),
  ".chip-green": chipVariant(theme, "colors.green"),
  ".chip-light-green": chipVariant(theme, "colors.light-green"),
  ".chip-lime": chipVariant(theme, "colors.lime"),
  ".chip-yellow": chipVariant(theme, "colors.yellow"),
  ".chip-amber": chipVariant(theme, "colors.amber"),
  ".chip-orange": chipVariant(theme, "colors.orange"),
  ".chip-deep-orange": chipVariant(theme, "colors.deep-orange"),
  ".chip-brown": chipVariant(theme, "colors.brown"),
  ".chip-grey": chipVariant(theme, "colors.grey"),
  ".chip-blue-grey": chipVariant(theme, "colors.blue-grey"),
  ".chip-red": chipVariant(theme, "colors.red"),
  ".chip-secondary": chipVariant(theme, "colors.secondary"),
  ".chip-dark": chipVariant(theme, "colors.dark"),
  ".chip-light": chipVariant(theme, "colors.light")
});

module.exports.chipVariant = chipVariant;
module.exports.chip = chip;
