"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tab;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Tab(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-full p-4 my-8 ".concat(className)
  }, children);
}

Tab.propTypes = {
  children: _propTypes["default"].node.isRequired
};