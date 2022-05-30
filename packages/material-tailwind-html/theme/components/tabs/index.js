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
      

      ".nav-link": {
        display: "block",
        position: "relative",
        transition: "background-color .5s ease",
        "z-index": "10",
        width: "100%",
        color: theme("colors.dark"),
        cursor: "pointer",
        "border-radius": ".5rem",
        "background-color": "inherit",
      }
    },
    ".moving-tab": {
      display: "block",
      border: "0",
      "background-image": "none",
      "text-align": "center",
      flex: "1 1 auto",
      "border-radius": ".5rem",
      "z-index": "1",
      background: theme("colors.white"),
      padding: "4px !important",


      ".nav-link": {
        "&.active": {
          color: theme("colors.white"),
          "font-weight": "600",
          color: "transparent"
        }
      }
    }
  },

  ".tabs-content": {
    ".tab-panel": {
      color: theme("colors.secondary"),
      opacity: "0",
      display: "none",
      transition: "opacity .15s linear",
      "-webkit-font-smoothing": "antialiased",
      "line-height": "1.625",
      "font-weight": "300",
      "font-size": "1rem",
      "font-family": "Roboto, sans-serif",


      "&.active": {
        opacity: "1",
        display: "block",
        transition: "opacity .15s linear"
      }
    }
  }
});

module.exports.tabs = tabs;
