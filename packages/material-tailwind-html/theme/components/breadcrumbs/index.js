const breadcrumbs = (theme) => ({
  ".breadcrumbs": {
    display: "flex",
    listStyle: "none",
    padding: theme("spacing.2") + " " + theme("spacing.4"),
    marginBottom: theme("spacing.4"),
    backgroundColor: theme("colors.light.500"),
    borderRadius: theme("borderRadius.md"),

    ".breadcrumb-item": {
      fontSize: theme("fontSize.sm"),
      color: theme("colors.blue-gray-900"),

      "+.breadcrumb-item": {
        paddingLeft: theme("spacing.2"),
      },
      "&.active": {
        color: theme("colors.blue-gray-900")
      }
    }
  },
  "ol": {
    "li": {
      "+li": {
        "&:before": {
          paddingRight: theme("spacing.2"),
          color: "#6c757d",
          content: '"\\ /"'
        }
      }
    }
  }
});

module.exports.breadcrumbs = breadcrumbs;
