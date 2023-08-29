"use strict";
exports.id = 4348;
exports.ids = [4348];
exports.modules = {

/***/ 8843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ onExtraReducersRejected)
/* harmony export */ });
/* harmony import */ var _tipsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4885);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_2__]);
i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const onExtraReducersRejected = ({ title , text  })=>{
    return (0,_tipsSlice__WEBPACK_IMPORTED_MODULE_0__/* .addTip */ .h9)({
        id: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
        title: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)(title),
        text: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)(text),
        type: "error"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qm": () => (/* binding */ resetmovieTitleSearch),
/* harmony export */   "UF": () => (/* binding */ getMovieTitleSearch),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(838);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_apiService__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__]);
([shared_apiService__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const _films = [];
const initialState = {
    films: _films,
    filmSearchPending: false,
    filmSearchError: false
};
const getMovieTitleSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movieTitleSearch/request", async (name, { dispatch  })=>{
    try {
        const response = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_1__/* .getMovies */ .XT)({
            limit: "10",
            name
        });
        return response.docs;
    } catch (err) {
        dispatch((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .onExtraReducersRejected */ .C)({
            title: "Errors.title",
            text: "Errors.getMovieTitle"
        }));
        return _films;
    }
});
const movieTitleSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "movieTitleSearch",
    initialState: initialState,
    reducers: {
        resetmovieTitleSearch (state) {
            state.films = [];
        }
    },
    extraReducers (builder) {
        builder.addCase(getMovieTitleSearch.pending, (state)=>{
            state.filmSearchPending = true;
        });
        builder.addCase(getMovieTitleSearch.fulfilled, (state, action)=>{
            state.filmSearchPending = false;
            state.films = action.payload;
        });
        builder.addCase(getMovieTitleSearch.rejected, (state)=>{
            state.filmSearchPending = false;
            state.filmSearchError = true;
        });
    }
});
const { resetmovieTitleSearch  } = movieTitleSearch.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieTitleSearch.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bm": () => (/* binding */ removeTip),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fm": () => (/* binding */ tipsSelector),
/* harmony export */   "h9": () => (/* binding */ addTip)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    tips: []
};
const tips = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "tips",
    initialState,
    reducers: {
        addTip (state, action) {
            state.tips.unshift(action.payload);
        },
        removeTip (state, action) {
            state.tips = state.tips.filter((tip)=>tip.id !== action.payload);
        }
    }
});
const { addTip , removeTip  } = tips.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tips);
const tipsSelector = (state)=>state.tips.tips;


/***/ }),

/***/ 838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

};
;