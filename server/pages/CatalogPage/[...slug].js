(() => {
var exports = {};
exports.id = 1240;
exports.ids = [1240,4882,8917,7001,2092,9362];
exports.modules = {

/***/ 1401:
/***/ ((module) => {

// Exports
module.exports = {
	"sortList": "sortdropdown_sortList__Lb1Kj",
	"dropdownShow": "sortdropdown_dropdownShow__hw7E5",
	"sortListFirstItem": "sortdropdown_sortListFirstItem__UXCH5",
	"sortListItem": "sortdropdown_sortListItem__2cVs1",
	"active": "sortdropdown_active__ByjHm",
	"hide": "sortdropdown_hide__XGMZ_",
	"dropdownHide": "sortdropdown_dropdownHide__f_gXI"
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

/***/ 180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ SortDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1401);
/* harmony import */ var _sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7444);
/* harmony import */ var _SortDropdownItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9518);
/* harmony import */ var shared_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6664);
/* harmony import */ var shared_ui_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1389);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_2__, _SortDropdownItem__WEBPACK_IMPORTED_MODULE_4__]);
([i18n__WEBPACK_IMPORTED_MODULE_2__, _SortDropdownItem__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SortDropdown = ()=>{
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$)();
    const [hide, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dropdownClose = (0,shared_ui_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_6__/* .useAccordionContext */ .E)();
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setHide(true);
        setTimeout(()=>{
            dropdownClose && dropdownClose();
        }, 250);
    }, [
        dropdownClose
    ]);
    (0,shared_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_5__/* .useOutsideClick */ .O)(containerRef, onClose);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        ref: containerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().sortList), {
            [(_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().hide)]: hide
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: (_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().sortListFirstItem),
                children: t("CatalogPageHeader.Sort")
            }),
            _constants__WEBPACK_IMPORTED_MODULE_8__/* .sortTypes.map */ .t.map((sortType)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SortDropdownItem__WEBPACK_IMPORTED_MODULE_4__/* .SortDropdownItem */ .y, {
                    sortType: sortType,
                    onCloseSortDropdown: onClose
                }, sortType))
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ SortDropdownItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1401);
/* harmony import */ var _sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6760);
/* harmony import */ var app_store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3827);
/* harmony import */ var app_store_filterSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(603);
/* harmony import */ var shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_3__, app_store_filterSlice__WEBPACK_IMPORTED_MODULE_5__]);
([i18n__WEBPACK_IMPORTED_MODULE_3__, app_store_filterSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SortDropdownItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ sortType , onCloseSortDropdown  })=>{
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$)();
    const dispatch = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const generatesParamsString = (0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_6__/* .useGenerateParamsString */ .vk)(true);
    const sortTypesSelected = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(app_store_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .sortTypesSelectedSelector */ .SL);
    const onClickSelect = ()=>{
        if (sortTypesSelected === sortType) {
            dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .removeSortTypesSort */ .R6)());
        } else {
            dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .addSortTypesSort */ .A0)(sortType));
            onCloseSortDropdown();
        }
        generatesParamsString({
            isElementSelected: false,
            selectedElement: sortType,
            type: "sort"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().sortListItem), {
            [(_sortdropdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().active)]: sortTypesSelected === sortType
        }),
        onClick: onClickSelect,
        children: t(`CatalogPageHeader.${sortType}`)
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ sortTypes)
/* harmony export */ });
const sortTypes = [
    "votes.kp",
    "rating.kp",
    "year",
    "name"
];


/***/ }),

