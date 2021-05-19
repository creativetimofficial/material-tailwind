"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavLink;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialRippleEffects = _interopRequireDefault(require("material-ripple-effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavLink(_ref) {
  var children = _ref.children,
      active = _ref.active,
      ripple = _ref.ripple,
      rest = _objectWithoutProperties(_ref, ["children", "active", "ripple"]);

  var rippleEffect = new _materialRippleEffects["default"]();
  return /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
    className: "".concat(active === 'dark' && 'bg-black bg-opacity-20', " ").concat(active === 'light' && 'bg-white bg-opacity-20', " px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"),
    onMouseUp: function onMouseUp(e) {
      ripple === 'dark' && rippleEffect.create(e, 'dark');
      ripple === 'light' && rippleEffect.create(e, 'light');
    }
  }), children);
}

NavLink.propTypes = {
  children: _propTypes["default"].node.isRequired,
  active: _propTypes["default"].string,
  ripple: _propTypes["default"].string
};