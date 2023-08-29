exports.id = 5838;
exports.ids = [5838];
exports.modules = {

/***/ 2742:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "blockchart_root__DsETs",
	"inp": "blockchart_inp__n4n9k"
};


/***/ }),

/***/ 2160:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ratingmovie_root__gmQYc",
	"left": "ratingmovie_left__OvWF_",
	"right": "ratingmovie_right__5tdsw"
};


/***/ }),

/***/ 5787:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "shortdescription_root__WQ35f",
	"yearCountry": "shortdescription_yearCountry__GBPdy",
	"genre": "shortdescription_genre__own3P",
	"genreBookmarks": "shortdescription_genreBookmarks__G04fV"
};


/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ BlockChart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/BlockChart/blockchart.module.css
var blockchart_module = __webpack_require__(2742);
var blockchart_module_default = /*#__PURE__*/__webpack_require__.n(blockchart_module);
;// CONCATENATED MODULE: ./src/shared/bisnes/BlockChart/BlockChart.tsx



const BlockChart = ({ obj , width  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (blockchart_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                className: (blockchart_module_default()).inp,
                min: "0",
                max: "10",
                value: obj.await ?? 0,
                step: "0,1",
                style: {
                    width: width
                },
                readOnly: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                className: (blockchart_module_default()).inp,
                min: "0",
                max: "10",
                value: obj.filmCritics ?? 0,
                step: "0,1",
                style: {
                    width: width
                },
                readOnly: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                className: (blockchart_module_default()).inp,
                min: "0",
                max: "10",
                value: obj.imdb ?? 0,
                step: "0,1",
                style: {
                    width: width
                },
                readOnly: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                className: (blockchart_module_default()).inp,
                min: "0",
                max: "10",
                value: obj.russianFilmCritics ?? 0,
                step: "0,1",
                style: {
                    width: width
                },
                readOnly: true
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/bisnes/BlockChart/index.ts



/***/ }),

/***/ 9091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ RatingMovie)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/RatingMovie/ratingmovie.module.css
var ratingmovie_module = __webpack_require__(2160);
var ratingmovie_module_default = /*#__PURE__*/__webpack_require__.n(ratingmovie_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/shared/bisnes/RatingMovie/RatingMovie.tsx




const RatingMovie = ({ grade , className  })=>{
    const [integer, decimal] = grade.toFixed(1).split(".");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((ratingmovie_module_default()).root, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (ratingmovie_module_default()).left,
                children: integer
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (ratingmovie_module_default()).right,
                children: [
                    ",",
                    decimal
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/bisnes/RatingMovie/index.ts



/***/ }),

/***/ 1526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ ShortDescription)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/shared/bisnes/ShortDescription/shortdescription.module.css
var shortdescription_module = __webpack_require__(5787);
var shortdescription_module_default = /*#__PURE__*/__webpack_require__.n(shortdescription_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/shared/bisnes/GenreBookmarks/index.ts + 1 modules
var GenreBookmarks = __webpack_require__(4174);
;// CONCATENATED MODULE: ./src/shared/bisnes/ShortDescription/ShortDescription.tsx





const ShortDescription = ({ obj , allGenres =false , className  })=>{
    const countries = obj.countries.map((el)=>el.name);
    const hours = Math.floor(obj.movieLength / 60);
    const min = obj.movieLength - hours * 60;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((shortdescription_module_default()).root, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (shortdescription_module_default()).yearCountry,
                children: [
                    obj.year,
                    ", ",
                    countries.join(", ")
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (shortdescription_module_default()).genre,
                children: allGenres ? /*#__PURE__*/ jsx_runtime_.jsx(GenreBookmarks/* GenreBookmarks */.f, {
                    className: (shortdescription_module_default()).genreBookmarks,
                    genres: obj.genres
                }) : (obj.genres[0]?.name)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (shortdescription_module_default()).duration,
                children: hours < 0 ? obj.movieLength + " мин" : hours + " ч " + min + " мин"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/bisnes/ShortDescription/index.ts



/***/ })

};
;