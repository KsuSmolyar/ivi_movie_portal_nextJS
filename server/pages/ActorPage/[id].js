(() => {
var exports = {};
exports.id = 9569;
exports.ids = [9569,2092];
exports.modules = {

/***/ 4313:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "filmographyItem_container__5IMFh",
	"filmographyList": "filmographyItem_filmographyList__kOmLn",
	"filmographyItem": "filmographyItem_filmographyItem__6TkoI",
	"filmographyPhoto": "filmographyItem_filmographyPhoto__pr7Fi",
	"filmographyImg": "filmographyItem_filmographyImg__bhpeD",
	"filmographyBody": "filmographyItem_filmographyBody__A0Dav",
	"filmographyInfo": "filmographyItem_filmographyInfo__pRwZT",
	"filmographyTitle": "filmographyItem_filmographyTitle__bGUTN",
	"filmographyRating": "filmographyItem_filmographyRating__4auBC",
	"filmographyRatingSpan": "filmographyItem_filmographyRatingSpan__2HNwl",
	"btn": "filmographyItem_btn__PsPnM"
};


/***/ }),

/***/ 7151:
/***/ ((module) => {

// Exports
module.exports = {
	"tabsList": "actorTabs_tabsList__ggQip",
	"tabsItem": "actorTabs_tabsItem__gssPs",
	"active": "actorTabs_active__iMoWW"
};


/***/ }),

/***/ 9134:
/***/ ((module) => {

// Exports
module.exports = {
	"actorPage": "actorpage_actorPage__rUnIo",
	"back": "actorpage_back__c4D_W",
	"span": "actorpage_span__0XPpX",
	"arrow": "actorpage_arrow__aWjPF",
	"error": "actorpage_error__h2MmT",
	"container": "actorpage_container__2lt7y",
	"filmographyContent": "actorpage_filmographyContent__cXuYl",
	"title": "actorpage_title__pKqEE",
	"label": "actorpage_label__AtxvT",
	"btn": "actorpage_btn__5dz7u",
	"lable": "actorpage_lable__jaQBx"
};


/***/ }),

/***/ 4518:
/***/ ((module) => {

// Exports
module.exports = {
	"personHeader": "personHeader_personHeader__r_psr",
	"figure": "personHeader_figure__WsWLp",
	"photo": "personHeader_photo__CzVSK",
	"info": "personHeader_info__p721w",
	"name": "personHeader_name__GPAY0",
	"alternate": "personHeader_alternate__lPlM4"
};


/***/ }),

/***/ 7244:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "back_btn__u6tsg"
};


/***/ }),

/***/ 9279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const declension = (int, word)=>{
    const str = String(int);
    const arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str.charAt(i));
    }
    const endPosition = arr[arr.length - 1];
    const penultimatePosition = arr[arr.length - 2];
    if (+endPosition == 1 && +penultimatePosition != 1) {
        return `${int} ${word}`;
    }
    if (+endPosition == 0 || +endPosition >= 5 && +endPosition <= 9 || +penultimatePosition == 1) {
        return `${int} ${word}ов`;
    }
    if (+endPosition >= 2 && +endPosition <= 4 && +penultimatePosition != 1) {
        return `${int} ${word}а`;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (declension);


/***/ }),

/***/ 8372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* reexport */ FilmographyItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/entities/FilmographyItem/filmographyItem.module.css
var filmographyItem_module = __webpack_require__(4313);
var filmographyItem_module_default = /*#__PURE__*/__webpack_require__.n(filmographyItem_module);
// EXTERNAL MODULE: ./src/shared/ui/ButtonOrLink/index.ts
var ButtonOrLink = __webpack_require__(3618);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/entities/FilmographyItem/FilmographyItem.tsx





