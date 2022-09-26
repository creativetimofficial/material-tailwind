const progressVariant = (theme, background) => ({
  backgroundColor: theme(`${background}.500`),

  "&.progress-gradient": {
    backgroundImage: `linear-gradient(to top right, ${theme(`${background}.600`)}, ${theme(`${background}.400`)})`
  }
});

const progress = (theme) => ({
  ".progress": {
    overflow: "visible",
    display: "flex",
    height: "0.4rem",
    fontSize: theme("fontSize.xs"),
    backgroundColor: theme("colors.gray.200"),
    borderRadius: theme("borderRadius.sm"),

    "&[percentage='true']": {
      height: "1.5rem"
    },

    ".progress-bar": {
      flexDirection: "column",
      justifyContent: "center",
      color: theme("colors.white"),
      textAlign: "center",
      whiteSpace: "nowrap",
      transition: "width .6s ease",
      borderRadius: theme("borderRadius.sm"),

      "&.progress-stripped": {
        backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)",
        backgroundSize: "theme('spacing.4') theme('spacing.4')"
      },

      "span": {
        position: "absolute",
        marginTop: "3px"
      }
    }
  },  
  ".progress-pink": progressVariant(theme, "colors.pink"),
  ".progress-purple": progressVariant(theme, "colors.purple"),
  ".progress-deep-purple": progressVariant(theme, "colors.deep-purple"),
  ".progress-indigo": progressVariant(theme, "colors.indigo"),
  ".progress-blue": progressVariant(theme, "colors.blue"),
  ".progress-light-blue": progressVariant(theme, "colors.light-blue"),
  ".progress-cyan": progressVariant(theme, "colors.cyan"),
  ".progress-teal": progressVariant(theme, "colors.teal"),
  ".progress-green": progressVariant(theme, "colors.green"),
  ".progress-light-green": progressVariant(theme, "colors.light-green"),
  ".progress-lime": progressVariant(theme, "colors.lime"),
  ".progress-yellow": progressVariant(theme, "colors.yellow"),
  ".progress-amber": progressVariant(theme, "colors.amber"),
  ".progress-orange": progressVariant(theme, "colors.orange"),
  ".progress-deep-orange": progressVariant(theme, "colors.deep-orange"),
  ".progress-brown": progressVariant(theme, "colors.brown"),
  ".progress-grey": progressVariant(theme, "colors.grey"),
  ".progress-blue-grey": progressVariant(theme, "colors.blue-grey"),
  ".progress-red": progressVariant(theme, "colors.red"),
  ".progress-secondary": progressVariant(theme, "colors.secondary"),
  ".progress-dark": progressVariant(theme, "colors.dark"),
  ".progress-light": progressVariant(theme, "colors.light")
});

module.exports.progressVariant = progressVariant;
module.exports.progress = progress;
