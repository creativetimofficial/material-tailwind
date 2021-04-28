"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavbarList;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NavbarList(_ref) {
  var children = _ref.children,
      leftSide = _ref.leftSide;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex lg:items-center flex-col lg:flex-row list-none ".concat(leftSide ? 'mr-auto' : 'ml-auto')
  }, children);
}

NavbarList.propTypes = {
  children: _propTypes["default"].node.isRequired,
  leftSide: _propTypes["default"].bool
};