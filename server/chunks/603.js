"use strict";
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* binding */ addSortTypesSort),
/* harmony export */   "Bw": () => (/* binding */ removeCountriesFilter),
/* harmony export */   "Ki": () => (/* binding */ filteredMoviesPendingSelector),
/* harmony export */   "Kw": () => (/* binding */ removeGenresFilter),
/* harmony export */   "L8": () => (/* binding */ addInputRangeFilter),
/* harmony export */   "NR": () => (/* binding */ clearPersonsList),
/* harmony export */   "O": () => (/* binding */ pendingPersonsSelector),
/* harmony export */   "R$": () => (/* binding */ getFilteredMovies),
/* harmony export */   "R6": () => (/* binding */ removeSortTypesSort),
/* harmony export */   "SL": () => (/* binding */ sortTypesSelectedSelector),
/* harmony export */   "Yu": () => (/* binding */ getSearchPersons),
/* harmony export */   "ZN": () => (/* binding */ getFilteredMoviesPage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_J": () => (/* binding */ personSelector),
/* harmony export */   "a6": () => (/* binding */ isInputRangeSelectedSelector),
/* harmony export */   "aw": () => (/* binding */ resetFilters),
/* harmony export */   "dR": () => (/* binding */ addAllFilters),
/* harmony export */   "fd": () => (/* binding */ addGenresFilter),
/* harmony export */   "hA": () => (/* binding */ filtersCountSelector),
/* harmony export */   "he": () => (/* binding */ addCountriesFilter),
/* harmony export */   "jr": () => (/* binding */ getSelectedFilterSelector),
/* harmony export */   "lo": () => (/* binding */ addInputSearchPersonFilter),
/* harmony export */   "nf": () => (/* binding */ filteredMoviesSelector),
/* harmony export */   "rV": () => (/* binding */ addFilteredMovies),
/* harmony export */   "v1": () => (/* binding */ isGenreSelectedSelector),
/* harmony export */   "xG": () => (/* binding */ removeInputRangeFilter),
/* harmony export */   "xV": () => (/* binding */ isCountrySelectedSelector),
/* harmony export */   "y3": () => (/* binding */ personsListSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_utils_formatterVotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3959);
/* harmony import */ var shared_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(838);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_apiService__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__]);
([shared_apiService__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const initialState = {
    filters: {
        genres: [],
        countries: [],
        rating: null,
        votes: null,
        director: null,
        actor: null
    },
    personsList: [],
    personsPending: false,
    sortTypes: null,
    filteredMovies: [],
    filteredMoviesPending: false
};
const getFilteredMoviesHandler = async (page = "1", { getState , dispatch  })=>{
    const filters = getState().filters.filters;
    const sortType = getState().filters.sortTypes;
    try {
        const response = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_1__/* .getMovies */ .XT)({
            page,
            ["genres.name"]: filters.genres,
            ["countries.name"]: filters.countries,
            ["rating.kp"]: filters.rating ? filters.rating?.toString() + "-10" : "",
            ["votes.kp"]: filters.votes ? filters.votes?.toString() + "-1000000" : "",
            ["persons.name"]: [
                filters.director ?? "",
                filters.actor ?? ""
            ],
            ["sortField"]: sortType ?? "",
            ["sortType"]: "-1"
        });
        return response.docs;
    } catch (err) {
        dispatch((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .onExtraReducersRejected */ .C)({
            title: "Errors.title",
            text: "Errors.getMovies"
        }));
        return [];
    }
};
const getFilteredMoviesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("filters/moviePage-request", getFilteredMoviesHandler);
const getFilteredMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("filters/movie-request", getFilteredMoviesHandler);
const getSearchPersons = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("filters/director-request", async ({ name , profession  }, { dispatch  })=>{
    if (!name) {
        return [];
    }
    try {
        const response = await (0,shared_apiService__WEBPACK_IMPORTED_MODULE_1__/* .getPersons */ .n9)({
            selectFields: "name id",
            sortField: "name",
            sortType: "1",
            name,
            ["movies.enProfession"]: profession,
            limit: "10"
        });
        return response.docs;
    } catch (err) {
        dispatch((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .onExtraReducersRejected */ .C)({
            title: "Errors.title",
            text: "Errors.getPersons"
        }));
        return [];
    }
});
const filters = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filters",
    initialState,
    reducers: {
        addGenresFilter (state, action) {
            state.filters.genres.push(action.payload);
        },
        removeGenresFilter (state, action) {
            state.filters.genres = state.filters.genres.filter((genre)=>genre !== action.payload);
        },
        addCountriesFilter (state, action) {
            state.filters.countries.push(action.payload);
        },
        removeCountriesFilter (state, action) {
            state.filters.countries = state.filters.countries.filter((country)=>country !== action.payload);
        },
        addInputRangeFilter (state, action) {
            state.filters[action.payload.type] = action.payload.value;
        },
        removeInputRangeFilter (state, action) {
            state.filters[action.payload] = null;
        },
        addInputSearchPersonFilter (state, action) {
            state.filters[action.payload.type] = action.payload.value;
        },
        addSortTypesSort (state, action) {
            state.sortTypes = action.payload;
        },
        removeSortTypesSort (state) {
            state.sortTypes = null;
        },
        clearPersonsList (state) {
            state.personsList = [];
            state.personsPending = false;
        },
        resetFilters () {
            return initialState;
        },
        addAllFilters (state, action) {
            state.filters = action.payload;
        },
        addFilteredMovies (state, action) {
            state.filteredMovies = action.payload;
        }
    },
    extraReducers (builder) {
        builder.addCase(getSearchPersons.pending, (state)=>{
            state.personsPending = true;
            state.personsList = [];
        });
        builder.addCase(getFilteredMovies.pending, (state)=>{
            state.filteredMoviesPending = true;
        });
        builder.addCase(getSearchPersons.fulfilled, (state, action)=>{
            state.personsList = action.payload;
            state.personsPending = false;
        });
        builder.addCase(getFilteredMoviesPage.fulfilled, (state, action)=>{
            state.filteredMovies = [
                ...state.filteredMovies,
                ...action.payload
            ];
            state.filteredMoviesPending = false;
        });
        builder.addCase(getFilteredMovies.fulfilled, (state, action)=>{
            state.filteredMovies = action.payload;
            state.filteredMoviesPending = false;
        });
        builder.addCase(getSearchPersons.rejected, (state, action)=>{
            if (!action.meta.aborted) {
                state.personsPending = false;
            }
        });
        builder.addMatcher((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.isAnyOf)(getFilteredMovies.rejected, getFilteredMoviesPage.rejected), (state, action)=>{
            if (!action.meta.aborted) {
                state.filteredMoviesPending = false;
            }
        });
    }
});
const { addGenresFilter , removeGenresFilter , addCountriesFilter , removeCountriesFilter , addInputRangeFilter , removeInputRangeFilter , addInputSearchPersonFilter , clearPersonsList , resetFilters , addSortTypesSort , removeSortTypesSort , addAllFilters , addFilteredMovies  } = filters.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filters);
const personsListSelector = (state)=>state.filters.personsList;
const pendingPersonsSelector = (state)=>state.filters.personsPending;
const getSelectedFilterSelector = (type, t)=>(state)=>{
        const filters = state.filters;
        switch(type){
            case "actor":
                return filters.filters.actor;
            case "director":
                return filters.filters.director;
            case "countries":
                return filters.filters.countries.map((country)=>t(`FilterPanel.${country}`)).join(", ");
            case "votes":
                return filters.filters.votes ? (0,shared_utils_formatterVotes__WEBPACK_IMPORTED_MODULE_3__/* .formatterVotes */ .E)(filters.filters.votes / 1000) : "";
            case "genres":
                return filters.filters.genres.map((genre)=>genre).join(", ");
            case "rating":
                return filters.filters.rating;
        }
    };
