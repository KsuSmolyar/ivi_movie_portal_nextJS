exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 3572:
/***/ ((module) => {

// Exports
module.exports = {
	"blocCommentMain": "moviereviews_blocCommentMain__4enl2",
	"right": "moviereviews_right__xRqBc"
};


/***/ }),

/***/ 340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieReviews)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _moviereviews_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3572);
/* harmony import */ var _moviereviews_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_moviereviews_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var entities_ListComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8384);
/* harmony import */ var entities_GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5349);
/* harmony import */ var app_store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3827);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_ListComments__WEBPACK_IMPORTED_MODULE_2__, entities_GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_3__]);
([entities_ListComments__WEBPACK_IMPORTED_MODULE_2__, entities_GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MovieReviews() {
    const comments = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.filmComents.comments);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_moviereviews_module_css__WEBPACK_IMPORTED_MODULE_6___default().blocCommentMain), "container"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_ListComments__WEBPACK_IMPORTED_MODULE_2__/* .ListComments */ .e, {
                all: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: (_moviereviews_module_css__WEBPACK_IMPORTED_MODULE_6___default().right),
                comments: comments
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;