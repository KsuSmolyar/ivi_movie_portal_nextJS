exports.id = 3816;
exports.ids = [3816];
exports.modules = {

/***/ 5298:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "generaldataoncommentsforthefilm_item__GvfKI",
	"bigNumber": "generaldataoncommentsforthefilm_bigNumber__cvtJf",
	"type": "generaldataoncommentsforthefilm_type__KlSec",
	"positive": "generaldataoncommentsforthefilm_positive__0J2vD",
	"percent": "generaldataoncommentsforthefilm_percent__wuDUc",
	"negative": "generaldataoncommentsforthefilm_negative__tJy_b",
	"neutral": "generaldataoncommentsforthefilm_neutral__BMMoS"
};


/***/ }),

/***/ 8192:
/***/ ((module) => {

// Exports
module.exports = {
	"message": "listcomments_message__uhQ2O",
	"loaderContainer": "listcomments_loaderContainer__DbDVp",
	"loader": "listcomments_loader__mJ7nZ",
	"listComments": "listcomments_listComments__bqipM",
	"ItemComments": "listcomments_ItemComments__kLqSU",
	"commentContainer": "listcomments_commentContainer__ZT2Mn",
	"carouselContainer": "listcomments_carouselContainer__PdVbV",
	"desktop": "listcomments_desktop__XGhB9",
	"mobile": "listcomments_mobile__IHext"
};


/***/ }),

/***/ 7075:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "onecomment_root__RO12_",
	"commentFooter": "onecomment_commentFooter__0bUNt",
	"commentBtn": "onecomment_commentBtn__0Dax0",
	"like": "onecomment_like__L0Xhr",
	"modal": "onecomment_modal__cd708",
	"modalHead": "onecomment_modalHead__QSbJ2",
	"modalComment": "onecomment_modalComment__anrZG",
	"myComment": "onecomment_myComment__2_s1A",
	"modalBlockBtn": "onecomment_modalBlockBtn__EyCWV",
	"modalBtn": "onecomment_modalBtn__q9g31",
	"commentContent": "onecomment_commentContent__uEyLh"
};


/***/ }),

/***/ 1548:
/***/ ((module) => {

// Exports
module.exports = {
	"backDrop": "modal_backDrop__zMv3v"
};


/***/ }),

/***/ 9341:
/***/ ((module) => {

// Exports
module.exports = {
	"pic": "userphoto_pic__ESxQ_",
	"noUser": "userphoto_noUser__PTO0B"
};


/***/ }),

/***/ 241:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "onecommentheader_head__kETEL",
	"author": "onecommentheader_author__R3uR6",
	"name": "onecommentheader_name__JLPl3",
	"data": "onecommentheader_data__OmaQK"
};


/***/ }),

/***/ 6319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ GeneralDataOnCommentsForTheFilm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5298);
/* harmony import */ var _generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 