const FilmographyItem = ({ movie  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (filmographyItem_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/MoviePage/${movie.id}`,
                className: (filmographyItem_module_default()).filmographyItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (filmographyItem_module_default()).filmographyPhoto,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (filmographyItem_module_default()).filmographyImg
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (filmographyItem_module_default()).filmographyBody,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (filmographyItem_module_default()).filmographyInfo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (filmographyItem_module_default()).filmographyTitle,
                                children: movie.name
                            }),
                            movie.rating && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (filmographyItem_module_default()).filmographyRating,
                                children: [
                                    "Рейтинг Иви:",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (filmographyItem_module_default()).filmographyRatingSpan,
                                        children: movie.rating
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonOrLink/* default */.Z, {
                        to: `/MoviePage/${movie.id}`,
                        className: (filmographyItem_module_default()).btn,
                        variant: "secondary",
                        children: "Смотреть"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/entities/FilmographyItem/index.ts



/***/ }),

/***/ 2558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ActorTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actorTabs_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7151);
/* harmony import */ var _actorTabs_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_actorTabs_module_css__WEBPACK_IMPORTED_MODULE_3__);




const ActorTabs = ({ tabs  })=>{
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_actorTabs_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabsList),
        children: tabs.map((tab, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: ()=>setSelectedTab(index),
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_actorTabs_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabsItem), index === selectedTab ? (_actorTabs_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : null),
                children: tab
            }, tab))
    });
};


/***/ }),

/***/ 2861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActorPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actorpage_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9134);
/* harmony import */ var _actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _entities_ActorPageLib_lib_helpers_declension___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9279);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(838);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9926);
/* harmony import */ var shared_bisnes_PersonHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2179);
/* harmony import */ var features_ActorTabs_ActorTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2558);
/* harmony import */ var entities_FilmographyItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8372);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_apiService__WEBPACK_IMPORTED_MODULE_2__, i18n__WEBPACK_IMPORTED_MODULE_3__, shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_5__]);
([shared_apiService__WEBPACK_IMPORTED_MODULE_2__, i18n__WEBPACK_IMPORTED_MODULE_3__, shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import ActorPageWiget from 'widgets/ActorPageWiget';








async function getServerSideProps(context) {
    try {
        const { id  } = context.params;
        const actor = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_2__/* .getPerson */ .Ay)(id);
        return {
            props: {
                actor: actor
            }
        };
    } catch  {
        return {
            notFound: true
        };
    }
}
function ActorPage({ actor  }) {
    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [moreMovies, setMoreMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [showMoreMovies, setShowMoreMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,i18n__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (actor.movies) {
            let movies = actor.movies.filter((item)=>item.name !== null);
            if (movies.length > 9) {
                let moviesWithTitle = movies.slice(0, 8);
                let moreMoviesWithTitle = movies.slice(8);
                setMovies(moviesWithTitle);
                setMoreMovies(moreMoviesWithTitle);
            } else {
                setMovies(actor.movies);
            }
        }
    }, [
        actor
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().actorPage), "container"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Back_Back__WEBPACK_IMPORTED_MODULE_5__/* .Back */ .e, {
                className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().back)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_bisnes_PersonHeader__WEBPACK_IMPORTED_MODULE_6__/* .PersonHeader */ .I, {
                        name: actor.name,
                        photo: actor.photo,
                        enName: actor.enName
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().filmography),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().content),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                                        children: [
                                            "Полная фильмография",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().label),
                                                children: (0,_entities_ActorPageLib_lib_helpers_declension___WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(actor?.movies && actor?.movies.filter((item)=>item.name !== null).length, "фильм")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_ActorTabs_ActorTabs__WEBPACK_IMPORTED_MODULE_7__/* .ActorTabs */ .W, {
                                        tabs: [
                                            "Всё"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().filmographyList),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().filmographyContent),
                                    children: [
                                        movies.map((movie)=>movie.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_FilmographyItem__WEBPACK_IMPORTED_MODULE_8__/* .FilmographyItem */ .M, {
                                                movie: movie
                                            }, movie.id)),
                                        !showMoreMovies && moreMovies && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: (_actorpage_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn),
                                            onClick: ()=>setShowMoreMovies(true),
                                            children: [
                                                "Еще ",
                                                (0,_entities_ActorPageLib_lib_helpers_declension___WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(moreMovies.length, "фильм")
                                            ]
                                        }),
                                        showMoreMovies && moreMovies?.map((movie)=>movie.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_FilmographyItem__WEBPACK_IMPORTED_MODULE_8__/* .FilmographyItem */ .M, {
                                                movie: movie
                                            }, movie.id))
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

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

/***/ 2179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ PersonHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/PersonHeader/personHeader.module.css
var personHeader_module = __webpack_require__(4518);
var personHeader_module_default = /*#__PURE__*/__webpack_require__.n(personHeader_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/shared/bisnes/PersonHeader/PersonHeader.tsx




const PersonHeader = ({ photo , name , enName  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (personHeader_module_default()).personHeader,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (personHeader_module_default()).figure,
                children: photo && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 50,
                    height: 50,
                    src: photo,
                    className: (personHeader_module_default()).photo,
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (personHeader_module_default()).info,
                children: [
                    name && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (personHeader_module_default()).name,
                        children: name
                    }),
                    enName && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (personHeader_module_default()).alternate,
                        children: enName
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/bisnes/PersonHeader/index.ts



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

/***/ 3618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ButtonOrLink__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _ButtonOrLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1721);



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
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,3121,5675,1721,6760,8779], () => (__webpack_exec__(2861)));
module.exports = __webpack_exports__;

})();