const checkbox = (theme) => ({
  ".form-check-input": {
    width: theme("width.5"),
    height: theme("height.5"),
    backgroundColor: theme("colors.white"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: theme("backgroundSize.contain"),
    border: `1px solid theme("colors.blue-grey.100")`,
    position: "relative",
    backgroundImage: theme("backgroundImage.none"),
    borderRadius: theme("borderRadius.md"),
    cursor: theme("cursor.pointer"),
    marginRight: theme("spacing.2"),
    transition:
      "background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out"
  },
  ".checkbox:checked + .form-check-input:after": {
    transition: "opacity .25s ease-in-out",
    content: `" "`,
    backgroundImage: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd' /%3E%3C/svg%3E"
    )`,
    backgroundPosition: theme("backgroundPosition.center"),
    width: theme("width.full"),
    height: theme("height.full"),
    position: "absolute"
  },

  ".checkbox:checked + .form-check-input": {
    backgroundColor: theme("colors.pink.500"),
    borderColor: theme("colors.pink.500")
  }
});

module.exports.checkbox = checkbox;
