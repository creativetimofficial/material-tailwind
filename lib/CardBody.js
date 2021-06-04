"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardBody;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CardBody(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4 ".concat(className)
  }, children);
}

CardBody.propTypes = {
  children: _propTypes["default"].node.isRequired
};