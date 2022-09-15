const breadcrumbs = (theme) => ({
  ".breadcrumbs": {
    display: "flex",
    "flex-wrap": "wrap",
    "list-style": "none",
    padding: theme("spacing.2") + " " + theme("spacing.4"),
    "margin-bottom": theme("spacing.4"),
    "background-color": theme("colors.light.500"),
    "border-radius": theme("borderRadius.md"),

    ".breadcrumb-item": {
      "font-size": theme("fontSize.sm"),
      color: theme("colors.dark.500"),

      "+.breadcrumb-item": {
        "padding-left": theme("spacing.2"),
        
        "&:before": {
          "padding-right": theme("spacing.2"),
          color: "#6c757d",
          content: '"\\ /"'
        }
      }
    }
  }
});

module.exports.breadcrumbs = breadcrumbs;
