"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarToggler;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialRippleEffects = _interopRequireDefault(require("material-ripple-effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = {
  white: 'bg-white',
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-700',
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
var bgHoverColors = {
  white: 'hover:bg-white hover:bg-opacity-20',
  blueGray: 'hover:bg-blue-gray-50',
  gray: 'hover:bg-gray-50',
  brown: 'hover:bg-brown-50',
  deepOrange: 'hover:bg-deep-orange-50',
  orange: 'hover:bg-orange-50',
  amber: 'hover:bg-amber-50',
  yellow: 'hover:bg-yellow-50',
  lime: 'hover:bg-lime-50',
  lightGreen: 'hover:bg-light-green-50',
  green: 'hover:bg-green-50',
  teal: 'hover:bg-teal-50',
  cyan: 'hover:bg-cyan-50',
  lightBlue: 'hover:bg-light-blue-50',
  blue: 'hover:bg-blue-50',
  indigo: 'hover:bg-indigo-50',
  deepPurple: 'hover:bg-deep-purple-50',
  purple: 'hover:bg-purple-50',
  pink: 'hover:bg-pink-50',
  red: 'hover:bg-red-50'
};

function NavbarToggler(_ref) {
  var color = _ref.color,
      ripple = _ref.ripple,
      rest = _objectWithoutProperties(_ref, ["color", "ripple"]);

  var rippleEffect = new _materialRippleEffects["default"]();
  return /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    className: "cursor-pointer text-xl leading-none py-1 px-1.5 rounded-full border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none ".concat(bgHoverColors[color], " transition-all duration-300"),
    type: "button",
    onMouseUp: function onMouseUp(e) {
      ripple === 'dark' && rippleEffect.create(e, 'dark');
      ripple === 'light' && rippleEffect.create(e, 'light');
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block relative w-6 h-px rounded-sm ".concat(colors[color])
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block relative w-6 h-px rounded-sm ".concat(colors[color], " mt-1")
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block relative w-6 h-px rounded-sm ".concat(colors[color], " mt-1")
  }));
}

NavbarToggler.defaultProps = {
  color: 'white'
};
NavbarToggler.propTypes = {
  color: _propTypes["default"].string.isRequired,
  ripple: _propTypes["default"].string
};