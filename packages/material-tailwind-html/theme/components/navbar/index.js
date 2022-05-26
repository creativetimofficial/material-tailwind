const navbar = (theme) => ({
  ".navbar": {
    "position": "relative",
    "display": "flex",
    "padding": ".5rem 1rem",
    "border-radius": ".75rem",
    "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);",

    ".navbar-collapse": {
      display: "flex",
      "flex-basis": "100%",
      "flex-grow": "1",
      "align-items": "center",

      "@media (max-width: 992px)": {
        "&.collapse:not(.open)": {
          display: "none"
        }
      }
    },
    "@media (max-width: 992px)": {
      ".navbar-collapse": {
        display: "block",
        position: "relative",
        width: "100%",
        left: "0",
        "z-index": "12",

        ".navbar-nav": {
        display: "block"
        }
      }
    },

    ".navbar-nav": {
      display: "flex",
      "flex-direction": "row",
      "padding-left": "0",
      "margin-bottom": "0",
      "list-style": "none",
      "margin-left": "auto"
    },
  
    ".nav-link": {
      "padding": ".5rem 1rem",
      "font-weight": "400",
      "font-size": ".875rem",
      "color":  theme("colors.dark.500"),
      "align-items": "center",
      "display": "flex"
    },

    ".nav-brand": {
      color: theme("colors.dark.500"),
      "font-size": ".875rem",
      "font-weight": "700",
      width: "inherit"
    },

    ".navbar-trigger": {
      padding: ".25rem .75rem",
      "font-size": "1.125rem",
      "line-height": "1",
      "background-color": "transparent",
      border: "1px solid transparent",
      "border-radius": ".5rem",
      transition: "box-shadow .15s ease-in-out",

      ".navbar-trigger-icon": {
        "background-image": "none"
      }
    },

    ".navbar-trigger-icon": {
      display: "inline-block",
      width: "1.5em",
      height: "1.5em",
      "vertical-align": "middle",
      "background-repeat": "no-repeat",
      "background-position": "50%",
      "background-size": "100%"
    },

    ".navbar-trigger-bar": {
      display: "block",
      position: "relative",
      width: "28px",
      height: "1px",
      "border-radius": "1px",
      background: "#6c757d",
      transition: "all .2s"
    }
  },
  ".container-lg": {
    display: "flex",
    width: "100%",
    "flex-wrap": "inherit",
    "align-items": "center",
    "justify-content": "space-between"
  },
  "@media (max-width: 992px)": {
    ".container-lg": {
      "flex-wrap": "wrap"
    }
  }
});

module.exports.navbar = navbar;
