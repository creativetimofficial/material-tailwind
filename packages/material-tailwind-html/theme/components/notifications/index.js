const notifications = (theme) => ({
  ".notification": {
    padding: ".75rem",
    width: "350px",
    "max-width": "100%",
    "font-size": ".875rem",
    "box-shadow": "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
    "border-radius": ".375rem",

    ".notification-header": {
      display: "flex",
      "align-items": "center",
      padding: ".75rem",
      color: theme("colors.dark.500"),
      "background-clip": "padding-box"
    },
    
    ".notification-body": {
      padding: ".75rem",
      "word-wrap": "break-word"
    }
  },

  ".fade": {
    transition: "opacity .15s linear",
  },

  ".toast:not(.show)": {
    display: "none"
  },

  ".fade:not(.show)": {
    opacity: "0"
  }
});

module.exports.notifications = notifications;
