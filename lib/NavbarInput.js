"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavbarInput(_ref) {
  var fontAwesome = _ref.fontAwesome,
      rest = _objectWithoutProperties(_ref, ["fontAwesome"]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative lg:w-60 sm:w-full flex items-center bg-white bg-opacity-20 py-1 px-3 rounded-lg"
  }, fontAwesome ? /*#__PURE__*/_react["default"].createElement("i", {
    "class": "fas fa-search text-white text-xl"
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "material-icons text-white text-xl mr-2"
  }, "search"), /*#__PURE__*/_react["default"].createElement("input", _extends({}, rest, {
    className: "bg-transparent border-none text-sm leading-snug text-white w-full font-normal placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0"
  })));
}

NavbarInput.defaultProps = {
  fontAwesome: false
};
NavbarInput.propTypes = {
  fontAwesome: _propTypes["default"].bool.isRequired
};