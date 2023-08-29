(() => {
var exports = {};
exports.id = 6777;
exports.ids = [6777,4882,8917,7001,2092,9362];
exports.modules = {

/***/ 7970:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "catalogpagecontent_container__iqUL9",
	"genreCardContainer": "catalogpagecontent_genreCardContainer__yHWio",
	"innerContainerGenreCard": "catalogpagecontent_innerContainerGenreCard__oafFn",
	"genreCardCarouselContent": "catalogpagecontent_genreCardCarouselContent__oQNnz",
	"personCardCarouselContent": "catalogpagecontent_personCardCarouselContent__p5kmh",
	"personCardContainer": "catalogpagecontent_personCardContainer__Gf5Gc",
	"carousel": "catalogpagecontent_carousel__RuW9Z"
};


/***/ }),

/***/ 643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catalogpage_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3119);
/* harmony import */ var _catalogpage_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8443);
/* harmony import */ var widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3943);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6760);
/* harmony import */ var widgets_CatalogPageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7579);
/* harmony import */ var shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(516);
/* harmony import */ var app_store_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3827);
/* harmony import */ var app_store_filterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(603);
/* harmony import */ var shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2642);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(838);
/* harmony import */ var shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_3__, widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_4__, i18n__WEBPACK_IMPORTED_MODULE_5__, widgets_CatalogPageContent__WEBPACK_IMPORTED_MODULE_6__, shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__, app_store_filterSlice__WEBPACK_IMPORTED_MODULE_9__, shared_apiService__WEBPACK_IMPORTED_MODULE_12__, shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_13__]);
([widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_3__, widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_4__, i18n__WEBPACK_IMPORTED_MODULE_5__, widgets_CatalogPageContent__WEBPACK_IMPORTED_MODULE_6__, shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__, app_store_filterSlice__WEBPACK_IMPORTED_MODULE_9__, shared_apiService__WEBPACK_IMPORTED_MODULE_12__, shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const getStaticProps = async ()=>{
    try {
        const [responseMovies, responseActors] = await Promise.all([
            (0,shared_apiService__WEBPACK_IMPORTED_MODULE_12__/* .getMovies */ .XT)(),
            (0,shared_apiService__WEBPACK_IMPORTED_MODULE_12__/* .getPersons */ .n9)({
                limit: "20",
                ["movies.enProfession"]: "actor"
            })
        ]);
        return {
            props: {
                movies: responseMovies.docs,
                actors: responseActors.docs
            }
        };
    } catch (err) {
        return {
            props: {
                movies: [],
                actors: []
            }
        };
        return {
            notFound: true
        };
    }
};
function CatalogPage({ movies , actors  }) {
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$)();
    const adventures = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>movies?.filter((el)=>el.genres.find((e)=>e.name === "приключения")), [
        movies
    ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const dispatch = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,app_store_filterSlice__WEBPACK_IMPORTED_MODULE_9__/* .resetFilters */ .aw)());
        (0,shared_utils_generatesParamsString__WEBPACK_IMPORTED_MODULE_10__/* .clearParams */ .q_)(router, false);
    }, [
        router,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_14___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__/* .Breadcrumbs */ .O, {
                className: "container",
                crumbs: [
                    {
                        title: t("CatalogPage.Movies")
                    }
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_CatalogPageHeader__WEBPACK_IMPORTED_MODULE_3__/* .CatalogPageHeader */ .H, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("container", (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_14___default().catalogContentContainer)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_FilterPanel__WEBPACK_IMPORTED_MODULE_4__/* .FilterPanelDesktop */ .R, {}),
                    !movies.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_NotFound__WEBPACK_IMPORTED_MODULE_13__/* .NotFound */ .T, {
                        className: (_catalogpage_module_css__WEBPACK_IMPORTED_MODULE_14___default().catalogNotFound)
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_CatalogPageContent__WEBPACK_IMPORTED_MODULE_6__/* .CatalogPageContent */ .a, {
                        movies: adventures,
                        actors: actors
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ CatalogPageContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7970);
/* harmony import */ var _catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var widgets_FilterPanel_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9120);
/* harmony import */ var shared_ui_FilterGenreCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1477);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7987);
/* harmony import */ var shared_bisnes_PersonMiniCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5526);
/* harmony import */ var shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9452);
/* harmony import */ var widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__, widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_4__, widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const catalogPageGenres = {
    firstCarousel: {
        enName: "detectives",
        ruName: "детектив"
    },
    secondCarousel: {
        enName: "actions",
        ruName: "боевик"
    },
    thirdCarousel: {
        enName: "comedy",
        ruName: "комедия"
    },
    fourthCarousel: {
        enName: "drama",
        ruName: "драма"
    }
};
const CatalogPageContent = ({ movies , actors  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const moviesForCarousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>movies?.reduce((acc, movie)=>{
            Object.values(catalogPageGenres).forEach((value)=>{
                if (movie.genres.find(({ name  })=>name === value.ruName)) {
                    acc[value.ruName] ? acc[value.ruName].push(movie) : acc[value.ruName] = [
                        movie
                    ];
                }
            });
            return acc;
        }, {}), [
        movies
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__/* .MoviesCarousel */ .I, {
                genreLink: catalogPageGenres.firstCarousel.ruName,
                title: t(`headerDropdownNavigation.${catalogPageGenres.firstCarousel.enName}`),
                movies: moviesForCarousel[catalogPageGenres.firstCarousel.ruName]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_6__/* .Carousel */ .l, {
                carouselContainerClassName: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().carousel),
                carouselChildrenClassName: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().genreCardCarouselContent),
                title: t("CatalogPageContent.Genres"),
                withButton: true,
                scrollMultipleItems: true,
                children: widgets_FilterPanel_constants__WEBPACK_IMPORTED_MODULE_2__/* .genresId.map */ .XN.map((genre)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                        href: `/CatalogPage/${t(`headerDropdownNavigation.${genre.name}`).toLowerCase()}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_FilterGenreCard__WEBPACK_IMPORTED_MODULE_3__/* .FilterGenreCard */ .z, {
                            className: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().innerContainerGenreCard),
                            containerClassName: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().genreCardContainer),
                            caption: t(`headerDropdownNavigation.${genre.name}`),
                            genre: genre.name
                        })
                    }, genre.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__/* .MoviesCarousel */ .I, {
                genreLink: catalogPageGenres.secondCarousel.ruName,
                title: t(`headerDropdownNavigation.${catalogPageGenres.secondCarousel.enName}`),
                movies: moviesForCarousel[catalogPageGenres.secondCarousel.ruName]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__/* .MoviesCarousel */ .I, {
                genreLink: catalogPageGenres.thirdCarousel.ruName,
                title: t(`headerDropdownNavigation.${catalogPageGenres.thirdCarousel.enName}`),
                movies: moviesForCarousel[catalogPageGenres.thirdCarousel.ruName]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_6__/* .Carousel */ .l, {
                carouselContainerClassName: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().carousel),
                carouselChildrenClassName: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().personCardCarouselContent),
                title: t("CatalogPageContent.Persons"),
                withButton: true,
                scrollMultipleItems: true,
                children: actors?.map((actor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_catalogpagecontent_module_css__WEBPACK_IMPORTED_MODULE_9___default().personCardContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_PersonMiniCard__WEBPACK_IMPORTED_MODULE_5__/* .PersonMiniCard */ .G, {
                            person: actor
                        })
                    }, actor.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_MoviesCarousel__WEBPACK_IMPORTED_MODULE_7__/* .MoviesCarousel */ .I, {
                genreLink: catalogPageGenres.fourthCarousel.ruName,
                title: t(`headerDropdownNavigation.${catalogPageGenres.fourthCarousel.enName}`),
                movies: moviesForCarousel[catalogPageGenres.fourthCarousel.ruName]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _CatalogPageContent__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _CatalogPageContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2166);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CatalogPageContent__WEBPACK_IMPORTED_MODULE_0__]);
_CatalogPageContent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,3121,5675,1721,6760,8779,5963,9452,4904,2418,5838,5578,603,5304,2833,1175,8071], () => (__webpack_exec__(643)));
module.exports = __webpack_exports__;

})();