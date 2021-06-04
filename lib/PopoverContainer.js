"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverContainer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PopoverContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-xl ".concat(className)
  }, children);
}

PopoverContainer.propTypes = {
  children: _propTypes["default"].node.isRequired
};