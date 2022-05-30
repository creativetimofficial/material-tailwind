const tooltip = (theme) => ({
  ".tooltip": {
    background: "#333",
    "z-index": "1060",
    color: theme("colors.white"),
    "font-weight": "bold",
    padding: "4px 8px",
    "font-size": ".8125rem",
    "border-radius": ".25rem",
    display: "none",

    "&[data-show]": {
      display: "block"
    },

    "&[data-placement^='top'] > .arrow": {
      bottom: "-4px"
    },

    "&[data-placement^='bottom'] > .arrow": {
      top: "-4px"
    },

    "&[data-placement^='left'] > .arrow": {
      right: "-4px"
    },

    "&[data-placement^='right'] > .arrow": {
      left: "-4px"
    },
  

    ".arrow,.arrow:before": {
      position: "absolute",
      width: ".5rem",
      height: ".5rem",
      background: "inherit"
    },

    ".arrow": {
      visibility: "hidden",
    },
    
    ".arrow:before": {
      visibility: "visible",
      content: "''",
      transform: "rotate(45deg)"
    }
  }
});

module.exports.tooltip = tooltip;
