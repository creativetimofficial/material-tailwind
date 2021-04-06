"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabContent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TabContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex flex-col min-w-0 break-words w-full px-4 pb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-auto text-center font-light leading-normal"
  }, children));
}

TabContent.propTypes = {
  children: _propTypes["default"].node.isRequired
};