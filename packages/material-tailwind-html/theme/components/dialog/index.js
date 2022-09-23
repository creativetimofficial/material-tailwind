const dialog = (theme) => ({
  ".dialog": {
    position: "fixed",
    top: theme("spacing.0"),
    left: theme("spacing.0"),
    zIndex: theme("zIndex.0"),
    width: theme("width.full"),
    height: theme("height.full"),
    overflowX: "hidden",
    overflowY: "auto",
    outline: theme("opacity.0"),
    opacity: theme("opacity.0"),
    visibility: "hidden",
    transition: "opacity .15s linear",

    ".modal-dialog": {
      transition: "transform .15s ease-out",
      transform: "translateY(-50px)",
      minHeight: "calc(100% - 15rem)",
      maxWidth: "500px",
      margin: "theme('spacing.7') auto",
      display: "flex",
      alignItems: "center",
      position: "relative",
      width: theme("width.auto"),
      pointerEvents: "none"
    },

    "&.open": {
      visibility: "visible",
      opacity: theme("opacity.100"),
      zIndex: theme("zIndex.50"),

      ".modal-dialog": {
        transform: "none",
        zIndex: "1212"
      }
    },

    ".dialog-overlay": {
      position: "fixed",
      top: theme("spacing.0"),
      left: theme("spacing.0"),
      width: theme("width.screen"),
      height: theme("height.screen"),
      zIndex: "1200",
      backgroundColor: "rgba(0,0,0,0.5)",
      transition: "opacity .15s linear"
    },

    ".dialog-content": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: theme("width.full"),
      pointerEvents: "auto",
      backgroundColor: theme("colors.white"),
      backgroundClip: "padding-box",
      border: "none",
      borderRadius: theme("borderRadius.md"),
      boxShadow: "0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22)",
      outline: "0",
      zIndex: "1300"
    },

    ".dialog-header": {
      display: "flex",
      flexShrink: "0",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme("spacing.4"),
      borderBottom: "1px solid #dee2e6",
      borderTopLeftRadius: "calc(0.5rem - 1px)",
      borderTopRightRadius: "calc(0.5rem - 1px)",

      ".button-close": {
        padding: theme("spacing.1"),

        "i": {
          color: theme("colors.dark.500"),
          fontSize: theme("fontSize.sm")
        }
      }
    },

    ".dialog-body": {
      position: "relative",
      flex: theme("flex.auto"),
      padding: theme("spacing.4")
    },

    ".dialog-footer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme("spacing.3"),
      borderTop: "1px solid #dee2e6",
      borderBottomRightRadius: "calc(0.5rem - 1px)",
      borderBottomLeftRadius: "calc(0.5rem - 1px)"
    }
  }

});

module.exports.dialog = dialog;
