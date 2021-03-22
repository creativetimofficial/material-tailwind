"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-sm bg-white rounded-xl overflow-hdden shadow p-3 my-8"
  }, children);
}

Card.propTypes = {
  children: _propTypes.default.node.isRequired
};