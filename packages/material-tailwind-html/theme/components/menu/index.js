const menu = (theme) => ({
  ".dropdown-menu": {
    display: "block",
    position: "absolute",
    opacity: "0",
    "transform-origin": "0 0",
    inset: "0 auto auto 0",
    "pointer-events": "none",
    transform: "scale(.95)",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
    "will-change": "transform, box-shadow",
    "box-shadow": theme("boxShadow.lg"),
    transition: "transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)",
    cursor: "pointer",
    "z-index": "1000",
    "min-width": "11rem",
    padding: ".5rem 0",
    margin: "0",
    "font-size": ".875rem",
    color: theme("colors.secondary.500"),
    "text-align": "left",
    "list-style": "none",
    "background-color": theme("colors.white"),
    "background-clip": "padding-box",
    border: "0 solid transparent",
    "border-radius": ".375rem",
    "margin-top": "2.8125rem",

    "&::before": {
      "font-family": "FontAwesome",
      'content': '"\\f0d8"',
      position: "absolute",
      top: "0",
      left: "28px",
      right: "auto",
      "font-size": "1.375rem",
      color: theme("colors.white"),
      transition: "top .35s ease",
      display: "block",
      clear: "both",
      "box-sizing": "border-box"
    },

    "&.menu-right": {
      right: "0",
      left: "auto",

      "&:before": {
        right: "28px",
        left: "auto"
      }
    },

    ".menu-item + .dropdown-menu": {
      opacity: "0 !important",
      left: "103%",
      top: "1rem",

      "&:before": {
        top: "15px !important",
        left: "-9px",
        right: "auto",
        transform: "rotate(-90deg)"
      }
    },
    ".menu-item + .dropdown-menu.open": {
      opacity: "1 !important",
    }
  },

  ".menu": {
    position: "relative",

    "&.open": {
      ".dropdown-menu": {
        opacity: "1",
        "pointer-events": "auto",
        transform: "scale(1)",
        "margin-top": "2.8125rem",

        "&:before": {
          top: "-19px"
        }
      }
    }
  },

  ".menu-item": {
    display: "block",
    width: "100%",
    padding: ".3rem 1rem",
    clear: "both",
    "font-weight": "400",
    color: theme("colors.secondary.500"),
    "text-align": "inherit",
    "white-space": "nowrap",
    "border-radius": ".375rem",
    "background-color": "transparent",
    border: "0",
    transition: "background-color .3s ease, color .3s ease",
  
    "&:hover": {
      color: theme("colors.dark.500"),
      "background-color": theme("colors.light.500")
    }
  }
});

module.exports.menu = menu;
