const navbar = (theme) => ({
  ".navbar": {
    "position": "relative",
    "display": "flex",
    "padding": ".5rem 1rem",
    "border-radius": ".75rem",
    "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);",

    ".navbar-collapse": {
      display: "flex",
      "flex-basis": "auto",
      "flex-grow": "1",
      "align-items": "center"
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
      "font-weight": "700"
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
      width: "22px",
      height: "1px",
      "border-radius": "1px",
      background: "#6c757d",
      transition: "all .2s",
      margin: "0 auto",

      "&.bar2,&.bar3": {
        "margin-top": "0.438rem"
      }
    }

  }
});

module.exports.navbar = navbar;
