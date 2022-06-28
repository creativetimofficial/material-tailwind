const radio = (theme) => ({
  ".radio": {
    width: "1.23rem",
    height: "1.23rem",
  },
  ".radio + .form-check-input": {
    "border-radius": "50%",
  },
  ".radio + .form-check-input:after": {
    transition: "opacity .25s ease-in-out",
    content: '""',
    position: "absolute",
    width: ".8rem",
    height: ".8rem",
    "border-radius": "50%",
    "background-image": `linear-gradient(195deg, theme("colors.pink.400"), theme("colors.pink.600"))`,
    opacity: "0",
    left: "0px",
    right: "0",
    top: "0px",
    bottom: "0",
    margin: "auto",
  },
  ".radio:checked + .form-check-input": {
    "border-color": theme("colors.pink.500"),
  },
  ".radio:checked + .form-check-input:after": {
    opacity: "1",
  },
});

module.exports.radio = radio;
