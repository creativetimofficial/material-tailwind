"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardRow;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CardRow(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap border-b border-gray-200 ".concat(className)
  }, children);
}

CardRow.propTypes = {
  children: _propTypes["default"].node.isRequired
};