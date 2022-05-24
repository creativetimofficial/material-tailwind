const breadcrumbs = (theme) => ({
  ".breadcrumbs": {
    display: "flex",
    "flex-wrap": "wrap",
    padding: "0.5rem 1rem",
    "margin-bottom": "1rem",
    "list-style": "none",
    "background-color": theme("colors.light.500"),
    "border-radius": "0.375rem",

    ".breadcrumb-item": {
      "font-size": ".875rem",
      color: theme("colors.dark.500"),

      "+.breadcrumb-item": {
        "padding-left": "0.5rem",
        
        "&:before": {
          "padding-right": "0.5rem",
          color: "#6c757d",
          content: '"\\ /"'
        }
      },
    },
  }
});

module.exports.breadcrumbs = breadcrumbs;
