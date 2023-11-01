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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

[draggable="true"]:hover {
    cursor: move;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 0;
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
    background-color: aquamarine;
}
#customize-contr span.ship-pos {
    background-color: grey !important;
}

#ships-contr {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
}
#ships-contr[data-isvertical="true"] {
    flex-direction: row;
}
#ships-contr[data-isvertical="true"] > div {
    grid-template: repeat(5, 25px) / 25px !important;
}
#ships-contr .squares {
    background-color: lightgrey;
}
#ships-contr > div {
    display: grid;
    grid-template: 25px / repeat(5, 25px);
    border: 1px solid;
    width: fit-content;
}
#ships-contr > div:first-child {
    grid-template-columns: repeat(5, 25px);
}
#ships-contr > div:nth-child(2) {
    grid-template-columns: repeat(4, 25px);
}
#ships-contr > div:nth-child(3),
#ships-contr > div:nth-child(4) {
    grid-template-columns: repeat(3, 25px);
}
#ships-contr > div:last-child {
    grid-template-columns: repeat(2, 25px);
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
}

#msg {
    color: white;
    background-color: black;
    padding: 0.5rem;
    border-radius: 5px;
}

#game-contr {
    display: flex;
    gap: 2rem;
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
    padding: 1rem;
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
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,4BAA4B;AAChC;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;AACnB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gDAAgD;AACpD;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,sCAAsC;AAC1C;AACA;;IAEI,sCAAsC;AAC1C;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,kDAAkD;AACtD;AACA;IACI,kDAAkD;AACtD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;;AAGA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n[draggable=\"true\"]:hover {\r\n    cursor: move;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    margin: 0;\r\n}\r\n\r\ndialog {\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 3px 1px #00000020;\r\n}\r\n\r\n#customize {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#customize-contr {\r\n    padding: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#customize-contr span.valid {\r\n    background-color: aquamarine;\r\n}\r\n#customize-contr span.ship-pos {\r\n    background-color: grey !important;\r\n}\r\n\r\n#ships-contr {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    flex-wrap: wrap;\r\n}\r\n#ships-contr[data-isvertical=\"true\"] {\r\n    flex-direction: row;\r\n}\r\n#ships-contr[data-isvertical=\"true\"] > div {\r\n    grid-template: repeat(5, 25px) / 25px !important;\r\n}\r\n#ships-contr .squares {\r\n    background-color: lightgrey;\r\n}\r\n#ships-contr > div {\r\n    display: grid;\r\n    grid-template: 25px / repeat(5, 25px);\r\n    border: 1px solid;\r\n    width: fit-content;\r\n}\r\n#ships-contr > div:first-child {\r\n    grid-template-columns: repeat(5, 25px);\r\n}\r\n#ships-contr > div:nth-child(2) {\r\n    grid-template-columns: repeat(4, 25px);\r\n}\r\n#ships-contr > div:nth-child(3),\r\n#ships-contr > div:nth-child(4) {\r\n    grid-template-columns: repeat(3, 25px);\r\n}\r\n#ships-contr > div:last-child {\r\n    grid-template-columns: repeat(2, 25px);\r\n}\r\n.board-contr {\r\n    display: grid;\r\n    border: 1px solid;\r\n    grid-template: repeat(10, 35px) / repeat(10, 35px);\r\n}\r\n#customize-contr .board-contr {\r\n    grid-template: repeat(10, 25px) / repeat(10, 25px);\r\n}\r\n\r\n#customize-ctrl-contr {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.squares {\r\n    border: 0.5px solid grey;\r\n}\r\n\r\n#msg {\r\n    color: white;\r\n    background-color: black;\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#game-contr {\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.players {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.players-name {\r\n    font-size: large;\r\n}\r\n\r\nfooter {\r\n    padding: 1rem;\r\n    gap: 0.5rem;\r\n    background-color: black;\r\n    color: white;\r\n    align-self: stretch;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nfooter a {\r\n    color: lightgray;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/battleship */ "./src/modules/battleship.js");
/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pubsub */ "./src/modules/pubsub.js");




const customizeModal = (() => {
  let _draggingLength,
    _isVertical = false,
    _currShipArea = [],
    _shipAreas = [],
    _board = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.GameBoard(false);

  function isOrientationVertical() {
    return _isVertical;
  }

  function switchOrientation() {
    _isVertical = !_isVertical;
    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].shipsContr.setAttribute("data-isvertical", _isVertical);
  }

  function setDraggingLength(length) {
    _draggingLength = length;
  }

  function _clearBoard() {
    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialogBoard.childNodes.forEach(
      (child) => (child.className = "squares")
    );
  }

  function _clearBoardValidity() {
    const validitySquares = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialogBoard.querySelectorAll("span.valid, span.invalid");
    validitySquares.forEach(square => {
      square.classList.remove("valid");
      square.classList.remove("invalid");
    })
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

    if ((0,_modules_battleship__WEBPACK_IMPORTED_MODULE_1__.validateAreas)([..._shipAreas, areasList])) {
      areasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = areasList;
    } else if ((0,_modules_battleship__WEBPACK_IMPORTED_MODULE_1__.validateAreas)([..._shipAreas, altAreasList])) {
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
    if (_currShipArea.length && (_shipAreas.length < 5)) {
      e.target.remove();
      _shipAreas.push(_currShipArea);
      _updateBoard();
    }
  }

  function randomizeBoard() {
    _board = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
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
      _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialog.close();
      // Emit event
      _modules_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].publish(_modules_pubsub__WEBPACK_IMPORTED_MODULE_2__.events.playerFormSubmitted, _shipAreas);
    }
    
  }

  return {
    setDraggingLength,
    switchOrientation,
    isOrientationVertical,
    revealSquaresValidity,
    dropShip,
    randomizeBoard,
    exitModal
  };
})();

