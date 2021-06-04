"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarWrapper;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NavbarWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start ".concat(className)
  }, children);
}

NavbarWrapper.propTypes = {
  children: _propTypes["default"].node.isRequired
};