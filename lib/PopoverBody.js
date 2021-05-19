"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PopoverHeader(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-gray-700 font-normal px-4 pb-4 ".concat(className)
  }, children);
}

PopoverHeader.propTypes = {
  children: _propTypes["default"].node.isRequired
};