"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClosingLabel;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var divBgColors = {
  blueGray: 'bg-blue-gray-100',
  gray: 'bg-gray-100',
  brown: 'bg-brown-100',
  deepOrange: 'bg-deep-orange-100',
  orange: 'bg-orange-100',
  amber: 'bg-amber-100',
  yellow: 'bg-yellow-100',
  lime: 'bg-lime-100',
  lightGreen: 'bg-light-green-100',
  green: 'bg-green-100',
  teal: 'bg-teal-100',
  cyan: 'bg-cyan-100',
  lightBlue: 'bg-light-blue-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  deepPurple: 'bg-deep-purple-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
  red: 'bg-red-100'
};
var spanBgColors = {
  blueGray: 'bg-blue-gray-900',
  gray: 'bg-gray-900',
  brown: 'bg-brown-900',
  deepOrange: 'bg-deep-orange-900',
  orange: 'bg-orange-900',
  amber: 'bg-amber-900',
  yellow: 'bg-yellow-900',
  lime: 'bg-lime-900',
  lightGreen: 'bg-light-green-900',
  green: 'bg-green-900',
  teal: 'bg-teal-900',
  cyan: 'bg-cyan-900',
  lightBlue: 'bg-light-blue-900',
  blue: 'bg-blue-900',
  indigo: 'bg-indigo-900',
  deepPurple: 'bg-deep-purple-900',
  purple: 'bg-purple-900',
  pink: 'bg-pink-900',
  red: 'bg-red-900'
};
var textColors = {
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  lightGreen: 'text-light-green-700',
  green: 'text-green-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  lightBlue: 'text-light-blue-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  deepPurple: 'text-deep-purple-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  red: 'text-red-700'
};

function ClosingLabel(_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className;

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showLabel = _React$useState2[0],
      setShowLabel = _React$useState2[1];

  function closeLabel(e) {
    var delay;
    var parentClassName = e.target.parentNode;
    parentClassName.classList.add('opacity-0');
    Array.from(parentClassName.classList).map(function (el) {
      return el.includes('duration') ? delay = el.split('-')[1] : null;
    });
    setTimeout(function () {
      return setShowLabel(false);
    }, delay ? parseInt(delay, 10) + 100 : 250);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showLabel ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-max flex items-center justify-between py-1 pl-3 pr-1 rounded-full ".concat(divBgColors[color], " last:mr-0 mr-1 transition-all duration-300 ").concat(className)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs font-semibold uppercase ".concat(textColors[color], " uppercase mr-2")
  }, children), /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(spanBgColors[color], " text-white text-sm leading-none rounded-full w-4 h-4 cursor-pointer grid place-items-center p-0"),
    onClick: closeLabel
  }, "\xD7")) : null);
}

ClosingLabel.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string.isRequired
};