const accordion = (theme) => ({
  ".accordion": {
    ".collapse.open": {
      opacity: theme("opacity.100"),
      transition: "all .35s ease"
    },
    ".collapse:not(.open)": {
      opacity: theme("opacity.0"),
      height: theme("height.0"),
      transition: "all .35s ease"
    },
  
    ".accordion-button": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: theme("width.full"),
      padding: `theme("padding.4") 0`,
      color: theme("colors.secondary.500"),
      borderBottom: "1px solid #dee2e6",
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
      backgroundColor: theme("colors.transparent"),
      boxShadow: "inset 0 0 0 rgba(0, 0, 0, .13)"
    },
  }
});

module.exports.accordion = accordion;
