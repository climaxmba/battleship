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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --missedbg: #e0e0e0;
  --hitbg: lightpink;
  --validbg: aquamarine;
  --shipbg: darkgrey;
  --lastbg: 2px solid;
}

* {
  box-sizing: border-box;
}

[draggable="true"]:hover {
  cursor: move;
}

.clickable,
a {
  cursor: pointer;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0;
}

#header {
  padding: 1rem;
  border-bottom: 1px solid;
}

#msg {
  color: white;
  background-color: black;
  padding: 0.5rem;
}

dialog {
  padding: 0;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 0 3px 1px #00000020;
}

#customize {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

#customize-contr,
#gameover-contr {
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
#customize-contr span.valid,
.hints .valid {
  background-color: var(--validbg);
}
#customize-ctrl-contr > span,
#gameover-contr button:hover,
#gameover-contr button {
  padding: 5px;
  background: black;
  color: white;
  border-radius: 5px;
}
#customize-ctrl-contr > span:active,
#gameover-contr button:active {
  background-color: white;
  color: black;
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

#ships-contr[data-isvertical="true"] > div {
  grid-template-columns: 25px;
}

#ships-contr .squares {
  background-color: lightgrey;
}

#ships-contr > div {
  display: grid;
  grid-template-rows: 25px;
  border: 1px solid;
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
  border: 1px solid;
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
  border: 0.5px solid grey;
  position: relative;
}
.ship-pos:not(.hit) {
  background-color: var(--shipbg);
}
.hit {
  background-color: var(--hitbg);
}
.missed {
  background-color: var(--missedbg);
}
.missed::after {
  content: "";
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5px;
  width: 5px;
  border-radius: 50%;
}
.squares.last-hit {
  border: var(--lastbg);
}

#game-contr {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#hints-contr h2 {
  border-bottom: 1px solid;
}
#hints-contr > div {
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
  display: block;
  height: 25px;
  width: 25px;
}

