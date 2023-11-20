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
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,+DAAuD;AACzD;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,kDAAkD;EAClD,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,iEAAiE;EACjE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,2BAA2B;EAC3B,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;;;EAGE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,wBAAwB;AAC1B;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,kDAAkD;AACpD;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,2BAA2B;EAC3B,mCAAmC;EACnC,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,2CAA2C;AAC7C;;AAEA;EACE;IACE,QAAQ;IACR,aAAa;EACf;;EAEA;IACE,QAAQ;IACR,UAAU;EACZ;;EAEA;IACE,QAAQ;IACR,aAAa;EACf;AACF;;AAEA;EACE;IACE,QAAQ;IACR,aAAa;EACf;;EAEA;IACE,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,QAAQ;IACR,aAAa;EACf;AACF;;AAEA;EACE;IACE,QAAQ;IACR,UAAU;IACV,mCAAmC;EACrC;;EAEA;IACE,QAAQ;IACR,YAAY;IACZ,2BAA2B;EAC7B;;EAEA;IACE,QAAQ;IACR,UAAU;IACV,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,gDAAgD;EAClD;;EAEA;IACE,kDAAkD;EACpD;;EAEA;IACE,WAAW;IACX,UAAU;EACZ;AACF","sourcesContent":["@font-face {\r\n  font-family: AlegreyaSC;\r\n  src: url('./AlegreyaSC-Regular.ttf') format('truetype');\r\n}\r\n\r\n:root {\r\n  --emptysquare: #00000030;\r\n  --missedbg: #ffffff80;\r\n  --hitbg: #ffb6c1cc;\r\n  --validbg: #90ee90cc;\r\n  --shipbg: #2e2e2e80;\r\n  --bodybg: linear-gradient(20deg, #b6009b, #7441e1);\r\n  --last: 2px solid;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: AlegreyaSC, Georgia, 'Times New Roman', Times, serif;\r\n  color: white;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n.whitebg {\r\n  color: #2e2e2e;\r\n  background: white;\r\n  box-shadow: 0 1px 3px 2px #00000020;\r\n  border-radius: 5px;\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  background: var(--bodybg);\r\n  min-height: 100vh;\r\n}\r\n\r\n#turns-status {\r\n  padding: 0.5rem;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: lighter;\r\n  color: black;\r\n  background-color: #ffffffa0;\r\n  -webkit-backdrop-filter: blur(15px);\r\n  backdrop-filter: blur(15px);\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\ndialog * {\r\n  font-weight: lighter;\r\n  color: inherit;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#validation-msg {\r\n  display: none;\r\n}\r\n\r\n#validation-msg.active {\r\n  display: block;\r\n  padding: 2px 12px;\r\n  box-shadow: none;\r\n}\r\n\r\n#customize-contr,\r\n#gameover-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#gameover-btns-contr {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#gameover-btns-contr button {\r\n  padding: 6px 30px !important;\r\n}\r\n\r\n#customize-contr span.valid,\r\n.hints .valid {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n#customize-ctrl-contr>span,\r\n#gameover-contr button:hover,\r\n#gameover-contr button {\r\n  outline: none;\r\n  border: none;\r\n  padding: 5px;\r\n}\r\n\r\n#customize-ctrl-contr>span:active,\r\n#gameover-contr button:active {\r\n  box-shadow: none;\r\n}\r\n\r\n#gameover-contr p {\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n\r\n#gameover-contr h2 {\r\n  margin: 0;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"]>div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: #51515180;\r\n}\r\n\r\n#ships-contr>div {\r\n  display: grid;\r\n  gap: 1px;\r\n  grid-template-rows: 25px;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  gap: 1px;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares,\r\n.hints span {\r\n  position: relative;\r\n  border-radius: 3px;\r\n  background-color: var(--emptysquare);\r\n}\r\n\r\n.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg) !important;\r\n}\r\n\r\n.hit {\r\n  background-color: var(--hitbg) !important;\r\n}\r\n\r\n.missed {\r\n  background-color: var(--missedbg) !important;\r\n}\r\n\r\n.missed::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.squares.last-hit {\r\n  border: var(--last);\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\n#hints-contr {\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#hints-contr * {\r\n  color: inherit;\r\n}\r\n\r\n#hints-contr>div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.hints {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#hints-contr span {\r\n  box-shadow: 0 2px 3px 2px #00000020;\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\nfooter {\r\n  color: #2e2e2e;\r\n  background-color: #ffffffa0;\r\n  backdrop-filter: blur(15px);\r\n  -webkit-backdrop-filter: blur(15px);\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  flex-grow: 1;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter * {\r\n  color: inherit;\r\n}\r\n\r\nfooter a {\r\n  font-size: small;\r\n  font-weight: bold;\r\n}\r\n\r\n#bubbles-contr {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.bubbles {\r\n  border-radius: 50%;\r\n  position: fixed;\r\n  background-color: #ffffffa0;\r\n}\r\n\r\n.bubbles:first-child {\r\n  transform: translate(-50%, -50%);\r\n  height: 150px;\r\n  width: 150px;\r\n  animation: bubble1 20s ease-in-out infinite;\r\n}\r\n\r\n.bubbles:nth-child(2) {\r\n  height: 60px;\r\n  width: 60px;\r\n  animation: bubble2 10s ease-in-out infinite;\r\n}\r\n\r\n.bubbles:last-child {\r\n  height: 100px;\r\n  width: 100px;\r\n  animation: bubble3 30s ease-in-out infinite;\r\n}\r\n\r\n@keyframes bubble1 {\r\n  0% {\r\n    scale: 1;\r\n    opacity: 0.12;\r\n  }\r\n\r\n  50% {\r\n    scale: 6;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    scale: 1;\r\n    opacity: 0.12;\r\n  }\r\n}\r\n\r\n@keyframes bubble2 {\r\n  0% {\r\n    scale: 4;\r\n    opacity: 0.06;\r\n  }\r\n\r\n  50% {\r\n    scale: 0.5;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    scale: 4;\r\n    opacity: 0.06;\r\n  }\r\n}\r\n\r\n@keyframes bubble3 {\r\n  0% {\r\n    scale: 3;\r\n    opacity: 0;\r\n    transform: translate(-90px, -100px);\r\n  }\r\n\r\n  50% {\r\n    scale: 5;\r\n    opacity: 0.1;\r\n    transform: translateX(90px);\r\n  }\r\n\r\n  100% {\r\n    scale: 3;\r\n    opacity: 0;\r\n    transform: translate(-90px, 100px);\r\n  }\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  }\r\n\r\n  .board-contr {\r\n    grid-template: repeat(10, 30px) / repeat(10, 30px);\r\n  }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    height: 3px;\r\n    width: 3px;\r\n  }\r\n}"],"sourceRoot":""}]);
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

  constructor(name, isComputer = false) {
    this.name = name;
    this.isComputer = isComputer;
    if (isComputer) {
      this.gameBoard = new GameBoard();
    } else {
      this.gameBoard = new GameBoard(false);
    }
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
      if (!board.missedAttacks.size)
        return Promise.resolve(this.randomSquare(board));
      return Promise.resolve(this.getBestSquare(board));
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
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].gameOverTitle.textContent = title
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





const soundFx = (() => {
  const congSound = new Audio(_assets_congratulations_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]),
    gameOverSound = new Audio(_assets_gameover_mp3__WEBPACK_IMPORTED_MODULE_1__["default"]),
    playSound = new Audio(_assets_play_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]),
    shipSunkSound = new Audio(_assets_shipsunk_mp3__WEBPACK_IMPORTED_MODULE_3__["default"]);

  function playCongSound() {
    congSound.load();
    congSound.play();
  }

  function playGameOverSound() {
    gameOverSound.load();
    gameOverSound.play();
  }

  function play() {
    playSound.load();
    playSound.play();
  }

  function playShipSunkSound() {
    shipSunkSound.load();
    shipSunkSound.play();
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
    player2 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player("", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsb0lBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxV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Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUIsMEJBQTBCLEVBQUUsR0FBRyxFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUIsMkJBQTJCLEVBQUUsR0FBRyxFQUFFO0FBQ2xDLHVDQUF1QyxNQUFNLEdBQUcsRUFBRTtBQUNsRCx1Q0FBdUMsTUFBTSxHQUFHLEVBQUU7QUFDbEQsdUNBQXVDLEVBQUUsR0FBRyxNQUFNO0FBQ2xELHVDQUF1QyxFQUFFLEdBQUcsTUFBTTtBQUNsRCx1Q0FB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IndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL2NvbmdyYXR1bGF0aW9ucy5tcDMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvZ2FtZW92ZXIubXAzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3BsYXkubXAzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3NoaXBzdW5rLm1wMyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc291bmRmeC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQWxlZ3JleWFTQy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEFsZWdyZXlhU0M7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1lbXB0eXNxdWFyZTogIzAwMDAwMDMwO1xyXG4gIC0tbWlzc2VkYmc6ICNmZmZmZmY4MDtcclxuICAtLWhpdGJnOiAjZmZiNmMxY2M7XHJcbiAgLS12YWxpZGJnOiAjOTBlZTkwY2M7XHJcbiAgLS1zaGlwYmc6ICMyZTJlMmU4MDtcclxuICAtLWJvZHliZzogbGluZWFyLWdyYWRpZW50KDIwZGVnLCAjYjYwMDliLCAjNzQ0MWUxKTtcclxuICAtLWxhc3Q6IDJweCBzb2xpZDtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogQWxlZ3JleWFTQywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbltkcmFnZ2FibGU9XCJ0cnVlXCJdOmhvdmVyIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5jbGlja2FibGUsXHJcbmEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndoaXRlYmcge1xyXG4gIGNvbG9yOiAjMmUyZTJlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAycHggIzAwMDAwMDIwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5YmcpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jdHVybnMtc3RhdHVzIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEwO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDAwMDIwO1xyXG59XHJcblxyXG5kaWFsb2cgKiB7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNjdXN0b21pemUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jdmFsaWRhdGlvbi1tc2cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiN2YWxpZGF0aW9uLW1zZy5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDJweCAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIsXHJcbiNnYW1lb3Zlci1jb250ciB7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNnYW1lb3Zlci1idG5zLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jZ2FtZW92ZXItYnRucy1jb250ciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDZweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIgc3Bhbi52YWxpZCxcclxuLmhpbnRzIC52YWxpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250cj5zcGFuLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmhvdmVyLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250cj5zcGFuOmFjdGl2ZSxcclxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiNnYW1lb3Zlci1jb250ciBwIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2dhbWVvdmVyLWNvbnRyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXT5kaXYge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweDtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyIC5zcXVhcmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxODA7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cj5kaXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4O1xyXG59XHJcblxyXG4jc2hpcDEge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDIge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDMsXHJcbiNzaGlwNCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwNSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMyxcclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXA0IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXA1IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyNXB4KTtcclxufVxyXG5cclxuLmJvYXJkLWNvbnRyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMXB4O1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWNvbnRyIC5ib2FyZC1jb250ciB7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAyNXB4KSAvIHJlcGVhdCgxMCwgMjVweCk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnNxdWFyZXMsXHJcbi5oaW50cyBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVtcHR5c3F1YXJlKTtcclxufVxyXG5cclxuLnNoaXAtcG9zOm5vdCguaGl0KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcGJnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXRiZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pc3NlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkYmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taXNzZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zcXVhcmVzLmxhc3QtaGl0IHtcclxuICBib3JkZXI6IHZhcigtLWxhc3QpO1xyXG59XHJcblxyXG4jZ2FtZS1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuXHJcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXJzLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbiNoaW50cy1jb250ciB7XHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2hpbnRzLWNvbnRyICoge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4jaGludHMtY29udHI+ZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5oaW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoaW50cy1jb250ciBzcGFuIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAzcHggMnB4ICMwMDAwMDAyMDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgY29sb3I6ICMyZTJlMmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIgKiB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jYnViYmxlcy1jb250ciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5idWJibGVzIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhMDtcclxufVxyXG5cclxuLmJ1YmJsZXM6Zmlyc3QtY2hpbGQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGFuaW1hdGlvbjogYnViYmxlMSAyMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5idWJibGVzOm50aC1jaGlsZCgyKSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGFuaW1hdGlvbjogYnViYmxlMiAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5idWJibGVzOmxhc3QtY2hpbGQge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGFuaW1hdGlvbjogYnViYmxlMyAzMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlMSB7XHJcbiAgMCUge1xyXG4gICAgc2NhbGU6IDE7XHJcbiAgICBvcGFjaXR5OiAwLjEyO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHNjYWxlOiA2O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc2NhbGU6IDE7XHJcbiAgICBvcGFjaXR5OiAwLjEyO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidWJibGUyIHtcclxuICAwJSB7XHJcbiAgICBzY2FsZTogNDtcclxuICAgIG9wYWNpdHk6IDAuMDY7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgc2NhbGU6IDAuNTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHNjYWxlOiA0O1xyXG4gICAgb3BhY2l0eTogMC4wNjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlMyB7XHJcbiAgMCUge1xyXG4gICAgc2NhbGU6IDM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIC0xMDBweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgc2NhbGU6IDU7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHNjYWxlOiAzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAxMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoIDw9NzUwcHgpIHtcclxuICAjY3VzdG9taXplLWNvbnRyIHtcclxuICAgIHdpZHRoOiAzMTJweDtcclxuICB9XHJcblxyXG4gICNzaGlwcy1jb250ciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuYm9hcmQtY29udHIge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcclxuICB9XHJcblxyXG4gIC5ib2FyZC1jb250ciB7XHJcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDMwcHgpIC8gcmVwZWF0KDEwLCAzMHB4KTtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsK0RBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFx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QUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFFBQVE7SUFDUixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFVBQVU7SUFDVixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFFBQVE7SUFDUixVQUFVO0lBQ1Ysa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0Usa0RBQWtEO0VBQ3BEOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEFsZWdyZXlhU0M7XFxyXFxuICBzcmM6IHVybCgnLi9BbGVncmV5YVNDLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWVtcHR5c3F1YXJlOiAjMDAwMDAwMzA7XFxyXFxuICAtLW1pc3NlZGJnOiAjZmZmZmZmODA7XFxyXFxuICAtLWhpdGJnOiAjZmZiNmMxY2M7XFxyXFxuICAtLXZhbGlkYmc6ICM5MGVlOTBjYztcXHJcXG4gIC0tc2hpcGJnOiAjMmUyZTJlODA7XFxyXFxuICAtLWJvZHliZzogbGluZWFyLWdyYWRpZW50KDIwZGVnLCAjYjYwMDliLCAjNzQ0MWUxKTtcXHJcXG4gIC0tbGFzdDogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogQWxlZ3JleWFTQywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZSxcXHJcXG5hIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlYmcge1xcclxcbiAgY29sb3I6ICMyZTJlMmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAycHggIzAwMDAwMDIwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHliZyk7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3R1cm5zLXN0YXR1cyB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEwO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAjMDAwMDAwMjA7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyAqIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZhbGlkYXRpb24tbXNnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN2YWxpZGF0aW9uLW1zZy5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAycHggMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY29udHIsXFxyXFxuI2dhbWVvdmVyLWNvbnRyIHtcXHJcXG4gIHBhZGRpbmc6IDE0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNnYW1lb3Zlci1idG5zLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNnYW1lb3Zlci1idG5zLWNvbnRyIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHggMzBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyIHNwYW4udmFsaWQsXFxyXFxuLmhpbnRzIC52YWxpZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyPnNwYW4sXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjpob3ZlcixcXHJcXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY3RybC1jb250cj5zcGFuOmFjdGl2ZSxcXHJcXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZW92ZXItY29udHIgcCB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZW92ZXItY29udHIgaDIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXT5kaXYge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIgLnNxdWFyZXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxNTE1MTgwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHI+ZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAxIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwMyxcXHJcXG4jc2hpcDQge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwNSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwMSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwMiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwMyxcXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXA0IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXA1IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY29udHIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMXB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzNXB4KSAvIHJlcGVhdCgxMCwgMzVweCk7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY29udHIgLmJvYXJkLWNvbnRyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMjVweCkgLyByZXBlYXQoMTAsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWN0cmwtY29udHIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZXMsXFxyXFxuLmhpbnRzIHNwYW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZW1wdHlzcXVhcmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wb3M6bm90KC5oaXQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBiZykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXRiZykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWRiZykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3NlZDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzLmxhc3QtaGl0IHtcXHJcXG4gIGJvcmRlcjogdmFyKC0tbGFzdCk7XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnM6bGFzdC1jaGlsZCBzcGFuLnNxdWFyZXM6bm90KC5taXNzZWQpOm5vdCguaGl0KTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJzLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hpbnRzLWNvbnRyIHtcXHJcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpbnRzLWNvbnRyICoge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbiNoaW50cy1jb250cj5kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGludHMtY29udHIgc3BhbiB7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAzcHggMnB4ICMwMDAwMDAyMDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgY29sb3I6ICMyZTJlMmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYTA7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAqIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNidWJibGVzLWNvbnRyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idWJibGVzIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZXM6Zmlyc3QtY2hpbGQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgYW5pbWF0aW9uOiBidWJibGUxIDIwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZXM6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgYW5pbWF0aW9uOiBidWJibGUyIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZXM6bGFzdC1jaGlsZCB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBidWJibGUzIDMwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidWJibGUxIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgc2NhbGU6IDE7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBzY2FsZTogNjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBzY2FsZTogMTtcXHJcXG4gICAgb3BhY2l0eTogMC4xMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBidWJibGUyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgc2NhbGU6IDQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuMDY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBzY2FsZTogMC41O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHNjYWxlOiA0O1xcclxcbiAgICBvcGFjaXR5OiAwLjA2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ1YmJsZTMge1xcclxcbiAgMCUge1xcclxcbiAgICBzY2FsZTogMztcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIC0xMDBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBzY2FsZTogNTtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgc2NhbGU6IDM7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAxMDBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD03NTBweCkge1xcclxcbiAgI2N1c3RvbWl6ZS1jb250ciB7XFxyXFxuICAgIHdpZHRoOiAzMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaGlwcy1jb250ciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5ib2FyZC1jb250ciB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvYXJkLWNvbnRyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzMHB4KSAvIHJlcGVhdCgxMCwgMzBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuc3F1YXJlcy5taXNzZWQ6OmFmdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiAzcHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZTRmOWVlNTQ3NmM5MzU2YzhhZjJlMGM2N2NlOWM2NC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmIyZWIxYWExZmZjZWMxMTAxMDc2NzAyN2E5ODE3ZWIubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEyNzc0ZmQwZDc1YmRmZWVkMmRhNGRmMGMwNzIxMDMyLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1OTAzZTQ0ZGQ4MTY2ODAwMTk1ZDlhYTdhMjgwNDUzNC5tcDNcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJTdWIsIHsgZXZlbnRzIH0gZnJvbSBcIi4vcHVic3ViXCI7XHJcblxyXG5jbGFzcyBTaGlwIHtcclxuICBsZW5ndGg7XHJcbiAgaGl0cyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0cztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgYm9hcmQgPSBuZXcgTWFwKCk7XHJcbiAgc2hpcHMgPSBuZXcgU2V0KCk7XHJcbiAgbWlzc2VkQXR0YWNrcyA9IG5ldyBTZXQoKTtcclxuICBsYXN0QXR0YWNrZWQgPSBudWxsO1xyXG4gIHN1bmtTaGlwTGFzdCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhZGRSYW5kb21TaGlwcyA9IHRydWUpIHtcclxuICAgIHRoaXMuI2luaXRCb2FyZCgpO1xyXG4gICAgaWYgKGFkZFJhbmRvbVNoaXBzKSB0aGlzLiNhZGRTaGlwcygpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUF0dGFjayhzcXVhcmUpIHtcclxuICAgIHRoaXMubGFzdEF0dGFja2VkID0gc3F1YXJlO1xyXG4gICAgdGhpcy5zdW5rU2hpcExhc3QgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNoaXBPYmogb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICBpZiAoc2hpcE9iai5jb29yZHMuaGFzKHNxdWFyZSkpIHtcclxuICAgICAgICBzaGlwT2JqLmhpdENvb3Jkcy5hZGQoc3F1YXJlKTtcclxuICAgICAgICBzaGlwT2JqLnNoaXAuaGl0KCk7XHJcblxyXG4gICAgICAgIGlmIChzaGlwT2JqLnNoaXAuaXNTdW5rKCkpIHRoaXMuc3Vua1NoaXBMYXN0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gQXR0YWNrIGFkamFjZW50IHNxdWFyZXMgaWYgc2hpcCBpcyBzdW5rXHJcbiAgICAgICAgaWYgKHNoaXBPYmouc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBwb3Mgb2Ygc2hpcE9iai5jb29yZHMpIHtcclxuICAgICAgICAgICAgWy4uLnRoaXMuZ2V0QWRqU3F1YXJlcyhwb3MpXVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAob2JqKSA9PlxyXG4gICAgICAgICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5oYXMob2JqLnNxdWFyZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBzaGlwT2JqLmNvb3Jkcy5oYXMob2JqLnNxdWFyZSlcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAuZm9yRWFjaCgoc3F1YXJlT2JqKSA9PiB0aGlzLm1pc3NlZEF0dGFja3MuYWRkKHNxdWFyZU9iai5zcXVhcmUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLmFkZChzcXVhcmUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkU3F1YXJlKHNxdWFyZSkge1xyXG4gICAgdGhpcy5ib2FyZC5zZXQoc3F1YXJlLCB7IHNxdWFyZSwgYWRqU3F1YXJlczogbmV3IFNldCgpIH0pO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdFNxdWFyZShzcXVhcmUxLCBzcXVhcmUyKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZC5oYXMoc3F1YXJlMSkgJiYgdGhpcy5ib2FyZC5oYXMoc3F1YXJlMikpIHtcclxuICAgICAgdGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkuYWRqU3F1YXJlcy5hZGQodGhpcy5ib2FyZC5nZXQoc3F1YXJlMikpO1xyXG4gICAgICB0aGlzLmJvYXJkLmdldChzcXVhcmUyKS5hZGpTcXVhcmVzLmFkZCh0aGlzLmJvYXJkLmdldChzcXVhcmUxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBZGpTcXVhcmVzKHNxdWFyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZSkuYWRqU3F1YXJlcztcclxuICB9XHJcblxyXG4gIGFyZU5laWdoYm9vcnMoc3F1YXJlMSwgc3F1YXJlMikge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpLmFkalNxdWFyZXMuaGFzKHNxdWFyZTIpO1xyXG4gIH1cclxuXHJcbiAgYXJlQWxsU3VuaygpIHtcclxuICAgIGlmICghdGhpcy5zaGlwcy5zaXplKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBbLi4udGhpcy5zaGlwc11cclxuICAgICAgLm1hcCgoc2hpcE9iaikgPT4gc2hpcE9iai5zaGlwLmlzU3VuaygpKVxyXG4gICAgICAuZXZlcnkoKHZhbCkgPT4gdmFsID09PSB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZVNxdWFyZXMoKSB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBbLi4udGhpcy5ib2FyZC5rZXlzKCldLFxyXG4gICAgICBzaGlwUG9zQXR0YWNrZWQgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmhpdENvb3Jkc10pO1xyXG4gICAgY29uc3Qgc3F1YXJlU2V0ID0gYm9hcmRTcXVhcmVzLmZpbHRlcihcclxuICAgICAgKHNxdWFyZSkgPT5cclxuICAgICAgICAhKHRoaXMubWlzc2VkQXR0YWNrcy5oYXMoc3F1YXJlKSB8fCBzaGlwUG9zQXR0YWNrZWQuaW5jbHVkZXMoc3F1YXJlKSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIFsuLi5zcXVhcmVTZXRdO1xyXG4gIH1cclxuXHJcbiAgI2luaXRCb2FyZCgpIHtcclxuICAgIC8vIEFkZCBzcXVhcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTcXVhcmUoYCR7aX0sJHtqfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29ubmVjdCBzcXVhcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyclBvcyA9IGAke2l9LCR7an1gO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpIC0gMX0sJHtqfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpfSwke2ogKyAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiAtIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgKyAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpIC0gMX0sJHtqICsgMX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAjYWRkU2hpcHMoKSB7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDUpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg0KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMyksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgyKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICB9XHJcbiAgI2dldFJhbmRvbUJvb2woKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG4gICNhZGRTaGlwKHNoaXAsIGlzVmVydGljYWwgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5zaGlwcy5hZGQoe1xyXG4gICAgICBzaGlwLFxyXG4gICAgICBjb29yZHM6IHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCksXHJcbiAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgIGNvb3Jkc0xpc3QgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gY2hlY2sgaWYgJ3BvcycgaXMgdmFsaWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3h9LCR7eSArIGl9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYCR7eCArIGl9LCR7eX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRQb3MocG9zKSkge1xyXG4gICAgICAgICAgY29vcmRzTGlzdC5hZGQocG9zKTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4jY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb3Jkc0xpc3Q7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkUG9zKHBvcykge1xyXG4gICAgaWYgKCF0aGlzLmJvYXJkLmhhcyhwb3MpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IFsuLi50aGlzLnNoaXBzXS5mbGF0TWFwKChvYmopID0+IFsuLi5vYmouY29vcmRzXSk7XHJcbiAgICBpZiAobGlzdC5pbmNsdWRlcyhwb3MpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgYWRqUG9zID0gWy4uLnRoaXMuYm9hcmQuZ2V0KHBvcykuYWRqU3F1YXJlc10ubWFwKChvYmopID0+IG9iai5zcXVhcmUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYWRqUG9zLmluY2x1ZGVzKGxpc3RbaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgbmFtZTtcclxuICBnYW1lQm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaXNDb21wdXRlciA9IGlzQ29tcHV0ZXI7XHJcbiAgICBpZiAoaXNDb21wdXRlcikge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRTaGlwKGFyZWEpIHtcclxuICAgIGlmICh0aGlzLiNpc1ZhbGlkQXJlYShhcmVhKSkge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZC5zaGlwcy5hZGQoe1xyXG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKGFyZWEubGVuZ3RoKSxcclxuICAgICAgICBjb29yZHM6IG5ldyBTZXQoYXJlYSksXHJcbiAgICAgICAgaGl0Q29vcmRzOiBuZXcgU2V0KCksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2lzVmFsaWRBcmVhKGFyZWEpIHtcclxuICAgIC8vIFZlcmlmeSB0aGF0IGFsbCBjb29yZGluYXRlcyBpbiBhcmVhIGFyZSBhZGphY2VudC4uLlxyXG4gICAgLy8gLi4uYW5kIG5vdCBkaWFnb25hbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcmVhW2kgKyAxXSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBhcmVhW2ldLnNwbGl0KFwiLFwiKSxcclxuICAgICAgICAgIG5leHRQb3MgPSBhcmVhW2kgKyAxXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIShcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMV1cclxuICAgICAgICAgICkgfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV1cclxuICAgICAgICApXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcmVhLmV2ZXJ5KHRoaXMuZ2FtZUJvYXJkLmlzVmFsaWRQb3MuYmluZCh0aGlzLmdhbWVCb2FyZCkpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tU3F1YXJlKGJvYXJkKSB7XHJcbiAgICBjb25zdCBhdmFsYWJsZVNxdWFyZXMgPSBib2FyZC5nZXRBdmFpbGFibGVTcXVhcmVzKCk7XHJcbiAgICByZXR1cm4gYXZhbGFibGVTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWxhYmxlU3F1YXJlcy5sZW5ndGgpXTtcclxuICB9XHJcblxyXG4gICNjYW5FeGlzdFNoaXAoYm9hcmQsIHBvcywgc2hpcExlbmd0aCwgaXNWZXJ0aWNhbCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBhcmVhID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIGFyZWEucHVzaChgJHtwb3NbMF19LCR7cGFyc2VJbnQocG9zWzJdKSArIGl9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXJlYS5wdXNoKGAke3BhcnNlSW50KHBvc1swXSkgKyBpfSwke3Bvc1syXX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsaWRhdGVBcmVhcyhbYXJlYV0pKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaGl0QXJlYXMgPSBbLi4uYm9hcmQuc2hpcHNdLmZsYXRNYXAoKHNoaXBPYmopID0+IFtcclxuICAgICAgLi4uc2hpcE9iai5oaXRDb29yZHMsXHJcbiAgICBdKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGFyZWEuZm9yRWFjaCgocG9zKSA9PiB7XHJcbiAgICAgICAgaWYgKGJvYXJkLm1pc3NlZEF0dGFja3MuaGFzKHBvcykgfHwgaGl0QXJlYXMuaW5jbHVkZXMocG9zKSlcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFyZWE7XHJcbiAgfVxyXG5cclxuICBnZXRCZXN0U3F1YXJlKGJvYXJkKSB7XHJcbiAgICBsZXQgYmVzdFNxdWFyZXMgPSBbXSxcclxuICAgICAgbWF4UHJvYiA9IC1JbmZpbml0eSxcclxuICAgICAgcHJvYk1hcCA9IHRoaXMuI2NhbGNQcm9iTWFwKGJvYXJkKTtcclxuXHJcbiAgICAvLyBHcm91cCBzcXVhcmVzIHdpdGggdGhlIGhpZ2hlc3QgdmFsdWVzIHRvZ2V0aGVyXHJcbiAgICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBwcm9iTWFwLmtleXMoKSkge1xyXG4gICAgICBpZiAocHJvYk1hcC5nZXQoc3F1YXJlKSA+IG1heFByb2IpIHtcclxuICAgICAgICBiZXN0U3F1YXJlcyA9IFtzcXVhcmVdO1xyXG4gICAgICAgIG1heFByb2IgPSBwcm9iTWFwLmdldChzcXVhcmUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb2JNYXAuZ2V0KHNxdWFyZSkgPT09IG1heFByb2IpIHtcclxuICAgICAgICBiZXN0U3F1YXJlcy5wdXNoKHNxdWFyZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSByYW5kb20gc3F1YXJlIHdpdGggdGhlIGhpZ2hlc3QgcHJvYmFiaWxpdHlcclxuICAgIHJldHVybiBiZXN0U3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZXN0U3F1YXJlcy5sZW5ndGgpXTtcclxuICB9XHJcblxyXG4gICNjYWxjUHJvYk1hcChib2FyZCkge1xyXG4gICAgbGV0IHByb2JNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgICAgIHByb2JNYXAuc2V0KGAke3h9LCR7eX1gLCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBPYmopID0+IHtcclxuICAgICAgaWYgKCFzaGlwT2JqLnNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICBib2FyZC5ib2FyZC5mb3JFYWNoKChfdmFsLCBwb3MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy4jY2FuRXhpc3RTaGlwKFxyXG4gICAgICAgICAgICAgIGJvYXJkLFxyXG4gICAgICAgICAgICAgIHBvcyxcclxuICAgICAgICAgICAgICBzaGlwT2JqLnNoaXAubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IHRoaXMuI2NhbkV4aXN0U2hpcChcclxuICAgICAgICAgICAgICBib2FyZCxcclxuICAgICAgICAgICAgICBwb3MsXHJcbiAgICAgICAgICAgICAgc2hpcE9iai5zaGlwLmxlbmd0aCxcclxuICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmICh2ZXJ0aWNhbClcclxuICAgICAgICAgICAgdmVydGljYWwuZm9yRWFjaCgocG9zKSA9PiBwcm9iTWFwLnNldChwb3MsIHByb2JNYXAuZ2V0KHBvcykgKyAxKSk7XHJcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbClcclxuICAgICAgICAgICAgaG9yaXpvbnRhbC5mb3JFYWNoKChwb3MpID0+IHByb2JNYXAuc2V0KHBvcywgcHJvYk1hcC5nZXQocG9zKSArIDEpKTtcclxuICAgICAgICAgIGNvbnN0IGhpdHMgPSBbLi4uYm9hcmQuc2hpcHNdLmZsYXRNYXAoKHNoaXBPYmopID0+IFtcclxuICAgICAgICAgICAgLi4uc2hpcE9iai5oaXRDb29yZHMsXHJcbiAgICAgICAgICBdKTtcclxuICAgICAgICAgIGhpdHMuZm9yRWFjaCgoaGl0KSA9PiB7XHJcbiAgICAgICAgICAgIFsuLi5ib2FyZC5nZXRBZGpTcXVhcmVzKGhpdCldXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBvYmouc3F1YXJlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBgJHtwYXJzZUludChoaXRbMF0pICsgMX0sJHtwYXJzZUludChoaXRbMl0pICsgMX1gID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZSB8fFxyXG4gICAgICAgICAgICAgICAgICBgJHtwYXJzZUludChoaXRbMF0pIC0gMX0sJHtwYXJzZUludChoaXRbMl0pIC0gMX1gID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZSB8fFxyXG4gICAgICAgICAgICAgICAgICBgJHtwYXJzZUludChoaXRbMF0pICsgMX0sJHtwYXJzZUludChoaXRbMl0pIC0gMX1gID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZSB8fFxyXG4gICAgICAgICAgICAgICAgICBgJHtwYXJzZUludChoaXRbMF0pIC0gMX0sJHtwYXJzZUludChoaXRbMl0pICsgMX1gID09PSBzcXVhcmVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IG9iai5zcXVhcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICFoaXRzLmluY2x1ZGVzKHNxdWFyZSkgJiZcclxuICAgICAgICAgICAgICAgICAgIWJvYXJkLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5pbmNsdWRlcyhgJHtwYXJzZUludChzcXVhcmVbMF0pICsgMn0sJHtzcXVhcmVbMl19YCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBoaXRzLmluY2x1ZGVzKGAke3BhcnNlSW50KHNxdWFyZVswXSkgLSAyfSwke3NxdWFyZVsyXX1gKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgKyAyfWApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5pbmNsdWRlcyhgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSAtIDJ9YClcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2JNYXAuc2V0KHNxdWFyZSwgcHJvYk1hcC5nZXQoc3F1YXJlKSArIDUpOyAvL0luY3JlYXNlIHByb2JhYmlsaXR5IGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXBcclxuICAgICAgICAgICAgICAgICAgcHJvYk1hcC5zZXQoc3F1YXJlLCBwcm9iTWFwLmdldChzcXVhcmUpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2JNYXA7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwbGF5KGJvYXJkKSB7XHJcbiAgICBpZiAodGhpcy5pc0NvbXB1dGVyKSB7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAyMjApKTsgLy8gU2ltdWxhdGUgZGVsYXlcclxuICAgICAgaWYgKCFib2FyZC5taXNzZWRBdHRhY2tzLnNpemUpXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJhbmRvbVNxdWFyZShib2FyZCkpO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0QmVzdFNxdWFyZShib2FyZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy51c2VyUGxheWVkLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlcihzcXVhcmUpIHtcclxuICAgICAgICAgIHJlcyhzcXVhcmUpO1xyXG4gICAgICAgICAgcHViU3ViLnVuU3Vic2NyaWJlKGV2ZW50cy51c2VyUGxheWVkLCBoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBcmVhcyhhcmVhc0xpc3QpIHtcclxuICBjb25zdCBwID0gbmV3IFBsYXllcihcIlwiLCBmYWxzZSk7XHJcbiAgdHJ5IHtcclxuICAgIGFyZWFzTGlzdC5mb3JFYWNoKChhcmVhKSA9PiB7XHJcbiAgICAgIGlmICghcC5hZGRTaGlwKGFyZWEpKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciwgdmFsaWRhdGVBcmVhcyB9O1xyXG4iLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5pbXBvcnQgZG9tIGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQsIHZhbGlkYXRlQXJlYXMgfSBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XHJcblxyXG5jb25zdCBjdXN0b21pemluZ01vZGFsID0gKCgpID0+IHtcclxuICBsZXQgX2RyYWdnaW5nTGVuZ3RoLFxyXG4gICAgX2lzVmVydGljYWwgPSBmYWxzZSxcclxuICAgIF9jdXJyU2hpcEFyZWEgPSBbXSxcclxuICAgIF9zaGlwQXJlYXMgPSBbXSxcclxuICAgIF9ib2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBpc09yaWVudGF0aW9uVmVydGljYWwoKSB7XHJcbiAgICByZXR1cm4gX2lzVmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hPcmllbnRhdGlvbigpIHtcclxuICAgIF9pc1ZlcnRpY2FsID0gIV9pc1ZlcnRpY2FsO1xyXG4gICAgZG9tLnNoaXBzQ29udHIuc2V0QXR0cmlidXRlKFwiZGF0YS1pc3ZlcnRpY2FsXCIsIF9pc1ZlcnRpY2FsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERyYWdnaW5nTGVuZ3RoKGxlbmd0aCkge1xyXG4gICAgX2RyYWdnaW5nTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmQoKSB7XHJcbiAgICBkb20uZGlhbG9nQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKFxyXG4gICAgICAoY2hpbGQpID0+IChjaGlsZC5jbGFzc05hbWUgPSBcInNxdWFyZXNcIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2xlYXJCb2FyZFZhbGlkaXR5KCkge1xyXG4gICAgY29uc3QgdmFsaWRpdHlTcXVhcmVzID0gZG9tLmRpYWxvZ0JvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwic3Bhbi52YWxpZCwgc3Bhbi5pbnZhbGlkXCJcclxuICAgICk7XHJcbiAgICB2YWxpZGl0eVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIik7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm47XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgY29uc3QgYXJlYXNMaXN0ID0gW10sXHJcbiAgICAgIGFsdEFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBzcXVhcmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZS1pbmRleFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSArIGl9YClcclxuICAgICAgICA6IGFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgKyBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2RyYWdnaW5nTGVuZ3RoOyBpKyspIHtcclxuICAgICAgX2lzVmVydGljYWxcclxuICAgICAgICA/IGFsdEFyZWFzTGlzdC5wdXNoKGAke3NxdWFyZVswXX0sJHtwYXJzZUludChzcXVhcmVbMl0pIC0gaX1gKVxyXG4gICAgICAgIDogYWx0QXJlYXNMaXN0LnB1c2goYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSAtIGl9LCR7c3F1YXJlWzJdfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhcmVhc0xpc3RdKSkge1xyXG4gICAgICBhcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlQXJlYXMoWy4uLl9zaGlwQXJlYXMsIGFsdEFyZWFzTGlzdF0pKSB7XHJcbiAgICAgIGFsdEFyZWFzTGlzdC5mb3JFYWNoKChwb3MpID0+XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9JyR7cG9zfSddYClcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIilcclxuICAgICAgKTtcclxuICAgICAgX2N1cnJTaGlwQXJlYSA9IGFsdEFyZWFzTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyb3BTaGlwKGUpIHtcclxuICAgIF9jbGVhckJvYXJkVmFsaWRpdHkoKTtcclxuXHJcbiAgICBpZiAoX2N1cnJTaGlwQXJlYS5sZW5ndGggJiYgX3NoaXBBcmVhcy5sZW5ndGggPCA1KSB7XHJcbiAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgICBfc2hpcEFyZWFzLnB1c2goX2N1cnJTaGlwQXJlYSk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgICAgX3VwZGF0ZUJvYXJkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByYW5kb21pemVCb2FyZCgpIHtcclxuICAgIGRvbS5zaGlwc0NvbnRyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBfYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzID0gWy4uLl9ib2FyZC5zaGlwc10ubWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5jb29yZHNdKTtcclxuICAgIF91cGRhdGVCb2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3VwZGF0ZUJvYXJkKCkge1xyXG4gICAgX2NsZWFyQm9hcmQoKTtcclxuICAgIF9zaGlwQXJlYXNcclxuICAgICAgLmZsYXRNYXAoKGFycikgPT4gYXJyKVxyXG4gICAgICAuZm9yRWFjaCgoc3F1YXJlKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3NxdWFyZX0nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXAtcG9zXCIpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfdmFsaWRhdGVTaGlwcygpIHtcclxuICAgIGlmIChfc2hpcEFyZWFzLmxlbmd0aCAhPT0gNSkge1xyXG4gICAgICBfd3JpdGVWYWxpZGF0aW9uTXNnKFwiRHJvcCBhbGwgNSBzaGlwcyBvbiB0aGUgYm9hcmQhXCIsIDMwMDApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfd3JpdGVWYWxpZGF0aW9uTXNnKG1zZywgZGVsYXkgPSBudWxsKSB7XHJcbiAgICBkb20udmFsaWRhdGlvbk1zZy50ZXh0Q29udGVudCA9IG1zZztcclxuICAgIGRvbS52YWxpZGF0aW9uTXNnLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSBzZXRUaW1lb3V0KF9yZW1vdmVWYWxpZGF0aW9uTXNnLCBkZWxheSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcmVtb3ZlVmFsaWRhdGlvbk1zZygpIHtcclxuICAgIGRvbS52YWxpZGF0aW9uTXNnLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGRvbS52YWxpZGF0aW9uTXNnLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleGl0TW9kYWwoKSB7XHJcbiAgICBpZiAoX3ZhbGlkYXRlU2hpcHMoKSkge1xyXG4gICAgICBkb20uY3VzdG9taXppbmdEaWFsb2cuY2xvc2UoKTtcclxuICAgICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLnBsYXllckJvYXJkQ3VzdG9taXplZCwgX3NoaXBBcmVhcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2V0RHJhZ2dpbmdMZW5ndGgsXHJcbiAgICBzd2l0Y2hPcmllbnRhdGlvbixcclxuICAgIGlzT3JpZW50YXRpb25WZXJ0aWNhbCxcclxuICAgIHJldmVhbFNxdWFyZXNWYWxpZGl0eSxcclxuICAgIGRyb3BTaGlwLFxyXG4gICAgcmFuZG9taXplQm9hcmQsXHJcbiAgICBleGl0TW9kYWwsXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGdhbWVPdmVyTW9kYWwgPSAoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIHNob3dTdGF0dXModGl0bGUsIHR4dCkge1xyXG4gICAgZG9tLmdhbWVPdmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVxyXG4gICAgZG9tLmdhbWVPdmVyVHh0LnRleHRDb250ZW50ID0gdHh0O1xyXG4gICAgZG9tLmdhbWVPdmVyRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhpdE1vZGFsKCkge1xyXG4gICAgZG9tLmdhbWVPdmVyRGlhbG9nLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzaG93U3RhdHVzLCBleGl0TW9kYWwgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGdhbWVCb2FyZHMgPSAoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIGluaXRCb2FyZHMoKSB7XHJcbiAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5pbml0Qm9hcmQsIF91cGRhdGVCb2FyZHMpO1xyXG4gICAgcHViU3ViLnN1YnNjcmliZShldmVudHMuYm9hcmRzQ2hhbmdlZCwgX3VwZGF0ZUJvYXJkcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfdXBkYXRlQm9hcmRzKHsgYm9hcmQxLCBib2FyZDIgfSkge1xyXG4gICAgYm9hcmQxLm1pc3NlZEF0dGFja3MuZm9yRWFjaChcclxuICAgICAgX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJtaXNzZWRcIiwgZG9tLnBsYXllckJvYXJkMSlcclxuICAgICk7XHJcbiAgICBbLi4uYm9hcmQxLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouY29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJzaGlwLXBvc1wiLCBkb20ucGxheWVyQm9hcmQxKSk7XHJcbiAgICBbLi4uYm9hcmQxLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouaGl0Q29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJoaXRcIiwgZG9tLnBsYXllckJvYXJkMSkpO1xyXG4gICAgaWYgKGJvYXJkMS5sYXN0QXR0YWNrZWQpIHtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3QtaGl0XCIpXHJcbiAgICAgICAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtaGl0XCIpKTtcclxuXHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDFcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PVwiJHtib2FyZDEubGFzdEF0dGFja2VkfVwiXWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJsYXN0LWhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBib2FyZDIubWlzc2VkQXR0YWNrcy5mb3JFYWNoKFxyXG4gICAgICBfZ2V0SXRlcmF0b3JDYWxsYmFjayhcIm1pc3NlZFwiLCBkb20ucGxheWVyQm9hcmQyKVxyXG4gICAgKTtcclxuICAgIFsuLi5ib2FyZDIuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5oaXRDb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcImhpdFwiLCBkb20ucGxheWVyQm9hcmQyKSk7XHJcbiAgICBpZiAoYm9hcmQyLmxhc3RBdHRhY2tlZCkge1xyXG4gICAgICBkb20ucGxheWVyQm9hcmQyXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdC1oaXRcIilcclxuICAgICAgICAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibGFzdC1oaXRcIikpO1xyXG5cclxuICAgICAgZG9tLnBsYXllckJvYXJkMlxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9XCIke2JvYXJkMi5sYXN0QXR0YWNrZWR9XCJdYClcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImxhc3QtaGl0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGJhY2sgZ2VuZXJhdG9yXHJcbiAgZnVuY3Rpb24gX2dldEl0ZXJhdG9yQ2FsbGJhY2soY2xhc3NOYW1lLCBib2FyZCkge1xyXG4gICAgcmV0dXJuIChzcXVhcmUpID0+XHJcbiAgICAgIGJvYXJkXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbml0Qm9hcmRzIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBpbml0UGFnZSgpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmdhbWVPdmVyLCAod2lubmVyKSA9PlxyXG4gICAgICB3aW5uZXIuaXNDb21wdXRlclxyXG4gICAgICAgID8gZ2FtZU92ZXJNb2RhbC5zaG93U3RhdHVzKFwiR2FtZSBPdmVyIVwiLCBcIllvdSBMb29zZS5cIilcclxuICAgICAgICA6IGdhbWVPdmVyTW9kYWwuc2hvd1N0YXR1cyhcIkNvbmdyYXR1bGF0aW9ucyFcIiwgXCIgWW91IFdpbi5cIilcclxuICAgICk7XHJcblxyXG4gICAgX2NsZWFyQm9hcmRzKGRvbS5kaWFsb2dCb2FyZCwgZG9tLnBsYXllckJvYXJkMSwgZG9tLnBsYXllckJvYXJkMik7XHJcblxyXG4gICAgLy8gRHJhdyBib2FyZHNcclxuICAgIGNvbnN0IGJvYXJkID0gW107XHJcbiAgICBmb3IgKGxldCB4ID0gOTsgeCA+PSAwOyB4LS0pIHtcclxuICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgIGZvciAobGV0IHkgPSA5OyB5ID49IDA7IHktLSkge1xyXG4gICAgICAgIGFyci5wdXNoKGAke3l9LCR7eH1gKTtcclxuICAgICAgfVxyXG4gICAgICBib2FyZC5wdXNoKC4uLmFyci5yZXZlcnNlKCkpO1xyXG4gICAgfVxyXG4gICAgYm9hcmQuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZS1pbmRleFwiLCBzcXVhcmUpO1xyXG4gICAgICBub2RlLmNsYXNzTmFtZSA9IFwic3F1YXJlc1wiO1xyXG5cclxuICAgICAgZG9tLmRpYWxvZ0JvYXJkLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKCkpO1xyXG4gICAgICBkb20ucGxheWVyQm9hcmQxLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKCkpO1xyXG4gICAgICBkb20ucGxheWVyQm9hcmQyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tLmN1c3RvbWl6aW5nRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgZ2FtZUJvYXJkcy5pbml0Qm9hcmRzKCk7XHJcbiAgICBfYWRkRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2xlYXJCb2FyZHMoLi4uYm9hcmRzKSB7XHJcbiAgICBib2FyZHMuZm9yRWFjaCgoYikgPT4gKGIuaW5uZXJIVE1MID0gbnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2FkZEV2ZW50cygpIHtcclxuICAgIGRvbS5zaGlwc0NvbnRyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+XHJcbiAgICAgIGN1c3RvbWl6aW5nTW9kYWwuc2V0RHJhZ2dpbmdMZW5ndGgoZS50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgKTtcclxuICAgIGRvbS5kaWFsb2dCb2FyZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImRyYWdvdmVyXCIsXHJcbiAgICAgIGN1c3RvbWl6aW5nTW9kYWwucmV2ZWFsU3F1YXJlc1ZhbGlkaXR5XHJcbiAgICApO1xyXG4gICAgZG9tLnNoaXBzQ29udHIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgY3VzdG9taXppbmdNb2RhbC5kcm9wU2hpcCk7XHJcblxyXG4gICAgZG9tLmN1c3RvbWl6ZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIikpIHtcclxuICAgICAgICBjYXNlIFwicm90YXRlXCI6XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9taXppbmdNb2RhbC5zd2l0Y2hPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIGNhc2UgXCJyYW5kb21cIjpcclxuICAgICAgICAgIHJldHVybiBjdXN0b21pemluZ01vZGFsLnJhbmRvbWl6ZUJvYXJkKCk7XHJcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9taXppbmdNb2RhbC5leGl0TW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lT3Zlck1vZGFsLmV4aXRNb2RhbCk7XHJcbiAgICBkb20ucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xyXG5cclxuICAgIGRvbS5wbGF5ZXJCb2FyZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlLWluZGV4XCIpO1xyXG4gICAgICBpZiAoc3F1YXJlICYmIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzcXVhcmVzXCIpXHJcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLnVzZXJQbGF5ZWQsIHNxdWFyZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyaXRlTWVzc2FnZShtc2csIGRlbGF5ID0gbnVsbCkge1xyXG4gICAgZG9tLnR1cm5TdGF0dXMudGV4dENvbnRlbnQgPSBtc2c7XHJcbiAgICBpZiAoZGVsYXkgIT09IG51bGwpIHNldFRpbWVvdXQoX3JlbW92ZU1lc3NhZ2UsIGRlbGF5ICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcmVtb3ZlTWVzc2FnZSgpIHtcclxuICAgIGRvbS50dXJuU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGluaXRQYWdlLCB3cml0ZU1lc3NhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XHJcbiIsImNvbnN0IGRvbSA9IHtcclxuICBjdXN0b21pemluZ0RpYWxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJjdXN0b21pemluZ0RpYWxvZ1wiXScpLFxyXG4gIHZhbGlkYXRpb25Nc2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwidmFsaWRhdGlvbk1zZ1wiXScpLFxyXG4gIGdhbWVPdmVyRGlhbG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImdhbWVPdmVyRGlhbG9nXCJdJyksXHJcbiAgZ2FtZU92ZXJUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJnYW1lT3ZlclRpdGxlXCJdJyksXHJcbiAgZ2FtZU92ZXJUeHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZ2FtZU92ZXJUeHRcIl0nKSxcclxuICByZXN0YXJ0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInJlc3RhcnRCdG5cIl0nKSxcclxuICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJjbG9zZUJ0blwiXScpLFxyXG4gIGRpYWxvZ0JvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImRpYWxvZ0JvYXJkXCJdJyksXHJcbiAgc2hpcHNDb250cjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJzaGlwc0NvbnRyXCJdJyksXHJcbiAgY3VzdG9taXplQnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJjdXN0b21pemVCdG5zXCJdJyksXHJcbiAgdHVyblN0YXR1czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJ0dXJuc1N0YXR1c1wiXScpLFxyXG4gIHBsYXllckJvYXJkMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJwbGF5ZXJCb2FyZDFcIl0nKSxcclxuICBwbGF5ZXJCb2FyZDI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwicGxheWVyQm9hcmQyXCJdJyksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207XHJcbiIsImNvbnN0IHB1YlN1YiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGV2ZW50cyA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICBldmVudHNbZXZlbnRdID8gZXZlbnRzW2V2ZW50XS5wdXNoKGZuKSA6IChldmVudHNbZXZlbnRdID0gW2ZuXSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVuU3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgaWYgKGV2ZW50c1tldmVudF0pIHtcclxuICAgICAgZXZlbnRzW2V2ZW50XSA9IGV2ZW50c1tldmVudF0uZmlsdGVyKChmdW5jKSA9PiBmdW5jICE9PSBmbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcclxuICAgIGlmIChldmVudHNbZXZlbnRdKSBldmVudHNbZXZlbnRdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdWJzY3JpYmUsIHVuU3Vic2NyaWJlLCBwdWJsaXNoIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gIHBsYXllckJvYXJkQ3VzdG9taXplZDogXCJwbGF5ZXJCb2FyZEN1c3RvbWl6ZWRcIixcclxuICBpbml0Qm9hcmQ6IFwiaW5pdEJvYXJkXCIsXHJcbiAgZ2FtZU92ZXI6IFwiZ2FtZU92ZXJcIixcclxuICB1c2Vyc1R1cm46IFwidXNlcnNUdXJuXCIsXHJcbiAgY29tcHV0ZXJQbGF5ZWQ6IFwiY29tcHV0ZXJQbGF5ZWRcIixcclxuICB1c2VyUGxheWVkOiBcInVzZXJQbGF5ZWRcIixcclxuICBib2FyZHNDaGFuZ2VkOiBcImJvYXJkc0NoYW5nZWRcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHB1YlN1YjtcclxuIiwiaW1wb3J0IGNvbmdTcmMgZnJvbSBcIi4uL2Fzc2V0cy9jb25ncmF0dWxhdGlvbnMubXAzXCI7XHJcbmltcG9ydCBnYW1lT3ZlclNyYyBmcm9tIFwiLi4vYXNzZXRzL2dhbWVvdmVyLm1wM1wiO1xyXG5pbXBvcnQgcGxheVNyYyBmcm9tIFwiLi4vYXNzZXRzL3BsYXkubXAzXCI7XHJcbmltcG9ydCBzaGlwU3Vua1NyYyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzdW5rLm1wM1wiO1xyXG5cclxuY29uc3Qgc291bmRGeCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY29uZ1NvdW5kID0gbmV3IEF1ZGlvKGNvbmdTcmMpLFxyXG4gICAgZ2FtZU92ZXJTb3VuZCA9IG5ldyBBdWRpbyhnYW1lT3ZlclNyYyksXHJcbiAgICBwbGF5U291bmQgPSBuZXcgQXVkaW8ocGxheVNyYyksXHJcbiAgICBzaGlwU3Vua1NvdW5kID0gbmV3IEF1ZGlvKHNoaXBTdW5rU3JjKTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheUNvbmdTb3VuZCgpIHtcclxuICAgIGNvbmdTb3VuZC5sb2FkKCk7XHJcbiAgICBjb25nU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheUdhbWVPdmVyU291bmQoKSB7XHJcbiAgICBnYW1lT3ZlclNvdW5kLmxvYWQoKTtcclxuICAgIGdhbWVPdmVyU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgIHBsYXlTb3VuZC5sb2FkKCk7XHJcbiAgICBwbGF5U291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVNoaXBTdW5rU291bmQoKSB7XHJcbiAgICBzaGlwU3Vua1NvdW5kLmxvYWQoKTtcclxuICAgIHNoaXBTdW5rU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcGxheSwgcGxheUNvbmdTb3VuZCwgcGxheUdhbWVPdmVyU291bmQsIHBsYXlTaGlwU3Vua1NvdW5kIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb3VuZEZ4O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwdWJTdWIsIHsgZXZlbnRzIH0gZnJvbSBcIi4vbW9kdWxlcy9wdWJzdWJcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kdWxlcy9iYXR0bGVzaGlwXCI7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheVwiO1xyXG5pbXBvcnQgc291bmRGeCBmcm9tIFwiLi9tb2R1bGVzL3NvdW5kZnhcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlwiKSxcclxuICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKFwiXCIsIHRydWUpO1xyXG5cclxuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5wbGF5ZXJCb2FyZEN1c3RvbWl6ZWQsIHNldFBsYXllcik7XHJcbiAgcHViU3ViLnN1YnNjcmliZShldmVudHMuaW5pdEJvYXJkLCBzdGFydEdhbWVMb29wKTtcclxuICBkaXNwbGF5LmluaXRQYWdlKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldFBsYXllcihhcmVhc0xpc3QpIHtcclxuICAgIGFyZWFzTGlzdC5mb3JFYWNoKHBsYXllcjEuYWRkU2hpcC5iaW5kKHBsYXllcjEpKTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5pbml0Qm9hcmQsIHtcclxuICAgICAgYm9hcmQxOiBwbGF5ZXIxLmdhbWVCb2FyZCxcclxuICAgICAgYm9hcmQyOiBwbGF5ZXIyLmdhbWVCb2FyZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tXaW4ocDEgPSBwbGF5ZXIxLCBwMiA9IHBsYXllcjIpIHtcclxuICAgIGlmIChwMS5nYW1lQm9hcmQuYXJlQWxsU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBwMjtcclxuICAgIH0gZWxzZSBpZiAocDIuZ2FtZUJvYXJkLmFyZUFsbFN1bmsoKSkge1xyXG4gICAgICByZXR1cm4gcDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICBjb25zdCB0dXJuc1F1ZXVlID0gW3BsYXllcjEsIHBsYXllcjJdO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgcGxheWVyID0gdHVybnNRdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGVuZW15ID0gdHVybnNRdWV1ZVswXTtcclxuXHJcbiAgICAgIGRpc3BsYXkud3JpdGVNZXNzYWdlKHBsYXllci5pc0NvbXB1dGVyID8gXCJDb21wdXRlcidzIFR1cm5cIiA6IFwiWW91ciBUdXJuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcG9zID0gYXdhaXQgcGxheWVyLnBsYXkoZW5lbXkuZ2FtZUJvYXJkKSxcclxuICAgICAgICBhdHRhY2tlZFNoaXAgPSBlbmVteS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3MpO1xyXG5cclxuICAgICAgZW5lbXkuZ2FtZUJvYXJkLnN1bmtTaGlwTGFzdFxyXG4gICAgICAgID8gc291bmRGeC5wbGF5U2hpcFN1bmtTb3VuZCgpXHJcbiAgICAgICAgOiBzb3VuZEZ4LnBsYXkoKTtcclxuXHJcbiAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5ib2FyZHNDaGFuZ2VkLCB7XHJcbiAgICAgICAgYm9hcmQxOiBwbGF5ZXIxLmdhbWVCb2FyZCxcclxuICAgICAgICBib2FyZDI6IHBsYXllcjIuZ2FtZUJvYXJkLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHdpbm5lciA9IGNoZWNrV2luKCk7XHJcbiAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICBwdWJTdWIucHVibGlzaChldmVudHMuZ2FtZU92ZXIsIHdpbm5lcik7XHJcbiAgICAgICAgd2lubmVyLmlzQ29tcHV0ZXJcclxuICAgICAgICAgID8gc291bmRGeC5wbGF5R2FtZU92ZXJTb3VuZCgpXHJcbiAgICAgICAgICA6IHNvdW5kRngucGxheUNvbmdTb3VuZCgpO1xyXG4gICAgICAgIGRpc3BsYXkud3JpdGVNZXNzYWdlKHdpbm5lci5pc0NvbXB1dGVyID8gXCJZb3UgTG9vc2UhXCIgOiBcIllvdSBXaW4hXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYXR0YWNrZWRTaGlwKSB7XHJcbiAgICAgICAgICAvLyBQbGF5IGFnYWluXHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgdHVybnNRdWV1ZS5wdXNoKHBsYXllciwgZW5lbXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnB1c2gocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==