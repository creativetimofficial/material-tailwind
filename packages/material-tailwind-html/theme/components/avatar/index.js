const avatar = (theme) => ({

  ".avatar": {
    color: theme("colors.white"),
    display: "inline-flex",
    height: theme("height.12"),
    width: theme("width.12"),
    transition: "all .2s ease-in-out",
    borderRadius: theme("borderRadius.lg"),

    "&.avatar-circular": {
      borderRadius: theme("borderRadius.full")
    },
  
    "&.avatar-xs": {
      height: theme("height.6"),
      width: theme("width.6"),
      borderRadius: theme("borderRadius.md"),
    },
    "&.avatar-sm": {
      height: theme("height.9"),
      width: theme("width.9"),
      borderRadius: theme("borderRadius.md"),
    },
    "&.avatar-md": {
      height: theme("height.12"),
      width: theme("width.12"),
    },
    "&.avatar-lg": {
      height: theme("height.16"),
      width: theme("width.16"),
    },
    "&.avatar-xl": {
      height: theme("height.20"),
      width: theme("width.20"),
      borderRadius: theme("borderRadius.xl"),
    }, 
    "&.avatar-xxl": {
      height: theme("height.24"),
      width: theme("width.24"),
      borderRadius: theme("borderRadius.2xl"),
    }
  },

  ".avatar-group": {
    ".avatar": {
      position: "relative",
      zIndex: theme("zIndex.20"),
      border: theme("spacing.[0.5]") + " solid " + theme("colors.white"),
      borderRadius: theme("borderRadius.full"),

      "&:hover": {
        zIndex: theme("zIndex.30")
      },

      "+ .avatar": {
        marginLeft: "-" + theme("spacing.3")
      }
    }
  }
});

module.exports.avatar = avatar;
