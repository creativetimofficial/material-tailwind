const accordion = (theme) => ({
  ".accordion": {
    ".collapse.open": {
      opacity: "1",
      height: "100%",
      transition: "all .35s ease"
    },
    ".collapse:not(.open)": {
      opacity: "0",
      height: "0",
      transition: "all .35s ease"
    },
  
    ".accordion-button": {
      position: "relative",
      display: "flex",
      "align-items": "center",
      width: "100%",
      padding: "1rem 0",
      "font-size": "inherit",
      color: theme("colors.secondary.500"),
      "text-align": "left",
      "background-color": "transparent",
      border: "0",
      "border-radius": "0",
      "border-bottom": "1px solid #dee2e6",
      "overflow-anchor": "none",
      transition: "all .15s ease-in,border-radius .15s ease",
  
      "&[aria-expanded='true']": {
        ".collapse-close": {
          display: "none"
        },
        ".collapse-open": {
          display: "block"
        }
      }, 
  
      "&[aria-expanded='false']": {
        ".collapse-close": {
          display: "block"
        },
        ".collapse-open": {
          display: "none"
        }
      }
    },
    
    ".accordion-button:not(.collapsed)": {
      color: theme("colors.dark.500"),
      "background-color": "transparent",
      "box-shadow": "inset 0 0 0 rgba(0, 0, 0, .13)"
    },
  }
});

module.exports.accordion = accordion;
