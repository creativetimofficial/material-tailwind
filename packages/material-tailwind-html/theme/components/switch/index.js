const toggle = (theme) => ({
  ".form-switch": {
    ".form-check-input": {
      position: "relative",
      height: ".9375rem",
      width: "1.875rem",
      backgroundColor: theme("colors.blue-grey.100"),
      backgroundImage: "none",
      backgroundPosition: "0",
      borderRadius: "1.875rem",
      transition: "background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out",

      "&:after": {
        position: "absolute",
        top: "-3px",
        left: "-5px",
        content: '""',
        width: theme("width.5"),
        height: theme("height.5"),
        border: `1px solid theme("colors.blue-grey.100")`,
        borderRadius: "50%",
        backgroundColor: theme("colors.white"),
        transform: "translateX(1px)",
        transition: "transform .25s ease-in-out, background-color .25s ease-in-out",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
       
      },

      "&[checked]": {
        borderColor: theme("colors.grey.800"),
        backgroundColor: theme("colors.grey.800"),
        backgroundPosition: "100%",
        backgroundImage: "none",

        "&:after": {
          transform: "translateX(21px)",
          borderColor: theme("colors.grey.800")
        }
      }
    }
  }
});

module.exports.toggle = toggle;