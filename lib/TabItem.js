"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialRippleEffects = _interopRequireDefault(require("material-ripple-effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TabItem(_ref) {
  var children = _ref.children,
      active = _ref.active,
      ripple = _ref.ripple,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "active", "ripple", "className"]);

  var rippleEffect = new _materialRippleEffects["default"]();
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
    className: "flex items-center justify-center gap-1 rounded-lg text-sm font-medium py-4 px-6 leading-normal text-white transition-all duration-300 ".concat(active && 'bg-white bg-opacity-20', " ").concat(className),
    role: "tablist",
    onMouseUp: function onMouseUp(e) {
      ripple === 'dark' && rippleEffect.create(e, 'dark');
      ripple === 'light' && rippleEffect.create(e, 'light');
    }
  }), children));
}

TabItem.defaultProps = {
  active: false
};
TabItem.propTypes = {
  children: _propTypes["default"].node.isRequired,
  active: _propTypes["default"].bool.isRequired,
  ripple: _propTypes["default"].string
};