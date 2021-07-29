/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --main-bg-color: #343233;\r\n    --color-a: #efeae1;\r\n    --header-color: #584b4f;\r\n    --enfasis-a: #81c08b;\r\n    --box-game: #ffd152;\r\n}\r\n\r\nhtml {\r\n    min-height: 100%;\r\n    position: relative;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 20px;\r\n}\r\nimg {\r\n    border-radius: 5px;\r\n}\r\n\r\n/* Header */\r\n.contenedorHeader {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 150px;\r\n    background: var(--header-color);\r\n    color: var(--color-a);\r\n    text-align: center;\r\n}\r\n.contenedorHeader h1 {\r\n    padding-top: 10px;\r\n    font-size: 50px;\r\n}\r\n.contenedorHeader h1:hover {\r\n    transform: scale(1.05);\r\n    transition: 0.3s ease all;\r\n}\r\n\r\n.contenedorHeader a {\r\n    color: var(--color-a);\r\n    text-decoration: none;\r\n}\r\n.contenedorHeader a:hover {\r\n    color: var(--enfasis-a);\r\n    font-weight: 600;\r\n}\r\n\r\n/* Tabla de Juego */\r\n.contenedorTable {\r\n    width: 100%;\r\n    height: 700px;\r\n    background: var(--main-bg-color);\r\n    display: flex;\r\n}\r\n\r\n/* Footer */\r\n.contenedorFooter {\r\n    background-color: #efeae1;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    color: #574c4f;\r\n}\r\n.contenedorFooter a {\r\n    color: #574c4f;\r\n    text-decoration: none;\r\n}\r\n.contenedorFooter a:hover {\r\n    font-weight: 600;\r\n}\r\nspan {\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Flujo de juego */\r\n.game {\r\n    width: 40%;\r\n    height: 80%;\r\n    margin: 30px auto;\r\n    background-color: var(--box-game);\r\n    border-radius: 5px;\r\n}\r\n\r\n.gameBox {\r\n    margin: 55px auto;\r\n    width: 80%;\r\n    height: 80%;\r\n    text-align: center;\r\n}\r\n\r\n/* Get user name */\r\n\r\n.overlayWelcome {\r\n    display: flex;\r\n    background-color: rgba(0, 0, 0, 0.89);\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--main-bg-color);\r\n    /* visibility: hidden; */\r\n}\r\n.overlayWelcome.active {\r\n    visibility: visible;\r\n}\r\n\r\n.popupWelcome {\r\n    background-color: var(--color-a);\r\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\r\n    border-radius: 15px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    width: 450px;\r\n    height: 220px;\r\n    /* transition: 0.3s ease all;\r\n    transform: scale(0.7);\r\n     opacity: 0;  */\r\n}\r\n.popupWelcome h1 {\r\n    font-size: 36px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n    /* opacity: 0; */\r\n}\r\n.popupWelcome input {\r\n    width: 100%;\r\n    height: 52px;\r\n    margin-bottom: 15px;\r\n    line-height: 52px;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    border: 1px solid var(--main-bg-color);\r\n    border-radius: 5px;\r\n}\r\n.popupWelcome.active {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n.btnAdd:hover {\r\n    font-weight: 600;\r\n    transition: 0.3s ease all;\r\n    background-color: var(--main-bg-color);\r\n    color: var(--color-a);\r\n    width: 60%;\r\n}\r\n\r\n.contenedorObjetivo {\r\n    display: flex;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.objetivo {\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    height: 80%;\r\n}\r\n\r\n.contenedorResumen input:hover {\r\n    font-weight: 600;\r\n    transition: 0.3s ease all;\r\n    background-color: var(--main-bg-color);\r\n    color: var(--color-a);\r\n    width: 60%;\r\n}\r\n\r\n.contenedorResumen {\r\n    height: 300px;\r\n}\r\n\r\n.contenedorResumen p {\r\n    font-weight: 600;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,UAAU;IACV,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;AACA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA,mBAAmB;AACnB;IACI,WAAW;IACX,aAAa;IACb,gCAAgC;IAChC,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,yBAAyB;IACzB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;AACA;IACI,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,qCAAqC;IACrC,eAAe;IACf,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,8CAA8C;IAC9C,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb;;mBAEe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,sCAAsC;IACtC,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,sCAAsC;IACtC,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,cAAc;IACd,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,sCAAsC;IACtC,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["* {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --main-bg-color: #343233;\r\n    --color-a: #efeae1;\r\n    --header-color: #584b4f;\r\n    --enfasis-a: #81c08b;\r\n    --box-game: #ffd152;\r\n}\r\n\r\nhtml {\r\n    min-height: 100%;\r\n    position: relative;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 20px;\r\n}\r\nimg {\r\n    border-radius: 5px;\r\n}\r\n\r\n/* Header */\r\n.contenedorHeader {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 150px;\r\n    background: var(--header-color);\r\n    color: var(--color-a);\r\n    text-align: center;\r\n}\r\n.contenedorHeader h1 {\r\n    padding-top: 10px;\r\n    font-size: 50px;\r\n}\r\n.contenedorHeader h1:hover {\r\n    transform: scale(1.05);\r\n    transition: 0.3s ease all;\r\n}\r\n\r\n.contenedorHeader a {\r\n    color: var(--color-a);\r\n    text-decoration: none;\r\n}\r\n.contenedorHeader a:hover {\r\n    color: var(--enfasis-a);\r\n    font-weight: 600;\r\n}\r\n\r\n/* Tabla de Juego */\r\n.contenedorTable {\r\n    width: 100%;\r\n    height: 700px;\r\n    background: var(--main-bg-color);\r\n    display: flex;\r\n}\r\n\r\n/* Footer */\r\n.contenedorFooter {\r\n    background-color: #efeae1;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    color: #574c4f;\r\n}\r\n.contenedorFooter a {\r\n    color: #574c4f;\r\n    text-decoration: none;\r\n}\r\n.contenedorFooter a:hover {\r\n    font-weight: 600;\r\n}\r\nspan {\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Flujo de juego */\r\n.game {\r\n    width: 40%;\r\n    height: 80%;\r\n    margin: 30px auto;\r\n    background-color: var(--box-game);\r\n    border-radius: 5px;\r\n}\r\n\r\n.gameBox {\r\n    margin: 55px auto;\r\n    width: 80%;\r\n    height: 80%;\r\n    text-align: center;\r\n}\r\n\r\n/* Get user name */\r\n\r\n.overlayWelcome {\r\n    display: flex;\r\n    background-color: rgba(0, 0, 0, 0.89);\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--main-bg-color);\r\n    /* visibility: hidden; */\r\n}\r\n.overlayWelcome.active {\r\n    visibility: visible;\r\n}\r\n\r\n.popupWelcome {\r\n    background-color: var(--color-a);\r\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\r\n    border-radius: 15px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    width: 450px;\r\n    height: 220px;\r\n    /* transition: 0.3s ease all;\r\n    transform: scale(0.7);\r\n     opacity: 0;  */\r\n}\r\n.popupWelcome h1 {\r\n    font-size: 36px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n    /* opacity: 0; */\r\n}\r\n.popupWelcome input {\r\n    width: 100%;\r\n    height: 52px;\r\n    margin-bottom: 15px;\r\n    line-height: 52px;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    border: 1px solid var(--main-bg-color);\r\n    border-radius: 5px;\r\n}\r\n.popupWelcome.active {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n.btnAdd:hover {\r\n    font-weight: 600;\r\n    transition: 0.3s ease all;\r\n    background-color: var(--main-bg-color);\r\n    color: var(--color-a);\r\n    width: 60%;\r\n}\r\n\r\n.contenedorObjetivo {\r\n    display: flex;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.objetivo {\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    height: 80%;\r\n}\r\n\r\n.contenedorResumen input:hover {\r\n    font-weight: 600;\r\n    transition: 0.3s ease all;\r\n    background-color: var(--main-bg-color);\r\n    color: var(--color-a);\r\n    width: 60%;\r\n}\r\n\r\n.contenedorResumen {\r\n    height: 300px;\r\n}\r\n\r\n.contenedorResumen p {\r\n    font-weight: 600;\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setElements": () => (/* binding */ setElements),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _images_distancia_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/distancia.jpg */ "./src/images/distancia.jpg");
/* harmony import */ var _images_aglomeraciones_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/aglomeraciones.jpg */ "./src/images/aglomeraciones.jpg");
/* harmony import */ var _images_chatarraFood_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chatarraFood.jpg */ "./src/images/chatarraFood.jpg");
/* harmony import */ var _images_manos_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/manos.jpg */ "./src/images/manos.jpg");
/* harmony import */ var _images_mascarilla_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mascarilla.jpg */ "./src/images/mascarilla.jpg");
/* harmony import */ var _images_saludableFood_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/saludableFood.jpg */ "./src/images/saludableFood.jpg");
/* harmony import */ var _images_sinMascarilla_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sinMascarilla.jpg */ "./src/images/sinMascarilla.jpg");
/* harmony import */ var _images_virus_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/virus.jpg */ "./src/images/virus.jpg");
/* harmony import */ var _tableMain_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tableMain.js */ "./src/tableMain.js");










