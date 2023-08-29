exports.id = 5963;
exports.ids = [5963];
exports.modules = {

/***/ 4006:
/***/ ((module) => {

// Exports
module.exports = {
	"ldsSpinner": "loader_ldsSpinner__QcLQt"
};


/***/ }),

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 2585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/ui/Loader/loader.module.css
var loader_module = __webpack_require__(4006);
var loader_module_default = /*#__PURE__*/__webpack_require__.n(loader_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/shared/ui/Loader/Loader.tsx




const Loader = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((loader_module_default()).ldsSpinner, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/ui/Loader/index.ts



/***/ })

};
;