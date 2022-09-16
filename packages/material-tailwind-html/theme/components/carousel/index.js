const carousel = (theme) => ({
  ".carousel": {
    width: theme("width.full"),
    maxWidth: theme("maxWidth.screen-md"),
    minHeight: "450px",
    position: "relative",
    overflow: "hidden",
    borderRadius: theme("borderRadius.lg"),

    ".slide": {
      width: theme("width.full"),
      maxWidth: theme("maxWidth.screen-md"),
      minHeight: "450px",
      position: "absolute",
      transition: "all 0.5s",

      img: {
        width: theme("width.full"),
        height: theme("height.full"),
        objectFit: "cover"
      }
    },

    "button": {
      position: "absolute",
      zIndex: theme("zIndex.[10]"),

      i: {
        fontSize: theme("fontSize.4xl"),
        opacity: theme("opacity.80")
      },

      "&:hover": {
        i: {
          opacity: theme("opacity.100")
        }
      }
    },

    ".button-prev": {
      top: "45%",
      left: "2%"
    },
    
    ".button-next": {
      top: "45%",
      right: "2%"
    }
  }
});

module.exports.carousel = carousel;
