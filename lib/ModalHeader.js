"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ModalHeader(_ref) {
  var children = _ref.children,
      toggler = _ref.toggler;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between mb-6"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-gray-900 text-2xl font-bold mt-0 mb-0"
  }, children), /*#__PURE__*/_react["default"].createElement("button", {
    className: "p-1 bg-transparent absolute top-2 right-4 text-gray-900 text-3xl leading-none outline-none focus:outline-none",
    onClick: toggler
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-900 text-3xl block"
  }, "\xD7")));
}

ModalHeader.propTypes = {
  children: _propTypes["default"].node.isRequired,
  toggler: _propTypes["default"].func.isRequired
};