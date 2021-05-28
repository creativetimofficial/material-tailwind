"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClosingAlert;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colors = {
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

function ClosingAlert(_ref) {
  var children = _ref.children,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["children", "color"]);

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showAlert = _React$useState2[0],
      setShowAlert = _React$useState2[1];

  var closeAlert = function closeAlert(e) {
    var delay;
    var parentClassName = e.target.parentNode.parentNode;
    parentClassName.classList.add('opacity-0');
    Array.from(parentClassName.classList).map(function (el) {
      return el.includes('duration') ? delay = el.split('-')[1] : null;
    });
    setTimeout(function () {
      return setShowAlert(false);
    }, delay ? parseInt(delay, 10) + 100 : 250);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showAlert ? /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: "flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 ".concat(colors[color], " transition-all duration-300")
  }), children, /*#__PURE__*/_react["default"].createElement("button", {
    className: "absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none",
    onClick: closeAlert
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "leading-none text-4xl"
  }, "\xD7"))) : null);
}

ClosingAlert.defaultProps = {
  color: 'lightBlue'
};
ClosingAlert.propTypes = {
  color: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired
};