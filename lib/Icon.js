"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = {
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

function Icon(_ref) {
  var _ref$family = _ref.family,
      family = _ref$family === void 0 ? 'material-icons' : _ref$family,
      name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["family", "name", "color", "size"]);

  var iconUI;

  if (family === 'material-icons') {
    iconUI = /*#__PURE__*/_react.default.createElement("span", _extends({}, rest, {
      className: "".concat(family, " ").concat(colors[color], " ").concat(size ? "text-".concat(size) : 'text-base', " leading-none")
    }), name);
  } else if (family === 'font-awesome') {
    iconUI = /*#__PURE__*/_react.default.createElement("i", _extends({}, rest, {
      className: "fas ".concat(name, " ").concat(colors[color], " text-").concat(size)
    }));
  }

  return iconUI;
}

Icon.propTypes = {
  family: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  size: _propTypes.default.string
};