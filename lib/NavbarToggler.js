"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarToggler;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function NavbarToggler(_ref) {
  var rest = _extends({}, _ref);

  return /*#__PURE__*/_react.default.createElement("button", _extends({}, rest, {
    className: "cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
    type: "button"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "block relative w-6 h-px rounded-sm bg-white"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "block relative w-6 h-px rounded-sm bg-white mt-1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "block relative w-6 h-px rounded-sm bg-white mt-1"
  }));
}