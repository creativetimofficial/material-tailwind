"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Modal(_ref) {
  var children = _ref.children,
      size = _ref.size,
      active = _ref.active,
      toggler = _ref.toggler;
  var modalSize;

  if (size === 'sm') {
    modalSize = 'max-w-sm';
  } else if (size === 'lg') {
    modalSize = 'max-w-6xl';
  } else {
    modalSize = 'max-w-3xl';
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none', " grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500"),
    onClick: toggler
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "transform ".concat(active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10', " w-auto my-6 mx-auto ").concat(modalSize, " transition-all duration-500")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-0 p-6 ".concat(size === 'lg' ? 'rounded-xl shadow-xl' : 'rounded-lg shadow-lg', " flex flex-col w-full bg-white outline-none focus:outline-none"),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, children))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(active ? 'opacity-25 pointer-events-auto' : 'opacity-0 pointer-events-none', " fixed inset-0 z-40 bg-black transition-all duration-500")
  }));
}

Modal.defaultProps = {
  size: 'regular'
};
Modal.propTypes = {
  children: _propTypes["default"].node.isRequired,
  size: _propTypes["default"].string.isRequired,
  active: _propTypes["default"].bool.isRequired,
  toggler: _propTypes["default"].func.isRequired
};