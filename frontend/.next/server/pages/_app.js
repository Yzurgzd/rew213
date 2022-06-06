(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/assets/css/style.css */ "./public/assets/css/style.css");
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_css_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/css/base.css */ "./public/assets/css/base.css");
/* harmony import */ var _public_assets_css_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-progressbar */ "nextjs-progressbar");
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert-template-basic */ "react-alert-template-basic");
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alert_template_basic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\coding\\Django\\2022\\diplom\\site\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const options = {
    position: react_alert__WEBPACK_IMPORTED_MODULE_3__.positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: react_alert__WEBPACK_IMPORTED_MODULE_3__.transitions.SCALE
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_alert__WEBPACK_IMPORTED_MODULE_3__.Provider, _objectSpread(_objectSpread({
    template: (react_alert_template_basic__WEBPACK_IMPORTED_MODULE_4___default())
  }, options), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {
      color: "#d93a37"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./public/assets/css/base.css":
/*!************************************!*\
  !*** ./public/assets/css/base.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/css/style.css":
/*!*************************************!*\
  !*** ./public/assets/css/style.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react-alert":
/*!******************************!*\
  !*** external "react-alert" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-alert");

/***/ }),

/***/ "react-alert-template-basic":
/*!*********************************************!*\
  !*** external "react-alert-template-basic" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-alert-template-basic");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU00sS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxJQUFBQSxRQUFRLEVBQUVSLGdFQURJO0FBRWRVLElBQUFBLE9BQU8sRUFBRSxJQUZLO0FBR2RDLElBQUFBLE1BQU0sRUFBRSxNQUhNO0FBSWRDLElBQUFBLFVBQVUsRUFBRWIsMERBQWlCYztBQUpmLEdBQWhCO0FBT0Esc0JBQ0UsOERBQUMsaURBQUQ7QUFBZSxZQUFRLEVBQUVWLG1FQUFhQTtBQUF0QyxLQUE0Q0ksT0FBNUM7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFlLFdBQUssRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcHVibGljL2Fzc2V0cy9jc3MvYmFzZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wdWJsaWMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWFsZXJ0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1hbGVydC10ZW1wbGF0ZS1iYXNpY1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL2Nzcy9iYXNlLmNzc1wiO1xuaW1wb3J0IE5leHROUHJvZ3Jlc3MgZnJvbSBcIm5leHRqcy1wcm9ncmVzc2JhclwiO1xuaW1wb3J0IHsgdHJhbnNpdGlvbnMsIHBvc2l0aW9ucywgUHJvdmlkZXIgYXMgQWxlcnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWFsZXJ0J1xuaW1wb3J0IEFsZXJ0VGVtcGxhdGUgZnJvbSAncmVhY3QtYWxlcnQtdGVtcGxhdGUtYmFzaWMnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMuQk9UVE9NX0NFTlRFUixcbiAgICB0aW1lb3V0OiA1MDAwLFxuICAgIG9mZnNldDogJzMwcHgnLFxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLlNDQUxFXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydFByb3ZpZGVyIHRlbXBsYXRlPXtBbGVydFRlbXBsYXRlfSB7Li4ub3B0aW9uc30+XG4gICAgICA8TmV4dE5Qcm9ncmVzcyBjb2xvcj1cIiNkOTNhMzdcIiAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQWxlcnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWxlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWxlcnQtdGVtcGxhdGUtYmFzaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJOZXh0TlByb2dyZXNzIiwidHJhbnNpdGlvbnMiLCJwb3NpdGlvbnMiLCJQcm92aWRlciIsIkFsZXJ0UHJvdmlkZXIiLCJBbGVydFRlbXBsYXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJvcHRpb25zIiwicG9zaXRpb24iLCJCT1RUT01fQ0VOVEVSIiwidGltZW91dCIsIm9mZnNldCIsInRyYW5zaXRpb24iLCJTQ0FMRSJdLCJzb3VyY2VSb290IjoiIn0=