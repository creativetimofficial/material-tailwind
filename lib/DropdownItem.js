"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialRippleEffects = _interopRequireDefault(require("material-ripple-effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Colors = {
  blueGray: 'hover:bg-blue-gray-500',
  gray: 'hover:bg-gray-500',
  brown: 'hover:bg-brown-500',
  deepOrange: 'hover:bg-deep-orange-500',
  orange: 'hover:bg-orange-500',
  amber: 'hover:bg-amber-500',
  yellow: 'hover:bg-yellow-600',
  lime: 'hover:bg-lime-500',
  lightGreen: 'hover:bg-light-green-500',
  green: 'hover:bg-green-500',
  teal: 'hover:bg-teal-500',
  cyan: 'hover:bg-cyan-500',
  lightBlue: 'hover:bg-light-blue-500',
  blue: 'hover:bg-blue-500',
  indigo: 'hover:bg-indigo-500',
  deepPurple: 'hover:bg-deep-purple-500',
  purple: 'hover:bg-purple-500',
  pink: 'hover:bg-pink-500',
  red: 'hover:bg-red-500'
};
var ShadowColors = {
  blueGray: 'hover:shadow-md-blue-gray',
  gray: 'hover:shadow-md-gray',
  brown: 'hover:shadow-md-brown',
  deepOrange: 'hover:shadow-md-deep-orange',
  orange: 'hover:shadow-md-orange',
  amber: 'hover:shadow-md-amber',
  yellow: 'hover:shadow-md-yellow',
  lime: 'hover:shadow-md-lime',
  lightGreen: 'hover:shadow-md-light-green',
  green: 'hover:shadow-md-green',
  teal: 'hover:shadow-md-teal',
  cyan: 'hover:shadow-md-cyan',
  lightBlue: 'hover:shadow-md-light-blue',
  blue: 'hover:shadow-md-blue',
  indigo: 'hover:shadow-md-indigo',
  deepPurple: 'hover:shadow-md-deep-purple',
  purple: 'hover:shadow-md-purple',
  pink: 'hover:shadow-md-pink',
  red: 'hover:shadow-md-red'
};

function DropdownItem(_ref) {
  var children = _ref.children,
      color = _ref.color,
      ripple = _ref.ripple,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "color", "ripple", "className"]);

  var rippleEffect = new _materialRippleEffects["default"]();
  return /*#__PURE__*/_react["default"].createElement("span", _extends({}, rest, {
    className: "block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white ".concat(Colors[color], " ").concat(ShadowColors[color], " transition-all duration-300"),
    onMouseUp: function onMouseUp(e) {
      ripple === 'dark' && rippleEffect.create(e, 'dark');
      ripple === 'light' && rippleEffect.create(e, 'light');
    }
  }), children);
}

DropdownItem.defaultProps = {
  color: 'lightBlue'
};
DropdownItem.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired,
  ripple: _propTypes["default"].string
};