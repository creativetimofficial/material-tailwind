"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "px-4 py-5"
  }, children);
}

CardHeader.propTypes = {
  children: _propTypes.default.node.isRequired
};