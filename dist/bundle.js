/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./AlegreyaSC-Regular.ttf */ \"./src/assets/AlegreyaSC-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: AlegreyaSC;\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\r\n}\r\n\r\n:root {\r\n  --emptysquare: #00000030;\r\n  --missedbg: #ffffff80;\r\n  --hitbg: #ffb6c1cc;\r\n  --validbg: #90ee90cc;\r\n  --shipbg: #2e2e2e80;\r\n  --bodybg: linear-gradient(20deg, #b6009b, #7441e1);\r\n  --last: 2px solid;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: AlegreyaSC, Georgia, 'Times New Roman', Times, serif;\r\n  color: white;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n.whitebg {\r\n  color: #2e2e2e;\r\n  background: white;\r\n  box-shadow: 0 1px 3px 2px #00000020;\r\n  border-radius: 5px;\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  background: var(--bodybg);\r\n  min-height: 100vh;\r\n}\r\n\r\n#turns-status {\r\n  padding: 0.5rem;\r\n}\r\n\r\n#sounds-contr {\r\n  display: flex;\r\n  gap: 0.6rem;\r\n  align-items: center;\r\n}\r\n\r\n#sounds-contr svg {\r\n  height: 25px;\r\n  width: auto;\r\n  fill: white;\r\n}\r\n\r\n#sounds-contr svg:not(.active) {\r\n  display: none;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: lighter;\r\n  color: black;\r\n  background-color: #ffffffa0;\r\n  -webkit-backdrop-filter: blur(15px);\r\n  backdrop-filter: blur(15px);\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\ndialog * {\r\n  font-weight: lighter;\r\n  color: inherit;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#validation-msg {\r\n  display: none;\r\n}\r\n\r\n#validation-msg.active {\r\n  display: block;\r\n  padding: 2px 12px;\r\n  box-shadow: none;\r\n}\r\n\r\n#customize-contr,\r\n#gameover-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#gameover-btns-contr {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#gameover-btns-contr button {\r\n  padding: 6px 30px !important;\r\n}\r\n\r\n#customize-contr span.valid,\r\n.hints .valid {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n#customize-ctrl-contr>span,\r\n#gameover-contr button:hover,\r\n#gameover-contr button {\r\n  outline: none;\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n\r\n#customize-ctrl-contr>span:active,\r\n#gameover-contr button:active {\r\n  box-shadow: none;\r\n}\r\n\r\n#gameover-contr p {\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n\r\n#gameover-contr h2 {\r\n  margin: 0;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"]>div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: #51515180;\r\n}\r\n\r\n#ships-contr>div {\r\n  display: grid;\r\n  gap: 1px;\r\n  grid-template-rows: 25px;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  gap: 1px;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares,\r\n.hints span {\r\n  position: relative;\r\n  border-radius: 3px;\r\n  background-color: var(--emptysquare);\r\n}\r\n\r\n.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg) !important;\r\n}\r\n\r\n.hit {\r\n  background-color: var(--hitbg) !important;\r\n}\r\n\r\n.missed {\r\n  background-color: var(--missedbg) !important;\r\n}\r\n\r\n.missed::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.squares.last-hit {\r\n  border: var(--last);\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\n#hints-contr {\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#hints-contr * {\r\n  color: inherit;\r\n}\r\n\r\n#hints-contr>div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.hints {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#hints-contr span {\r\n  box-shadow: 0 2px 3px 2px #00000020;\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\nfooter {\r\n  color: #2e2e2e;\r\n  background-color: #ffffffa0;\r\n  backdrop-filter: blur(15px);\r\n  -webkit-backdrop-filter: blur(15px);\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  flex-grow: 1;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter * {\r\n  color: inherit;\r\n}\r\n\r\nfooter a {\r\n  font-size: small;\r\n  font-weight: bold;\r\n}\r\n\r\n#bubbles-contr {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.bubbles {\r\n  border-radius: 50%;\r\n  position: fixed;\r\n  background-color: #ffffffa0;\r\n}\r\n\r\n.bubbles:first-child {\r\n  transform: translate(-50%, -50%);\r\n  height: 150px;\r\n  width: 150px;\r\n  animation: bubble1 20s ease-in-out infinite;\r\n}\r\n\r\n.bubbles:nth-child(2) {\r\n  height: 60px;\r\n  width: 60px;\r\n  animation: bubble2 10s ease-in-out infinite;\r\n}\r\n\r\n.bubbles:last-child {\r\n  height: 100px;\r\n  width: 100px;\r\n  animation: bubble3 30s ease-in-out infinite;\r\n}\r\n\r\n@keyframes bubble1 {\r\n  0% {\r\n    scale: 1;\r\n    opacity: 0.12;\r\n  }\r\n\r\n  50% {\r\n    scale: 6;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    scale: 1;\r\n    opacity: 0.12;\r\n  }\r\n}\r\n\r\n@keyframes bubble2 {\r\n  0% {\r\n    scale: 4;\r\n    opacity: 0.06;\r\n  }\r\n\r\n  50% {\r\n    scale: 0.5;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    scale: 4;\r\n    opacity: 0.06;\r\n  }\r\n}\r\n\r\n@keyframes bubble3 {\r\n  0% {\r\n    scale: 3;\r\n    opacity: 0;\r\n    transform: translate(-90px, -100px);\r\n  }\r\n\r\n  50% {\r\n    scale: 5;\r\n    opacity: 0.1;\r\n    transform: translateX(90px);\r\n  }\r\n\r\n  100% {\r\n    scale: 3;\r\n    opacity: 0;\r\n    transform: translate(-90px, 100px);\r\n  }\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  }\r\n\r\n  .board-contr {\r\n    grid-template: repeat(10, 30px) / repeat(10, 30px);\r\n  }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    height: 3px;\r\n    width: 3px;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/congratulations.mp3":
/*!****************************************!*\
  !*** ./src/assets/congratulations.mp3 ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2e4f9ee5476c9356c8af2e0c67ce9c64.mp3\");\n\n//# sourceURL=webpack://battleship/./src/assets/congratulations.mp3?");

/***/ }),

