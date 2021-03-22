"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputIcon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mdInputColors = {
  blueGray: 'md-input-blue-gray-500',
  gray: 'md-input-gray-500',
  brown: 'md-input-brown-500',
  deepOrange: 'md-input-deep-orange-500',
  orange: 'md-input-orange-500',
  amber: 'md-input-amber-500',
  yellow: 'md-input-yellow-600',
  lime: 'md-input-lime-500',
  lightGreen: 'md-input-light-green-500',
  green: 'md-input-green-500',
  teal: 'md-input-teal-500',
  cyan: 'md-input-cyan-500',
  lightBlue: 'md-input-light-blue-500',
  blue: 'md-input-blue-500',
  indigo: 'md-input-indigo-500',
  deepPurple: 'md-input-deep-purple-500',
  purple: 'md-input-purple-500',
  pink: 'md-input-pink-500',
  red: 'md-input-red-500'
};
var mdInputOutlineColors = {
  blueGray: 'md-input-outline-blue-gray-500',
  gray: 'md-input-outline-gray-500',
  brown: 'md-input-outline-brown-500',
  deepOrange: 'md-input-outline-deep-orange-500',
  orange: 'md-input-outline-orange-500',
  amber: 'md-input-outline-amber-500',
  yellow: 'md-input-outline-yellow-600',
  lime: 'md-input-outline-lime-500',
  lightGreen: 'md-input-outline-light-green-500',
  green: 'md-input-outline-green-500',
  teal: 'md-input-outline-teal-500',
  cyan: 'md-input-outline-cyan-500',
  lightBlue: 'md-input-outline-light-blue-500',
  blue: 'md-input-outline-blue-500',
  indigo: 'md-input-outline-indigo-500',
  deepPurple: 'md-input-outline-deep-purple-500',
  purple: 'md-input-outline-purple-500',
  pink: 'md-input-outline-pink-500',
  red: 'md-input-outline-red-500'
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

function InputIcon(_ref) {
  var _inputClasses4, _inputClasses5;

  var placeholder = _ref.placeholder,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      outline = _ref.outline,
      error = _ref.error,
      success = _ref.success,
      _ref$iconFamily = _ref.iconFamily,
      iconFamily = _ref$iconFamily === void 0 ? 'material-icons' : _ref$iconFamily,
      iconName = _ref.iconName,
      rest = _objectWithoutProperties(_ref, ["placeholder", "color", "size", "outline", "error", "success", "iconFamily", "iconName"]);

  var iconUI,
      iconSize,
      labelBorderColor,
      mdInputBorderColor,
      mdInputOutlineColor,
      mdInputOutlineFocusColor,
      inputClasses = [];
  var container = ['w-full', 'relative'];

  if (error) {
    labelBorderColor = borderColors['red'];
    mdInputBorderColor = mdInputColors['red'];
    mdInputOutlineColor = mdInputOutlineColors['red'];
    mdInputOutlineFocusColor = borderColors['red'];
  } else if (success) {
    labelBorderColor = borderColors['green'];
    mdInputBorderColor = mdInputColors['green'];
    mdInputOutlineColor = mdInputOutlineColors['green'];
    mdInputOutlineFocusColor = borderColors['green'];
  } else {
    labelBorderColor = 'border-gray-300';
    mdInputBorderColor = mdInputColors[color];
    mdInputOutlineColor = mdInputOutlineColors[color];
    mdInputOutlineFocusColor = borderColors[color];
  }

  var label = ['text-gray-500', 'absolute', 'left-0', "".concat(outline ? '-top-1.5' : '-top-0.5'), 'w-full', 'h-full', labelBorderColor, 'pointer-events-none', "".concat(!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'), "".concat(outline && 'flex'), "".concat(outline && size === 'sm' && 'text-sm'), "".concat(outline && 'leading-10'), "".concat(outline && 'transition-all'), "".concat(outline && 'duration-300')];
  var sharedClasses = ['w-full', 'h-full', 'leading-normal', 'shadow-none', 'outline-none', 'focus:outline-none', 'focus:ring-0'];
  var inputSM = [].concat(sharedClasses, ["".concat(outline ? 'pl-2 pr-7' : 'pl-0 pr-6'), "".concat(outline && 'pt-1.5 pb-0.5'), 'text-sm']);
  var inputRegular = [].concat(sharedClasses, ["".concat(outline ? 'pl-3 pr-9' : 'pl-0 pr-7'), "".concat(outline && 'pt-2.5 pb-1.5')]);
  var inputLG = [].concat(sharedClasses, ["".concat(outline ? 'pl-3 pr-9' : 'pl-0 pr-7'), "".concat(outline && 'pt-3.5 pb-2.5')]);
  var inputFilled = [mdInputBorderColor, 'md-input', 'bg-transparent', 'border', 'border-none'];
  var inputOutline = [mdInputOutlineColor, labelBorderColor, 'md-input-outline', 'bg-transparent', 'border', 'border-1', 'border-gray-300', 'rounded-lg', 'focus:border-2', "focus:".concat(mdInputOutlineFocusColor)];

  if (size === 'sm') {
    var _inputClasses;

    container.push('h-9');

    (_inputClasses = inputClasses).push.apply(_inputClasses, _toConsumableArray(inputSM));

    iconSize = 'text-lg';
  } else if (size === 'lg') {
    var _inputClasses2;

    container.push('h-12');

    (_inputClasses2 = inputClasses).push.apply(_inputClasses2, _toConsumableArray(inputLG));

    iconSize = 'text-xl';
  } else {
    var _inputClasses3;

    container.push('h-11');

    (_inputClasses3 = inputClasses).push.apply(_inputClasses3, _toConsumableArray(inputRegular));

    iconSize = 'text-2xl';
  }

  outline ? (_inputClasses4 = inputClasses).push.apply(_inputClasses4, inputOutline) : (_inputClasses5 = inputClasses).push.apply(_inputClasses5, inputFilled);
  container = container.join(' ');
  label = label.join(' ');
  inputClasses = inputClasses.join(' ');

  if (iconFamily === 'material-icons') {
    iconUI = /*#__PURE__*/_react.default.createElement("span", _extends({}, rest, {
      className: "".concat(iconFamily, " p-0 text-gray-600 border-none absolute top-1/2 ").concat(outline ? size === 'sm' ? 'right-2' : 'right-3' : 'right-0', " transform -translate-y-1/2 ").concat(iconSize)
    }), iconName);
  } else if (iconFamily === 'font-awesome') {
    iconUI = /*#__PURE__*/_react.default.createElement("i", _extends({}, rest, {
      className: "fas ".concat(iconName, " text-gray-600 border-none absolute top-1/2 ").concat(outline ? size === 'sm' ? 'right-2' : 'right-3' : 'right-0', " transform -translate-y-1/2 ").concat(iconSize)
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: container
  }, iconUI, /*#__PURE__*/_react.default.createElement("input", _extends({}, rest, {
    placeholder: " ",
    className: inputClasses
  })), /*#__PURE__*/_react.default.createElement("label", {
    className: label
  }, outline ? placeholder : /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(size === 'sm' && 'text-sm', " absolute top-1/4 transition-all duration-300")
  }, placeholder)), error && /*#__PURE__*/_react.default.createElement("span", {
    className: "block mt-1 text-xs text-red-500"
  }, error));
}

InputIcon.propTypes = {
  placeholder: _propTypes.default.string.isRequired,
  color: _propTypes.default.string.isRequired,
  size: _propTypes.default.string,
  outline: _propTypes.default.bool,
  error: _propTypes.default.string,
  iconFamily: _propTypes.default.string,
  iconName: _propTypes.default.string.isRequired
};