const datepicker = (theme) => ({
  ".datepicker.flatpickr-input": {
    "background-color": theme("colors.white")
  },
  ".flatpickr-calendar.open": {
    "margin-top": "4px"
  },
  ".flatpickr-calendar.arrowBottom": {
    "margin-top": "-20px"
  },
  ".flatpickr-calendar .flatpickr-innerContainer": {
    "margin-top": "15px !important"
  },
  ".flatpickr-calendar.hasTime .flatpickr-time": {
    "border-top": "none !important"
  },
  ".flatpickr-calendar .numInputWrapper span": {
    border: "none",
    "border-bottom": "1px solid rgba(57, 57, 57, 0.15)"
  },
  ".flatpickr-calendar .numInputWrapper:hover .arrowUp, .flatpickr-calendar .numInputWrapper:hover .arrowDown": {
    "margin-top": "3px"
  },
  ".flatpickr-calendar .flatpickr-day.today, .flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange": {
    background:  theme("colors.pink.500"),
    color: theme("colors.white"),
    border: "none",
  },
  ".flatpickr-calendar .flatpickr-day.inRange": {
    background: "rgba(94, 114, 228, 0.28)",
    border: "none",
    "-webkit-box-shadow": "-5px 0 0 #d7dcf8, 5px 0 0 #d7dcf8",
    "box-shadow": "-5px 0 0 #d7dcf8, 5px 0 0 #d7dcf8"
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
    "box-shadow": "-10px 0 0 #e91e63"
  }
});

module.exports.datepicker = datepicker;
