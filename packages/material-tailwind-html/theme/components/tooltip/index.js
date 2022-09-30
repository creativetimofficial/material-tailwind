const tooltip = (theme) => ({
  ".tooltip": {
    background: "#333",
    zIndex: "1060",
    color: theme("colors.white"),
    fontWeight: theme("fontWeight.bold"),
    padding: "theme('spacing.1') theme('spacing.2')",
    fontSize: ".8125rem",
    borderRadius: theme("borderRadius.rounded"),
    display: "none",

    "&[data-show]": {
      display: "block"
    },

    "&[data-placement^='top'] > .arrow": {
      bottom: "-" + theme("spacing.1")
    },

    "&[data-placement^='bottom'] > .arrow": {
      top: "-" + theme("spacing.1")
    },

    "&[data-placement^='left'] > .arrow": {
      right: "-" + theme("spacing.1")
    },

    "&[data-placement^='right'] > .arrow": {
      left: "-" + theme("spacing.1")
    },
  

    ".arrow,.arrow:before": {
      position: "absolute",
      width: theme("width.2"),
      height: theme("height.2"),
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
