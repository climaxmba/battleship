/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./AlegreyaSC-Regular.ttf */ "./src/assets/AlegreyaSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: AlegreyaSC;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

:root {
  --emptysquare: #00000030;
  --missedbg: #ffffff80;
  --hitbg: #ffb6c1cc;
  --validbg: #90ee90cc;
  --shipbg: #2e2e2e80;
  --bodybg: linear-gradient(20deg, #b6009b, #7441e1);
  --last: 2px solid;
}

* {
  box-sizing: border-box;
  font-family: AlegreyaSC, Georgia, 'Times New Roman', Times, serif;
  color: white;
}

[draggable="true"]:hover {
  cursor: move;
}

.clickable,
a {
  cursor: pointer;
}

.whitebg {
  color: #2e2e2e;
  background: white;
  box-shadow: 0 1px 3px 2px #00000020;
  border-radius: 5px;
}

body {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: var(--bodybg);
  min-height: 100vh;
}

#turns-status {
  padding: 0.5rem;
}

#sounds-contr {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

#sounds-contr svg {
  height: 25px;
  width: auto;
  fill: white;
}

#sounds-contr svg:not(.active) {
  display: none;
}

dialog {
  padding: 0;
  border: none;
  outline: none;
  font-weight: lighter;
  color: black;
  background-color: #ffffffa0;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  border-radius: 8px;
  box-shadow: 0 0 3px 1px #00000020;
}

dialog * {
  font-weight: lighter;
  color: inherit;
}

#customize {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

#validation-msg {
  display: none;
}

#validation-msg.active {
  display: block;
  padding: 2px 12px;
  box-shadow: none;
}

#customize-contr,
#gameover-contr {
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

#gameover-btns-contr {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

#gameover-btns-contr button {
  padding: 6px 30px !important;
}

#customize-contr span.valid,
.hints .valid {
  background-color: var(--validbg);
}

#customize-ctrl-contr>span,
#gameover-contr button:hover,
#gameover-contr button {
  outline: none;
  border: none;
  padding: 5px;
}

#customize-ctrl-contr>span:active,
#gameover-contr button:active {
  box-shadow: none;
}

#gameover-contr p {
  font-size: large;
  margin: 0;
}

#gameover-contr h2 {
  margin: 0;
}

#ships-contr {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

#ships-contr[data-isvertical="true"] {
  flex-direction: row;
}

#ships-contr[data-isvertical="true"]>div {
  grid-template-columns: 25px;
}

#ships-contr .squares {
  background-color: #51515180;
}

#ships-contr>div {
  display: grid;
  gap: 1px;
  grid-template-rows: 25px;
}

#ship1 {
  grid-template-columns: repeat(5, 25px);
}

#ship2 {
  grid-template-columns: repeat(4, 25px);
}

#ship3,
#ship4 {
  grid-template-columns: repeat(3, 25px);
}

#ship5 {
  grid-template-columns: repeat(2, 25px);
}

#ships-contr[data-isvertical="true"] #ship1 {
  grid-template-rows: repeat(5, 25px);
}

#ships-contr[data-isvertical="true"] #ship2 {
  grid-template-rows: repeat(4, 25px);
}

#ships-contr[data-isvertical="true"] #ship3,
#ships-contr[data-isvertical="true"] #ship4 {
  grid-template-rows: repeat(3, 25px);
}

#ships-contr[data-isvertical="true"] #ship5 {
  grid-template-rows: repeat(2, 25px);
}

.board-contr {
  display: grid;
  gap: 1px;
  grid-template: repeat(10, 35px) / repeat(10, 35px);
}

#customize-contr .board-contr {
  grid-template: repeat(10, 25px) / repeat(10, 25px);
}

#customize-ctrl-contr {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.squares,
.hints span {
  position: relative;
  border-radius: 3px;
  background-color: var(--emptysquare);
}

.ship-pos:not(.hit) {
  background-color: var(--shipbg) !important;
}

.hit {
  background-color: var(--hitbg) !important;
}

.missed {
  background-color: var(--missedbg) !important;
}

.missed::after {
  content: "";
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5px;
  width: 5px;
  border-radius: 50%;
}

.squares.last-hit {
  border: var(--last);
}

#game-contr {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.players:last-child span.squares:not(.missed):not(.hit):hover {
  background-color: var(--validbg);
}

.players {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.players-name {
  font-size: large;
}

#hints-contr {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#hints-contr * {
  color: inherit;
}

#hints-contr>div {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hints {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#hints-contr span {
  box-shadow: 0 2px 3px 2px #00000020;
  height: 25px;
  width: 25px;
}

footer {
  color: #2e2e2e;
  background-color: #ffffffa0;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  padding: 2rem;
  gap: 0.5rem;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer * {
  color: inherit;
}

footer a {
  font-size: small;
  font-weight: bold;
}

#bubbles-contr {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.bubbles {
  border-radius: 50%;
  position: fixed;
  background-color: #ffffffa0;
}

.bubbles:first-child {
  transform: translate(-50%, -50%);
  height: 150px;
  width: 150px;
  animation: bubble1 20s ease-in-out infinite;
}

.bubbles:nth-child(2) {
  height: 60px;
  width: 60px;
  animation: bubble2 10s ease-in-out infinite;
}

.bubbles:last-child {
  height: 100px;
  width: 100px;
  animation: bubble3 30s ease-in-out infinite;
}

@keyframes bubble1 {
  0% {
    scale: 1;
    opacity: 0.12;
  }

  50% {
    scale: 6;
    opacity: 0;
  }

  100% {
    scale: 1;
    opacity: 0.12;
  }
}

@keyframes bubble2 {
  0% {
    scale: 4;
    opacity: 0.06;
  }

  50% {
    scale: 0.5;
    opacity: 0;
  }

  100% {
    scale: 4;
    opacity: 0.06;
  }
}

@keyframes bubble3 {
  0% {
    scale: 3;
    opacity: 0;
    transform: translate(-90px, -100px);
  }

  50% {
    scale: 5;
    opacity: 0.1;
    transform: translateX(90px);
  }

  100% {
    scale: 3;
    opacity: 0;
    transform: translate(-90px, 100px);
  }
}

@media (width <=750px) {
  #customize-contr {
    width: 312px;
  }

  #ships-contr {
    flex-direction: unset;
  }

  .players:first-child .board-contr {
    height: 220px;
    width: 220px;
    grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  }

  .board-contr {
    grid-template: repeat(10, 30px) / repeat(10, 30px);
  }

  .players:first-child .squares.missed::after {
    height: 3px;
    width: 3px;
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: AlegreyaSC;\r\n  src: url('./AlegreyaSC-Regular.ttf') format('truetype');\r\n}\r\n\r\n:root {\r\n  --emptysquare: #00000030;\r\n  --missedbg: #ffffff80;\r\n  --hitbg: #ffb6c1cc;\r\n  --validbg: #90ee90cc;\r\n  --shipbg: #2e2e2e80;\r\n  --bodybg: linear-gradient(20deg, #b6009b, #7441e1);\r\n  --last: 2px solid;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: AlegreyaSC, Georgia, 'Times New Roman', Times, serif;\r\n  color: white;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n.whitebg {\r\n  color: #2e2e2e;\r\n  background: white;\r\n  box-shadow: 0 1px 3px 2px #00000020;\r\n  border-radius: 5px;\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  background: var(--bodybg);\r\n  min-height: 100vh;\r\n}\r\n\r\n#turns-status {\r\n  padding: 0.5rem;\r\n}\r\n\r\n#sounds-contr {\r\n  display: flex;\r\n  gap: 0.6rem;\r\n  align-items: center;\r\n}\r\n\r\n#sounds-contr svg {\r\n  height: 25px;\r\n  width: auto;\r\n  fill: white;\r\n}\r\n\r\n#sounds-contr svg:not(.active) {\r\n  display: none;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: lighter;\r\n  color: black;\r\n  background-color: #ffffffa0;\r\n  -webkit-backdrop-filter: blur(15px);\r\n  backdrop-filter: blur(15px);\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\ndialog * {\r\n  font-weight: lighter;\r\n  color: inherit;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#validation-msg {\r\n  display: none;\r\n}\r\n\r\n#validation-msg.active {\r\n  display: block;\r\n  padding: 2px 12px;\r\n  box-shadow: none;\r\n}\r\n\r\n#customize-contr,\r\n#gameover-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#gameover-btns-contr {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#gameover-btns-contr button {\r\n  padding: 6px 30px !important;\r\n}\r\n\r\n#customize-contr span.valid,\r\n.hints .valid {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n#customize-ctrl-contr>span,\r\n#gameover-contr button:hover,\r\n#gameover-contr button {\r\n  outline: none;\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n\r\n#customize-ctrl-contr>span:active,\r\n#gameover-contr button:active {\r\n  box-shadow: none;\r\n}\r\n\r\n#gameover-contr p {\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n\r\n#gameover-contr h2 {\r\n  margin: 0;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"]>div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: #51515180;\r\n}\r\n\r\n#ships-contr>div {\r\n  display: grid;\r\n  gap: 1px;\r\n  grid-template-rows: 25px;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  gap: 1px;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares,\r\n.hints span {\r\n  position: relative;\r\n  border-radius: 3px;\r\n  background-color: var(--emptysquare);\r\n}\r\n\r\n.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg) !important;\r\n}\r\n\r\n.hit {\r\n  background-color: var(--hitbg) !important;\r\n}\r\n\r\n.missed {\r\n  background-color: var(--missedbg) !important;\r\n}\r\n\r\n.missed::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.squares.last-hit {\r\n  border: var(--last);\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\n#hints-contr {\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#hints-contr * {\r\n  color: inherit;\r\n}\r\n\r\n#hints-contr>div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.hints {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#hints-contr span {\r\n  box-shadow: 0 2px 3px 2px #00000020;\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\nfooter {\r\n  color: #2e2e2e;\r\n  background-color: #ffffffa0;\r\n  backdrop-filter: blur(15px);\r\n  -webkit-backdrop-filter: blur(15px);\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  flex-grow: 1;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter * {\r\n  color: inherit;\r\n}\r\n\r\nfooter a {\r\n  font-size: small;\r\n  font-weight: bold;\r\n}\r\n\r\n#bubbles-contr {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.bubbles {\r\n  border-radius: 50%;\r\n  position: fixed;\r\n  background-color: #ffffffa0;\r\n}\r\n\r\n.bubbles:first-child {\r\n  transform: translate(-50%, -50%);\r\n  height: 150px;\r\n  width: 150px;\r\n  animation: bubble1 20s ease-in-out infinite;\r\n}\r\n\r\n.bubbles:nth-child(2) {\r\n  height: 60px;\r\n  width: 60px;\r\n  animation: bubble2 10s ease-in-out infinite;\r\n}\r\n\r\n.bubbles:last-child {\r\n  height: 100px;\r\n  width: 100px;\r\n  animation: bubble3 30s ease-in-out infinite;\r\n}\r\n\r\n@keyframes bubble1 {\r\n  0% {\r\n    scale: 1;\r\n    opacity: 0.12;\r\n  }\r\n\r\n  50% {\r\n    scale: 6;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    scale: 1;\r\n    opacity: 0.12;\r\n  }\r\n}\r\n\r\n@keyframes bubble2 {\r\n  0% {\r\n    scale: 4;\r\n    opacity: 0.06;\r\n  }\r\n\r\n  50% {\r\n    scale: 0.5;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    scale: 4;\r\n    opacity: 0.06;\r\n  }\r\n}\r\n\r\n@keyframes bubble3 {\r\n  0% {\r\n    scale: 3;\r\n    opacity: 0;\r\n    transform: translate(-90px, -100px);\r\n  }\r\n\r\n  50% {\r\n    scale: 5;\r\n    opacity: 0.1;\r\n    transform: translateX(90px);\r\n  }\r\n\r\n  100% {\r\n    scale: 3;\r\n    opacity: 0;\r\n    transform: translate(-90px, 100px);\r\n  }\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  }\r\n\r\n  .board-contr {\r\n    grid-template: repeat(10, 30px) / repeat(10, 30px);\r\n  }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    height: 3px;\r\n    width: 3px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/congratulations.mp3":
/*!****************************************!*\
  !*** ./src/assets/congratulations.mp3 ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2e4f9ee5476c9356c8af2e0c67ce9c64.mp3");

/***/ }),

