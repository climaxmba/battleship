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
#customize-contr span.valid {
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

.squares {
  border: 0.5px solid grey;
  position: relative;
}
.squares.ship-pos:not(.hit) {
  background-color: var(--shipbg);
}
.squares.hit {
  background-color: var(--hitbg);
}
.squares.missed {
  background-color: var(--missedbg);
}
.squares.missed::after {
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
    height: 280px;
    width: 280px;
    grid-template: repeat(10, 1fr) / repeat(10, 1fr) !important;
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
`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,gCAAgC;AAClC;AACA;;;EAGE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kDAAkD;AACpD;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;IACI,gCAAgC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,gDAAgD;EAClD;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,2DAA2D;EAC7D;;EAEA;IACE,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,UAAU;IACV,kBAAkB;EACpB;AACF","sourcesContent":[":root {\r\n  --missedbg: #e0e0e0;\r\n  --hitbg: lightpink;\r\n  --validbg: aquamarine;\r\n  --shipbg: darkgrey;\r\n  --lastbg: 2px solid;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 0;\r\n}\r\n\r\n#header {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n#msg {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 0.5rem;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#customize-contr,\r\n#gameover-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n#customize-contr span.valid {\r\n  background-color: var(--validbg);\r\n}\r\n#customize-ctrl-contr > span,\r\n#gameover-contr button:hover,\r\n#gameover-contr button {\r\n  padding: 5px;\r\n  background: black;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n#customize-ctrl-contr > span:active,\r\n#gameover-contr button:active {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#gameover-contr p {\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n#gameover-contr h2 {\r\n  margin: 0;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] > div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: lightgrey;\r\n}\r\n\r\n#ships-contr > div {\r\n  display: grid;\r\n  grid-template-rows: 25px;\r\n  border: 1px solid;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  border: 1px solid;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares {\r\n  border: 0.5px solid grey;\r\n  position: relative;\r\n}\r\n.squares.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg);\r\n}\r\n.squares.hit {\r\n  background-color: var(--hitbg);\r\n}\r\n.squares.missed {\r\n  background-color: var(--missedbg);\r\n}\r\n.squares.missed::after {\r\n  content: \"\";\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n.squares.last-hit {\r\n  border: var(--lastbg);\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n    background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\nfooter {\r\n  margin-top: 95vh;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  background-color: black;\r\n  color: white;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter a {\r\n  color: lightgray;\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  }\r\n\r\n  .board-contr {\r\n    height: 280px;\r\n    width: 280px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr) !important;\r\n  }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    content: \"\";\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    height: 3px;\r\n    width: 3px;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxL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QTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUNKO0FBQ047QUFDWjtBQUM1QjtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFNO0FBQzFCLGtCQUFrQix1REFBTTtBQUN4QjtBQUNBLEVBQUUsdURBQU0sV0FBVyxtREFBTTtBQUN6QixFQUFFLHVEQUFNLFdBQVcsbURBQU07QUFDekIsRUFBRSx3REFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU0sU0FBUyxtREFBTTtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFNLFNBQVMsbURBQU0sa0JBQWtCLHNEQUFzRDtBQUNuRztBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFNLFNBQVMsbURBQU07QUFDN0IsUUFBUSx3REFBTztBQUNmO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1taXNzZWRiZzogI2UwZTBlMDtcclxuICAtLWhpdGJnOiBsaWdodHBpbms7XHJcbiAgLS12YWxpZGJnOiBhcXVhbWFyaW5lO1xyXG4gIC0tc2hpcGJnOiBkYXJrZ3JleTtcclxuICAtLWxhc3RiZzogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5bZHJhZ2dhYmxlPVwidHJ1ZVwiXTpob3ZlciB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcblxyXG4uY2xpY2thYmxlLFxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4jbXNnIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG5kaWFsb2cge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICMwMDAwMDAyMDtcclxufVxyXG5cclxuI2N1c3RvbWl6ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIsXHJcbiNnYW1lb3Zlci1jb250ciB7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuI2N1c3RvbWl6ZS1jb250ciBzcGFuLnZhbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcclxufVxyXG4jY3VzdG9taXplLWN0cmwtY29udHIgPiBzcGFuLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmhvdmVyLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4jY3VzdG9taXplLWN0cmwtY29udHIgPiBzcGFuOmFjdGl2ZSxcclxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2dhbWVvdmVyLWNvbnRyIHAge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiNnYW1lb3Zlci1jb250ciBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gPiBkaXYge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweDtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyIC5zcXVhcmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciA+IGRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbiNzaGlwMSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwMiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwMyxcclxuI3NoaXA0IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXA1IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXAxIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXAyIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXAzLFxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDQge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDUge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDI1cHgpO1xyXG59XHJcblxyXG4uYm9hcmQtY29udHIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzNXB4KSAvIHJlcGVhdCgxMCwgMzVweCk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIgLmJvYXJkLWNvbnRyIHtcclxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDI1cHgpIC8gcmVwZWF0KDEwLCAyNXB4KTtcclxufVxyXG5cclxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uc3F1YXJlcyB7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc3F1YXJlcy5zaGlwLXBvczpub3QoLmhpdCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBiZyk7XHJcbn1cclxuLnNxdWFyZXMuaGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXRiZyk7XHJcbn1cclxuLnNxdWFyZXMubWlzc2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWRiZyk7XHJcbn1cclxuLnNxdWFyZXMubWlzc2VkOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zcXVhcmVzLmxhc3QtaGl0IHtcclxuICBib3JkZXI6IHZhcigtLWxhc3RiZyk7XHJcbn1cclxuXHJcbiNnYW1lLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDJyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGxheWVyczpsYXN0LWNoaWxkIHNwYW4uc3F1YXJlczpub3QoLm1pc3NlZCk6bm90KC5oaXQpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXJzLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogOTV2aDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuQG1lZGlhICh3aWR0aCA8PTc1MHB4KSB7XHJcbiAgI2N1c3RvbWl6ZS1jb250ciB7XHJcbiAgICB3aWR0aDogMzEycHg7XHJcbiAgfVxyXG5cclxuICAjc2hpcHMtY29udHIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLnBsYXllcnM6Zmlyc3QtY2hpbGQgLmJvYXJkLWNvbnRyIHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XHJcbiAgfVxyXG5cclxuICAuYm9hcmQtY29udHIge1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBsYXllcnM6Zmlyc3QtY2hpbGQgLnNxdWFyZXMubWlzc2VkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTs7O0VBR0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWiwyREFBMkQ7RUFDN0Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tbWlzc2VkYmc6ICNlMGUwZTA7XFxyXFxuICAtLWhpdGJnOiBsaWdodHBpbms7XFxyXFxuICAtLXZhbGlkYmc6IGFxdWFtYXJpbmU7XFxyXFxuICAtLXNoaXBiZzogZGFya2dyZXk7XFxyXFxuICAtLWxhc3RiZzogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUsXFxyXFxuYSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbiNtc2cge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICMwMDAwMDAyMDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyLFxcclxcbiNnYW1lb3Zlci1jb250ciB7XFxyXFxuICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4jY3VzdG9taXplLWNvbnRyIHNwYW4udmFsaWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XFxyXFxufVxcclxcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW4sXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjpob3ZlcixcXHJcXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4jY3VzdG9taXplLWN0cmwtY29udHIgPiBzcGFuOmFjdGl2ZSxcXHJcXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVvdmVyLWNvbnRyIHAge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2dhbWVvdmVyLWNvbnRyIGgyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gPiBkaXYge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIgLnNxdWFyZXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDEge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwMiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAzLFxcclxcbiNzaGlwNCB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXA1IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXAxIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXAyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXAzLFxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDQge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDUge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jb250ciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDM1cHgpIC8gcmVwZWF0KDEwLCAzNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jb250ciAuYm9hcmQtY29udHIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAyNXB4KSAvIHJlcGVhdCgxMCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY3RybC1jb250ciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlcyB7XFxyXFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zcXVhcmVzLnNoaXAtcG9zOm5vdCguaGl0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwYmcpO1xcclxcbn1cXHJcXG4uc3F1YXJlcy5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0YmcpO1xcclxcbn1cXHJcXG4uc3F1YXJlcy5taXNzZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkYmcpO1xcclxcbn1cXHJcXG4uc3F1YXJlcy5taXNzZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4uc3F1YXJlcy5sYXN0LWhpdCB7XFxyXFxuICBib3JkZXI6IHZhcigtLWxhc3RiZyk7XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJzLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDk1dmg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD03NTBweCkge1xcclxcbiAgI2N1c3RvbWl6ZS1jb250ciB7XFxyXFxuICAgIHdpZHRoOiAzMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaGlwcy1jb250ciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5ib2FyZC1jb250ciB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvYXJkLWNvbnRyIHtcXHJcXG4gICAgaGVpZ2h0OiAyODBweDtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcikgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICB3aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5cclxuY2xhc3MgU2hpcCB7XHJcbiAgbGVuZ3RoO1xyXG4gIGhpdHMgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzKys7XHJcbiAgfVxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA8PSB0aGlzLmhpdHM7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG4gIGJvYXJkID0gbmV3IE1hcCgpO1xyXG4gIHNoaXBzID0gbmV3IFNldCgpO1xyXG4gIG1pc3NlZEF0dGFja3MgPSBuZXcgU2V0KCk7XHJcbiAgbGFzdEF0dGFja2VkID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoYWRkUmFuZG9tU2hpcHMgPSB0cnVlKSB7XHJcbiAgICB0aGlzLiNpbml0Qm9hcmQoKTtcclxuICAgIGlmIChhZGRSYW5kb21TaGlwcykgdGhpcy4jYWRkU2hpcHMoKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XHJcbiAgICB0aGlzLmxhc3RBdHRhY2tlZCA9IHNxdWFyZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNoaXBPYmogb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICBpZiAoc2hpcE9iai5jb29yZHMuaGFzKHNxdWFyZSkpIHtcclxuICAgICAgICBzaGlwT2JqLmhpdENvb3Jkcy5hZGQoc3F1YXJlKTtcclxuICAgICAgICBzaGlwT2JqLnNoaXAuaGl0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MuYWRkKHNxdWFyZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRTcXVhcmUoc3F1YXJlKSB7XHJcbiAgICB0aGlzLmJvYXJkLnNldChzcXVhcmUsIHsgc3F1YXJlLCBhZGpTcXVhcmVzOiBuZXcgU2V0KCkgfSk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0U3F1YXJlKHNxdWFyZTEsIHNxdWFyZTIpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkLmhhcyhzcXVhcmUxKSAmJiB0aGlzLmJvYXJkLmhhcyhzcXVhcmUyKSkge1xyXG4gICAgICB0aGlzLmJvYXJkLmdldChzcXVhcmUxKS5hZGpTcXVhcmVzLmFkZCh0aGlzLmJvYXJkLmdldChzcXVhcmUyKSk7XHJcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTIpLmFkalNxdWFyZXMuYWRkKHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFkalNxdWFyZXMoc3F1YXJlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXQoc3F1YXJlKS5hZGpTcXVhcmVzO1xyXG4gIH1cclxuXHJcbiAgYXJlTmVpZ2hib29ycyhzcXVhcmUxLCBzcXVhcmUyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkuYWRqU3F1YXJlcy5oYXMoc3F1YXJlMik7XHJcbiAgfVxyXG5cclxuICBhcmVBbGxTdW5rKCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXBzLnNpemUpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLnNoaXBzXVxyXG4gICAgICAubWFwKChzaGlwT2JqKSA9PiBzaGlwT2JqLnNoaXAuaXNTdW5rKCkpXHJcbiAgICAgIC5ldmVyeSgodmFsKSA9PiB2YWwgPT09IHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZhaWxhYmxlU3F1YXJlcygpIHtcclxuICAgIGNvbnN0IGJvYXJkU3F1YXJlcyA9IFsuLi50aGlzLmJvYXJkLmtleXMoKV0sXHJcbiAgICAgIHNoaXBQb3NBdHRhY2tlZCA9IFsuLi50aGlzLnNoaXBzXS5mbGF0TWFwKChvYmopID0+IFsuLi5vYmouaGl0Q29vcmRzXSk7XHJcbiAgICBjb25zdCBzcXVhcmVTZXQgPSBib2FyZFNxdWFyZXMuZmlsdGVyKFxyXG4gICAgICAoc3F1YXJlKSA9PiAhKHRoaXMubWlzc2VkQXR0YWNrcy5oYXMoc3F1YXJlKSB8fCBzaGlwUG9zQXR0YWNrZWQuaW5jbHVkZXMoc3F1YXJlKSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIFsuLi5zcXVhcmVTZXRdO1xyXG4gIH1cclxuXHJcbiAgI2luaXRCb2FyZCgpIHtcclxuICAgIC8vIEFkZCBzcXVhcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTcXVhcmUoYCR7aX0sJHtqfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29ubmVjdCBzcXVhcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyclBvcyA9IGAke2l9LCR7an1gO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpIC0gMX0sJHtqfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpfSwke2ogKyAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiAtIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgKyAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpIC0gMX0sJHtqICsgMX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAjYWRkU2hpcHMoKSB7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDUpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg0KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMyksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgyKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICB9XHJcbiAgI2dldFJhbmRvbUJvb2woKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG4gICNhZGRTaGlwKHNoaXAsIGlzVmVydGljYWwgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5zaGlwcy5hZGQoe1xyXG4gICAgICBzaGlwLFxyXG4gICAgICBjb29yZHM6IHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCksXHJcbiAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgIGNvb3Jkc0xpc3QgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gY2hlY2sgaWYgJ3BvcycgaXMgdmFsaWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3h9LCR7eSArIGl9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYCR7eCArIGl9LCR7eX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRQb3MocG9zKSkge1xyXG4gICAgICAgICAgY29vcmRzTGlzdC5hZGQocG9zKTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4jY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb3Jkc0xpc3Q7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkUG9zKHBvcykge1xyXG4gICAgaWYgKCF0aGlzLmJvYXJkLmhhcyhwb3MpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IFsuLi50aGlzLnNoaXBzXS5mbGF0TWFwKChvYmopID0+IFsuLi5vYmouY29vcmRzXSk7XHJcbiAgICBpZiAobGlzdC5pbmNsdWRlcyhwb3MpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgYWRqUG9zID0gWy4uLnRoaXMuYm9hcmQuZ2V0KHBvcykuYWRqU3F1YXJlc10ubWFwKChvYmopID0+IG9iai5zcXVhcmUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYWRqUG9zLmluY2x1ZGVzKGxpc3RbaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgbmFtZTtcclxuICBnYW1lQm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaXNDb21wdXRlciA9IGlzQ29tcHV0ZXI7XHJcbiAgICBpZiAoaXNDb21wdXRlcikge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRTaGlwKGFyZWEpIHtcclxuICAgIGlmICh0aGlzLiNpc1ZhbGlkQXJlYShhcmVhKSkge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZC5zaGlwcy5hZGQoe1xyXG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKGFyZWEubGVuZ3RoKSxcclxuICAgICAgICBjb29yZHM6IG5ldyBTZXQoYXJlYSksXHJcbiAgICAgICAgaGl0Q29vcmRzOiBuZXcgU2V0KCksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2lzVmFsaWRBcmVhKGFyZWEpIHtcclxuICAgIC8vIFZlcmlmeSB0aGF0IGFsbCBjb29yZGluYXRlcyBpbiBhcmVhIGFyZSBhZGphY2VudC4uLlxyXG4gICAgLy8gLi4uYW5kIG5vdCBkaWFnb25hbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcmVhW2kgKyAxXSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBhcmVhW2ldLnNwbGl0KFwiLFwiKSxcclxuICAgICAgICAgIG5leHRQb3MgPSBhcmVhW2kgKyAxXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIShcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMV1cclxuICAgICAgICAgICkgfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV1cclxuICAgICAgICApXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcmVhLmV2ZXJ5KHRoaXMuZ2FtZUJvYXJkLmlzVmFsaWRQb3MuYmluZCh0aGlzLmdhbWVCb2FyZCkpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tU3F1YXJlKGJvYXJkKSB7XHJcbiAgICBjb25zdCBhdmFsYWJsZVNxdWFyZXMgPSBib2FyZC5nZXRBdmFpbGFibGVTcXVhcmVzKCk7XHJcbiAgICByZXR1cm4gYXZhbGFibGVTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWxhYmxlU3F1YXJlcy5sZW5ndGgpXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHBsYXkoYm9hcmQpIHtcclxuICAgIGlmICh0aGlzLmlzQ29tcHV0ZXIpIHtcclxuICAgICAgLy8gU2ltdWxhdGUgZGVsYXlcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJhbmRvbVNxdWFyZShib2FyZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy51c2VyUGxheWVkLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlcihzcXVhcmUpIHtcclxuICAgICAgICAgIHJlcyhzcXVhcmUpO1xyXG4gICAgICAgICAgcHViU3ViLnVuU3Vic2NyaWJlKGV2ZW50cy51c2VyUGxheWVkLCBoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBcmVhcyhhcmVhc0xpc3QpIHtcclxuICBjb25zdCBwID0gbmV3IFBsYXllcihcIlwiLCBmYWxzZSk7XHJcbiAgdHJ5IHtcclxuICAgIGFyZWFzTGlzdC5mb3JFYWNoKChhcmVhKSA9PiB7XHJcbiAgICAgIGlmICghcC5hZGRTaGlwKGFyZWEpKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciwgdmFsaWRhdGVBcmVhcyB9O1xyXG4iLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5pbXBvcnQgZG9tIGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQsIHZhbGlkYXRlQXJlYXMgfSBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XHJcblxyXG5jb25zdCBjdXN0b21pemluZ01vZGFsID0gKCgpID0+IHtcclxuICBsZXQgX2RyYWdnaW5nTGVuZ3RoLFxyXG4gICAgX2lzVmVydGljYWwgPSBmYWxzZSxcclxuICAgIF9jdXJyU2hpcEFyZWEgPSBbXSxcclxuICAgIF9zaGlwQXJlYXMgPSBbXSxcclxuICAgIF9ib2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBpc09yaWVudGF0aW9uVmVydGljYWwoKSB7XHJcbiAgICByZXR1cm4gX2lzVmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hPcmllbnRhdGlvbigpIHtcclxuICAgIF9pc1ZlcnRpY2FsID0gIV9pc1ZlcnRpY2FsO1xyXG4gICAgZG9tLnNoaXBzQ29udHIuc2V0QXR0cmlidXRlKFwiZGF0YS1pc3ZlcnRpY2FsXCIsIF9pc1ZlcnRpY2FsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERyYWdnaW5nTGVuZ3RoKGxlbmd0aCkge1xyXG4gICAgX2RyYWdnaW5nTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmQoKSB7XHJcbiAgICBkb20uZGlhbG9nQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKFxyXG4gICAgICAoY2hpbGQpID0+IChjaGlsZC5jbGFzc05hbWUgPSBcInNxdWFyZXNcIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2xlYXJCb2FyZFZhbGlkaXR5KCkge1xyXG4gICAgY29uc3QgdmFsaWRpdHlTcXVhcmVzID0gZG9tLmRpYWxvZ0JvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwic3Bhbi52YWxpZCwgc3Bhbi5pbnZhbGlkXCJcclxuICAgICk7XHJcbiAgICB2YWxpZGl0eVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIik7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm47XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgY29uc3QgYXJlYXNMaXN0ID0gW10sXHJcbiAgICAgIGFsdEFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBzcXVhcmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZS1pbmRleFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSArIGl9YClcclxuICAgICAgICA6IGFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgKyBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2RyYWdnaW5nTGVuZ3RoOyBpKyspIHtcclxuICAgICAgX2lzVmVydGljYWxcclxuICAgICAgICA/IGFsdEFyZWFzTGlzdC5wdXNoKGAke3NxdWFyZVswXX0sJHtwYXJzZUludChzcXVhcmVbMl0pIC0gaX1gKVxyXG4gICAgICAgIDogYWx0QXJlYXNMaXN0LnB1c2goYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSAtIGl9LCR7c3F1YXJlWzJdfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhcmVhc0xpc3RdKSkge1xyXG4gICAgICBhcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlQXJlYXMoWy4uLl9zaGlwQXJlYXMsIGFsdEFyZWFzTGlzdF0pKSB7XHJcbiAgICAgIGFsdEFyZWFzTGlzdC5mb3JFYWNoKChwb3MpID0+XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9JyR7cG9zfSddYClcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIilcclxuICAgICAgKTtcclxuICAgICAgX2N1cnJTaGlwQXJlYSA9IGFsdEFyZWFzTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyb3BTaGlwKGUpIHtcclxuICAgIF9jbGVhckJvYXJkVmFsaWRpdHkoKTtcclxuXHJcbiAgICBpZiAoX2N1cnJTaGlwQXJlYS5sZW5ndGggJiYgX3NoaXBBcmVhcy5sZW5ndGggPCA1KSB7XHJcbiAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgICBfc2hpcEFyZWFzLnB1c2goX2N1cnJTaGlwQXJlYSk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgICAgX3VwZGF0ZUJvYXJkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByYW5kb21pemVCb2FyZCgpIHtcclxuICAgIGRvbS5zaGlwc0NvbnRyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBfYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzID0gWy4uLl9ib2FyZC5zaGlwc10ubWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5jb29yZHNdKTtcclxuICAgIF91cGRhdGVCb2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3VwZGF0ZUJvYXJkKCkge1xyXG4gICAgX2NsZWFyQm9hcmQoKTtcclxuICAgIF9zaGlwQXJlYXNcclxuICAgICAgLmZsYXRNYXAoKGFycikgPT4gYXJyKVxyXG4gICAgICAuZm9yRWFjaCgoc3F1YXJlKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3NxdWFyZX0nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXAtcG9zXCIpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleGl0TW9kYWwoKSB7XHJcbiAgICBpZiAoX3NoaXBBcmVhcy5sZW5ndGggPT09IDUpIHtcclxuICAgICAgZG9tLmN1c3RvbWl6aW5nRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5wbGF5ZXJCb2FyZEN1c3RvbWl6ZWQsIF9zaGlwQXJlYXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldERyYWdnaW5nTGVuZ3RoLFxyXG4gICAgc3dpdGNoT3JpZW50YXRpb24sXHJcbiAgICBpc09yaWVudGF0aW9uVmVydGljYWwsXHJcbiAgICByZXZlYWxTcXVhcmVzVmFsaWRpdHksXHJcbiAgICBkcm9wU2hpcCxcclxuICAgIHJhbmRvbWl6ZUJvYXJkLFxyXG4gICAgZXhpdE1vZGFsLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBnYW1lT3Zlck1vZGFsID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBzaG93U3RhdHVzKHR4dCkge1xyXG4gICAgZG9tLmdhbWVPdmVyVHh0LnRleHRDb250ZW50ID0gdHh0O1xyXG4gICAgZG9tLmdhbWVPdmVyRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhpdE1vZGFsKCkge1xyXG4gICAgZG9tLmdhbWVPdmVyRGlhbG9nLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzaG93U3RhdHVzLCBleGl0TW9kYWwgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGdhbWVCb2FyZHMgPSAoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIGluaXRCb2FyZHMoKSB7XHJcbiAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5pbml0Qm9hcmQsIF91cGRhdGVCb2FyZHMpO1xyXG4gICAgcHViU3ViLnN1YnNjcmliZShldmVudHMuYm9hcmRzQ2hhbmdlZCwgX3VwZGF0ZUJvYXJkcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfdXBkYXRlQm9hcmRzKHsgYm9hcmQxLCBib2FyZDIgfSkge1xyXG4gICAgYm9hcmQxLm1pc3NlZEF0dGFja3MuZm9yRWFjaChcclxuICAgICAgX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJtaXNzZWRcIiwgZG9tLnBsYXllckJvYXJkMSlcclxuICAgICk7XHJcbiAgICBbLi4uYm9hcmQxLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouY29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJzaGlwLXBvc1wiLCBkb20ucGxheWVyQm9hcmQxKSk7XHJcbiAgICBbLi4uYm9hcmQxLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouaGl0Q29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJoaXRcIiwgZG9tLnBsYXllckJvYXJkMSkpO1xyXG4gICAgaWYgKGJvYXJkMS5sYXN0QXR0YWNrZWQpIHtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3QtaGl0XCIpXHJcbiAgICAgICAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtaGl0XCIpKTtcclxuXHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDFcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PVwiJHtib2FyZDEubGFzdEF0dGFja2VkfVwiXWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJsYXN0LWhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBib2FyZDIubWlzc2VkQXR0YWNrcy5mb3JFYWNoKFxyXG4gICAgICBfZ2V0SXRlcmF0b3JDYWxsYmFjayhcIm1pc3NlZFwiLCBkb20ucGxheWVyQm9hcmQyKVxyXG4gICAgKTtcclxuICAgIFsuLi5ib2FyZDIuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5oaXRDb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcImhpdFwiLCBkb20ucGxheWVyQm9hcmQyKSk7XHJcbiAgICBpZiAoYm9hcmQyLmxhc3RBdHRhY2tlZCkge1xyXG4gICAgICBkb20ucGxheWVyQm9hcmQyXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdC1oaXRcIilcclxuICAgICAgICAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibGFzdC1oaXRcIikpO1xyXG5cclxuICAgICAgZG9tLnBsYXllckJvYXJkMlxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9XCIke2JvYXJkMi5sYXN0QXR0YWNrZWR9XCJdYClcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImxhc3QtaGl0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGJhY2sgZ2VuZXJhdG9yXHJcbiAgZnVuY3Rpb24gX2dldEl0ZXJhdG9yQ2FsbGJhY2soY2xhc3NOYW1lLCBib2FyZCkge1xyXG4gICAgcmV0dXJuIChzcXVhcmUpID0+XHJcbiAgICAgIGJvYXJkXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbml0Qm9hcmRzIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBpbml0UGFnZSgpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmdhbWVPdmVyLCAod2lubmVyKSA9PlxyXG4gICAgICBnYW1lT3Zlck1vZGFsLnNob3dTdGF0dXMoXHJcbiAgICAgICAgd2lubmVyLmlzQ29tcHV0ZXJcclxuICAgICAgICAgID8gXCJZb3UgTG9vc2UhIFRyeSBBZ2Fpbi5cIlxyXG4gICAgICAgICAgOiBcIkNvbmdyYXR1bGF0aW9ucyEgWW91IFdpbi5cIlxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIF9jbGVhckJvYXJkcyhkb20uZGlhbG9nQm9hcmQsIGRvbS5wbGF5ZXJCb2FyZDEsIGRvbS5wbGF5ZXJCb2FyZDIpO1xyXG5cclxuICAgIC8vIERyYXcgYm9hcmRzXHJcbiAgICBjb25zdCBib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgeCA9IDk7IHggPj0gMDsgeC0tKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICBmb3IgKGxldCB5ID0gOTsgeSA+PSAwOyB5LS0pIHtcclxuICAgICAgICBhcnIucHVzaChgJHt5fSwke3h9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYm9hcmQucHVzaCguLi5hcnIucmV2ZXJzZSgpKTtcclxuICAgIH1cclxuICAgIGJvYXJkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIiwgc3F1YXJlKTtcclxuICAgICAgbm9kZS5jbGFzc05hbWUgPSBcInNxdWFyZXNcIjtcclxuXHJcbiAgICAgIGRvbS5kaWFsb2dCb2FyZC5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSgpKTtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMS5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSgpKTtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMi5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5jdXN0b21pemluZ0RpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIGdhbWVCb2FyZHMuaW5pdEJvYXJkcygpO1xyXG4gICAgX2FkZEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmRzKC4uLmJvYXJkcykge1xyXG4gICAgYm9hcmRzLmZvckVhY2goKGIpID0+IChiLmlubmVySFRNTCA9IG51bGwpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9hZGRFdmVudHMoKSB7XHJcbiAgICBkb20uc2hpcHNDb250ci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PlxyXG4gICAgICBjdXN0b21pemluZ01vZGFsLnNldERyYWdnaW5nTGVuZ3RoKGUudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aClcclxuICAgICk7XHJcbiAgICBkb20uZGlhbG9nQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJkcmFnb3ZlclwiLFxyXG4gICAgICBjdXN0b21pemluZ01vZGFsLnJldmVhbFNxdWFyZXNWYWxpZGl0eVxyXG4gICAgKTtcclxuICAgIGRvbS5zaGlwc0NvbnRyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGN1c3RvbWl6aW5nTW9kYWwuZHJvcFNoaXApO1xyXG5cclxuICAgIGRvbS5jdXN0b21pemVCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIpKSB7XHJcbiAgICAgICAgY2FzZSBcInJvdGF0ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWl6aW5nTW9kYWwuc3dpdGNoT3JpZW50YXRpb24oKTtcclxuICAgICAgICBjYXNlIFwicmFuZG9tXCI6XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9taXppbmdNb2RhbC5yYW5kb21pemVCb2FyZCgpO1xyXG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWl6aW5nTW9kYWwuZXhpdE1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZU92ZXJNb2RhbC5leGl0TW9kYWwpO1xyXG4gICAgZG9tLnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcclxuXHJcbiAgICBkb20ucGxheWVyQm9hcmQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBzcXVhcmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZS1pbmRleFwiKTtcclxuICAgICAgaWYgKHNxdWFyZSAmJiBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic3F1YXJlc1wiKVxyXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy51c2VyUGxheWVkLCBzcXVhcmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cml0ZU1lc3NhZ2UobXNnLCBkZWxheSA9IG51bGwpIHtcclxuICAgIGRvbS5tc2cudGV4dENvbnRlbnQgPSBtc2c7XHJcbiAgICBpZiAoZGVsYXkgIT09IG51bGwpIHNldFRpbWVvdXQoX3JlbW92ZU1lc3NhZ2UsIGRlbGF5ICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcmVtb3ZlTWVzc2FnZSgpIHtcclxuICAgIGRvbS5tc2cudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaW5pdFBhZ2UsIHdyaXRlTWVzc2FnZSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcclxuIiwiY29uc3QgZG9tID0ge1xyXG4gIGN1c3RvbWl6aW5nRGlhbG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImN1c3RvbWl6aW5nRGlhbG9nXCJdJyksXHJcbiAgZ2FtZU92ZXJEaWFsb2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZ2FtZU92ZXJEaWFsb2dcIl0nKSxcclxuICBnYW1lT3ZlclR4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJnYW1lT3ZlclR4dFwiXScpLFxyXG4gIHJlc3RhcnRCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwicmVzdGFydEJ0blwiXScpLFxyXG4gIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImNsb3NlQnRuXCJdJyksXHJcbiAgZGlhbG9nQm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZGlhbG9nQm9hcmRcIl0nKSxcclxuICBzaGlwc0NvbnRyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInNoaXBzQ29udHJcIl0nKSxcclxuICBjdXN0b21pemVCdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImN1c3RvbWl6ZUJ0bnNcIl0nKSxcclxuICBtc2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwibXNnXCJdJyksXHJcbiAgcGxheWVyQm9hcmQxOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInBsYXllckJvYXJkMVwiXScpLFxyXG4gIHBsYXllckJvYXJkMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJwbGF5ZXJCb2FyZDJcIl0nKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTtcclxuIiwiY29uc3QgcHViU3ViID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZXZlbnRzID0ge307XHJcblxyXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgIGV2ZW50c1tldmVudF0gPyBldmVudHNbZXZlbnRdLnB1c2goZm4pIDogKGV2ZW50c1tldmVudF0gPSBbZm5dKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdW5TdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICBldmVudHNbZXZlbnRdID0gZXZlbnRzW2V2ZW50XS5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMgIT09IGZuKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSkge1xyXG4gICAgaWYgKGV2ZW50c1tldmVudF0pIGV2ZW50c1tldmVudF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHN1YnNjcmliZSwgdW5TdWJzY3JpYmUsIHB1Ymxpc2ggfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgcGxheWVyQm9hcmRDdXN0b21pemVkOiBcInBsYXllckJvYXJkQ3VzdG9taXplZFwiLFxyXG4gIGluaXRCb2FyZDogXCJpbml0Qm9hcmRcIixcclxuICBnYW1lT3ZlcjogXCJnYW1lT3ZlclwiLFxyXG4gIHVzZXJzVHVybjogXCJ1c2Vyc1R1cm5cIixcclxuICB1c2VyUGxheWVkOiBcInVzZXJQbGF5ZWRcIixcclxuICBib2FyZHNDaGFuZ2VkOiBcImJvYXJkc0NoYW5nZWRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL21vZHVsZXMvcHVic3ViXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL21vZHVsZXMvYmF0dGxlc2hpcFwiO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlwiKSxcclxuICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKFwiXCIsIHRydWUpO1xyXG5cclxuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5wbGF5ZXJCb2FyZEN1c3RvbWl6ZWQsIHNldFBsYXllcik7XHJcbiAgcHViU3ViLnN1YnNjcmliZShldmVudHMuaW5pdEJvYXJkLCBzdGFydEdhbWVMb29wKTtcclxuICBkaXNwbGF5LmluaXRQYWdlKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldFBsYXllcihhcmVhc0xpc3QpIHtcclxuICAgIGFyZWFzTGlzdC5mb3JFYWNoKHBsYXllcjEuYWRkU2hpcC5iaW5kKHBsYXllcjEpKTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5pbml0Qm9hcmQsIHtcclxuICAgICAgYm9hcmQxOiBwbGF5ZXIxLmdhbWVCb2FyZCxcclxuICAgICAgYm9hcmQyOiBwbGF5ZXIyLmdhbWVCb2FyZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tXaW4ocDEgPSBwbGF5ZXIxLCBwMiA9IHBsYXllcjIpIHtcclxuICAgIGlmIChwMS5nYW1lQm9hcmQuYXJlQWxsU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBwMjtcclxuICAgIH0gZWxzZSBpZiAocDIuZ2FtZUJvYXJkLmFyZUFsbFN1bmsoKSkge1xyXG4gICAgICByZXR1cm4gcDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICBjb25zdCB0dXJuc1F1ZXVlID0gW3BsYXllcjEsIHBsYXllcjJdO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgcGxheWVyID0gdHVybnNRdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGVuZW15ID0gdHVybnNRdWV1ZVswXTtcclxuXHJcbiAgICAgIGRpc3BsYXkud3JpdGVNZXNzYWdlKHBsYXllci5pc0NvbXB1dGVyID8gXCJDb21wdXRlcidzIFR1cm5cIiA6IFwiWW91ciBUdXJuXCIpXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwb3MgPSBhd2FpdCBwbGF5ZXIucGxheShlbmVteS5nYW1lQm9hcmQpLFxyXG4gICAgICBhdHRhY2tlZFNoaXAgPSBlbmVteS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3MpO1xyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMuYm9hcmRzQ2hhbmdlZCwgeyBib2FyZDE6IHBsYXllcjEuZ2FtZUJvYXJkLCBib2FyZDI6IHBsYXllcjIuZ2FtZUJvYXJkIH0pO1xyXG5cclxuICAgICAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW4oKTtcclxuICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5nYW1lT3Zlciwgd2lubmVyKVxyXG4gICAgICAgIGRpc3BsYXkud3JpdGVNZXNzYWdlKHdpbm5lci5pc0NvbXB1dGVyID8gXCJZb3UgTG9vc2UhXCIgOiBcIllvdSBXaW4hXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYXR0YWNrZWRTaGlwKSB7XHJcbiAgICAgICAgICAvLyBQbGF5IGFnYWluXHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgdHVybnNRdWV1ZS5wdXNoKHBsYXllciwgZW5lbXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnB1c2gocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==