(() => {
  initPage();

  function initPage() {
    clearBoards(_modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialogBoard, _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].playerBoard1, _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].playerBoard2);

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

      _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialogBoard.appendChild(node.cloneNode());
      _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].playerBoard1.appendChild(node.cloneNode());
      _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].playerBoard2.appendChild(node);
    });

    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialog.showModal();

    addEvents();
  }

  function clearBoards(...boards) {
    boards.forEach((b) => (b.innerHTML = null));
  }

  function addEvents() {
    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].shipsContr.addEventListener("dragstart", (e) =>
      customizeModal.setDraggingLength(e.target.children.length)
    );
    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].dialogBoard.addEventListener(
      "dragover",
      customizeModal.revealSquaresValidity
    );

    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].shipsContr.addEventListener("dragend", customizeModal.dropShip);

    _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].customizeBtns.addEventListener("click", (e) => {
      switch (e.target.getAttribute("data-action")) {
        case "rotate":
          return customizeModal.switchOrientation();
        case "random":
          return customizeModal.randomizeBoard();
        case "start":
          return customizeModal.exitModal();
      }
    });
  }
})();


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
        return;
      }
    }

    this.missedAttacks.add(square);
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
    const square = `${Math.floor(Math.random() * 10)},${Math.floor(
      Math.random() * 10
    )}`;
    while (board.missedAttacks.has(square)) {
      square = `${Math.floor(Math.random() * 10)},${Math.floor(
        Math.random() * 10
      )}`;
    }
    return square;
  }

  async play(board) {
    if (this.isComputer) {
      return Promise.resolve(this.randomSquare(board));
    } else {
      // pubSub unlock board and wait for user to play
      // lock board
      return Promise.resolve(this.randomSquare(board));
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
  playerFormSubmitted: "playerFormSubmitted",
  gameOver: "gameOver"
}

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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");





(() => {
  let player1 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player(""),
    player2 = new _modules_battleship__WEBPACK_IMPORTED_MODULE_1__.Player("", true);

  function setPlayer(areasList) {
    areasList.forEach(player1.addShip.bind(player1));
  }

  function checkWin(p1 = player1, p2 = player2) {
    if (p1.gameBoard.areAllSunk()) {
      return p2;
    } else if (p2.gameBoard.areAllSunk()) {
      return p1;
    }
    return null;
  }

  async function gameLoop() {
    const playQueue = [player1, player2];
    while (true) {
      const player = playQueue.shift(),
        enemy = playQueue[0];
      
      const pos = await player.play(enemy.gameBoard);
      enemy.gameBoard.receiveAttack(pos);

      const winner = checkWin();
      if (winner) {
        // pubSub winner
        return;
      } else {
        playQueue.push(player);
      }
    }
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksNkJBQTZCLCtCQUErQixLQUFLLG9DQUFvQyxxQkFBcUIsS0FBSyxjQUFjLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGtCQUFrQixrQkFBa0IsS0FBSyxnQkFBZ0IsbUJBQW1CLHFCQUFxQixzQkFBc0IsMkJBQTJCLDBDQUEwQyxLQUFLLG9CQUFvQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxrQkFBa0IsS0FBSywwQkFBMEIsc0JBQXNCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGtCQUFrQixLQUFLLHFDQUFxQyxxQ0FBcUMsS0FBSyxvQ0FBb0MsMENBQTBDLEtBQUssc0JBQXNCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLHdCQUF3QixLQUFLLDRDQUE0Qyw0QkFBNEIsS0FBSyxrREFBa0QseURBQXlELEtBQUssMkJBQTJCLG9DQUFvQyxLQUFLLHdCQUF3QixzQkFBc0IsOENBQThDLDBCQUEwQiwyQkFBMkIsS0FBSyxvQ0FBb0MsK0NBQStDLEtBQUsscUNBQXFDLCtDQUErQyxLQUFLLHlFQUF5RSwrQ0FBK0MsS0FBSyxtQ0FBbUMsK0NBQStDLEtBQUssa0JBQWtCLHNCQUFzQiwwQkFBMEIsMkRBQTJELEtBQUssbUNBQW1DLDJEQUEyRCxLQUFLLCtCQUErQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxrQkFBa0IsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssY0FBYyxxQkFBcUIsZ0NBQWdDLHdCQUF3QiwyQkFBMkIsS0FBSyxxQkFBcUIsc0JBQXNCLGtCQUFrQixLQUFLLGtCQUFrQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0MsS0FBSywyQkFBMkIseUJBQXlCLEtBQUssZ0JBQWdCLHNCQUFzQixvQkFBb0IsZ0NBQWdDLHFCQUFxQiw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyxrQkFBa0IseUJBQXlCLEtBQUssbUJBQW1CO0FBQzM3SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hKMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmdDO0FBQ2dDO0FBQ2Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBRztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBRztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0EsNEJBQTRCLFVBQVUsR0FBRyx3QkFBd0I7QUFDakUsNEJBQTRCLHdCQUF3QixHQUFHLFVBQVU7QUFDakU7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0EsK0JBQStCLFVBQVUsR0FBRyx3QkFBd0I7QUFDcEUsK0JBQStCLHdCQUF3QixHQUFHLFVBQVU7QUFDcEU7QUFDQTtBQUNBLFFBQVEsa0VBQWE7QUFDckI7QUFDQTtBQUNBLGdEQUFnRCxJQUFJO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxrRUFBYTtBQUM1QjtBQUNBO0FBQ0EsZ0RBQWdELElBQUk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBRztBQUNUO0FBQ0EsTUFBTSx1REFBTSxTQUFTLG1EQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQUcsY0FBYyxvREFBRyxlQUFlLG9EQUFHO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUIsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFHO0FBQ1QsTUFBTSxvREFBRztBQUNULE1BQU0sb0RBQUc7QUFDVCxLQUFLO0FBQ0w7QUFDQSxJQUFJLG9EQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBRztBQUNQO0FBQ0E7QUFDQSxJQUFJLG9EQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFHO0FBQ1A7QUFDQSxJQUFJLG9EQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtBQUNsQyx1Q0FBdUMsTUFBTSxHQUFHLEVBQUU7QUFDbEQsdUNBQXVDLE1BQU0sR0FBRyxFQUFFO0FBQ2xELHVDQUF1QyxFQUFFLEdBQUcsTUFBTTtBQUNsRCx1Q0FBdUMsRUFBRSxHQUFHLE1BQU07QUFDbEQsdUNBQXVDLE1BQU0sR0FBRyxNQUFNO0FBQ3RELHVDQUF1QyxNQUFNLEdBQUcsTUFBTTtBQUN0RCx1Q0FBdUMsTUFBTSxHQUFHLE1BQU07QUFDdEQsdUNBQXVDLE1BQU0sR0FBRyxNQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSx1QkFBdUIsRUFBRSxHQUFHLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUix1QkFBdUIsTUFBTSxHQUFHLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCLEdBQUc7QUFDeEQ7QUFDQSxNQUFNO0FBQ047QUFDQSxrQkFBa0IsK0JBQStCLEdBQUc7QUFDcEQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ2tEOzs7Ozs7Ozs7Ozs7Ozs7QUN6UGxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7O1VDdkJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ1E7QUFDM0I7QUFDUztBQUM1QjtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFNO0FBQzFCLGtCQUFrQix1REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbltkcmFnZ2FibGU9XCJ0cnVlXCJdOmhvdmVyIHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICMwMDAwMDAyMDtcclxufVxyXG5cclxuI2N1c3RvbWl6ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWNvbnRyIHtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjdXN0b21pemUtY29udHIgc3Bhbi52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbiNjdXN0b21pemUtY29udHIgc3Bhbi5zaGlwLXBvcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4jc2hpcHMtY29udHJbZGF0YS1pc3ZlcnRpY2FsPVwidHJ1ZVwiXSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiNzaGlwcy1jb250cltkYXRhLWlzdmVydGljYWw9XCJ0cnVlXCJdID4gZGl2IHtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg1LCAyNXB4KSAvIDI1cHggIWltcG9ydGFudDtcclxufVxyXG4jc2hpcHMtY29udHIgLnNxdWFyZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbiNzaGlwcy1jb250ciA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogMjVweCAvIHJlcGVhdCg1LCAyNXB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbiNzaGlwcy1jb250ciA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyNXB4KTtcclxufVxyXG4jc2hpcHMtY29udHIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI1cHgpO1xyXG59XHJcbiNzaGlwcy1jb250ciA+IGRpdjpudGgtY2hpbGQoMyksXHJcbiNzaGlwcy1jb250ciA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjVweCk7XHJcbn1cclxuI3NoaXBzLWNvbnRyID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjVweCk7XHJcbn1cclxuLmJvYXJkLWNvbnRyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xyXG59XHJcbiNjdXN0b21pemUtY29udHIgLmJvYXJkLWNvbnRyIHtcclxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMjVweCkgLyByZXBlYXQoMTAsIDI1cHgpO1xyXG59XHJcblxyXG4jY3VzdG9taXplLWN0cmwtY29udHIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnNxdWFyZXMge1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4jbXNnIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jZ2FtZS1jb250ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ucGxheWVycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5wbGF5ZXJzLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7O0lBRUksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDAwMDIwO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9taXplIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jb250ciB7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbWl6ZS1jb250ciBzcGFuLnZhbGlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuI2N1c3RvbWl6ZS1jb250ciBzcGFuLnNoaXAtcG9zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcHMtY29udHIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuI3NoaXBzLWNvbnRyW2RhdGEtaXN2ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdID4gZGl2IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDUsIDI1cHgpIC8gMjVweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jc2hpcHMtY29udHIgLnNxdWFyZXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcbiNzaGlwcy1jb250ciA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDI1cHggLyByZXBlYXQoNSwgMjVweCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcbiNzaGlwcy1jb250ciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI1cHgpO1xcclxcbn1cXHJcXG4jc2hpcHMtY29udHIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjVweCk7XFxyXFxufVxcclxcbiNzaGlwcy1jb250ciA+IGRpdjpudGgtY2hpbGQoMyksXFxyXFxuI3NoaXBzLWNvbnRyID4gZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDI1cHgpO1xcclxcbn1cXHJcXG4jc2hpcHMtY29udHIgPiBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDI1cHgpO1xcclxcbn1cXHJcXG4uYm9hcmQtY29udHIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAzNXB4KSAvIHJlcGVhdCgxMCwgMzVweCk7XFxyXFxufVxcclxcbiNjdXN0b21pemUtY29udHIgLmJvYXJkLWNvbnRyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAyNXB4KSAvIHJlcGVhdCgxMCwgMjVweCk7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21pemUtY3RybC1jb250ciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmVzIHtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNnYW1lLWNvbnRyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGxheWVycy1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkb20gZnJvbSBcIi4vbW9kdWxlcy9kb21cIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkLCB2YWxpZGF0ZUFyZWFzIH0gZnJvbSBcIi4vbW9kdWxlcy9iYXR0bGVzaGlwXCI7XHJcbmltcG9ydCBwdWJTdWIsIHsgZXZlbnRzIH0gZnJvbSBcIi4vbW9kdWxlcy9wdWJzdWJcIjtcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZU1vZGFsID0gKCgpID0+IHtcclxuICBsZXQgX2RyYWdnaW5nTGVuZ3RoLFxyXG4gICAgX2lzVmVydGljYWwgPSBmYWxzZSxcclxuICAgIF9jdXJyU2hpcEFyZWEgPSBbXSxcclxuICAgIF9zaGlwQXJlYXMgPSBbXSxcclxuICAgIF9ib2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBpc09yaWVudGF0aW9uVmVydGljYWwoKSB7XHJcbiAgICByZXR1cm4gX2lzVmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hPcmllbnRhdGlvbigpIHtcclxuICAgIF9pc1ZlcnRpY2FsID0gIV9pc1ZlcnRpY2FsO1xyXG4gICAgZG9tLnNoaXBzQ29udHIuc2V0QXR0cmlidXRlKFwiZGF0YS1pc3ZlcnRpY2FsXCIsIF9pc1ZlcnRpY2FsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERyYWdnaW5nTGVuZ3RoKGxlbmd0aCkge1xyXG4gICAgX2RyYWdnaW5nTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NsZWFyQm9hcmQoKSB7XHJcbiAgICBkb20uZGlhbG9nQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKFxyXG4gICAgICAoY2hpbGQpID0+IChjaGlsZC5jbGFzc05hbWUgPSBcInNxdWFyZXNcIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2xlYXJCb2FyZFZhbGlkaXR5KCkge1xyXG4gICAgY29uc3QgdmFsaWRpdHlTcXVhcmVzID0gZG9tLmRpYWxvZ0JvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuLnZhbGlkLCBzcGFuLmludmFsaWRcIik7XHJcbiAgICB2YWxpZGl0eVNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm47XHJcbiAgICBfY2xlYXJCb2FyZFZhbGlkaXR5KCk7XHJcblxyXG4gICAgY29uc3QgYXJlYXNMaXN0ID0gW10sXHJcbiAgICAgIGFsdEFyZWFzTGlzdCA9IFtdLFxyXG4gICAgICBzcXVhcmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNxdWFyZS1pbmRleFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kcmFnZ2luZ0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIF9pc1ZlcnRpY2FsXHJcbiAgICAgICAgPyBhcmVhc0xpc3QucHVzaChgJHtzcXVhcmVbMF19LCR7cGFyc2VJbnQoc3F1YXJlWzJdKSArIGl9YClcclxuICAgICAgICA6IGFyZWFzTGlzdC5wdXNoKGAke3BhcnNlSW50KHNxdWFyZVswXSkgKyBpfSwke3NxdWFyZVsyXX1gKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2RyYWdnaW5nTGVuZ3RoOyBpKyspIHtcclxuICAgICAgX2lzVmVydGljYWxcclxuICAgICAgICA/IGFsdEFyZWFzTGlzdC5wdXNoKGAke3NxdWFyZVswXX0sJHtwYXJzZUludChzcXVhcmVbMl0pIC0gaX1gKVxyXG4gICAgICAgIDogYWx0QXJlYXNMaXN0LnB1c2goYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSAtIGl9LCR7c3F1YXJlWzJdfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWxpZGF0ZUFyZWFzKFsuLi5fc2hpcEFyZWFzLCBhcmVhc0xpc3RdKSkge1xyXG4gICAgICBhcmVhc0xpc3QuZm9yRWFjaCgocG9zKSA9PlxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc3F1YXJlLWluZGV4PScke3Bvc30nXWApXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBhcmVhc0xpc3Q7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlQXJlYXMoWy4uLl9zaGlwQXJlYXMsIGFsdEFyZWFzTGlzdF0pKSB7XHJcbiAgICAgIGFsdEFyZWFzTGlzdC5mb3JFYWNoKChwb3MpID0+XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcXVhcmUtaW5kZXg9JyR7cG9zfSddYClcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIilcclxuICAgICAgKTtcclxuICAgICAgX2N1cnJTaGlwQXJlYSA9IGFsdEFyZWFzTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9jdXJyU2hpcEFyZWEgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyb3BTaGlwKGUpIHtcclxuICAgIGlmIChfY3VyclNoaXBBcmVhLmxlbmd0aCAmJiAoX3NoaXBBcmVhcy5sZW5ndGggPCA1KSkge1xyXG4gICAgICBlLnRhcmdldC5yZW1vdmUoKTtcclxuICAgICAgX3NoaXBBcmVhcy5wdXNoKF9jdXJyU2hpcEFyZWEpO1xyXG4gICAgICBfdXBkYXRlQm9hcmQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbWl6ZUJvYXJkKCkge1xyXG4gICAgX2JvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgX3NoaXBBcmVhcyA9IFsuLi5fYm9hcmQuc2hpcHNdLm1hcCgoc2hpcE9iaikgPT4gWy4uLnNoaXBPYmouY29vcmRzXSk7XHJcbiAgICBfdXBkYXRlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF91cGRhdGVCb2FyZCgpIHtcclxuICAgIF9jbGVhckJvYXJkKCk7XHJcbiAgICBfc2hpcEFyZWFzXHJcbiAgICAgIC5mbGF0TWFwKChhcnIpID0+IGFycilcclxuICAgICAgLmZvckVhY2goKHNxdWFyZSkgPT5cclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNxdWFyZS1pbmRleD0nJHtzcXVhcmV9J11gKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBvc1wiKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhpdE1vZGFsKCkge1xyXG4gICAgaWYgKF9zaGlwQXJlYXMubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgIGRvbS5kaWFsb2cuY2xvc2UoKTtcclxuICAgICAgLy8gRW1pdCBldmVudFxyXG4gICAgICBwdWJTdWIucHVibGlzaChldmVudHMucGxheWVyRm9ybVN1Ym1pdHRlZCwgX3NoaXBBcmVhcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXREcmFnZ2luZ0xlbmd0aCxcclxuICAgIHN3aXRjaE9yaWVudGF0aW9uLFxyXG4gICAgaXNPcmllbnRhdGlvblZlcnRpY2FsLFxyXG4gICAgcmV2ZWFsU3F1YXJlc1ZhbGlkaXR5LFxyXG4gICAgZHJvcFNoaXAsXHJcbiAgICByYW5kb21pemVCb2FyZCxcclxuICAgIGV4aXRNb2RhbFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGluaXRQYWdlKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRQYWdlKCkge1xyXG4gICAgY2xlYXJCb2FyZHMoZG9tLmRpYWxvZ0JvYXJkLCBkb20ucGxheWVyQm9hcmQxLCBkb20ucGxheWVyQm9hcmQyKTtcclxuXHJcbiAgICAvLyBEcmF3IGJvYXJkc1xyXG4gICAgY29uc3QgYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IHggPSA5OyB4ID49IDA7IHgtLSkge1xyXG4gICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgZm9yIChsZXQgeSA9IDk7IHkgPj0gMDsgeS0tKSB7XHJcbiAgICAgICAgYXJyLnB1c2goYCR7eX0sJHt4fWApO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2goLi4uYXJyLnJldmVyc2UoKSk7XHJcbiAgICB9XHJcbiAgICBib2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtc3F1YXJlLWluZGV4XCIsIHNxdWFyZSk7XHJcbiAgICAgIG5vZGUuY2xhc3NOYW1lID0gXCJzcXVhcmVzXCI7XHJcblxyXG4gICAgICBkb20uZGlhbG9nQm9hcmQuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUoKSk7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDEuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUoKSk7XHJcbiAgICAgIGRvbS5wbGF5ZXJCb2FyZDIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb20uZGlhbG9nLnNob3dNb2RhbCgpO1xyXG5cclxuICAgIGFkZEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJCb2FyZHMoLi4uYm9hcmRzKSB7XHJcbiAgICBib2FyZHMuZm9yRWFjaCgoYikgPT4gKGIuaW5uZXJIVE1MID0gbnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG4gICAgZG9tLnNoaXBzQ29udHIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT5cclxuICAgICAgY3VzdG9taXplTW9kYWwuc2V0RHJhZ2dpbmdMZW5ndGgoZS50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgKTtcclxuICAgIGRvbS5kaWFsb2dCb2FyZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImRyYWdvdmVyXCIsXHJcbiAgICAgIGN1c3RvbWl6ZU1vZGFsLnJldmVhbFNxdWFyZXNWYWxpZGl0eVxyXG4gICAgKTtcclxuXHJcbiAgICBkb20uc2hpcHNDb250ci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBjdXN0b21pemVNb2RhbC5kcm9wU2hpcCk7XHJcblxyXG4gICAgZG9tLmN1c3RvbWl6ZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIikpIHtcclxuICAgICAgICBjYXNlIFwicm90YXRlXCI6XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9taXplTW9kYWwuc3dpdGNoT3JpZW50YXRpb24oKTtcclxuICAgICAgICBjYXNlIFwicmFuZG9tXCI6XHJcbiAgICAgICAgICByZXR1cm4gY3VzdG9taXplTW9kYWwucmFuZG9taXplQm9hcmQoKTtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgIHJldHVybiBjdXN0b21pemVNb2RhbC5leGl0TW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KSgpO1xyXG4iLCJjbGFzcyBTaGlwIHtcclxuICBsZW5ndGg7XHJcbiAgaGl0cyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0cztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgYm9hcmQgPSBuZXcgTWFwKCk7XHJcbiAgc2hpcHMgPSBuZXcgU2V0KCk7XHJcbiAgbWlzc2VkQXR0YWNrcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoYWRkUmFuZG9tU2hpcHMgPSB0cnVlKSB7XHJcbiAgICB0aGlzLiNpbml0Qm9hcmQoKTtcclxuICAgIGlmIChhZGRSYW5kb21TaGlwcykgdGhpcy4jYWRkU2hpcHMoKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNoaXBPYmogb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICBpZiAoc2hpcE9iai5jb29yZHMuaGFzKHNxdWFyZSkpIHtcclxuICAgICAgICBzaGlwT2JqLmhpdENvb3Jkcy5hZGQoc3F1YXJlKTtcclxuICAgICAgICBzaGlwT2JqLnNoaXAuaGl0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLmFkZChzcXVhcmUpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3F1YXJlKHNxdWFyZSkge1xyXG4gICAgdGhpcy5ib2FyZC5zZXQoc3F1YXJlLCB7IHNxdWFyZSwgYWRqU3F1YXJlczogbmV3IFNldCgpIH0pO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdFNxdWFyZShzcXVhcmUxLCBzcXVhcmUyKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZC5oYXMoc3F1YXJlMSkgJiYgdGhpcy5ib2FyZC5oYXMoc3F1YXJlMikpIHtcclxuICAgICAgdGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkuYWRqU3F1YXJlcy5hZGQodGhpcy5ib2FyZC5nZXQoc3F1YXJlMikpO1xyXG4gICAgICB0aGlzLmJvYXJkLmdldChzcXVhcmUyKS5hZGpTcXVhcmVzLmFkZCh0aGlzLmJvYXJkLmdldChzcXVhcmUxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBZGpTcXVhcmVzKHNxdWFyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZSkuYWRqU3F1YXJlcztcclxuICB9XHJcblxyXG4gIGFyZU5laWdoYm9vcnMoc3F1YXJlMSwgc3F1YXJlMikge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpLmFkalNxdWFyZXMuaGFzKHNxdWFyZTIpO1xyXG4gIH1cclxuXHJcbiAgYXJlQWxsU3VuaygpIHtcclxuICAgIGlmICghdGhpcy5zaGlwcy5zaXplKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBbLi4udGhpcy5zaGlwc11cclxuICAgICAgLm1hcCgoc2hpcE9iaikgPT4gc2hpcE9iai5zaGlwLmlzU3VuaygpKVxyXG4gICAgICAuZXZlcnkoKHZhbCkgPT4gdmFsID09PSB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZVNxdWFyZXMoKSB7XHJcbiAgICBjb25zdCBib2FyZFNxdWFyZXMgPSBbLi4udGhpcy5ib2FyZC5rZXlzKCldLFxyXG4gICAgICBzaGlwUG9zQXR0YWNrZWQgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmhpdENvb3Jkc10pO1xyXG4gICAgY29uc3Qgc3F1YXJlU2V0ID0gYm9hcmRTcXVhcmVzLmZpbHRlcihcclxuICAgICAgKHNxdWFyZSkgPT4gISh0aGlzLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkgfHwgc2hpcFBvc0F0dGFja2VkLmluY2x1ZGVzKHNxdWFyZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBbLi4uc3F1YXJlU2V0XTtcclxuICB9XHJcblxyXG4gICNpbml0Qm9hcmQoKSB7XHJcbiAgICAvLyBBZGQgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIHRoaXMuYWRkU3F1YXJlKGAke2l9LCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbm5lY3Qgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBgJHtpfSwke2p9YDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgLSAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgI2FkZFNoaXBzKCkge1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCg1KSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoNCksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgICB0aGlzLiNhZGRTaGlwKG5ldyBTaGlwKDMpLCB0aGlzLiNnZXRSYW5kb21Cb29sKCkpO1xyXG4gICAgdGhpcy4jYWRkU2hpcChuZXcgU2hpcCgzKSwgdGhpcy4jZ2V0UmFuZG9tQm9vbCgpKTtcclxuICAgIHRoaXMuI2FkZFNoaXAobmV3IFNoaXAoMiksIHRoaXMuI2dldFJhbmRvbUJvb2woKSk7XHJcbiAgfVxyXG4gICNnZXRSYW5kb21Cb29sKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuICAjYWRkU2hpcChzaGlwLCBpc1ZlcnRpY2FsID0gZmFsc2UpIHtcclxuICAgIHRoaXMuc2hpcHMuYWRkKHtcclxuICAgICAgc2hpcCxcclxuICAgICAgY29vcmRzOiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpLFxyXG4gICAgICBoaXRDb29yZHM6IG5ldyBTZXQoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuICAjY3JlYXRlU2hpcENvb3JkcyhzaGlwLCBpc1ZlcnRpY2FsKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICBjb29yZHNMaXN0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGNoZWNrIGlmICdwb3MnIGlzIHZhbGlkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBgJHt4fSwke3kgKyBpfWA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBvcyhwb3MpKSB7XHJcbiAgICAgICAgICBjb29yZHNMaXN0LmFkZChwb3MpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVTaGlwQ29vcmRzKHNoaXAsIGlzVmVydGljYWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGAke3ggKyBpfSwke3l9YDtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKHBvcykpIHtcclxuICAgICAgICAgIGNvb3Jkc0xpc3QuYWRkKHBvcyk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNoaXBDb29yZHMoc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb29yZHNMaXN0O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFBvcyhwb3MpIHtcclxuICAgIGlmICghdGhpcy5ib2FyZC5oYXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBbLi4udGhpcy5zaGlwc10uZmxhdE1hcCgob2JqKSA9PiBbLi4ub2JqLmNvb3Jkc10pO1xyXG4gICAgaWYgKGxpc3QuaW5jbHVkZXMocG9zKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGFkalBvcyA9IFsuLi50aGlzLmJvYXJkLmdldChwb3MpLmFkalNxdWFyZXNdLm1hcCgob2JqKSA9PiBvYmouc3F1YXJlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFkalBvcy5pbmNsdWRlcyhsaXN0W2ldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgZ2FtZUJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xyXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU2hpcChhcmVhKSB7XHJcbiAgICBpZiAodGhpcy4jaXNWYWxpZEFyZWEoYXJlYSkpIHtcclxuICAgICAgdGhpcy5nYW1lQm9hcmQuc2hpcHMuYWRkKHtcclxuICAgICAgICBzaGlwOiBuZXcgU2hpcChhcmVhLmxlbmd0aCksXHJcbiAgICAgICAgY29vcmRzOiBuZXcgU2V0KGFyZWEpLFxyXG4gICAgICAgIGhpdENvb3JkczogbmV3IFNldCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNpc1ZhbGlkQXJlYShhcmVhKSB7XHJcbiAgICAvLyBWZXJpZnkgdGhhdCBhbGwgY29vcmRpbmF0ZXMgaW4gYXJlYSBhcmUgYWRqYWNlbnQuLi5cclxuICAgIC8vIC4uLmFuZCBub3QgZGlhZ29uYWxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXJlYVtpICsgMV0pIHtcclxuICAgICAgICBjb25zdCBjdXJyUG9zID0gYXJlYVtpXS5zcGxpdChcIixcIiksXHJcbiAgICAgICAgICBuZXh0UG9zID0gYXJlYVtpICsgMV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICEoXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMF0pIC0gMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzBdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMSA9PSBuZXh0UG9zWzFdIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMSA9PSBuZXh0UG9zWzFdXHJcbiAgICAgICAgICApIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxLCBwYXJzZUludChjdXJyUG9zWzFdKSAtIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdIHx8XHJcbiAgICAgICAgICBbcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxLCBwYXJzZUludChjdXJyUG9zWzFdKSArIDFdLnRvU3RyaW5nKCkgPT09XHJcbiAgICAgICAgICAgIGFyZWFbaSArIDFdXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJlYS5ldmVyeSh0aGlzLmdhbWVCb2FyZC5pc1ZhbGlkUG9zLmJpbmQodGhpcy5nYW1lQm9hcmQpKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbVNxdWFyZShib2FyZCkge1xyXG4gICAgY29uc3Qgc3F1YXJlID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSwke01hdGguZmxvb3IoXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAxMFxyXG4gICAgKX1gO1xyXG4gICAgd2hpbGUgKGJvYXJkLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkpIHtcclxuICAgICAgc3F1YXJlID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSwke01hdGguZmxvb3IoXHJcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBzcXVhcmU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwbGF5KGJvYXJkKSB7XHJcbiAgICBpZiAodGhpcy5pc0NvbXB1dGVyKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yYW5kb21TcXVhcmUoYm9hcmQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHB1YlN1YiB1bmxvY2sgYm9hcmQgYW5kIHdhaXQgZm9yIHVzZXIgdG8gcGxheVxyXG4gICAgICAvLyBsb2NrIGJvYXJkXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yYW5kb21TcXVhcmUoYm9hcmQpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQXJlYXMoYXJlYXNMaXN0KSB7XHJcbiAgY29uc3QgcCA9IG5ldyBQbGF5ZXIoXCJcIiwgZmFsc2UpO1xyXG4gIHRyeSB7XHJcbiAgICBhcmVhc0xpc3QuZm9yRWFjaCgoYXJlYSkgPT4ge1xyXG4gICAgICBpZiAoIXAuYWRkU2hpcChhcmVhKSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIsIHZhbGlkYXRlQXJlYXMgfTtcclxuIiwiY29uc3QgZG9tID0ge1xyXG4gIGRpYWxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJkaWFsb2dcIl0nKSxcclxuICBkaWFsb2dCb2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJkaWFsb2dCb2FyZFwiXScpLFxyXG4gIHNoaXBzQ29udHI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwic2hpcHNDb250clwiXScpLFxyXG4gIGN1c3RvbWl6ZUJ0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwiY3VzdG9taXplQnRuc1wiXScpLFxyXG4gIG1zZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtaWQ9XCJtc2dcIl0nKSxcclxuICBwbGF5ZXJCb2FyZDE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWlkPVwicGxheWVyQm9hcmQxXCJdJyksXHJcbiAgcGxheWVyQm9hcmQyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1pZD1cInBsYXllckJvYXJkMlwiXScpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tO1xyXG4iLCJjb25zdCBwdWJTdWIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBldmVudHMgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgZXZlbnRzW2V2ZW50XSA/IGV2ZW50c1tldmVudF0ucHVzaChmbikgOiAoZXZlbnRzW2V2ZW50XSA9IFtmbl0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiB1blN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgIGlmIChldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgIGV2ZW50c1tldmVudF0gPSBldmVudHNbZXZlbnRdLmZpbHRlcigoZnVuYykgPT4gZnVuYyAhPT0gZm4pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XHJcbiAgICBpZiAoZXZlbnRzW2V2ZW50XSkgZXZlbnRzW2V2ZW50XS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3Vic2NyaWJlLCB1blN1YnNjcmliZSwgcHVibGlzaCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcclxuICBwbGF5ZXJGb3JtU3VibWl0dGVkOiBcInBsYXllckZvcm1TdWJtaXR0ZWRcIixcclxuICBnYW1lT3ZlcjogXCJnYW1lT3ZlclwiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHB1YlN1YjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHB1YlN1YiBmcm9tIFwiLi9tb2R1bGVzL3B1YnN1YlwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2JhdHRsZXNoaXBcIjtcclxuaW1wb3J0IFwiLi9kaXNwbGF5XCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xyXG5cclxuKCgpID0+IHtcclxuICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJcIiksXHJcbiAgICBwbGF5ZXIyID0gbmV3IFBsYXllcihcIlwiLCB0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWVyKGFyZWFzTGlzdCkge1xyXG4gICAgYXJlYXNMaXN0LmZvckVhY2gocGxheWVyMS5hZGRTaGlwLmJpbmQocGxheWVyMSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tXaW4ocDEgPSBwbGF5ZXIxLCBwMiA9IHBsYXllcjIpIHtcclxuICAgIGlmIChwMS5nYW1lQm9hcmQuYXJlQWxsU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBwMjtcclxuICAgIH0gZWxzZSBpZiAocDIuZ2FtZUJvYXJkLmFyZUFsbFN1bmsoKSkge1xyXG4gICAgICByZXR1cm4gcDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgY29uc3QgcGxheVF1ZXVlID0gW3BsYXllcjEsIHBsYXllcjJdO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgcGxheWVyID0gcGxheVF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgZW5lbXkgPSBwbGF5UXVldWVbMF07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwb3MgPSBhd2FpdCBwbGF5ZXIucGxheShlbmVteS5nYW1lQm9hcmQpO1xyXG4gICAgICBlbmVteS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3MpO1xyXG5cclxuICAgICAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW4oKTtcclxuICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgIC8vIHB1YlN1YiB3aW5uZXJcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGxheVF1ZXVlLnB1c2gocGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9