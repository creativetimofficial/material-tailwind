"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checkbox;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = {
  blueGray: 'mt-checkbox-blue-gray-500',
  gray: 'mt-checkbox-gray-500',
  brown: 'mt-checkbox-brown-500',
  deepOrange: 'mt-checkbox-deep-orange-500',
  orange: 'mt-checkbox-orange-500',
  amber: 'mt-checkbox-amber-500',
  yellow: 'mt-checkbox-yellow-600',
  lime: 'mt-checkbox-lime-500',
  lightGreen: 'mt-checkbox-light-green-500',
  green: 'mt-checkbox-green-500',
  teal: 'mt-checkbox-teal-500',
  cyan: 'mt-checkbox-cyan-500',
  lightBlue: 'mt-checkbox-light-blue-500',
  blue: 'mt-checkbox-blue-500',
  indigo: 'mt-checkbox-indigo-500',
  deepPurple: 'mt-checkbox-deep-purple-500',
  purple: 'mt-checkbox-purple-500',
  pink: 'mt-checkbox-pink-500',
  red: 'mt-checkbox-red-500'
};

function Checkbox(_ref) {
  var color = _ref.color,
      text = _ref.text,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["color", "text", "id"]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({}, rest, {
    id: id,
    type: "checkbox",
    className: "mt-checkbox ".concat(colors[color], " hidden overflow-hidden")
  })), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: "flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "relative w-5 h-5 inline-block mr-2 rounded border border-gray-500 transition-all duration-300"
  }), text));
}

Checkbox.defaultProps = {
  color: 'lightBlue'
};
Checkbox.propTypes = {
  color: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired
};