/***/ "./src/assets/gameover.mp3":
/*!*********************************!*\
  !*** ./src/assets/gameover.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6b2eb1aa1ffcec11010767027a9817eb.mp3\");\n\n//# sourceURL=webpack://battleship/./src/assets/gameover.mp3?");

/***/ }),

/***/ "./src/assets/play.mp3":
/*!*****************************!*\
  !*** ./src/assets/play.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a2774fd0d75bdfeed2da4df0c0721032.mp3\");\n\n//# sourceURL=webpack://battleship/./src/assets/play.mp3?");

/***/ }),

/***/ "./src/assets/shipsunk.mp3":
/*!*********************************!*\
  !*** ./src/assets/shipsunk.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5903e44dd8166800195d9aa7a2804534.mp3\");\n\n//# sourceURL=webpack://battleship/./src/assets/shipsunk.mp3?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pubsub */ \"./src/modules/pubsub.js\");\n/* harmony import */ var _modules_battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/battleship */ \"./src/modules/battleship.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/soundfx */ \"./src/modules/soundfx.js\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n(() => {\r\n  let player1 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player(\"\"),\r\n    player2 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player(\"\", true, __webpack_require__.g.Worker ? true : false);\r\n\r\n  _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.playerBoardCustomized, setPlayer);\r\n  _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.initBoard, startGameLoop);\r\n  _modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initPage();\r\n\r\n  function setPlayer(areasList) {\r\n    areasList.forEach(player1.addShip.bind(player1));\r\n    _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.initBoard, {\r\n      board1: player1.gameBoard,\r\n      board2: player2.gameBoard,\r\n    });\r\n  }\r\n\r\n  function checkWin(p1 = player1, p2 = player2) {\r\n    if (p1.gameBoard.areAllSunk()) {\r\n      return p2;\r\n    } else if (p2.gameBoard.areAllSunk()) {\r\n      return p1;\r\n    }\r\n    return null;\r\n  }\r\n\r\n  async function startGameLoop() {\r\n    const turnsQueue = [player1, player2];\r\n    while (true) {\r\n      const player = turnsQueue.shift(),\r\n        enemy = turnsQueue[0];\r\n\r\n      _modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"].writeMessage(player.isComputer ? \"Waiting for computer...\" : \"Your Turn\");\r\n\r\n      const pos = await player.play(enemy.gameBoard),\r\n        attackedShip = enemy.gameBoard.receiveAttack(pos);\r\n\r\n      enemy.gameBoard.sunkShipLast\r\n        ? _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playShipSunkSound()\r\n        : _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__[\"default\"].play();\r\n\r\n      _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.boardsChanged, {\r\n        board1: player1.gameBoard,\r\n        board2: player2.gameBoard,\r\n      });\r\n\r\n      const winner = checkWin();\r\n      if (winner) {\r\n        _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.gameOver, winner);\r\n        winner.isComputer\r\n          ? _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playGameOverSound()\r\n          : _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playCongSound();\r\n        _modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"].writeMessage(winner.isComputer ? \"You Loose!\" : \"You Win!\");\r\n        return;\r\n      } else {\r\n        if (attackedShip) {\r\n          // Play again\r\n          turnsQueue.pop();\r\n          turnsQueue.push(player, enemy);\r\n        } else {\r\n          turnsQueue.push(player);\r\n        }\r\n      }\r\n    }\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/battleship.js":
/*!***********************************!*\
  !*** ./src/modules/battleship.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   validateAreas: () => (/* binding */ validateAreas)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\r\n\r\nclass Ship {\r\n  length;\r\n  hits = 0;\r\n\r\n  constructor(length) {\r\n    this.length = length;\r\n  }\r\n\r\n  hit() {\r\n    this.hits++;\r\n  }\r\n  isSunk() {\r\n    return this.length <= this.hits;\r\n  }\r\n}\r\n\r\nclass GameBoard {\r\n  board = new Map();\r\n  ships = new Set();\r\n  missedAttacks = new Set();\r\n  lastAttacked = null;\r\n  sunkShipLast = false;\r\n\r\n  constructor(addRandomShips = true) {\r\n    this.#initBoard();\r\n    if (addRandomShips) this.#addShips();\r\n  }\r\n\r\n  receiveAttack(square) {\r\n    this.lastAttacked = square;\r\n    this.sunkShipLast = false;\r\n\r\n    for (const shipObj of this.ships) {\r\n      if (shipObj.coords.has(square)) {\r\n        shipObj.hitCoords.add(square);\r\n        shipObj.ship.hit();\r\n\r\n        if (shipObj.ship.isSunk()) this.sunkShipLast = true;\r\n\r\n        // Attack adjacent squares if ship is sunk\r\n        if (shipObj.ship.isSunk()) {\r\n          for (const pos of shipObj.coords) {\r\n            [...this.getAdjSquares(pos)]\r\n              .filter(\r\n                (obj) =>\r\n                  !(\r\n                    this.missedAttacks.has(obj.square) ||\r\n                    shipObj.coords.has(obj.square)\r\n                  )\r\n              )\r\n              .forEach((squareObj) => this.missedAttacks.add(squareObj.square));\r\n          }\r\n        }\r\n\r\n        return true;\r\n      }\r\n    }\r\n\r\n    this.missedAttacks.add(square);\r\n    return false;\r\n  }\r\n\r\n  addSquare(square) {\r\n    this.board.set(square, { square, adjSquares: new Set() });\r\n  }\r\n\r\n  connectSquare(square1, square2) {\r\n    if (this.board.has(square1) && this.board.has(square2)) {\r\n      this.board.get(square1).adjSquares.add(this.board.get(square2));\r\n      this.board.get(square2).adjSquares.add(this.board.get(square1));\r\n    }\r\n  }\r\n\r\n  getAdjSquares(square) {\r\n    return this.board.get(square).adjSquares;\r\n  }\r\n\r\n  areNeighboors(square1, square2) {\r\n    return this.board.get(square1).adjSquares.has(square2);\r\n  }\r\n\r\n  areAllSunk() {\r\n    if (!this.ships.size) return null;\r\n    return [...this.ships]\r\n      .map((shipObj) => shipObj.ship.isSunk())\r\n      .every((val) => val === true);\r\n  }\r\n\r\n  getAvailableSquares() {\r\n    const boardSquares = [...this.board.keys()],\r\n      shipPosAttacked = [...this.ships].flatMap((obj) => [...obj.hitCoords]);\r\n    const squareSet = boardSquares.filter(\r\n      (square) =>\r\n        !(this.missedAttacks.has(square) || shipPosAttacked.includes(square))\r\n    );\r\n\r\n    return [...squareSet];\r\n  }\r\n\r\n  #initBoard() {\r\n    // Add squares\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        this.addSquare(`${i},${j}`);\r\n      }\r\n    }\r\n\r\n    // Connect squares\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        const currPos = `${i},${j}`;\r\n        this.connectSquare(currPos, `${i + 1},${j}`);\r\n        this.connectSquare(currPos, `${i - 1},${j}`);\r\n        this.connectSquare(currPos, `${i},${j + 1}`);\r\n        this.connectSquare(currPos, `${i},${j - 1}`);\r\n        this.connectSquare(currPos, `${i + 1},${j + 1}`);\r\n        this.connectSquare(currPos, `${i - 1},${j - 1}`);\r\n        this.connectSquare(currPos, `${i + 1},${j - 1}`);\r\n        this.connectSquare(currPos, `${i - 1},${j + 1}`);\r\n      }\r\n    }\r\n  }\r\n  #addShips() {\r\n    this.#addShip(new Ship(5), this.#getRandomBool());\r\n    this.#addShip(new Ship(4), this.#getRandomBool());\r\n    this.#addShip(new Ship(3), this.#getRandomBool());\r\n    this.#addShip(new Ship(3), this.#getRandomBool());\r\n    this.#addShip(new Ship(2), this.#getRandomBool());\r\n  }\r\n  #getRandomBool() {\r\n    return Math.floor(Math.random() * 2) === 1 ? true : false;\r\n  }\r\n  #addShip(ship, isVertical = false) {\r\n    this.ships.add({\r\n      ship,\r\n      coords: this.#createShipCoords(ship, isVertical),\r\n      hitCoords: new Set(),\r\n    });\r\n  }\r\n  #createShipCoords(ship, isVertical) {\r\n    const x = Math.floor(Math.random() * 10),\r\n      y = Math.floor(Math.random() * 10),\r\n      coordsList = new Set();\r\n\r\n    // Loop through the length of the ship to check if 'pos' is valid\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (isVertical) {\r\n        const pos = `${x},${y + i}`;\r\n        if (this.isValidPos(pos)) {\r\n          coordsList.add(pos);\r\n          continue;\r\n        }\r\n        return this.#createShipCoords(ship, isVertical);\r\n      } else {\r\n        const pos = `${x + i},${y}`;\r\n        if (this.isValidPos(pos)) {\r\n          coordsList.add(pos);\r\n          continue;\r\n        }\r\n        return this.#createShipCoords(ship, isVertical);\r\n      }\r\n    }\r\n    return coordsList;\r\n  }\r\n\r\n  isValidPos(pos) {\r\n    if (!this.board.has(pos)) return false;\r\n\r\n    const list = [...this.ships].flatMap((obj) => [...obj.coords]);\r\n    if (list.includes(pos)) return false;\r\n\r\n    const adjPos = [...this.board.get(pos).adjSquares].map((obj) => obj.square);\r\n\r\n    for (let i = 0; i < list.length; i++) {\r\n      if (adjPos.includes(list[i])) return false;\r\n    }\r\n    return true;\r\n  }\r\n}\r\n\r\nclass Player {\r\n  name;\r\n  gameBoard;\r\n\r\n  constructor(name, isComputer = false, useWorker = false) {\r\n    this.name = name;\r\n    this.isComputer = isComputer;\r\n    if (isComputer) {\r\n      this.gameBoard = new GameBoard();\r\n    } else {\r\n      this.gameBoard = new GameBoard(false);\r\n    }\r\n\r\n    if (useWorker)\r\n      this.worker = new Worker(\r\n        new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"src_modules_battleship_worker_js\"), __webpack_require__.b)\r\n      );\r\n  }\r\n\r\n  addShip(area) {\r\n    if (this.#isValidArea(area)) {\r\n      this.gameBoard.ships.add({\r\n        ship: new Ship(area.length),\r\n        coords: new Set(area),\r\n        hitCoords: new Set(),\r\n      });\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  #isValidArea(area) {\r\n    // Verify that all coordinates in area are adjacent...\r\n    // ...and not diagonal\r\n    for (let i = 0; i < area.length; i++) {\r\n      if (area[i + 1]) {\r\n        const currPos = area[i].split(\",\"),\r\n          nextPos = area[i + 1].split(\",\");\r\n        if (\r\n          !(\r\n            parseInt(currPos[0]) + 1 == nextPos[0] ||\r\n            parseInt(currPos[0]) - 1 == nextPos[0] ||\r\n            parseInt(currPos[0]) + 1 == nextPos[1] ||\r\n            parseInt(currPos[0]) - 1 == nextPos[1] ||\r\n            parseInt(currPos[1]) + 1 == nextPos[0] ||\r\n            parseInt(currPos[1]) - 1 == nextPos[0] ||\r\n            parseInt(currPos[1]) + 1 == nextPos[1] ||\r\n            parseInt(currPos[1]) - 1 == nextPos[1]\r\n          ) ||\r\n          [parseInt(currPos[0]) + 1, parseInt(currPos[1]) + 1].toString() ===\r\n            area[i + 1] ||\r\n          [parseInt(currPos[0]) - 1, parseInt(currPos[1]) - 1].toString() ===\r\n            area[i + 1] ||\r\n          [parseInt(currPos[0]) + 1, parseInt(currPos[1]) - 1].toString() ===\r\n            area[i + 1] ||\r\n          [parseInt(currPos[0]) - 1, parseInt(currPos[1]) + 1].toString() ===\r\n            area[i + 1]\r\n        )\r\n          return false;\r\n      }\r\n    }\r\n    return area.every(this.gameBoard.isValidPos.bind(this.gameBoard));\r\n  }\r\n\r\n  randomSquare(board) {\r\n    const avalableSquares = board.getAvailableSquares();\r\n    return avalableSquares[Math.floor(Math.random() * avalableSquares.length)];\r\n  }\r\n\r\n  #canExistShip(board, pos, shipLength, isVertical = false) {\r\n    const area = [];\r\n    for (let i = 0; i < shipLength; i++) {\r\n      if (isVertical) {\r\n        area.push(`${pos[0]},${parseInt(pos[2]) + i}`);\r\n      } else {\r\n        area.push(`${parseInt(pos[0]) + i},${pos[2]}`);\r\n      }\r\n    }\r\n\r\n    if (!validateAreas([area])) return false;\r\n\r\n    const hitAreas = [...board.ships].flatMap((shipObj) => [\r\n      ...shipObj.hitCoords,\r\n    ]);\r\n    try {\r\n      area.forEach((pos) => {\r\n        if (board.missedAttacks.has(pos) || hitAreas.includes(pos))\r\n          throw new Error();\r\n      });\r\n    } catch {\r\n      return false;\r\n    }\r\n\r\n    return area;\r\n  }\r\n\r\n  getBestSquare(board) {\r\n    let bestSquares = [],\r\n      maxProb = -Infinity,\r\n      probMap = this.#calcProbMap(board);\r\n\r\n    // Group squares with the highest values together\r\n    for (const square of probMap.keys()) {\r\n      if (probMap.get(square) > maxProb) {\r\n        bestSquares = [square];\r\n        maxProb = probMap.get(square);\r\n      } else if (probMap.get(square) === maxProb) {\r\n        bestSquares.push(square);\r\n      }\r\n    }\r\n\r\n    // Return a random square with the highest probability\r\n    return bestSquares[Math.floor(Math.random() * bestSquares.length)];\r\n  }\r\n\r\n  #calcProbMap(board) {\r\n    let probMap = new Map();\r\n\r\n    for (let x = 0; x < 10; x++) {\r\n      for (let y = 0; y < 10; y++) {\r\n        probMap.set(`${x},${y}`, 0);\r\n      }\r\n    }\r\n\r\n    board.ships.forEach((shipObj) => {\r\n      if (!shipObj.ship.isSunk()) {\r\n        board.board.forEach((_val, pos) => {\r\n          const vertical = this.#canExistShip(\r\n              board,\r\n              pos,\r\n              shipObj.ship.length,\r\n              true\r\n            ),\r\n            horizontal = this.#canExistShip(\r\n              board,\r\n              pos,\r\n              shipObj.ship.length,\r\n              false\r\n            );\r\n\r\n          if (vertical)\r\n            vertical.forEach((pos) => probMap.set(pos, probMap.get(pos) + 1));\r\n          if (horizontal)\r\n            horizontal.forEach((pos) => probMap.set(pos, probMap.get(pos) + 1));\r\n          const hits = [...board.ships].flatMap((shipObj) => [\r\n            ...shipObj.hitCoords,\r\n          ]);\r\n          hits.forEach((hit) => {\r\n            [...board.getAdjSquares(hit)]\r\n              .filter((obj) => {\r\n                const square = obj.square;\r\n                if (\r\n                  `${parseInt(hit[0]) + 1},${parseInt(hit[2]) + 1}` ===\r\n                    square ||\r\n                  `${parseInt(hit[0]) - 1},${parseInt(hit[2]) - 1}` ===\r\n                    square ||\r\n                  `${parseInt(hit[0]) + 1},${parseInt(hit[2]) - 1}` ===\r\n                    square ||\r\n                  `${parseInt(hit[0]) - 1},${parseInt(hit[2]) + 1}` === square\r\n                )\r\n                  return false;\r\n                else return true;\r\n              })\r\n              .forEach((obj) => {\r\n                const square = obj.square;\r\n                if (\r\n                  !hits.includes(square) &&\r\n                  !board.missedAttacks.has(square)\r\n                ) {\r\n                  if (\r\n                    hits.includes(`${parseInt(square[0]) + 2},${square[2]}`) ||\r\n                    hits.includes(`${parseInt(square[0]) - 2},${square[2]}`) ||\r\n                    hits.includes(`${square[0]},${parseInt(square[2]) + 2}`) ||\r\n                    hits.includes(`${square[0]},${parseInt(square[2]) - 2}`)\r\n                  )\r\n                    probMap.set(square, probMap.get(square) + 5); //Increase probability in the direction of the ship\r\n                  probMap.set(square, probMap.get(square) + 1);\r\n                }\r\n              });\r\n          });\r\n        });\r\n      }\r\n    });\r\n\r\n    return probMap;\r\n  }\r\n\r\n  async play(board) {\r\n    if (this.isComputer) {\r\n      await new Promise((res) => setTimeout(res, 220)); // Simulate delay\r\n\r\n      return this.worker\r\n        ? new Promise((res) => {\r\n            this.worker.onmessage = (e) => {\r\n              res(e.data);\r\n            };\r\n            this.worker.postMessage(board);\r\n          })\r\n        : Promise.resolve(this.getBestSquare(board));\r\n    } else {\r\n      return new Promise((res) => {\r\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.userPlayed, handler);\r\n\r\n        function handler(square) {\r\n          res(square);\r\n          _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unSubscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.userPlayed, handler);\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\nfunction validateAreas(areasList) {\r\n  const p = new Player(\"\", false);\r\n  try {\r\n    areasList.forEach((area) => {\r\n      if (!p.addShip(area)) throw new Error();\r\n    });\r\n    return true;\r\n  } catch {\r\n    return false;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/battleship.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleship */ \"./src/modules/battleship.js\");\n\r\n\r\n\r\n\r\nconst customizingModal = (() => {\r\n  let _draggingLength,\r\n    _isVertical = false,\r\n    _currShipArea = [],\r\n    _shipAreas = [],\r\n    _board = new _battleship__WEBPACK_IMPORTED_MODULE_2__.GameBoard(false);\r\n\r\n  function isOrientationVertical() {\r\n    return _isVertical;\r\n  }\r\n\r\n  function switchOrientation() {\r\n    _isVertical = !_isVertical;\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shipsContr.setAttribute(\"data-isvertical\", _isVertical);\r\n  }\r\n\r\n  function setDraggingLength(length) {\r\n    _draggingLength = length;\r\n  }\r\n\r\n  function _clearBoard() {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dialogBoard.childNodes.forEach(\r\n      (child) => (child.className = \"squares\")\r\n    );\r\n  }\r\n\r\n  function _clearBoardValidity() {\r\n    const validitySquares = _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dialogBoard.querySelectorAll(\r\n      \"span.valid, span.invalid\"\r\n    );\r\n    validitySquares.forEach((square) => {\r\n      square.classList.remove(\"valid\");\r\n      square.classList.remove(\"invalid\");\r\n    });\r\n  }\r\n\r\n  function revealSquaresValidity(e) {\r\n    e.preventDefault();\r\n    if (e.target === e.currentTarget) return;\r\n    _clearBoardValidity();\r\n\r\n    const areasList = [],\r\n      altAreasList = [],\r\n      square = e.target.getAttribute(\"data-square-index\");\r\n\r\n    for (let i = 0; i < _draggingLength; i++) {\r\n      _isVertical\r\n        ? areasList.push(`${square[0]},${parseInt(square[2]) + i}`)\r\n        : areasList.push(`${parseInt(square[0]) + i},${square[2]}`);\r\n    }\r\n    for (let i = 0; i < _draggingLength; i++) {\r\n      _isVertical\r\n        ? altAreasList.push(`${square[0]},${parseInt(square[2]) - i}`)\r\n        : altAreasList.push(`${parseInt(square[0]) - i},${square[2]}`);\r\n    }\r\n\r\n    if ((0,_battleship__WEBPACK_IMPORTED_MODULE_2__.validateAreas)([..._shipAreas, areasList])) {\r\n      areasList.forEach((pos) =>\r\n        document\r\n          .querySelector(`[data-square-index='${pos}']`)\r\n          .classList.add(\"valid\")\r\n      );\r\n      _currShipArea = areasList;\r\n    } else if ((0,_battleship__WEBPACK_IMPORTED_MODULE_2__.validateAreas)([..._shipAreas, altAreasList])) {\r\n      altAreasList.forEach((pos) =>\r\n        document\r\n          .querySelector(`[data-square-index='${pos}']`)\r\n          .classList.add(\"valid\")\r\n      );\r\n      _currShipArea = altAreasList;\r\n    } else {\r\n      _currShipArea = [];\r\n    }\r\n  }\r\n\r\n  function dropShip(e) {\r\n    _clearBoardValidity();\r\n\r\n    if (_currShipArea.length && _shipAreas.length < 5) {\r\n      e.target.remove();\r\n      _shipAreas.push(_currShipArea);\r\n      _currShipArea = [];\r\n      _updateBoard();\r\n    }\r\n  }\r\n\r\n  function randomizeBoard() {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shipsContr.innerHTML = null;\r\n    _board = new _battleship__WEBPACK_IMPORTED_MODULE_2__.GameBoard();\r\n    _shipAreas = [..._board.ships].map((shipObj) => [...shipObj.coords]);\r\n    _updateBoard();\r\n  }\r\n\r\n  function _updateBoard() {\r\n    _clearBoard();\r\n    _shipAreas\r\n      .flatMap((arr) => arr)\r\n      .forEach((square) =>\r\n        document\r\n          .querySelector(`[data-square-index='${square}']`)\r\n          .classList.add(\"ship-pos\")\r\n      );\r\n  }\r\n\r\n  function _validateShips() {\r\n    if (_shipAreas.length !== 5) {\r\n      _writeValidationMsg(\"Drop all 5 ships on the board!\", 3000);\r\n      return false;\r\n    } else return true;\r\n  }\r\n\r\n  function _writeValidationMsg(msg, delay = null) {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validationMsg.textContent = msg;\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validationMsg.classList.add(\"active\");\r\n\r\n    if (delay !== null) setTimeout(_removeValidationMsg, delay);\r\n  }\r\n\r\n  function _removeValidationMsg() {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validationMsg.textContent = \"\";\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validationMsg.classList.remove(\"active\");\r\n  }\r\n\r\n  function exitModal() {\r\n    if (_validateShips()) {\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].customizingDialog.close();\r\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.playerBoardCustomized, _shipAreas);\r\n    }\r\n  }\r\n\r\n  return {\r\n    setDraggingLength,\r\n    switchOrientation,\r\n    isOrientationVertical,\r\n    revealSquaresValidity,\r\n    dropShip,\r\n    randomizeBoard,\r\n    exitModal,\r\n  };\r\n})();\r\n\r\nconst gameOverModal = (() => {\r\n  function showStatus(title, txt) {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOverTitle.textContent = title;\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOverTxt.textContent = txt;\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOverDialog.showModal();\r\n  }\r\n\r\n  function exitModal() {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOverDialog.close();\r\n  }\r\n\r\n  return { showStatus, exitModal };\r\n})();\r\n\r\nconst gameBoards = (() => {\r\n  function initBoards() {\r\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.initBoard, _updateBoards);\r\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.boardsChanged, _updateBoards);\r\n  }\r\n\r\n  function _updateBoards({ board1, board2 }) {\r\n    board1.missedAttacks.forEach(\r\n      _getIteratorCallback(\"missed\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1)\r\n    );\r\n    [...board1.ships]\r\n      .flatMap((shipObj) => [...shipObj.coords])\r\n      .forEach(_getIteratorCallback(\"ship-pos\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1));\r\n    [...board1.ships]\r\n      .flatMap((shipObj) => [...shipObj.hitCoords])\r\n      .forEach(_getIteratorCallback(\"hit\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1));\r\n    if (board1.lastAttacked) {\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1\r\n        .querySelectorAll(\".last-hit\")\r\n        .forEach((node) => node.classList.remove(\"last-hit\"));\r\n\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1\r\n        .querySelector(`[data-square-index=\"${board1.lastAttacked}\"]`)\r\n        .classList.add(\"last-hit\");\r\n    }\r\n\r\n    board2.missedAttacks.forEach(\r\n      _getIteratorCallback(\"missed\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2)\r\n    );\r\n    [...board2.ships]\r\n      .flatMap((shipObj) => [...shipObj.hitCoords])\r\n      .forEach(_getIteratorCallback(\"hit\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2));\r\n    if (board2.lastAttacked) {\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2\r\n        .querySelectorAll(\".last-hit\")\r\n        .forEach((node) => node.classList.remove(\"last-hit\"));\r\n\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2\r\n        .querySelector(`[data-square-index=\"${board2.lastAttacked}\"]`)\r\n        .classList.add(\"last-hit\");\r\n    }\r\n  }\r\n\r\n  // Callback generator\r\n  function _getIteratorCallback(className, board) {\r\n    return (square) =>\r\n      board\r\n        .querySelector(`[data-square-index='${square}']`)\r\n        .classList.add(className);\r\n  }\r\n\r\n  return { initBoards };\r\n})();\r\n\r\nconst display = (() => {\r\n  function initPage() {\r\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.gameOver, (winner) =>\r\n      winner.isComputer\r\n        ? gameOverModal.showStatus(\"Game Over!\", \"You Loose.\")\r\n        : gameOverModal.showStatus(\"Congratulations!\", \" You Win.\")\r\n    );\r\n\r\n    _clearBoards(_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dialogBoard, _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1, _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2);\r\n\r\n    // Draw boards\r\n    const board = [];\r\n    for (let x = 9; x >= 0; x--) {\r\n      const arr = [];\r\n      for (let y = 9; y >= 0; y--) {\r\n        arr.push(`${y},${x}`);\r\n      }\r\n      board.push(...arr.reverse());\r\n    }\r\n    board.forEach((square) => {\r\n      const node = document.createElement(\"span\");\r\n      node.setAttribute(\"data-square-index\", square);\r\n      node.className = \"squares\";\r\n\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dialogBoard.appendChild(node.cloneNode());\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard1.appendChild(node.cloneNode());\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2.appendChild(node);\r\n    });\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].customizingDialog.showModal();\r\n    gameBoards.initBoards();\r\n    _addEvents();\r\n  }\r\n\r\n  function _clearBoards(...boards) {\r\n    boards.forEach((b) => (b.innerHTML = null));\r\n  }\r\n\r\n  function _addEvents() {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shipsContr.addEventListener(\"dragstart\", (e) =>\r\n      customizingModal.setDraggingLength(e.target.children.length)\r\n    );\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dialogBoard.addEventListener(\r\n      \"dragover\",\r\n      customizingModal.revealSquaresValidity\r\n    );\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shipsContr.addEventListener(\"dragend\", customizingModal.dropShip);\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].customizeBtns.addEventListener(\"click\", (e) => {\r\n      switch (e.target.getAttribute(\"data-action\")) {\r\n        case \"rotate\":\r\n          return customizingModal.switchOrientation();\r\n        case \"random\":\r\n          return customizingModal.randomizeBoard();\r\n        case \"start\":\r\n          return customizingModal.exitModal();\r\n      }\r\n    });\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeBtn.addEventListener(\"click\", gameOverModal.exitModal);\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].restartBtn.addEventListener(\"click\", () => location.reload());\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerBoard2.addEventListener(\"click\", (e) => {\r\n      const square = e.target.getAttribute(\"data-square-index\");\r\n      if (square && e.target.className === \"squares\")\r\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.userPlayed, square);\r\n    });\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOn.addEventListener(\"click\", () => {\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOn.classList.remove(\"active\");\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOff.classList.add(\"active\");\r\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.soundonClicked, null);\r\n    });\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOff.addEventListener(\"click\", () => {\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOn.classList.add(\"active\");\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].soundOff.classList.remove(\"active\");\r\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.soundoffClicked, null);\r\n    });\r\n  }\r\n\r\n  function writeMessage(msg, delay = null) {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].turnStatus.textContent = msg;\r\n    if (delay !== null) setTimeout(_removeMessage, delay * 1000);\r\n  }\r\n\r\n  function _removeMessage() {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].turnStatus.textContent = \"\";\r\n  }\r\n\r\n  return { initPage, writeMessage };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = {\r\n  customizingDialog: document.querySelector('[data-js-id=\"customizingDialog\"]'),\r\n  validationMsg: document.querySelector('[data-js-id=\"validationMsg\"]'),\r\n  gameOverDialog: document.querySelector('[data-js-id=\"gameOverDialog\"]'),\r\n  gameOverTitle: document.querySelector('[data-js-id=\"gameOverTitle\"]'),\r\n  gameOverTxt: document.querySelector('[data-js-id=\"gameOverTxt\"]'),\r\n  restartBtn: document.querySelector('[data-js-id=\"restartBtn\"]'),\r\n  closeBtn: document.querySelector('[data-js-id=\"closeBtn\"]'),\r\n  dialogBoard: document.querySelector('[data-js-id=\"dialogBoard\"]'),\r\n  shipsContr: document.querySelector('[data-js-id=\"shipsContr\"]'),\r\n  customizeBtns: document.querySelector('[data-js-id=\"customizeBtns\"]'),\r\n  turnStatus: document.querySelector('[data-js-id=\"turnsStatus\"]'),\r\n  playerBoard1: document.querySelector('[data-js-id=\"playerBoard1\"]'),\r\n  playerBoard2: document.querySelector('[data-js-id=\"playerBoard2\"]'),\r\n  soundOn: document.querySelector('[data-js-id=\"soundOff\"]'),\r\n  soundOff: document.querySelector('[data-js-id=\"soundOn\"]'),\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   events: () => (/* binding */ events)\n/* harmony export */ });\nconst pubSub = (function () {\r\n  let events = {};\r\n\r\n  function subscribe(event, fn) {\r\n    events[event] ? events[event].push(fn) : (events[event] = [fn]);\r\n  }\r\n  function unSubscribe(event, fn) {\r\n    if (events[event]) {\r\n      events[event] = events[event].filter((func) => func !== fn);\r\n    }\r\n  }\r\n  function publish(event, data) {\r\n    if (events[event]) events[event].forEach((fn) => fn(data));\r\n  }\r\n\r\n  return { subscribe, unSubscribe, publish };\r\n})();\r\n\r\nconst events = {\r\n  playerBoardCustomized: \"playerBoardCustomized\",\r\n  initBoard: \"initBoard\",\r\n  gameOver: \"gameOver\",\r\n  usersTurn: \"usersTurn\",\r\n  computerPlayed: \"computerPlayed\",\r\n  userPlayed: \"userPlayed\",\r\n  boardsChanged: \"boardsChanged\",\r\n  soundonClicked: \"soundonClicked\",\r\n  soundoffClicked: \"soundoffClicked\",\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/pubsub.js?");

/***/ }),

