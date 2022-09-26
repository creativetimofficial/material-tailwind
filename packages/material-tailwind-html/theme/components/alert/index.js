const alertVariant = (theme, background) => ({
  backgroundColor: theme(`${background}.500`),
  color: theme("colors.white"),

  "&.alert-gradient": {
    backgroundImage: `linear-gradient(195deg, ${theme(`${background}.400`)}, ${theme(`${background}.600`)})`
  }
});

const alert = (theme) => ({
  ".alert": {
    position: "relative",
    padding: theme("spacing.4"),
    marginBottom: theme("spacing.4"),
    border: "0 solid transparent",
    borderRadius: theme("borderRadius.md"),
    lineHeight: theme("spacing.5"),
    opacity: theme("opacity.100"),
    transition: "opacity .15s linear",
  
    "&.hide": {
      opacity: "0",
      display: "none"
    }
  },
  ".alert-pink": alertVariant(theme, "colors.pink"),
  ".alert-purple": alertVariant(theme, "colors.purple"),
  ".alert-deep-purple": alertVariant(theme, "colors.deep-purple"),
  ".alert-indigo": alertVariant(theme, "colors.indigo"),
  ".alert-blue": alertVariant(theme, "colors.blue"),
  ".alert-light-blue": alertVariant(theme, "colors.light-blue"),
  ".alert-cyan": alertVariant(theme, "colors.cyan"),
  ".alert-teal": alertVariant(theme, "colors.teal"),
  ".alert-green": alertVariant(theme, "colors.green"),
  ".alert-light-green": alertVariant(theme, "colors.light-green"),
  ".alert-lime": alertVariant(theme, "colors.lime"),
  ".alert-yellow": alertVariant(theme, "colors.yellow"),
  ".alert-amber": alertVariant(theme, "colors.amber"),
  ".alert-orange": alertVariant(theme, "colors.orange"),
  ".alert-deep-orange": alertVariant(theme, "colors.deep-orange"),
  ".alert-brown": alertVariant(theme, "colors.brown"),
  ".alert-grey": alertVariant(theme, "colors.grey"),
  ".alert-blue-grey": alertVariant(theme, "colors.blue-grey"),
  ".alert-red": alertVariant(theme, "colors.red"),
  ".alert-secondary": alertVariant(theme, "colors.secondary"),
  ".alert-dark": alertVariant(theme, "colors.dark"),
  ".alert-light": alertVariant(theme, "colors.light")
});

module.exports.alertVariant = alertVariant;
module.exports.alert = alert;
