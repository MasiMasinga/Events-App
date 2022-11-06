"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllEvents\": () => (/* binding */ getAllEvents),\n/* harmony export */   \"getEventById\": () => (/* binding */ getEventById),\n/* harmony export */   \"getFeaturedEvents\": () => (/* binding */ getFeaturedEvents),\n/* harmony export */   \"getFilteredEvents\": () => (/* binding */ getFilteredEvents)\n/* harmony export */ });\nconst DUMMY_EVENTS = [\n    {\n        id: \"e1\",\n        title: \"Programming for everyone\",\n        description: \"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.\",\n        location: \"Somestreet 25, 12345 San Somewhereo\",\n        date: \"2021-05-12\",\n        image: \"images/coding-event.jpg\",\n        isFeatured: false\n    },\n    {\n        id: \"e2\",\n        title: \"Networking for introverts\",\n        description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n        location: \"New Wall Street 5, 98765 New Work\",\n        date: \"2021-05-30\",\n        image: \"images/introvert-event.jpg\",\n        isFeatured: true\n    },\n    {\n        id: \"e3\",\n        title: \"Networking for extroverts\",\n        description: \"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.\",\n        location: \"My Street 12, 10115 Broke City\",\n        date: \"2022-04-10\",\n        image: \"images/extrovert-event.jpg\",\n        isFeatured: true\n    }\n];\nfunction getFeaturedEvents() {\n    return DUMMY_EVENTS.filter((event)=>event.isFeatured);\n}\nfunction getAllEvents() {\n    return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n    const { year , month  } = dateFilter;\n    let filteredEvents = DUMMY_EVENTS.filter((event)=>{\n        const eventDate = new Date(event.date);\n        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n    });\n    return filteredEvents;\n}\nfunction getEventById(id) {\n    return DUMMY_EVENTS.find((event)=>event.id === id);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kdW1teS1kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxlQUFlO0lBQ2pCO1FBQ0lDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNJO1FBQ0pDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVksS0FBSztJQUNyQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNJO1FBQ0pDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVksSUFBSTtJQUNwQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNJO1FBQ0pDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVksSUFBSTtJQUNwQjtDQUNIO0FBRU0sU0FBU0Msb0JBQW9CO0lBQ2hDLE9BQU9SLGFBQWFTLE1BQU0sQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSCxVQUFVO0FBQzFELENBQUM7QUFFTSxTQUFTSSxlQUFlO0lBQzNCLE9BQU9YO0FBQ1gsQ0FBQztBQUVNLFNBQVNZLGtCQUFrQkMsVUFBVSxFQUFFO0lBQzFDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0Y7SUFFeEIsSUFBSUcsaUJBQWlCaEIsYUFBYVMsTUFBTSxDQUFDLENBQUNDLFFBQVU7UUFDaEQsTUFBTU8sWUFBWSxJQUFJQyxLQUFLUixNQUFNTCxJQUFJO1FBQ3JDLE9BQU9ZLFVBQVVFLFdBQVcsT0FBT0wsUUFBUUcsVUFBVUcsUUFBUSxPQUFPTCxRQUFRO0lBQ2hGO0lBRUEsT0FBT0M7QUFDWCxDQUFDO0FBRU0sU0FBU0ssYUFBYXBCLEVBQUUsRUFBRTtJQUM3QixPQUFPRCxhQUFhc0IsSUFBSSxDQUFDLENBQUNaLFFBQVVBLE1BQU1ULEVBQUUsS0FBS0E7QUFDckQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50cy1hcHAvLi9kdW1teS1kYXRhLmpzP2I0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRFVNTVlfRVZFTlRTID0gW1xuICAgIHtcbiAgICAgICAgaWQ6ICdlMScsXG4gICAgICAgIHRpdGxlOiAnUHJvZ3JhbW1pbmcgZm9yIGV2ZXJ5b25lJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnRXZlcnlvbmUgY2FuIGxlYXJuIHRvIGNvZGUhIFllcywgZXZlcnlvbmUhIEluIHRoaXMgbGl2ZSBldmVudCwgd2UgYXJlIGdvaW5nIHRvIGdvIHRocm91Z2ggYWxsIHRoZSBrZXkgYmFzaWNzIGFuZCBnZXQgeW91IHN0YXJ0ZWQgd2l0aCBwcm9ncmFtbWluZyBhcyB3ZWxsLicsXG4gICAgICAgIGxvY2F0aW9uOiAnU29tZXN0cmVldCAyNSwgMTIzNDUgU2FuIFNvbWV3aGVyZW8nLFxuICAgICAgICBkYXRlOiAnMjAyMS0wNS0xMicsXG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2NvZGluZy1ldmVudC5qcGcnLFxuICAgICAgICBpc0ZlYXR1cmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdlMicsXG4gICAgICAgIHRpdGxlOiAnTmV0d29ya2luZyBmb3IgaW50cm92ZXJ0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJXZSBrbm93OiBOZXR3b3JraW5nIGlzIG5vIGZ1biBpZiB5b3UgYXJlIGFuIGludHJvdmVydCBwZXJzb24uIFRoYXQncyB3aHkgd2UgY2FtZSB1cCB3aXRoIHRoaXMgZXZlbnQgLSBpdCdsbCBiZSBzbyBtdWNoIGVhc2llci4gUHJvbWlzZWQhXCIsXG4gICAgICAgIGxvY2F0aW9uOiAnTmV3IFdhbGwgU3RyZWV0IDUsIDk4NzY1IE5ldyBXb3JrJyxcbiAgICAgICAgZGF0ZTogJzIwMjEtMDUtMzAnLFxuICAgICAgICBpbWFnZTogJ2ltYWdlcy9pbnRyb3ZlcnQtZXZlbnQuanBnJyxcbiAgICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdlMycsXG4gICAgICAgIHRpdGxlOiAnTmV0d29ya2luZyBmb3IgZXh0cm92ZXJ0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ1lvdSBwcm9iYWJseSBuZWVkIG5vIGhlbHAgd2l0aCBuZXR3b3JraW5nIGluIGdlbmVyYWwuIEJ1dCBmb2N1c2luZyB5b3VyIGVuZXJneSBjb3JyZWN0bHkgLSB0aGF0IGlzIHNvbWV0aGluZyB3aGVyZSBtb3N0IHBlb3BsZSBjYW4gaW1wcm92ZS4nLFxuICAgICAgICBsb2NhdGlvbjogJ015IFN0cmVldCAxMiwgMTAxMTUgQnJva2UgQ2l0eScsXG4gICAgICAgIGRhdGU6ICcyMDIyLTA0LTEwJyxcbiAgICAgICAgaW1hZ2U6ICdpbWFnZXMvZXh0cm92ZXJ0LWV2ZW50LmpwZycsXG4gICAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZEV2ZW50cygpIHtcbiAgICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlzRmVhdHVyZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKCkge1xuICAgIHJldHVybiBEVU1NWV9FVkVOVFM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJlZEV2ZW50cyhkYXRlRmlsdGVyKSB7XG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcblxuICAgIGxldCBmaWx0ZXJlZEV2ZW50cyA9IERVTU1ZX0VWRU5UUy5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgICAgICByZXR1cm4gZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZEV2ZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50QnlJZChpZCkge1xuICAgIHJldHVybiBEVU1NWV9FVkVOVFMuZmluZCgoZXZlbnQpID0+IGV2ZW50LmlkID09PSBpZCk7XG59Il0sIm5hbWVzIjpbIkRVTU1ZX0VWRU5UUyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiZGF0ZSIsImltYWdlIiwiaXNGZWF0dXJlZCIsImdldEZlYXR1cmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJnZXRBbGxFdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsImRhdGVGaWx0ZXIiLCJ5ZWFyIiwibW9udGgiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50RGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dummy-data.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dummy-data */ \"./dummy-data.js\");\n\n\nfunction Home() {\n    const featuredEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_1__.getFeaturedEvents)();\n    console.log(featuredEvents);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBa0Q7QUFFbkMsU0FBU0MsT0FBTztJQUM3QixNQUFNQyxpQkFBaUJGLDhEQUFpQkE7SUFDeENHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixxQkFDRSw4REFBQ0c7Ozs7O0FBR0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50cy1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZlYXR1cmVkRXZlbnRzIH0gZnJvbSAnLi4vZHVtbXktZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGZlYXR1cmVkRXZlbnRzID0gZ2V0RmVhdHVyZWRFdmVudHMoKTtcbiAgY29uc29sZS5sb2coZmVhdHVyZWRFdmVudHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImdldEZlYXR1cmVkRXZlbnRzIiwiSG9tZSIsImZlYXR1cmVkRXZlbnRzIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();