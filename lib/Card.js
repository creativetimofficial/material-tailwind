"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Card;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Card(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full bg-white rounded-xl overflow-hdden shadow-md p-4 ".concat(className)
  }, children);
}

Card.propTypes = {
  children: _propTypes["default"].node.isRequired
};