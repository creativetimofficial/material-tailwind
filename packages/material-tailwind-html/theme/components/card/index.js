const { backgroundColor } = require("tailwindcss/defaultTheme");

const card = (theme) => ({
  ".card": {
    display: "flex",
    flexDirection: "column",
    wordWrap: "break-word",
    backgroundColor: theme("colors.white"),
    backgroundClip: "border-box",
    borderRadius: theme("borderRadius.xl"),
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);",
  
    "&.card-plain": {
      boxShadow: "none",
      backgroundColor: theme("colors.transparent")
    },

    ".card-header": {
      transform: "translateZ(0)",
      transition: "all .3s cubic-bezier(.34,1.61,.7,1)",
    },
    ".card-img": {
      borderRadius: theme("borderRadius.lg")
    },
    ".card-body": {
      padding: theme("spacing.6"),
      flex: theme("flex.auto"),
      color: theme("colors.secondary.500")
    },
    ".card-footer": {
      padding: theme("spacing.0") + " " + theme("spacing.6") + " " + theme("spacing.6"),
      backgroundColor: theme("colors.transparent"),
      color: theme("colors.secondary.500")
    },
  
    "&[data-animation='true']:hover": {
      ".card-header": {
        transform: "translate3d(0,-50px,0)"
      }
    },
    ".colored-shadow": {
      transform: "scale"+"("+theme("scale.[95]")+")",
      top: "3.5%",
      filter: "blur" + "(" + theme("blur.md") + ")",
      position: "absolute",
      left: theme("spacing.0"),
      height: theme("height.full"),
      width: theme("width.full"),
      backgroundSize: theme("backgroundSize.cover"),
      zIndex: "-" + theme("zIndex.[10]"),
    }
  }
});

module.exports.card = card;
