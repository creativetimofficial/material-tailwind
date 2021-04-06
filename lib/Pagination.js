"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pagination;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Pagination(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex pl-0 rounded list-none"
  }, children)));
}

Pagination.propTypes = {
  children: _propTypes["default"].node.isRequired
};