exports.id = 5452;
exports.ids = [5452];
exports.modules = {

/***/ 2923:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "customselect_root__b8cm4",
	"head": "customselect_head__Jok6O",
	"arrow": "customselect_arrow__5ZU3l",
	"inp": "customselect_inp__WSMSO",
	"dropdownList": "customselect_dropdownList__8MKrI",
	"dropdownItem": "customselect_dropdownItem__zPQmM"
};


/***/ }),

/***/ 5452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ CustomSelect)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/features/CustomSelect/customselect.module.css
var customselect_module = __webpack_require__(2923);
var customselect_module_default = /*#__PURE__*/__webpack_require__.n(customselect_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/features/CustomSelect/CustomSelect.tsx





function CustomSelect({ list , placeholder , func , className , children  }) {
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [value, setValue] = (0,external_react_.useState)(placeholder);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((customselect_module_default()).root, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (customselect_module_default()).head,
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: external_classnames_default()((customselect_module_default()).inp),
                        readOnly: true,
                        value: value
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_classnames_default()((customselect_module_default()).arrow, isOpen ? "icon-arrowUpSquare_16__0" : "icon-arrowDownSquare_16__0")
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (customselect_module_default()).dropdownList,
                children: list ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: list.map((el)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (customselect_module_default()).dropdownItem,
                            onClick: ()=>{
                                setIsOpen(false);
                                setValue(el);
                                func && func(el);
                            },
                            children: el
                        }, (0,toolkit_.nanoid)());
                    })
                }) : children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/features/CustomSelect/index.ts



/***/ })

};
;