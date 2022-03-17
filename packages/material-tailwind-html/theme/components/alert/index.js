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
    display: "none"
  }
};

const alertVariant = (theme, background) => ({
  "background-color": theme(`${background}.500`),
  color: "#fff",

  "&.alert-gradient": {
    "background-image": `linear-gradient(to top right, ${theme(
      `${background}.600`
    )}, ${theme(`${background}.400`)})`
  }
});

const alert = (theme) => ({
  ".alert": alertRoot,
  ".alert-pink": alertVariant(theme, "colors.pink"),
  ".alert-blue": alertVariant(theme, "colors.blue"),
  ".alert-red": alertVariant(theme, "colors.red"),
  ".alert-brown": alertVariant(theme, "colors.brown")
});

module.exports.alertVariant = alertVariant;
module.exports.alert = alert;
