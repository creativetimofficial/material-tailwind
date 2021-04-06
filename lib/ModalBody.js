"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalBody;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ModalBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex-auto mb-6"
  }, children);
}

ModalBody.propTypes = {
  children: _propTypes["default"].node.isRequired
};