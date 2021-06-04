"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Textarea;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mtTextareaColors = {
  blueGray: 'mt-input-blue-gray-500',
  gray: 'mt-input-gray-500',
  brown: 'mt-input-brown-500',
  deepOrange: 'mt-input-deep-orange-500',
  orange: 'mt-input-orange-500',
  amber: 'mt-input-amber-500',
  yellow: 'mt-input-yellow-600',
  lime: 'mt-input-lime-500',
  lightGreen: 'mt-input-light-green-500',
  green: 'mt-input-green-500',
  teal: 'mt-input-teal-500',
  cyan: 'mt-input-cyan-500',
  lightBlue: 'mt-input-light-blue-500',
  blue: 'mt-input-blue-500',
  indigo: 'mt-input-indigo-500',
  deepPurple: 'mt-input-deep-purple-500',
  purple: 'mt-input-purple-500',
  pink: 'mt-input-pink-500',
  red: 'mt-input-red-500'
};
var mtTextareaOutlineColors = {
  blueGray: 'mt-input-outline-blue-gray-500',
  gray: 'mt-input-outline-gray-500',
  brown: 'mt-input-outline-brown-500',
  deepOrange: 'mt-input-outline-deep-orange-500',
  orange: 'mt-input-outline-orange-500',
  amber: 'mt-input-outline-amber-500',
  yellow: 'mt-input-outline-yellow-600',
  lime: 'mt-input-outline-lime-500',
  lightGreen: 'mt-input-outline-light-green-500',
  green: 'mt-input-outline-green-500',
  teal: 'mt-input-outline-teal-500',
  cyan: 'mt-input-outline-cyan-500',
  lightBlue: 'mt-input-outline-light-blue-500',
  blue: 'mt-input-outline-blue-500',
  indigo: 'mt-input-outline-indigo-500',
  deepPurple: 'mt-input-outline-deep-purple-500',
  purple: 'mt-input-outline-purple-500',
  pink: 'mt-input-outline-pink-500',
  red: 'mt-input-outline-red-500'
};
var borderColors = {
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
var focusBorderColors = {
  blueGray: 'focus:border-blue-gray-500',
  gray: 'focus:border-gray-500',
  brown: 'focus:border-brown-500',
  deepOrange: 'focus:border-deep-orange-500',
  orange: 'focus:border-orange-500',
  amber: 'focus:border-amber-500',
  yellow: 'focus:border-yellow-600',
  lime: 'focus:border-lime-500',
  lightGreen: 'focus:border-light-green-500',
  green: 'focus:border-green-500',
  teal: 'focus:border-teal-500',
  cyan: 'focus:border-cyan-500',
  lightBlue: 'focus:border-light-blue-500',
  blue: 'focus:border-blue-500',
  indigo: 'focus:border-indigo-500',
  deepPurple: 'focus:border-deep-purple-500',
  purple: 'focus:border-purple-500',
  pink: 'focus:border-pink-500',
  red: 'focus:border-red-500'
};

function Textarea(_ref) {
  var _textareaClasses3, _textareaClasses4;

  var placeholder = _ref.placeholder,
      color = _ref.color,
      size = _ref.size,
      outline = _ref.outline,
      error = _ref.error,
      success = _ref.success,
      rest = _objectWithoutProperties(_ref, ["placeholder", "color", "size", "outline", "error", "success"]);

  var labelBorderColor,
      mtTextareaBorderColor,
      mtTextareaOutlineColor,
      mtTextareaOutlineFocusColor,
      textareaClasses = [];
  var container = ['w-full', 'h-auto', 'relative'];

  if (error) {
    labelBorderColor = borderColors['red'];
    mtTextareaBorderColor = mtTextareaColors['red'];
    mtTextareaOutlineColor = mtTextareaOutlineColors['red'];
    mtTextareaOutlineFocusColor = borderColors['red'];
  } else if (success) {
    labelBorderColor = borderColors['green'];
    mtTextareaBorderColor = mtTextareaColors['green'];
    mtTextareaOutlineColor = mtTextareaOutlineColors['green'];
    mtTextareaOutlineFocusColor = borderColors['green'];
  } else {
    labelBorderColor = 'border-gray-300';
    mtTextareaBorderColor = mtTextareaColors[color];
    mtTextareaOutlineColor = mtTextareaOutlineColors[color];
    mtTextareaOutlineFocusColor = borderColors[color];
  }

  var label = ['text-gray-400', 'absolute', 'left-0', "".concat(outline ? '-top-1.5' : '-top-0.5'), 'w-full', 'h-full', "".concat(!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'), labelBorderColor, 'pointer-events-none', "".concat(outline && 'flex'), "".concat(outline && size === 'sm' && 'text-sm'), "".concat(outline && 'leading-10'), "".concat(outline && 'transition-all'), "".concat(outline && 'duration-300')];
  var sharedClasses = ['w-full', 'h-full', 'text-gray-800', 'leading-normal', 'shadow-none', 'outline-none', 'resize-none', 'focus:outline-none', 'focus:ring-0', 'focus:text-gray-800'];
  var textareaSM = [].concat(sharedClasses, ["".concat(outline ? 'px-3' : 'px-0'), "".concat(outline && 'pt-1.5 pb-0.5'), 'text-sm']);
  var textareaRegular = [].concat(sharedClasses, ["".concat(outline ? 'px-3' : 'px-0'), "".concat(outline && 'pt-2.5 pb-1.5')]);
  var textareaFilled = [mtTextareaBorderColor, 'mt-input', 'texterea', 'bg-transparent', 'border-none'];
  var textareaOutline = [mtTextareaOutlineColor, labelBorderColor, 'mt-input-outline', 'bg-transparent', 'border', 'border-1', 'border-gray-300', 'rounded-lg', 'focus:border-2'];

  if (size === 'sm') {
    var _textareaClasses;

    (_textareaClasses = textareaClasses).push.apply(_textareaClasses, _toConsumableArray(textareaSM));
  } else {
    var _textareaClasses2;

    (_textareaClasses2 = textareaClasses).push.apply(_textareaClasses2, _toConsumableArray(textareaRegular));
  }

  outline ? (_textareaClasses3 = textareaClasses).push.apply(_textareaClasses3, textareaOutline) : (_textareaClasses4 = textareaClasses).push.apply(_textareaClasses4, textareaFilled);
  container = container.join(' ');
  label = label.join(' ');
  textareaClasses = textareaClasses.join(' ');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: container
  }, /*#__PURE__*/_react["default"].createElement("textarea", _extends({}, rest, {
    placeholder: " ",
    className: "\n                    ".concat(textareaClasses, "\n                    ").concat(error && outline && 'mt-input-outline-error', "\n                    ").concat(success && outline && 'mt-input-outline-success'),
    rows: "7"
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: label
  }, outline ? placeholder : /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(size === 'sm' && 'text-sm', " absolute top-0 transition-all duration-300")
  }, placeholder)), error && /*#__PURE__*/_react["default"].createElement("span", {
    className: "block absolute ".concat(outline ? '-bottom-4' : '-bottom-5', " text-xs text-red-500")
  }, error), success && /*#__PURE__*/_react["default"].createElement("span", {
    className: "block absolute ".concat(outline ? '-bottom-4' : '-bottom-5', " text-xs text-green-500")
  }, success));
}

Textarea.defaultProps = {
  color: 'lightBlue',
  size: 'regular',
  outline: false
};
Textarea.propTypes = {
  placeholder: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].string.isRequired,
  outline: _propTypes["default"].bool.isRequired,
  error: _propTypes["default"].string,
  success: _propTypes["default"].string
};