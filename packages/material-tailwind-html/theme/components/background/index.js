const backgroundColor = (theme, background) => ({
  "background-color": theme(`${background}.500`),

  "&.bg-gradient": {
    "background-image": `linear-gradient(195deg, ${theme(
      `${background}.400`
    )}, ${theme(`${background}.600`)})`,
  },
});

const background = (theme) => ({
  ".bg-blue-gray": backgroundColor(theme, "colors.blue-gray"),
  ".bg-gray": backgroundColor(theme, "colors.gray"),
  ".bg-brown": backgroundColor(theme, "colors.brown"),
  ".bg-deep-orange": backgroundColor(theme, "colors.deep-orange"),
  ".bg-orange": backgroundColor(theme, "colors.orange"),
  ".bg-amber": backgroundColor(theme, "colors.amber"),
  ".bg-yellow": backgroundColor(theme, "colors.yellow"),
  ".bg-lime": backgroundColor(theme, "colors.lime"),
  ".bg-light-green": backgroundColor(theme, "colors.light-green"),
  ".bg-green": backgroundColor(theme, "colors.green"),
  ".bg-teal": backgroundColor(theme, "colors.teal"),
  ".bg-cyan": backgroundColor(theme, "colors.cyan"),
  ".bg-light-blue": backgroundColor(theme, "colors.light-blue"),
  ".bg-blue": backgroundColor(theme, "colors.blue"),
  ".bg-indigo": backgroundColor(theme, "colors.indigo"),
  ".bg-deep-purple": backgroundColor(theme, "colors.deep-purple"),
  ".bg-purple": backgroundColor(theme, "colors.purple"),
  ".bg-pink": backgroundColor(theme, "colors.pink"),
  ".bg-red": backgroundColor(theme, "colors.red"),
  ".bg-secondary": backgroundColor(theme, "colors.secondary"),
  ".bg-light": backgroundColor(theme, "colors.light"),
  ".bg-dark": backgroundColor(theme, "colors.dark"),
});

module.exports.backgroundColor = backgroundColor;
module.exports.background = background;
