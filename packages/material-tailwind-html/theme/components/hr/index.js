const hr = (theme) => ({
  "hr": {
    height: "1px",
    opacity: ".25",
    "border-top-width": "0px",

    "&.horizontal" : {
      "background-color": "transparent",

      "&.dark": {
        "background-image": "linear-gradient(90deg, transparent, rgba(0,0,0,.4), transparent)"
      },
      "&.light": {
        "background-image": "linear-gradient(90deg, hsla(0,0%,100%,0), #fff, hsla(0,0%,100%,0))"
      }
    },

    "&.vertical": {
      position: "absolute",
      "background-color": "transparent",
      height: "100%",
      right: "0",
      top: "0",
      width: "1px",
    
      "&.light": {
        "background-image": "background-image: linear-gradient(90deg, hsla(0,0%,100%,0), #fff, hsla(0,0%,100%,0))"
      },
    
      "&.dark": {
        "background-image": "linear-gradient(90deg,transparent,rgba(0,0,0,.4),transparent)"
      }
    }
  }
});

module.exports.hr = hr;
