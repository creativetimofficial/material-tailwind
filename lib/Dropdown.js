"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dropdown;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialRippleEffects = _interopRequireDefault(require("material-ripple-effects"));

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var filledBgColors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-600',
  lime: 'bg-lime-500',
  lightGreen: 'bg-light-green-500',
  green: 'bg-green-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  lightBlue: 'bg-light-blue-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  deepPurple: 'bg-deep-purple-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500'
};
var filledBgHoverColors = {
  blueGray: 'hover:bg-blue-gray-700',
  gray: 'hover:bg-gray-700',
  brown: 'hover:bg-brown-700',
  deepOrange: 'hover:bg-deep-orange-700',
  orange: 'hover:bg-orange-700',
  amber: 'hover:bg-amber-700',
  yellow: 'hover:bg-yellow-700',
  lime: 'hover:bg-lime-700',
  lightGreen: 'hover:bg-light-green-700',
  green: 'hover:bg-green-700',
  teal: 'hover:bg-teal-700',
  cyan: 'hover:bg-cyan-700',
  lightBlue: 'hover:bg-light-blue-700',
  blue: 'hover:bg-blue-700',
  indigo: 'hover:bg-indigo-700',
  deepPurple: 'hover:bg-deep-purple-700',
  purple: 'hover:bg-purple-700',
  pink: 'hover:bg-pink-700',
  red: 'hover:bg-red-700'
};
var filledBgFocusColors = {
  blueGray: 'focus:bg-blue-gray-400',
  gray: 'focus:bg-gray-400',
  brown: 'focus:bg-brown-400',
  deepOrange: 'focus:bg-deep-orange-400',
  orange: 'focus:bg-orange-400',
  amber: 'focus:bg-amber-400',
  yellow: 'focus:bg-yellow-500',
  lime: 'focus:bg-lime-400',
  lightGreen: 'focus:bg-light-green-400',
  green: 'focus:bg-green-400',
  teal: 'focus:bg-teal-400',
  cyan: 'focus:bg-cyan-400',
  lightBlue: 'focus:bg-light-blue-400',
  blue: 'focus:bg-blue-400',
  indigo: 'focus:bg-indigo-400',
  deepPurple: 'focus:bg-deep-purple-400',
  purple: 'focus:bg-purple-400',
  pink: 'focus:bg-pink-400',
  red: 'focus:bg-red-400'
};
var filledBgActiveColors = {
  blueGray: 'active:bg-blue-gray-800',
  gray: 'active:bg-gray-800',
  brown: 'active:bg-brown-800',
  deepOrange: 'active:bg-deep-orange-800',
  orange: 'active:bg-orange-800',
  amber: 'active:bg-amber-800',
  yellow: 'active:bg-yellow-800',
  lime: 'active:bg-lime-800',
  lightGreen: 'active:bg-light-green-800',
  green: 'active:bg-green-800',
  teal: 'active:bg-teal-800',
  cyan: 'active:bg-cyan-800',
  lightBlue: 'active:bg-light-blue-800',
  blue: 'active:bg-blue-800',
  indigo: 'active:bg-indigo-800',
  deepPurple: 'active:bg-deep-purple-800',
  purple: 'active:bg-purple-800',
  pink: 'active:bg-pink-800',
  red: 'active:bg-red-800'
};
var filledShadowColors = {
  blueGray: 'shadow-md-blue-gray',
  gray: 'shadow-md-gray',
  brown: 'shadow-md-brown',
  deepOrange: 'shadow-md-deep-orange',
  orange: 'shadow-md-orange',
  amber: 'shadow-md-amber',
  yellow: 'shadow-md-yellow',
  lime: 'shadow-md-lime',
  lightGreen: 'shadow-md-light-green',
  green: 'shadow-md-green',
  teal: 'shadow-md-teal',
  cyan: 'shadow-md-cyan',
  lightBlue: 'shadow-md-light-blue',
  blue: 'shadow-md-blue',
  indigo: 'shadow-md-indigo',
  deepPurple: 'shadow-md-deep-purple',
  purple: 'shadow-md-purple',
  pink: 'shadow-md-pink',
  red: 'shadow-md-red'
};
var filledShadowHoverColors = {
  blueGray: 'hover:shadow-lg-blue-gray',
  gray: 'hover:shadow-lg-gray',
  brown: 'hover:shadow-lg-brown',
  deepOrange: 'hover:shadow-lg-deep-orange',
  orange: 'hover:shadow-lg-orange',
  amber: 'hover:shadow-lg-amber',
  yellow: 'hover:shadow-lg-yellow',
  lime: 'hover:shadow-lg-lime',
  lightGreen: 'hover:shadow-lg-light-green',
  green: 'hover:shadow-lg-green',
  teal: 'hover:shadow-lg-teal',
  cyan: 'hover:shadow-lg-cyan',
  lightBlue: 'hover:shadow-lg-light-blue',
  blue: 'hover:shadow-lg-blue',
  indigo: 'hover:shadow-lg-indigo',
  deepPurple: 'hover:shadow-lg-deep-purple',
  purple: 'hover:shadow-lg-purple',
  pink: 'hover:shadow-lg-pink',
  red: 'hover:shadow-lg-red'
};
var outlineTextColors = {
  blueGray: 'text-blue-gray-500',
  gray: 'text-gray-500',
  brown: 'text-brown-500',
  deepOrange: 'text-deep-orange-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-600',
  lime: 'text-lime-500',
  lightGreen: 'text-light-green-500',
  green: 'text-green-500',
  teal: 'text-teal-500',
  cyan: 'text-cyan-500',
  lightBlue: 'text-light-blue-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  deepPurple: 'text-deep-purple-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
  red: 'text-red-500'
};
var outlineBorderColors = {
  blueGray: 'border-blue-gray-500',
  gray: 'border-gray-500',
  brown: 'border-brown-500',
  deepOrange: 'border-deep-orange-500',
  orange: 'border-orange-500',
  amber: 'border-amber-500',
  yellow: 'border-yellow-600',
  lime: 'border-lime-500',
  lightGreen: 'border-light-green-500',
  green: 'border-green-500',
  teal: 'border-teal-500',
  cyan: 'border-cyan-500',
  lightBlue: 'border-light-blue-500',
  blue: 'border-blue-500',
  indigo: 'border-indigo-500',
  deepPurple: 'border-deep-purple-500',
  purple: 'border-purple-500',
  pink: 'border-pink-500',
  red: 'border-red-500'
};
var outlineBgHoverColors = {
  blueGray: 'hover:bg-blue-gray-50',
  gray: 'hover:bg-gray-50',
  brown: 'hover:bg-brown-50',
  deepOrange: 'hover:bg-deep-orange-50',
  orange: 'hover:bg-orange-50',
  amber: 'hover:bg-amber-50',
  yellow: 'hover:bg-yellow-50',
  lime: 'hover:bg-lime-50',
  lightGreen: 'hover:bg-light-green-50',
  green: 'hover:bg-green-50',
  teal: 'hover:bg-teal-50',
  cyan: 'hover:bg-cyan-50',
  lightBlue: 'hover:bg-light-blue-50',
  blue: 'hover:bg-blue-50',
  indigo: 'hover:bg-indigo-50',
  deepPurple: 'hover:bg-deep-purple-50',
  purple: 'hover:bg-purple-50',
  pink: 'hover:bg-pink-50',
  red: 'hover:bg-red-50'
};
var outlineBorderHoverColors = {
  blueGray: 'border:border-blue-gray-700',
  gray: 'border:border-gray-700',
  brown: 'border:border-brown-700',
  deepOrange: 'border:border-deep-orange-700',
  orange: 'border:border-orange-700',
  amber: 'border:border-amber-700',
  yellow: 'border:border-yellow-700',
  lime: 'border:border-lime-700',
  lightGreen: 'border:border-light-green-700',
  green: 'border:border-green-700',
  teal: 'border:border-teal-700',
  cyan: 'border:border-cyan-700',
  lightBlue: 'border:border-light-blue-700',
  blue: 'border:border-blue-700',
  indigo: 'border:border-indigo-700',
  deepPurple: 'border:border-deep-purple-700',
  purple: 'border:border-purple-700',
  pink: 'border:border-pink-700',
  red: 'border:border-red-700'
};
var outlineTextHoverColors = {
  blueGray: 'hover:text-blue-gray-700',
  gray: 'hover:text-gray-700',
  brown: 'hover:text-brown-700',
  deepOrange: 'hover:text-deep-orange-700',
  orange: 'hover:text-orange-700',
  amber: 'hover:text-amber-700',
  yellow: 'hover:text-yellow-700',
  lime: 'hover:text-lime-700',
  lightGreen: 'hover:text-light-green-700',
  green: 'hover:text-green-700',
  teal: 'hover:text-teal-700',
  cyan: 'hover:text-cyan-700',
  lightBlue: 'hover:text-light-blue-700',
  blue: 'hover:text-blue-700',
  indigo: 'hover:text-indigo-700',
  deepPurple: 'hover:text-deep-purple-700',
  purple: 'hover:text-purple-700',
  pink: 'hover:text-pink-700',
  red: 'hover:text-red-700'
};
var outlineBgActiveColors = {
  blueGray: 'active:bg-blue-gray-100',
  gray: 'active:bg-gray-100',
  brown: 'active:bg-brown-100',
  deepOrange: 'active:bg-deep-orange-100',
  orange: 'active:bg-orange-100',
  amber: 'active:bg-amber-100',
  yellow: 'active:bg-yellow-100',
  lime: 'active:bg-lime-100',
  lightGreen: 'active:bg-light-green-100',
  green: 'active:bg-green-100',
  teal: 'active:bg-teal-100',
  cyan: 'active:bg-cyan-100',
  lightBlue: 'active:bg-light-blue-100',
  blue: 'active:bg-blue-100',
  indigo: 'active:bg-indigo-100',
  deepPurple: 'active:bg-deep-purple-100',
  purple: 'active:bg-purple-100',
  pink: 'active:bg-pink-100',
  red: 'active:bg-red-100'
};