/***/ "./src/assets/gameover.mp3":
/*!*********************************!*\
  !*** ./src/assets/gameover.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6b2eb1aa1ffcec11010767027a9817eb.mp3");

/***/ }),

/***/ "./src/assets/play.mp3":
/*!*****************************!*\
  !*** ./src/assets/play.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a2774fd0d75bdfeed2da4df0c0721032.mp3");

/***/ }),

/***/ "./src/assets/shipsunk.mp3":
/*!*********************************!*\
  !*** ./src/assets/shipsunk.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5903e44dd8166800195d9aa7a2804534.mp3");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/battleship.js":
/*!***********************************!*\
  !*** ./src/modules/battleship.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   validateAreas: () => (/* binding */ validateAreas)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");


class Ship {
  length;
  hits = 0;

  constructor(length) {
    this.length = length;
  }

  hit() {
    this.hits++;
  }
  isSunk() {
    return this.length <= this.hits;
  }
}

class GameBoard {
  board = new Map();
  ships = new Set();
  missedAttacks = new Set();
  lastAttacked = null;
  sunkShipLast = false;

  constructor(addRandomShips = true) {
    this.#initBoard();
    if (addRandomShips) this.#addShips();
  }

  receiveAttack(square) {
    this.lastAttacked = square;
    this.sunkShipLast = false;

    for (const shipObj of this.ships) {
      if (shipObj.coords.has(square)) {
        shipObj.hitCoords.add(square);
        shipObj.ship.hit();

        if (shipObj.ship.isSunk()) this.sunkShipLast = true;

        // Attack adjacent squares if ship is sunk
        if (shipObj.ship.isSunk()) {
          for (const pos of shipObj.coords) {
            [...this.getAdjSquares(pos)]
              .filter(
                (obj) =>
                  !(
                    this.missedAttacks.has(obj.square) ||
                    shipObj.coords.has(obj.square)
                  )
              )
              .forEach((squareObj) => this.missedAttacks.add(squareObj.square));
          }
        }

        return true;
      }
    }

    this.missedAttacks.add(square);
    return false;
  }

  addSquare(square) {
    this.board.set(square, { square, adjSquares: new Set() });
  }

  connectSquare(square1, square2) {
    if (this.board.has(square1) && this.board.has(square2)) {
      this.board.get(square1).adjSquares.add(this.board.get(square2));
      this.board.get(square2).adjSquares.add(this.board.get(square1));
    }
  }

  getAdjSquares(square) {
    return this.board.get(square).adjSquares;
  }

  areNeighboors(square1, square2) {
    return this.board.get(square1).adjSquares.has(square2);
  }

  areAllSunk() {
    if (!this.ships.size) return null;
    return [...this.ships]
      .map((shipObj) => shipObj.ship.isSunk())
      .every((val) => val === true);
  }

  getAvailableSquares() {
    const boardSquares = [...this.board.keys()],
      shipPosAttacked = [...this.ships].flatMap((obj) => [...obj.hitCoords]);
    const squareSet = boardSquares.filter(
      (square) =>
        !(this.missedAttacks.has(square) || shipPosAttacked.includes(square))
    );

    return [...squareSet];
  }

  #initBoard() {
    // Add squares
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.addSquare(`${i},${j}`);
      }
    }

    // Connect squares
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const currPos = `${i},${j}`;
        this.connectSquare(currPos, `${i + 1},${j}`);
        this.connectSquare(currPos, `${i - 1},${j}`);
        this.connectSquare(currPos, `${i},${j + 1}`);
        this.connectSquare(currPos, `${i},${j - 1}`);
        this.connectSquare(currPos, `${i + 1},${j + 1}`);
        this.connectSquare(currPos, `${i - 1},${j - 1}`);
        this.connectSquare(currPos, `${i + 1},${j - 1}`);
        this.connectSquare(currPos, `${i - 1},${j + 1}`);
      }
    }
  }
  #addShips() {
    this.#addShip(new Ship(5), this.#getRandomBool());
    this.#addShip(new Ship(4), this.#getRandomBool());
    this.#addShip(new Ship(3), this.#getRandomBool());
    this.#addShip(new Ship(3), this.#getRandomBool());
    this.#addShip(new Ship(2), this.#getRandomBool());
  }
  #getRandomBool() {
    return Math.floor(Math.random() * 2) === 1 ? true : false;
  }
  #addShip(ship, isVertical = false) {
    this.ships.add({
      ship,
      coords: this.#createShipCoords(ship, isVertical),
      hitCoords: new Set(),
    });
  }
  #createShipCoords(ship, isVertical) {
    const x = Math.floor(Math.random() * 10),
      y = Math.floor(Math.random() * 10),
      coordsList = new Set();

    // Loop through the length of the ship to check if 'pos' is valid
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        const pos = `${x},${y + i}`;
        if (this.isValidPos(pos)) {
          coordsList.add(pos);
          continue;
        }
        return this.#createShipCoords(ship, isVertical);
      } else {
        const pos = `${x + i},${y}`;
        if (this.isValidPos(pos)) {
          coordsList.add(pos);
          continue;
        }
        return this.#createShipCoords(ship, isVertical);
      }
    }
    return coordsList;
  }

  isValidPos(pos) {
    if (!this.board.has(pos)) return false;

    const list = [...this.ships].flatMap((obj) => [...obj.coords]);
    if (list.includes(pos)) return false;

    const adjPos = [...this.board.get(pos).adjSquares].map((obj) => obj.square);

    for (let i = 0; i < list.length; i++) {
      if (adjPos.includes(list[i])) return false;
    }
    return true;
  }
}

class Player {
  name;
  gameBoard;

  constructor(name, isComputer = false, useWorker = false) {
    this.name = name;
    this.isComputer = isComputer;
    if (isComputer) {
      this.gameBoard = new GameBoard();
    } else {
      this.gameBoard = new GameBoard(false);
    }

    if (useWorker)
      this.worker = new Worker(
        new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_modules_battleship_worker_js"), __webpack_require__.b)
      );
  }

  addShip(area) {
    if (this.#isValidArea(area)) {
      this.gameBoard.ships.add({
        ship: new Ship(area.length),
        coords: new Set(area),
        hitCoords: new Set(),
      });
      return true;
    } else {
      return false;
    }
  }
  #isValidArea(area) {
    // Verify that all coordinates in area are adjacent...
    // ...and not diagonal
    for (let i = 0; i < area.length; i++) {
      if (area[i + 1]) {
        const currPos = area[i].split(","),
          nextPos = area[i + 1].split(",");
        if (
          !(
            parseInt(currPos[0]) + 1 == nextPos[0] ||
            parseInt(currPos[0]) - 1 == nextPos[0] ||
            parseInt(currPos[0]) + 1 == nextPos[1] ||
            parseInt(currPos[0]) - 1 == nextPos[1] ||
            parseInt(currPos[1]) + 1 == nextPos[0] ||
            parseInt(currPos[1]) - 1 == nextPos[0] ||
            parseInt(currPos[1]) + 1 == nextPos[1] ||
            parseInt(currPos[1]) - 1 == nextPos[1]
          ) ||
          [parseInt(currPos[0]) + 1, parseInt(currPos[1]) + 1].toString() ===
            area[i + 1] ||
          [parseInt(currPos[0]) - 1, parseInt(currPos[1]) - 1].toString() ===
            area[i + 1] ||
          [parseInt(currPos[0]) + 1, parseInt(currPos[1]) - 1].toString() ===
            area[i + 1] ||
          [parseInt(currPos[0]) - 1, parseInt(currPos[1]) + 1].toString() ===
            area[i + 1]
        )
          return false;
      }
    }
    return area.every(this.gameBoard.isValidPos.bind(this.gameBoard));
  }

  randomSquare(board) {
    const avalableSquares = board.getAvailableSquares();
    return avalableSquares[Math.floor(Math.random() * avalableSquares.length)];
  }

  #canExistShip(board, pos, shipLength, isVertical = false) {
    const area = [];
    for (let i = 0; i < shipLength; i++) {
      if (isVertical) {
        area.push(`${pos[0]},${parseInt(pos[2]) + i}`);
      } else {
        area.push(`${parseInt(pos[0]) + i},${pos[2]}`);
      }
    }

    if (!validateAreas([area])) return false;

    const hitAreas = [...board.ships].flatMap((shipObj) => [
      ...shipObj.hitCoords,
    ]);
    try {
      area.forEach((pos) => {
        if (board.missedAttacks.has(pos) || hitAreas.includes(pos))
          throw new Error();
      });
    } catch {
      return false;
    }

    return area;
  }

  getBestSquare(board) {
    let bestSquares = [],
      maxProb = -Infinity,
      probMap = this.#calcProbMap(board);

    // Group squares with the highest values together
    for (const square of probMap.keys()) {
      if (probMap.get(square) > maxProb) {
        bestSquares = [square];
        maxProb = probMap.get(square);
      } else if (probMap.get(square) === maxProb) {
        bestSquares.push(square);
      }
    }

    // Return a random square with the highest probability
    return bestSquares[Math.floor(Math.random() * bestSquares.length)];
  }

  #calcProbMap(board) {
    let probMap = new Map();

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        probMap.set(`${x},${y}`, 0);
      }
    }

    board.ships.forEach((shipObj) => {
      if (!shipObj.ship.isSunk()) {
        board.board.forEach((_val, pos) => {
          const vertical = this.#canExistShip(
              board,
              pos,
              shipObj.ship.length,
              true
            ),
            horizontal = this.#canExistShip(
              board,
              pos,
              shipObj.ship.length,
              false
            );

          if (vertical)
            vertical.forEach((pos) => probMap.set(pos, probMap.get(pos) + 1));
          if (horizontal)
            horizontal.forEach((pos) => probMap.set(pos, probMap.get(pos) + 1));
          const hits = [...board.ships].flatMap((shipObj) => [
            ...shipObj.hitCoords,
          ]);
          hits.forEach((hit) => {
            [...board.getAdjSquares(hit)]
              .filter((obj) => {
                const square = obj.square;
                if (
                  `${parseInt(hit[0]) + 1},${parseInt(hit[2]) + 1}` ===
                    square ||
                  `${parseInt(hit[0]) - 1},${parseInt(hit[2]) - 1}` ===
                    square ||
                  `${parseInt(hit[0]) + 1},${parseInt(hit[2]) - 1}` ===
                    square ||
                  `${parseInt(hit[0]) - 1},${parseInt(hit[2]) + 1}` === square
                )
                  return false;
                else return true;
              })
              .forEach((obj) => {
                const square = obj.square;
                if (
                  !hits.includes(square) &&
                  !board.missedAttacks.has(square)
                ) {
                  if (
                    hits.includes(`${parseInt(square[0]) + 2},${square[2]}`) ||
                    hits.includes(`${parseInt(square[0]) - 2},${square[2]}`) ||
                    hits.includes(`${square[0]},${parseInt(square[2]) + 2}`) ||
                    hits.includes(`${square[0]},${parseInt(square[2]) - 2}`)
                  )
                    probMap.set(square, probMap.get(square) + 5); //Increase probability in the direction of the ship
                  probMap.set(square, probMap.get(square) + 1);
                }
              });
          });
        });
      }
    });

    return probMap;
  }

  async play(board) {
    if (this.isComputer) {
      await new Promise((res) => setTimeout(res, 220)); // Simulate delay

      return this.worker
        ? new Promise((res) => {
            this.worker.onmessage = (e) => {
              res(e.data);
            };
            this.worker.postMessage(board);
          })
        : Promise.resolve(this.getBestSquare(board));
    } else {
      return new Promise((res) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.userPlayed, handler);

        function handler(square) {
          res(square);
          _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].unSubscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.userPlayed, handler);
        }
      });
    }
  }
}

