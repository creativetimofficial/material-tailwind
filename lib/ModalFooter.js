"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalFooter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ModalFooter(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-end gap-4"
  }, children);
}

ModalFooter.propTypes = {
  children: _propTypes["default"].node.isRequired
};