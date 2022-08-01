const input = (theme) => ({
  ".form-control": {
    display: "block",
    width: "100%",
    padding: "0.5rem 0",
    "font-size": ".875rem",
    "font-weight": "400",
    "line-height": "1.15rem",
    color: "#495057",
    "background-color": "transparent",
    "background-clip": "padding-box",
    border: `1px solid theme("colors.blue-gray.100")`,
    appearance: "none",
    "border-radius": "0.375rem",
    transition: ".2s ease",

    "&:focus-visible": {
      outline: "none",
    },
  },
  ".form-label": {
    position: "absolute",
  },
  ".form-label,label": {
    "font-size": ".875rem",
    "font-weight": "400",
    "margin-bottom": "0.5rem",
    color: theme("colors.blue-gray.500"),
    "margin-left": "0",
    transition: "all .2s ease",
  },
  ".input-group": {
    position: "relative",
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "stretch",
    width: "100%",
    transition: ".2s ease",
    border: "none",

    "&.input-group-outline": {
      ".form-label": {
        display: "flex",
        "line-height": "3.925",
        top: "-0.375rem",
        "margin-bottom": "0",

        "&:before,&:after": {
          content: '""',
          "border-top": "1px solid",
          "border-top-color": theme("colors.blue-gray.100"),
          "pointer-events": "none",
          "margin-top": "0.375rem",
          "box-sizing": "border-box",
          display: "block",
          height: "0.5rem",
          width: "0.625rem",
          "border-width": "1px 0 0",
          "border-color": "transparent",
        },

        "&:before": {
          "margin-right": "4px",
          "border-left": "1px solid transparent",
          "border-radius": "6px 0",
        },

        "&:after": {
          "flex-grow": "1",
          "margin-left": "4px",
          "border-right": "1px solid transparent",
          "border-radius": "0 6px",
        },
      },

      ".form-control": {
        background: "none",
        border: `1px solid theme("colors.blue-gray.100")`,
        "border-radius": "0.375rem",
        "border-top-left-radius": "0.375rem",
        "border-bottom-left-radius": "0.375rem",
        padding: "0.625rem 0.75rem",
        "line-height": "1.25rem",
        "z-index": "20",
      },
    },

    "&.input-group-dynamic,&.input-group-static,": {
      ".form-control": {
        "border-radius": "0",
        border: "0",
        background: "no-repeat bottom,50% calc(100% - 1px)",
        "background-image": `linear-gradient(0deg,theme("colors.pink.500") 2px,rgba(156,39,176,0) 0),linear-gradient(0deg,theme("colors.blue-gray.100") 1px,hsla(0,0%,82%,0) 0)`,
        "background-size": "0 100%,100% 100%",
        transition: ".2s ease",
      },
      ".form-label": {
        top: "0.4rem",
      },
    },

    "&.input-group-static": {
      label: {
        "margin-bottom": "0",
      },
    },

    "&.focused,&.is-filled": {
      ".form-label": {
        width: "100%",
        height: "100%",
        "font-size": ".6875rem",
        color: theme("colors.pink.500"),
        display: "flex",
        "line-height": "1.25",

        "&:before": {
          opacity: "1",
          "border-top-color": theme("colors.pink.500"),
          "box-shadow": `inset 0 1px theme("colors.pink.500")`,
        },

        "&:after": {
          opacity: "1",
          "border-top-color": theme("colors.pink.500"),
          "box-shadow": `inset 0 1px theme("colors.pink.500")`,
        },
      },

      "&.input-group-outline": {
        ".form-label+.form-control": {
          "border-color": theme("colors.pink.500"),
          "border-top-color": "transparent",
          "box-shadow": `inset 1px 0 theme("colors.pink.500"), inset -1px 0 theme("colors.pink.500"), inset 0 -1px theme("colors.pink.500")`,
        },
      },

      "&.input-group-dynamic": {
        ".form-label": {
          top: "-0.7rem",
        },
      },

      "&.input-group-static": {
        label: {
          color: theme("colors.pink.500"),
        },
      },

      ".form-control": {
        "background-size": "100% 100%,100% 100%",
      },
    },

    "&:focus-visible": {
      outline: "none",
    },
  },
});

module.exports.input = input;
