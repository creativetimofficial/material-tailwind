const alertRoot = {
  position: "relative",
  padding: "1rem",
  "margin-bottom": "1rem",
  border: "0 solid transparent",
  "border-radius": "0.375rem",
  "line-height": "1.25rem",
  opacity: "1",
  transition: "opacity .15s linear",

  "&.hide": {
    opacity: "0",
    display: "none",
  },
};

const alertVariant = (theme, background) => ({
  "background-color": theme(`${background}.500`),
  color: theme("colors.white"),

  "&.alert-gradient": {
    "background-image": `linear-gradient(195deg, ${theme(
      `${background}.400`
    )}, ${theme(`${background}.600`)})`,
  },
});

const alert = (theme) => ({
  ".alert": alertRoot,
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
  ".alert-gray": alertVariant(theme, "colors.gray"),
  ".alert-blue-gray": alertVariant(theme, "colors.blue-gray"),
  ".alert-red": alertVariant(theme, "colors.red"),
  ".alert-secondary": alertVariant(theme, "colors.secondary"),
  ".alert-dark": alertVariant(theme, "colors.dark"),
  ".alert-light": alertVariant(theme, "colors.light"),
});

module.exports.alertVariant = alertVariant;
module.exports.alert = alert;
