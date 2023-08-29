exports.id = 5304;
exports.ids = [5304];
exports.modules = {

/***/ 5931:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "personcard_root___oFfl",
	"name": "personcard_name__pGGCe",
	"position": "personcard_position__LfTMn",
	"pic": "personcard_pic__R_QC8",
	"link": "personcard_link___84uZ",
	"noPhoto": "personcard_noPhoto__jHd8w",
	"noPhotoIcon": "personcard_noPhotoIcon__DJv0R",
	"surName": "personcard_surName__8ZHCD"
};


/***/ }),

/***/ 7244:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "back_btn__u6tsg"
};


/***/ }),

/***/ 6263:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionTitle": "sectiontitle_sectionTitle__4RHIa"
};


/***/ }),

/***/ 838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ay": () => (/* reexport safe */ _requestContent__WEBPACK_IMPORTED_MODULE_0__.Ay),
/* harmony export */   "HI": () => (/* reexport safe */ _requestContent__WEBPACK_IMPORTED_MODULE_0__.HI),
/* harmony export */   "XT": () => (/* reexport safe */ _requestContent__WEBPACK_IMPORTED_MODULE_0__.XT),
/* harmony export */   "li": () => (/* reexport safe */ _requestContent__WEBPACK_IMPORTED_MODULE_0__.li),
/* harmony export */   "n9": () => (/* reexport safe */ _requestContent__WEBPACK_IMPORTED_MODULE_0__.n9)
/* harmony export */ });
/* harmony import */ var _requestContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_requestContent__WEBPACK_IMPORTED_MODULE_0__]);
_requestContent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* reexport */ PersonMiniCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/PersonMiniCard/personcard.module.css
var personcard_module = __webpack_require__(5931);
var personcard_module_default = /*#__PURE__*/__webpack_require__.n(personcard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/shared/bisnes/PersonMiniCard/PersonMiniCard.tsx






function PersonMiniCard({ person , position , className  }) {
    const personName = person.name ?? person.enName;
    if (!personName) return null;
    const [name] = personName.split(" ").slice(0, 1);
    const [surName] = personName.split(" ").slice(1);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/ActorPage/${person.id}`,
        className: (personcard_module_default()).link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((personcard_module_default()).root, className),
            children: [
                person.photo != null ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 60,
                    height: 60,
                    src: person.photo,
                    alt: personName,
                    className: (personcard_module_default()).pic
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (personcard_module_default()).noPhoto,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_classnames_default()((personcard_module_default()).noPhotoIcon, "icon-person_56__0")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (personcard_module_default()).name,
                    children: name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: external_classnames_default()((personcard_module_default()).name, (personcard_module_default()).surName),
                    children: surName
                }),
                position && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (personcard_module_default()).position,
                    children: person.profession
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/shared/bisnes/PersonMiniCard/index.ts



/***/ }),

/***/ 9926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ Back)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _back_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7244);
/* harmony import */ var _back_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_back_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_4__]);
i18n__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Back = ({ className  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_back_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn), "icon-arrowLeft_8x20__0", className),
        onClick: ()=>router.back(),
        children: t("Back")
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sectiontitle_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6263);
/* harmony import */ var _sectiontitle_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sectiontitle_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const SectionTitle = ({ className , children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        ...props,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_sectiontitle_module_css__WEBPACK_IMPORTED_MODULE_3___default().sectionTitle), className),
        children: children
    });
};


/***/ })

};
;