const hr = (theme) => ({
  hr: {
    height: theme("spacing.px"),
    opacity: theme("opacity.25"),
    borderTopWidth: theme("spacing.0"),

    "&.horizontal": {
      backgroundColor: theme("colors.transparent"),

      "&.dark": {
        backgroundImage:
          "linear-gradient(theme('rotate.90'), theme('colors.transparent'), rgba(0,0,0,.4), theme('colors.transparent'))",
      },
      "&.light": {
        backgroundImage:
          "linear-gradient(theme('rotate.90'), hsla(0,0%,100%,0), theme('colors.white'), hsla(0,0%,100%,0))",
      },
    },

    "&.vertical": {
      position: "absolute",
      backgroundColor: theme("colors.transparent"),
      height: theme("height.full"),
      right: theme("spacing.0"),
      top: theme("spacing.0"),
      width: theme("spacing.px"),

      "&.light": {
        backgroundImage:
          "linear-gradient(theme('rotate.90'), hsla(0,0%,100%,0), theme('colors.white'), hsla(0,0%,100%,0))",
      },

      "&.dark": {
        backgroundImage:
          "linear-gradient(theme('rotate.90'), theme('colors.transparent'), rgba(0,0,0,.4), theme('colors.transparent'))",
      },
    },
  },
});

module.exports.hr = hr;
