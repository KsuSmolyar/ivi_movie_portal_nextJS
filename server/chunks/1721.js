exports.id = 1721;
exports.ids = [1721];
exports.modules = {

/***/ 3135:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "buttonorlink_button__7NnbV",
	"primary": "buttonorlink_primary__5JPtO",
	"disabled": "buttonorlink_disabled__ykqZW",
	"secondary": "buttonorlink_secondary__H0BEB",
	"third": "buttonorlink_third__ieOEm",
	"transparent": "buttonorlink_transparent__5sh7l",
	"round": "buttonorlink_round__dg1hK",
	"small": "buttonorlink_small__ON4Tx",
	"large": "buttonorlink_large__ZtgxS"
};


/***/ }),

/***/ 1721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ ButtonOrLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3135);
/* harmony import */ var _buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const ButtonOrLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ className , variant ="primary" , round , large , transparent , small , children , to , onClick , ...props })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), className, {
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().primary)]: variant === "primary",
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().secondary)]: variant === "secondary",
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().third)]: variant === "third",
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().round)]: round,
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().large)]: large,
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().transparent)]: transparent,
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().small)]: small,
        [(_buttonorlink_module_css__WEBPACK_IMPORTED_MODULE_4___default().disabled)]: props.disabled
    });
    if (to != null) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: classes,
            href: to,
            onClick: onClick,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: classes,
        onClick: onClick,
        children: children
    });
});


/***/ })

};
;