function validateAreas(areasList) {
  const p = new Player("", false);
  try {
    areasList.forEach((area) => {
      if (!p.addShip(area)) throw new Error();
    });
    return true;
  } catch {
    return false;
  }
}




/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");




const customizingModal = (() => {
  let _draggingLength,
    _isVertical = false,
    _currShipArea = [],
    _shipAreas = [],
    _board = new _battleship__WEBPACK_IMPORTED_MODULE_2__.GameBoard(false);

  function isOrientationVertical() {
    return _isVertical;
  }

  function switchOrientation() {
    _isVertical = !_isVertical;
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].shipsContr.setAttribute("data-isvertical", _isVertical);
  }

  function setDraggingLength(length) {
    _draggingLength = length;
  }

  function _clearBoard() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialogBoard.childNodes.forEach(
      (child) => (child.className = "squares")
    );
  }

  function _clearBoardValidity() {
    const validitySquares = _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialogBoard.querySelectorAll(
      "span.valid, span.invalid"
    );
    validitySquares.forEach((square) => {
      square.classList.remove("valid");
      square.classList.remove("invalid");
    });
  }

  function revealSquaresValidity(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) return;
    _clearBoardValidity();

    const areasList = [],
      altAreasList = [],
      square = e.target.getAttribute("data-square-index");

    for (let i = 0; i < _draggingLength; i++) {
      _isVertical
        ? areasList.push(`${square[0]},${parseInt(square[2]) + i}`)
        : areasList.push(`${parseInt(square[0]) + i},${square[2]}`);
    }
    for (let i = 0; i < _draggingLength; i++) {
      _isVertical
        ? altAreasList.push(`${square[0]},${parseInt(square[2]) - i}`)
        : altAreasList.push(`${parseInt(square[0]) - i},${square[2]}`);
    }

    if ((0,_battleship__WEBPACK_IMPORTED_MODULE_2__.validateAreas)([..._shipAreas, areasList])) {
      areasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = areasList;
    } else if ((0,_battleship__WEBPACK_IMPORTED_MODULE_2__.validateAreas)([..._shipAreas, altAreasList])) {
      altAreasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = altAreasList;
    } else {
      _currShipArea = [];
    }
  }

  function dropShip(e) {
    _clearBoardValidity();

    if (_currShipArea.length && _shipAreas.length < 5) {
      e.target.remove();
      _shipAreas.push(_currShipArea);
      _currShipArea = [];
      _updateBoard();
    }
  }

  function randomizeBoard() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].shipsContr.innerHTML = null;
    _board = new _battleship__WEBPACK_IMPORTED_MODULE_2__.GameBoard();
    _shipAreas = [..._board.ships].map((shipObj) => [...shipObj.coords]);
    _updateBoard();
  }

  function _updateBoard() {
    _clearBoard();
    _shipAreas
      .flatMap((arr) => arr)
      .forEach((square) =>
        document
          .querySelector(`[data-square-index='${square}']`)
          .classList.add("ship-pos")
      );
  }

  function _validateShips() {
    if (_shipAreas.length !== 5) {
      _writeValidationMsg("Drop all 5 ships on the board!", 3000);
      return false;
    } else return true;
  }

  function _writeValidationMsg(msg, delay = null) {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].validationMsg.textContent = msg;
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].validationMsg.classList.add("active");

    if (delay !== null) setTimeout(_removeValidationMsg, delay);
  }

  function _removeValidationMsg() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].validationMsg.textContent = "";
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].validationMsg.classList.remove("active");
  }

  function exitModal() {
    if (_validateShips()) {
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].customizingDialog.close();
      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.playerBoardCustomized, _shipAreas);
    }
  }

  return {
    setDraggingLength,
    switchOrientation,
    isOrientationVertical,
    revealSquaresValidity,
    dropShip,
    randomizeBoard,
    exitModal,
  };
})();

const gameOverModal = (() => {
  function showStatus(title, txt) {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].gameOverTitle.textContent = title;
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].gameOverTxt.textContent = txt;
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].gameOverDialog.showModal();
  }

  function exitModal() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].gameOverDialog.close();
  }

  return { showStatus, exitModal };
})();

const gameBoards = (() => {
  function initBoards() {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.initBoard, _updateBoards);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.boardsChanged, _updateBoards);
  }

  function _updateBoards({ board1, board2 }) {
    board1.missedAttacks.forEach(
      _getIteratorCallback("missed", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1)
    );
    [...board1.ships]
      .flatMap((shipObj) => [...shipObj.coords])
      .forEach(_getIteratorCallback("ship-pos", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1));
    [...board1.ships]
      .flatMap((shipObj) => [...shipObj.hitCoords])
      .forEach(_getIteratorCallback("hit", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1));
    if (board1.lastAttacked) {
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1
        .querySelectorAll(".last-hit")
        .forEach((node) => node.classList.remove("last-hit"));

      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1
        .querySelector(`[data-square-index="${board1.lastAttacked}"]`)
        .classList.add("last-hit");
    }

    board2.missedAttacks.forEach(
      _getIteratorCallback("missed", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2)
    );
    [...board2.ships]
      .flatMap((shipObj) => [...shipObj.hitCoords])
      .forEach(_getIteratorCallback("hit", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2));
    if (board2.lastAttacked) {
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2
        .querySelectorAll(".last-hit")
        .forEach((node) => node.classList.remove("last-hit"));

      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2
        .querySelector(`[data-square-index="${board2.lastAttacked}"]`)
        .classList.add("last-hit");
    }
  }

  // Callback generator
  function _getIteratorCallback(className, board) {
    return (square) =>
      board
        .querySelector(`[data-square-index='${square}']`)
        .classList.add(className);
  }

  return { initBoards };
})();

const display = (() => {
  function initPage() {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.gameOver, (winner) =>
      winner.isComputer
        ? gameOverModal.showStatus("Game Over!", "You Loose.")
        : gameOverModal.showStatus("Congratulations!", " You Win.")
    );

    _clearBoards(_dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialogBoard, _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1, _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2);

    // Draw boards
    const board = [];
    for (let x = 9; x >= 0; x--) {
      const arr = [];
      for (let y = 9; y >= 0; y--) {
        arr.push(`${y},${x}`);
      }
      board.push(...arr.reverse());
    }
    board.forEach((square) => {
      const node = document.createElement("span");
      node.setAttribute("data-square-index", square);
      node.className = "squares";

      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialogBoard.appendChild(node.cloneNode());
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard1.appendChild(node.cloneNode());
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2.appendChild(node);
    });

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].customizingDialog.showModal();
    gameBoards.initBoards();
    _addEvents();
  }

  function _clearBoards(...boards) {
    boards.forEach((b) => (b.innerHTML = null));
  }

  function _addEvents() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].shipsContr.addEventListener("dragstart", (e) =>
      customizingModal.setDraggingLength(e.target.children.length)
    );
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialogBoard.addEventListener(
      "dragover",
      customizingModal.revealSquaresValidity
    );
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].shipsContr.addEventListener("dragend", customizingModal.dropShip);

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].customizeBtns.addEventListener("click", (e) => {
      switch (e.target.getAttribute("data-action")) {
        case "rotate":
          return customizingModal.switchOrientation();
        case "random":
          return customizingModal.randomizeBoard();
        case "start":
          return customizingModal.exitModal();
      }
    });

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].closeBtn.addEventListener("click", gameOverModal.exitModal);
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].restartBtn.addEventListener("click", () => location.reload());

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2.addEventListener("click", (e) => {
      const square = e.target.getAttribute("data-square-index");
      if (square && e.target.className === "squares")
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.userPlayed, square);
    });

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].soundOn.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].soundOn.classList.remove("active");
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].soundOff.classList.add("active");
      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.soundonClicked, null);
    });
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].soundOff.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].soundOn.classList.add("active");
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].soundOff.classList.remove("active");
      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.soundoffClicked, null);
    });
  }

  function writeMessage(msg, delay = null) {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].turnStatus.textContent = msg;
    if (delay !== null) setTimeout(_removeMessage, delay * 1000);
  }

  function _removeMessage() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].turnStatus.textContent = "";
  }

  return { initPage, writeMessage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dom = {
  customizingDialog: document.querySelector('[data-js-id="customizingDialog"]'),
  validationMsg: document.querySelector('[data-js-id="validationMsg"]'),
  gameOverDialog: document.querySelector('[data-js-id="gameOverDialog"]'),
  gameOverTitle: document.querySelector('[data-js-id="gameOverTitle"]'),
  gameOverTxt: document.querySelector('[data-js-id="gameOverTxt"]'),
  restartBtn: document.querySelector('[data-js-id="restartBtn"]'),
  closeBtn: document.querySelector('[data-js-id="closeBtn"]'),
  dialogBoard: document.querySelector('[data-js-id="dialogBoard"]'),
  shipsContr: document.querySelector('[data-js-id="shipsContr"]'),
  customizeBtns: document.querySelector('[data-js-id="customizeBtns"]'),
  turnStatus: document.querySelector('[data-js-id="turnsStatus"]'),
  playerBoard1: document.querySelector('[data-js-id="playerBoard1"]'),
  playerBoard2: document.querySelector('[data-js-id="playerBoard2"]'),
  soundOn: document.querySelector('[data-js-id="soundOff"]'),
  soundOff: document.querySelector('[data-js-id="soundOn"]'),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   events: () => (/* binding */ events)
/* harmony export */ });
const pubSub = (function () {
  let events = {};

  function subscribe(event, fn) {
    events[event] ? events[event].push(fn) : (events[event] = [fn]);
  }
  function unSubscribe(event, fn) {
    if (events[event]) {
      events[event] = events[event].filter((func) => func !== fn);
    }
  }
  function publish(event, data) {
    if (events[event]) events[event].forEach((fn) => fn(data));
  }

  return { subscribe, unSubscribe, publish };
})();

const events = {
  playerBoardCustomized: "playerBoardCustomized",
  initBoard: "initBoard",
  gameOver: "gameOver",
  usersTurn: "usersTurn",
  computerPlayed: "computerPlayed",
  userPlayed: "userPlayed",
  boardsChanged: "boardsChanged",
  soundonClicked: "soundonClicked",
  soundoffClicked: "soundoffClicked",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);


/***/ }),

/***/ "./src/modules/soundfx.js":
/*!********************************!*\
  !*** ./src/modules/soundfx.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_congratulations_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/congratulations.mp3 */ "./src/assets/congratulations.mp3");
/* harmony import */ var _assets_gameover_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/gameover.mp3 */ "./src/assets/gameover.mp3");
/* harmony import */ var _assets_play_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/play.mp3 */ "./src/assets/play.mp3");
/* harmony import */ var _assets_shipsunk_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/shipsunk.mp3 */ "./src/assets/shipsunk.mp3");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");






