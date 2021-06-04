"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Quote;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var textColors = {
  white: 'text-gray-200',
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-600',
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
var citeColors = {
  white: 'text-white',
  blueGray: 'text-blue-gray-800',
  gray: 'text-gray-800',
  brown: 'text-brown-800',
  deepOrange: 'text-deep-orange-800',
  orange: 'text-orange-800',
  amber: 'text-amber-800',
  yellow: 'text-yellow-800',
  lime: 'text-lime-800',
  lightGreen: 'text-light-green-800',
  green: 'text-green-800',
  teal: 'text-teal-800',
  cyan: 'text-cyan-800',
  lightBlue: 'text-light-blue-800',
  blue: 'text-blue-800',
  indigo: 'text-indigo-800',
  deepPurple: 'text-deep-purple-800',
  purple: 'text-purple-800',
  pink: 'text-pink-800',
  red: 'text-red-800'
};

function Quote(_ref) {
  var children = _ref.children,
      color = _ref.color,
      footer = _ref.footer,
      cite = _ref.cite,
      rest = _objectWithoutProperties(_ref, ["children", "color", "footer", "cite"]);

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: "mb-2"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "".concat(textColors[color], " text-base font-light leading-relaxed mt-0 mb-2")
  }, children), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "block ".concat(citeColors[color])
  }, "- ", footer, " ", /*#__PURE__*/_react["default"].createElement("cite", null, cite)));
}

Quote.defaultProps = {
  color: 'blueGray'
};
Quote.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired,
  footer: _propTypes["default"].string.isRequired,
  cite: _propTypes["default"].string.isRequired
};