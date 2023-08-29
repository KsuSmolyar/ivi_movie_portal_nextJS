"use strict";
exports.id = 6080;
exports.ids = [6080];
exports.modules = {

/***/ 6080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cH": () => (/* binding */ filmComents),
/* harmony export */   "iT": () => (/* binding */ getCommentsThunk),
/* harmony export */   "vo": () => (/* binding */ commentsSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(838);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_apiService__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__]);
([shared_apiService__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



let comments = {
    docs: [],
    total: 0,
    limit: 0,
    page: 0,
    pages: 0
};
const initialState = {
    comments,
    pending: false,
    error: false
};
const getCommentsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("comments/comments-request", async (id, { dispatch  })=>{
    try {
        const response = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_1__/* .getComments */ .li)({
            limit: "50",
            movieId: id
        });
        return response;
    } catch (err) {
        dispatch((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .onExtraReducersRejected */ .C)({
            title: "Errors.title",
            text: "Errors.getComments"
        }));
        return comments;
    }
});
const filmComents = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filmComents",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getCommentsThunk.pending, (state)=>{
            state.pending = true;
            state.comments = comments;
        }).addCase(getCommentsThunk.fulfilled, (state, { payload  })=>{
            state.pending = false;
            state.comments = payload;
        }).addCase(getCommentsThunk.rejected, (state)=>{
            state.pending = false;
            state.error = true;
        });
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (filmComents.reducer);
const commentsSelector = (state)=>state.filmComents.comments;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;