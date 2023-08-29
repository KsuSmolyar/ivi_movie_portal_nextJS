exports.id = 2833;
exports.ids = [2833];
exports.modules = {

/***/ 3344:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "expandableblock_container__kOAqg",
	"text": "expandableblock_text__CDfkg",
	"expanded": "expandableblock_expanded__uZJAT",
	"expandButton": "expandableblock_expandButton__7WpHa"
};


/***/ }),

/***/ 7118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMedia = (query)=>{
    const getMatches = (query)=>{
        // Prevents SSR issues
        if (false) {}
        return false;
    };
    const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getMatches(query));
    function handleChange() {
        setMatches(getMatches(query));
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const matchMedia = window.matchMedia(query);
        // Triggered at the first client-side load and if query changes
        handleChange();
        // Listen matchMedia
        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange);
        } else {
            matchMedia.addEventListener("change", handleChange);
        }
        return ()=>{
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange);
            } else {
                matchMedia.removeEventListener("change", handleChange);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        query
    ]);
    return matches;
};


/***/ }),

/***/ 65:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ExpandableBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3344);
/* harmony import */ var _expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_2__]);
i18n__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ExpandableBlock = ({ text  })=>{
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$)();
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onExpand = ()=>{
        setExpanded((prev)=>!prev);
    };
    const buttonText = expanded ? t("CatalogPageHeader.Collapse") : t("CatalogPageHeader.Expand");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4___default().text), {
                    [(_expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4___default().expanded)]: expanded
                }),
                dangerouslySetInnerHTML: {
                    __html: text
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_expandableblock_module_css__WEBPACK_IMPORTED_MODULE_4___default().expandButton),
                onClick: onExpand,
                children: buttonText
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _ExpandableBlock__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _ExpandableBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ExpandableBlock__WEBPACK_IMPORTED_MODULE_0__]);
_ExpandableBlock__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;