let goodPractices = {
    1: { imagen: _images_distancia_jpg__WEBPACK_IMPORTED_MODULE_0__, frase: "Mantener Distancia" },
    2: { imagen: _images_manos_jpg__WEBPACK_IMPORTED_MODULE_3__, frase: "Lavarse las Manos" },
    3: { imagen: _images_mascarilla_jpg__WEBPACK_IMPORTED_MODULE_4__, frase: "Usar mascarilla" },
    4: { imagen: _images_saludableFood_jpg__WEBPACK_IMPORTED_MODULE_5__, frase: "Comer saludable" },
};

let badPractices = {
    1: { imagen: _images_aglomeraciones_jpg__WEBPACK_IMPORTED_MODULE_1__, frase: "Estar todos unidos" },
    2: { imagen: _images_virus_jpg__WEBPACK_IMPORTED_MODULE_7__, frase: "Covid - 19" },
    3: { imagen: _images_sinMascarilla_jpg__WEBPACK_IMPORTED_MODULE_6__, frase: "No usar mascarilla" },
    4: { imagen: _images_chatarraFood_jpg__WEBPACK_IMPORTED_MODULE_2__, frase: "Comida Chatarra" },
};

//TODO: Hacer titulos de cada imagen para que el niño haga su elección

function getWinner(player) {
    let itemOne = document.querySelector(".divItemOne"),
        itemTwo = document.querySelector(".divItemTwo");

    let imgOne = document.createElement("img"),
        imgTwo = document.createElement("img"),
        divImgOne = document.createElement("div"),
        divImgTwo = document.createElement("div"),
        titleImgOne = document.createElement("h3"),
        titleImgTwo = document.createElement("h3");

    divImgOne.classList.add("gameBox");
    divImgTwo.classList.add("gameBox");

    titleImgOne.textContent = goodPractices[1].frase;
    titleImgTwo.textContent = badPractices[1].frase;

    imgOne.alt = "Esta es una buena imagen";
    imgOne.src = goodPractices[1].imagen;
    divImgOne.append(titleImgOne, imgOne);
    itemOne.appendChild(divImgOne);

    imgTwo.alt = "Esta es una mala imagen";
    imgTwo.src = badPractices[1].imagen;
    divImgTwo.append(titleImgTwo, imgTwo);
    itemTwo.appendChild(divImgTwo);

    let cont = 2;

    eventosEscuchaItems(
        itemOne,
        cont,
        imgOne,
        titleImgOne,
        imgTwo,
        titleImgTwo,
        player,
        itemTwo
    );
}

function eventosEscuchaItems(
    itemUno,
    cont,
    imagenUno,
    titleUno,
    imagenDos,
    titleDos,
    player,
    itemDos
) {
    itemUno.addEventListener("click", () => {
        if (cont == 2) {
            setItems(imagenUno, 2, titleUno, player, imagenDos, titleDos);
            cont++;
        } else if (cont == 3) {
            setItems(imagenUno, 3, titleUno, player, imagenDos, titleDos);
            cont++;
        } else if (cont == 4) {
            setItems(imagenUno, 4, titleUno, player, imagenDos, titleDos);
            cont++;
        } else {
            setItems(imagenUno, 1, titleUno, player, imagenDos, titleDos);
            cont = 2;
        }
    });

    itemDos.addEventListener("click", () => {
        if (cont == 2) {
            setItems(imagenUno, 2, titleUno, player, imagenDos, titleDos, 800);
            cont++;
        } else if (cont == 3) {
            setItems(imagenUno, 3, titleUno, player, imagenDos, titleDos, 350);
            cont++;
        } else if (cont == 4) {
            setItems(imagenUno, 4, titleUno, player, imagenDos, titleDos, 150);
            cont++;
        } else {
            setItems(imagenUno, 1, titleUno, player, imagenDos, titleDos, 600);
            cont = 2;
        }
    });
}

