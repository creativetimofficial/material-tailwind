"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardBody;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CardBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 pt-5 pb-4"
  }, children);
}

CardBody.propTypes = {
  children: _propTypes["default"].node.isRequired
};