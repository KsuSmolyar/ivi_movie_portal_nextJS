exports.id = 5578;
exports.ids = [5578];
exports.modules = {

/***/ 1382:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerHover": "bannerhover_bannerHover__26sZ2",
	"bannerHoverWrapper": "bannerhover_bannerHoverWrapper__R1SSD",
	"bannerHoverList": "bannerhover_bannerHoverList__8s4_M",
	"bannerHoverItem": "bannerhover_bannerHoverItem__v_SKI",
	"bannerRating": "bannerhover_bannerRating__0X_6D",
	"innerContainer": "bannerhover_innerContainer__tzzn_"
};


/***/ }),

/***/ 1186:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "moviebadge_wrapper__neuTA",
	"banner": "moviebadge_banner__S4dH0",
	"bannerHover": "moviebadge_bannerHover__HBfPE",
	"bannerMain": "moviebadge_bannerMain__rcyfU",
	"pic": "moviebadge_pic__orWF6",
	"age": "moviebadge_age__uzPer"
};


/***/ }),

/***/ 7376:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "agerestrictions_wrapper__grDeY",
	"text": "agerestrictions_text__rBqVB"
};


/***/ }),

/***/ 9447:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "topchart_root__bp7lo",
	"inp": "topchart_inp__Ad0qx",
	"name": "topchart_name___8DuJ"
};


/***/ }),

/***/ 2574:
/***/ ((module) => {

// Exports
module.exports = {
	"priceBadge": "priceBadge_priceBadge__rByP6",
	"pink": "priceBadge_pink__vyF10",
	"gray": "priceBadge_gray__vVGQn"
};


/***/ }),

/***/ 255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ BannerHover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1382);
/* harmony import */ var _bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_bisnes_BlockChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var shared_bisnes_ShortDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1526);
/* harmony import */ var shared_bisnes_TopChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_bisnes_RatingMovie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_bisnes_TopChart__WEBPACK_IMPORTED_MODULE_4__]);
shared_bisnes_TopChart__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const BannerHover = ({ film , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHover), className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverWrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverList),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverItem), "icon-favoriteAdd_20__0")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverItem), "icon-similar_20__0")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverItem), "icon-rating_20__0")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverItem), "icon-dislike_20__0")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerHoverRating),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_TopChart__WEBPACK_IMPORTED_MODULE_4__/* .TopChart */ .q, {
                            obj: film
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_bannerhover_module_css__WEBPACK_IMPORTED_MODULE_7___default().innerContainer),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_RatingMovie__WEBPACK_IMPORTED_MODULE_6__/* .RatingMovie */ .D, {
                                    grade: film.rating ? film.rating.kp : 0
                                }),
                                film.rating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_BlockChart__WEBPACK_IMPORTED_MODULE_2__/* .BlockChart */ .T, {
                                    obj: film.rating,
                                    width: 35
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_ShortDescription__WEBPACK_IMPORTED_MODULE_3__/* .ShortDescription */ .b, {
                            obj: film
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* reexport safe */ _BannerHover__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _BannerHover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BannerHover__WEBPACK_IMPORTED_MODULE_0__]);
_BannerHover__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ MovieBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1186);
/* harmony import */ var _moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_bisnes_PosterCards_PosterCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9156);
/* harmony import */ var shared_ui_CardTitle_CardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4954);
/* harmony import */ var entities_BannerHover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2214);
/* harmony import */ var shared_ui_PriceBadge_PriceBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4414);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7987);
/* harmony import */ var shared_bisnes_AgeRestrictions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6165);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_BannerHover__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_6__]);
([entities_BannerHover__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function MovieBadge({ film  }) {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const lng = i18n.language;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().banner),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerMain),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_PosterCards_PosterCards__WEBPACK_IMPORTED_MODULE_2__/* .PosterCards */ .t, {
                                src: film.poster?.url,
                                name: lng === "ru" ? film.name ?? film.alternativeName : film.enName ?? film.name,
                                className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().pic)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_AgeRestrictions__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                age: film.ageRating,
                                className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().age)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_BannerHover__WEBPACK_IMPORTED_MODULE_4__/* .BannerHover */ .v, {
                        film: film,
                        className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerHover)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CardTitle_CardTitle__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .l, {
                className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
                children: lng === "ru" ? film.name ?? film.alternativeName : film.enName ?? film.name
            }),
            film.rating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_PriceBadge_PriceBadge__WEBPACK_IMPORTED_MODULE_5__/* .PriceBadge */ .f, {
                price: film.rating.kp > 7 ? true : false,
                className: (_moviebadge_module_css__WEBPACK_IMPORTED_MODULE_8___default().statusPrice)
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _MovieBadge__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _MovieBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MovieBadge__WEBPACK_IMPORTED_MODULE_0__]);
_MovieBadge__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ AgeRestrictions)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/AgeRestrictions/agerestrictions.module.css
var agerestrictions_module = __webpack_require__(7376);
var agerestrictions_module_default = /*#__PURE__*/__webpack_require__.n(agerestrictions_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/shared/bisnes/AgeRestrictions/AgeRestrictions.tsx




const AgeRestrictions = ({ age , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((agerestrictions_module_default()).wrapper, className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: (agerestrictions_module_default()).text,
            children: [
                age ? age : 0,
                " +"
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/shared/bisnes/AgeRestrictions/index.ts



/***/ }),

/***/ 3648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ TopChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _topchart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9447);
/* harmony import */ var _topchart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_topchart_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_2__]);
_i18n__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const TopChart = ({ obj  })=>{
    const { t  } = (0,_i18n__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_topchart_module_css__WEBPACK_IMPORTED_MODULE_3___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_topchart_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
                children: t("topChart.Our")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_topchart_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
                children: t("topChart.grade")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "range",
                className: (_topchart_module_css__WEBPACK_IMPORTED_MODULE_3___default().inp),
                min: "0",
                max: "10",
                value: obj.rating ? obj.rating.kp : 0,
                step: "0,1",
                style: {
                    width: "width"
                },
                id: "topChart",
                readOnly: true
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _TopChart__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _TopChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TopChart__WEBPACK_IMPORTED_MODULE_0__]);
_TopChart__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIntersectionObserver(elementRef, { threshold =0 , root =null , rootMargin ="0%" , freezeOnceVisible =false  }) {
    const [entry, setEntry] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const frozen = entry?.isIntersecting && freezeOnceVisible;
    const updateEntry = ([entry])=>{
        setEntry(entry);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const node = elementRef?.current;
        const hasIOSupport = !!window.IntersectionObserver;
        if (!hasIOSupport || frozen || !node) return;
        const observerParams = {
            threshold,
            root,
            rootMargin
        };
        const observer = new IntersectionObserver(updateEntry, observerParams);
        observer.observe(node);
        return ()=>observer.disconnect();
    }, [
        elementRef,
        threshold,
        root,
        rootMargin,
        frozen
    ]);
    return entry;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIntersectionObserver);


/***/ }),

/***/ 4414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ PriceBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _priceBadge_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2574);
/* harmony import */ var _priceBadge_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_priceBadge_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const PriceBadge = ({ price , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_priceBadge_module_css__WEBPACK_IMPORTED_MODULE_3___default().priceBadge), price ? (_priceBadge_module_css__WEBPACK_IMPORTED_MODULE_3___default().pink) : (_priceBadge_module_css__WEBPACK_IMPORTED_MODULE_3___default().gray), className),
        children: price ? "Подписка" : "Бесплатно"
    });
};


/***/ })

};
;