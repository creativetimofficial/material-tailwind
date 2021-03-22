"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabPane;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabPane(_ref) {
  var children = _ref.children,
      active = _ref.active;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: active ? 'block' : 'hidden'
  }, children);
}

TabPane.propTypes = {
  children: _propTypes.default.node.isRequired,
  active: _propTypes.default.bool.isRequired
};