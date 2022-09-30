const popover = (theme) => ({
  ".popover": {
    position: "absolute",
    zIndex: "1060",
    display: "block",
    maxWidth: "276px",
    fontSize: theme("fontSize.xs"),
    wordWrap: "break-word",
    backgroundColor: theme("colors.white"),
    border: "0 solid rgba(0, 0, 0, .2)",
    borderRadius: theme("borderRadius.lg"),
    boxShadow: "0 0.3125rem 0.625rem 0 rgba(0, 0, 0, .12)",

    ".popover-title": {
      textTransform: "uppercase",
      fontWeight: theme("fontWeight.semibold"),
      padding: theme("spacing.4"),
      paddingBottom: theme("spacing.2"),
      color: theme("colors.secondary.500"),
      borderBottom: "1px solid rgba(241, 245, 249, 1)"

    },

    ".popover-body": {
      padding: theme("spacing.4"),
      paddingTop: theme("spacing.2"),
      color: theme("colors.secondary.500")
    },

    "&[data-placement='top']": {
      marginBottom: theme("spacing.2") + "!important",

      ".arrow": {
        bottom: "-" + theme("spacing.1"),
        top: "auto"
      }
    },

    "&[data-placement='right']": {
      marginLeft: theme("spacing.2") + "!important",

      ".arrow": {
        left: "-" + theme("spacing.1")
      }
    },

    "&[data-placement='bottom']": {
      marginTop: theme("spacing.2") + "!important",

      ".arrow": {
        top: "-" + theme("spacing.1")
      }
    },

    "&[data-placement='left']": {
      marginRight: theme("spacing.2") + "!important",

      ".arrow": {
        right: "-" + theme("spacing.1")
      }
    },

    ".arrow,.arrow:before": {
      position: "absolute",
      width: theme("width.2"),
      height: theme("height.2"),
      background: "inherit"
    },

    ".arrow": {
      visibility: "hidden",
      top:  "-" + theme("spacing.1")
    },

    ".arrow:before": {
      visibility: "visible",
      content: "''",
      transform: "rotate(45deg)"
    }

  }
});

module.exports.popover = popover;