const soundFx = (() => {
  const congSound = new Audio(_assets_congratulations_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]),
    gameOverSound = new Audio(_assets_gameover_mp3__WEBPACK_IMPORTED_MODULE_1__["default"]),
    playSound = new Audio(_assets_play_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]),
    shipSunkSound = new Audio(_assets_shipsunk_mp3__WEBPACK_IMPORTED_MODULE_3__["default"]);

  let _soundsEnabled = true;
  _pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_4__.events.soundonClicked, _enableSounds);
  _pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_4__.events.soundoffClicked, _disableSounds);

  function playCongSound() {
    if (_soundsEnabled) {
      congSound.load();
      congSound.play();
    }
  }

  function playGameOverSound() {
    if (_soundsEnabled) {
      gameOverSound.load();
      gameOverSound.play();
    }
  }

  function play() {
    if (_soundsEnabled) {
      playSound.load();
      playSound.play();
    }
  }

  function playShipSunkSound() {
    if (_soundsEnabled) {
      shipSunkSound.load();
      shipSunkSound.play();
    }
  }

  function _disableSounds() {
    _soundsEnabled = false;
  }
  function _enableSounds() {
    _soundsEnabled = true;
  }

  return { play, playCongSound, playGameOverSound, playShipSunkSound };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (soundFx);


/***/ }),

/***/ "./src/assets/AlegreyaSC-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/AlegreyaSC-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "761091f774afb47e7c21.ttf";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _modules_battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/battleship */ "./src/modules/battleship.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display */ "./src/modules/display.js");
/* harmony import */ var _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/soundfx */ "./src/modules/soundfx.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");






