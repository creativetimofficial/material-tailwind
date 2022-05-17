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
    }

  }
});

module.exports.navbar = navbar;
