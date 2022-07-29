const paginationRoot = {
  display: "flex",
  "padding-left": "0",
  "list-style": "none",

  ".page-item": {
    ".page-link,span": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      color: "#7b809a",
      padding: "0",
      margin: "0 3px",
      "border-radius": "50%",
      width: "36px",
      height: "36px",
      "font-size": ".875rem",
    },

    "&.active": {
      ".page-link": {
        "z-index": "3",
        color: "#fff",
        border: "none",
        "box-shadow":
          "0 3px 5px -1px rgba(0, 0, 0, .09), 0 2px 3px -1px rgb(0, 0, 0, .07)",
      },
    },
  },
  ".page-link": {
    position: "relative",
    "background-color": "#fff",
    border: "1px solid #dee2e6",
    trasition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",

    "&:hover": {
      "z-index": "2",
      "background-color": "#e9ecef",
    },
  },
};

const paginationVariant = (theme, background) => ({
  ".page-item.active .page-link": {
    "background-color": theme(`${background}.500`),
  },
  "&.pagination-gradient": {
    ".page-item.active .page-link": {
      "background-image": `linear-gradient(to top right, ${theme(
        `${background}.600`
      )}, ${theme(`${background}.400`)})`,
    },
  },
});

const pagination = (theme) => ({
  ".pagination": paginationRoot,
  ".pagination-pink": paginationVariant(theme, "colors.pink"),
  ".pagination-purple": paginationVariant(theme, "colors.purple"),
  ".pagination-deep-purple": paginationVariant(theme, "colors.deep-purple"),
  ".pagination-indigo": paginationVariant(theme, "colors.indigo"),
  ".pagination-blue": paginationVariant(theme, "colors.blue"),
  ".pagination-light-blue": paginationVariant(theme, "colors.light-blue"),
  ".pagination-cyan": paginationVariant(theme, "colors.cyan"),
  ".pagination-teal": paginationVariant(theme, "colors.teal"),
  ".pagination-green": paginationVariant(theme, "colors.green"),
  ".pagination-light-green": paginationVariant(theme, "colors.light-green"),
  ".pagination-lime": paginationVariant(theme, "colors.lime"),
  ".pagination-yellow": paginationVariant(theme, "colors.yellow"),
  ".pagination-amber": paginationVariant(theme, "colors.amber"),
  ".pagination-orange": paginationVariant(theme, "colors.orange"),
  ".pagination-deep-orange": paginationVariant(theme, "colors.deep-orange"),
  ".pagination-brown": paginationVariant(theme, "colors.brown"),
  ".pagination-gray": paginationVariant(theme, "colors.gray"),
  ".pagination-blue-gray": paginationVariant(theme, "colors.blue-gray"),
  ".pagination-red": paginationVariant(theme, "colors.red"),
  ".pagination-secondary": paginationVariant(theme, "colors.secondary"),
  ".pagination-dark": paginationVariant(theme, "colors.dark"),
  ".pagination-light": paginationVariant(theme, "colors.light"),
});

module.exports.pagination = pagination;
module.exports.paginationVariant = paginationVariant;