function setItems(
    imagenUno,
    number,
    titleUno,
    player,
    imagenDos,
    titleDos,
    damage = 0
) {
    imagenUno.alt = "Esta es una buena imagen";
    imagenUno.src = goodPractices[number].imagen;
    titleUno.textContent = goodPractices[number].frase;
    imagenDos.alt = "Esta es una mala imagen";
    imagenDos.src = badPractices[number].imagen;
    titleDos.textContent = badPractices[number].frase;
    player.health -= damage;
    console.log(player.health);
}

function startGame(btn, main) {
    btn.addEventListener("click", () => {
        main.removeChild(main.childNodes[1]);
    });
}

function setElements(player) {
    (0,_tableMain_js__WEBPACK_IMPORTED_MODULE_8__.doTable)();
    getWinner(player);
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constructor": () => (/* binding */ constructor)
/* harmony export */ });
/* harmony import */ var _gameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController.js */ "./src/gameController.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");



const main = document.querySelector(".main");

function doMenu() {
    let menu = document.createElement("ul"),
        itemOne = document.createElement("li"),
        itemTwo = document.createElement("li"),
        itemThree = document.createElement("li"),
        reOne = document.createElement("a"),
        reTwo = document.createElement("a"),
        reThree = document.createElement("a");

    reOne.target = "_blank";
    reOne.href = "https://github.com/Leninner/gameJam";
    reTwo.target = "_blank";
    reTwo.href = "https://www.linkedin.com/in/lenin-mazabanda-1370b41b2/";
    reThree.target = "_blank";
    reThree.href = "https://github.com/Leninner/gameJam/blob/main/README.md";

    reOne.textContent = "Repo";
    reTwo.textContent = "LinkedIn";
    reThree.textContent = "How to play?";

    itemOne.appendChild(reOne);
    itemTwo.appendChild(reTwo);
    itemThree.appendChild(reThree);
    menu.append(itemOne, itemTwo, itemThree);

    return menu;
}

function doHeader() {
    let divContenedorHeader = document.createElement("div"),
        titleHeader = document.createElement("h1");

    titleHeader.innerHTML = "Game Jam";

    divContenedorHeader.classList.add("contenedorHeader");

    divContenedorHeader.append(titleHeader, doMenu());
    main.appendChild(divContenedorHeader);
}

function doFooter() {
    let divContenedorFooter = document.createElement("div"),
        spanFooter = document.createElement("span"),
        titleFooter = document.createElement("h3");

    titleFooter.textContent = "Developed by Leninner";

    divContenedorFooter.classList.add("contenedorFooter");

    spanFooter.appendChild(titleFooter);
    divContenedorFooter.append(spanFooter, doMenu());
    main.appendChild(divContenedorFooter);
}

function constructor() {
    doHeader();
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.doPopUpWelcome)();
    doFooter();
}




/***/ }),

/***/ "./src/images/aglomeraciones.jpg":
/*!***************************************!*\
  !*** ./src/images/aglomeraciones.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51e138395d3ddecca71d.jpg";

/***/ }),

/***/ "./src/images/chatarraFood.jpg":
/*!*************************************!*\
  !*** ./src/images/chatarraFood.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3dfb29c602a8132559f.jpg";

/***/ }),

/***/ "./src/images/distancia.jpg":
/*!**********************************!*\
  !*** ./src/images/distancia.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2811526f7b67079a0b1.jpg";

/***/ }),

/***/ "./src/images/manos.jpg":
/*!******************************!*\
  !*** ./src/images/manos.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "166cfc5cd02210f492e1.jpg";

/***/ }),

/***/ "./src/images/mascarilla.jpg":
/*!***********************************!*\
  !*** ./src/images/mascarilla.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cff1b4adf1e9fb138bb.jpg";

/***/ }),

/***/ "./src/images/saludableFood.jpg":
/*!**************************************!*\
  !*** ./src/images/saludableFood.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a15f33b5fee93fa8b1c8.jpg";

/***/ }),

/***/ "./src/images/sinMascarilla.jpg":
/*!**************************************!*\
  !*** ./src/images/sinMascarilla.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c76a6a272961ebeae93.jpg";

/***/ }),

/***/ "./src/images/virus.jpg":
/*!******************************!*\
  !*** ./src/images/virus.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "330e4117a7d7100e266d.jpg";

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doPopUpWelcome": () => (/* binding */ doPopUpWelcome),
/* harmony export */   "doResumeBefore": () => (/* binding */ doResumeBefore)
/* harmony export */ });
/* harmony import */ var _tableMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableMain.js */ "./src/tableMain.js");
/* harmony import */ var _gameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController.js */ "./src/gameController.js");



const main = document.querySelector(".main");

function doPopUpWelcome() {
    let overlayWelcome = document.createElement("div"),
        popUpWelcome = document.createElement("div"),
        contenedorTitlePopup = document.createElement("div"),
        contenedorInputsPopups = document.createElement("div");

    let userName = document.createElement("input"),
        titleForm = document.createElement("h1"),
        btnAdd = document.createElement("input");

    titleForm.textContent = "What´s your name?";
    userName.placeholder = "Your name";
    userName.type = "text";
    btnAdd.value = "Add";
    btnAdd.type = "button";
    btnAdd.classList.add("btnAdd");

    overlayWelcome.classList.add("overlayWelcome");
    popUpWelcome.classList.add("popupWelcome");
    contenedorTitlePopup.classList.add("contenedorTitlePopup");
    contenedorInputsPopups.classList.add("contenedorInputsPopups");

    contenedorTitlePopup.appendChild(titleForm);
    contenedorInputsPopups.append(userName, btnAdd);
    popUpWelcome.append(contenedorTitlePopup, contenedorInputsPopups);
    overlayWelcome.appendChild(popUpWelcome);
    main.appendChild(overlayWelcome);

    (0,_tableMain_js__WEBPACK_IMPORTED_MODULE_0__.addPlayer)(btnAdd, userName, overlayWelcome);
}

