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
`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,gCAAgC;AAClC;AACA;;;EAGE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kDAAkD;AACpD;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;IACI,gCAAgC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,gDAAgD;EAClD;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,2DAA2D;EAC7D;;EAEA;IACE,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,UAAU;IACV,kBAAkB;EACpB;AACF","sourcesContent":[":root {\r\n  --missedbg: #e0e0e0;\r\n  --hitbg: lightpink;\r\n  --validbg: aquamarine;\r\n  --shipbg: darkgrey;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 0;\r\n}\r\n\r\n#header {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n#msg {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 0.5rem;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#customize-contr,\r\n#gameover-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n#customize-contr span.valid {\r\n  background-color: var(--validbg);\r\n}\r\n#customize-ctrl-contr > span,\r\n#gameover-contr button:hover,\r\n#gameover-contr button {\r\n  padding: 5px;\r\n  background: black;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n#customize-ctrl-contr > span:active,\r\n#gameover-contr button:active {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#gameover-contr p {\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n#gameover-contr h2 {\r\n  margin: 0;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] > div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: lightgrey;\r\n}\r\n\r\n#ships-contr > div {\r\n  display: grid;\r\n  grid-template-rows: 25px;\r\n  border: 1px solid;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  border: 1px solid;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares {\r\n  border: 0.5px solid grey;\r\n  position: relative;\r\n}\r\n\r\n.squares.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg);\r\n}\r\n\r\n.squares.hit {\r\n  background-color: var(--hitbg);\r\n}\r\n\r\n.squares.missed {\r\n  background-color: var(--missedbg);\r\n}\r\n\r\n.squares.missed::after {\r\n  content: \"\";\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n    background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\nfooter {\r\n  margin-top: 95vh;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  background-color: black;\r\n  color: white;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter a {\r\n  color: lightgray;\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  }\r\n\r\n  .board-contr {\r\n    height: 280px;\r\n    width: 280px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr) !important;\r\n  }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    content: \"\";\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    height: 3px;\r\n    width: 3px;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

  constructor(addRandomShips = true) {
    this.#initBoard();
    if (addRandomShips) this.#addShips();
  }

  receiveAttack(square) {
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

  randomSquare(board = new GameBoard()) {
    let square = `${Math.floor(Math.random() * 10)},${Math.floor(
      Math.random() * 10
    )}`;
    while (board.missedAttacks.has(square) || [...board.ships].flatMap(shipObj => [...shipObj.hitCoords]).includes(square)) {
      square = `${Math.floor(Math.random() * 10)},${Math.floor(
        Math.random() * 10
      )}`;
    }
    return square;
  }

  async play(board) {
    if (this.isComputer) {
      // Simulate delay
      await new Promise((res) =>
        setTimeout(() => {
          res(true);
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

  function close() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].gameOverDialog.close();
  }

  return { showStatus, close };
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

    board2.missedAttacks.forEach(
      _getIteratorCallback("missed", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2)
    );
    [...board2.ships]
      .flatMap((shipObj) => [...shipObj.hitCoords])
      .forEach(_getIteratorCallback("hit", _dom__WEBPACK_IMPORTED_MODULE_1__["default"].playerBoard2));
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

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].closeBtn.addEventListener("click", gameOverModal.close);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxL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QTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDSjtBQUNOO0FBQ1o7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQix1REFBTTtBQUMxQixrQkFBa0IsdURBQU07QUFDeEI7QUFDQSxFQUFFLHVEQUFNLFdBQVcsbURBQU07QUFDekIsRUFBRSx1REFBTSxXQUFXLG1EQUFNO0FBQ3pCLEVBQUUsd0RBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFNLFNBQVMsbURBQU07QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBTSxTQUFTLG1EQUFNLGtCQUFrQixzREFBc0Q7QUFDbkc7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBTSxTQUFTLG1EQUFNO0FBQzdCLFFBQVEsd0RBQU87QUFDZjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tbWlzc2VkYmc6ICNlMGUwZTA7XHJcbiAgLS1oaXRiZzogbGlnaHRwaW5rO1xyXG4gIC0tdmFsaWRiZzogYXF1YW1hcmluZTtcclxuICAtLXNoaXBiZzogZGFya2dyZXk7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbltkcmFnZ2FibGU9XCJ0cnVlXCJdOmhvdmVyIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5jbGlja2FibGUsXHJcbmEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbiNtc2cge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDAwMDIwO1xyXG59XHJcblxyXG4jY3VzdG9taXplIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2N1c3RvbWl6ZS1jb250cixcclxuI2dhbWVvdmVyLWNvbnRyIHtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4jY3VzdG9taXplLWNvbnRyIHNwYW4udmFsaWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xyXG59XHJcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW4sXHJcbiNnYW1lb3Zlci1jb250ciBidXR0b246aG92ZXIsXHJcbiNnYW1lb3Zlci1jb250ciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW46YWN0aXZlLFxyXG4jZ2FtZW92ZXItY29udHIgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZ2FtZW92ZXItY29udHIgcCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuI2dhbWVvdmVyLWNvbnRyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSA+IGRpdiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHIgLnNxdWFyZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyID4gZGl2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuI3NoaXAxIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXAyIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXAzLFxyXG4jc2hpcDQge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcDUge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDEge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDIge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDMsXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwNCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdICNzaGlwNSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMjVweCk7XHJcbn1cclxuXHJcbi5ib2FyZC1jb250ciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDM1cHgpIC8gcmVwZWF0KDEwLCAzNXB4KTtcclxufVxyXG5cclxuI2N1c3RvbWl6ZS1jb250ciAuYm9hcmQtY29udHIge1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMjVweCkgLyByZXBlYXQoMTAsIDI1cHgpO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWN0cmwtY29udHIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zcXVhcmVzIHtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3F1YXJlcy5zaGlwLXBvczpub3QoLmhpdCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBiZyk7XHJcbn1cclxuXHJcbi5zcXVhcmVzLmhpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0YmcpO1xyXG59XHJcblxyXG4uc3F1YXJlcy5taXNzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZGJnKTtcclxufVxyXG5cclxuLnNxdWFyZXMubWlzc2VkOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jZ2FtZS1jb250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBsYXllcnM6bGFzdC1jaGlsZCBzcGFuLnNxdWFyZXM6bm90KC5taXNzZWQpOm5vdCguaGl0KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcclxufVxyXG5cclxuLnBsYXllcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheWVycy1uYW1lIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDk1dmg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbkBtZWRpYSAod2lkdGggPD03NTBweCkge1xyXG4gICNjdXN0b21pemUtY29udHIge1xyXG4gICAgd2lkdGg6IDMxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3NoaXBzLWNvbnRyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5ib2FyZC1jb250ciB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkLWNvbnRyIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcikgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTs7O0VBR0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDJEQUEyRDtFQUM3RDs7RUFFQTtJQUNFLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1taXNzZWRiZzogI2UwZTBlMDtcXHJcXG4gIC0taGl0Ymc6IGxpZ2h0cGluaztcXHJcXG4gIC0tdmFsaWRiZzogYXF1YW1hcmluZTtcXHJcXG4gIC0tc2hpcGJnOiBkYXJrZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5bZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLFxcclxcbmEge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAjMDAwMDAwMjA7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jb250cixcXHJcXG4jZ2FtZW92ZXItY29udHIge1xcclxcbiAgcGFkZGluZzogMTRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuI2N1c3RvbWl6ZS1jb250ciBzcGFuLnZhbGlkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xcclxcbn1cXHJcXG4jY3VzdG9taXplLWN0cmwtY29udHIgPiBzcGFuLFxcclxcbiNnYW1lb3Zlci1jb250ciBidXR0b246aG92ZXIsXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyID4gc3BhbjphY3RpdmUsXFxyXFxuI2dhbWVvdmVyLWNvbnRyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNnYW1lb3Zlci1jb250ciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNnYW1lb3Zlci1jb250ciBoMiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250ciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdID4gZGl2IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyIC5zcXVhcmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAxIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwMyxcXHJcXG4jc2hpcDQge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwNSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwMSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwMiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwMyxcXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXA0IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gI3NoaXA1IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY29udHIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzNXB4KSAvIHJlcGVhdCgxMCwgMzVweCk7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY29udHIgLmJvYXJkLWNvbnRyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMjVweCkgLyByZXBlYXQoMTAsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWN0cmwtY29udHIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZXMge1xcclxcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlcy5zaGlwLXBvczpub3QoLmhpdCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZXMuaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZXMubWlzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZXMubWlzc2VkOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWUtY29udHIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBsYXllcnM6bGFzdC1jaGlsZCBzcGFuLnNxdWFyZXM6bm90KC5taXNzZWQpOm5vdCguaGl0KTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZhbGlkYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnMtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PTc1MHB4KSB7XFxyXFxuICAjY3VzdG9taXplLWNvbnRyIHtcXHJcXG4gICAgd2lkdGg6IDMxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NoaXBzLWNvbnRyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHVuc2V0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBsYXllcnM6Zmlyc3QtY2hpbGQgLmJvYXJkLWNvbnRyIHtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9hcmQtY29udHIge1xcclxcbiAgICBoZWlnaHQ6IDI4MHB4O1xcclxcbiAgICB3aWR0aDogMjgwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBsYXllcnM6Zmlyc3QtY2hpbGQgLnNxdWFyZXMubWlzc2VkOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJTdWIsIHsgZXZlbnRzIH0gZnJvbSBcIi4vcHVic3ViXCI7XHJcblxyXG5jbGFzcyBTaGlwIHtcclxuICBsZW5ndGg7XHJcbiAgaGl0cyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0cztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgYm9hcmQgPSBuZXcgTWFwKCk7XHJcbiAgc2hpcHMgPSBuZXcgU2V0KCk7XHJcbiAgbWlzc2VkQXR0YWNrcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoYWRkUmFuZG9tU2hpcHMgPSB0cnVlKSB7XHJcbiAgICB0aGlzLiNpbml0Qm9hcmQoKTtcclxuICAgIGlmIChhZGRSYW5kb21TaGlwcykgdGhpcy4jYWRkU2hpcHMoKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNoaXBPYmogb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICBpZiAoc2hpcE9iai5jb29yZHMuaGFzKHNxdWFyZSkpIHtcclxuICAgICAgICBzaGlwT2JqLmhpdENvb3Jkcy5hZGQoc3F1YXJlKTtcclxuICAgICAgICBzaGlwT2JqLnNoaXAuaGl0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MuYWRkKHNxdWFyZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRTcXVhcmUoc3F1YXJlKSB7XHJcbiAgICB0aGlzLmJvYXJkLnNldChzcXVhcmUsIHsgc3F1YXJlLCBhZGpTcXVhcmVzOiBuZXcgU2V0KCkgfSk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0U3F1YXJlKHNxdWFyZTEsIHNxdWFyZTIpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkLmhhcyhzcXVhcmUxKSAmJiB0aGlzLmJvYXJkLmhhcyhzcXVhcmUyKSkge1xyXG4gICAgICB0aGlzLmJvYXJkLmdldChzcXVhcmUxKS5hZGpTcXVhcmVzLmFkZCh0aGlzLmJvYXJkLmdldChzcXVhcmUyKSk7XHJcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTIpLmFkalNxdWFyZXMuYWRkKHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFkalNxdWFyZXMoc3F1YXJlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXQoc3F1YXJlKS5hZGpTcXVhcmVzO1xyXG4gIH1cclxuXHJcbiAgYXJlTmVpZ2hib29ycyhzcXVhcmUxLCBzcXVhcmUyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkuYWRqU3F1YXJlcy5oYXMoc3F1YXJlMik7XHJcbiAgfVxyXG5cclxuICBhcmVBbGxTdW5rKCkge1xyXG4gICAgaWYgKCF0aGlzLnNoaXBzLnNpemUpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLnNoaXBzXVxyXG4gICAgICAubWFwKChzaGlwT2JqKSA9PiBzaGlwT2JqLnNoaXAuaXNTdW5rKCkpXHJcbiAgICAgIC5ldmVyeSgodmFsKSA9PiB2YWwgPT09IHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZhaWxhYmxlU3F1YXJlcygpIHtcclxuICAgIGNvbnN0IGJvYXJkU3F1YXJlcyA9IFsuLi50aGlzLmJvYXJkLmtleXMoKV0sXHJcbiAgICAgIHNoaXBQb3NBdHRhY2tlZCA9IFsuLi50aGlzLnNoaXBzXS5mbGF0TWFwKChvYmopID0+IFsuLi5vYmouaGl0Q29vcmRzXSk7XHJcbiAgICBjb25zdCBzcXVhcmVTZXQgPSBib2FyZFNxdWFyZXMuZmlsdGVyKFxyXG4gICAgICAoc3F1YXJlKSA9PiAhKHRoaXMubWlzc2VkQXR0YWNrcy5oYXMoc3F1YXJlKSB8fCBzaGlwUG9zQXR0YWNrZWQuaW5jbHVkZXMoc3F1YXJlKSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIFsuLi5zcXVhcmVTZXRdO1xyXG4gIH1cclxuXHJcbiAgI2luaXRCb2FyZCgpIHtcclxuICAgIC8vIEFkZCBzcXVhcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTcXVhcmUoYCR7aX0sJHtqfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29ubmVjdCBzcXVhcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyclBvcyA9IGAke2l9LCR7an1gO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpIC0gMX0sJHtqfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpfSwke2ogKyAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiAtIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgKyAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpIC0gMX0sJHtqICsgMX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAjYWRkU2hpcHMoKSB7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDUpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg0KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMyksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgyKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICB9XHJcbiAgI2dldFJhbmRvbUJvb2woKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG4gICNhZGRTaGlwKHNoaXAsIGlzVmVydGljYWwgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5zaGlwcy5hZGQoe1xyXG4gICAgICBzaGlwLFxyXG4gICAgICBjb29yZHM6IHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCksXHJcbiAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXHJcbiAgICAgIGNvb3Jkc0xpc3QgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gY2hlY2sgaWYgJ3BvcycgaXMgdmFsaWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3h9LCR7eSArIGl9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYCR7eCArIGl9LCR7eX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRQb3MocG9zKSkge1xyXG4gICAgICAgICAgY29vcmRzTGlzdC5hZGQocG9zKTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4jY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb3Jkc0xpc3Q7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkUG9zKHBvcykge1xyXG4gICAgaWYgKCF0aGlzLmJvYXJkLmhhcyhwb3MpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IFsuLi50aGlzLnNoaXBzXS5mbGF0TWFwKChvYmopID0+IFsuLi5vYmouY29vcmRzXSk7XHJcbiAgICBpZiAobGlzdC5pbmNsdWRlcyhwb3MpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgYWRqUG9zID0gWy4uLnRoaXMuYm9hcmQuZ2V0KHBvcykuYWRqU3F1YXJlc10ubWFwKChvYmopID0+IG9iai5zcXVhcmUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYWRqUG9zLmluY2x1ZGVzKGxpc3RbaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgbmFtZTtcclxuICBnYW1lQm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaXNDb21wdXRlciA9IGlzQ29tcHV0ZXI7XHJcbiAgICBpZiAoaXNDb21wdXRlcikge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRTaGlwKGFyZWEpIHtcclxuICAgIGlmICh0aGlzLiNpc1ZhbGlkQXJlYShhcmVhKSkge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZC5zaGlwcy5hZGQoe1xyXG4gICAgICAgIHNoaXA6IG5ldyBTaGlwKGFyZWEubGVuZ3RoKSxcclxuICAgICAgICBjb29yZHM6IG5ldyBTZXQoYXJlYSksXHJcbiAgICAgICAgaGl0Q29vcmRzOiBuZXcgU2V0KCksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2lzVmFsaWRBcmVhKGFyZWEpIHtcclxuICAgIC8vIFZlcmlmeSB0aGF0IGFsbCBjb29yZGluYXRlcyBpbiBhcmVhIGFyZSBhZGphY2VudC4uLlxyXG4gICAgLy8gLi4uYW5kIG5vdCBkaWFnb25hbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcmVhW2kgKyAxXSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBhcmVhW2ldLnNwbGl0KFwiLFwiKSxcclxuICAgICAgICAgIG5leHRQb3MgPSBhcmVhW2kgKyAxXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIShcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMV1cclxuICAgICAgICAgICkgfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV1cclxuICAgICAgICApXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcmVhLmV2ZXJ5KHRoaXMuZ2FtZUJvYXJkLmlzVmFsaWRQb3MuYmluZCh0aGlzLmdhbWVCb2FyZCkpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tU3F1YXJlKGJvYXJkID0gbmV3IEdhbWVCb2FyZCgpKSB7XHJcbiAgICBsZXQgc3F1YXJlID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSwke01hdGguZmxvb3IoXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAxMFxyXG4gICAgKX1gO1xyXG4gICAgd2hpbGUgKGJvYXJkLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkgfHwgWy4uLmJvYXJkLnNoaXBzXS5mbGF0TWFwKHNoaXBPYmogPT4gWy4uLnNoaXBPYmouaGl0Q29vcmRzXSkuaW5jbHVkZXMoc3F1YXJlKSkge1xyXG4gICAgICBzcXVhcmUgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCl9LCR7TWF0aC5mbG9vcihcclxuICAgICAgICBNYXRoLnJhbmRvbSgpICogMTBcclxuICAgICAgKX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNxdWFyZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHBsYXkoYm9hcmQpIHtcclxuICAgIGlmICh0aGlzLmlzQ29tcHV0ZXIpIHtcclxuICAgICAgLy8gU2ltdWxhdGUgZGVsYXlcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHJlcyh0cnVlKTtcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yYW5kb21TcXVhcmUoYm9hcmQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZShldmVudHMudXNlclBsYXllZCwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoc3F1YXJlKSB7XHJcbiAgICAgICAgICByZXMoc3F1YXJlKTtcclxuICAgICAgICAgIHB1YlN1Yi51blN1YnNjcmliZShldmVudHMudXNlclBsYXllZCwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQXJlYXMoYXJlYXNMaXN0KSB7XHJcbiAgY29uc3QgcCA9IG5ldyBQbGF5ZXIoXCJcIiwgZmFsc2UpO1xyXG4gIHRyeSB7XHJcbiAgICBhcmVhc0xpc3QuZm9yRWFjaCgoYXJlYSkgPT4ge1xyXG4gICAgICBpZiAoIXAuYWRkU2hpcChhcmVhKSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIsIHZhbGlkYXRlQXJlYXMgfTtcclxuIiwiaW1wb3J0IHB1YlN1YiwgeyBldmVudHMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcclxuaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkLCB2YWxpZGF0ZUFyZWFzIH0gZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xyXG5cclxuY29uc3QgY3VzdG9taXppbmdNb2RhbCA9ICgoKSA9PiB7XHJcbiAgbGV0IF9kcmFnZ2luZ0xlbmd0aCxcclxuICAgIF9pc1ZlcnRpY2FsID0gZmFsc2UsXHJcbiAgICBfY3VyclNoaXBBcmVhID0gW10sXHJcbiAgICBfc2hpcEFyZWFzID0gW10sXHJcbiAgICBfYm9hcmQgPSBuZXcgR2FtZUJvYXJkKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaXNPcmllbnRhdGlvblZlcnRpY2FsKCkge1xyXG4gICAgcmV0dXJuIF9pc1ZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoT3JpZW50YXRpb24oKSB7XHJcbiAgICBfaXNWZXJ0aWNhbCA9ICFfaXNWZXJ0aWNhbDtcclxuICAgIGRvbS5zaGlwc0NvbnRyLnNldEF0dHJpYnV0ZShcImRhdGEtaXN2ZXJ0aWNhbFwiLCBfaXNWZXJ0aWNhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREcmFnZ2luZ0xlbmd0aChsZW5ndGgpIHtcclxuICAgIF9kcmFnZ2luZ0xlbmd0aCA9IGxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGVhckJvYXJkKCkge1xyXG4gICAgZG9tLmRpYWxvZ0JvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaChcclxuICAgICAgKGNoaWxkKSA9PiAoY2hpbGQuY2xhc3NOYW1lID0gXCJzcXVhcmVzXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmRWYWxpZGl0eSgpIHtcclxuICAgIGNvbnN0IHZhbGlkaXR5U3F1YXJlcyA9IGRvbS5kaWFsb2dCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcInNwYW4udmFsaWQsIHNwYW4uaW52YWxpZFwiXHJcbiAgICApO1xyXG4gICAgdmFsaWRpdHlTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJldmVhbFNxdWFyZXNWYWxpZGl0eShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkgcmV0dXJuO1xyXG4gICAgX2NsZWFyQm9hcmRWYWxpZGl0eSgpO1xyXG5cclxuICAgIGNvbnN0IGFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBhbHRBcmVhc0xpc3QgPSBbXSxcclxuICAgICAgc3F1YXJlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZHJhZ2dpbmdMZW5ndGg7IGkrKykge1xyXG4gICAgICBfaXNWZXJ0aWNhbFxyXG4gICAgICAgID8gYXJlYXNMaXN0LnB1c2goYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgKyBpfWApXHJcbiAgICAgICAgOiBhcmVhc0xpc3QucHVzaChgJHtwYXJzZUludChzcXVhcmVbMF0pICsgaX0sJHtzcXVhcmVbMl19YCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhbHRBcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSAtIGl9YClcclxuICAgICAgICA6IGFsdEFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgLSBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsaWRhdGVBcmVhcyhbLi4uX3NoaXBBcmVhcywgYXJlYXNMaXN0XSkpIHtcclxuICAgICAgYXJlYXNMaXN0LmZvckVhY2goKHBvcykgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtwb3N9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKVxyXG4gICAgICApO1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gYXJlYXNMaXN0O1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhbHRBcmVhc0xpc3RdKSkge1xyXG4gICAgICBhbHRBcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhbHRBcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcm9wU2hpcChlKSB7XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgaWYgKF9jdXJyU2hpcEFyZWEubGVuZ3RoICYmIF9zaGlwQXJlYXMubGVuZ3RoIDwgNSkge1xyXG4gICAgICBlLnRhcmdldC5yZW1vdmUoKTtcclxuICAgICAgX3NoaXBBcmVhcy5wdXNoKF9jdXJyU2hpcEFyZWEpO1xyXG4gICAgICBfY3VyclNoaXBBcmVhID0gW107XHJcbiAgICAgIF91cGRhdGVCb2FyZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplQm9hcmQoKSB7XHJcbiAgICBkb20uc2hpcHNDb250ci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgX2JvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgX3NoaXBBcmVhcyA9IFsuLi5fYm9hcmQuc2hpcHNdLm1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouY29vcmRzXSk7XHJcbiAgICBfdXBkYXRlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZCgpIHtcclxuICAgIF9jbGVhckJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzXHJcbiAgICAgIC5mbGF0TWFwKChhcnIpID0+IGFycilcclxuICAgICAgLmZvckVhY2goKHNxdWFyZSkgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBvc1wiKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhpdE1vZGFsKCkge1xyXG4gICAgaWYgKF9zaGlwQXJlYXMubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgIGRvbS5jdXN0b21pemluZ0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMucGxheWVyQm9hcmRDdXN0b21pemVkLCBfc2hpcEFyZWFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXREcmFnZ2luZ0xlbmd0aCxcclxuICAgIHN3aXRjaE9yaWVudGF0aW9uLFxyXG4gICAgaXNPcmllbnRhdGlvblZlcnRpY2FsLFxyXG4gICAgcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5LFxyXG4gICAgZHJvcFNoaXAsXHJcbiAgICByYW5kb21pemVCb2FyZCxcclxuICAgIGV4aXRNb2RhbCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZ2FtZU92ZXJNb2RhbCA9ICgoKSA9PiB7XHJcbiAgZnVuY3Rpb24gc2hvd1N0YXR1cyh0eHQpIHtcclxuICAgIGRvbS5nYW1lT3ZlclR4dC50ZXh0Q29udGVudCA9IHR4dDtcclxuICAgIGRvbS5nYW1lT3ZlckRpYWxvZy5zaG93TW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgZG9tLmdhbWVPdmVyRGlhbG9nLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzaG93U3RhdHVzLCBjbG9zZSB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZ2FtZUJvYXJkcyA9ICgoKSA9PiB7XHJcbiAgZnVuY3Rpb24gaW5pdEJvYXJkcygpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmluaXRCb2FyZCwgX3VwZGF0ZUJvYXJkcyk7XHJcbiAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5ib2FyZHNDaGFuZ2VkLCBfdXBkYXRlQm9hcmRzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZHMoeyBib2FyZDEsIGJvYXJkMiB9KSB7XHJcbiAgICBib2FyZDEubWlzc2VkQXR0YWNrcy5mb3JFYWNoKFxyXG4gICAgICBfZ2V0SXRlcmF0b3JDYWxsYmFjayhcIm1pc3NlZFwiLCBkb20ucGxheWVyQm9hcmQxKVxyXG4gICAgKTtcclxuICAgIFsuLi5ib2FyZDEuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5jb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcInNoaXAtcG9zXCIsIGRvbS5wbGF5ZXJCb2FyZDEpKTtcclxuICAgIFsuLi5ib2FyZDEuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5oaXRDb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcImhpdFwiLCBkb20ucGxheWVyQm9hcmQxKSk7XHJcblxyXG4gICAgYm9hcmQyLm1pc3NlZEF0dGFja3MuZm9yRWFjaChcclxuICAgICAgX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJtaXNzZWRcIiwgZG9tLnBsYXllckJvYXJkMilcclxuICAgICk7XHJcbiAgICBbLi4uYm9hcmQyLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouaGl0Q29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJoaXRcIiwgZG9tLnBsYXllckJvYXJkMikpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGJhY2sgZ2VuZXJhdG9yXHJcbiAgZnVuY3Rpb24gX2dldEl0ZXJhdG9yQ2FsbGJhY2soY2xhc3NOYW1lLCBib2FyZCkge1xyXG4gICAgcmV0dXJuIChzcXVhcmUpID0+XHJcbiAgICAgIGJvYXJkXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbml0Qm9hcmRzIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBpbml0UGFnZSgpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmdhbWVPdmVyLCAod2lubmVyKSA9PlxyXG4gICAgICBnYW1lT3Zlck1vZGFsLnNob3dTdGF0dXMoXHJcbiAgICAgICAgd2lubmVyLmlzQ29tcHV0ZXJcclxuICAgICAgICAgID8gXCJZb3UgTG9vc2UhIFRyeSBBZ2Fpbi5cIlxyXG4gICAgICAgICAgOiBcIkNvbmdyYXR1bGF0aW9ucyEgWW91IFdpbi5cIlxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIF9jbGVhckJvYXJkcyhkb20uZGlhbG9nQm9hcmQsIGRvbS5wbGF5ZXJCb2FyZDEsIGRvbS5wbGF5ZXJCb2FyZDIpO1xyXG5cclxuICAgIC8vIERyYXcgYm9hcmRzXHJcbiAgICBjb25zdCBib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgeCA9IDk7IHggPj0gMDsgeC0tKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICBmb3IgKGxldCB5ID0gOTsgeSA+PSAwOyB5LS0pIHtcclxuICAgICAgICBhcnIucHVzaChgJHt5fSwke3h9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYm9hcmQucHVzaCguLi5hcnIucmV2ZXJzZSgpKTtcclxuICAgIH1cclxuICAgIGJvYXJkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIiwgc3F1YXJlKTtcclxuICAgICAgbm9kZS5jbGFzc05hbWUgPSBcInNxdWFyZXNcIjtcclxuXHJcbiAgICAgIGRvbS5kaWFsb2dCb2FyZC5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSgpKTtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMS5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSgpKTtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMi5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5jdXN0b21pemluZ0RpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIGdhbWVCb2FyZHMuaW5pdEJvYXJkcygpO1xyXG4gICAgX2FkZEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmRzKC4uLmJvYXJkcykge1xyXG4gICAgYm9hcmRzLmZvckVhY2goKGIpID0+IChiLmlubmVySFRNTCA9IG51bGwpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9hZGRFdmVudHMoKSB7XHJcbiAgICBkb20uc2hpcHNDb250ci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PlxyXG4gICAgICBjdXN0b21pemluZ01vZGFsLnNldERyYWdnaW5nTGVuZ3RoKGUudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aClcclxuICAgICk7XHJcbiAgICBkb20uZGlhbG9nQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJkcmFnb3ZlclwiLFxyXG4gICAgICBjdXN0b21pemluZ01vZGFsLnJldmVhbFNxdWFyZXNWYWxpZGl0eVxyXG4gICAgKTtcclxuICAgIGRvbS5zaGlwc0NvbnRyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGN1c3RvbWl6aW5nTW9kYWwuZHJvcFNoaXApO1xyXG5cclxuICAgIGRvbS5jdXN0b21pemVCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIpKSB7XHJcbiAgICAgICAgY2FzZSBcInJvdGF0ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWl6aW5nTW9kYWwuc3dpdGNoT3JpZW50YXRpb24oKTtcclxuICAgICAgICBjYXNlIFwicmFuZG9tXCI6XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9taXppbmdNb2RhbC5yYW5kb21pemVCb2FyZCgpO1xyXG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbWl6aW5nTW9kYWwuZXhpdE1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZU92ZXJNb2RhbC5jbG9zZSk7XHJcbiAgICBkb20ucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xyXG5cclxuICAgIGRvbS5wbGF5ZXJCb2FyZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlLWluZGV4XCIpO1xyXG4gICAgICBpZiAoc3F1YXJlICYmIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzcXVhcmVzXCIpXHJcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLnVzZXJQbGF5ZWQsIHNxdWFyZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyaXRlTWVzc2FnZShtc2csIGRlbGF5ID0gbnVsbCkge1xyXG4gICAgZG9tLm1zZy50ZXh0Q29udGVudCA9IG1zZztcclxuICAgIGlmIChkZWxheSAhPT0gbnVsbCkgc2V0VGltZW91dChfcmVtb3ZlTWVzc2FnZSwgZGVsYXkgKiAxMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9yZW1vdmVNZXNzYWdlKCkge1xyXG4gICAgZG9tLm1zZy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbml0UGFnZSwgd3JpdGVNZXNzYWdlIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xyXG4iLCJjb25zdCBkb20gPSB7XHJcbiAgY3VzdG9taXppbmdEaWFsb2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY3VzdG9taXppbmdEaWFsb2dcIl0nKSxcclxuICBnYW1lT3ZlckRpYWxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJnYW1lT3ZlckRpYWxvZ1wiXScpLFxyXG4gIGdhbWVPdmVyVHh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImdhbWVPdmVyVHh0XCJdJyksXHJcbiAgcmVzdGFydEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJyZXN0YXJ0QnRuXCJdJyksXHJcbiAgY2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY2xvc2VCdG5cIl0nKSxcclxuICBkaWFsb2dCb2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJkaWFsb2dCb2FyZFwiXScpLFxyXG4gIHNoaXBzQ29udHI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwic2hpcHNDb250clwiXScpLFxyXG4gIGN1c3RvbWl6ZUJ0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY3VzdG9taXplQnRuc1wiXScpLFxyXG4gIG1zZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJtc2dcIl0nKSxcclxuICBwbGF5ZXJCb2FyZDE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwicGxheWVyQm9hcmQxXCJdJyksXHJcbiAgcGxheWVyQm9hcmQyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInBsYXllckJvYXJkMlwiXScpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tO1xyXG4iLCJjb25zdCBwdWJTdWIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBldmVudHMgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgZXZlbnRzW2V2ZW50XSA/IGV2ZW50c1tldmVudF0ucHVzaChmbikgOiAoZXZlbnRzW2V2ZW50XSA9IFtmbl0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiB1blN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgIGlmIChldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgIGV2ZW50c1tldmVudF0gPSBldmVudHNbZXZlbnRdLmZpbHRlcigoZnVuYykgPT4gZnVuYyAhPT0gZm4pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XHJcbiAgICBpZiAoZXZlbnRzW2V2ZW50XSkgZXZlbnRzW2V2ZW50XS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3Vic2NyaWJlLCB1blN1YnNjcmliZSwgcHVibGlzaCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcclxuICBwbGF5ZXJCb2FyZEN1c3RvbWl6ZWQ6IFwicGxheWVyQm9hcmRDdXN0b21pemVkXCIsXHJcbiAgaW5pdEJvYXJkOiBcImluaXRCb2FyZFwiLFxyXG4gIGdhbWVPdmVyOiBcImdhbWVPdmVyXCIsXHJcbiAgdXNlcnNUdXJuOiBcInVzZXJzVHVyblwiLFxyXG4gIHVzZXJQbGF5ZWQ6IFwidXNlclBsYXllZFwiLFxyXG4gIGJvYXJkc0NoYW5nZWQ6IFwiYm9hcmRzQ2hhbmdlZFwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwdWJTdWI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwdWJTdWIsIHsgZXZlbnRzIH0gZnJvbSBcIi4vbW9kdWxlcy9wdWJzdWJcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kdWxlcy9iYXR0bGVzaGlwXCI7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheVwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS5jc3NcIjtcclxuXHJcbigoKSA9PiB7XHJcbiAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKFwiXCIpLFxyXG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJcIiwgdHJ1ZSk7XHJcblxyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLnBsYXllckJvYXJkQ3VzdG9taXplZCwgc2V0UGxheWVyKTtcclxuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5pbml0Qm9hcmQsIHN0YXJ0R2FtZUxvb3ApO1xyXG4gIGRpc3BsYXkuaW5pdFBhZ2UoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWVyKGFyZWFzTGlzdCkge1xyXG4gICAgYXJlYXNMaXN0LmZvckVhY2gocGxheWVyMS5hZGRTaGlwLmJpbmQocGxheWVyMSkpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLmluaXRCb2FyZCwge1xyXG4gICAgICBib2FyZDE6IHBsYXllcjEuZ2FtZUJvYXJkLFxyXG4gICAgICBib2FyZDI6IHBsYXllcjIuZ2FtZUJvYXJkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1dpbihwMSA9IHBsYXllcjEsIHAyID0gcGxheWVyMikge1xyXG4gICAgaWYgKHAxLmdhbWVCb2FyZC5hcmVBbGxTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuIHAyO1xyXG4gICAgfSBlbHNlIGlmIChwMi5nYW1lQm9hcmQuYXJlQWxsU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBwMTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lTG9vcCgpIHtcclxuICAgIGNvbnN0IHR1cm5zUXVldWUgPSBbcGxheWVyMSwgcGxheWVyMl07XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBjb25zdCBwbGF5ZXIgPSB0dXJuc1F1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgZW5lbXkgPSB0dXJuc1F1ZXVlWzBdO1xyXG5cclxuICAgICAgZGlzcGxheS53cml0ZU1lc3NhZ2UocGxheWVyLmlzQ29tcHV0ZXIgPyBcIkNvbXB1dGVyJ3MgVHVyblwiIDogXCJZb3VyIFR1cm5cIilcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHBvcyA9IGF3YWl0IHBsYXllci5wbGF5KGVuZW15LmdhbWVCb2FyZCksXHJcbiAgICAgIGF0dGFja2VkU2hpcCA9IGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHBvcyk7XHJcbiAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5ib2FyZHNDaGFuZ2VkLCB7IGJvYXJkMTogcGxheWVyMS5nYW1lQm9hcmQsIGJvYXJkMjogcGxheWVyMi5nYW1lQm9hcmQgfSk7XHJcblxyXG4gICAgICBjb25zdCB3aW5uZXIgPSBjaGVja1dpbigpO1xyXG4gICAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goZXZlbnRzLmdhbWVPdmVyLCB3aW5uZXIpXHJcbiAgICAgICAgZGlzcGxheS53cml0ZU1lc3NhZ2Uod2lubmVyLmlzQ29tcHV0ZXIgPyBcIllvdSBMb29zZSFcIiA6IFwiWW91IFdpbiFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChhdHRhY2tlZFNoaXApIHtcclxuICAgICAgICAgIC8vIFBsYXkgYWdhaW5cclxuICAgICAgICAgIHR1cm5zUXVldWUucG9wKCk7XHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnB1c2gocGxheWVyLCBlbmVteSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHR1cm5zUXVldWUucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9