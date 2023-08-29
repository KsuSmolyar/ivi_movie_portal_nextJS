exports.id = 2890;
exports.ids = [2890];
exports.modules = {

/***/ 4393:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "genreChange_form__i4H1K",
	"blockInp": "genreChange_blockInp__uowX9",
	"label": "genreChange_label___mBaf",
	"labelText": "genreChange_labelText__RkEok",
	"inputs": "genreChange_inputs__dIiEm",
	"inp": "genreChange_inp__Pfnpg",
	"submit": "genreChange_submit__p5dzJ",
	"put": "genreChange_put__5fJN2"
};


/***/ }),

/***/ 2890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenreChange)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _genreChange_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4393);
/* harmony import */ var _genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var features_CustomSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5452);




const genres = [
    {
        id: 1,
        name: "аниме",
        en_name: "anime"
    },
    {
        id: 2,
        name: "биография",
        en_name: "biography"
    },
    {
        id: 3,
        name: "боевик",
        en_name: "action movie"
    },
    {
        id: 4,
        name: "вестерн",
        en_name: "western"
    },
    {
        id: 5,
        name: "военный",
        en_name: "military"
    },
    {
        id: 6,
        name: "детектив",
        en_name: "detective"
    },
    {
        id: 7,
        name: "детский",
        en_name: "children"
    },
    {
        id: 9,
        name: "документальный",
        en_name: "documentary"
    },
    {
        id: 10,
        name: "драма",
        en_name: "drama"
    },
    {
        id: 11,
        name: "игра",
        en_name: "game"
    },
    {
        id: 12,
        name: "история",
        en_name: "history"
    },
    {
        id: 13,
        name: "комедия",
        en_name: "comedy"
    },
    {
        id: 15,
        name: "короткометражка",
        en_name: "short film"
    },
    {
        id: 16,
        name: "криминал",
        en_name: "crime"
    },
    {
        id: 17,
        name: "мелодрама",
        en_name: "melodrama"
    },
    {
        id: 18,
        name: "музыка",
        en_name: "music"
    },
    {
        id: 19,
        name: "мультфильм",
        en_name: "cartoon"
    },
    {
        id: 20,
        name: "мюзикл",
        en_name: "musical"
    },
    {
        id: 21,
        name: "новости",
        en_name: "news"
    },
    {
        id: 22,
        name: "приключения",
        en_name: "adventure"
    },
    {
        id: 23,
        name: "реальное ТВ",
        en_name: "real TV"
    },
    {
        id: 24,
        name: "семейный",
        en_name: "family"
    },
    {
        id: 25,
        name: "спорт",
        en_name: "sport"
    },
    {
        id: 26,
        name: "ток-шоу",
        en_name: "talk show"
    },
    {
        id: 27,
        name: "триллер",
        en_name: "thriller"
    },
    {
        id: 28,
        name: "ужасы",
        en_name: "horror"
    },
    {
        id: 29,
        name: "фантастика",
        en_name: "fantastyc"
    },
    {
        id: 30,
        name: "фильм-нуар",
        en_name: "film noir"
    },
    {
        id: 31,
        name: "фэнтези",
        en_name: "fantasy"
    }
];
function GenreChange() {
    // понадобиться при получении жанров с бэка
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //   dispatch(getGenres());
    // }, []);
    const [idValue, setIdValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [nameValue, setnameValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [en_nameValue, seten_nameValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [put, setPut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setPut(`PUT /genres/TOKEN=TOKEN&id=${idValue}&name=${nameValue}&en_name=${en_nameValue}`);
        genreSelection("");
    };
    const genreSelection = function(name) {
        const oneGenre = genres.find((el)=>el.name === name);
        setIdValue(oneGenre ? oneGenre.id.toString() : "");
        setnameValue(oneGenre ? oneGenre.name : "");
        seten_nameValue(oneGenre ? oneGenre.en_name : "");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_CustomSelect__WEBPACK_IMPORTED_MODULE_2__/* .CustomSelect */ .A, {
                placeholder: "выберите название жанра",
                list: genres.map((e)=>e.name),
                func: genreSelection
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
                onSubmit: (e)=>handleSubmit(e),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().blockInp),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().labelText),
                                    children: "id/ название русское/ название английское:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputs),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            readOnly: true,
                                            name: "id",
                                            className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().inp),
                                            value: idValue
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            required: true,
                                            name: "name",
                                            className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().inp),
                                            value: nameValue,
                                            onChange: (event)=>setnameValue(event.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            required: true,
                                            name: "en_name",
                                            className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().inp),
                                            value: en_nameValue,
                                            onChange: (event)=>seten_nameValue(event.target.value)
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        onClick: (e)=>handleSubmit(e),
                        className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_genreChange_module_css__WEBPACK_IMPORTED_MODULE_3___default().put),
                children: put
            })
        ]
    });
}


/***/ })

};
;