"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarBrand;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colors = {
  white: 'text-white',
  blueGray: 'text-blue-gray-900',
  gray: 'text-gray-900',
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

function NavbarBrand(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase ".concat(colors[color])
  }, children);
}

NavbarBrand.defaultProps = {
  color: 'white'
};
NavbarBrand.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string
};