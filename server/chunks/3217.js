exports.id = 3217;
exports.ids = [3217];
exports.modules = {

/***/ 2487:
/***/ ((module) => {

// Exports
module.exports = {
	"instruction": "movieChange_instruction__Gz27x",
	"label": "movieChange_label__6QBbb",
	"labelText": "movieChange_labelText__e9HSD",
	"inp": "movieChange_inp__NpeVJ",
	"inpDropdawnList": "movieChange_inpDropdawnList__AyP1W",
	"inpDropdawnItem": "movieChange_inpDropdawnItem__3c_cM",
	"checkbox": "movieChange_checkbox__7Tues",
	"blockInp": "movieChange_blockInp__yxMoM",
	"blockInpTitle": "movieChange_blockInpTitle__L64gp",
	"blockInBlock": "movieChange_blockInBlock__42dAa",
	"blockBtnSubmit": "movieChange_blockBtnSubmit__xOqxe",
	"submit": "movieChange_submit__L1uii"
};


/***/ }),

/***/ 7261:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "outputWindow_label__A3ppT",
	"labelText": "outputWindow_labelText__9jYKD",
	"content": "outputWindow_content__DjObk"
};


/***/ }),

/***/ 3217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieChange),
/* harmony export */   "emptyFilm": () => (/* binding */ emptyFilm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movieChange_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2487);
/* harmony import */ var _movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3827);
/* harmony import */ var app_store_movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4348);
/* harmony import */ var shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4772);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_ButtonOrLink_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1721);
/* harmony import */ var shared_ui_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2585);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([app_store_movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_3__]);
app_store_movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 








const emptyFilm = {
    id: 0,
    name: "",
    enName: null,
    year: 0,
    description: null,
    shortDescription: null,
    rating: null,
    movieLength: 0,
    ageRating: null,
    poster: {
        url: "",
        previewUrl: ""
    },
    videos: {
        trailers: [],
        teasers: []
    },
    genres: [],
    countries: [],
    persons: [],
    similarMovies: null,
    facts: null,
    alternativeName: null
};
function MovieChange() {
    const dispatch = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    const { films , filmSearchPending  } = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((store)=>store.movieTitleSearch);
    const [oneFilm, setOneFilm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyFilm);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [ruName, setRuName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [enName, setEnName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ruName.length >= 3 && films.length > 0 ? setIsOpen(true) : setIsOpen(false);
    }, [
        films.length,
        ruName.length
    ]);
    const handleChange = function(e) {
        setRuName(e.currentTarget.value);
    };
    const handleSearch = function() {
        ruName.length >= 3 ? dispatch((0,app_store_movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_3__/* .getMovieTitleSearch */ .UF)(ruName)) : dispatch((0,app_store_movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_3__/* .resetmovieTitleSearch */ .Qm)());
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().instruction),
                        children: "Для начала поиска начните вводить русское название фильма"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().label),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().labelText),
                                children: "русское название:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().inp),
                                value: ruName,
                                onChange: (e)=>handleChange(e),
                                onKeyUp: handleSearch
                            }),
                            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().inpDropdawnList),
                                children: films.length > 0 && films.map((film)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().inpDropdawnItem),
                                        onClick: ()=>{
                                            setOneFilm(film);
                                            setRuName(film.name);
                                            setEnName(film.enName ?? "");
                                            setIsOpen(false);
                                            dispatch((0,app_store_movieTitleSearchSlice__WEBPACK_IMPORTED_MODULE_3__/* .resetmovieTitleSearch */ .Qm)());
                                        },
                                        children: film.name
                                    }, film.id);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().label),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().labelText),
                                children: "английское название:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().inp),
                                value: enName,
                                onChange: (e)=>setEnName(e.currentTarget.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "альтернативное название",
                        value: oneFilm.alternativeName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "идентификационный номер",
                        value: oneFilm.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "год выпуска",
                        value: oneFilm.year
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "описание",
                        value: oneFilm.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "короткое описание",
                        value: oneFilm.shortDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "продолжительность (мин)",
                        value: oneFilm.movieLength
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "ограничения по возрасту",
                        value: oneFilm.ageRating
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "постер url",
                        value: oneFilm.poster?.url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                        name: "постер (предварительный просмотр) url",
                        value: oneFilm.poster?.previewUrl
                    }),
                    oneFilm.rating && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInp),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInpTitle),
                                children: "Рейтинги"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInBlock),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                        name: "наш",
                                        value: oneFilm.rating.kp
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                        name: "imdb",
                                        value: oneFilm.rating.imdb
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                        name: "tmdb",
                                        value: oneFilm.rating.tmdb
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                        name: "международных кинокритиков",
                                        value: oneFilm.rating.filmCritics
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                        name: "российских кинокритиков",
                                        value: oneFilm.rating.russianFilmCritics
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                        name: "ожидаемый",
                                        value: oneFilm.rating.await
                                    })
                                ]
                            })
                        ]
                    }),
                    oneFilm.genres.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInp),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInpTitle),
                                children: "Жанры"
                            }),
                            oneFilm.genres.map((el)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                    value: el.name
                                }, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                            })
                        ]
                    }),
                    oneFilm.countries.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInp),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockInpTitle),
                                children: "Страны"
                            }),
                            oneFilm.countries.map((el)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_CastomInput__WEBPACK_IMPORTED_MODULE_4__/* .OutputWindow */ .X, {
                                    value: el.name
                                }, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockBtnSubmit),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_ButtonOrLink_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* .ButtonOrLink */ .v, {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().submit),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Изменить"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_ButtonOrLink_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* .ButtonOrLink */ .v, {
                                className: (_movieChange_module_css__WEBPACK_IMPORTED_MODULE_8___default().submit),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Удалить"
                                })
                            })
                        ]
                    })
                ]
            }),
            filmSearchPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Loader__WEBPACK_IMPORTED_MODULE_7__/* .Loader */ .a, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ OutputWindow)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/ui/CastomInput/outputWindow.module.css
var outputWindow_module = __webpack_require__(7261);
var outputWindow_module_default = /*#__PURE__*/__webpack_require__.n(outputWindow_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/shared/ui/CastomInput/OutputWindow.tsx




function OutputWindow({ className , name , value  }) {
    return value && value !== "" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((outputWindow_module_default()).label, className),
        children: [
            name && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (outputWindow_module_default()).labelText,
                children: [
                    name,
                    ":"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (outputWindow_module_default()).content,
                children: value
            })
        ]
    }) : null;
}

;// CONCATENATED MODULE: ./src/shared/ui/CastomInput/index.ts



/***/ })

};
;