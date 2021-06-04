"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navbar;

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

function Navbar(_ref) {
  var children = _ref.children,
      color = _ref.color,
      navbar = _ref.navbar,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "flex flex-wrap items-center justify-between py-2.5 px-3 mb-3 ".concat(colors[color], " ").concat(!navbar && 'rounded-lg', " ").concat(className)
  }, children));
}

Navbar.defaultProps = {
  color: 'lightBlue',
  navbar: false
};
Navbar.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired,
  navbar: _propTypes["default"].bool
};