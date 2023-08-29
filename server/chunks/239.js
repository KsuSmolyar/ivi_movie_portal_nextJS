exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 4561:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "adminpanel_wrapper__OW15B",
	"blockTab": "adminpanel_blockTab__qZ637",
	"tab": "adminpanel_tab__eBiTk",
	"tabActive": "adminpanel_tabActive__M5meH",
	"topBorder": "adminpanel_topBorder__p18g9",
	"body": "adminpanel_body__QYmZq"
};


/***/ }),

/***/ 239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4561);
/* harmony import */ var _adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MovieChange_MovieChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3217);
/* harmony import */ var _GenreChange_GenreChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MovieChange_MovieChange__WEBPACK_IMPORTED_MODULE_3__]);
_MovieChange_MovieChange__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function AdminPanel() {
    const [activ, setActiv] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Movie");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().blockTab),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().tab), activ === "Movie" && (_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabActive)),
                            onClick: ()=>setActiv("Movie"),
                            children: "Фильм"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().tab), activ === "Genre" && (_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabActive)),
                            onClick: ()=>setActiv("Genre"),
                            children: "Жанр"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().topBorder)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_adminpanel_module_css__WEBPACK_IMPORTED_MODULE_5___default().body),
                    children: [
                        activ === "Movie" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MovieChange_MovieChange__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                        activ === "Genre" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GenreChange_GenreChange__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;