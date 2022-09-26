const radio = (theme) => ({
  ".radio": {
    width: "1.23rem",
    height: "1.23rem"
  },
  ".radio + .form-check-input": {
    borderRadius: "50%"
  },
  ".radio + .form-check-input:after": {
    transition: "opacity .25s ease-in-out",
    content: '""',
    position: "absolute",
    width: ".8rem",
    height: ".8rem",
    borderRadius: "50%",
    backgroundImage: `linear-gradient(195deg, theme("colors.pink.400"), theme("colors.pink.600"))`,
    opacity: theme('opacity.0'),
    left: theme('spacing.0'),
    right: theme('spacing.0'),
    top: theme('spacing.0'),
    bottom: theme('spacing.0'),
    margin: "auto"
  },
  ".radio:checked + .form-check-input": {
    borderColor: theme("colors.pink.500")
  },
  ".radio:checked + .form-check-input:after": {
    opacity: theme('opacity.100')
  }
});

module.exports.radio = radio;
