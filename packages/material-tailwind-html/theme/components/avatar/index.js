const avatar = (theme) => ({
  ".avatar": {
    color: theme("colors.white"),
    display: "inline-flex",
    "align-items": "center",
    "justify-content": "center",
    "font-size": "1rem",
    "border-radius": "50rem",
    height: "2.5rem",
    width: "2.5rem",
    transition: "all .2s ease-in-out",
  
    "img": {
      height: "100%",
      width: "100%",
      "border-radius": ".75rem",
    },
  
    "&.avatar-circular img": {
      "border-radius": "50%"
    },
  
    "&.avatar-xs": {
      height: "1.25rem",
      width: "1.25rem",
    },
    "&.avatar-sm": {
      height: "1.75rem",
      width: "1.75rem",
    },
    "&.avatar-md": {
      height: "2.5rem",
      width: "2.5rem",
    },
    "&.avatar-lg": {
      height: "3rem",
      width: "3rem",
    },
    "&.avatar-xl": {
      height: "4rem",
      width: "4rem",
    }, 
    "&.avatar-xxl": {
      height: "5rem",
      width: "5rem",
    }
  }
});

module.exports.avatar = avatar;
