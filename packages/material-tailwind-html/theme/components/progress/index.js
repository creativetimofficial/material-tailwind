const progressRoot = {
  overflow: "visible",
  display: "flex",
  height: "0.4rem",
  "font-size": ".75rem",
  "background-color": "#e9ecef",
  "border-radius": ".125rem",

  "&[percentage='true']": {
    height: "1.5rem",
  },

  ".progress-bar": {
    "flex-direction": "column",
    "justify-content": "center",
    color: "#fff",
    "text-align": "center",
    "white-space": "nowrap",
    transition: "width .6s ease",
    "border-radius": ".125rem",

    "&.progress-stripped": {
      "background-image":
        "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
      "background-size": "1rem 1rem",
    },

    span: {
      position: "absolute",
      "margin-top": "3px",
    },
  },
};

const progressVariant = (theme, background) => ({
  "background-color": theme(`${background}.500`),

  "&.progress-gradient": {
    "background-image": `linear-gradient(to top right, ${theme(
      `${background}.600`
    )}, ${theme(`${background}.400`)})`,
  },
});

const progress = (theme) => ({
  ".progress": progressRoot,
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
  ".progress-gray": progressVariant(theme, "colors.gray"),
  ".progress-blue-gray": progressVariant(theme, "colors.blue-gray"),
  ".progress-red": progressVariant(theme, "colors.red"),
  ".progress-secondary": progressVariant(theme, "colors.secondary"),
  ".progress-dark": progressVariant(theme, "colors.dark"),
  ".progress-light": progressVariant(theme, "colors.light"),
});

module.exports.progressVariant = progressVariant;
module.exports.progress = progress;