(() => {
  let player1 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player(""),
    player2 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player("", true, __webpack_require__.g.Worker ? true : false);

  _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.playerBoardCustomized, setPlayer);
  _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.initBoard, startGameLoop);
  _modules_display__WEBPACK_IMPORTED_MODULE_2__["default"].initPage();

  function setPlayer(areasList) {
    areasList.forEach(player1.addShip.bind(player1));
    _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.initBoard, {
      board1: player1.gameBoard,
      board2: player2.gameBoard,
    });
  }

  function checkWin(p1 = player1, p2 = player2) {
    if (p1.gameBoard.areAllSunk()) {
      return p2;
    } else if (p2.gameBoard.areAllSunk()) {
      return p1;
    }
    return null;
  }

  async function startGameLoop() {
    const turnsQueue = [player1, player2];
    while (true) {
      const player = turnsQueue.shift(),
        enemy = turnsQueue[0];

      _modules_display__WEBPACK_IMPORTED_MODULE_2__["default"].writeMessage(player.isComputer ? "Computer's Turn" : "Your Turn");

      const pos = await player.play(enemy.gameBoard),
        attackedShip = enemy.gameBoard.receiveAttack(pos);

      enemy.gameBoard.sunkShipLast
        ? _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__["default"].playShipSunkSound()
        : _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__["default"].play();

      _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.boardsChanged, {
        board1: player1.gameBoard,
        board2: player2.gameBoard,
      });

      const winner = checkWin();
      if (winner) {
        _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.gameOver, winner);
        winner.isComputer
          ? _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__["default"].playGameOverSound()
          : _modules_soundfx__WEBPACK_IMPORTED_MODULE_3__["default"].playCongSound();
        _modules_display__WEBPACK_IMPORTED_MODULE_2__["default"].writeMessage(winner.isComputer ? "You Loose!" : "You Win!");
        return;
      } else {
        if (attackedShip) {
          // Play again
          turnsQueue.pop();
          turnsQueue.push(player, enemy);
        } else {
          turnsQueue.push(player);
        }
      }
    }
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsb0lBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZ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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ0o7QUFDTjtBQUNBO0FBQ1o7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQix1REFBTTtBQUMxQixrQkFBa0IsdURBQU0sV0FBVyxxQkFBTTtBQUN6QztBQUNBLEVBQUUsdURBQU0sV0FBVyxtREFBTTtBQUN6QixFQUFFLHVEQUFNLFdBQVcsbURBQU07QUFDekIsRUFBRSx3REFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU0sU0FBUyxtREFBTTtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBTztBQUNqQixVQUFVLHdEQUFPO0FBQ2pCO0FBQ0EsTUFBTSx1REFBTSxTQUFTLG1EQUFNO0FBQzNCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBTSxTQUFTLG1EQUFNO0FBQzdCO0FBQ0EsWUFBWSx3REFBTztBQUNuQixZQUFZLHdEQUFPO0FBQ25CLFFBQVEsd0RBQU87QUFDZjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvY29uZ3JhdHVsYXRpb25zLm1wMyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9nYW1lb3Zlci5tcDMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvcGxheS5tcDMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc2hpcHN1bmsubXAzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zb3VuZGZ4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9BbGVncmV5YVNDLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogQWxlZ3JleWFTQztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWVtcHR5c3F1YXJlOiAjMDAwMDAwMzA7XHJcbiAgLS1taXNzZWRiZzogI2ZmZmZmZjgwO1xyXG4gIC0taGl0Ymc6ICNmZmI2YzFjYztcclxuICAtLXZhbGlkYmc6ICM5MGVlOTBjYztcclxuICAtLXNoaXBiZzogIzJlMmUyZTgwO1xyXG4gIC0tYm9keWJnOiBsaW5lYXItZ3JhZGllbnQoMjBkZWcsICNiNjAwOWIsICM3NDQxZTEpO1xyXG4gIC0tbGFzdDogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBBbGVncmV5YVNDLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuW2RyYWdnYWJsZT1cInRydWVcIl06aG92ZXIge1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLmNsaWNrYWJsZSxcclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGViZyB7XHJcbiAgY29sb3I6ICMyZTJlMmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDJweCAjMDAwMDAwMjA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHliZyk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiN0dXJucy1zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuI3NvdW5kcy1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNnJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jc291bmRzLWNvbnRyIHN2ZyB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4jc291bmRzLWNvbnRyIHN2Zzpub3QoLmFjdGl2ZSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEwO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDAwMDIwO1xyXG59XHJcblxyXG5kaWFsb2cgKiB7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNjdXN0b21pemUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jdmFsaWRhdGlvbi1tc2cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiN2YWxpZGF0aW9uLW1zZy5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDJweCAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIsXHJcbiNnYW1lb3Zlci1jb250ciB7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNnYW1lb3Zlci1idG5zLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jZ2FtZW92ZXItYnRucy1jb250ciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDZweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIgc3Bhbi52YWxpZCxcclxuLmhpbnRzIC52YWxpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250cj5zcGFuLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmhvdmVyLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250cj5zcGFuOmFjdGl2ZSxcclxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiNnYW1lb3Zlci1jb250ciBwIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2dhbWVvdmVyLWNvbnRyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXT5kaXYge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweDtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyIC5zcXVhcmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxODA7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cj5kaXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4O1xyXG59XHJcblxyXG4jc2hpcDEge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDIge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDMsXHJcbiNzaGlwNCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwNSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMyxcclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXA0IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXA1IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyNXB4KTtcclxufVxyXG5cclxuLmJvYXJkLWNvbnRyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMXB4O1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWNvbnRyIC5ib2FyZC1jb250ciB7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAyNXB4KSAvIHJlcGVhdCgxMCwgMjVweCk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnNxdWFyZXMsXHJcbi5oaW50cyBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVtcHR5c3F1YXJlKTtcclxufVxyXG5cclxuLnNoaXAtcG9zOm5vdCguaGl0KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcGJnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXRiZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pc3NlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkYmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taXNzZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zcXVhcmVzLmxhc3QtaGl0IHtcclxuICBib3JkZXI6IHZhcigtLWxhc3QpO1xyXG59XHJcblxyXG4jZ2FtZS1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuXHJcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXJzLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbiNoaW50cy1jb250ciB7XHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2hpbnRzLWNvbnRyICoge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4jaGludHMtY29udHI+ZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5oaW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoaW50cy1jb250ciBzcGFuIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAzcHggMnB4ICMwMDAwMDAyMDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgY29sb3I6ICMyZTJlMmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIgKiB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jYnViYmxlcy1jb250ciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5idWJibGVzIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhMDtcclxufVxyXG5cclxuLmJ1YmJsZXM6Zmlyc3QtY2hpbGQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGFuaW1hdGlvbjogYnViYmxlMSAyMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5idWJibGVzOm50aC1jaGlsZCgyKSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGFuaW1hdGlvbjogYnViYmxlMiAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5idWJibGVzOmxhc3QtY2hpbGQge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGFuaW1hdGlvbjogYnViYmxlMyAzMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlMSB7XHJcbiAgMCUge1xyXG4gICAgc2NhbGU6IDE7XHJcbiAgICBvcGFjaXR5OiAwLjEyO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHNjYWxlOiA2O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc2NhbGU6IDE7XHJcbiAgICBvcGFjaXR5OiAwLjEyO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidWJibGUyIHtcclxuICAwJSB7XHJcbiAgICBzY2FsZTogNDtcclxuICAgIG9wYWNpdHk6IDAuMDY7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgc2NhbGU6IDAuNTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHNjYWxlOiA0O1xyXG4gICAgb3BhY2l0eTogMC4wNjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlMyB7XHJcbiAgMCUge1xyXG4gICAgc2NhbGU6IDM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIC0xMDBweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgc2NhbGU6IDU7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHNjYWxlOiAzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAxMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoIDw9NzUwcHgpIHtcclxuICAjY3VzdG9taXplLWNvbnRyIHtcclxuICAgIHdpZHRoOiAzMTJweDtcclxuICB9XHJcblxyXG4gICNzaGlwcy1jb250ciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuYm9hcmQtY29udHIge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcclxuICB9XHJcblxyXG4gIC5ib2FyZC1jb250ciB7XHJcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDMwcHgpIC8gcmVwZWF0KDEwLCAzMHB4KTtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHls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ZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFFBQVE7SUFDUixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUixVQUFVO0lBQ1YsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLGtEQUFrRDtFQUNwRDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBbGVncmV5YVNDO1xcclxcbiAgc3JjOiB1cmwoJy4vQWxlZ3JleWFTQy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1lbXB0eXNxdWFyZTogIzAwMDAwMDMwO1xcclxcbiAgLS1taXNzZWRiZzogI2ZmZmZmZjgwO1xcclxcbiAgLS1oaXRiZzogI2ZmYjZjMWNjO1xcclxcbiAgLS12YWxpZGJnOiAjOTBlZTkwY2M7XFxyXFxuICAtLXNoaXBiZzogIzJlMmUyZTgwO1xcclxcbiAgLS1ib2R5Ymc6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgI2I2MDA5YiwgIzc0NDFlMSk7XFxyXFxuICAtLWxhc3Q6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEFsZWdyZXlhU0MsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUsXFxyXFxuYSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZWJnIHtcXHJcXG4gIGNvbG9yOiAjMmUyZTJlO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMnB4ICMwMDAwMDAyMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5YmcpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiN0dXJucy1zdGF0dXMge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc291bmRzLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzb3VuZHMtY29udHIgc3ZnIHtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZmlsbDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzb3VuZHMtY29udHIgc3ZnOm5vdCguYWN0aXZlKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhMDtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDAwMDIwO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cgKiB7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN2YWxpZGF0aW9uLW1zZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdmFsaWRhdGlvbi1tc2cuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMnB4IDEycHg7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyLFxcclxcbiNnYW1lb3Zlci1jb250ciB7XFxyXFxuICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZW92ZXItYnRucy1jb250ciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZW92ZXItYnRucy1jb250ciBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNnB4IDMwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jb250ciBzcGFuLnZhbGlkLFxcclxcbi5oaW50cyAudmFsaWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY3RybC1jb250cj5zcGFuLFxcclxcbiNnYW1lb3Zlci1jb250ciBidXR0b246aG92ZXIsXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWN0cmwtY29udHI+c3BhbjphY3RpdmUsXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVvdmVyLWNvbnRyIHAge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGgyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0+ZGl2IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyIC5zcXVhcmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE4MDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyPmRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNzaGlwMSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDMsXFxyXFxuI3NoaXA0IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDUge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDEge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDMsXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwNCB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwNSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyIC5ib2FyZC1jb250ciB7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDI1cHgpIC8gcmVwZWF0KDEwLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzLFxcclxcbi5oaW50cyBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVtcHR5c3F1YXJlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcG9zOm5vdCguaGl0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwYmcpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0YmcpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5taXNzZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkYmcpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5taXNzZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlcy5sYXN0LWhpdCB7XFxyXFxuICBib3JkZXI6IHZhcigtLWxhc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZS1jb250ciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVycy1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbiNoaW50cy1jb250ciB7XFxyXFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoaW50cy1jb250ciAqIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jaGludHMtY29udHI+ZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5oaW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpbnRzLWNvbnRyIHNwYW4ge1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IDJweCAjMDAwMDAwMjA7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGNvbG9yOiAjMmUyZTJlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgKiB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYnViYmxlcy1jb250ciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlcyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYTA7XFxyXFxufVxcclxcblxcclxcbi5idWJibGVzOmZpcnN0LWNoaWxkIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGFuaW1hdGlvbjogYnViYmxlMSAyMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5idWJibGVzOm50aC1jaGlsZCgyKSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGFuaW1hdGlvbjogYnViYmxlMiAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5idWJibGVzOmxhc3QtY2hpbGQge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGFuaW1hdGlvbjogYnViYmxlMyAzMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYnViYmxlMSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHNjYWxlOiAxO1xcclxcbiAgICBvcGFjaXR5OiAwLjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgc2NhbGU6IDY7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgc2NhbGU6IDE7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYnViYmxlMiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHNjYWxlOiA0O1xcclxcbiAgICBvcGFjaXR5OiAwLjA2O1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgc2NhbGU6IDAuNTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBzY2FsZTogNDtcXHJcXG4gICAgb3BhY2l0eTogMC4wNjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidWJibGUzIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgc2NhbGU6IDM7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAtMTAwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgc2NhbGU6IDU7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHNjYWxlOiAzO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMTAwcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9NzUwcHgpIHtcXHJcXG4gICNjdXN0b21pemUtY29udHIge1xcclxcbiAgICB3aWR0aDogMzEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2hpcHMtY29udHIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuYm9hcmQtY29udHIge1xcclxcbiAgICBoZWlnaHQ6IDIyMHB4O1xcclxcbiAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZC1jb250ciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzBweCkgLyByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBsYXllcnM6Zmlyc3QtY2hpbGQgLnNxdWFyZXMubWlzc2VkOjphZnRlciB7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICB3aWR0aDogM3B4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmU0ZjllZTU0NzZjOTM1NmM4YWYyZTBjNjdjZTljNjQubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZiMmViMWFhMWZmY2VjMTEwMTA3NjcwMjdhOTgxN2ViLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMjc3NGZkMGQ3NWJkZmVlZDJkYTRkZjBjMDcyMTAzMi5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTkwM2U0NGRkODE2NjgwMDE5NWQ5YWE3YTI4MDQ1MzQubXAzXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5cclxuY2xhc3MgU2hpcCB7XHJcbiAgbGVuZ3RoO1xyXG4gIGhpdHMgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzKys7XHJcbiAgfVxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA8PSB0aGlzLmhpdHM7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG4gIGJvYXJkID0gbmV3IE1hcCgpO1xyXG4gIHNoaXBzID0gbmV3IFNldCgpO1xyXG4gIG1pc3NlZEF0dGFja3MgPSBuZXcgU2V0KCk7XHJcbiAgbGFzdEF0dGFja2VkID0gbnVsbDtcclxuICBzdW5rU2hpcExhc3QgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoYWRkUmFuZG9tU2hpcHMgPSB0cnVlKSB7XHJcbiAgICB0aGlzLiNpbml0Qm9hcmQoKTtcclxuICAgIGlmIChhZGRSYW5kb21TaGlwcykgdGhpcy4jYWRkU2hpcHMoKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XHJcbiAgICB0aGlzLmxhc3RBdHRhY2tlZCA9IHNxdWFyZTtcclxuICAgIHRoaXMuc3Vua1NoaXBMYXN0ID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChjb25zdCBzaGlwT2JqIG9mIHRoaXMuc2hpcHMpIHtcclxuICAgICAgaWYgKHNoaXBPYmouY29vcmRzLmhhcyhzcXVhcmUpKSB7XHJcbiAgICAgICAgc2hpcE9iai5oaXRDb29yZHMuYWRkKHNxdWFyZSk7XHJcbiAgICAgICAgc2hpcE9iai5zaGlwLmhpdCgpO1xyXG5cclxuICAgICAgICBpZiAoc2hpcE9iai5zaGlwLmlzU3VuaygpKSB0aGlzLnN1bmtTaGlwTGFzdCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIEF0dGFjayBhZGphY2VudCBzcXVhcmVzIGlmIHNoaXAgaXMgc3Vua1xyXG4gICAgICAgIGlmIChzaGlwT2JqLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHNoaXBPYmouY29vcmRzKSB7XHJcbiAgICAgICAgICAgIFsuLi50aGlzLmdldEFkalNxdWFyZXMocG9zKV1cclxuICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKG9iaikgPT5cclxuICAgICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MuaGFzKG9iai5zcXVhcmUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcE9iai5jb29yZHMuaGFzKG9iai5zcXVhcmUpXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLmZvckVhY2goKHNxdWFyZU9iaikgPT4gdGhpcy5taXNzZWRBdHRhY2tzLmFkZChzcXVhcmVPYmouc3F1YXJlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWlzc2VkQXR0YWNrcy5hZGQoc3F1YXJlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZFNxdWFyZShzcXVhcmUpIHtcclxuICAgIHRoaXMuYm9hcmQuc2V0KHNxdWFyZSwgeyBzcXVhcmUsIGFkalNxdWFyZXM6IG5ldyBTZXQoKSB9KTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RTcXVhcmUoc3F1YXJlMSwgc3F1YXJlMikge1xyXG4gICAgaWYgKHRoaXMuYm9hcmQuaGFzKHNxdWFyZTEpICYmIHRoaXMuYm9hcmQuaGFzKHNxdWFyZTIpKSB7XHJcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpLmFkalNxdWFyZXMuYWRkKHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTIpKTtcclxuICAgICAgdGhpcy5ib2FyZC5nZXQoc3F1YXJlMikuYWRqU3F1YXJlcy5hZGQodGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWRqU3F1YXJlcyhzcXVhcmUpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkLmdldChzcXVhcmUpLmFkalNxdWFyZXM7XHJcbiAgfVxyXG5cclxuICBhcmVOZWlnaGJvb3JzKHNxdWFyZTEsIHNxdWFyZTIpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkLmdldChzcXVhcmUxKS5hZGpTcXVhcmVzLmhhcyhzcXVhcmUyKTtcclxuICB9XHJcblxyXG4gIGFyZUFsbFN1bmsoKSB7XHJcbiAgICBpZiAoIXRoaXMuc2hpcHMuc2l6ZSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuc2hpcHNdXHJcbiAgICAgIC5tYXAoKHNoaXBPYmopID0+IHNoaXBPYmouc2hpcC5pc1N1bmsoKSlcclxuICAgICAgLmV2ZXJ5KCh2YWwpID0+IHZhbCA9PT0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFibGVTcXVhcmVzKCkge1xyXG4gICAgY29uc3QgYm9hcmRTcXVhcmVzID0gWy4uLnRoaXMuYm9hcmQua2V5cygpXSxcclxuICAgICAgc2hpcFBvc0F0dGFja2VkID0gWy4uLnRoaXMuc2hpcHNdLmZsYXRNYXAoKG9iaikgPT4gWy4uLm9iai5oaXRDb29yZHNdKTtcclxuICAgIGNvbnN0IHNxdWFyZVNldCA9IGJvYXJkU3F1YXJlcy5maWx0ZXIoXHJcbiAgICAgIChzcXVhcmUpID0+XHJcbiAgICAgICAgISh0aGlzLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkgfHwgc2hpcFBvc0F0dGFja2VkLmluY2x1ZGVzKHNxdWFyZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBbLi4uc3F1YXJlU2V0XTtcclxuICB9XHJcblxyXG4gICNpbml0Qm9hcmQoKSB7XHJcbiAgICAvLyBBZGQgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIHRoaXMuYWRkU3F1YXJlKGAke2l9LCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbm5lY3Qgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBgJHtpfSwke2p9YDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgLSAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgI2FkZFNoaXBzKCkge1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg1KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoNCksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgzKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMiksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgfVxyXG4gICNnZXRSYW5kb21Cb29sKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuICAjYWRkU2hpcChzaGlwLCBpc1ZlcnRpY2FsID0gZmFsc2UpIHtcclxuICAgIHRoaXMuc2hpcHMuYWRkKHtcclxuICAgICAgc2hpcCxcclxuICAgICAgY29vcmRzOiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpLFxyXG4gICAgICBoaXRDb29yZHM6IG5ldyBTZXQoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuICAjY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICBjb29yZHNMaXN0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGNoZWNrIGlmICdwb3MnIGlzIHZhbGlkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBgJHt4fSwke3kgKyBpfWA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBvcyhwb3MpKSB7XHJcbiAgICAgICAgICBjb29yZHNMaXN0LmFkZChwb3MpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3ggKyBpfSwke3l9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb29yZHNMaXN0O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFBvcyhwb3MpIHtcclxuICAgIGlmICghdGhpcy5ib2FyZC5oYXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmNvb3Jkc10pO1xyXG4gICAgaWYgKGxpc3QuaW5jbHVkZXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGFkalBvcyA9IFsuLi50aGlzLmJvYXJkLmdldChwb3MpLmFkalNxdWFyZXNdLm1hcCgob2JqKSA9PiBvYmouc3F1YXJlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFkalBvcy5pbmNsdWRlcyhsaXN0W2ldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgZ2FtZUJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UsIHVzZVdvcmtlciA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pc0NvbXB1dGVyID0gaXNDb21wdXRlcjtcclxuICAgIGlmIChpc0NvbXB1dGVyKSB7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXNlV29ya2VyKVxyXG4gICAgICB0aGlzLndvcmtlciA9IG5ldyBXb3JrZXIoXHJcbiAgICAgICAgbmV3IFVSTChcIi4vYmF0dGxlc2hpcC53b3JrZXIuanNcIiwgaW1wb3J0Lm1ldGEudXJsKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkU2hpcChhcmVhKSB7XHJcbiAgICBpZiAodGhpcy4jaXNWYWxpZEFyZWEoYXJlYSkpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQuc2hpcHMuYWRkKHtcclxuICAgICAgICBzaGlwOiBuZXcgU2hpcChhcmVhLmxlbmd0aCksXHJcbiAgICAgICAgY29vcmRzOiBuZXcgU2V0KGFyZWEpLFxyXG4gICAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNpc1ZhbGlkQXJlYShhcmVhKSB7XHJcbiAgICAvLyBWZXJpZnkgdGhhdCBhbGwgY29vcmRpbmF0ZXMgaW4gYXJlYSBhcmUgYWRqYWNlbnQuLi5cclxuICAgIC8vIC4uLmFuZCBub3QgZGlhZ29uYWxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXJlYVtpICsgMV0pIHtcclxuICAgICAgICBjb25zdCBjdXJyUG9zID0gYXJlYVtpXS5zcGxpdChcIixcIiksXHJcbiAgICAgICAgICBuZXh0UG9zID0gYXJlYVtpICsgMV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICEoXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzFdXHJcbiAgICAgICAgICApIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJlYS5ldmVyeSh0aGlzLmdhbWVCb2FyZC5pc1ZhbGlkUG9zLmJpbmQodGhpcy5nYW1lQm9hcmQpKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbVNxdWFyZShib2FyZCkge1xyXG4gICAgY29uc3QgYXZhbGFibGVTcXVhcmVzID0gYm9hcmQuZ2V0QXZhaWxhYmxlU3F1YXJlcygpO1xyXG4gICAgcmV0dXJuIGF2YWxhYmxlU3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFsYWJsZVNxdWFyZXMubGVuZ3RoKV07XHJcbiAgfVxyXG5cclxuICAjY2FuRXhpc3RTaGlwKGJvYXJkLCBwb3MsIHNoaXBMZW5ndGgsIGlzVmVydGljYWwgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgYXJlYSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICBhcmVhLnB1c2goYCR7cG9zWzBdfSwke3BhcnNlSW50KHBvc1syXSkgKyBpfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFyZWEucHVzaChgJHtwYXJzZUludChwb3NbMF0pICsgaX0sJHtwb3NbMl19YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbGlkYXRlQXJlYXMoW2FyZWFdKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGhpdEFyZWFzID0gWy4uLmJvYXJkLnNoaXBzXS5mbGF0TWFwKChzaGlwT2JqKSA9PiBbXHJcbiAgICAgIC4uLnNoaXBPYmouaGl0Q29vcmRzLFxyXG4gICAgXSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhcmVhLmZvckVhY2goKHBvcykgPT4ge1xyXG4gICAgICAgIGlmIChib2FyZC5taXNzZWRBdHRhY2tzLmhhcyhwb3MpIHx8IGhpdEFyZWFzLmluY2x1ZGVzKHBvcykpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcmVhO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmVzdFNxdWFyZShib2FyZCkge1xyXG4gICAgbGV0IGJlc3RTcXVhcmVzID0gW10sXHJcbiAgICAgIG1heFByb2IgPSAtSW5maW5pdHksXHJcbiAgICAgIHByb2JNYXAgPSB0aGlzLiNjYWxjUHJvYk1hcChib2FyZCk7XHJcblxyXG4gICAgLy8gR3JvdXAgc3F1YXJlcyB3aXRoIHRoZSBoaWdoZXN0IHZhbHVlcyB0b2dldGhlclxyXG4gICAgZm9yIChjb25zdCBzcXVhcmUgb2YgcHJvYk1hcC5rZXlzKCkpIHtcclxuICAgICAgaWYgKHByb2JNYXAuZ2V0KHNxdWFyZSkgPiBtYXhQcm9iKSB7XHJcbiAgICAgICAgYmVzdFNxdWFyZXMgPSBbc3F1YXJlXTtcclxuICAgICAgICBtYXhQcm9iID0gcHJvYk1hcC5nZXQoc3F1YXJlKTtcclxuICAgICAgfSBlbHNlIGlmIChwcm9iTWFwLmdldChzcXVhcmUpID09PSBtYXhQcm9iKSB7XHJcbiAgICAgICAgYmVzdFNxdWFyZXMucHVzaChzcXVhcmUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgcmFuZG9tIHNxdWFyZSB3aXRoIHRoZSBoaWdoZXN0IHByb2JhYmlsaXR5XHJcbiAgICByZXR1cm4gYmVzdFNxdWFyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVzdFNxdWFyZXMubGVuZ3RoKV07XHJcbiAgfVxyXG5cclxuICAjY2FsY1Byb2JNYXAoYm9hcmQpIHtcclxuICAgIGxldCBwcm9iTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcclxuICAgICAgICBwcm9iTWFwLnNldChgJHt4fSwke3l9YCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwT2JqKSA9PiB7XHJcbiAgICAgIGlmICghc2hpcE9iai5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgYm9hcmQuYm9hcmQuZm9yRWFjaCgoX3ZhbCwgcG9zKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMuI2NhbkV4aXN0U2hpcChcclxuICAgICAgICAgICAgICBib2FyZCxcclxuICAgICAgICAgICAgICBwb3MsXHJcbiAgICAgICAgICAgICAgc2hpcE9iai5zaGlwLmxlbmd0aCxcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGhvcml6b250YWwgPSB0aGlzLiNjYW5FeGlzdFNoaXAoXHJcbiAgICAgICAgICAgICAgYm9hcmQsXHJcbiAgICAgICAgICAgICAgcG9zLFxyXG4gICAgICAgICAgICAgIHNoaXBPYmouc2hpcC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAodmVydGljYWwpXHJcbiAgICAgICAgICAgIHZlcnRpY2FsLmZvckVhY2goKHBvcykgPT4gcHJvYk1hcC5zZXQocG9zLCBwcm9iTWFwLmdldChwb3MpICsgMSkpO1xyXG4gICAgICAgICAgaWYgKGhvcml6b250YWwpXHJcbiAgICAgICAgICAgIGhvcml6b250YWwuZm9yRWFjaCgocG9zKSA9PiBwcm9iTWFwLnNldChwb3MsIHByb2JNYXAuZ2V0KHBvcykgKyAxKSk7XHJcbiAgICAgICAgICBjb25zdCBoaXRzID0gWy4uLmJvYXJkLnNoaXBzXS5mbGF0TWFwKChzaGlwT2JqKSA9PiBbXHJcbiAgICAgICAgICAgIC4uLnNoaXBPYmouaGl0Q29vcmRzLFxyXG4gICAgICAgICAgXSk7XHJcbiAgICAgICAgICBoaXRzLmZvckVhY2goKGhpdCkgPT4ge1xyXG4gICAgICAgICAgICBbLi4uYm9hcmQuZ2V0QWRqU3F1YXJlcyhoaXQpXVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gb2JqLnNxdWFyZTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgYCR7cGFyc2VJbnQoaGl0WzBdKSArIDF9LCR7cGFyc2VJbnQoaGl0WzJdKSArIDF9YCA9PT1cclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUgfHxcclxuICAgICAgICAgICAgICAgICAgYCR7cGFyc2VJbnQoaGl0WzBdKSAtIDF9LCR7cGFyc2VJbnQoaGl0WzJdKSAtIDF9YCA9PT1cclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUgfHxcclxuICAgICAgICAgICAgICAgICAgYCR7cGFyc2VJbnQoaGl0WzBdKSArIDF9LCR7cGFyc2VJbnQoaGl0WzJdKSAtIDF9YCA9PT1cclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUgfHxcclxuICAgICAgICAgICAgICAgICAgYCR7cGFyc2VJbnQoaGl0WzBdKSAtIDF9LCR7cGFyc2VJbnQoaGl0WzJdKSArIDF9YCA9PT0gc3F1YXJlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBvYmouc3F1YXJlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAhaGl0cy5pbmNsdWRlcyhzcXVhcmUpICYmXHJcbiAgICAgICAgICAgICAgICAgICFib2FyZC5taXNzZWRBdHRhY2tzLmhhcyhzcXVhcmUpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSArIDJ9LCR7c3F1YXJlWzJdfWApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5pbmNsdWRlcyhgJHtwYXJzZUludChzcXVhcmVbMF0pIC0gMn0sJHtzcXVhcmVbMl19YCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBoaXRzLmluY2x1ZGVzKGAke3NxdWFyZVswXX0sJHtwYXJzZUludChzcXVhcmVbMl0pICsgMn1gKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgLSAyfWApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBwcm9iTWFwLnNldChzcXVhcmUsIHByb2JNYXAuZ2V0KHNxdWFyZSkgKyA1KTsgLy9JbmNyZWFzZSBwcm9iYWJpbGl0eSBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzaGlwXHJcbiAgICAgICAgICAgICAgICAgIHByb2JNYXAuc2V0KHNxdWFyZSwgcHJvYk1hcC5nZXQoc3F1YXJlKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9iTWFwO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGxheShib2FyZCkge1xyXG4gICAgaWYgKHRoaXMuaXNDb21wdXRlcikge1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgMjIwKSk7IC8vIFNpbXVsYXRlIGRlbGF5XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy53b3JrZXJcclxuICAgICAgICA/IG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXMoZS5kYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoYm9hcmQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IFByb21pc2UucmVzb2x2ZSh0aGlzLmdldEJlc3RTcXVhcmUoYm9hcmQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZShldmVudHMudXNlclBsYXllZCwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoc3F1YXJlKSB7XHJcbiAgICAgICAgICByZXMoc3F1YXJlKTtcclxuICAgICAgICAgIHB1YlN1Yi51blN1YnNjcmliZShldmVudHMudXNlclBsYXllZCwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQXJlYXMoYXJlYXNMaXN0KSB7XHJcbiAgY29uc3QgcCA9IG5ldyBQbGF5ZXIoXCJcIiwgZmFsc2UpO1xyXG4gIHRyeSB7XHJcbiAgICBhcmVhc0xpc3QuZm9yRWFjaCgoYXJlYSkgPT4ge1xyXG4gICAgICBpZiAoIXAuYWRkU2hpcChhcmVhKSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIsIHZhbGlkYXRlQXJlYXMgfTtcclxuIiwiaW1wb3J0IHB1YlN1YiwgeyBldmVudHMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcclxuaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkLCB2YWxpZGF0ZUFyZWFzIH0gZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xyXG5cclxuY29uc3QgY3VzdG9taXppbmdNb2RhbCA9ICgoKSA9PiB7XHJcbiAgbGV0IF9kcmFnZ2luZ0xlbmd0aCxcclxuICAgIF9pc1ZlcnRpY2FsID0gZmFsc2UsXHJcbiAgICBfY3VyclNoaXBBcmVhID0gW10sXHJcbiAgICBfc2hpcEFyZWFzID0gW10sXHJcbiAgICBfYm9hcmQgPSBuZXcgR2FtZUJvYXJkKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaXNPcmllbnRhdGlvblZlcnRpY2FsKCkge1xyXG4gICAgcmV0dXJuIF9pc1ZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoT3JpZW50YXRpb24oKSB7XHJcbiAgICBfaXNWZXJ0aWNhbCA9ICFfaXNWZXJ0aWNhbDtcclxuICAgIGRvbS5zaGlwc0NvbnRyLnNldEF0dHJpYnV0ZShcImRhdGEtaXN2ZXJ0aWNhbFwiLCBfaXNWZXJ0aWNhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREcmFnZ2luZ0xlbmd0aChsZW5ndGgpIHtcclxuICAgIF9kcmFnZ2luZ0xlbmd0aCA9IGxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGVhckJvYXJkKCkge1xyXG4gICAgZG9tLmRpYWxvZ0JvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaChcclxuICAgICAgKGNoaWxkKSA9PiAoY2hpbGQuY2xhc3NOYW1lID0gXCJzcXVhcmVzXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmRWYWxpZGl0eSgpIHtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3F1YXJlcyA9IGRvbS5kaWFsb2dCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcInNwYW4udmFsaWQsIHNwYW4uaW52YWxpZFwiXHJcbiAgICApO1xyXG4gICAgdmFsaWRpdHlTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJldmVhbFNxdWFyZXNWYWxpZGl0eShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkgcmV0dXJuO1xyXG4gICAgX2NsZWFyQm9hcmRWYWxpZGl0eSgpO1xyXG5cclxuICAgIGNvbnN0IGFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBhbHRBcmVhc0xpc3QgPSBbXSxcclxuICAgICAgc3F1YXJlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZHJhZ2dpbmdMZW5ndGg7IGkrKykge1xyXG4gICAgICBfaXNWZXJ0aWNhbFxyXG4gICAgICAgID8gYXJlYXNMaXN0LnB1c2goYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgKyBpfWApXHJcbiAgICAgICAgOiBhcmVhc0xpc3QucHVzaChgJHtwYXJzZUludChzcXVhcmVbMF0pICsgaX0sJHtzcXVhcmVbMl19YCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhbHRBcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSAtIGl9YClcclxuICAgICAgICA6IGFsdEFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgLSBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsaWRhdGVBcmVhcyhbLi4uX3NoaXBBcmVhcywgYXJlYXNMaXN0XSkpIHtcclxuICAgICAgYXJlYXNMaXN0LmZvckVhY2goKHBvcykgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtwb3N9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKVxyXG4gICAgICApO1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gYXJlYXNMaXN0O1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhbHRBcmVhc0xpc3RdKSkge1xyXG4gICAgICBhbHRBcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhbHRBcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcm9wU2hpcChlKSB7XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgaWYgKF9jdXJyU2hpcEFyZWEubGVuZ3RoICYmIF9zaGlwQXJlYXMubGVuZ3RoIDwgNSkge1xyXG4gICAgICBlLnRhcmdldC5yZW1vdmUoKTtcclxuICAgICAgX3NoaXBBcmVhcy5wdXNoKF9jdXJyU2hpcEFyZWEpO1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gW107XHJcbiAgICAgIF91cGRhdGVCb2FyZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplQm9hcmQoKSB7XHJcbiAgICBkb20uc2hpcHNDb250ci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgX2JvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgX3NoaXBBcmVhcyA9IFsuLi5fYm9hcmQuc2hpcHNdLm1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouY29vcmRzXSk7XHJcbiAgICBfdXBkYXRlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZCgpIHtcclxuICAgIF9jbGVhckJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzXHJcbiAgICAgIC5mbGF0TWFwKChhcnIpID0+IGFycilcclxuICAgICAgLmZvckVhY2goKHNxdWFyZSkgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBvc1wiKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3ZhbGlkYXRlU2hpcHMoKSB7XHJcbiAgICBpZiAoX3NoaXBBcmVhcy5sZW5ndGggIT09IDUpIHtcclxuICAgICAgX3dyaXRlVmFsaWRhdGlvbk1zZyhcIkRyb3AgYWxsIDUgc2hpcHMgb24gdGhlIGJvYXJkIVwiLCAzMDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3dyaXRlVmFsaWRhdGlvbk1zZyhtc2csIGRlbGF5ID0gbnVsbCkge1xyXG4gICAgZG9tLnZhbGlkYXRpb25Nc2cudGV4dENvbnRlbnQgPSBtc2c7XHJcbiAgICBkb20udmFsaWRhdGlvbk1zZy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGlmIChkZWxheSAhPT0gbnVsbCkgc2V0VGltZW91dChfcmVtb3ZlVmFsaWRhdGlvbk1zZywgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3JlbW92ZVZhbGlkYXRpb25Nc2coKSB7XHJcbiAgICBkb20udmFsaWRhdGlvbk1zZy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBkb20udmFsaWRhdGlvbk1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhpdE1vZGFsKCkge1xyXG4gICAgaWYgKF92YWxpZGF0ZVNoaXBzKCkpIHtcclxuICAgICAgZG9tLmN1c3RvbWl6aW5nRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5wbGF5ZXJCb2FyZEN1c3RvbWl6ZWQsIF9zaGlwQXJlYXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldERyYWdnaW5nTGVuZ3RoLFxyXG4gICAgc3dpdGNoT3JpZW50YXRpb24sXHJcbiAgICBpc09yaWVudGF0aW9uVmVydGljYWwsXHJcbiAgICByZXZlYWxTcXVhcmVzVmFsaWRpdHksXHJcbiAgICBkcm9wU2hpcCxcclxuICAgIHJhbmRvbWl6ZUJvYXJkLFxyXG4gICAgZXhpdE1vZGFsLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBnYW1lT3Zlck1vZGFsID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBzaG93U3RhdHVzKHRpdGxlLCB0eHQpIHtcclxuICAgIGRvbS5nYW1lT3ZlclRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBkb20uZ2FtZU92ZXJUeHQudGV4dENvbnRlbnQgPSB0eHQ7XHJcbiAgICBkb20uZ2FtZU92ZXJEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleGl0TW9kYWwoKSB7XHJcbiAgICBkb20uZ2FtZU92ZXJEaWFsb2cuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHNob3dTdGF0dXMsIGV4aXRNb2RhbCB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZ2FtZUJvYXJkcyA9ICgoKSA9PiB7XHJcbiAgZnVuY3Rpb24gaW5pdEJvYXJkcygpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmluaXRCb2FyZCwgX3VwZGF0ZUJvYXJkcyk7XHJcbiAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5ib2FyZHNDaGFuZ2VkLCBfdXBkYXRlQm9hcmRzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZHMoeyBib2FyZDEsIGJvYXJkMiB9KSB7XHJcbiAgICBib2FyZDEubWlzc2VkQXR0YWNrcy5mb3JFYWNoKFxyXG4gICAgICBfZ2V0SXRlcmF0b3JDYWxsYmFjayhcIm1pc3NlZFwiLCBkb20ucGxheWVyQm9hcmQxKVxyXG4gICAgKTtcclxuICAgIFsuLi5ib2FyZDEuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5jb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcInNoaXAtcG9zXCIsIGRvbS5wbGF5ZXJCb2FyZDEpKTtcclxuICAgIFsuLi5ib2FyZDEuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5oaXRDb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcImhpdFwiLCBkb20ucGxheWVyQm9hcmQxKSk7XHJcbiAgICBpZiAoYm9hcmQxLmxhc3RBdHRhY2tlZCkge1xyXG4gICAgICBkb20ucGxheWVyQm9hcmQxXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdC1oaXRcIilcclxuICAgICAgICAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibGFzdC1oaXRcIikpO1xyXG5cclxuICAgICAgZG9tLnBsYXllckJvYXJkMVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9XCIke2JvYXJkMS5sYXN0QXR0YWNrZWR9XCJdYClcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImxhc3QtaGl0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkMi5taXNzZWRBdHRhY2tzLmZvckVhY2goXHJcbiAgICAgIF9nZXRJdGVyYXRvckNhbGxiYWNrKFwibWlzc2VkXCIsIGRvbS5wbGF5ZXJCb2FyZDIpXHJcbiAgICApO1xyXG4gICAgWy4uLmJvYXJkMi5zaGlwc11cclxuICAgICAgLmZsYXRNYXAoKHNoaXBPYmopID0+IFsuLi5zaGlwT2JqLmhpdENvb3Jkc10pXHJcbiAgICAgIC5mb3JFYWNoKF9nZXRJdGVyYXRvckNhbGxiYWNrKFwiaGl0XCIsIGRvbS5wbGF5ZXJCb2FyZDIpKTtcclxuICAgIGlmIChib2FyZDIubGFzdEF0dGFja2VkKSB7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDJcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0LWhpdFwiKVxyXG4gICAgICAgIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXN0LWhpdFwiKSk7XHJcblxyXG4gICAgICBkb20ucGxheWVyQm9hcmQyXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD1cIiR7Ym9hcmQyLmxhc3RBdHRhY2tlZH1cIl1gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwibGFzdC1oaXRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsYmFjayBnZW5lcmF0b3JcclxuICBmdW5jdGlvbiBfZ2V0SXRlcmF0b3JDYWxsYmFjayhjbGFzc05hbWUsIGJvYXJkKSB7XHJcbiAgICByZXR1cm4gKHNxdWFyZSkgPT5cclxuICAgICAgYm9hcmRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3NxdWFyZX0nXWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGluaXRCb2FyZHMgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIGluaXRQYWdlKCkge1xyXG4gICAgcHViU3ViLnN1YnNjcmliZShldmVudHMuZ2FtZU92ZXIsICh3aW5uZXIpID0+XHJcbiAgICAgIHdpbm5lci5pc0NvbXB1dGVyXHJcbiAgICAgICAgPyBnYW1lT3Zlck1vZGFsLnNob3dTdGF0dXMoXCJHYW1lIE92ZXIhXCIsIFwiWW91IExvb3NlLlwiKVxyXG4gICAgICAgIDogZ2FtZU92ZXJNb2RhbC5zaG93U3RhdHVzKFwiQ29uZ3JhdHVsYXRpb25zIVwiLCBcIiBZb3UgV2luLlwiKVxyXG4gICAgKTtcclxuXHJcbiAgICBfY2xlYXJCb2FyZHMoZG9tLmRpYWxvZ0JvYXJkLCBkb20ucGxheWVyQm9hcmQxLCBkb20ucGxheWVyQm9hcmQyKTtcclxuXHJcbiAgICAvLyBEcmF3IGJvYXJkc1xyXG4gICAgY29uc3QgYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IHggPSA5OyB4ID49IDA7IHgtLSkge1xyXG4gICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgZm9yIChsZXQgeSA9IDk7IHkgPj0gMDsgeS0tKSB7XHJcbiAgICAgICAgYXJyLnB1c2goYCR7eX0sJHt4fWApO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2goLi4uYXJyLnJldmVyc2UoKSk7XHJcbiAgICB9XHJcbiAgICBib2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlLWluZGV4XCIsIHNxdWFyZSk7XHJcbiAgICAgIG5vZGUuY2xhc3NOYW1lID0gXCJzcXVhcmVzXCI7XHJcblxyXG4gICAgICBkb20uZGlhbG9nQm9hcmQuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUoKSk7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDEuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUoKSk7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb20uY3VzdG9taXppbmdEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBnYW1lQm9hcmRzLmluaXRCb2FyZHMoKTtcclxuICAgIF9hZGRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGVhckJvYXJkcyguLi5ib2FyZHMpIHtcclxuICAgIGJvYXJkcy5mb3JFYWNoKChiKSA9PiAoYi5pbm5lckhUTUwgPSBudWxsKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfYWRkRXZlbnRzKCkge1xyXG4gICAgZG9tLnNoaXBzQ29udHIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT5cclxuICAgICAgY3VzdG9taXppbmdNb2RhbC5zZXREcmFnZ2luZ0xlbmd0aChlLnRhcmdldC5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICApO1xyXG4gICAgZG9tLmRpYWxvZ0JvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiZHJhZ292ZXJcIixcclxuICAgICAgY3VzdG9taXppbmdNb2RhbC5yZXZlYWxTcXVhcmVzVmFsaWRpdHlcclxuICAgICk7XHJcbiAgICBkb20uc2hpcHNDb250ci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBjdXN0b21pemluZ01vZGFsLmRyb3BTaGlwKTtcclxuXHJcbiAgICBkb20uY3VzdG9taXplQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiKSkge1xyXG4gICAgICAgIGNhc2UgXCJyb3RhdGVcIjpcclxuICAgICAgICAgIHJldHVybiBjdXN0b21pemluZ01vZGFsLnN3aXRjaE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgY2FzZSBcInJhbmRvbVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWl6aW5nTW9kYWwucmFuZG9taXplQm9hcmQoKTtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgIHJldHVybiBjdXN0b21pemluZ01vZGFsLmV4aXRNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb20uY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVPdmVyTW9kYWwuZXhpdE1vZGFsKTtcclxuICAgIGRvbS5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XHJcblxyXG4gICAgZG9tLnBsYXllckJvYXJkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIik7XHJcbiAgICAgIGlmIChzcXVhcmUgJiYgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNxdWFyZXNcIilcclxuICAgICAgICBwdWJTdWIucHVibGlzaChldmVudHMudXNlclBsYXllZCwgc3F1YXJlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5zb3VuZE9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvbS5zb3VuZE9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGRvbS5zb3VuZE9mZi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMuc291bmRvbkNsaWNrZWQsIG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBkb20uc291bmRPZmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9tLnNvdW5kT24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgZG9tLnNvdW5kT2ZmLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5zb3VuZG9mZkNsaWNrZWQsIG51bGwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cml0ZU1lc3NhZ2UobXNnLCBkZWxheSA9IG51bGwpIHtcclxuICAgIGRvbS50dXJuU3RhdHVzLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSBzZXRUaW1lb3V0KF9yZW1vdmVNZXNzYWdlLCBkZWxheSAqIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3JlbW92ZU1lc3NhZ2UoKSB7XHJcbiAgICBkb20udHVyblN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbml0UGFnZSwgd3JpdGVNZXNzYWdlIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xyXG4iLCJjb25zdCBkb20gPSB7XHJcbiAgY3VzdG9taXppbmdEaWFsb2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY3VzdG9taXppbmdEaWFsb2dcIl0nKSxcclxuICB2YWxpZGF0aW9uTXNnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInZhbGlkYXRpb25Nc2dcIl0nKSxcclxuICBnYW1lT3ZlckRpYWxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJnYW1lT3ZlckRpYWxvZ1wiXScpLFxyXG4gIGdhbWVPdmVyVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZ2FtZU92ZXJUaXRsZVwiXScpLFxyXG4gIGdhbWVPdmVyVHh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImdhbWVPdmVyVHh0XCJdJyksXHJcbiAgcmVzdGFydEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJyZXN0YXJ0QnRuXCJdJyksXHJcbiAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY2xvc2VCdG5cIl0nKSxcclxuICBkaWFsb2dCb2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJkaWFsb2dCb2FyZFwiXScpLFxyXG4gIHNoaXBzQ29udHI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwic2hpcHNDb250clwiXScpLFxyXG4gIGN1c3RvbWl6ZUJ0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY3VzdG9taXplQnRuc1wiXScpLFxyXG4gIHR1cm5TdGF0dXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwidHVybnNTdGF0dXNcIl0nKSxcclxuICBwbGF5ZXJCb2FyZDE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwicGxheWVyQm9hcmQxXCJdJyksXHJcbiAgcGxheWVyQm9hcmQyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInBsYXllckJvYXJkMlwiXScpLFxyXG4gIHNvdW5kT246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwic291bmRPZmZcIl0nKSxcclxuICBzb3VuZE9mZjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJzb3VuZE9uXCJdJyksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207XHJcbiIsImNvbnN0IHB1YlN1YiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGV2ZW50cyA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICBldmVudHNbZXZlbnRdID8gZXZlbnRzW2V2ZW50XS5wdXNoKGZuKSA6IChldmVudHNbZXZlbnRdID0gW2ZuXSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVuU3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgaWYgKGV2ZW50c1tldmVudF0pIHtcclxuICAgICAgZXZlbnRzW2V2ZW50XSA9IGV2ZW50c1tldmVudF0uZmlsdGVyKChmdW5jKSA9PiBmdW5jICE9PSBmbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcclxuICAgIGlmIChldmVudHNbZXZlbnRdKSBldmVudHNbZXZlbnRdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdWJzY3JpYmUsIHVuU3Vic2NyaWJlLCBwdWJsaXNoIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gIHBsYXllckJvYXJkQ3VzdG9taXplZDogXCJwbGF5ZXJCb2FyZEN1c3RvbWl6ZWRcIixcclxuICBpbml0Qm9hcmQ6IFwiaW5pdEJvYXJkXCIsXHJcbiAgZ2FtZU92ZXI6IFwiZ2FtZU92ZXJcIixcclxuICB1c2Vyc1R1cm46IFwidXNlcnNUdXJuXCIsXHJcbiAgY29tcHV0ZXJQbGF5ZWQ6IFwiY29tcHV0ZXJQbGF5ZWRcIixcclxuICB1c2VyUGxheWVkOiBcInVzZXJQbGF5ZWRcIixcclxuICBib2FyZHNDaGFuZ2VkOiBcImJvYXJkc0NoYW5nZWRcIixcclxuICBzb3VuZG9uQ2xpY2tlZDogXCJzb3VuZG9uQ2xpY2tlZFwiLFxyXG4gIHNvdW5kb2ZmQ2xpY2tlZDogXCJzb3VuZG9mZkNsaWNrZWRcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHB1YlN1YjtcclxuIiwiaW1wb3J0IGNvbmdTcmMgZnJvbSBcIi4uL2Fzc2V0cy9jb25ncmF0dWxhdGlvbnMubXAzXCI7XHJcbmltcG9ydCBnYW1lT3ZlclNyYyBmcm9tIFwiLi4vYXNzZXRzL2dhbWVvdmVyLm1wM1wiO1xyXG5pbXBvcnQgcGxheVNyYyBmcm9tIFwiLi4vYXNzZXRzL3BsYXkubXAzXCI7XHJcbmltcG9ydCBzaGlwU3Vua1NyYyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzdW5rLm1wM1wiO1xyXG5pbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5cclxuY29uc3Qgc291bmRGeCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY29uZ1NvdW5kID0gbmV3IEF1ZGlvKGNvbmdTcmMpLFxyXG4gICAgZ2FtZU92ZXJTb3VuZCA9IG5ldyBBdWRpbyhnYW1lT3ZlclNyYyksXHJcbiAgICBwbGF5U291bmQgPSBuZXcgQXVkaW8ocGxheVNyYyksXHJcbiAgICBzaGlwU3Vua1NvdW5kID0gbmV3IEF1ZGlvKHNoaXBTdW5rU3JjKTtcclxuXHJcbiAgbGV0IF9zb3VuZHNFbmFibGVkID0gdHJ1ZTtcclxuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5zb3VuZG9uQ2xpY2tlZCwgX2VuYWJsZVNvdW5kcyk7XHJcbiAgcHViU3ViLnN1YnNjcmliZShldmVudHMuc291bmRvZmZDbGlja2VkLCBfZGlzYWJsZVNvdW5kcyk7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlDb25nU291bmQoKSB7XHJcbiAgICBpZiAoX3NvdW5kc0VuYWJsZWQpIHtcclxuICAgICAgY29uZ1NvdW5kLmxvYWQoKTtcclxuICAgICAgY29uZ1NvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlHYW1lT3ZlclNvdW5kKCkge1xyXG4gICAgaWYgKF9zb3VuZHNFbmFibGVkKSB7XHJcbiAgICAgIGdhbWVPdmVyU291bmQubG9hZCgpO1xyXG4gICAgICBnYW1lT3ZlclNvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XHJcbiAgICBpZiAoX3NvdW5kc0VuYWJsZWQpIHtcclxuICAgICAgcGxheVNvdW5kLmxvYWQoKTtcclxuICAgICAgcGxheVNvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlTaGlwU3Vua1NvdW5kKCkge1xyXG4gICAgaWYgKF9zb3VuZHNFbmFibGVkKSB7XHJcbiAgICAgIHNoaXBTdW5rU291bmQubG9hZCgpO1xyXG4gICAgICBzaGlwU3Vua1NvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9kaXNhYmxlU291bmRzKCkge1xyXG4gICAgX3NvdW5kc0VuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gX2VuYWJsZVNvdW5kcygpIHtcclxuICAgIF9zb3VuZHNFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHBsYXksIHBsYXlDb25nU291bmQsIHBsYXlHYW1lT3ZlclNvdW5kLCBwbGF5U2hpcFN1bmtTb3VuZCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc291bmRGeDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHB1YlN1YiwgeyBldmVudHMgfSBmcm9tIFwiLi9tb2R1bGVzL3B1YnN1YlwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2JhdHRsZXNoaXBcIjtcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCBzb3VuZEZ4IGZyb20gXCIuL21vZHVsZXMvc291bmRmeFwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS5jc3NcIjtcclxuXHJcbigoKSA9PiB7XHJcbiAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKFwiXCIpLFxyXG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJcIiwgdHJ1ZSwgZ2xvYmFsLldvcmtlciA/IHRydWUgOiBmYWxzZSk7XHJcblxyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLnBsYXllckJvYXJkQ3VzdG9taXplZCwgc2V0UGxheWVyKTtcclxuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5pbml0Qm9hcmQsIHN0YXJ0R2FtZUxvb3ApO1xyXG4gIGRpc3BsYXkuaW5pdFBhZ2UoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWVyKGFyZWFzTGlzdCkge1xyXG4gICAgYXJlYXNMaXN0LmZvckVhY2gocGxheWVyMS5hZGRTaGlwLmJpbmQocGxheWVyMSkpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLmluaXRCb2FyZCwge1xyXG4gICAgICBib2FyZDE6IHBsYXllcjEuZ2FtZUJvYXJkLFxyXG4gICAgICBib2FyZDI6IHBsYXllcjIuZ2FtZUJvYXJkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1dpbihwMSA9IHBsYXllcjEsIHAyID0gcGxheWVyMikge1xyXG4gICAgaWYgKHAxLmdhbWVCb2FyZC5hcmVBbGxTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuIHAyO1xyXG4gICAgfSBlbHNlIGlmIChwMi5nYW1lQm9hcmQuYXJlQWxsU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBwMTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lTG9vcCgpIHtcclxuICAgIGNvbnN0IHR1cm5zUXVldWUgPSBbcGxheWVyMSwgcGxheWVyMl07XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBjb25zdCBwbGF5ZXIgPSB0dXJuc1F1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgZW5lbXkgPSB0dXJuc1F1ZXVlWzBdO1xyXG5cclxuICAgICAgZGlzcGxheS53cml0ZU1lc3NhZ2UocGxheWVyLmlzQ29tcHV0ZXIgPyBcIkNvbXB1dGVyJ3MgVHVyblwiIDogXCJZb3VyIFR1cm5cIik7XHJcblxyXG4gICAgICBjb25zdCBwb3MgPSBhd2FpdCBwbGF5ZXIucGxheShlbmVteS5nYW1lQm9hcmQpLFxyXG4gICAgICAgIGF0dGFja2VkU2hpcCA9IGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHBvcyk7XHJcblxyXG4gICAgICBlbmVteS5nYW1lQm9hcmQuc3Vua1NoaXBMYXN0XHJcbiAgICAgICAgPyBzb3VuZEZ4LnBsYXlTaGlwU3Vua1NvdW5kKClcclxuICAgICAgICA6IHNvdW5kRngucGxheSgpO1xyXG5cclxuICAgICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLmJvYXJkc0NoYW5nZWQsIHtcclxuICAgICAgICBib2FyZDE6IHBsYXllcjEuZ2FtZUJvYXJkLFxyXG4gICAgICAgIGJvYXJkMjogcGxheWVyMi5nYW1lQm9hcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW4oKTtcclxuICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5nYW1lT3Zlciwgd2lubmVyKTtcclxuICAgICAgICB3aW5uZXIuaXNDb21wdXRlclxyXG4gICAgICAgICAgPyBzb3VuZEZ4LnBsYXlHYW1lT3ZlclNvdW5kKClcclxuICAgICAgICAgIDogc291bmRGeC5wbGF5Q29uZ1NvdW5kKCk7XHJcbiAgICAgICAgZGlzcGxheS53cml0ZU1lc3NhZ2Uod2lubmVyLmlzQ29tcHV0ZXIgPyBcIllvdSBMb29zZSFcIiA6IFwiWW91IFdpbiFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChhdHRhY2tlZFNoaXApIHtcclxuICAgICAgICAgIC8vIFBsYXkgYWdhaW5cclxuICAgICAgICAgIHR1cm5zUXVldWUucG9wKCk7XHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnB1c2gocGxheWVyLCBlbmVteSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHR1cm5zUXVldWUucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9