"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TooltipContent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TooltipContent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-2.5 py-1.5 bg-black bg-opacity-80 text-white text-sm rounded ".concat(className)
  }, children);
}

TooltipContent.propTypes = {
  children: _propTypes["default"].node.isRequired
};