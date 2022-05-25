const popover = (theme) => ({
  ".popover": {
    "position": "absolute",
    "z-index": "1060",
    "display": "block",
    "max-width": "276px",
    "font-size": ".75rem",
    "word-wrap": "break-word",
    "background-color": theme("colors.white"),
    "border": "0 solid rgba(0, 0, 0, .2)",
    "border-radius": "0.5rem",
    "box-shadow": "0 0.3125rem 0.625rem 0 rgba(0, 0, 0, .12)",

    ".popover-title": {
      "text-transform": "uppercase",
      "font-weight": "600",
      "padding": "1rem",
      "padding-bottom": ".5rem",
      "color": theme("colors.secondary.500"),
      "border-bottom": "1px solid rgba(241, 245, 249, 1)"

    },

    ".popover-body": {
      "padding": "1rem",
      "padding-top": ".5rem",
      "color": theme("colors.secondary.500")
    },

    "&[data-placement='top']": {
      "margin-bottom": ".5rem !important",

      ".arrow": {
        "bottom": "-4px",
        "top": "auto"
      }
    },

    "&[data-placement='right']": {
      "margin-left": ".5rem !important",

      ".arrow": {
        "left": "-4px"
      }
    },

    "&[data-placement='bottom']": {
      "margin-top": ".5rem !important",

      ".arrow": {
        "top": "-4px"
      }
    },

    "&[data-placement='left']": {
      "margin-right": ".5rem !important",

      ".arrow": {
        "right": "-4px"
      }
    },

    ".arrow,.arrow:before": {
      "position": "absolute",
      "width": ".5rem",
      "height": ".5rem",
      "background": "inherit"
    },

    ".arrow": {
      "visibility": "hidden",
      "top": "-4px"
    },

    ".arrow:before": {
      "visibility": "visible",
      "content": "''",
      "transform": "rotate(45deg)"
    }

  }
});

module.exports.popover = popover;
