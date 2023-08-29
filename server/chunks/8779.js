"use strict";
exports.id = 8779;
exports.ids = [8779];
exports.modules = {

/***/ 5035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ apiRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.kinopoisk.dev/",
    headers: {
        Accept: "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
    }
});
const apiRequest = async (config)=>{
    try {
        const response = await api(config);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ay": () => (/* binding */ getPerson),
/* harmony export */   "HI": () => (/* binding */ getMovie),
/* harmony export */   "XT": () => (/* binding */ getMovies),
/* harmony export */   "li": () => (/* binding */ getComments),
/* harmony export */   "n9": () => (/* binding */ getPersons)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_0__]);
_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getMovie = async (path)=>{
    const config = {
        method: "GET",
        url: `v1.3/movie/${path}`
    };
    return await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* .apiRequest */ .N)(config);
};
const getMovies = async (params)=>{
    const urlSearchParams = new URLSearchParams({
        page: "1",
        limit: "100"
    });
    if (params) {
        Object.keys(params).forEach((key)=>{
            const value = params[key];
            if (Array.isArray(value)) {
                value.forEach((arrayValue)=>{
                    !!arrayValue && urlSearchParams.append(key, arrayValue);
                });
            } else if (!!value) {
                urlSearchParams.set(key, value);
            }
        });
    }
    const config = {
        method: "GET",
        url: "v1.3/movie",
        params: urlSearchParams
    };
    return await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* .apiRequest */ .N)(config);
};
const getPerson = async (path)=>{
    const config = {
        method: "GET",
        url: `v1/person/${path}`
    };
    return await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* .apiRequest */ .N)(config);
};
const getPersons = async (params)=>{
    const config = {
        method: "GET",
        url: "v1/person",
        params: {
            page: "1",
            limit: "30",
            ...params
        }
    };
    return await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* .apiRequest */ .N)(config);
};
const getComments = async (params)=>{
    const config = {
        method: "GET",
        url: "v1/review",
        params: {
            page: "1",
            limit: "30",
            ...params
        }
    };
    return await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* .apiRequest */ .N)(config);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;