/***/ "./src/modules/soundfx.js":
/*!********************************!*\
  !*** ./src/modules/soundfx.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_congratulations_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/congratulations.mp3 */ \"./src/assets/congratulations.mp3\");\n/* harmony import */ var _assets_gameover_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/gameover.mp3 */ \"./src/assets/gameover.mp3\");\n/* harmony import */ var _assets_play_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/play.mp3 */ \"./src/assets/play.mp3\");\n/* harmony import */ var _assets_shipsunk_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/shipsunk.mp3 */ \"./src/assets/shipsunk.mp3\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst soundFx = (() => {\r\n  const congSound = new Audio(_assets_congratulations_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\r\n    gameOverSound = new Audio(_assets_gameover_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    playSound = new Audio(_assets_play_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\r\n    shipSunkSound = new Audio(_assets_shipsunk_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n  let _soundsEnabled = true;\r\n  _pubsub__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_4__.events.soundonClicked, _enableSounds);\r\n  _pubsub__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_4__.events.soundoffClicked, _disableSounds);\r\n\r\n  function playCongSound() {\r\n    if (_soundsEnabled) {\r\n      congSound.load();\r\n      congSound.play();\r\n    }\r\n  }\r\n\r\n  function playGameOverSound() {\r\n    if (_soundsEnabled) {\r\n      gameOverSound.load();\r\n      gameOverSound.play();\r\n    }\r\n  }\r\n\r\n  function play() {\r\n    if (_soundsEnabled) {\r\n      playSound.load();\r\n      playSound.play();\r\n    }\r\n  }\r\n\r\n  function playShipSunkSound() {\r\n    if (_soundsEnabled) {\r\n      shipSunkSound.load();\r\n      shipSunkSound.play();\r\n    }\r\n  }\r\n\r\n  function _disableSounds() {\r\n    _soundsEnabled = false;\r\n  }\r\n  function _enableSounds() {\r\n    _soundsEnabled = true;\r\n  }\r\n\r\n  return { play, playCongSound, playGameOverSound, playShipSunkSound };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (soundFx);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/soundfx.js?");

/***/ }),

/***/ "./src/assets/AlegreyaSC-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/AlegreyaSC-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"761091f774afb47e7c21.ttf\";\n\n//# sourceURL=webpack://battleship/./src/assets/AlegreyaSC-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;