const GeneralDataOnCommentsForTheFilm = ({ className , comments  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { positive , neutral , negative , positivePercent , negativePercent , neutralPercent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        let positive = 0;
        let negative = 0;
        let neutral = 0;
        comments.docs.map((el)=>{
            switch(el.type){
                case "Позитивный":
                    return positive++;
                case "Нейтральный":
                    return neutral++;
                case "Негативный":
                    return negative++;
                default:
                    return el;
            }
        });
        let positivePercent = (positive * 100 / comments.docs.length).toFixed(2) + " %";
        let negativePercent = (negative * 100 / comments.docs.length).toFixed(2) + " %";
        let neutralPercent = (neutral * 100 / comments.docs.length).toFixed(2) + " %";
        return {
            positive,
            neutral,
            negative,
            positivePercent,
            negativePercent,
            neutralPercent
        };
    }, [
        comments.docs,
        comments.total
    ]);
    return comments.total === 0 ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().list)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().total), (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigNumber)),
                        children: comments.docs.length
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().type),
                        children: t("GeneralDataOnCommentsForTheFilm.total")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().positive), (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigNumber)),
                        children: positive
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().percent),
                        children: [
                            " ",
                            positivePercent
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().type),
                        children: t("GeneralDataOnCommentsForTheFilm.positive")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().negative), (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigNumber)),
                        children: negative
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().percent),
                        children: [
                            " ",
                            negativePercent
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().type),
                        children: t("GeneralDataOnCommentsForTheFilm.negative")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().neutral), (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigNumber)),
                        children: neutral
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().percent),
                        children: [
                            " ",
                            neutralPercent
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_generaldataoncommentsforthefilm_module_css__WEBPACK_IMPORTED_MODULE_4___default().type),
                        children: t("GeneralDataOnCommentsForTheFilm.neutral")
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* harmony import */ var _GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_0__]);
_GeneralDataOnCommentsForTheFilm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ListComments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3827);
/* harmony import */ var _listcomments_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8192);
/* harmony import */ var _listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_ui_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var entities_OneComment_OneComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5961);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_OneComment_OneComment__WEBPACK_IMPORTED_MODULE_4__]);
entities_OneComment_OneComment__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ListComments = ({ all =false  })=>{
    const { pending: commentsPending , comments  } = (0,app_store_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.filmComents);
    if (commentsPending) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().loaderContainer),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Loader__WEBPACK_IMPORTED_MODULE_3__/* .Loader */ .a, {
                className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().loader)
            })
        });
    }
    if (comments?.total === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().message),
        children: "К данному фильму, пока нет комментариев"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().desktop),
                children: comments.docs.map((el)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().ItemComments),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_OneComment_OneComment__WEBPACK_IMPORTED_MODULE_4__/* .OneComment */ .G, {
                            comment: el
                        })
                    }, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().mobile),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Carousel__WEBPACK_IMPORTED_MODULE_6__/* .Carousel */ .l, {
                    withButton: true,
                    scrollMultipleItems: true,
                    carouselContainerClassName: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().carouselContainer),
                    children: comments.docs.map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_listcomments_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentContainer),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_OneComment_OneComment__WEBPACK_IMPORTED_MODULE_4__/* .OneComment */ .G, {
                                comment: el
                            })
                        }, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.nanoid)()))
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* reexport safe */ _ListComments__WEBPACK_IMPORTED_MODULE_0__.e)
/* harmony export */ });
/* harmony import */ var _ListComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListComments__WEBPACK_IMPORTED_MODULE_0__]);
_ListComments__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ OneComment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _onecomment_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7075);
/* harmony import */ var _onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7987);
/* harmony import */ var shared_ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1648);
/* harmony import */ var widgets_OneCommentHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8354);
/* harmony import */ var shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const OneComment = ({ className , comment  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().root), className),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_OneCommentHeader__WEBPACK_IMPORTED_MODULE_5__/* .OneCommentHeader */ .l, {
                        comment: comment
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentContent),
                        children: comment.review
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentFooter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                large: true,
                                variant: "third",
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentBtn), "icon-message_20__0"),
                                onClick: ()=>setModalIsOpen(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: t("sectionTitle.AddComment")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                large: true,
                                variant: "third",
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentBtn), (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().like), "icon-thumbUp_16__0"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: t("sectionTitle.Healthy")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "20"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                large: true,
                                variant: "third",
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentBtn), (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().like), "icon-thumbDown_16__0"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: t("sectionTitle.No")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "5"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            modalIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal), "container"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_OneCommentHeader__WEBPACK_IMPORTED_MODULE_5__/* .OneCommentHeader */ .l, {
                            comment: comment,
                            className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().modalHead)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentContent), (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().modalComment)),
                            children: comment.review
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().myComment),
                            placeholder: "Оставте ваш коментарий"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().modalBlockBtn),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    large: true,
                                    variant: "third",
                                    className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().modalBtn),
                                    children: "Комментировать"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_ButtonOrLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    large: true,
                                    variant: "third",
                                    onClick: ()=>setModalIsOpen(false),
                                    className: (_onecomment_module_css__WEBPACK_IMPORTED_MODULE_7___default().modalBtn),
                                    children: "Закрыть"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
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

/***/ 1648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
// EXTERNAL MODULE: ./src/shared/ui/Modal/modal.module.css
var modal_module = __webpack_require__(1548);
var modal_module_default = /*#__PURE__*/__webpack_require__.n(modal_module);
;// CONCATENATED MODULE: ./src/shared/ui/Modal/Modal.tsx





const Modal = ({ children , className  })=>{
    (0,external_react_.useEffect)(()=>{
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "visible";
        };
    }, []);
    return /*#__PURE__*/ (0,external_react_dom_.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((modal_module_default()).backDrop, className),
        children: children
    }), document.body);
};

;// CONCATENATED MODULE: ./src/shared/ui/Modal/index.ts



/***/ }),

/***/ 1935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ UserPhoto)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userphoto_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9341);
/* harmony import */ var _userphoto_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_userphoto_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





const UserPhoto = ({ src  })=>{
    return src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        width: 50,
        height: 50,
        src: src,
        alt: "",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_userphoto_module_css__WEBPACK_IMPORTED_MODULE_4___default().pic))
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_userphoto_module_css__WEBPACK_IMPORTED_MODULE_4___default().pic), (_userphoto_module_css__WEBPACK_IMPORTED_MODULE_4___default().noUser), "icon-avatar_20__0 ")
    });
};


/***/ }),

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ OneCommentHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/widgets/OneCommentHeader/onecommentheader.module.css
var onecommentheader_module = __webpack_require__(241);
var onecommentheader_module_default = /*#__PURE__*/__webpack_require__.n(onecommentheader_module);
// EXTERNAL MODULE: ./src/shared/user/UserPhoto/UserPhoto.tsx
var UserPhoto = __webpack_require__(1935);
;// CONCATENATED MODULE: ./src/shared/user/UserPhoto/index.ts


// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/widgets/OneCommentHeader/OneCommentHeader.tsx





const OneCommentHeader = ({ comment , className  })=>{
    const name = comment.author.split(" ").slice(0, 1);
    const surName = comment.author.split(" ").slice(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((onecommentheader_module_default()).head, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UserPhoto/* UserPhoto */.c, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (onecommentheader_module_default()).author,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (onecommentheader_module_default()).name,
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (onecommentheader_module_default()).name,
                        children: surName
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (onecommentheader_module_default()).data,
                children: new Date(comment.date).toLocaleDateString()
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/widgets/OneCommentHeader/index.ts



/***/ })

};
;