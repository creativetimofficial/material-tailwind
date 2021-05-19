"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardStatusFooter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Colors = {
  blueGray: 'text-blue-gray-500',
  gray: 'text-gray-500',
  brown: 'text-brown-500',
  deepOrange: 'text-deep-orange-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-600',
  lime: 'text-lime-500',
  lightGreen: 'text-light-green-500',
  green: 'text-green-500',
  teal: 'text-teal-500',
  cyan: 'text-cyan-500',
  lightBlue: 'text-light-blue-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  deepPurple: 'text-deep-purple-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
  red: 'text-red-500'
};

function CardStatusFooter(_ref) {
  var children = _ref.children,
      color = _ref.color,
      amount = _ref.amount,
      date = _ref.date,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-700 pt-4 flex items-center ".concat(className)
  }, children, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(Colors[color], " ml-1 mr-2")
  }, amount), /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-light whitespace-nowrap"
  }, date));
}

CardStatusFooter.defaultProps = {
  color: 'lightBlue'
};
CardStatusFooter.propTypes = {
  children: _propTypes["default"].node,
  color: _propTypes["default"].string.isRequired,
  amount: _propTypes["default"].string.isRequired,
  date: _propTypes["default"].string.isRequired
};