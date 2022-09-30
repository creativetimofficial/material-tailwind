const tabs = (theme) => ({
  ".tabs": {
    display: "flex",
    position: "relative",
    background: theme("colors.light.300"),
    borderRadius: theme("borderRadius.xl"),
    marginBottom: "0",
    listStyle: "none",

    ".nav-item": {
      position: "relative",
      flex: "1 1 auto",
      textAlign: "center",
      zIndex: "3",
      

      ".nav-link": {
        display: "block",
        position: "relative",
        transition: "background-color .5s ease",
        zIndex: theme("zIndex.10"),
        width: theme("width.full"),
        color: theme("colors.dark"),
        cursor: "pointer",
        borderRadius: theme("borderRadius.lg"),
        backgroundColor: "inherit",
      }
    },
    ".moving-tab": {
      display: "block",
      border: "0",
      backgroundImage: "none",
      textAlign: "center",
      flex: "1 1 auto",
      borderRadius: theme("borderRadius.lg"),
      zIndex: "1",
      background: theme("colors.white"),
      padding: theme("spacing.1") + "!important",

      ".nav-link": {
        "&.active": {
          color: theme("colors.white"),
          fontWeight: theme("fontWeight.semibold"),
          color: theme("colors.transparent")
        }
      }
    }
  },

  ".tabs-content": {
    ".tab-panel": {
      color: theme("colors.secondary"),
      opacity: theme("opacity.0"),
      display: "none",
      transition: "opacity .15s linear",
      "-webkit-font-smoothing": "antialiased",
      lineHeight: "1.625",
      fontWeight: theme("fontWeight.light"),
      fontSize: theme("fontSize.base"),
      fontFamily: "Roboto, sans-serif",


      "&.active": {
        opacity: theme("opacity.100"),
        display: "block",
        transition: "opacity .15s linear"
      }
    }
  }
});

module.exports.tabs = tabs;
