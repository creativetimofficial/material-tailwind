const datepicker = (theme) => ({
  ".datepicker.flatpickr-input": {
    backgroundColor: theme("colors.white")
  },
  ".flatpickr-calendar.open": {
    marginTop: theme("spacing.1")
  },
  ".flatpickr-calendar.arrowBottom": {
    marginTop: "-"+theme("spacing.5")
  },
  ".flatpickr-calendar .flatpickr-innerContainer": {
    marginTop: "15px !important"
  },
  ".flatpickr-calendar.hasTime .flatpickr-time": {
    borderTop: "none !important"
  },
  ".flatpickr-calendar .numInputWrapper span": {
    border: "none",
    borderBottom: "1px solid rgba(57, 57, 57, 0.15)"
  },
  ".flatpickr-calendar .numInputWrapper:hover .arrowUp, .flatpickr-calendar .numInputWrapper:hover .arrowDown": {
    marginTop: "3px"
  },
  ".flatpickr-calendar .flatpickr-day.today, .flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange": {
    background:  theme("colors.pink.500"),
    color: theme("colors.white"),
    border: "none",
  },
  ".flatpickr-calendar .flatpickr-day.inRange": {
    background: "rgba(94, 114, 228, 0.28)",
    border: "none",
    webkitBoxShadow: "-5px 0 0 #d7dcf8, 5px 0 0 #d7dcf8",
    boxShadow: "-5px 0 0 #d7dcf8, 5px 0 0 #d7dcf8"
  },
  ".flatpickr-calendar .flatpickr-day:not(.selected):hover, .flatpickr-calendar .flatpickr-day:not(.selected):focus": {
    background: "rgba(94, 114, 228, 0.28)",
    border: "none"
  },
  ".flatpickr-calendar .flatpickr-time input:hover, .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover, .flatpickr-calendar .flatpickr-time input:focus, .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:focus": {
    background: "rgba(94, 114, 228, 0.28)"
  },
  ".flatpickr.form-control": {
    background: theme("colors.white")
  },
  ".flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1))": {
    boxShadow: "-10px 0 0 #e91e63"
  }
});

module.exports.datepicker = datepicker;
