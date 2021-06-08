"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardHeader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fromColors = {
  blueGray: 'from-blue-gray-500',
  gray: 'from-gray-500',
  brown: 'from-brown-500',
  deepOrange: 'from-deep-orange-500',
  orange: 'from-orange-500',
  amber: 'from-amber-500',
  yellow: 'from-yellow-600',
  lime: 'from-lime-500',
  lightGreen: 'from-light-green-500',
  green: 'from-green-500',
  teal: 'from-teal-500',
  cyan: 'from-cyan-500',
  lightBlue: 'from-light-blue-500',
  blue: 'from-blue-500',
  indigo: 'from-indigo-500',
  deepPurple: 'from-deep-purple-500',
  purple: 'from-purple-500',
  pink: 'from-pink-500',
  red: 'from-red-500'
};
var toColors = {
  blueGray: 'to-blue-gray-700',
  gray: 'to-gray-700',
  brown: 'to-brown-700',
  deepOrange: 'to-deep-orange-700',
  orange: 'to-orange-700',
  amber: 'to-amber-700',
  yellow: 'to-yellow-800',
  lime: 'to-lime-700',
  lightGreen: 'to-light-green-700',
  green: 'to-green-700',
  teal: 'to-teal-700',
  cyan: 'to-cyan-700',
  lightBlue: 'to-light-blue-700',
  blue: 'to-blue-700',
  indigo: 'to-indigo-700',
  deepPurple: 'to-deep-purple-700',
  purple: 'to-purple-700',
  pink: 'to-pink-700',
  red: 'to-red-700'
};
var shadowColors = {
  blueGray: 'shadow-lg-blue-gray',
  gray: 'shadow-lg-gray',
  brown: 'shadow-lg-brown',
  deepOrange: 'shadow-lg-deep-orange',
  orange: 'shadow-lg-orange',
  amber: 'shadow-lg-amber',
  yellow: 'shadow-lg-yellow',
  lime: 'shadow-lg-lime',
  lightGreen: 'shadow-lg-light-green',
  green: 'shadow-lg-green',
  teal: 'shadow-lg-teal',
  cyan: 'shadow-lg-cyan',
  lightBlue: 'shadow-lg-light-blue',
  blue: 'shadow-lg-blue',
  indigo: 'shadow-lg-indigo',
  deepPurple: 'shadow-lg-deep-purple',
  purple: 'shadow-lg-purple',
  pink: 'shadow-lg-pink',
  red: 'shadow-lg-red'
};
var positions = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center'
};

function CardHeader(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      contentPosition = _ref.contentPosition,
      iconOnly = _ref.iconOnly,
      className = _ref.className;
  var headerSize = [];
  var smallHeader = [iconOnly ? 'w-20' : 'w-full', 'h-20', 'py-4', iconOnly ? 'px-4' : 'px-8', positions[contentPosition]];
  var regularHeader = [iconOnly ? 'w-24' : 'w-full', 'h-24', 'py-4', iconOnly ? 'px-4' : 'px-8', positions[contentPosition]];
  var largeHeader = [iconOnly ? 'w-28' : 'w-full', 'h-28', 'py-4', iconOnly ? 'px-4' : 'px-8', positions[contentPosition]];

  if (size === 'sm') {
    var _headerSize;

    (_headerSize = headerSize).push.apply(_headerSize, smallHeader);
  } else if (size === 'lg') {
    var _headerSize2;

    (_headerSize2 = headerSize).push.apply(_headerSize2, largeHeader);
  } else {
    var _headerSize3;

    (_headerSize3 = headerSize).push.apply(_headerSize3, regularHeader);
  }

  headerSize = headerSize.join(' ');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gradient-to-tr ".concat(fromColors[color], " ").concat(toColors[color], " -mt-10 mb-4 rounded-xl text-white grid items-center ").concat(headerSize, " ").concat(shadowColors[color], " ").concat(className)
  }, children);
}

CardHeader.defaultProps = {
  color: 'lightBlue',
  size: 'regular',
  contentPosition: 'center',
  iconOnly: false
};
CardHeader.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired,
  contentPosition: _propTypes["default"].string.isRequired,
  iconOnly: _propTypes["default"].bool.isRequired
};