function doResumeBefore(user, health, overlay) {
    let contenedorResumen = document.createElement("div"),
        spanTitle = document.createElement("span"),
        titleResumen = document.createElement("h1"),
        spanHealth = document.createElement("span"),
        healthResumen = document.createElement("h3"),
        contenedorObjetivo = document.createElement("div"),
        contenedorTitleObjetivo = document.createElement("div"),
        contenedorPObjetivo = document.createElement("div"),
        titleObjetivo = document.createElement("h4"),
        pObjetivo = document.createElement("p"),
        btnObjetivo = document.createElement("input");

    contenedorResumen.classList.add("popupWelcome", "contenedorResumen");
    contenedorObjetivo.classList.add("contenedorObjetivo");
    contenedorTitleObjetivo.classList.add(
        "contenedorTitleObjetivo",
        "objetivo"
    );
    contenedorPObjetivo.classList.add("contenedorPObjetivo", "objetivo");
    btnObjetivo.classList.add("btnObjetivo");

    titleResumen.textContent = "Hi " + user + "!";
    healthResumen.textContent = "Health:            " + health;
    titleObjetivo.textContent = "Goal:";
    pObjetivo.textContent =
        "Choose the best option between the 2 images to be presented and in the end I will tell you if you will survive or not";
    btnObjetivo.type = "button";
    btnObjetivo.value = "Ok!";

    spanTitle.appendChild(titleResumen);
    spanHealth.appendChild(healthResumen);
    contenedorTitleObjetivo.appendChild(titleObjetivo);
    contenedorPObjetivo.appendChild(pObjetivo);
    contenedorObjetivo.append(contenedorTitleObjetivo, contenedorPObjetivo);

    contenedorResumen.append(
        spanTitle,
        spanHealth,
        contenedorObjetivo,
        btnObjetivo
    );
    overlay.appendChild(contenedorResumen);

    (0,_gameController_js__WEBPACK_IMPORTED_MODULE_1__.startGame)(btnObjetivo, main);
}

function doResumeAfter() {}




/***/ }),

/***/ "./src/tableMain.js":
/*!**************************!*\
  !*** ./src/tableMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doTable": () => (/* binding */ doTable),
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer),
/* harmony export */   "addPlayer": () => (/* binding */ addPlayer)
/* harmony export */ });
/* harmony import */ var _gameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController.js */ "./src/gameController.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");



const main = document.querySelector(".main");

function doTable() {
    let divContenedorTable = document.createElement("div"),
        itemOne = document.createElement("div"),
        itemTwo = document.createElement("div");

    divContenedorTable.classList.add("contenedorTable");
    itemOne.classList.add("divItemOne", "game");
    itemTwo.classList.add("divItemTwo", "game");

    divContenedorTable.append(itemOne, itemTwo);
    main.appendChild(divContenedorTable);
}

function createPlayer(user) {
    this.user = user;
    this.health = 1000;
}

