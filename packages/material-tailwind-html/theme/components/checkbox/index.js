const checkbox = (theme) => ({
  ".form-check-input": {
    width: "1.23rem",
    height: "1.23rem",
    "background-color": theme("colors.white"),
    "background-repeat": "no-repeat",
    "background-position": "50%",
    "background-size": "contain",
    border: `1px solid theme("colors.blue-grey.100")`,
    position: "relative",
    "background-image": "none",
    "border-radius": "0.35rem",
    cursor: "pointer",
    "margin-right": "7px",
    transition: "background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out" 
  },
  ".checkbox:checked + .form-check-input:after": {
    transition: "opacity .25s ease-in-out",
    "font-family": "FontAwesome",
    content: `"\\f00c"`,
    width: "100%",
    height: "100%",
    color: theme("colors.white"),
    position: "absolute",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-size": ".67rem"
  },
  
  ".checkbox:checked + .form-check-input": {
    "background-color": theme("colors.pink.500"),
    "border-color": theme("colors.pink.500")
  }
});

module.exports.checkbox = checkbox;