function Dropdown(_ref) {
  var children = _ref.children,
      buttonText = _ref.buttonText,
      color = _ref.color,
      buttonType = _ref.buttonType,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      rounded = _ref.rounded,
      block = _ref.block,
      ripple = _ref.ripple,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "buttonText", "color", "buttonType", "size", "placement", "rounded", "block", "ripple", "className"]);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dropdownShow = _React$useState2[0],
      setDropdownShow = _React$useState2[1];

  var rippleEffect = new _materialRippleEffects["default"](); // Styles

  var classes = [];
  rounded = rounded ? 'rounded-full' : 'rounded';
  var sharedClasses = [block && 'w-full', 'flex', 'items-center', 'justify-center', 'gap-1', 'rounded-lg', 'font-bold', 'outline-none', 'capitalize', 'tracking-wider', 'focus:outline-none', 'transition-all', 'duration-300', rounded];
  var buttonFilled = ['text-white', filledBgColors[color], filledBgHoverColors[color], filledBgFocusColors[color], filledBgActiveColors[color], filledShadowColors[color], filledShadowHoverColors[color]];
  var buttonOutline = ['bg-transparent', 'border', 'border-solid', 'shadow-none', outlineTextColors[color], outlineBorderColors[color], outlineBgHoverColors[color], outlineBorderHoverColors[color], outlineTextHoverColors[color], outlineBgHoverColors[color], outlineBgActiveColors[color]];
  var buttonLink = ["bg-transparent", outlineTextColors[color], outlineBgHoverColors[color], outlineTextHoverColors[color], outlineBgHoverColors[color], outlineBgActiveColors[color]];
  var buttonSM = [].concat(sharedClasses, ['py-1.5 pl-5 pr-3', 'text-sm', 'leading-normal']);
  var buttonRegular = [].concat(sharedClasses, ['p-2.5 pl-7 pr-5', 'text-sm', 'leading-normal']);
  var buttonLG = [].concat(sharedClasses, ['py-3 pl-8 pr-6', 'text-base', 'leading-relaxed']);

  if (size === 'sm') {
    var _classes;

    (_classes = classes).push.apply(_classes, _toConsumableArray(buttonSM));
  } else if (size === 'lg') {
    var _classes2;

    (_classes2 = classes).push.apply(_classes2, _toConsumableArray(buttonLG));
  } else {
    var _classes3;

    (_classes3 = classes).push.apply(_classes3, _toConsumableArray(buttonRegular));
  }

  if (buttonType === 'outline') {
    var _classes4;

    (_classes4 = classes).push.apply(_classes4, buttonOutline);
  } else if (buttonType === 'link') {
    var _classes5;

    (_classes5 = classes).push.apply(_classes5, buttonLink);
  } else {
    var _classes6;

    (_classes6 = classes).push.apply(_classes6, buttonFilled);
  }

  classes = classes.join(' ');
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_react2["default"], {
    content: /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 p-2 overflow-hidden transition-all duration-500",
      style: {
        minWidth: '10rem'
      }
    }, children),
    animation: "scale",
    trigger: "click",
    offset: [0, 0],
    placement: placement,
    interactive: true
  }, /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    className: "".concat(classes, " ").concat(className),
    type: "button",
    onClick: function onClick() {
      return setDropdownShow(!dropdownShow);
    },
    onMouseUp: function onMouseUp(e) {
      ripple === 'dark' && rippleEffect.create(e, 'dark');
      ripple === 'light' && rippleEffect.create(e, 'light');
    }
  }), buttonText, /*#__PURE__*/_react["default"].createElement("span", {
    className: "material-icons text-lg leading-none align-middle"
  }, dropdownShow ? 'arrow_drop_up' : 'arrow_drop_down'))));
}

Dropdown.defaultProps = {
  color: 'lightBlue',
  buttonType: 'filled',
  size: 'regular',
  placement: 'bottom-start',
  rounded: false,
  block: false
};
Dropdown.propTypes = {
  children: _propTypes["default"].node.isRequired,
  buttonText: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired,
  buttonType: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].string.isRequired,
  placement: _propTypes["default"].string.isRequired,
  rounded: _propTypes["default"].bool.isRequired,
  block: _propTypes["default"].bool.isRequired,
  ripple: _propTypes["default"].string
};