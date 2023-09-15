"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "../../node_modules/.pnpm/next@13.4.19_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_app.js":
/*!*************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/next@13.4.19_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_app.js ***!
  \*************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return App;\n    }\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react?1189\"));\nconst _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\n/**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ async function appGetInitialProps(param) {\n    let { Component, ctx } = param;\n    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n    return {\n        pageProps\n    };\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component, pageProps } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, pageProps);\n    }\n}\n(()=>{\n    App.origGetInitialProps = appGetInitialProps;\n})();\n(()=>{\n    App.getInitialProps = appGetInitialProps;\n})();\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTMuNC4xOV9iaXFiYWJvcGxmYnJldHRkNzY1NWZyNG4yeS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPO0FBQ1gsQ0FBQyxFQUFDO0FBQ0ZILDJDQUEwQztJQUN0Q0ksWUFBWTtJQUNaQyxLQUFLO1FBQ0QsT0FBT0M7SUFDWDtBQUNKLENBQUMsRUFBQztBQUNGLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsdUpBQXlDO0FBQ2xGLE1BQU1DLFNBQVMsV0FBVyxHQUFHRix5QkFBeUJHLENBQUMsQ0FBQ0YsbUJBQU9BLENBQUMseUJBQU87QUFDdkUsTUFBTUcsU0FBU0gsbUJBQU9BLENBQUMsZ0RBQXFCO0FBQzVDOzs7Q0FHQyxHQUFHLGVBQWVJLG1CQUFtQkMsS0FBSztJQUN2QyxJQUFJLEVBQUVDLFNBQVMsRUFBR0MsR0FBRyxFQUFHLEdBQUdGO0lBQzNCLE1BQU1HLFlBQVksTUFBTSxDQUFDLEdBQUdMLE9BQU9NLG1CQUFtQixFQUFFSCxXQUFXQztJQUNuRSxPQUFPO1FBQ0hDO0lBQ0o7QUFDSjtBQUNBLE1BQU1WLFlBQVlHLE9BQU9TLE9BQU8sQ0FBQ0osU0FBUztJQUN0Q0ssU0FBUztRQUNMLE1BQU0sRUFBRUwsU0FBUyxFQUFHRSxTQUFTLEVBQUcsR0FBRyxJQUFJLENBQUNJLEtBQUs7UUFDN0MsT0FBTyxXQUFXLEdBQUdYLE9BQU9TLE9BQU8sQ0FBQ0csYUFBYSxDQUFDUCxXQUFXRTtJQUNqRTtBQUNKO0FBQ0M7SUFDR1YsSUFBSWdCLG1CQUFtQixHQUFHVjtBQUM5QjtBQUNDO0lBQ0dOLElBQUlpQixlQUFlLEdBQUdYO0FBQzFCO0FBRUEsSUFBSSxDQUFDLE9BQU9WLFFBQVFnQixPQUFPLEtBQUssY0FBZSxPQUFPaEIsUUFBUWdCLE9BQU8sS0FBSyxZQUFZaEIsUUFBUWdCLE9BQU8sS0FBSyxJQUFJLEtBQU0sT0FBT2hCLFFBQVFnQixPQUFPLENBQUNNLFVBQVUsS0FBSyxhQUFhO0lBQ3JLeEIsT0FBT0MsY0FBYyxDQUFDQyxRQUFRZ0IsT0FBTyxFQUFFLGNBQWM7UUFBRWYsT0FBTztJQUFLO0lBQ25FSCxPQUFPeUIsTUFBTSxDQUFDdkIsUUFBUWdCLE9BQU8sRUFBRWhCO0lBQy9Cd0IsT0FBT3hCLE9BQU8sR0FBR0EsUUFBUWdCLE9BQU87QUFDbEMsRUFFQSxnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRlcmlhbC10YWlsd2luZC8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxMy40LjE5X2JpcWJhYm9wbGZicmV0dGQ3NjU1ZnI0bjJ5L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz9mMWFjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQXBwO1xuICAgIH1cbn0pO1xuY29uc3QgX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9fL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdFwiKTtcbmNvbnN0IF9yZWFjdCA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBhc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMocGFyYW0pIHtcbiAgICBsZXQgeyBDb21wb25lbnQgLCBjdHggIH0gPSBwYXJhbTtcbiAgICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCAoMCwgX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCwgY3R4KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHNcbiAgICB9O1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHBhZ2VQcm9wcyk7XG4gICAgfVxufVxuKCgpPT57XG4gICAgQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG59KSgpO1xuKCgpPT57XG4gICAgQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbn0pKCk7XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIkFwcCIsIl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfIiwiX3V0aWxzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwicGFyYW0iLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJfX2VzTW9kdWxlIiwiYXNzaWduIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/next@13.4.19_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react?1189":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!**************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bzd2MraGVscGVyc0AwLjUuMS9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRlcmlhbC10YWlsd2luZC8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHN3YytoZWxwZXJzQDAuNS4xL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janM/MGQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fID0gZXhwb3J0cy5faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../../node_modules/.pnpm/next@13.4.19_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();