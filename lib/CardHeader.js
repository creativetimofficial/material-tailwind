"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fromColors = {
  blueGray: "from-blue-gray-500",
  gray: "from-gray-500",
  brown: "from-brown-500",
  deepOrange: "from-deep-orange-500",
  orange: "from-orange-500",
  amber: "from-amber-500",
  yellow: "from-yellow-600",
  lime: "from-lime-500",
  lightGreen: "from-light-green-500",
  green: "from-green-500",
  teal: "from-teal-500",
  cyan: "from-cyan-500",
  lightBlue: "from-light-blue-500",
  blue: "from-blue-500",
  indigo: "from-indigo-500",
  deepPurple: "from-deep-purple-500",
  purple: "from-purple-500",
  pink: "from-pink-500",
  red: "from-red-500"
};
var toColors = {
  blueGray: "to-blue-gray-700",
  gray: "to-gray-700",
  brown: "to-brown-700",
  deepOrange: "to-deep-orange-700",
  orange: "to-orange-700",
  amber: "to-amber-700",
  yellow: "to-yellow-800",
  lime: "to-lime-700",
  lightGreen: "to-light-green-700",
  green: "to-green-700",
  teal: "to-teal-700",
  cyan: "to-cyan-700",
  lightBlue: "to-light-blue-700",
  blue: "to-blue-700",
  indigo: "to-indigo-700",
  deepPurple: "to-deep-purple-700",
  purple: "to-purple-700",
  pink: "to-pink-700",
  red: "to-red-700"
};

function CardHeader(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gradient-to-tr ".concat(fromColors[color], " ").concat(toColors[color], " -mt-12 rounded-lg text-white px-12 py-8 mb-8 text-center shadow-xl")
  }, children);
}

CardHeader.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired
};