/***/ 699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _SortDropdown__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _SortDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SortDropdown__WEBPACK_IMPORTED_MODULE_0__]);
_SortDropdown__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3119);
/* harmony import */ var _catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8443);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3820);
/* harmony import */ var features_SortDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(699);
/* harmony import */ var widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3943);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var entities_MovieBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2990);
/* harmony import */ var shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(516);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_store_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3827);
/* harmony import */ var app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(603);
/* harmony import */ var shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2642);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(838);
/* harmony import */ var shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9215);
/* harmony import */ var shared_ui_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2585);
/* harmony import */ var shared_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_2__, i18n__WEBPACK_IMPORTED_MODULE_3__, features_SortDropdown__WEBPACK_IMPORTED_MODULE_6__, widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_7__, entities_MovieBadge__WEBPACK_IMPORTED_MODULE_9__, shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_10__, app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__, shared_apiService__WEBPACK_IMPORTED_MODULE_15__, shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_16__]);
([widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_2__, i18n__WEBPACK_IMPORTED_MODULE_3__, features_SortDropdown__WEBPACK_IMPORTED_MODULE_6__, widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_7__, entities_MovieBadge__WEBPACK_IMPORTED_MODULE_9__, shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_10__, app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__, shared_apiService__WEBPACK_IMPORTED_MODULE_15__, shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const getServerSideProps = async (context)=>{
    try {
        const responseMovies = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_15__/* .getMovies */ .XT)((0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_14__/* .getParams */ .Qf)(context.query));
        return {
            props: {
                movies: responseMovies.docs
            }
        };
    } catch (err) {
        return {
            notFound: true
        };
    }
};
const GenrePage = ({ movies  })=>{
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$)();
    const observedElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const entry = (0,shared_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(observedElementRef, {
        rootMargin: "0px 0px 500px"
    });
    const pageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const dispatch = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .T)();
    const genres = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .getSelectedFilterSelector */ .jr)("genres", t));
    const filteredMovies = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)(app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .filteredMoviesSelector */ .nf);
    const filteredMoviesPending = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)(app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .filteredMoviesPendingSelector */ .Ki);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_14__/* .restoreParams */ .Nb)(router);
        dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .addAllFilters */ .dR)((0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_14__/* .getFilters */ .Zj)(router)));
        dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .addSortTypesSort */ .A0)((0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_14__/* .getSortType */ .Mq)(router)));
        const getFilteredMoviesHandler = ()=>{
            dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .getFilteredMovies */ .R$)());
            pageRef.current = 0;
        };
        router.events.on("routeChangeComplete", getFilteredMoviesHandler);
        const resetFiltersHandler = ()=>{
            dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .resetFilters */ .aw)());
            (0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_14__/* .clearParams */ .q_)(router, false);
        };
        return ()=>{
            router.events.off("routeChangeComplete", getFilteredMoviesHandler);
            resetFiltersHandler();
        };
    }, [
        router,
        dispatch,
        pageRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .addFilteredMovies */ .rV)(movies));
    }, [
        movies,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (entry?.isIntersecting) {
            pageRef.current += 1;
            pageRef.current > 1 && dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_13__/* .getFilteredMoviesPage */ .ZN)(pageRef.current.toString()));
        }
    }, [
        entry,
        pageRef,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_10__/* .Breadcrumbs */ .O, {
                className: "container",
                crumbs: [
                    {
                        title: t("CatalogPage.Movies"),
                        link: "CatalogPage"
                    },
                    {
                        title: typeof genres === "string" ? genres : t(`CatalogPageHeader.AllGenres`)
                    }
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_2__/* .CatalogPageHeader */ .H, {
                showSelectedFilters: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("container", (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default().catalogContentContainer)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Accordion__WEBPACK_IMPORTED_MODULE_5__/* .Accordion */ .U, {
                        textButton: t("CatalogPageHeader.Sort"),
                        buttonIconClass: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default().buttonIcon), "icon-sort_16__0"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_SortDropdown__WEBPACK_IMPORTED_MODULE_6__/* .SortDropdown */ .a, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_7__/* .FilterPanelDesktop */ .R, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default().moviesContainer),
                        children: !filteredMoviesPending && !filteredMovies.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_16__/* .NotFound */ .T, {
                            className: (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default().notFound)
                        }) : !filteredMoviesPending ? filteredMovies.map((movie)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_19___default().movieBadgeContainer),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: `/MoviePage/${movie.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_MovieBadge__WEBPACK_IMPORTED_MODULE_9__/* .MovieBadge */ .y, {
                                        film: movie
                                    })
                                })
                            }, movie.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Loader__WEBPACK_IMPORTED_MODULE_17__/* .Loader */ .a, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: observedElementRef
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenrePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 6252:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-browser-languagedetector");;

/***/ }),

/***/ 4329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,3121,5675,1721,6760,8779,5963,9452,4904,2418,5838,5578,603,2833,8071], () => (__webpack_exec__(776)));
module.exports = __webpack_exports__;

})();