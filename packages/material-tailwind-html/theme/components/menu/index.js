const menu = (theme) => ({
  ".dropdown-menu": {
    display: "block",
    position: "absolute",
    opacity: theme("opacity.0"),
    transformOrigin: "0 0",
    inset: "0 auto auto 0",
    pointerEvents: "none",
    transform: "scale(.95)",
    "-webkitBackfaceVisibility": "hidden",
    backfaceVisibility: "hidden",
    willChange: "transform, box-shadow",
    boxShadow: theme("boxShadow.lg"),
    transition: "transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)",
    cursor: theme("cursor.pointer"),
    zIndex: "1000",
    minWidth: theme("spacing.44"),
    padding: "theme('spacing.2') 0",
    margin: theme("spacing.0"),
    fontSize: theme("fontSize.sm"),
    color: theme("colors.secondary.500"),
    textAlign: "left",
    listStyle: "none",
    backgroundColor: theme("colors.white"),
    backgroundClip: "padding-box",
    border: "0 solid transparent",
    borderRadius: theme("borderRadius.md"),
    marginTop: "2.8125rem",

    "&::before": {
      fontFamily: "FontAwesome",
      content: '"\\f0d8"',
      position: "absolute",
      top: theme("spacing.0"),
      left: theme("spacing.7"),
      right: "auto",
      fontSize: "1.375rem",
      color: theme("colors.white"),
      transition: "top .35s ease",
      display: "block",
      clear: "both",
      boxSizing: "border-box"
    },

    "&.menu-right": {
      right: theme("spacing.0"),
      left: "auto",

      "&:before": {
        right: theme("spacing.7"),
        left: "auto"
      }
    },

    ".menu-item + .dropdown-menu": {
      opacity: theme("opacity.0") + "!important",
      left: "103%",
      top: theme("spacing.4"),

      "&:before": {
        top: "15px !important",
        left: "-9px",
        right: "auto",
        transform: "rotate(-90deg)"
      }
    },
    ".menu-item + .dropdown-menu.open": {
      opacity: theme("opacity.100") + "!important",
    }
  },

  ".menu": {
    position: "relative",

    "&.open": {
      ".dropdown-menu": {
        opacity: theme("opacity.100") + "!important",
        pointerEvents: "auto",
        transform: "scale(1)",
        marginTop: "2.8125rem",

        "&:before": {
          top: "-19px"
        }
      }
    }
  },

  ".menu-item": {
    display: "block",
    width: theme("width.full"),
    padding: ".3rem theme('spacing.4')",
    clear: "both",
    fontWeight: theme("fontWeight.normal"),
    color: theme("colors.secondary.500"),
    whiteSpace: "nowrap",
    borderRadius: theme("borderRadius.md"),
    backgroundColor: theme("colors.transparent"),
    border: theme("spacing.0"),
    transition: "background-color .3s ease, color .3s ease",
  
    "&:hover": {
      color: theme("colors.dark.500"),
      backgroundColor: theme("colors.light.500")
    }
  }
});

module.exports.menu = menu;
