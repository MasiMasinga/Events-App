/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/events-search.module.css":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/events-search.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".events-search_form__JEkWK {\\n    margin: 2rem auto;\\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\\n    padding: 1rem;\\n    background-color: white;\\n    border-radius: 6px;\\n    width: 90%;\\n    max-width: 40rem;\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.events-search_controls__34icm {\\n    width: 100%;\\n    display: flex;\\n    gap: 1rem;\\n    flex-direction: column;\\n}\\n\\n.events-search_control___POrM {\\n    flex: 1 1;\\n    display: flex;\\n    gap: 1rem;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.events-search_control___POrM label {\\n    font-weight: bold;\\n    color: 'black';\\n}\\n\\n.events-search_control___POrM select {\\n    font: inherit;\\n    background-color: white;\\n    border-radius: 6px;\\n    width: 70%;\\n    padding: 0.25rem;\\n}\\n\\n.events-search_form__JEkWK button {\\n    width: 100%;\\n    font: inherit;\\n    padding: 0.25rem 0.5rem;\\n    background-color: #03be9f;\\n    border: 1px solid #03be9f;\\n    color: #dafff7;\\n    border-radius: 4px;\\n}\\n\\n@media (min-width: 768px) {\\n    .events-search_form__JEkWK {\\n        flex-direction: row;\\n    }\\n\\n    .events-search_controls__34icm {\\n        width: 80%;\\n        flex-direction: row;\\n    }\\n\\n    .events-search_control___POrM select {\\n        width: 100%;\\n    }\\n\\n    .events-search_form__JEkWK button {\\n        width: 20%;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/events-search.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,iBAAiB;IACjB,wCAAwC;IACxC,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,SAAO;IACP,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,UAAU;QACV,mBAAmB;IACvB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;AACJ\",\"sourcesContent\":[\".form {\\n    margin: 2rem auto;\\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\\n    padding: 1rem;\\n    background-color: white;\\n    border-radius: 6px;\\n    width: 90%;\\n    max-width: 40rem;\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.controls {\\n    width: 100%;\\n    display: flex;\\n    gap: 1rem;\\n    flex-direction: column;\\n}\\n\\n.control {\\n    flex: 1;\\n    display: flex;\\n    gap: 1rem;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.control label {\\n    font-weight: bold;\\n    color: 'black';\\n}\\n\\n.control select {\\n    font: inherit;\\n    background-color: white;\\n    border-radius: 6px;\\n    width: 70%;\\n    padding: 0.25rem;\\n}\\n\\n.form button {\\n    width: 100%;\\n    font: inherit;\\n    padding: 0.25rem 0.5rem;\\n    background-color: #03be9f;\\n    border: 1px solid #03be9f;\\n    color: #dafff7;\\n    border-radius: 4px;\\n}\\n\\n@media (min-width: 768px) {\\n    .form {\\n        flex-direction: row;\\n    }\\n\\n    .controls {\\n        width: 80%;\\n        flex-direction: row;\\n    }\\n\\n    .control select {\\n        width: 100%;\\n    }\\n\\n    .form button {\\n        width: 20%;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"form\": \"events-search_form__JEkWK\",\n\t\"controls\": \"events-search_controls__34icm\",\n\t\"control\": \"events-search_control___POrM\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL2V2ZW50cy1zZWFyY2gubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esc0VBQXNFLHdCQUF3QiwrQ0FBK0Msb0JBQW9CLDhCQUE4Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixvQkFBb0IscUNBQXFDLDZCQUE2QixnQkFBZ0IsR0FBRyxvQ0FBb0Msa0JBQWtCLG9CQUFvQixnQkFBZ0IsNkJBQTZCLEdBQUcsbUNBQW1DLGdCQUFnQixvQkFBb0IsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsR0FBRyx5Q0FBeUMsd0JBQXdCLHFCQUFxQixHQUFHLDBDQUEwQyxvQkFBb0IsOEJBQThCLHlCQUF5QixpQkFBaUIsdUJBQXVCLEdBQUcsdUNBQXVDLGtCQUFrQixvQkFBb0IsOEJBQThCLGdDQUFnQyxnQ0FBZ0MscUJBQXFCLHlCQUF5QixHQUFHLCtCQUErQixrQ0FBa0MsOEJBQThCLE9BQU8sd0NBQXdDLHFCQUFxQiw4QkFBOEIsT0FBTyw4Q0FBOEMsc0JBQXNCLE9BQU8sMkNBQTJDLHFCQUFxQixPQUFPLEdBQUcsT0FBTyxnR0FBZ0csWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLGdDQUFnQyx3QkFBd0IsK0NBQStDLG9CQUFvQiw4QkFBOEIseUJBQXlCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHFDQUFxQyw2QkFBNkIsZ0JBQWdCLEdBQUcsZUFBZSxrQkFBa0Isb0JBQW9CLGdCQUFnQiw2QkFBNkIsR0FBRyxjQUFjLGNBQWMsb0JBQW9CLGdCQUFnQiwwQkFBMEIscUNBQXFDLEdBQUcsb0JBQW9CLHdCQUF3QixxQkFBcUIsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4QixnQ0FBZ0MsZ0NBQWdDLHFCQUFxQix5QkFBeUIsR0FBRywrQkFBK0IsYUFBYSw4QkFBOEIsT0FBTyxtQkFBbUIscUJBQXFCLDhCQUE4QixPQUFPLHlCQUF5QixzQkFBc0IsT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sR0FBRyxtQkFBbUI7QUFDanlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3M/NDI4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50cy1zZWFyY2hfZm9ybV9fSkVrV0sge1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5ldmVudHMtc2VhcmNoX2NvbnRyb2xzX18zNGljbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ldmVudHMtc2VhcmNoX2NvbnRyb2xfX19QT3JNIHtcXG4gICAgZmxleDogMSAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV2ZW50cy1zZWFyY2hfY29udHJvbF9fX1BPck0gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICdibGFjayc7XFxufVxcblxcbi5ldmVudHMtc2VhcmNoX2NvbnRyb2xfX19QT3JNIHNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbi5ldmVudHMtc2VhcmNoX2Zvcm1fX0pFa1dLIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYmU5ZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAzYmU5ZjtcXG4gICAgY29sb3I6ICNkYWZmZjc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5ldmVudHMtc2VhcmNoX2Zvcm1fX0pFa1dLIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLmV2ZW50cy1zZWFyY2hfY29udHJvbHNfXzM0aWNtIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5ldmVudHMtc2VhcmNoX2NvbnRyb2xfX19QT3JNIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuZXZlbnRzLXNlYXJjaF9mb3JtX19KRWtXSyBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2V2ZW50cy1zZWFyY2gubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFPO0lBQ1AsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm0ge1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250cm9sIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250cm9sIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAnYmxhY2snO1xcbn1cXG5cXG4uY29udHJvbCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4uZm9ybSBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2JlOWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM2JlOWY7XFxuICAgIGNvbG9yOiAjZGFmZmY3O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZm9ybSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5jb250cm9scyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuY29udHJvbCBzZWxlY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0gYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9ybVwiOiBcImV2ZW50cy1zZWFyY2hfZm9ybV9fSkVrV0tcIixcblx0XCJjb250cm9sc1wiOiBcImV2ZW50cy1zZWFyY2hfY29udHJvbHNfXzM0aWNtXCIsXG5cdFwiY29udHJvbFwiOiBcImV2ZW50cy1zZWFyY2hfY29udHJvbF9fX1BPck1cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/events-search.module.css\n"));

/***/ })

});