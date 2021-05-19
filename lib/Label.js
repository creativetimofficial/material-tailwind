"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Label;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bgColors = {
  blueGray: 'bg-blue-gray-100',
  gray: 'bg-gray-100',
  brown: 'bg-brown-100',
  deepOrange: 'bg-deep-orange-100',
  orange: 'bg-orange-100',
  amber: 'bg-amber-100',
  yellow: 'bg-yellow-100',
  lime: 'bg-lime-100',
  lightGreen: 'bg-light-green-100',
  green: 'bg-green-100',
  teal: 'bg-teal-100',
  cyan: 'bg-cyan-100',
  lightBlue: 'bg-light-blue-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  deepPurple: 'bg-deep-purple-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
  red: 'bg-red-100'
};
var textColors = {
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  lightGreen: 'text-light-green-700',
  green: 'text-green-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  lightBlue: 'text-light-blue-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  deepPurple: 'text-deep-purple-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  red: 'text-red-700'
};

function Label(_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-max flex items-center justify-between py-1 px-3 rounded-full ".concat(bgColors[color], " last:mr-0 mr-1 transition-all duration-300 ").concat(className)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs font-semibold uppercase ".concat(textColors[color])
  }, children)));
}

Label.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired
};