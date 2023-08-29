(() => {
var exports = {};
exports.id = 6916;
exports.ids = [6916,8917,2092];
exports.modules = {

/***/ 3944:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "allparticipants_wrapper__iZnSi",
	"title": "allparticipants_title__IFWyh",
	"content": "allparticipants_content__e_wot",
	"section": "allparticipants_section__bmBxr",
	"poster": "allparticipants_poster__lbB__",
	"rating": "allparticipants_rating__VBukf",
	"ratingValue": "allparticipants_ratingValue__3wJ9d",
	"shortDescription": "allparticipants_shortDescription__v3u_0"
};


/***/ }),

/***/ 5053:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "personslist_root__xNJSu",
	"title": "personslist_title__n89E5",
	"list": "personslist_list__VWlur",
	"item": "personslist_item__CpM_o"
};


/***/ }),

/***/ 9750:
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
/* harmony import */ var _allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3944);
/* harmony import */ var _allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9926);
/* harmony import */ var shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2289);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var widgets_PersonsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3464);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_bisnes_PosterCards_PosterCards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9156);
/* harmony import */ var shared_bisnes_ShortDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1526);
/* harmony import */ var shared_bisnes_RatingMovie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9091);
/* harmony import */ var shared_bisnes_BlockChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(838);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_2__, shared_apiService__WEBPACK_IMPORTED_MODULE_11__]);
([shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_2__, shared_apiService__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














async function getServerSideProps(context) {
    try {
        const { id  } = context.params;
        const film = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_11__/* .getMovie */ .HI)(id);
        return {
            props: {
                film: film
            }
        };
    } catch (err) {
        return {
            notFound: true
        };
    }
}
const AllParticipants = ({ film  })=>{
    const workArr = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (film === undefined) return;
        const _workObj = film.persons.reduce(function(obj, item) {
            const key = item.profession;
            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            obj[key].push(item);
            return obj;
        }, {});
        let _workArr = [];
        for(let key in _workObj){
            _workArr.push(_workObj[key]);
        }
        return _workArr;
    }, [
        film
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().root),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().wrapper), "container"),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                    href: `/MoviePage/${film.id ?? ""}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_2__/* .Back */ .e, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_3__/* .SectionTitle */ .N, {
                    className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().title),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: film.name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().content),
                    children: workArr && workArr.length > 0 && workArr.map((arr)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_PersonsList__WEBPACK_IMPORTED_MODULE_5__/* .PersonsList */ .D, {
                            list: arr,
                            className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().section)
                        }, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.nanoid)());
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().poster),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                            href: `/MoviePage/${film.id ?? ""}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_PosterCards_PosterCards__WEBPACK_IMPORTED_MODULE_7__/* .PosterCards */ .t, {
                                src: film.poster?.url,
                                name: film.name
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().rating),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_RatingMovie__WEBPACK_IMPORTED_MODULE_9__/* .RatingMovie */ .D, {
                                    grade: film.rating ? film.rating.kp : 0,
                                    className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().ratingValue)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_BlockChart__WEBPACK_IMPORTED_MODULE_10__/* .BlockChart */ .T, {
                                    width: 50,
                                    obj: film.rating ?? {
                                        await: 0,
                                        filmCritics: 0,
                                        imdb: 0,
                                        russianFilmCritics: 0
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_ShortDescription__WEBPACK_IMPORTED_MODULE_8__/* .ShortDescription */ .b, {
                            obj: film,
                            className: (_allparticipants_module_css__WEBPACK_IMPORTED_MODULE_13___default().shortDescription),
                            allGenres: true
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllParticipants);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ PersonsList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/widgets/PersonsList/personslist.module.css
var personslist_module = __webpack_require__(5053);
var personslist_module_default = /*#__PURE__*/__webpack_require__.n(personslist_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/shared/bisnes/PersonMiniCard/index.ts + 1 modules
var PersonMiniCard = __webpack_require__(5526);
// EXTERNAL MODULE: ./src/shared/ui/SectionTitle/SectionTitle.tsx
var SectionTitle = __webpack_require__(2289);
;// CONCATENATED MODULE: ./src/widgets/PersonsList/PersonsList.tsx






function PersonsList({ list , className  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (personslist_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* SectionTitle */.N, {
                className: (personslist_module_default()).title,
                children: list[0].profession
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: external_classnames_default()((personslist_module_default()).list, className),
                children: list.map((el)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (personslist_module_default()).item,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PersonMiniCard/* PersonMiniCard */.G, {
                            person: el
                        })
                    }, el.id);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/widgets/PersonsList/index.ts



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
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,3121,5675,6760,8779,4904,5838,5304], () => (__webpack_exec__(9750)));
module.exports = __webpack_exports__;

})();