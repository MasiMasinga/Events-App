"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/event-item.module.css */ \"./styles/event-item.module.css\");\n/* harmony import */ var _styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n\n\n\n// Styles\n\n// Components\n\n// Icons\n\n\nconst EventItem = (props)=>{\n    const { id , title , image , date , location  } = props;\n    const humanReadableData = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default().summary),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    children: humanReadableData\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default().address),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_address_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                    children: formattedAddress\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                link: exploreLink,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Explore Event\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0g7QUFFekIsU0FBUztBQUNnRDtBQUV6RCxhQUFhO0FBQ3FCO0FBRWxDLFFBQVE7QUFDa0M7QUFDTTtBQUVoRCxNQUFNTSxZQUFZLENBQUNDLFFBQVU7SUFFM0IsTUFBTSxFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFHTDtJQUU3QyxNQUFNTSxvQkFBb0IsSUFBSUMsS0FBS0gsTUFBTUksa0JBQWtCLENBQUMsU0FBUztRQUNuRUMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUVBLE1BQU1DLG1CQUFtQlAsU0FBU1EsT0FBTyxDQUFDLE1BQU07SUFFaEQsTUFBTUMsY0FBYyxXQUFjLE9BQUhiO0lBRS9CLHFCQUNFLDhEQUFDYztRQUFHQyxXQUFXckIsMkVBQVk7OzBCQUN6Qiw4REFBQ3VCO2dCQUFJQyxLQUFLLE1BQU1oQjtnQkFBT2lCLEtBQUtsQjs7Ozs7OzBCQUM1Qiw4REFBQ21CO2dCQUFJTCxXQUFXckIsOEVBQWU7MEJBQzdCLDRFQUFDMEI7b0JBQUlMLFdBQVdyQiw4RUFBZTs7c0NBQzdCLDhEQUFDNkI7c0NBQUl0Qjs7Ozs7O3NDQUNMLDhEQUFDbUI7NEJBQUlMLFdBQVdyQiwyRUFBWTs7OENBQzFCLDhEQUFDRSx3REFBUUE7Ozs7OzhDQUNULDhEQUFDNEI7OENBQU1uQjs7Ozs7Ozs7Ozs7O3NDQUVULDhEQUFDZTs0QkFBSUwsV0FBV3JCLDhFQUFlOzs4Q0FDN0IsOERBQUNHLDJEQUFXQTs7Ozs7OENBQ1osOERBQUM0Qjs4Q0FBU2Q7Ozs7Ozs7Ozs7OztzQ0FFWiw4REFBQ1M7NEJBQUlMLFdBQVdyQiw4RUFBZTtzQ0FDN0IsNEVBQUNDLGtEQUFNQTtnQ0FBQ2dDLE1BQU1kOzBDQUNaLDRFQUFDZTs4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBCO0tBdENNOUI7QUF3Q04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcz82ZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gU3R5bGVzXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvZXZlbnQtaXRlbS5tb2R1bGUuY3NzJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91aS9idXR0b24nO1xuXG4vLyBJY29uc1xuaW1wb3J0IERhdGVJY29uIGZyb20gJy4uL2ljb25zL2RhdGUtaWNvbic7XG5pbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcblxuY29uc3QgRXZlbnRJdGVtID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBpZCwgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGEgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKCcsICcsICdcXG4nKTtcblxuICBjb25zdCBleHBsb3JlTGluayA9IGAvZXZlbnRzLyR7aWR9YDtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8aW1nIHNyYz17Jy8nICsgaW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgPERhdGVJY29uIC8+XG4gICAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGF9PC90aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxuICAgICAgICAgICAgPEFkZHJlc3NJY29uIC8+XG4gICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0dGVkQWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgICA8QnV0dG9uIGxpbms9e2V4cGxvcmVMaW5rfT5cbiAgICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBFdmVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbSJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJjbGFzc2VzIiwiQnV0dG9uIiwiRGF0ZUljb24iLCJBZGRyZXNzSWNvbiIsIkV2ZW50SXRlbSIsInByb3BzIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaHVtYW5SZWFkYWJsZURhdGEiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJleHBsb3JlTGluayIsImxpIiwiY2xhc3NOYW1lIiwiaXRlbSIsImltZyIsInNyYyIsImFsdCIsImRpdiIsImNvbnRlbnQiLCJzdW1tYXJ5IiwiaDIiLCJ0aW1lIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJsaW5rIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n"));

/***/ })

});