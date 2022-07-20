const spinners = (theme) => ({
  ".spinner-border": {
    display: "inline-block",
    width: "2rem",
    height: "2rem",
    "vertical-align": "-0.125em",
    border: "0.25em solid currentColor",
    "border-right-color": "transparent",
    "border-radius": "50%",
    animation: ".75s linear infinite b",

    ".sr-only": {
      border: "0",
      clip: "rect(0,0,0,0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px"
    }
  },
  "@keyframes b": {
    "100%": { 
      transform: "rotate(1turn)" 
    }
  }
});

module.exports.spinners = spinners;
