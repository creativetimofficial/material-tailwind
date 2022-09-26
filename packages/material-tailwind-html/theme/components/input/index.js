const input = (theme) => ({
  ".form-control": {
    display: "block",
    width: theme("width.full"),
    padding: "theme('spacing.2') 0",
    fontSize: theme("fontSize.sm"),
    fontWeight: theme("fontWeight.normal"),
    lineHeight: "1.15rem",
    color: "#495057",
    backgroundColor: theme("colors.transparent"),
    backgroundClip: "padding-box",
    border: `1px solid theme("colors.blue-grey.100")`,
    appearance: "none",
    borderRadius: theme("borderRadius.md"),
    transition: ".2s ease",
  
    "&:focus-visible": {
      outline: "none"
    },
  },
  ".form-label": {
    position: "absolute"
  },
  ".form-label,label": {
    fontSize: theme("fontSize.sm"),
    fontWeight: theme("fontWeight.normal"),
    marginBottom: theme("spacing.2"),
    color: theme("colors.blue-grey.500"),
    marginLeft: theme("spacing.0"),
    transition: "all .2s ease"
  },
  ".input-group": {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    width: theme("width.full"),
    transition: ".2s ease",
    border: "none",

    "&.input-group-outline": {
      ".form-label": {
        display: "flex",
        lineHeight: "3.925",
        top: "-0.375rem",
        marginBottom: theme("spacing.0"),

        "&:before,&:after": {
          content: '""',
          borderTop: "1px solid",
          borderTopColor: theme("colors.blue-grey.100"),
          pointerEvents: "none",
          marginTop: theme("spacing.[1.5]"),
          boxSizing: "border-box",
          display: "block",
          height: theme("spacing.2"),
          width: theme("spacing.[2.5]"),
          borderWidth: "1px 0 0",
          borderColor: theme("colors.transparent")
        },

        "&:before": {
          marginRight: theme("spacing.1"),
          borderLeft: "1px solid transparent",
          borderRadius: "theme('spacing.[1.5]') 0"
        },

        "&:after": {
          flexGrow: "1",
          marginLeft: theme("spacing.1"),
          borderRight: "1px solid transparent",
          borderRadius: "0 theme('spacing.[1.5]')"
        }
      },

      ".form-control": {
        background: "none",
        border: `1px solid theme("colors.blue-grey.100")`,
        borderRadius: theme("borderRadius.md"),
        borderTopLeftRadius: theme("borderRadius.md"),
        borderBottomLeftRadius: theme("borderRadius.md"),
        padding: "theme('spacing.[2.5]') theme('spacing.3')",
        lineHeight: theme("spacing.5"),
        zIndex: theme("zIndex.20")
      }
    },

    "&.input-group-dynamic,&.input-group-static,": {
      ".form-control": {
        borderRadius: theme("borderRadius.none"),
        border: theme("borderRadius.none"),
        background: "no-repeat bottom,50% calc(100% - 1px)",
        backgroundImage: `linear-gradient(0deg,theme("colors.pink.500") 2px,rgba(156,39,176,0) 0),linear-gradient(0deg,theme("colors.blue-grey.100") 1px,hsla(0,0%,82%,0) 0)`,
        backgroundSize: "0 100%,100% 100%",
        transition: ".2s ease",
      },
      ".form-label": {
        top: "0.4rem"
      }
    },

    "&.input-group-static": {
      "label": {
        marginBottom: theme("spacing.0")
      },
    },

    "&.focused,&.is-filled": {
      ".form-label": {
        width: theme("width.full"),
        height: theme("height.full"),
        fontSize: ".6875rem",
        color: theme("colors.pink.500"),
        display: "flex",
        lineHeight: "1.25",

        "&:before": {
          opacity: theme("opacity.100"),
          borderTopColor: theme("colors.pink.500"),
          boxShadow: `inset 0 1px theme("colors.pink.500")`
        },

        "&:after": {
          opacity: "1",
          borderTopColor: theme("colors.pink.500"),
          boxShadow: `inset 0 1px theme("colors.pink.500")`
        }
      },

      "&.input-group-outline": {
        ".form-label+.form-control": {
          borderColor: theme("colors.pink.500"),
          borderTopColor: theme("colors.transparent"),
          boxShadow: `inset 1px 0 theme("colors.pink.500"), inset -1px 0 theme("colors.pink.500"), inset 0 -1px theme("colors.pink.500")`
        },
      },

      "&.input-group-dynamic": {
        ".form-label": {
          top: "-0.7rem"
        }
      },

      "&.input-group-static": {
        "label": {
          color: theme("colors.pink.500")
        }
      },

      ".form-control": {
        backgroundSize: "100% 100%,100% 100%"
      }
    },

    "&:focus-visible": {
      outline: "none"
    },


    "small": {
      color: theme("colors.secondary.500"),
      position: "absolute",
      bottom: theme("spacing.0"),
      left: theme("spacing.0"),
      visibility: "hidden"
    },

    "&.error small": {
      visibility: "visible",
      position: "relative",
    },
    
    "&.success.is-filled": {
      ".form-control": {
        borderColor: theme("colors.green.500") + "!important",
        borderTop: "none",
        boxShadow: "inset 1px 0 "+ theme("colors.green.500") + ", inset -1px 0 "+ theme("colors.green.500") + ", inset 0 -1px "+ theme("colors.green.500") + "!important"
      },
      ".form-label": {
        color: theme("colors.green.500") + "!important",

        "&:before": {
          borderTopColor: theme("colors.green.500"),
          boxShadow: "inset 0 1px" + theme("colors.green.500")
        },
        "&:after": {
          borderTopColor: theme("colors.green.500"),
          boxShadow: "inset 0 1px" + theme("colors.green.500")
        }
      }
    },

    "&.success .form-control+small": {
      color: theme("colors.green.500")
    },

    "&.error.is-filled": {
      ".form-control": {
        borderColor: theme("colors.red.500") + "!important",
        borderTop: "none",
        boxShadow: "inset 1px 0 "+ theme("colors.red.500") + ", inset -1px 0 "+ theme("colors.red.500") + ", inset 0 -1px "+ theme("colors.red.500") + "!important"
      },
      ".form-label": {
        color: theme("colors.red.500") + "!important",

        "&:before": {
          borderTopColor: theme("colors.red.500"),
          boxShadow: "inset 0 1px" + theme("colors.red.500")
        },
        "&:after": {
          borderTopColor: theme("colors.red.500"),
          boxShadow: "inset 0 1px" + theme("colors.red.500")
        }
      }
    },

    "&.error .form-control+small": {
      color: theme("colors.red.500")
    }
  }
});



module.exports.input = input;


