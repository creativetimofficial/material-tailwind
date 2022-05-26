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
        transition: "color .5s ease,background-color .5s ease,border-color .5s ease",
        "z-index": "99",
        width: "100%",
        color: theme("colors.dark"),
        cursor: "pointer",
        "border-radius": ".5rem",
        "background-color": "inherit",
        animation: ".5s ease",

        "&.active": {
          background: theme("colors.white"),
          animation: ".5s ease"
        }
      }
    },
    ".moving-tab": {
      display: "block",
      border: "0",
      "background-image": "none",
      "text-align": "center",
      flex: "1 1 auto",
      "border-radius": ".5rem",
      "z-index": "10",
      animation: ".5s ease",
      padding: "4px !important",


      ".nav-link": {
        "&.active": {
          color: theme("colors.white"),
          "font-weight": "600",
          animation: ".5s ease",
          background: "transparent",
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
