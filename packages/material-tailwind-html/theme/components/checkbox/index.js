const checkbox = (theme) => ({
  ".form-check-input": {
    width: "1.23rem",
    height: "1.23rem",
    "background-color": theme("colors.white"),
    "background-repeat": "no-repeat",
    "background-position": "50%",
    "background-size": "contain",
    border: `1px solid theme("colors.blue-gray.100")`,
    position: "relative",
    "background-image": "none",
    "border-radius": "0.35rem",
    cursor: "pointer",
    "margin-right": "7px",
    transition:
      "background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out",
  },
  ".checkbox:checked + .form-check-input:after": {
    transition: "opacity .25s ease-in-out",
    content: `" "`,
    backgroundImage: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd' /%3E%3C/svg%3E"
    )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    color: theme("colors.white"),
    position: "absolute",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-size": ".67rem",
  },

  ".checkbox:checked + .form-check-input": {
    "background-color": theme("colors.pink.500"),
    "border-color": theme("colors.pink.500"),
  },
});

module.exports.checkbox = checkbox;
