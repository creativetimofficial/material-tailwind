"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PaginationItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialRippleEffects = _interopRequireDefault(require("material-ripple-effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function PaginationItem(_ref) {
  var children = _ref.children,
      color = _ref.color,
      button = _ref.button,
      ripple = _ref.ripple,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "color", "button", "ripple", "className"]);

  var rippleEffect = new _materialRippleEffects["default"]();
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "grid place-items-center"
  }, /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
    className: "text-sm leading-none flex ".concat(button ? 'tracking-wider rounded-lg w-14' : 'rounded-full w-8', " h-8 mx-1 p-0 items-center justify-center ").concat(color ? "".concat(colors[color], " text-white") : 'bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 focus:bg-gray-500 focus:bg-opacity-20 active:bg-gray-500 active:bg-opacity-40', " transition-all duration-300 ").concat(className),
    onMouseUp: function onMouseUp(e) {
      ripple === 'dark' && rippleEffect.create(e, 'dark');
      ripple === 'light' && rippleEffect.create(e, 'light');
    }
  }), children));
}

PaginationItem.defaultProps = {
  button: false
};
PaginationItem.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string,
  button: _propTypes["default"].bool.isRequired,
  ripple: _propTypes["default"].string
};