exports.id = 4904;
exports.ids = [4904];
exports.modules = {

/***/ 3451:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "genrebookmarks_list__04SC1",
	"item": "genrebookmarks_item__wfXZh",
	"link": "genrebookmarks_link__5i6lV",
	"lastLink": "genrebookmarks_lastLink__o2MYo"
};


/***/ }),

/***/ 7897:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "postercards_wrapper__pWs_G",
	"pic": "postercards_pic__6dE1Y"
};


/***/ }),

/***/ 4174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ GenreBookmarks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/GenreBookmarks/genrebookmarks.module.css
var genrebookmarks_module = __webpack_require__(3451);
var genrebookmarks_module_default = /*#__PURE__*/__webpack_require__.n(genrebookmarks_module);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/shared/bisnes/GenreBookmarks/GenreBookmarks.tsx






const GenreBookmarks = ({ genres , className , home , page  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: external_classnames_default()((genrebookmarks_module_default()).list, className),
        children: [
            home && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (genrebookmarks_module_default()).item,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: (genrebookmarks_module_default()).link,
                    children: "мой иви"
                })
            }, (0,toolkit_.nanoid)()),
            genres?.map((el)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (genrebookmarks_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.ivi.ru/movies",
                        className: (genrebookmarks_module_default()).link,
                        children: el.name
                    })
                }, (0,toolkit_.nanoid)());
            }),
            page && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (genrebookmarks_module_default()).item,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: external_classnames_default()((genrebookmarks_module_default()).link, (genrebookmarks_module_default()).lastLink),
                    children: page
                })
            }, (0,toolkit_.nanoid)())
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/bisnes/GenreBookmarks/index.ts



/***/ }),

/***/ 9156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PosterCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _postercards_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7897);
/* harmony import */ var _postercards_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_postercards_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





const PosterCards = ({ src , name , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_postercards_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper), className),
        children: src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: src,
            width: 200,
            height: 300,
            alt: name,
            className: (_postercards_module_css__WEBPACK_IMPORTED_MODULE_4___default().pic)
        })
    });
};


/***/ })

};
;