const toggle = (theme) => ({
  ".form-switch": {
    ".form-check-input": {
      position: "relative",
      height: ".9375rem",
      width: "1.875rem",
      "background-color": theme("colors.blue-gray.100"),
      "background-image": "none",
      "background-position": "0",
      "border-radius": "1.875rem",
      transition:
        "background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out",

      "&:after": {
        position: "absolute",
        top: "-3px",
        left: "-5px",
        content: '""',
        width: "1.25rem",
        height: "1.25rem",
        border: `1px solid theme("colors.blue-gray.100")`,
        "border-radius": "50%",
        "background-color": theme("colors.white"),
        transform: "translateX(1px)",
        transition:
          "transform .25s ease-in-out,background-color .25s ease-in-out",
        "box-shadow":
          "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
      },

      "&[checked]": {
        "border-color": theme("colors.gray.800"),
        "background-color": theme("colors.gray.800"),
        "background-position": "100%",
        "background-image": "none",

        "&:after": {
          transform: "translateX(21px)",
          "border-color": theme("colors.gray.800"),
        },
      },
    },
  },
});

module.exports.toggle = toggle;
