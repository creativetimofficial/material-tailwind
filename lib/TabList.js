"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabList;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-600',
  lime: 'bg-lime-500',
  lightGreen: 'bg-light-green-500',
  green: 'bg-green-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  lightBlue: 'bg-light-blue-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  deepPurple: 'bg-deep-purple-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500'
};
var shadowColors = {
  blueGray: 'shadow-lg-blue-gray',
  gray: 'shadow-lg-gray',
  brown: 'shadow-lg-brown',
  deepOrange: 'shadow-lg-deep-orange',
  orange: 'shadow-lg-orange',
  amber: 'shadow-lg-amber',
  yellow: 'shadow-lg-yellow',
  lime: 'shadow-lg-lime',
  lightGreen: 'shadow-lg-light-green',
  green: 'shadow-lg-green',
  teal: 'shadow-lg-teal',
  cyan: 'shadow-lg-cyan',
  lightBlue: 'shadow-lg-light-blue',
  blue: 'shadow-lg-blue',
  indigo: 'shadow-lg-indigo',
  deepPurple: 'shadow-lg-deep-purple',
  purple: 'shadow-lg-purple',
  pink: 'shadow-lg-pink',
  red: 'shadow-lg-red'
};

function TabList(_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(colors[color], " w-full rounded-lg p-4 mx-5 flex justify-start -mt-12 mb-6 list-none ").concat(shadowColors[color], " z-10 ").concat(className),
    role: "tablist"
  }, children);
}

TabList.defaultProps = {
  color: 'lightBlue'
};
TabList.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired
};