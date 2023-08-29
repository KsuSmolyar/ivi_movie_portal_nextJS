exports.id = 1175;
exports.ids = [1175];
exports.modules = {

/***/ 2771:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "moviescarousel_carousel___6YyE",
	"movieBadgeCarouselContent": "moviescarousel_movieBadgeCarouselContent__2ezJm",
	"observer": "moviescarousel_observer__kul24",
	"showMoreCard": "moviescarousel_showMoreCard__kGpIo",
	"movieBadgeContainer": "moviescarousel_movieBadgeContainer__FVW1d"
};


/***/ }),

/***/ 2118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ MoviesCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2771);
/* harmony import */ var _moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9452);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var entities_MovieBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2990);
/* harmony import */ var shared_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_MovieBadge__WEBPACK_IMPORTED_MODULE_4__]);
entities_MovieBadge__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 






const MoviesCarousel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ title , movies , getFilms , genreLink  })=>{
    const contentCarouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const entry = (0,shared_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(contentCarouselRef, {
        root: carouselRef.current,
        rootMargin: "0px 200% 0px -200%"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        entry?.isIntersecting && getFilms && getFilms();
    }, [
        entry
    ]);
    if (movies.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_2__/* .Carousel */ .l, {
        carouselContainerClassName: (_moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().carousel),
        carouselChildrenClassName: (_moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().movieBadgeCarouselContent),
        href: `/CatalogPage/${genreLink}`,
        title: title,
        withArrow: true,
        withButton: true,
        scrollMultipleItems: true,
        ref: carouselRef,
        children: [
            movies?.map((movie)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().movieBadgeContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/MoviePage/${movie.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_MovieBadge__WEBPACK_IMPORTED_MODULE_4__/* .MovieBadge */ .y, {
                            film: movie
                        })
                    })
                }, movie.id)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().observer),
                ref: contentCarouselRef,
                children: !getFilms && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: (_moviescarousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().showMoreCard),
                    href: `/CatalogPage/${genreLink}`,
                    children: "Показать еще"
                })
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* reexport safe */ _MoviesCarousel__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _MoviesCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MoviesCarousel__WEBPACK_IMPORTED_MODULE_0__]);
_MoviesCarousel__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;