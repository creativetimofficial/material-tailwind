"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarBrand;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NavbarBrand(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white",
    href: "#pablo"
  }, children);
}

NavbarBrand.propTypes = {
  children: _propTypes["default"].node.isRequired
};