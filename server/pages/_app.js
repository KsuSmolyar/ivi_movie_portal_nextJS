(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,4882,8917,7001,2092,1795,9757];
exports.modules = {

/***/ 4136:
/***/ ((module) => {

// Exports
module.exports = {
	"tip": "tip_tip__rRCXh",
	"closeButton": "tip_closeButton__vjmKR",
	"textContainer": "tip_textContainer__G1ShA",
	"title": "tip_title__JEinm",
	"tipText": "tip_tipText__25hfk",
	"success": "tip_success__c37jp",
	"error": "tip_error__x3_7W"
};


/***/ }),

/***/ 3321:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "errorboundary_container__lJB_3",
	"innerContainer": "errorboundary_innerContainer__S8b2s",
	"button": "errorboundary_button__7xP3C",
	"title": "errorboundary_title__Nb_zE"
};


/***/ }),

/***/ 6608:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "tips_container__FzR0m"
};


/***/ }),

/***/ 2215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ml": () => (/* binding */ allGenres)
/* harmony export */ });
/* unused harmony export getGenres */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    genres: [],
    pending: false,
    error: false
};
const getGenres = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("genres/genres-request", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&genres`, {
        headers: {
            Accept: "application/json",
            "X-API-KEY": "WK12G32-AS5MC31-G3YD6BS-R9FN48S"
        }
    });
    return response.data;
});
const allGenres = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "allGenres",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getGenres.pending, (state)=>{
            state.pending = true;
        }).addCase(getGenres.fulfilled, (state, { payload  })=>{
            state.pending = false;
            state.genres = payload;
        }).addCase(getGenres.rejected, (state)=>{
            state.pending = false;
            state.error = true;
        });
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (allGenres.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* binding */ movie)
/* harmony export */ });
/* unused harmony export addFilm */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const film = {
    id: 0,
    name: "",
    enName: null,
    year: 0,
    description: null,
    shortDescription: null,
    rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
    },
    movieLength: 0,
    ageRating: null,
    poster: {
        url: "",
        previewUrl: ""
    },
    videos: {
        trailers: [
            {
                url: "",
                name: "",
                site: "",
                type: "",
                size: 0
            }
        ],
        teasers: [
            {
                url: "",
                name: "",
                site: "",
                type: "",
                size: 0
            }
        ]
    },
    genres: [],
    countries: [],
    persons: [],
    similarMovies: null,
    facts: null,
    alternativeName: null
};
const initialState = {
    film
};
const movie = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "movie",
    initialState: initialState,
    reducers: {
        addFilm (state, obj) {
            state.film = obj.payload;
        }
    }
});
const { addFilm  } = movie.actions;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (movie.reducer);


/***/ }),

/***/ 8201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(603);
/* harmony import */ var _oneFilmSliceDELETE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4157);
/* harmony import */ var _commentsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6080);
/* harmony import */ var _movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4348);
/* harmony import */ var _allGenresRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2215);
/* harmony import */ var _tipsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4885);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filterSlice__WEBPACK_IMPORTED_MODULE_1__, _commentsRequest__WEBPACK_IMPORTED_MODULE_3__, _movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_4__, _allGenresRequest__WEBPACK_IMPORTED_MODULE_5__]);
([_filterSlice__WEBPACK_IMPORTED_MODULE_1__, _commentsRequest__WEBPACK_IMPORTED_MODULE_3__, _movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_4__, _allGenresRequest__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        filters: _filterSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"].reducer */ .ZP.reducer,
        movie: _oneFilmSliceDELETE__WEBPACK_IMPORTED_MODULE_2__/* .movie.reducer */ .$6.reducer,
        filmComents: _commentsRequest__WEBPACK_IMPORTED_MODULE_3__/* .filmComents.reducer */ .cH.reducer,
        movieTitleSearch: _movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        allGenres: _allGenresRequest__WEBPACK_IMPORTED_MODULE_5__/* .allGenres.reducer */ .Ml.reducer,
        tips: _tipsSlice__WEBPACK_IMPORTED_MODULE_6__/* ["default"].reducer */ .ZP.reducer
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6177);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_General__WEBPACK_IMPORTED_MODULE_0__]);
_General__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_General__WEBPACK_IMPORTED_MODULE_0__["default"]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4033);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9517);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_nulling_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6175);
/* harmony import */ var _styles_nulling_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_nulling_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_iconfonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6064);
/* harmony import */ var _styles_iconfonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_iconfonts_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_vars_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2593);
/* harmony import */ var _styles_vars_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_vars_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_ui_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2585);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var widgets_Tips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3165);
/* harmony import */ var widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7012);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_General__WEBPACK_IMPORTED_MODULE_2__, app_store_store__WEBPACK_IMPORTED_MODULE_7__, widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__]);
([_General__WEBPACK_IMPORTED_MODULE_2__, app_store_store__WEBPACK_IMPORTED_MODULE_7__, widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        const handleStart = (url, { shallow  })=>{
            !shallow && setIsLoading(true);
        };
        const handleStop = ()=>{
            setIsLoading(false);
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: app_store_store__WEBPACK_IMPORTED_MODULE_7__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__/* .ErrorBoundary */ .S, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_General__WEBPACK_IMPORTED_MODULE_2__["default"], {
                children: [
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Loader__WEBPACK_IMPORTED_MODULE_9__/* .Loader */ .a, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Tips__WEBPACK_IMPORTED_MODULE_11__/* .Tips */ .C, {})
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ButtonOrLink__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _ButtonOrLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1721);



/***/ }),

/***/ 7659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2776);



/***/ }),

/***/ 1633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3321);
/* harmony import */ var _errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2021);
/* harmony import */ var shared_ui_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7659);
/* harmony import */ var shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_2__]);
i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        hasError: false
    };
    static getDerivedStateFromError(_) {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5___default().innerContainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                            children: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)("ErrorBoundary.title")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            to: "/",
                            variant: "secondary",
                            transparent: true,
                            className: (_errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                            onClick: ()=>this.setState({
                                    hasError: false
                                }),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)("ErrorBoundary.buttonText")
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Logo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    className: (_errorboundary_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoImg)
                                })
                            ]
                        })
                    ]
                })
            });
        }
        return this.props.children;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1633);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__]);
_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* reexport */ Tips)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/app/store/hooks.ts
var hooks = __webpack_require__(3827);
// EXTERNAL MODULE: ./src/app/store/tipsSlice.ts
var tipsSlice = __webpack_require__(4885);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/shared/ui/Tip/tip.module.css
var tip_module = __webpack_require__(4136);
var tip_module_default = /*#__PURE__*/__webpack_require__.n(tip_module);
;// CONCATENATED MODULE: ./src/shared/ui/Tip/Tip.tsx




const TIMEOUT_DURATION = 5000;
const Tip = /*#__PURE__*/ external_react_default().memo(({ type , title , text , id , onClose , className  })=>{
    const timeoutIdRef = (0,external_react_.useRef)(null);
    let iconClass;
    switch(type){
        case "success":
            iconClass = "icon-success_32__0";
            break;
        case "error":
            iconClass = "icon-bugReport_20__0";
            break;
        case "info":
            iconClass = "icon-developer_32__1 icon-developer_32__0";
    }
    const onCloseHandler = (0,external_react_.useCallback)(()=>{
        timeoutIdRef.current && clearTimeout(timeoutIdRef.current);
        onClose(id);
    }, [
        id,
        onClose
    ]);
    (0,external_react_.useEffect)(()=>{
        timeoutIdRef.current = setTimeout(()=>{
            onCloseHandler();
        }, TIMEOUT_DURATION);
        return ()=>{
            timeoutIdRef.current && clearTimeout(timeoutIdRef.current);
        };
    }, [
        timeoutIdRef,
        onCloseHandler
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((tip_module_default()).tip, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (tip_module_default()).textContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: external_classnames_default()((tip_module_default()).title, iconClass, {
                            [(tip_module_default()).success]: type === "success",
                            [(tip_module_default()).error]: type === "error",
                            [(tip_module_default()).info]: type === "info"
                        }),
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (tip_module_default()).tipText,
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: external_classnames_default()((tip_module_default()).closeButton, "icon-close_20__0"),
                onClick: onCloseHandler
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/shared/ui/Tip/index.ts


// EXTERNAL MODULE: ./src/widgets/Tips/tips.module.css
var tips_module = __webpack_require__(6608);
var tips_module_default = /*#__PURE__*/__webpack_require__.n(tips_module);
;// CONCATENATED MODULE: ./src/widgets/Tips/Tips.tsx







const Tips = /*#__PURE__*/ external_react_default().memo(()=>{
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const tips = (0,hooks/* useAppSelector */.C)(tipsSlice/* tipsSelector */.fm);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const onTipClose = (0,external_react_.useCallback)((id)=>{
        dispatch((0,tipsSlice/* removeTip */.Bm)(id));
    }, [
        dispatch
    ]);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
        return ()=>{
            setMounted(false);
        };
    }, []);
    return mounted ? /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (tips_module_default()).container,
        children: tips.map((tip)=>/*#__PURE__*/ jsx_runtime_.jsx(Tip, {
                id: tip.id,
                type: tip.type,
                title: tip.title,
                text: tip.text,
                onClose: onTipClose
            }, tip.id))
    }), document.body) : null;
});

;// CONCATENATED MODULE: ./src/widgets/Tips/index.ts



/***/ }),

/***/ 6175:
/***/ (() => {



/***/ }),

/***/ 6064:
/***/ (() => {



/***/ }),

/***/ 9517:
/***/ (() => {



/***/ }),

/***/ 2593:
/***/ (() => {



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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,1721,6760,8779,5963,2418,9389,4348,6177,603,6080], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();