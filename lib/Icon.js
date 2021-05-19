"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = {
  white: 'text-white',
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
var sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl'
};

function Icon(_ref) {
  var family = _ref.family,
      name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["family", "name", "color", "size"]);

  var iconUI;

  if (family === 'material-icons') {
    iconUI = /*#__PURE__*/_react["default"].createElement("span", _extends({}, rest, {
      className: "".concat(family, " ").concat(colors[color], " ").concat(size ? sizes[size] : 'text-base', " leading-none")
    }), name);
  } else if (family === 'font-awesome') {
    iconUI = /*#__PURE__*/_react["default"].createElement("i", _extends({}, rest, {
      className: "".concat(name, " ").concat(colors[color], " ").concat(sizes[size])
    }));
  }

  return iconUI;
}

Icon.defaultProps = {
  family: 'material-icons',
  size: 'base'
};
Icon.propTypes = {
  family: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string,
  size: _propTypes["default"].string.isRequired
};