const personSelector = (person)=>(state)=>state.filters.filters[person];
const isGenreSelectedSelector = (genre)=>(state)=>state.filters.filters.genres.includes(genre);
const isCountrySelectedSelector = (country)=>(state)=>state.filters.filters.countries.includes(country);
const isInputRangeSelectedSelector = (type, value)=>(state)=>{
        const filterState = state.filters.filters[type];
        if (type === "votes") {
            if (filterState == null) return false;
            const votesNumberDigit = 100000;
            const extremeValueVotes = 10;
            const firstClassUnitFilterState = Math.trunc(filterState / votesNumberDigit);
            const firstClassUnitValue = Math.trunc(value / votesNumberDigit);
            if (firstClassUnitFilterState === firstClassUnitValue) return true;
            if (firstClassUnitFilterState > extremeValueVotes && extremeValueVotes === firstClassUnitValue) {
                return true;
            }
            return false;
        } else {
            return Math.trunc(filterState ?? 0) === value;
        }
    };
const filtersCountSelector = (state)=>Object.values(state.filters.filters).flatMap((filter)=>filter).filter(Boolean).length;
const sortTypesSelectedSelector = (state)=>state.filters.sortTypes;
const filteredMoviesSelector = (state)=>state.filters.filteredMovies;
const filteredMoviesPendingSelector = (state)=>state.filters.filteredMoviesPending;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ formatterVotes)
/* harmony export */ });
const formatterVotes = (value)=>{
    return `${value} к`;
};


/***/ })

};
;