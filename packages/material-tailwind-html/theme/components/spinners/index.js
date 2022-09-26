const spinners = (theme) => ({
  ".spinner-border": {
    display: "inline-block",
    width: theme("width.8"),
    height: theme("height.8"),
    verticalAlign: "-" + theme("spacing.[0.5]]"),
    border: "0.25em solid currentColor",
    borderRightColor: theme("colors.white"),
    borderRadius: "50%",
    animation: ".75s linear infinite b",

    ".sr-only": {
      border: "0",
      clip: "rect(0,0,0,0)",
      height: theme("height.px"),
      margin: "-" + theme("spacing.px"),
      overflow: "hidden",
      padding: theme("spacing.0"),
      position: "absolute",
      width: theme("width.px")
    }
  },
  "@keyframes b": {
    "100%": { 
      transform: "rotate(1turn)" 
    }
  }
});

module.exports.spinners = spinners;
