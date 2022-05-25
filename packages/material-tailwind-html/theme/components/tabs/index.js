const tabs = (theme) => ({
  ".tabs": {
    display: "flex",
    position: "relative",
    background: theme("colors.light.300"),
    "border-radius": ".75rem",
    "margin-bottom": "0",
    "list-style": "none",

    ".nav-item": {
      position: "relative",
      flex: "1 1 auto",
      "text-align": "center",
      "z-index": "3",

      '.nav-link': {
        display: "block",
        position: "relative",
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
        "z-index": "99",
        width: "100%",
        color: theme("colors.dark"),
        cursor: "pointer",
        "border-radius": ".5rem",
        "background-color": "inherit",
        animation: ".2s ease",

        "&.active": {
          background: theme("colors.white"),
          animation: ".2s ease"
        }
      }
    },
    ".moving-tab": {
      padding: "4px !important",
      animation: ".2s ease",

      ".nav-link": {
        "&.active": {
          color: theme("colors.white"),
          "font-weight": "600",
          animation: ".2s ease",
          background: "transparent",
          color: "transparent"
        }
      }
    }
  },

  ".tabs-content": {
    ".tab-panel": {
      opacity: "0",
      display: "none",

      "&.active": {
        opacity: "1",
        display: "block"
      }
    }
  }
});

module.exports.tabs = tabs;
