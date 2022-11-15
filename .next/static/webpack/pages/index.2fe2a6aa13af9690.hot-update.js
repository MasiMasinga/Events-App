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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/event-item.module.css */ \"./styles/event-item.module.css\");\n/* harmony import */ var _styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n\n\n\n// Styles\n\n// Components\n\n// Icons\n\n\n\nconst EventItem = (props)=>{\n    const { id , title , image , date , location  } = props;\n    const humanReadableData = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/\" + image,\n                alt: title,\n                width: 250,\n                height: 160\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().summary),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    children: humanReadableData\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().address),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_address_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                    children: formattedAddress\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                link: exploreLink,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Explore Event\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Documents/Projects/NextJS-Course/Events-App/components/events/event-item.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUVLO0FBRTlCLFNBQVM7QUFDZ0Q7QUFFekQsYUFBYTtBQUNxQjtBQUVsQyxRQUFRO0FBQ2tDO0FBQ007QUFDTztBQUV2RCxNQUFNTyxZQUFZLENBQUNDLFFBQVU7SUFFM0IsTUFBTSxFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFHTDtJQUU3QyxNQUFNTSxvQkFBb0IsSUFBSUMsS0FBS0gsTUFBTUksa0JBQWtCLENBQUMsU0FBUztRQUNuRUMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUVBLE1BQU1DLG1CQUFtQlAsU0FBU1EsT0FBTyxDQUFDLE1BQU07SUFFaEQsTUFBTUMsY0FBYyxXQUFjLE9BQUhiO0lBRS9CLHFCQUNFLDhEQUFDYztRQUFHQyxXQUFXdEIsMkVBQVk7OzBCQUN6Qiw4REFBQ0QsbURBQUtBO2dCQUFDeUIsS0FBSyxNQUFNZjtnQkFBT2dCLEtBQUtqQjtnQkFBT2tCLE9BQU87Z0JBQUtDLFFBQVE7Ozs7OzswQkFDekQsOERBQUNDO2dCQUFJTixXQUFXdEIsOEVBQWU7MEJBQzdCLDRFQUFDNEI7b0JBQUlOLFdBQVd0Qiw4RUFBZTs7c0NBQzdCLDhEQUFDK0I7c0NBQUl2Qjs7Ozs7O3NDQUNMLDhEQUFDb0I7NEJBQUlOLFdBQVd0QiwyRUFBWTs7OENBQzFCLDhEQUFDRSx3REFBUUE7Ozs7OzhDQUNULDhEQUFDOEI7OENBQU1wQjs7Ozs7Ozs7Ozs7O3NDQUVULDhEQUFDZ0I7NEJBQUlOLFdBQVd0Qiw4RUFBZTs7OENBQzdCLDhEQUFDRywyREFBV0E7Ozs7OzhDQUNaLDhEQUFDOEI7OENBQVNmOzs7Ozs7Ozs7Ozs7c0NBRVosOERBQUNVOzRCQUFJTixXQUFXdEIsOEVBQWU7c0NBQzdCLDRFQUFDQyxrREFBTUE7Z0NBQUNrQyxNQUFNZjs7a0RBQ1osOERBQUNnQjtrREFBSzs7Ozs7O2tEQUNOLDhEQUFDQTt3Q0FBS2QsV0FBV3RCLDJFQUFZO2tEQUMzQiw0RUFBQ0ksK0RBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvQjtLQXhDTUM7QUEwQ04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcz82ZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbi8vIFN0eWxlc1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2V2ZW50LWl0ZW0ubW9kdWxlLmNzcyc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvYnV0dG9uJztcblxuLy8gSWNvbnNcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IEFkZHJlc3NJY29uIGZyb20gJy4uL2ljb25zL2FkZHJlc3MtaWNvbic7XG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnLi4vaWNvbnMvYXJyb3ctcmlnaHQtaWNvbic7XG5cbmNvbnN0IEV2ZW50SXRlbSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCBpbWFnZSwgZGF0ZSwgbG9jYXRpb24gfSA9IHByb3BzO1xuXG4gIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRhID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJ1xuICB9KTtcblxuICBjb25zdCBmb3JtYXR0ZWRBZGRyZXNzID0gbG9jYXRpb24ucmVwbGFjZSgnLCAnLCAnXFxuJyk7XG5cbiAgY29uc3QgZXhwbG9yZUxpbmsgPSBgL2V2ZW50cy8ke2lkfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPEltYWdlIHNyYz17Jy8nICsgaW1hZ2V9IGFsdD17dGl0bGV9IHdpZHRoPXsyNTB9IGhlaWdodD17MTYwfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cbiAgICAgICAgICAgIDxEYXRlSWNvbiAvPlxuICAgICAgICAgICAgPHRpbWU+e2h1bWFuUmVhZGFibGVEYXRhfTwvdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cbiAgICAgICAgICAgIDxBZGRyZXNzSWNvbiAvPlxuICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBsaW5rPXtleHBsb3JlTGlua30+XG4gICAgICAgICAgICAgIDxzcGFuPkV4cGxvcmUgRXZlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsImNsYXNzZXMiLCJCdXR0b24iLCJEYXRlSWNvbiIsIkFkZHJlc3NJY29uIiwiQXJyb3dSaWdodEljb24iLCJFdmVudEl0ZW0iLCJwcm9wcyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImh1bWFuUmVhZGFibGVEYXRhIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZEFkZHJlc3MiLCJyZXBsYWNlIiwiZXhwbG9yZUxpbmsiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNvbnRlbnQiLCJzdW1tYXJ5IiwiaDIiLCJ0aW1lIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJsaW5rIiwic3BhbiIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n"));

/***/ })

});