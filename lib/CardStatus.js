"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardStatus;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CardStatus(_ref) {
  var title = _ref.title,
      amount = _ref.amount,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-gray-500 font-light tracking-wide text-base mb-1"
  }, title), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-3xl text-gray-900"
  }, amount));
}

CardStatus.propTypes = {
  title: _propTypes["default"].string.isRequired,
  amount: _propTypes["default"].string.isRequired
};