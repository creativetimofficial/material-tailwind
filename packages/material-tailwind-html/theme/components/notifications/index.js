const notifications = (theme) => ({
  ".notification": {
    padding: theme("spacing.3"),
    width: "350px",
    maxWidth: theme("width.full"),
    fontSize: theme("fontSize.sm"),
    boxShadow: "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
    borderRadius: theme("borderRadius.md"),
    marginBottom: theme("spacing.4"),

    ".notification-header": {
      display: "flex",
      alignItems: "center",
      padding: theme("spacing.3"),
      color: theme("colors.dark.500"),
      backgroundClip: "padding-box"
    },
    
    ".notification-body": {
      padding: theme("spacing.3"),
      wordWrap: "break-word"
    }
  },

  ".fade": {
    transition: "opacity .15s linear",
  },

  ".notification:not(.show)": {
    display: "none"
  }
});

module.exports.notifications = notifications;