function addPlayer(btn, user, overlay) {
    btn.addEventListener("click", () => {
        let player = new createPlayer(user.value);
        overlay.removeChild(overlay.childNodes[0]);
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.doResumeBefore)(player.user, player.health, overlay);
        (0,_gameController_js__WEBPACK_IMPORTED_MODULE_0__.setElements)(player);
    });
}




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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.constructor)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lamFtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy90YWJsZU1haW4uanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lamFtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWVqYW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWVqYW0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYW1lamFtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZWphbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWVqYW0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLCtDQUErQyxtQkFBbUIsa0JBQWtCLEtBQUssZUFBZSxpQ0FBaUMsMkJBQTJCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLEtBQUssY0FBYyx5QkFBeUIsMkJBQTJCLEtBQUssWUFBWSx5QkFBeUIsc0JBQXNCLHNDQUFzQyx5QkFBeUIsS0FBSyxTQUFTLDJCQUEyQixLQUFLLDJDQUEyQyx3QkFBd0Isb0JBQW9CLHNCQUFzQix3Q0FBd0MsOEJBQThCLDJCQUEyQixLQUFLLDBCQUEwQiwwQkFBMEIsd0JBQXdCLEtBQUssZ0NBQWdDLCtCQUErQixrQ0FBa0MsS0FBSyw2QkFBNkIsOEJBQThCLDhCQUE4QixLQUFLLCtCQUErQixnQ0FBZ0MseUJBQXlCLEtBQUssa0RBQWtELG9CQUFvQixzQkFBc0IseUNBQXlDLHNCQUFzQixLQUFLLDJDQUEyQyxrQ0FBa0MsMkJBQTJCLGtCQUFrQixv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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBOztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SWdCO0FBQ047O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQWM7QUFDbEI7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVvQjtBQUNLOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHdEQUFTO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUFTO0FBQ2I7O0FBRUE7O0FBRTBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZRO0FBQ047O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFjO0FBQ3RCLFFBQVEsK0RBQVc7QUFDbkIsS0FBSztBQUNMOztBQUU0Qzs7Ozs7OztVQ2hDNUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNtQjs7QUFFeEMscURBQVciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzM0MzIzMztcXHJcXG4gICAgLS1jb2xvci1hOiAjZWZlYWUxO1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogIzU4NGI0ZjtcXHJcXG4gICAgLS1lbmZhc2lzLWE6ICM4MWMwOGI7XFxyXFxuICAgIC0tYm94LWdhbWU6ICNmZmQxNTI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIgaDEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvckhlYWRlciBoMTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9ySGVhZGVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lbmZhc2lzLWEpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUYWJsYSBkZSBKdWVnbyAqL1xcclxcbi5jb250ZW5lZG9yVGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbi5jb250ZW5lZG9yRm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWFlMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGNvbG9yOiAjNTc0YzRmO1xcclxcbn1cXHJcXG4uY29udGVuZWRvckZvb3RlciBhIHtcXHJcXG4gICAgY29sb3I6ICM1NzRjNGY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JGb290ZXIgYTpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbnNwYW4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRmx1am8gZGUganVlZ28gKi9cXHJcXG4uZ2FtZSB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBtYXJnaW46IDMwcHggYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWdhbWUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lQm94IHtcXHJcXG4gICAgbWFyZ2luOiA1NXB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEdldCB1c2VyIG5hbWUgKi9cXHJcXG5cXHJcXG4ub3ZlcmxheVdlbGNvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcclxcbn1cXHJcXG4ub3ZlcmxheVdlbGNvbWUuYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwV2VsY29tZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICAgb3BhY2l0eTogMDsgICovXFxyXFxufVxcclxcbi5wb3B1cFdlbGNvbWUgaDEge1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxyXFxufVxcclxcbi5wb3B1cFdlbGNvbWUgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5wb3B1cFdlbGNvbWUuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bkFkZDpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yT2JqZXRpdm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4ub2JqZXRpdm8ge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yUmVzdW1lbiBpbnB1dDpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yUmVzdW1lbiB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yUmVzdW1lbiBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUEsV0FBVztBQUNYO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2I7O21CQUVlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzM0MzIzMztcXHJcXG4gICAgLS1jb2xvci1hOiAjZWZlYWUxO1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogIzU4NGI0ZjtcXHJcXG4gICAgLS1lbmZhc2lzLWE6ICM4MWMwOGI7XFxyXFxuICAgIC0tYm94LWdhbWU6ICNmZmQxNTI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIgaDEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvckhlYWRlciBoMTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9ySGVhZGVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lbmZhc2lzLWEpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUYWJsYSBkZSBKdWVnbyAqL1xcclxcbi5jb250ZW5lZG9yVGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbi5jb250ZW5lZG9yRm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWFlMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGNvbG9yOiAjNTc0YzRmO1xcclxcbn1cXHJcXG4uY29udGVuZWRvckZvb3RlciBhIHtcXHJcXG4gICAgY29sb3I6ICM1NzRjNGY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JGb290ZXIgYTpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbnNwYW4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRmx1am8gZGUganVlZ28gKi9cXHJcXG4uZ2FtZSB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBtYXJnaW46IDMwcHggYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWdhbWUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lQm94IHtcXHJcXG4gICAgbWFyZ2luOiA1NXB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEdldCB1c2VyIG5hbWUgKi9cXHJcXG5cXHJcXG4ub3ZlcmxheVdlbGNvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcclxcbn1cXHJcXG4ub3ZlcmxheVdlbGNvbWUuYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwV2VsY29tZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICAgb3BhY2l0eTogMDsgICovXFxyXFxufVxcclxcbi5wb3B1cFdlbGNvbWUgaDEge1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxyXFxufVxcclxcbi5wb3B1cFdlbGNvbWUgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5wb3B1cFdlbGNvbWUuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bkFkZDpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yT2JqZXRpdm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4ub2JqZXRpdm8ge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yUmVzdW1lbiBpbnB1dDpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYSk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yUmVzdW1lbiB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yUmVzdW1lbiBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkaXN0YW5jaWEgZnJvbSBcIi4vaW1hZ2VzL2Rpc3RhbmNpYS5qcGdcIjtcclxuaW1wb3J0IGFnbG9tZXJhY2lvbiBmcm9tIFwiLi9pbWFnZXMvYWdsb21lcmFjaW9uZXMuanBnXCI7XHJcbmltcG9ydCBjaGF0YXJyYSBmcm9tIFwiLi9pbWFnZXMvY2hhdGFycmFGb29kLmpwZ1wiO1xyXG5pbXBvcnQgbWFub3MgZnJvbSBcIi4vaW1hZ2VzL21hbm9zLmpwZ1wiO1xyXG5pbXBvcnQgbWFzY2FyaWxsYSBmcm9tIFwiLi9pbWFnZXMvbWFzY2FyaWxsYS5qcGdcIjtcclxuaW1wb3J0IHNhbHVkYWJsZSBmcm9tIFwiLi9pbWFnZXMvc2FsdWRhYmxlRm9vZC5qcGdcIjtcclxuaW1wb3J0IHNpbk1hY2FyaWxsYSBmcm9tIFwiLi9pbWFnZXMvc2luTWFzY2FyaWxsYS5qcGdcIjtcclxuaW1wb3J0IHZpcnVzIGZyb20gXCIuL2ltYWdlcy92aXJ1cy5qcGdcIjtcclxuaW1wb3J0IHsgZG9UYWJsZSB9IGZyb20gXCIuL3RhYmxlTWFpbi5qc1wiO1xyXG5cclxubGV0IGdvb2RQcmFjdGljZXMgPSB7XHJcbiAgICAxOiB7IGltYWdlbjogZGlzdGFuY2lhLCBmcmFzZTogXCJNYW50ZW5lciBEaXN0YW5jaWFcIiB9LFxyXG4gICAgMjogeyBpbWFnZW46IG1hbm9zLCBmcmFzZTogXCJMYXZhcnNlIGxhcyBNYW5vc1wiIH0sXHJcbiAgICAzOiB7IGltYWdlbjogbWFzY2FyaWxsYSwgZnJhc2U6IFwiVXNhciBtYXNjYXJpbGxhXCIgfSxcclxuICAgIDQ6IHsgaW1hZ2VuOiBzYWx1ZGFibGUsIGZyYXNlOiBcIkNvbWVyIHNhbHVkYWJsZVwiIH0sXHJcbn07XHJcblxyXG5sZXQgYmFkUHJhY3RpY2VzID0ge1xyXG4gICAgMTogeyBpbWFnZW46IGFnbG9tZXJhY2lvbiwgZnJhc2U6IFwiRXN0YXIgdG9kb3MgdW5pZG9zXCIgfSxcclxuICAgIDI6IHsgaW1hZ2VuOiB2aXJ1cywgZnJhc2U6IFwiQ292aWQgLSAxOVwiIH0sXHJcbiAgICAzOiB7IGltYWdlbjogc2luTWFjYXJpbGxhLCBmcmFzZTogXCJObyB1c2FyIG1hc2NhcmlsbGFcIiB9LFxyXG4gICAgNDogeyBpbWFnZW46IGNoYXRhcnJhLCBmcmFzZTogXCJDb21pZGEgQ2hhdGFycmFcIiB9LFxyXG59O1xyXG5cclxuLy9UT0RPOiBIYWNlciB0aXR1bG9zIGRlIGNhZGEgaW1hZ2VuIHBhcmEgcXVlIGVsIG5pw7FvIGhhZ2Egc3UgZWxlY2Npw7NuXHJcblxyXG5mdW5jdGlvbiBnZXRXaW5uZXIocGxheWVyKSB7XHJcbiAgICBsZXQgaXRlbU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGl2SXRlbU9uZVwiKSxcclxuICAgICAgICBpdGVtVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXZJdGVtVHdvXCIpO1xyXG5cclxuICAgIGxldCBpbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxyXG4gICAgICAgIGltZ1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXHJcbiAgICAgICAgZGl2SW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBkaXZJbWdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHRpdGxlSW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpLFxyXG4gICAgICAgIHRpdGxlSW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5cclxuICAgIGRpdkltZ09uZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJveFwiKTtcclxuICAgIGRpdkltZ1R3by5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJveFwiKTtcclxuXHJcbiAgICB0aXRsZUltZ09uZS50ZXh0Q29udGVudCA9IGdvb2RQcmFjdGljZXNbMV0uZnJhc2U7XHJcbiAgICB0aXRsZUltZ1R3by50ZXh0Q29udGVudCA9IGJhZFByYWN0aWNlc1sxXS5mcmFzZTtcclxuXHJcbiAgICBpbWdPbmUuYWx0ID0gXCJFc3RhIGVzIHVuYSBidWVuYSBpbWFnZW5cIjtcclxuICAgIGltZ09uZS5zcmMgPSBnb29kUHJhY3RpY2VzWzFdLmltYWdlbjtcclxuICAgIGRpdkltZ09uZS5hcHBlbmQodGl0bGVJbWdPbmUsIGltZ09uZSk7XHJcbiAgICBpdGVtT25lLmFwcGVuZENoaWxkKGRpdkltZ09uZSk7XHJcblxyXG4gICAgaW1nVHdvLmFsdCA9IFwiRXN0YSBlcyB1bmEgbWFsYSBpbWFnZW5cIjtcclxuICAgIGltZ1R3by5zcmMgPSBiYWRQcmFjdGljZXNbMV0uaW1hZ2VuO1xyXG4gICAgZGl2SW1nVHdvLmFwcGVuZCh0aXRsZUltZ1R3bywgaW1nVHdvKTtcclxuICAgIGl0ZW1Ud28uYXBwZW5kQ2hpbGQoZGl2SW1nVHdvKTtcclxuXHJcbiAgICBsZXQgY29udCA9IDI7XHJcblxyXG4gICAgZXZlbnRvc0VzY3VjaGFJdGVtcyhcclxuICAgICAgICBpdGVtT25lLFxyXG4gICAgICAgIGNvbnQsXHJcbiAgICAgICAgaW1nT25lLFxyXG4gICAgICAgIHRpdGxlSW1nT25lLFxyXG4gICAgICAgIGltZ1R3byxcclxuICAgICAgICB0aXRsZUltZ1R3byxcclxuICAgICAgICBwbGF5ZXIsXHJcbiAgICAgICAgaXRlbVR3b1xyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnRvc0VzY3VjaGFJdGVtcyhcclxuICAgIGl0ZW1Vbm8sXHJcbiAgICBjb250LFxyXG4gICAgaW1hZ2VuVW5vLFxyXG4gICAgdGl0bGVVbm8sXHJcbiAgICBpbWFnZW5Eb3MsXHJcbiAgICB0aXRsZURvcyxcclxuICAgIHBsYXllcixcclxuICAgIGl0ZW1Eb3NcclxuKSB7XHJcbiAgICBpdGVtVW5vLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnQgPT0gMikge1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhpbWFnZW5Vbm8sIDIsIHRpdGxlVW5vLCBwbGF5ZXIsIGltYWdlbkRvcywgdGl0bGVEb3MpO1xyXG4gICAgICAgICAgICBjb250Kys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ID09IDMpIHtcclxuICAgICAgICAgICAgc2V0SXRlbXMoaW1hZ2VuVW5vLCAzLCB0aXRsZVVubywgcGxheWVyLCBpbWFnZW5Eb3MsIHRpdGxlRG9zKTtcclxuICAgICAgICAgICAgY29udCsrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1zKGltYWdlblVubywgNCwgdGl0bGVVbm8sIHBsYXllciwgaW1hZ2VuRG9zLCB0aXRsZURvcyk7XHJcbiAgICAgICAgICAgIGNvbnQrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhpbWFnZW5Vbm8sIDEsIHRpdGxlVW5vLCBwbGF5ZXIsIGltYWdlbkRvcywgdGl0bGVEb3MpO1xyXG4gICAgICAgICAgICBjb250ID0gMjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdGVtRG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnQgPT0gMikge1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhpbWFnZW5Vbm8sIDIsIHRpdGxlVW5vLCBwbGF5ZXIsIGltYWdlbkRvcywgdGl0bGVEb3MsIDgwMCk7XHJcbiAgICAgICAgICAgIGNvbnQrKztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnQgPT0gMykge1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhpbWFnZW5Vbm8sIDMsIHRpdGxlVW5vLCBwbGF5ZXIsIGltYWdlbkRvcywgdGl0bGVEb3MsIDM1MCk7XHJcbiAgICAgICAgICAgIGNvbnQrKztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnQgPT0gNCkge1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhpbWFnZW5Vbm8sIDQsIHRpdGxlVW5vLCBwbGF5ZXIsIGltYWdlbkRvcywgdGl0bGVEb3MsIDE1MCk7XHJcbiAgICAgICAgICAgIGNvbnQrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJdGVtcyhpbWFnZW5Vbm8sIDEsIHRpdGxlVW5vLCBwbGF5ZXIsIGltYWdlbkRvcywgdGl0bGVEb3MsIDYwMCk7XHJcbiAgICAgICAgICAgIGNvbnQgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJdGVtcyhcclxuICAgIGltYWdlblVubyxcclxuICAgIG51bWJlcixcclxuICAgIHRpdGxlVW5vLFxyXG4gICAgcGxheWVyLFxyXG4gICAgaW1hZ2VuRG9zLFxyXG4gICAgdGl0bGVEb3MsXHJcbiAgICBkYW1hZ2UgPSAwXHJcbikge1xyXG4gICAgaW1hZ2VuVW5vLmFsdCA9IFwiRXN0YSBlcyB1bmEgYnVlbmEgaW1hZ2VuXCI7XHJcbiAgICBpbWFnZW5Vbm8uc3JjID0gZ29vZFByYWN0aWNlc1tudW1iZXJdLmltYWdlbjtcclxuICAgIHRpdGxlVW5vLnRleHRDb250ZW50ID0gZ29vZFByYWN0aWNlc1tudW1iZXJdLmZyYXNlO1xyXG4gICAgaW1hZ2VuRG9zLmFsdCA9IFwiRXN0YSBlcyB1bmEgbWFsYSBpbWFnZW5cIjtcclxuICAgIGltYWdlbkRvcy5zcmMgPSBiYWRQcmFjdGljZXNbbnVtYmVyXS5pbWFnZW47XHJcbiAgICB0aXRsZURvcy50ZXh0Q29udGVudCA9IGJhZFByYWN0aWNlc1tudW1iZXJdLmZyYXNlO1xyXG4gICAgcGxheWVyLmhlYWx0aCAtPSBkYW1hZ2U7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuaGVhbHRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKGJ0biwgbWFpbikge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmNoaWxkTm9kZXNbMV0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVsZW1lbnRzKHBsYXllcikge1xyXG4gICAgZG9UYWJsZSgpO1xyXG4gICAgZ2V0V2lubmVyKHBsYXllcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEVsZW1lbnRzLCBzdGFydEdhbWUgfTtcclxuIiwiaW1wb3J0IHsgc2V0RWxlbWVudHMgfSBmcm9tIFwiLi9nYW1lQ29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkb1BvcFVwV2VsY29tZSB9IGZyb20gXCIuL3BvcHVwLmpzXCI7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gZG9NZW51KCkge1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXHJcbiAgICAgICAgaXRlbU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICBpdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLFxyXG4gICAgICAgIGl0ZW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICByZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgIHJlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXHJcbiAgICAgICAgcmVUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIHJlT25lLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICByZU9uZS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vTGVuaW5uZXIvZ2FtZUphbVwiO1xyXG4gICAgcmVUd28udGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIHJlVHdvLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sZW5pbi1tYXphYmFuZGEtMTM3MGI0MWIyL1wiO1xyXG4gICAgcmVUaHJlZS50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgcmVUaHJlZS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vTGVuaW5uZXIvZ2FtZUphbS9ibG9iL21haW4vUkVBRE1FLm1kXCI7XHJcblxyXG4gICAgcmVPbmUudGV4dENvbnRlbnQgPSBcIlJlcG9cIjtcclxuICAgIHJlVHdvLnRleHRDb250ZW50ID0gXCJMaW5rZWRJblwiO1xyXG4gICAgcmVUaHJlZS50ZXh0Q29udGVudCA9IFwiSG93IHRvIHBsYXk/XCI7XHJcblxyXG4gICAgaXRlbU9uZS5hcHBlbmRDaGlsZChyZU9uZSk7XHJcbiAgICBpdGVtVHdvLmFwcGVuZENoaWxkKHJlVHdvKTtcclxuICAgIGl0ZW1UaHJlZS5hcHBlbmRDaGlsZChyZVRocmVlKTtcclxuICAgIG1lbnUuYXBwZW5kKGl0ZW1PbmUsIGl0ZW1Ud28sIGl0ZW1UaHJlZSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvSGVhZGVyKCkge1xyXG4gICAgbGV0IGRpdkNvbnRlbmVkb3JIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICAgIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9IFwiR2FtZSBKYW1cIjtcclxuXHJcbiAgICBkaXZDb250ZW5lZG9ySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW5lZG9ySGVhZGVyXCIpO1xyXG5cclxuICAgIGRpdkNvbnRlbmVkb3JIZWFkZXIuYXBwZW5kKHRpdGxlSGVhZGVyLCBkb01lbnUoKSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkNvbnRlbmVkb3JIZWFkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb0Zvb3RlcigpIHtcclxuICAgIGxldCBkaXZDb250ZW5lZG9yRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBzcGFuRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXHJcbiAgICAgICAgdGl0bGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gICAgdGl0bGVGb290ZXIudGV4dENvbnRlbnQgPSBcIkRldmVsb3BlZCBieSBMZW5pbm5lclwiO1xyXG5cclxuICAgIGRpdkNvbnRlbmVkb3JGb290ZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JGb290ZXJcIik7XHJcblxyXG4gICAgc3BhbkZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZUZvb3Rlcik7XHJcbiAgICBkaXZDb250ZW5lZG9yRm9vdGVyLmFwcGVuZChzcGFuRm9vdGVyLCBkb01lbnUoKSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkNvbnRlbmVkb3JGb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGRvSGVhZGVyKCk7XHJcbiAgICBkb1BvcFVwV2VsY29tZSgpO1xyXG4gICAgZG9Gb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29uc3RydWN0b3IgfTtcclxuIiwiaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSBcIi4vdGFibGVNYWluLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVDb250cm9sbGVyLmpzXCI7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gZG9Qb3BVcFdlbGNvbWUoKSB7XHJcbiAgICBsZXQgb3ZlcmxheVdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHBvcFVwV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY29udGVuZWRvclRpdGxlUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIGNvbnRlbmVkb3JJbnB1dHNQb3B1cHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcclxuICAgICAgICB0aXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXHJcbiAgICAgICAgYnRuQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuICAgIHRpdGxlRm9ybS50ZXh0Q29udGVudCA9IFwiV2hhdMK0cyB5b3VyIG5hbWU/XCI7XHJcbiAgICB1c2VyTmFtZS5wbGFjZWhvbGRlciA9IFwiWW91ciBuYW1lXCI7XHJcbiAgICB1c2VyTmFtZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBidG5BZGQudmFsdWUgPSBcIkFkZFwiO1xyXG4gICAgYnRuQWRkLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoXCJidG5BZGRcIik7XHJcblxyXG4gICAgb3ZlcmxheVdlbGNvbWUuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlXZWxjb21lXCIpO1xyXG4gICAgcG9wVXBXZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFdlbGNvbWVcIik7XHJcbiAgICBjb250ZW5lZG9yVGl0bGVQb3B1cC5jbGFzc0xpc3QuYWRkKFwiY29udGVuZWRvclRpdGxlUG9wdXBcIik7XHJcbiAgICBjb250ZW5lZG9ySW5wdXRzUG9wdXBzLmNsYXNzTGlzdC5hZGQoXCJjb250ZW5lZG9ySW5wdXRzUG9wdXBzXCIpO1xyXG5cclxuICAgIGNvbnRlbmVkb3JUaXRsZVBvcHVwLmFwcGVuZENoaWxkKHRpdGxlRm9ybSk7XHJcbiAgICBjb250ZW5lZG9ySW5wdXRzUG9wdXBzLmFwcGVuZCh1c2VyTmFtZSwgYnRuQWRkKTtcclxuICAgIHBvcFVwV2VsY29tZS5hcHBlbmQoY29udGVuZWRvclRpdGxlUG9wdXAsIGNvbnRlbmVkb3JJbnB1dHNQb3B1cHMpO1xyXG4gICAgb3ZlcmxheVdlbGNvbWUuYXBwZW5kQ2hpbGQocG9wVXBXZWxjb21lKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQob3ZlcmxheVdlbGNvbWUpO1xyXG5cclxuICAgIGFkZFBsYXllcihidG5BZGQsIHVzZXJOYW1lLCBvdmVybGF5V2VsY29tZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvUmVzdW1lQmVmb3JlKHVzZXIsIGhlYWx0aCwgb3ZlcmxheSkge1xyXG4gICAgbGV0IGNvbnRlbmVkb3JSZXN1bWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcclxuICAgICAgICB0aXRsZVJlc3VtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXHJcbiAgICAgICAgc3BhbkhlYWx0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLFxyXG4gICAgICAgIGhlYWx0aFJlc3VtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIiksXHJcbiAgICAgICAgY29udGVuZWRvck9iamV0aXZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBjb250ZW5lZG9yVGl0bGVPYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY29udGVuZWRvclBPYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgdGl0bGVPYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKSxcclxuICAgICAgICBwT2JqZXRpdm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSxcclxuICAgICAgICBidG5PYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICBjb250ZW5lZG9yUmVzdW1lbi5jbGFzc0xpc3QuYWRkKFwicG9wdXBXZWxjb21lXCIsIFwiY29udGVuZWRvclJlc3VtZW5cIik7XHJcbiAgICBjb250ZW5lZG9yT2JqZXRpdm8uY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JPYmpldGl2b1wiKTtcclxuICAgIGNvbnRlbmVkb3JUaXRsZU9iamV0aXZvLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgXCJjb250ZW5lZG9yVGl0bGVPYmpldGl2b1wiLFxyXG4gICAgICAgIFwib2JqZXRpdm9cIlxyXG4gICAgKTtcclxuICAgIGNvbnRlbmVkb3JQT2JqZXRpdm8uY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JQT2JqZXRpdm9cIiwgXCJvYmpldGl2b1wiKTtcclxuICAgIGJ0bk9iamV0aXZvLmNsYXNzTGlzdC5hZGQoXCJidG5PYmpldGl2b1wiKTtcclxuXHJcbiAgICB0aXRsZVJlc3VtZW4udGV4dENvbnRlbnQgPSBcIkhpIFwiICsgdXNlciArIFwiIVwiO1xyXG4gICAgaGVhbHRoUmVzdW1lbi50ZXh0Q29udGVudCA9IFwiSGVhbHRoOiAgICAgICAgICAgIFwiICsgaGVhbHRoO1xyXG4gICAgdGl0bGVPYmpldGl2by50ZXh0Q29udGVudCA9IFwiR29hbDpcIjtcclxuICAgIHBPYmpldGl2by50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgXCJDaG9vc2UgdGhlIGJlc3Qgb3B0aW9uIGJldHdlZW4gdGhlIDIgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBhbmQgaW4gdGhlIGVuZCBJIHdpbGwgdGVsbCB5b3UgaWYgeW91IHdpbGwgc3Vydml2ZSBvciBub3RcIjtcclxuICAgIGJ0bk9iamV0aXZvLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgYnRuT2JqZXRpdm8udmFsdWUgPSBcIk9rIVwiO1xyXG5cclxuICAgIHNwYW5UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVJlc3VtZW4pO1xyXG4gICAgc3BhbkhlYWx0aC5hcHBlbmRDaGlsZChoZWFsdGhSZXN1bWVuKTtcclxuICAgIGNvbnRlbmVkb3JUaXRsZU9iamV0aXZvLmFwcGVuZENoaWxkKHRpdGxlT2JqZXRpdm8pO1xyXG4gICAgY29udGVuZWRvclBPYmpldGl2by5hcHBlbmRDaGlsZChwT2JqZXRpdm8pO1xyXG4gICAgY29udGVuZWRvck9iamV0aXZvLmFwcGVuZChjb250ZW5lZG9yVGl0bGVPYmpldGl2bywgY29udGVuZWRvclBPYmpldGl2byk7XHJcblxyXG4gICAgY29udGVuZWRvclJlc3VtZW4uYXBwZW5kKFxyXG4gICAgICAgIHNwYW5UaXRsZSxcclxuICAgICAgICBzcGFuSGVhbHRoLFxyXG4gICAgICAgIGNvbnRlbmVkb3JPYmpldGl2byxcclxuICAgICAgICBidG5PYmpldGl2b1xyXG4gICAgKTtcclxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY29udGVuZWRvclJlc3VtZW4pO1xyXG5cclxuICAgIHN0YXJ0R2FtZShidG5PYmpldGl2bywgbWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvUmVzdW1lQWZ0ZXIoKSB7fVxyXG5cclxuZXhwb3J0IHsgZG9Qb3BVcFdlbGNvbWUsIGRvUmVzdW1lQmVmb3JlIH07XHJcbiIsImltcG9ydCB7IHNldEVsZW1lbnRzIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IHsgZG9SZXN1bWVCZWZvcmUgfSBmcm9tIFwiLi9wb3B1cC5qc1wiO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuXHJcbmZ1bmN0aW9uIGRvVGFibGUoKSB7XHJcbiAgICBsZXQgZGl2Q29udGVuZWRvclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBpdGVtT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBpdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBkaXZDb250ZW5lZG9yVGFibGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JUYWJsZVwiKTtcclxuICAgIGl0ZW1PbmUuY2xhc3NMaXN0LmFkZChcImRpdkl0ZW1PbmVcIiwgXCJnYW1lXCIpO1xyXG4gICAgaXRlbVR3by5jbGFzc0xpc3QuYWRkKFwiZGl2SXRlbVR3b1wiLCBcImdhbWVcIik7XHJcblxyXG4gICAgZGl2Q29udGVuZWRvclRhYmxlLmFwcGVuZChpdGVtT25lLCBpdGVtVHdvKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2Q29udGVuZWRvclRhYmxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHVzZXIpIHtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBsYXllcihidG4sIHVzZXIsIG92ZXJsYXkpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgY3JlYXRlUGxheWVyKHVzZXIudmFsdWUpO1xyXG4gICAgICAgIG92ZXJsYXkucmVtb3ZlQ2hpbGQob3ZlcmxheS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICBkb1Jlc3VtZUJlZm9yZShwbGF5ZXIudXNlciwgcGxheWVyLmhlYWx0aCwgb3ZlcmxheSk7XHJcbiAgICAgICAgc2V0RWxlbWVudHMocGxheWVyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBkb1RhYmxlLCBjcmVhdGVQbGF5ZXIsIGFkZFBsYXllciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbnN0cnVjdG9yIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5cclxuY29uc3RydWN0b3IoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==