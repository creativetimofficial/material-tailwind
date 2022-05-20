const { backgroundColor } = require("tailwindcss/defaultTheme");

const card = (theme) => ({
  ".card": {
    display: "flex",
    "flex-direction": "column",
    "word-wrap": "break-word",
    "background-color": theme("colors.white"),
    "background-clip": "border-box",
    "border-radius": ".75rem",
    "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);",
  
    "&.card-plain": {
      "box-shadow": "none",
      "background-color": theme("colors.transparent")
    },

    ".card-header": {
      transform: "translateZ(0)",
      transition: "all .3s cubic-bezier(.34,1.61,.7,1)",
    },
    ".card-img": {
      "border-radius": ".5rem"
    },
    ".card-body": {
      padding: "1.5rem",
      flex: "1 1 auto",
      color: theme("colors.secondary.500")
    },
    ".card-footer": {
      padding: "0 1.5rem 1.5rem 1.5rem",
      "background-color": "transparent",
      color: theme("colors.secondary.500")
    },
  
    "&[data-animation='true']:hover": {
      ".card-header": {
        transform: "translate3d(0,-50px,0)"
      }
    },
    ".colored-shadow": {
      transform: "scale(.94)",
      top: "3.5%",
      filter: "blur(12px)",
      position: "absolute",
      left: "0",
      width: "100%",
      height: "100%",
      "background-size": "cover",
      "z-index": "-1",
    }
  }
});

module.exports.card = card;
