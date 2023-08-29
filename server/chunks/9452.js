exports.id = 9452;
exports.ids = [9452];
exports.modules = {

/***/ 8878:
/***/ ((module) => {

// Exports
module.exports = {
	"carouselContainer": "carousel_carouselContainer__JWG4u",
	"title": "carousel_title__w5_Uo",
	"titleLink": "carousel_titleLink__CQJSp",
	"iconStyle": "carousel_iconStyle__K3lAj",
	"wrapper": "carousel_wrapper__vIIif",
	"carouselContent": "carousel_carouselContent__B4q8_",
	"prevButton": "carousel_prevButton__V9150",
	"nextButton": "carousel_nextButton__IvLpw"
};


/***/ }),

/***/ 9452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/shared/ui/Carousel/carousel.module.css
var carousel_module = __webpack_require__(8878);
var carousel_module_default = /*#__PURE__*/__webpack_require__.n(carousel_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/shared/hooks/useCombinedRefs.ts

function useCombinedRefs(...refs) {
    const targetRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        refs.forEach((ref)=>{
            if (!ref) return;
            if (typeof ref === "function") {
                ref(targetRef.current);
            } else {
                ref.current = targetRef.current;
            }
        });
    }, [
        refs
    ]);
    return targetRef;
}

;// CONCATENATED MODULE: ./src/shared/ui/Carousel/Carousel.tsx






const LAST_ITEM_COUNT = 1;
const CORRECT_COEFFICIENT = 5;
const Carousel = /*#__PURE__*/ external_react_default().forwardRef(({ title , carouselChildrenClassName , carouselContainerClassName , scrollMultipleItems , withButton , children , withArrow , href  }, ref)=>{
    const carouselContentRef = (0,external_react_.useRef)(null);
    const combinedRefs = useCombinedRefs(ref, carouselContentRef);
    const offsetRef = (0,external_react_.useRef)(0);
    const contentWidthRef = (0,external_react_.useRef)(0);
    const [showPrevButton, setShowPrevButton] = (0,external_react_.useState)(false);
    const [showNextButton, setShowNextButton] = (0,external_react_.useState)(true);
    const onNextCLick = ()=>{
        carouselContentRef.current?.scrollBy({
            left: offsetRef.current,
            behavior: "smooth"
        });
    };
    const onPrevCLick = ()=>{
        carouselContentRef.current?.scrollBy({
            left: -offsetRef.current,
            behavior: "smooth"
        });
    };
    const onContentScroll = (event)=>{
        const scrollLeft = event.currentTarget.scrollLeft;
        const scrollWidth = event.currentTarget.scrollWidth - contentWidthRef.current;
        if (scrollLeft > 0) {
            setShowPrevButton(true);
        } else {
            setShowPrevButton(false);
        }
        if (scrollLeft + CORRECT_COEFFICIENT > scrollWidth) {
            setShowNextButton(false);
        } else {
            setShowNextButton(true);
        }
    };
    (0,external_react_.useEffect)(()=>{
        const carouselContent = carouselContentRef.current;
        let carouselContentWidth = 0;
        const resizeObserver = new ResizeObserver((entries)=>{
            for (const carouselContentEntry of entries){
                if (carouselContentEntry.borderBoxSize) {
                    carouselContentWidth = carouselContentEntry.borderBoxSize[0].inlineSize;
                    contentWidthRef.current = carouselContentWidth;
                    const carouselItemWidth = carouselContentEntry.target.children[0].getBoundingClientRect().width;
                    const visibleItemsCount = Math.floor(carouselContentWidth / carouselItemWidth);
                    const scrollItemsCount = scrollMultipleItems ? visibleItemsCount - LAST_ITEM_COUNT : 1;
                    offsetRef.current = carouselItemWidth * scrollItemsCount;
                    if (withButton) {
                        const scrollWidth = carouselContentEntry.target.scrollWidth;
                        const scrollLeft = carouselContentEntry.target.scrollLeft;
                        if (Math.ceil(carouselContentWidth) >= scrollWidth) {
                            setShowNextButton(false);
                        } else if (scrollLeft + CORRECT_COEFFICIENT < scrollWidth - carouselContentWidth) {
                            setShowNextButton(true);
                        }
                    }
                }
            }
        });
        if (carouselContent) {
            resizeObserver.observe(carouselContent);
        }
        return ()=>{
            carouselContent && resizeObserver.unobserve(carouselContent);
        };
    }, [
        carouselContentRef,
        offsetRef,
        scrollMultipleItems,
        withButton
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((carousel_module_default()).carouselContainer, carouselContainerClassName),
        "data-cy": "carusel",
        children: [
            title && href && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                className: (carousel_module_default()).titleLink,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: (carousel_module_default()).title,
                    children: [
                        title,
                        withArrow && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: external_classnames_default()("icon-arrowRight_6x16__0", (carousel_module_default()).iconStyle)
                        })
                    ]
                })
            }),
            title && !href && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: (carousel_module_default()).title,
                children: [
                    title,
                    withArrow && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_classnames_default()("icon-arrowRight_6x16__0", (carousel_module_default()).iconStyle)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (carousel_module_default()).wrapper,
                children: [
                    withButton && showPrevButton && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: external_classnames_default()((carousel_module_default()).prevButton, "icon-arrowLeft_8x20__0"),
                        onClick: onPrevCLick
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: combinedRefs,
                        onScroll: onContentScroll,
                        className: external_classnames_default()((carousel_module_default()).carouselContent, carouselChildrenClassName),
                        children: children
                    }),
                    withButton && showNextButton && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: external_classnames_default()((carousel_module_default()).nextButton, "icon-arrowRight_8x20__0"),
                        onClick: onNextCLick
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/shared/ui/Carousel/index.ts



/***/ })

};
;