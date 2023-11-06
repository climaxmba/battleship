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

#customize-contr {
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

#customize-contr span.valid {
  background-color: var(--validbg);
}

#customize-ctrl-contr > span {
  padding: 5px;
  background: black;
  color: white;
  border-radius: 5px;
}

#customize-ctrl-contr > span:active {
  background-color: white;
  color: black;
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
`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kDAAkD;AACpD;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;IACI,gCAAgC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,gDAAgD;EAClD;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,2DAA2D;EAC7D;;EAEA;IACE,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,UAAU;IACV,kBAAkB;EACpB;AACF","sourcesContent":[":root {\r\n  --missedbg: #e0e0e0;\r\n  --hitbg: lightpink;\r\n  --validbg: aquamarine;\r\n  --shipbg: darkgrey;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n  cursor: move;\r\n}\r\n\r\n.clickable,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 0;\r\n}\r\n\r\n#header {\r\n  padding: 1rem;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n#msg {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 0.5rem;\r\n}\r\n\r\ndialog {\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\n#customize {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#customize-contr {\r\n  padding: 14px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#customize-contr span.valid {\r\n  background-color: var(--validbg);\r\n}\r\n\r\n#customize-ctrl-contr > span {\r\n  padding: 5px;\r\n  background: black;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n\r\n#customize-ctrl-contr > span:active {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#ships-contr {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] {\r\n  flex-direction: row;\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] > div {\r\n  grid-template-columns: 25px;\r\n}\r\n\r\n#ships-contr .squares {\r\n  background-color: lightgrey;\r\n}\r\n\r\n#ships-contr > div {\r\n  display: grid;\r\n  grid-template-rows: 25px;\r\n  border: 1px solid;\r\n}\r\n\r\n#ship1 {\r\n  grid-template-columns: repeat(5, 25px);\r\n}\r\n\r\n#ship2 {\r\n  grid-template-columns: repeat(4, 25px);\r\n}\r\n\r\n#ship3,\r\n#ship4 {\r\n  grid-template-columns: repeat(3, 25px);\r\n}\r\n\r\n#ship5 {\r\n  grid-template-columns: repeat(2, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship1 {\r\n  grid-template-rows: repeat(5, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship2 {\r\n  grid-template-rows: repeat(4, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship3,\r\n#ships-contr[data-isvertical=\"true\"] #ship4 {\r\n  grid-template-rows: repeat(3, 25px);\r\n}\r\n\r\n#ships-contr[data-isvertical=\"true\"] #ship5 {\r\n  grid-template-rows: repeat(2, 25px);\r\n}\r\n\r\n.board-contr {\r\n  display: grid;\r\n  border: 1px solid;\r\n  grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n\r\n#customize-contr .board-contr {\r\n  grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.squares {\r\n  border: 0.5px solid grey;\r\n  position: relative;\r\n}\r\n\r\n.squares.ship-pos:not(.hit) {\r\n  background-color: var(--shipbg);\r\n}\r\n\r\n.squares.hit {\r\n  background-color: var(--hitbg);\r\n}\r\n\r\n.squares.missed {\r\n  background-color: var(--missedbg);\r\n}\r\n\r\n.squares.missed::after {\r\n  content: \"\";\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50%;\r\n}\r\n\r\n#game-contr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.players:last-child span.squares:not(.missed):not(.hit):hover {\r\n    background-color: var(--validbg);\r\n}\r\n\r\n.players {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.players-name {\r\n  font-size: large;\r\n}\r\n\r\nfooter {\r\n  margin-top: 95vh;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  background-color: black;\r\n  color: white;\r\n  align-self: stretch;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nfooter a {\r\n  color: lightgray;\r\n}\r\n\r\n@media (width <=750px) {\r\n  #customize-contr {\r\n    width: 312px;\r\n  }\r\n\r\n  #ships-contr {\r\n    flex-direction: unset;\r\n  }\r\n\r\n  .players:first-child .board-contr {\r\n    height: 220px;\r\n    width: 220px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  }\r\n\r\n  .board-contr {\r\n    height: 280px;\r\n    width: 280px;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr) !important;\r\n  }\r\n\r\n  .players:first-child .squares.missed::after {\r\n    content: \"\";\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    height: 3px;\r\n    width: 3px;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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




const modal = (() => {
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
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialog.close();
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

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialog.showModal();
    gameBoards.initBoards();
    _addEvents();
  }

  function _clearBoards(...boards) {
    boards.forEach((b) => (b.innerHTML = null));
  }

  function _addEvents() {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].shipsContr.addEventListener("dragstart", (e) =>
      modal.setDraggingLength(e.target.children.length)
    );
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].dialogBoard.addEventListener(
      "dragover",
      modal.revealSquaresValidity
    );

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].shipsContr.addEventListener("dragend", modal.dropShip);

    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].customizeBtns.addEventListener("click", (e) => {
      switch (e.target.getAttribute("data-action")) {
        case "rotate":
          return modal.switchOrientation();
        case "random":
          return modal.randomizeBoard();
        case "start":
          return modal.exitModal();
      }
    });

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
  dialog: document.querySelector('[data-js-id="dialog"]'),
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
        _modules_display__WEBPACK_IMPORTED_MODULE_2__["default"].writeMessage(winner.isComputer ? "You Loose!" : "You Won!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBTSxTQUFTLG1EQUFNLGtCQUFrQixzREFBc0Q7QUFDbkc7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBTSxTQUFTLG1EQUFNO0FBQzdCLFFBQVEsd0RBQU87QUFDZjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tbWlzc2VkYmc6ICNlMGUwZTA7XHJcbiAgLS1oaXRiZzogbGlnaHRwaW5rO1xyXG4gIC0tdmFsaWRiZzogYXF1YW1hcmluZTtcclxuICAtLXNoaXBiZzogZGFya2dyZXk7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbltkcmFnZ2FibGU9XCJ0cnVlXCJdOmhvdmVyIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5jbGlja2FibGUsXHJcbmEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbiNtc2cge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDAwMDIwO1xyXG59XHJcblxyXG4jY3VzdG9taXplIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2N1c3RvbWl6ZS1jb250ciB7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIgc3Bhbi52YWxpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW4ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jY3VzdG9taXplLWN0cmwtY29udHIgPiBzcGFuOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gPiBkaXYge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweDtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyIC5zcXVhcmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciA+IGRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbiNzaGlwMSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwMiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjVweCk7XHJcbn1cclxuXHJcbiNzaGlwMyxcclxuI3NoaXA0IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXA1IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXAxIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXAyIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyNXB4KTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cInRydWVcIl0gI3NoaXAzLFxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDQge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDI1cHgpO1xyXG59XHJcblxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSAjc2hpcDUge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDI1cHgpO1xyXG59XHJcblxyXG4uYm9hcmQtY29udHIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzNXB4KSAvIHJlcGVhdCgxMCwgMzVweCk7XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIgLmJvYXJkLWNvbnRyIHtcclxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDI1cHgpIC8gcmVwZWF0KDEwLCAyNXB4KTtcclxufVxyXG5cclxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uc3F1YXJlcyB7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNxdWFyZXMuc2hpcC1wb3M6bm90KC5oaXQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwYmcpO1xyXG59XHJcblxyXG4uc3F1YXJlcy5oaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdGJnKTtcclxufVxyXG5cclxuLnNxdWFyZXMubWlzc2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWRiZyk7XHJcbn1cclxuXHJcbi5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuI2dhbWUtY29udHIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMnJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XHJcbn1cclxuXHJcbi5wbGF5ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllcnMtbmFtZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA5NXZoO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoIDw9NzUwcHgpIHtcclxuICAjY3VzdG9taXplLWNvbnRyIHtcclxuICAgIHdpZHRoOiAzMTJweDtcclxuICB9XHJcblxyXG4gICNzaGlwcy1jb250ciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuYm9hcmQtY29udHIge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcclxuICB9XHJcblxyXG4gIC5ib2FyZC1jb250ciB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucGxheWVyczpmaXJzdC1jaGlsZCAuc3F1YXJlcy5taXNzZWQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDJEQUEyRDtFQUM3RDs7RUFFQTtJQUNFLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1taXNzZWRiZzogI2UwZTBlMDtcXHJcXG4gIC0taGl0Ymc6IGxpZ2h0cGluaztcXHJcXG4gIC0tdmFsaWRiZzogYXF1YW1hcmluZTtcXHJcXG4gIC0tc2hpcGJnOiBkYXJrZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5bZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLFxcclxcbmEge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAjMDAwMDAwMjA7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jb250ciB7XFxyXFxuICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyIHNwYW4udmFsaWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmFsaWRiZyk7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW4ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY3RybC1jb250ciA+IHNwYW46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSA+IGRpdiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250ciAuc3F1YXJlcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250ciA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbiNzaGlwMSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDMsXFxyXFxuI3NoaXA0IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcDUge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDEge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XFxcInRydWVcXFwiXSAjc2hpcDMsXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwNCB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdICNzaGlwNSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplLWNvbnRyIC5ib2FyZC1jb250ciB7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDI1cHgpIC8gcmVwZWF0KDEwLCAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jdHJsLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzIHtcXHJcXG4gIGJvcmRlcjogMC41cHggc29saWQgZ3JleTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZXMuc2hpcC1wb3M6bm90KC5oaXQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBiZyk7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXRiZyk7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzLm1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWRiZyk7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWNvbnRyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5wbGF5ZXJzOmxhc3QtY2hpbGQgc3Bhbi5zcXVhcmVzOm5vdCgubWlzc2VkKTpub3QoLmhpdCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12YWxpZGJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJzLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDk1dmg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD03NTBweCkge1xcclxcbiAgI2N1c3RvbWl6ZS1jb250ciB7XFxyXFxuICAgIHdpZHRoOiAzMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaGlwcy1jb250ciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5ib2FyZC1jb250ciB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvYXJkLWNvbnRyIHtcXHJcXG4gICAgaGVpZ2h0OiAyODBweDtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcikgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wbGF5ZXJzOmZpcnN0LWNoaWxkIC5zcXVhcmVzLm1pc3NlZDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICB3aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL3B1YnN1YlwiO1xyXG5cclxuY2xhc3MgU2hpcCB7XHJcbiAgbGVuZ3RoO1xyXG4gIGhpdHMgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzKys7XHJcbiAgfVxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA8PSB0aGlzLmhpdHM7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lQm9hcmQge1xyXG4gIGJvYXJkID0gbmV3IE1hcCgpO1xyXG4gIHNoaXBzID0gbmV3IFNldCgpO1xyXG4gIG1pc3NlZEF0dGFja3MgPSBuZXcgU2V0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFkZFJhbmRvbVNoaXBzID0gdHJ1ZSkge1xyXG4gICAgdGhpcy4jaW5pdEJvYXJkKCk7XHJcbiAgICBpZiAoYWRkUmFuZG9tU2hpcHMpIHRoaXMuI2FkZFNoaXBzKCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKHNxdWFyZSkge1xyXG4gICAgZm9yIChjb25zdCBzaGlwT2JqIG9mIHRoaXMuc2hpcHMpIHtcclxuICAgICAgaWYgKHNoaXBPYmouY29vcmRzLmhhcyhzcXVhcmUpKSB7XHJcbiAgICAgICAgc2hpcE9iai5oaXRDb29yZHMuYWRkKHNxdWFyZSk7XHJcbiAgICAgICAgc2hpcE9iai5zaGlwLmhpdCgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLmFkZChzcXVhcmUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkU3F1YXJlKHNxdWFyZSkge1xyXG4gICAgdGhpcy5ib2FyZC5zZXQoc3F1YXJlLCB7IHNxdWFyZSwgYWRqU3F1YXJlczogbmV3IFNldCgpIH0pO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdFNxdWFyZShzcXVhcmUxLCBzcXVhcmUyKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZC5oYXMoc3F1YXJlMSkgJiYgdGhpcy5ib2FyZC5oYXMoc3F1YXJlMikpIHtcclxuICAgICAgdGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkuYWRqU3F1YXJlcy5hZGQodGhpcy5ib2FyZC5nZXQoc3F1YXJlMikpO1xyXG4gICAgICB0aGlzLmJvYXJkLmdldChzcXVhcmUyKS5hZGpTcXVhcmVzLmFkZCh0aGlzLmJvYXJkLmdldChzcXVhcmUxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBZGpTcXVhcmVzKHNxdWFyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZSkuYWRqU3F1YXJlcztcclxuICB9XHJcblxyXG4gIGFyZU5laWdoYm9vcnMoc3F1YXJlMSwgc3F1YXJlMikge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpLmFkalNxdWFyZXMuaGFzKHNxdWFyZTIpO1xyXG4gIH1cclxuXHJcbiAgYXJlQWxsU3VuaygpIHtcclxuICAgIGlmICghdGhpcy5zaGlwcy5zaXplKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBbLi4udGhpcy5zaGlwc11cclxuICAgICAgLm1hcCgoc2hpcE9iaikgPT4gc2hpcE9iai5zaGlwLmlzU3VuaygpKVxyXG4gICAgICAuZXZlcnkoKHZhbCkgPT4gdmFsID09PSB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZVNxdWFyZXMoKSB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBbLi4udGhpcy5ib2FyZC5rZXlzKCldLFxyXG4gICAgICBzaGlwUG9zQXR0YWNrZWQgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmhpdENvb3Jkc10pO1xyXG4gICAgY29uc3Qgc3F1YXJlU2V0ID0gYm9hcmRTcXVhcmVzLmZpbHRlcihcclxuICAgICAgKHNxdWFyZSkgPT4gISh0aGlzLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkgfHwgc2hpcFBvc0F0dGFja2VkLmluY2x1ZGVzKHNxdWFyZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBbLi4uc3F1YXJlU2V0XTtcclxuICB9XHJcblxyXG4gICNpbml0Qm9hcmQoKSB7XHJcbiAgICAvLyBBZGQgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIHRoaXMuYWRkU3F1YXJlKGAke2l9LCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbm5lY3Qgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBgJHtpfSwke2p9YDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgLSAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgI2FkZFNoaXBzKCkge1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg1KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoNCksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgzKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMiksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgfVxyXG4gICNnZXRSYW5kb21Cb29sKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuICAjYWRkU2hpcChzaGlwLCBpc1ZlcnRpY2FsID0gZmFsc2UpIHtcclxuICAgIHRoaXMuc2hpcHMuYWRkKHtcclxuICAgICAgc2hpcCxcclxuICAgICAgY29vcmRzOiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpLFxyXG4gICAgICBoaXRDb29yZHM6IG5ldyBTZXQoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuICAjY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICBjb29yZHNMaXN0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGNoZWNrIGlmICdwb3MnIGlzIHZhbGlkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBgJHt4fSwke3kgKyBpfWA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBvcyhwb3MpKSB7XHJcbiAgICAgICAgICBjb29yZHNMaXN0LmFkZChwb3MpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3ggKyBpfSwke3l9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb29yZHNMaXN0O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFBvcyhwb3MpIHtcclxuICAgIGlmICghdGhpcy5ib2FyZC5oYXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmNvb3Jkc10pO1xyXG4gICAgaWYgKGxpc3QuaW5jbHVkZXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGFkalBvcyA9IFsuLi50aGlzLmJvYXJkLmdldChwb3MpLmFkalNxdWFyZXNdLm1hcCgob2JqKSA9PiBvYmouc3F1YXJlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFkalBvcy5pbmNsdWRlcyhsaXN0W2ldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgZ2FtZUJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xyXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU2hpcChhcmVhKSB7XHJcbiAgICBpZiAodGhpcy4jaXNWYWxpZEFyZWEoYXJlYSkpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQuc2hpcHMuYWRkKHtcclxuICAgICAgICBzaGlwOiBuZXcgU2hpcChhcmVhLmxlbmd0aCksXHJcbiAgICAgICAgY29vcmRzOiBuZXcgU2V0KGFyZWEpLFxyXG4gICAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNpc1ZhbGlkQXJlYShhcmVhKSB7XHJcbiAgICAvLyBWZXJpZnkgdGhhdCBhbGwgY29vcmRpbmF0ZXMgaW4gYXJlYSBhcmUgYWRqYWNlbnQuLi5cclxuICAgIC8vIC4uLmFuZCBub3QgZGlhZ29uYWxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXJlYVtpICsgMV0pIHtcclxuICAgICAgICBjb25zdCBjdXJyUG9zID0gYXJlYVtpXS5zcGxpdChcIixcIiksXHJcbiAgICAgICAgICBuZXh0UG9zID0gYXJlYVtpICsgMV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICEoXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzFdXHJcbiAgICAgICAgICApIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJlYS5ldmVyeSh0aGlzLmdhbWVCb2FyZC5pc1ZhbGlkUG9zLmJpbmQodGhpcy5nYW1lQm9hcmQpKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbVNxdWFyZShib2FyZCA9IG5ldyBHYW1lQm9hcmQoKSkge1xyXG4gICAgbGV0IHNxdWFyZSA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKX0sJHtNYXRoLmZsb29yKFxyXG4gICAgICBNYXRoLnJhbmRvbSgpICogMTBcclxuICAgICl9YDtcclxuICAgIHdoaWxlIChib2FyZC5taXNzZWRBdHRhY2tzLmhhcyhzcXVhcmUpIHx8IFsuLi5ib2FyZC5zaGlwc10uZmxhdE1hcChzaGlwT2JqID0+IFsuLi5zaGlwT2JqLmhpdENvb3Jkc10pLmluY2x1ZGVzKHNxdWFyZSkpIHtcclxuICAgICAgc3F1YXJlID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSwke01hdGguZmxvb3IoXHJcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBzcXVhcmU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwbGF5KGJvYXJkKSB7XHJcbiAgICBpZiAodGhpcy5pc0NvbXB1dGVyKSB7XHJcbiAgICAgIC8vIFNpbXVsYXRlIGRlbGF5XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICByZXModHJ1ZSk7XHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmFuZG9tU3F1YXJlKGJvYXJkKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLnVzZXJQbGF5ZWQsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKHNxdWFyZSkge1xyXG4gICAgICAgICAgcmVzKHNxdWFyZSk7XHJcbiAgICAgICAgICBwdWJTdWIudW5TdWJzY3JpYmUoZXZlbnRzLnVzZXJQbGF5ZWQsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFyZWFzKGFyZWFzTGlzdCkge1xyXG4gIGNvbnN0IHAgPSBuZXcgUGxheWVyKFwiXCIsIGZhbHNlKTtcclxuICB0cnkge1xyXG4gICAgYXJlYXNMaXN0LmZvckVhY2goKGFyZWEpID0+IHtcclxuICAgICAgaWYgKCFwLmFkZFNoaXAoYXJlYSkpIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNoaXAsIEdhbWVCb2FyZCwgUGxheWVyLCB2YWxpZGF0ZUFyZWFzIH07XHJcbiIsImltcG9ydCBwdWJTdWIsIHsgZXZlbnRzIH0gZnJvbSBcIi4vcHVic3ViXCI7XHJcbmltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCwgdmFsaWRhdGVBcmVhcyB9IGZyb20gXCIuL2JhdHRsZXNoaXBcIjtcclxuXHJcbmNvbnN0IG1vZGFsID0gKCgpID0+IHtcclxuICBsZXQgX2RyYWdnaW5nTGVuZ3RoLFxyXG4gICAgX2lzVmVydGljYWwgPSBmYWxzZSxcclxuICAgIF9jdXJyU2hpcEFyZWEgPSBbXSxcclxuICAgIF9zaGlwQXJlYXMgPSBbXSxcclxuICAgIF9ib2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBpc09yaWVudGF0aW9uVmVydGljYWwoKSB7XHJcbiAgICByZXR1cm4gX2lzVmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hPcmllbnRhdGlvbigpIHtcclxuICAgIF9pc1ZlcnRpY2FsID0gIV9pc1ZlcnRpY2FsO1xyXG4gICAgZG9tLnNoaXBzQ29udHIuc2V0QXR0cmlidXRlKFwiZGF0YS1pc3ZlcnRpY2FsXCIsIF9pc1ZlcnRpY2FsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERyYWdnaW5nTGVuZ3RoKGxlbmd0aCkge1xyXG4gICAgX2RyYWdnaW5nTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmQoKSB7XHJcbiAgICBkb20uZGlhbG9nQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKFxyXG4gICAgICAoY2hpbGQpID0+IChjaGlsZC5jbGFzc05hbWUgPSBcInNxdWFyZXNcIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2xlYXJCb2FyZFZhbGlkaXR5KCkge1xyXG4gICAgY29uc3QgdmFsaWRpdHlTcXVhcmVzID0gZG9tLmRpYWxvZ0JvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwic3Bhbi52YWxpZCwgc3Bhbi5pbnZhbGlkXCJcclxuICAgICk7XHJcbiAgICB2YWxpZGl0eVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIik7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm47XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgY29uc3QgYXJlYXNMaXN0ID0gW10sXHJcbiAgICAgIGFsdEFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBzcXVhcmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZS1pbmRleFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSArIGl9YClcclxuICAgICAgICA6IGFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgKyBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2RyYWdnaW5nTGVuZ3RoOyBpKyspIHtcclxuICAgICAgX2lzVmVydGljYWxcclxuICAgICAgICA/IGFsdEFyZWFzTGlzdC5wdXNoKGAke3NxdWFyZVswXX0sJHtwYXJzZUludChzcXVhcmVbMl0pIC0gaX1gKVxyXG4gICAgICAgIDogYWx0QXJlYXNMaXN0LnB1c2goYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSAtIGl9LCR7c3F1YXJlWzJdfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhcmVhc0xpc3RdKSkge1xyXG4gICAgICBhcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlQXJlYXMoWy4uLl9zaGlwQXJlYXMsIGFsdEFyZWFzTGlzdF0pKSB7XHJcbiAgICAgIGFsdEFyZWFzTGlzdC5mb3JFYWNoKChwb3MpID0+XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9JyR7cG9zfSddYClcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIilcclxuICAgICAgKTtcclxuICAgICAgX2N1cnJTaGlwQXJlYSA9IGFsdEFyZWFzTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyb3BTaGlwKGUpIHtcclxuICAgIF9jbGVhckJvYXJkVmFsaWRpdHkoKTtcclxuXHJcbiAgICBpZiAoX2N1cnJTaGlwQXJlYS5sZW5ndGggJiYgX3NoaXBBcmVhcy5sZW5ndGggPCA1KSB7XHJcbiAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgICBfc2hpcEFyZWFzLnB1c2goX2N1cnJTaGlwQXJlYSk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgICAgX3VwZGF0ZUJvYXJkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByYW5kb21pemVCb2FyZCgpIHtcclxuICAgIGRvbS5zaGlwc0NvbnRyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBfYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzID0gWy4uLl9ib2FyZC5zaGlwc10ubWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5jb29yZHNdKTtcclxuICAgIF91cGRhdGVCb2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3VwZGF0ZUJvYXJkKCkge1xyXG4gICAgX2NsZWFyQm9hcmQoKTtcclxuICAgIF9zaGlwQXJlYXNcclxuICAgICAgLmZsYXRNYXAoKGFycikgPT4gYXJyKVxyXG4gICAgICAuZm9yRWFjaCgoc3F1YXJlKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3NxdWFyZX0nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXAtcG9zXCIpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleGl0TW9kYWwoKSB7XHJcbiAgICBpZiAoX3NoaXBBcmVhcy5sZW5ndGggPT09IDUpIHtcclxuICAgICAgZG9tLmRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMucGxheWVyQm9hcmRDdXN0b21pemVkLCBfc2hpcEFyZWFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXREcmFnZ2luZ0xlbmd0aCxcclxuICAgIHN3aXRjaE9yaWVudGF0aW9uLFxyXG4gICAgaXNPcmllbnRhdGlvblZlcnRpY2FsLFxyXG4gICAgcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5LFxyXG4gICAgZHJvcFNoaXAsXHJcbiAgICByYW5kb21pemVCb2FyZCxcclxuICAgIGV4aXRNb2RhbCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZ2FtZUJvYXJkcyA9ICgoKSA9PiB7XHJcbiAgZnVuY3Rpb24gaW5pdEJvYXJkcygpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLmluaXRCb2FyZCwgX3VwZGF0ZUJvYXJkcyk7XHJcbiAgICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5ib2FyZHNDaGFuZ2VkLCBfdXBkYXRlQm9hcmRzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZHMoeyBib2FyZDEsIGJvYXJkMiB9KSB7XHJcbiAgICBib2FyZDEubWlzc2VkQXR0YWNrcy5mb3JFYWNoKFxyXG4gICAgICBfZ2V0SXRlcmF0b3JDYWxsYmFjayhcIm1pc3NlZFwiLCBkb20ucGxheWVyQm9hcmQxKVxyXG4gICAgKTtcclxuICAgIFsuLi5ib2FyZDEuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5jb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcInNoaXAtcG9zXCIsIGRvbS5wbGF5ZXJCb2FyZDEpKTtcclxuICAgIFsuLi5ib2FyZDEuc2hpcHNdXHJcbiAgICAgIC5mbGF0TWFwKChzaGlwT2JqKSA9PiBbLi4uc2hpcE9iai5oaXRDb29yZHNdKVxyXG4gICAgICAuZm9yRWFjaChfZ2V0SXRlcmF0b3JDYWxsYmFjayhcImhpdFwiLCBkb20ucGxheWVyQm9hcmQxKSk7XHJcblxyXG4gICAgYm9hcmQyLm1pc3NlZEF0dGFja3MuZm9yRWFjaChcclxuICAgICAgX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJtaXNzZWRcIiwgZG9tLnBsYXllckJvYXJkMilcclxuICAgICk7XHJcbiAgICBbLi4uYm9hcmQyLnNoaXBzXVxyXG4gICAgICAuZmxhdE1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouaGl0Q29vcmRzXSlcclxuICAgICAgLmZvckVhY2goX2dldEl0ZXJhdG9yQ2FsbGJhY2soXCJoaXRcIiwgZG9tLnBsYXllckJvYXJkMikpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGJhY2sgZ2VuZXJhdG9yXHJcbiAgZnVuY3Rpb24gX2dldEl0ZXJhdG9yQ2FsbGJhY2soY2xhc3NOYW1lLCBib2FyZCkge1xyXG4gICAgcmV0dXJuIChzcXVhcmUpID0+XHJcbiAgICAgIGJvYXJkXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbml0Qm9hcmRzIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcclxuICBmdW5jdGlvbiBpbml0UGFnZSgpIHtcclxuICAgIF9jbGVhckJvYXJkcyhkb20uZGlhbG9nQm9hcmQsIGRvbS5wbGF5ZXJCb2FyZDEsIGRvbS5wbGF5ZXJCb2FyZDIpO1xyXG5cclxuICAgIC8vIERyYXcgYm9hcmRzXHJcbiAgICBjb25zdCBib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgeCA9IDk7IHggPj0gMDsgeC0tKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICBmb3IgKGxldCB5ID0gOTsgeSA+PSAwOyB5LS0pIHtcclxuICAgICAgICBhcnIucHVzaChgJHt5fSwke3h9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYm9hcmQucHVzaCguLi5hcnIucmV2ZXJzZSgpKTtcclxuICAgIH1cclxuICAgIGJvYXJkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIiwgc3F1YXJlKTtcclxuICAgICAgbm9kZS5jbGFzc05hbWUgPSBcInNxdWFyZXNcIjtcclxuXHJcbiAgICAgIGRvbS5kaWFsb2dCb2FyZC5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSgpKTtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMS5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSgpKTtcclxuICAgICAgZG9tLnBsYXllckJvYXJkMi5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5kaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBnYW1lQm9hcmRzLmluaXRCb2FyZHMoKTtcclxuICAgIF9hZGRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGVhckJvYXJkcyguLi5ib2FyZHMpIHtcclxuICAgIGJvYXJkcy5mb3JFYWNoKChiKSA9PiAoYi5pbm5lckhUTUwgPSBudWxsKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfYWRkRXZlbnRzKCkge1xyXG4gICAgZG9tLnNoaXBzQ29udHIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT5cclxuICAgICAgbW9kYWwuc2V0RHJhZ2dpbmdMZW5ndGgoZS50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgKTtcclxuICAgIGRvbS5kaWFsb2dCb2FyZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImRyYWdvdmVyXCIsXHJcbiAgICAgIG1vZGFsLnJldmVhbFNxdWFyZXNWYWxpZGl0eVxyXG4gICAgKTtcclxuXHJcbiAgICBkb20uc2hpcHNDb250ci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBtb2RhbC5kcm9wU2hpcCk7XHJcblxyXG4gICAgZG9tLmN1c3RvbWl6ZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIikpIHtcclxuICAgICAgICBjYXNlIFwicm90YXRlXCI6XHJcbiAgICAgICAgICByZXR1cm4gbW9kYWwuc3dpdGNoT3JpZW50YXRpb24oKTtcclxuICAgICAgICBjYXNlIFwicmFuZG9tXCI6XHJcbiAgICAgICAgICByZXR1cm4gbW9kYWwucmFuZG9taXplQm9hcmQoKTtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgIHJldHVybiBtb2RhbC5leGl0TW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tLnBsYXllckJvYXJkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcXVhcmUtaW5kZXhcIik7XHJcbiAgICAgIGlmIChzcXVhcmUgJiYgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNxdWFyZXNcIilcclxuICAgICAgICBwdWJTdWIucHVibGlzaChldmVudHMudXNlclBsYXllZCwgc3F1YXJlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd3JpdGVNZXNzYWdlKG1zZywgZGVsYXkgPSBudWxsKSB7XHJcbiAgICBkb20ubXNnLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSBzZXRUaW1lb3V0KF9yZW1vdmVNZXNzYWdlLCBkZWxheSAqIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3JlbW92ZU1lc3NhZ2UoKSB7XHJcbiAgICBkb20ubXNnLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGluaXRQYWdlLCB3cml0ZU1lc3NhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XHJcbiIsImNvbnN0IGRvbSA9IHtcclxuICBkaWFsb2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZGlhbG9nXCJdJyksXHJcbiAgZGlhbG9nQm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiZGlhbG9nQm9hcmRcIl0nKSxcclxuICBzaGlwc0NvbnRyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInNoaXBzQ29udHJcIl0nKSxcclxuICBjdXN0b21pemVCdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cImN1c3RvbWl6ZUJ0bnNcIl0nKSxcclxuICBtc2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwibXNnXCJdJyksXHJcbiAgcGxheWVyQm9hcmQxOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInBsYXllckJvYXJkMVwiXScpLFxyXG4gIHBsYXllckJvYXJkMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJwbGF5ZXJCb2FyZDJcIl0nKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTtcclxuIiwiY29uc3QgcHViU3ViID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZXZlbnRzID0ge307XHJcblxyXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgIGV2ZW50c1tldmVudF0gPyBldmVudHNbZXZlbnRdLnB1c2goZm4pIDogKGV2ZW50c1tldmVudF0gPSBbZm5dKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdW5TdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICBldmVudHNbZXZlbnRdID0gZXZlbnRzW2V2ZW50XS5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMgIT09IGZuKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSkge1xyXG4gICAgaWYgKGV2ZW50c1tldmVudF0pIGV2ZW50c1tldmVudF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHN1YnNjcmliZSwgdW5TdWJzY3JpYmUsIHB1Ymxpc2ggfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgcGxheWVyQm9hcmRDdXN0b21pemVkOiBcInBsYXllckJvYXJkQ3VzdG9taXplZFwiLFxyXG4gIGluaXRCb2FyZDogXCJpbml0Qm9hcmRcIixcclxuICBnYW1lT3ZlcjogXCJnYW1lT3ZlclwiLFxyXG4gIHVzZXJzVHVybjogXCJ1c2Vyc1R1cm5cIixcclxuICB1c2VyUGxheWVkOiBcInVzZXJQbGF5ZWRcIixcclxuICBib2FyZHNDaGFuZ2VkOiBcImJvYXJkc0NoYW5nZWRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHViU3ViLCB7IGV2ZW50cyB9IGZyb20gXCIuL21vZHVsZXMvcHVic3ViXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL21vZHVsZXMvYmF0dGxlc2hpcFwiO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGxldCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlwiKSxcclxuICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKFwiXCIsIHRydWUpO1xyXG5cclxuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5wbGF5ZXJCb2FyZEN1c3RvbWl6ZWQsIHNldFBsYXllcik7XHJcbiAgcHViU3ViLnN1YnNjcmliZShldmVudHMuaW5pdEJvYXJkLCBzdGFydEdhbWVMb29wKTtcclxuICBkaXNwbGF5LmluaXRQYWdlKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldFBsYXllcihhcmVhc0xpc3QpIHtcclxuICAgIGFyZWFzTGlzdC5mb3JFYWNoKHBsYXllcjEuYWRkU2hpcC5iaW5kKHBsYXllcjEpKTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5pbml0Qm9hcmQsIHtcclxuICAgICAgYm9hcmQxOiBwbGF5ZXIxLmdhbWVCb2FyZCxcclxuICAgICAgYm9hcmQyOiBwbGF5ZXIyLmdhbWVCb2FyZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tXaW4ocDEgPSBwbGF5ZXIxLCBwMiA9IHBsYXllcjIpIHtcclxuICAgIGlmIChwMS5nYW1lQm9hcmQuYXJlQWxsU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBwMjtcclxuICAgIH0gZWxzZSBpZiAocDIuZ2FtZUJvYXJkLmFyZUFsbFN1bmsoKSkge1xyXG4gICAgICByZXR1cm4gcDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICBjb25zdCB0dXJuc1F1ZXVlID0gW3BsYXllcjEsIHBsYXllcjJdO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgcGxheWVyID0gdHVybnNRdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGVuZW15ID0gdHVybnNRdWV1ZVswXTtcclxuXHJcbiAgICAgIGRpc3BsYXkud3JpdGVNZXNzYWdlKHBsYXllci5pc0NvbXB1dGVyID8gXCJDb21wdXRlcidzIFR1cm5cIiA6IFwiWW91ciBUdXJuXCIpXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwb3MgPSBhd2FpdCBwbGF5ZXIucGxheShlbmVteS5nYW1lQm9hcmQpLFxyXG4gICAgICBhdHRhY2tlZFNoaXAgPSBlbmVteS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3MpO1xyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMuYm9hcmRzQ2hhbmdlZCwgeyBib2FyZDE6IHBsYXllcjEuZ2FtZUJvYXJkLCBib2FyZDI6IHBsYXllcjIuZ2FtZUJvYXJkIH0pO1xyXG5cclxuICAgICAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW4oKTtcclxuICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKGV2ZW50cy5nYW1lT3Zlciwgd2lubmVyKVxyXG4gICAgICAgIGRpc3BsYXkud3JpdGVNZXNzYWdlKHdpbm5lci5pc0NvbXB1dGVyID8gXCJZb3UgTG9vc2UhXCIgOiBcIllvdSBXb24hXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYXR0YWNrZWRTaGlwKSB7XHJcbiAgICAgICAgICAvLyBQbGF5IGFnYWluXHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgdHVybnNRdWV1ZS5wdXNoKHBsYXllciwgZW5lbXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0dXJuc1F1ZXVlLnB1c2gocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==