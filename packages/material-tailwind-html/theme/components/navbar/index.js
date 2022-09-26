const navbar = (theme) => ({
  ".navbar": {
    position: "relative",
    display: "flex",
    padding: "theme('spacing.2') theme('spacing.4')",
    borderRadius: theme("borderRadius.xl"),
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);",

    ".navbar-collapse": {
      display: "flex",
      flexBasis: "100%",
      flexGrow: "1",
      alignItems: "center",
      maxHeight: "300px",

      "@media (max-width: 992px)": {
        "&.collapse:not(.open)": {
          maxHeight: "theme('height.0') !important"
        }
      }
    },
    "@media (max-width: 992px)": {
      ".navbar-collapse": {
        display: "block",
        position: "relative",
        width: theme("width.full"),
        left: theme("spacing.0"),
        zIndex: theme("zIndex.20"),

        ".navbar-nav": {
        display: "block"
        }
      }
    },

    ".navbar-nav": {
      display: "flex",
      flexDirection: "row",
      paddingLeft: theme("spacing.0"),
      marginBottom: theme("spacing.0"),
      listStyle: "none",
      marginLeft: "auto"
    },
  
    ".nav-link": {
      padding: "theme('spacing.2') theme('spacing.4')",
      fontWeight: theme("fontWeight.normal"),
      fontSize: theme("fontSize.sm"),
      color:  theme("colors.dark.500"),
      alignItems: "center",
      display: "flex"
    },

    ".nav-brand": {
      color: theme("colors.dark.500"),
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.bold")
    },

    ".navbar-trigger": {
      padding: "theme('spacing.1') theme('spacing.3')",
      fontSize: theme("fontSize.lg"),
      lineHeight: "1",
      backgroundColor: theme("colors.transparent"),
      border: "1px solid transparent",
      borderRadius: theme("borderRadius.lg"),
      transition: "box-shadow .15s ease-in-out",

      ".navbar-trigger-icon": {
        backgroundImage: "none"
      }
    },

    ".navbar-trigger-icon": {
      display: "inline-block",
      width: theme("spacing.6"),
      height: theme("spacing.6"),
      verticalAlign: "middle",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundSize: "100%"
    },

    ".navbar-trigger-bar": {
      display: "block",
      position: "relative",
      width: theme("spacing.7"),
      height: theme("height.px"),
      borderRadius: "1px",
      background: "#6c757d",
      transition: "all .2s"
    }
  },
  ".container-lg": {
    display: "flex",
    width: theme("width.full"),
    flexWrap: "inherit",
    alignItems: "center",
    justifyContent: "space-between"
  },
  "@media (max-width: 992px)": {
    ".container-lg": {
      flexWrap: "wrap"
    }
  }
});

module.exports.navbar = navbar;