footer {
  margin-top: 95vh;
  padding: 2rem;
  gap: 0.5rem;
  background-color: black;
  color: white;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer a {
  color: lightgray;
  text-decoration: none;
  font-weight: bold;
}

@media (width <=750px) {
  #customize {
    column-gap: 0;
  }
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
    content: "";
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 3px;
    width: 3px;
    border-radius: 50%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,gCAAgC;AAClC;AACA;;;EAGE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kDAAkD;AACpD;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;IACI,gCAAgC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,eAAe;EACf,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,gDAAgD;IAChD;;IAEA;MACE,kDAAkD;IACpD;;EAEF;IACE,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,UAAU;IACV,kBAAkB;EACpB;AACF","sourcesContent":[":root {\r\n  --missedbg: #e0e0e0;\r\n  --hitbg: lightpink;\r\n  --validbg: aquamarine;\r\n  --shipbg: darkgrey;\r\n  --lastbg: 2px solid;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 0;\r\n}\r\n\r\n#header {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n#msg {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 0.5rem;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#customize-contr,\r\n#gameover-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n#customize-contr span.valid,\r\n.hints .valid {\r\n  background-color: var(--validbg);\r\n}\r\n#customize-ctrl-contr > span,\r\n#gameover-contr button:hover,\r\n#gameover-contr button {\r\n  padding: 5px;\r\n  background: black;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n#customize-ctrl-contr > span:active,\r\n#gameover-contr button:active {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#gameover-contr p {\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n#gameover-contr h2 {\r\n  margin: 0;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] > div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: lightgrey;\r\n}\r\n\r\n#ships-contr > div {\r\n  display: grid;\r\n  grid-template-rows: 25px;\r\n  border: 1px solid;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  border: 1px solid;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares,\r\n.hints span {\r\n  border: 0.5px solid grey;\r\n  position: relative;\r\n}\r\n.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg);\r\n}\r\n.hit {\r\n  background-color: var(--hitbg);\r\n}\r\n.missed {\r\n  background-color: var(--missedbg);\r\n}\r\n.missed::after {\r\n  content: \"\";\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n.squares.last-hit {\r\n  border: var(--lastbg);\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n    background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\n#hints-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#hints-contr h2 {\r\n  border-bottom: 1px solid;\r\n}\r\n#hints-contr > div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n.hints {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#hints-contr span {\r\n  display: block;\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 95vh;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  background-color: black;\r\n  color: white;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter a {\r\n  color: lightgray;\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize {\r\n    column-gap: 0;\r\n  }\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n    }\r\n    \r\n    .board-contr {\r\n      grid-template: repeat(10, 30px) / repeat(10, 30px);\r\n    }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    content: \"\";\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    height: 3px;\r\n    width: 3px;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

  constructor(addRandomShips = true) {
    this.#initBoard();
    if (addRandomShips) this.#addShips();
  }

  receiveAttack(square) {
    this.lastAttacked = square;

    for (const shipObj of this.ships) {
      if (shipObj.coords.has(square)) {
        shipObj.hitCoords.add(square);
        shipObj.ship.hit();
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
      (square) => !(this.missedAttacks.has(square) || shipPosAttacked.includes(square))
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

  async play(board) {
    if (this.isComputer) {
      // Simulate delay
      await new Promise((res) =>
        setTimeout(() => {
          res();
        }, 500)
      );
      return Promise.resolve(this.randomSquare(board));
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

  function exitModal() {
    if (_shipAreas.length === 5) {
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
  function showStatus(txt) {
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
      gameOverModal.showStatus(
        winner.isComputer
          ? "You Loose! Try Again."
          : "Congratulations! You Win."
      )
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
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].msg.textContent = msg;
    if (delay !== null) setTimeout(_removeMessage, delay * 1000);
  }

  function _removeMessage() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].msg.textContent = "";
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
  gameOverDialog: document.querySelector('[data-js-id="gameOverDialog"]'),
  gameOverTxt: document.querySelector('[data-js-id="gameOverTxt"]'),
  restartBtn: document.querySelector('[data-js-id="restartBtn"]'),
  closeBtn: document.querySelector('[data-js-id="closeBtn"]'),
  dialogBoard: document.querySelector('[data-js-id="dialogBoard"]'),
  shipsContr: document.querySelector('[data-js-id="shipsContr"]'),
  customizeBtns: document.querySelector('[data-js-id="customizeBtns"]'),
  msg: document.querySelector('[data-js-id="msg"]'),
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
  userPlayed: "userPlayed",
  boardsChanged: "boardsChanged"
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);


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
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");





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

      _modules_display__WEBPACK_IMPORTED_MODULE_2__["default"].writeMessage(player.isComputer ? "Computer's Turn" : "Your Turn")
      
      const pos = await player.play(enemy.gameBoard),
      attackedShip = enemy.gameBoard.receiveAttack(pos);
      _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.boardsChanged, { board1: player1.gameBoard, board2: player2.gameBoard });

      const winner = checkWin();
      if (winner) {
        _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.gameOver, winner)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxL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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBTSxTQUFTLG1EQUFNLGtCQUFrQixzREFBc0Q7QUFDbkc7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBTSxTQUFTLG1EQUFNO0FBQzdCLFFBQVEsd0RBQU87QUFDZjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tbWlzc2VkYmc6ICNlMGUwZTA7XHJcbiAgLS1oaXRiZzogbGlnaHRwaW5rO1xyXG4gIC0tdmFsaWRiZzogYXF1YW1hcmluZTtcclxuICAtLXNoaXBiZzogZGFya2dyZXk7XHJcbiAgLS1sYXN0Ymc6IDJweCBzb2xpZDtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuW2RyYWdnYWJsZT1cInRydWVcIl06aG92ZXIge1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLmNsaWNrYWJsZSxcclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxufVxyXG5cclxuI21zZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuZGlhbG9nIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAjMDAwMDAwMjA7XHJcbn1cclxuXHJcbiNjdXN0b21pemUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWNvbnRyLFxyXG4jZ2FtZW92ZXItY29udHIge1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcbiNjdXN0b21pemUtY29udHIgc3Bhbi52YWxpZCxcclxuLmhpbnRzIC52YWxpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XHJcbn1cclxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyID4gc3BhbixcclxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjpob3ZlcixcclxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyID4gc3BhbjphY3RpdmUsXHJcbiNnYW1lb3Zlci1jb250ciBidXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNnYW1lb3Zlci1jb250ciBwIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4jZ2FtZW92ZXItY29udHIgaDIge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdID4gZGl2IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHg7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciAuc3F1YXJlcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHIgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4jc2hpcDEge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDIge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDMsXHJcbiNzaGlwNCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwNSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwMyxcclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXA0IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXA1IHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyNXB4KTtcclxufVxyXG5cclxuLmJvYXJkLWNvbnRyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWNvbnRyIC5ib2FyZC1jb250ciB7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAyNXB4KSAvIHJlcGVhdCgxMCwgMjVweCk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnNxdWFyZXMsXHJcbi5oaW50cyBzcGFuIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zaGlwLXBvczpub3QoLmhpdCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBiZyk7XHJcbn1cclxuLmhpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0YmcpO1xyXG59XHJcbi5taXNzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZGJnKTtcclxufVxyXG4ubWlzc2VkOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zcXVhcmVzLmxhc3QtaGl0IHtcclxuICBib3JkZXI6IHZhcigtLWxhc3RiZyk7XHJcbn1cclxuXHJcbiNnYW1lLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDJyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGxheWVyczpsYXN0LWNoaWxkIHNwYW4uc3F1YXJlczpub3QoLm1pc3NlZCk6bm90KC5oaXQpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBsYXllcnMtbmFtZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuI2hpbnRzLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jaGludHMtY29udHIgaDIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxufVxyXG4jaGludHMtY29udHIgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4uaGludHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiNoaW50cy1jb250ciBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogOTV2aDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSAod2lkdGggPD03NTBweCkge1xyXG4gICNjdXN0b21pemUge1xyXG4gICAgY29sdW1uLWdhcDogMDtcclxuICB9XHJcbiAgI2N1c3RvbWl6ZS1jb250ciB7XHJcbiAgICB3aWR0aDogMzEycHg7XHJcbiAgfVxyXG4gICNzaGlwcy1jb250ciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuYm9hcmQtY29udHIge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvYXJkLWNvbnRyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzMHB4KSAvIHJlcGVhdCgxMCwgMzBweCk7XHJcbiAgICB9XHJcblxyXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pC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RUE7TUFDRSxrREFBa0Q7SUFDcEQ7O0VBRUY7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tbWlzc2VkYmc6ICNlMGUwZTA7XFxyXFxuICAtLWhpdGJnOiBsaWdodHBpbms7XFxyXFxuICAtLXZhbGlkYmc6IGFxdWFtYXJpbmU7XFxyXFxuICAtLXNoaXBiZzogZGFya2dyZXk7XFxyXFxuICAtLWxhc3RiZzogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUsXFxyXFxuYSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbiNtc2cge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICMwMDAwMDAyMDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyLFxcclxcbiNnYW1lb3Zlci1jb250ciB7XFxyXFxuICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4jY3VzdG9taXplLWNvbnRyIHNwYW4udmFsaWQsXFxyXFxuLmhpbnRzIC52YWxpZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcXHJcXG59XFxyXFxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyID4gc3BhbixcXHJcXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmhvdmVyLFxcclxcbiNnYW1lb3Zlci1jb250ciBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW46YWN0aXZlLFxcclxcbiNnYW1lb3Zlci1jb250ciBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZW92ZXItY29udHIgcCB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4jZ2FtZW92ZXItY29udHIgaDIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSA+IGRpdiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250ciAuc3F1YXJlcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250ciA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbiNzaGlwMSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDMsXFxyXFxuI3NoaXA0IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDUge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDEge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDMsXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwNCB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwNSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyIC5ib2FyZC1jb250ciB7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDI1cHgpIC8gcmVwZWF0KDEwLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzLFxcclxcbi5oaW50cyBzcGFuIHtcXHJcXG4gIGJvcmRlcjogMC41cHggc29saWQgZ3JleTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnNoaXAtcG9zOm5vdCguaGl0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwYmcpO1xcclxcbn1cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdGJnKTtcXHJcXG59XFxyXFxuLm1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWRiZyk7XFxyXFxufVxcclxcbi5taXNzZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4uc3F1YXJlcy5sYXN0LWhpdCB7XFxyXFxuICBib3JkZXI6IHZhcigtLWxhc3RiZyk7XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5wbGF5ZXJzLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hpbnRzLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jaGludHMtY29udHIgaDIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG4jaGludHMtY29udHIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLmhpbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jaGludHMtY29udHIgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9NzUwcHgpIHtcXHJcXG4gICNjdXN0b21pemUge1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwO1xcclxcbiAgfVxcclxcbiAgI2N1c3RvbWl6ZS1jb250ciB7XFxyXFxuICAgIHdpZHRoOiAzMTJweDtcXHJcXG4gIH1cXHJcXG4gICNzaGlwcy1jb250ciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5ib2FyZC1jb250ciB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYm9hcmQtY29udHIge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzBweCkgLyByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuc3F1YXJlcy5taXNzZWQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHB1YlN1YiwgeyBldmVudHMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcclxuXHJcbmNsYXNzIFNoaXAge1xyXG4gIGxlbmd0aDtcclxuICBoaXRzID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMuaGl0cysrO1xyXG4gIH1cclxuICBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gdGhpcy5oaXRzO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZUJvYXJkIHtcclxuICBib2FyZCA9IG5ldyBNYXAoKTtcclxuICBzaGlwcyA9IG5ldyBTZXQoKTtcclxuICBtaXNzZWRBdHRhY2tzID0gbmV3IFNldCgpO1xyXG4gIGxhc3RBdHRhY2tlZCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFkZFJhbmRvbVNoaXBzID0gdHJ1ZSkge1xyXG4gICAgdGhpcy4jaW5pdEJvYXJkKCk7XHJcbiAgICBpZiAoYWRkUmFuZG9tU2hpcHMpIHRoaXMuI2FkZFNoaXBzKCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKHNxdWFyZSkge1xyXG4gICAgdGhpcy5sYXN0QXR0YWNrZWQgPSBzcXVhcmU7XHJcblxyXG4gICAgZm9yIChjb25zdCBzaGlwT2JqIG9mIHRoaXMuc2hpcHMpIHtcclxuICAgICAgaWYgKHNoaXBPYmouY29vcmRzLmhhcyhzcXVhcmUpKSB7XHJcbiAgICAgICAgc2hpcE9iai5oaXRDb29yZHMuYWRkKHNxdWFyZSk7XHJcbiAgICAgICAgc2hpcE9iai5zaGlwLmhpdCgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLmFkZChzcXVhcmUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkU3F1YXJlKHNxdWFyZSkge1xyXG4gICAgdGhpcy5ib2FyZC5zZXQoc3F1YXJlLCB7IHNxdWFyZSwgYWRqU3F1YXJlczogbmV3IFNldCgpIH0pO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdFNxdWFyZShzcXVhcmUxLCBzcXVhcmUyKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZC5oYXMoc3F1YXJlMSkgJiYgdGhpcy5ib2FyZC5oYXMoc3F1YXJlMikpIHtcclxuICAgICAgdGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkuYWRqU3F1YXJlcy5hZGQodGhpcy5ib2FyZC5nZXQoc3F1YXJlMikpO1xyXG4gICAgICB0aGlzLmJvYXJkLmdldChzcXVhcmUyKS5hZGpTcXVhcmVzLmFkZCh0aGlzLmJvYXJkLmdldChzcXVhcmUxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBZGpTcXVhcmVzKHNxdWFyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZSkuYWRqU3F1YXJlcztcclxuICB9XHJcblxyXG4gIGFyZU5laWdoYm9vcnMoc3F1YXJlMSwgc3F1YXJlMikge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpLmFkalNxdWFyZXMuaGFzKHNxdWFyZTIpO1xyXG4gIH1cclxuXHJcbiAgYXJlQWxsU3VuaygpIHtcclxuICAgIGlmICghdGhpcy5zaGlwcy5zaXplKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBbLi4udGhpcy5zaGlwc11cclxuICAgICAgLm1hcCgoc2hpcE9iaikgPT4gc2hpcE9iai5zaGlwLmlzU3VuaygpKVxyXG4gICAgICAuZXZlcnkoKHZhbCkgPT4gdmFsID09PSB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZVNxdWFyZXMoKSB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBbLi4udGhpcy5ib2FyZC5rZXlzKCldLFxyXG4gICAgICBzaGlwUG9zQXR0YWNrZWQgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmhpdENvb3Jkc10pO1xyXG4gICAgY29uc3Qgc3F1YXJlU2V0ID0gYm9hcmRTcXVhcmVzLmZpbHRlcihcclxuICAgICAgKHNxdWFyZSkgPT4gISh0aGlzLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkgfHwgc2hpcFBvc0F0dGFja2VkLmluY2x1ZGVzKHNxdWFyZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBbLi4uc3F1YXJlU2V0XTtcclxuICB9XHJcblxyXG4gICNpbml0Qm9hcmQoKSB7XHJcbiAgICAvLyBBZGQgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIHRoaXMuYWRkU3F1YXJlKGAke2l9LCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbm5lY3Qgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBgJHtpfSwke2p9YDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgLSAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgI2FkZFNoaXBzKCkge1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg1KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoNCksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgzKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMiksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgfVxyXG4gICNnZXRSYW5kb21Cb29sKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuICAjYWRkU2hpcChzaGlwLCBpc1ZlcnRpY2FsID0gZmFsc2UpIHtcclxuICAgIHRoaXMuc2hpcHMuYWRkKHtcclxuICAgICAgc2hpcCxcclxuICAgICAgY29vcmRzOiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpLFxyXG4gICAgICBoaXRDb29yZHM6IG5ldyBTZXQoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuICAjY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICBjb29yZHNMaXN0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGNoZWNrIGlmICdwb3MnIGlzIHZhbGlkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBgJHt4fSwke3kgKyBpfWA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBvcyhwb3MpKSB7XHJcbiAgICAgICAgICBjb29yZHNMaXN0LmFkZChwb3MpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3ggKyBpfSwke3l9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb29yZHNMaXN0O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFBvcyhwb3MpIHtcclxuICAgIGlmICghdGhpcy5ib2FyZC5oYXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmNvb3Jkc10pO1xyXG4gICAgaWYgKGxpc3QuaW5jbHVkZXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGFkalBvcyA9IFsuLi50aGlzLmJvYXJkLmdldChwb3MpLmFkalNxdWFyZXNdLm1hcCgob2JqKSA9PiBvYmouc3F1YXJlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFkalBvcy5pbmNsdWRlcyhsaXN0W2ldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgZ2FtZUJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xyXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU2hpcChhcmVhKSB7XHJcbiAgICBpZiAodGhpcy4jaXNWYWxpZEFyZWEoYXJlYSkpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQuc2hpcHMuYWRkKHtcclxuICAgICAgICBzaGlwOiBuZXcgU2hpcChhcmVhLmxlbmd0aCksXHJcbiAgICAgICAgY29vcmRzOiBuZXcgU2V0KGFyZWEpLFxyXG4gICAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNpc1ZhbGlkQXJlYShhcmVhKSB7XHJcbiAgICAvLyBWZXJpZnkgdGhhdCBhbGwgY29vcmRpbmF0ZXMgaW4gYXJlYSBhcmUgYWRqYWNlbnQuLi5cclxuICAgIC8vIC4uLmFuZCBub3QgZGlhZ29uYWxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXJlYVtpICsgMV0pIHtcclxuICAgICAgICBjb25zdCBjdXJyUG9zID0gYXJlYVtpXS5zcGxpdChcIixcIiksXHJcbiAgICAgICAgICBuZXh0UG9zID0gYXJlYVtpICsgMV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICEoXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzFdXHJcbiAgICAgICAgICApIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJlYS5ldmVyeSh0aGlzLmdhbWVCb2FyZC5pc1ZhbGlkUG9zLmJpbmQodGhpcy5nYW1lQm9hcmQpKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbVNxdWFyZShib2FyZCkge1xyXG4gICAgY29uc3QgYXZhbGFibGVTcXVhcmVzID0gYm9hcmQuZ2V0QXZhaWxhYmxlU3F1YXJlcygpO1xyXG4gICAgcmV0dXJuIGF2YWxhYmxlU3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFsYWJsZVNxdWFyZXMubGVuZ3RoKV07XHJcbiAgfVxyXG5cclxuICBhc3luYyBwbGF5KGJvYXJkKSB7XHJcbiAgICBpZiAodGhpcy5pc0NvbXB1dGVyKSB7XHJcbiAgICAgIC8vIFNpbXVsYXRlIGRlbGF5XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICByZXMoKTtcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yYW5kb21TcXVhcmUoYm9hcmQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZShldmVudHMudXNlclBsYXllZCwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoc3F1YXJlKSB7XHJcbiAgICAgICAgICByZXMoc3F1YXJlKTtcclxuICAgICAgICAgIHB1YlN1Yi51blN1YnNjcmliZShldmVudHMudXNlclBsYXllZCwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQXJlYXMoYXJlYXNMaXN0KSB7XHJcbiAgY29uc3QgcCA9IG5ldyBQbGF5ZXIoXCJcIiwgZmFsc2UpO1xyXG4gIHRyeSB7XHJcbiAgICBhcmVhc0xpc3QuZm9yRWFjaCgoYXJlYSkgPT4ge1xyXG4gICAgICBpZiAoIXAuYWRkU2hpcChhcmVhKSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIsIHZhbGlkYXRlQXJlYXMgfTtcclxuIiwiaW1wb3J0IHB1YlN1YiwgeyBldmVudHMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcclxuaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkLCB2YWxpZGF0ZUFyZWFzIH0gZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xyXG5cclxuY29uc3QgY3VzdG9taXppbmdNb2RhbCA9ICgoKSA9PiB7XHJcbiAgbGV0IF9kcmFnZ2luZ0xlbmd0aCxcclxuICAgIF9pc1ZlcnRpY2FsID0gZmFsc2UsXHJcbiAgICBfY3VyclNoaXBBcmVhID0gW10sXHJcbiAgICBfc2hpcEFyZWFzID0gW10sXHJcbiAgICBfYm9hcmQgPSBuZXcgR2FtZUJvYXJkKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaXNPcmllbnRhdGlvblZlcnRpY2FsKCkge1xyXG4gICAgcmV0dXJuIF9pc1ZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoT3JpZW50YXRpb24oKSB7XHJcbiAgICBfaXNWZXJ0aWNhbCA9ICFfaXNWZXJ0aWNhbDtcclxuICAgIGRvbS5zaGlwc0NvbnRyLnNldEF0dHJpYnV0ZShcImRhdGEtaXN2ZXJ0aWNhbFwiLCBfaXNWZXJ0aWNhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREcmFnZ2luZ0xlbmd0aChsZW5ndGgpIHtcclxuICAgIF9kcmFnZ2luZ0xlbmd0aCA9IGxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGVhckJvYXJkKCkge1xyXG4gICAgZG9tLmRpYWxvZ0JvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaChcclxuICAgICAgKGNoaWxkKSA9PiAoY2hpbGQuY2xhc3NOYW1lID0gXCJzcXVhcmVzXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmRWYWxpZGl0eSgpIHtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3F1YXJlcyA9IGRvbS5kaWFsb2dCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcInNwYW4udmFsaWQsIHNwYW4uaW52YWxpZFwiXHJcbiAgICApO1xyXG4gICAgdmFsaWRpdHlTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJldmVhbFNxdWFyZXNWYWxpZGl0eShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkgcmV0dXJuO1xyXG4gICAgX2NsZWFyQm9hcmRWYWxpZGl0eSgpO1xyXG5cclxuICAgIGNvbnN0IGFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBhbHRBcmVhc0xpc3QgPSBbXSxcclxuICAgICAgc3F1YXJlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZHJhZ2dpbmdMZW5ndGg7IGkrKykge1xyXG4gICAgICBfaXNWZXJ0aWNhbFxyXG4gICAgICAgID8gYXJlYXNMaXN0LnB1c2goYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgKyBpfWApXHJcbiAgICAgICAgOiBhcmVhc0xpc3QucHVzaChgJHtwYXJzZUludChzcXVhcmVbMF0pICsgaX0sJHtzcXVhcmVbMl19YCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhbHRBcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSAtIGl9YClcclxuICAgICAgICA6IGFsdEFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgLSBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsaWRhdGVBcmVhcyhbLi4uX3NoaXBBcmVhcywgYXJlYXNMaXN0XSkpIHtcclxuICAgICAgYXJlYXNMaXN0LmZvckVhY2goKHBvcykgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtwb3N9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKVxyXG4gICAgICApO1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gYXJlYXNMaXN0O1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhbHRBcmVhc0xpc3RdKSkge1xyXG4gICAgICBhbHRBcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhbHRBcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcm9wU2hpcChlKSB7XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgaWYgKF9jdXJyU2hpcEFyZWEubGVuZ3RoICYmIF9zaGlwQXJlYXMubGVuZ3RoIDwgNSkge1xyXG4gICAgICBlLnRhcmdldC5yZW1vdmUoKTtcclxuICAgICAgX3NoaXBBcmVhcy5wdXNoKF9jdXJyU2hpcEFyZWEpO1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gW107XHJcbiAgICAgIF91cGRhdGVCb2FyZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplQm9hcmQoKSB7XHJcbiAgICBkb20uc2hpcHNDb250ci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgX2JvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgX3NoaXBBcmVhcyA9IFsuLi5fYm9hcmQuc2hpcHNdLm1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouY29vcmRzXSk7XHJcbiAgICBfdXBkYXRlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZCgpIHtcclxuICAgIF9jbGVhckJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzXHJcbiAgICAgIC5mbGF0TWFwKChhcnIpID0+IGFycilcclxuICAgICAgLmZvckVhY2goKHNxdWFyZSkgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBvc1wiKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhpdE1vZGFsKCkge1xyXG4gICAgaWYgKF9zaGlwQXJlYXMubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgIGRvbS5jdXN0b21pemluZ0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMucGxheWVyQm9hcmRDdXN0b21pemVkLCBfc2hpcEFyZWFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXREcmFnZ2luZ0xlbmd0aCxcclxuICAgIHN3aXRjaE9yaWVudGF0aW9uLFxyXG4gICAgaXNPcmllbnRhdGlvblZlcnRpY2FsLFxyXG4gICAgcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5LFxyXG4gICAgZHJvcFNoaXAsXHJcbiAgICByYW5kb21pemVCb2FyZCxcclxuICAgIGV4aXRNb2RhbCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZ2FtZU92ZXJNb2RhbCA9ICgoKSA9PiB7XHJcbiAgZnVuY3Rpb24gc2hvd1N0YXR1cyh0eHQpIHtcclxuICAgIGRvbS5nYW1lT3ZlclR4dC50ZXh0Q29udGVudCA9IHR4dDtcclxuICAgIGRvbS5nYW1lT3ZlckRpYWxvZy5zaG93TW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4aXRNb2RhbCgpIHtcclxuICAgIGRvbS5nYW1lT3ZlckRpYWxvZy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc2hvd1N0YXR1cywgZXhpdE1vZGFsIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBnYW1lQm9hcmRzID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBpbml0Qm9hcmRzKCkge1xyXG4gICAgcHViU3ViLnN1YnNjcmliZShldmVudHMuaW5pdEJvYXJkLCBfdXBkYXRlQm9hcmRzKTtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmJvYXJkc0NoYW5nZWQsIF91cGRhdGVCb2FyZHMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3VwZGF0ZUJvYXJkcyh7IGJvYXJkMSwgYm9hcmQyIH0pIHtcclxuICAgIGJvYXJkMS5taXNzZWRBdHRhY2tzLmZvckVhY2goXHJcbiAgICAgIF9nZXRJdGVyYXRvckNhbGxiYWNrKFwibWlzc2VkXCIsIGRvbS5wbGF5ZXJCb2FyZDEpXHJcbiAgICApO1xyXG4gICAgWy4uLmJvYXJkMS5zaGlwc11cclxuICAgICAgLmZsYXRNYXAoKHNoaXBPYmopID0+IFsuLi5zaGlwT2JqLmNvb3Jkc10pXHJcbiAgICAgIC5mb3JFYWNoKF9nZXRJdGVyYXRvckNhbGxiYWNrKFwic2hpcC1wb3NcIiwgZG9tLnBsYXllckJvYXJkMSkpO1xyXG4gICAgWy4uLmJvYXJkMS5zaGlwc11cclxuICAgICAgLmZsYXRNYXAoKHNoaXBPYmopID0+IFsuLi5zaGlwT2JqLmhpdENvb3Jkc10pXHJcbiAgICAgIC5mb3JFYWNoKF9nZXRJdGVyYXRvckNhbGxiYWNrKFwiaGl0XCIsIGRvbS5wbGF5ZXJCb2FyZDEpKTtcclxuICAgIGlmIChib2FyZDEubGFzdEF0dGFja2VkKSB7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDFcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0LWhpdFwiKVxyXG4gICAgICAgIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXN0LWhpdFwiKSk7XHJcblxyXG4gICAgICBkb20ucGxheWVyQm9hcmQxXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD1cIiR7Ym9hcmQxLmxhc3RBdHRhY2tlZH1cIl1gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwibGFzdC1oaXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYm9hcmQyLm1pc3NlZEF0dGFja3MuZm9yRWFjaChcclxuICAgICAgX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJtaXNzZWRcIiwgZG9tLnBsYXllckJvYXJkMilcclxuICAgICk7XHJcbiAgICBbLi4uYm9hcmQyLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouaGl0Q29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJoaXRcIiwgZG9tLnBsYXllckJvYXJkMikpO1xyXG4gICAgaWYgKGJvYXJkMi5sYXN0QXR0YWNrZWQpIHtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMlxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3QtaGl0XCIpXHJcbiAgICAgICAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtaGl0XCIpKTtcclxuXHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDJcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PVwiJHtib2FyZDIubGFzdEF0dGFja2VkfVwiXWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJsYXN0LWhpdFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhbGxiYWNrIGdlbmVyYXRvclxyXG4gIGZ1bmN0aW9uIF9nZXRJdGVyYXRvckNhbGxiYWNrKGNsYXNzTmFtZSwgYm9hcmQpIHtcclxuICAgIHJldHVybiAoc3F1YXJlKSA9PlxyXG4gICAgICBib2FyZFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9JyR7c3F1YXJlfSddYClcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaW5pdEJvYXJkcyB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XHJcbiAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XHJcbiAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5nYW1lT3ZlciwgKHdpbm5lcikgPT5cclxuICAgICAgZ2FtZU92ZXJNb2RhbC5zaG93U3RhdHVzKFxyXG4gICAgICAgIHdpbm5lci5pc0NvbXB1dGVyXHJcbiAgICAgICAgICA/IFwiWW91IExvb3NlISBUcnkgQWdhaW4uXCJcclxuICAgICAgICAgIDogXCJDb25ncmF0dWxhdGlvbnMhIFlvdSBXaW4uXCJcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBfY2xlYXJCb2FyZHMoZG9tLmRpYWxvZ0JvYXJkLCBkb20ucGxheWVyQm9hcmQxLCBkb20ucGxheWVyQm9hcmQyKTtcclxuXHJcbiAgICAvLyBEcmF3IGJvYXJkc1xyXG4gICAgY29uc3QgYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IHggPSA5OyB4ID49IDA7IHgtLSkge1xyXG4gICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgZm9yIChsZXQgeSA9IDk7IHkgPj0gMDsgeS0tKSB7XHJcbiAgICAgICAgYXJyLnB1c2goYCR7eX0sJHt4fWApO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2goLi4uYXJyLnJldmVyc2UoKSk7XHJcbiAgICB9XHJcbiAgICBib2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlLWluZGV4XCIsIHNxdWFyZSk7XHJcbiAgICAgIG5vZGUuY2xhc3NOYW1lID0gXCJzcXVhcmVzXCI7XHJcblxyXG4gICAgICBkb20uZGlhbG9nQm9hcmQuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUoKSk7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDEuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUoKSk7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb20uY3VzdG9taXppbmdEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBnYW1lQm9hcmRzLmluaXRCb2FyZHMoKTtcclxuICAgIF9hZGRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGVhckJvYXJkcyguLi5ib2FyZHMpIHtcclxuICAgIGJvYXJkcy5mb3JFYWNoKChiKSA9PiAoYi5pbm5lckhUTUwgPSBudWxsKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfYWRkRXZlbnRzKCkge1xyXG4gICAgZG9tLnNoaXBzQ29udHIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT5cclxuICAgICAgY3VzdG9taXppbmdNb2RhbC5zZXREcmFnZ2luZ0xlbmd0aChlLnRhcmdldC5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICApO1xyXG4gICAgZG9tLmRpYWxvZ0JvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiZHJhZ292ZXJcIixcclxuICAgICAgY3VzdG9taXppbmdNb2RhbC5yZXZlYWxTcXVhcmVzVmFsaWRpdHlcclxuICAgICk7XHJcbiAgICBkb20uc2hpcHNDb250ci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBjdXN0b21pemluZ01vZGFsLmRyb3BTaGlwKTtcclxuXHJcbiAgICBkb20uY3VzdG9taXplQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiKSkge1xyXG4gICAgICAgIGNhc2UgXCJyb3RhdGVcIjpcclxuICAgICAgICAgIHJldHVybiBjdXN0b21pemluZ01vZGFsLnN3aXRjaE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgY2FzZSBcInJhbmRvbVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWl6aW5nTW9kYWwucmFuZG9taXplQm9hcmQoKTtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgIHJldHVybiBjdXN0b21pemluZ01vZGFsLmV4aXRNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb20uY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVPdmVyTW9kYWwuZXhpdE1vZGFsKTtcclxuICAgIGRvbS5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XHJcblxyXG4gICAgZG9tLnBsYXllckJvYXJkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIik7XHJcbiAgICAgIGlmIChzcXVhcmUgJiYgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNxdWFyZXNcIilcclxuICAgICAgICBwdWJTdWIucHVibGlzaChldmVudHMudXNlclBsYXllZCwgc3F1YXJlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd3JpdGVNZXNzYWdlKG1zZywgZGVsYXkgPSBudWxsKSB7XHJcbiAgICBkb20ubXNnLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSBzZXRUaW1lb3V0KF9yZW1vdmVNZXNzYWdlLCBkZWxheSAqIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3JlbW92ZU1lc3NhZ2UoKSB7XHJcbiAgICBkb20ubXNnLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGluaXRQYWdlLCB3cml0ZU1lc3NhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XHJcbiIsImNvbnN0IGRvbSA9IHtcclxuICBjdXN0b21pemluZ0RpYWxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJjdXN0b21pemluZ0RpYWxvZ1wiXScpLFxyXG4gIGdhbWVPdmVyRGlhbG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImdhbWVPdmVyRGlhbG9nXCJdJyksXHJcbiAgZ2FtZU92ZXJUeHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZ2FtZU92ZXJUeHRcIl0nKSxcclxuICByZXN0YXJ0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInJlc3RhcnRCdG5cIl0nKSxcclxuICBjbG9zZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJjbG9zZUJ0blwiXScpLFxyXG4gIGRpYWxvZ0JvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImRpYWxvZ0JvYXJkXCJdJyksXHJcbiAgc2hpcHNDb250cjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJzaGlwc0NvbnRyXCJdJyksXHJcbiAgY3VzdG9taXplQnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJjdXN0b21pemVCdG5zXCJdJyksXHJcbiAgbXNnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cIm1zZ1wiXScpLFxyXG4gIHBsYXllckJvYXJkMTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJwbGF5ZXJCb2FyZDFcIl0nKSxcclxuICBwbGF5ZXJCb2FyZDI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwicGxheWVyQm9hcmQyXCJdJyksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207XHJcbiIsImNvbnN0IHB1YlN1YiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGV2ZW50cyA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICBldmVudHNbZXZlbnRdID8gZXZlbnRzW2V2ZW50XS5wdXNoKGZuKSA6IChldmVudHNbZXZlbnRdID0gW2ZuXSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVuU3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgaWYgKGV2ZW50c1tldmVudF0pIHtcclxuICAgICAgZXZlbnRzW2V2ZW50XSA9IGV2ZW50c1tldmVudF0uZmlsdGVyKChmdW5jKSA9PiBmdW5jICE9PSBmbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcclxuICAgIGlmIChldmVudHNbZXZlbnRdKSBldmVudHNbZXZlbnRdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdWJzY3JpYmUsIHVuU3Vic2NyaWJlLCBwdWJsaXNoIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gIHBsYXllckJvYXJkQ3VzdG9taXplZDogXCJwbGF5ZXJCb2FyZEN1c3RvbWl6ZWRcIixcclxuICBpbml0Qm9hcmQ6IFwiaW5pdEJvYXJkXCIsXHJcbiAgZ2FtZU92ZXI6IFwiZ2FtZU92ZXJcIixcclxuICB1c2Vyc1R1cm46IFwidXNlcnNUdXJuXCIsXHJcbiAgdXNlclBsYXllZDogXCJ1c2VyUGxheWVkXCIsXHJcbiAgYm9hcmRzQ2hhbmdlZDogXCJib2FyZHNDaGFuZ2VkXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHB1YlN1YjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHB1YlN1YiwgeyBldmVudHMgfSBmcm9tIFwiLi9tb2R1bGVzL3B1YnN1YlwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2JhdHRsZXNoaXBcIjtcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xyXG5cclxuKCgpID0+IHtcclxuICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJcIiksXHJcbiAgICBwbGF5ZXIyID0gbmV3IFBsYXllcihcIlwiLCB0cnVlKTtcclxuXHJcbiAgcHViU3ViLnN1YnNjcmliZShldmVudHMucGxheWVyQm9hcmRDdXN0b21pemVkLCBzZXRQbGF5ZXIpO1xyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmluaXRCb2FyZCwgc3RhcnRHYW1lTG9vcCk7XHJcbiAgZGlzcGxheS5pbml0UGFnZSgpO1xyXG5cclxuICBmdW5jdGlvbiBzZXRQbGF5ZXIoYXJlYXNMaXN0KSB7XHJcbiAgICBhcmVhc0xpc3QuZm9yRWFjaChwbGF5ZXIxLmFkZFNoaXAuYmluZChwbGF5ZXIxKSk7XHJcbiAgICBwdWJTdWIucHVibGlzaChldmVudHMuaW5pdEJvYXJkLCB7XHJcbiAgICAgIGJvYXJkMTogcGxheWVyMS5nYW1lQm9hcmQsXHJcbiAgICAgIGJvYXJkMjogcGxheWVyMi5nYW1lQm9hcmQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrV2luKHAxID0gcGxheWVyMSwgcDIgPSBwbGF5ZXIyKSB7XHJcbiAgICBpZiAocDEuZ2FtZUJvYXJkLmFyZUFsbFN1bmsoKSkge1xyXG4gICAgICByZXR1cm4gcDI7XHJcbiAgICB9IGVsc2UgaWYgKHAyLmdhbWVCb2FyZC5hcmVBbGxTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuIHAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWVMb29wKCkge1xyXG4gICAgY29uc3QgdHVybnNRdWV1ZSA9IFtwbGF5ZXIxLCBwbGF5ZXIyXTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGNvbnN0IHBsYXllciA9IHR1cm5zUXVldWUuc2hpZnQoKSxcclxuICAgICAgICBlbmVteSA9IHR1cm5zUXVldWVbMF07XHJcblxyXG4gICAgICBkaXNwbGF5LndyaXRlTWVzc2FnZShwbGF5ZXIuaXNDb21wdXRlciA/IFwiQ29tcHV0ZXIncyBUdXJuXCIgOiBcIllvdXIgVHVyblwiKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgcG9zID0gYXdhaXQgcGxheWVyLnBsYXkoZW5lbXkuZ2FtZUJvYXJkKSxcclxuICAgICAgYXR0YWNrZWRTaGlwID0gZW5lbXkuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socG9zKTtcclxuICAgICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLmJvYXJkc0NoYW5nZWQsIHsgYm9hcmQxOiBwbGF5ZXIxLmdhbWVCb2FyZCwgYm9hcmQyOiBwbGF5ZXIyLmdhbWVCb2FyZCB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHdpbm5lciA9IGNoZWNrV2luKCk7XHJcbiAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICBwdWJTdWIucHVibGlzaChldmVudHMuZ2FtZU92ZXIsIHdpbm5lcilcclxuICAgICAgICBkaXNwbGF5LndyaXRlTWVzc2FnZSh3aW5uZXIuaXNDb21wdXRlciA/IFwiWW91IExvb3NlIVwiIDogXCJZb3UgV2luIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGF0dGFja2VkU2hpcCkge1xyXG4gICAgICAgICAgLy8gUGxheSBhZ2FpblxyXG4gICAgICAgICAgdHVybnNRdWV1ZS5wb3AoKTtcclxuICAgICAgICAgIHR1cm5zUXVldWUucHVzaChwbGF5ZXIsIGVuZW15KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHVybnNRdWV1ZS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=