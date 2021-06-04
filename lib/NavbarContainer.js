"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarContainer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NavbarContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between ".concat(className)
  }, children);
}

NavbarContainer.propTypes = {
  children: _propTypes["default"].node.isRequired
};