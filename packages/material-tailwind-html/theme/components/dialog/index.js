const dialog = (theme) => ({
  ".dialog": {
    position: "fixed",
    top: "0",
    left: "0",
    "z-index": "0",
    width: "100%",
    height: "100%",
    "overflow-x": "hidden",
    "overflow-y": "auto",
    outline: "0",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity .15s linear",

    ".modal-dialog": {
      transition: "transform .15s ease-out",
      transform: "translateY(-50px)",
      "min-height": "calc(100% - 15rem)",
      "max-width": "500px",
      margin: "1.75rem auto",
      display: "flex",
      "align-items": "center",
      position: "relative",
      width: "auto",
      "pointer-events": "none"
    },

    "&.open": {
      visibility: "visible",
      opacity: "1",
      "z-index": "1050",

      ".modal-dialog": {
        transform: "none",
        "z-index": "1212"
      }
    },

    ".dialog-overlay": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      "z-index": "1200",
      "background-color": "rgba(0,0,0,0.5)",
      transition: "opacity .15s linear"
    },

    ".dialog-content": {
      position: "relative",
      display: "flex",
      "flex-direction": "column",
      width: "100%",
      "pointer-events": "auto",
      "background-color": "#fff",
      "background-clip": "padding-box",
      border: "none",
      "border-radius": "0.4rem",
      "box-shadow": "0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22)",
      outline: "0",
      "z-index": "1300"
    },

    ".dialog-header": {
      display: "flex",
      "flex-shrink": "0",
      "align-items": "center",
      "justify-content": "space-between",
      padding: "1rem",
      "border-bottom": "1px solid #dee2e6",
      "border-top-left-radius": "calc(0.5rem - 1px)",
      "border-top-right-radius": "calc(0.5rem - 1px)",

      ".button-close": {
        "box-sizing": "content-box",
        padding: "0.25em",

        "i": {
          color: "#344767",
          "font-size": ".875rem"
        }
      }
    },

    ".dialog-body": {
      position: "relative",
      flex: "1 1 auto",
      padding: "1rem"
    },

    ".dialog-footer": {
      display: "flex",
      "flex-wrap": "wrap",
      "flex-shrink": "0",
      "align-items": "center",
      "justify-content": "flex-end",
      padding: "0.75rem",
      "border-top": "1px solid #dee2e6",
      "border-bottom-right-radius": "calc(0.5rem - 1px)",
      "border-bottom-left-radius": "calc(0.5rem - 1px)"
    }
  }

});

module.exports.dialog = dialog;
