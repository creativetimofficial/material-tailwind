"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarCollapse;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NavbarCollapse(_ref) {
  var children = _ref.children,
      className = _ref.className,
      open = _ref.open;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:flex flex-grow items-center ".concat(open ? 'block' : 'hidden', " ").concat(className)
  }, children);
}

NavbarCollapse.propTypes = {
  children: _propTypes["default"].node.isRequired,
  open: _propTypes["default"].bool.isRequired
};