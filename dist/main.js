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
    const itemOne = document.querySelector(".divItemOne"),
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

    eventosEscuchaItemOne(
        itemOne,
        cont,
        imgOne,
        titleImgOne,
        imgTwo,
        titleImgTwo,
        player
    );
    eventosEscuchaItemTwo(
        itemTwo,
        cont,
        imgOne,
        titleImgOne,
        imgTwo,
        titleImgTwo,
        player
    );
}

function eventosEscuchaItemOne(
    item,
    cont,
    imagenUno,
    titleUno,
    imagenDos,
    titleDos,
    player
) {
    item.addEventListener("click", () => {
        if (cont == 2) {
            setItemOne(imagenUno, 2, titleUno, player);
            setItemTwo(imagenDos, 2, titleDos, player);
        } else if (cont == 3) {
            setItemOne(imagenUno, 3, titleUno, player);
            setItemTwo(imagenDos, 3, titleDos, player);
        } else if (cont == 4) {
            setItemOne(imagenUno, 4, titleUno, player);
            setItemTwo(imagenDos, 4, titleDos, player);
        } else {
            setItemOne(imagenUno, 1, titleUno, player);
            setItemTwo(imagenDos, 1, titleDos, player);
            cont = 2;
        }

        cont += 1;
    });
}

function eventosEscuchaItemTwo(
    item,
    cont,
    imagenUno,
    titleUno,
    imagenDos,
    titleDos,
    player
) {
    item.addEventListener("click", () => {
        if (cont == 2) {
            setItemOne(imagenUno, 2, titleUno, player);
            setItemTwo(imagenDos, 2, titleDos, player, 1000);
        } else if (cont == 3) {
            setItemOne(imagenUno, 3, titleUno, player);
            setItemTwo(imagenDos, 3, titleDos, player, 350);
        } else if (cont == 4) {
            setItemOne(imagenUno, 4, titleUno, player);
            setItemTwo(imagenDos, 4, titleDos, player, 200);
        } else {
            setItemOne(imagenUno, 1, titleUno, player);
            setItemTwo(imagenDos, 1, titleDos, player, 600);
            cont = 2;
        }
        cont += 1;
    });
}

function setItemOne(image, number, title, player) {
    image.alt = "Esta es una buena imagen";
    image.src = goodPractices[number].imagen;
    title.textContent = goodPractices[number].frase;
    console.log(player.health);
}

function setItemTwo(image, number, title, player, damage = 0) {
    image.alt = "Esta es una mala imagen";
    image.src = badPractices[number].imagen;
    title.textContent = badPractices[number].frase;
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
    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            let player = new createPlayer(user.value);
            overlay.removeChild(overlay.childNodes[0]);
            (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.doResumeBefore)(player.user, player.health, overlay, player);
            (0,_gameController_js__WEBPACK_IMPORTED_MODULE_0__.setElements)(player);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lamFtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lamFtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2dhbWVqYW0vLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy90YWJsZU1haW4uanMiLCJ3ZWJwYWNrOi8vZ2FtZWphbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lamFtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWVqYW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWVqYW0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYW1lamFtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZWphbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWVqYW0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FtZWphbS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLCtDQUErQyxtQkFBbUIsa0JBQWtCLEtBQUssZUFBZSxpQ0FBaUMsMkJBQTJCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLEtBQUssY0FBYyx5QkFBeUIsMkJBQTJCLEtBQUssWUFBWSx5QkFBeUIsc0JBQXNCLHNDQUFzQyx5QkFBeUIsS0FBSyxTQUFTLDJCQUEyQixLQUFLLDJDQUEyQyx3QkFBd0Isb0JBQW9CLHNCQUFzQix3Q0FBd0MsOEJBQThCLDJCQUEyQixLQUFLLDBCQUEwQiwwQkFBMEIsd0JBQXdCLEtBQUssZ0NBQWdDLCtCQUErQixrQ0FBa0MsS0FBSyw2QkFBNkIsOEJBQThCLDhCQUE4QixLQUFLLCtCQUErQixnQ0FBZ0MseUJBQXlCLEtBQUssa0RBQWtELG9CQUFvQixzQkFBc0IseUNBQXlDLHNCQUFzQixLQUFLLDJDQUEyQyxrQ0FBa0MsMkJBQTJCLGtCQUFrQixv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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHNEQUFPO0FBQ1g7QUFDQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpnQjtBQUNOOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFjO0FBQ2xCO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFb0I7QUFDSzs7QUFFaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx3REFBUztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBUztBQUNiOztBQUVBOztBQUUwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGUTtBQUNOOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYztBQUN0QixRQUFRLCtEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWM7QUFDMUIsWUFBWSwrREFBVztBQUN2QjtBQUNBLEtBQUs7QUFDTDs7QUFFNEM7Ozs7Ozs7VUN4QzVDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDbUI7O0FBRXhDLHFEQUFXIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tYmctY29sb3I6ICMzNDMyMzM7XFxyXFxuICAgIC0tY29sb3ItYTogI2VmZWFlMTtcXHJcXG4gICAgLS1oZWFkZXItY29sb3I6ICM1ODRiNGY7XFxyXFxuICAgIC0tZW5mYXNpcy1hOiAjODFjMDhiO1xcclxcbiAgICAtLWJveC1nYW1lOiAjZmZkMTUyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbi5jb250ZW5lZG9ySGVhZGVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ySGVhZGVyIGgxIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIgaDE6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvckhlYWRlciBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ySGVhZGVyIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZW5mYXNpcy1hKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGEgZGUgSnVlZ28gKi9cXHJcXG4uY29udGVuZWRvclRhYmxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG4uY29udGVuZWRvckZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVhZTE7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBjb2xvcjogIzU3NGM0ZjtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JGb290ZXIgYSB7XFxyXFxuICAgIGNvbG9yOiAjNTc0YzRmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9yRm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5zcGFuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEZsdWpvIGRlIGp1ZWdvICovXFxyXFxuLmdhbWUge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1nYW1lKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZUJveCB7XFxyXFxuICAgIG1hcmdpbjogNTVweCBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZXQgdXNlciBuYW1lICovXFxyXFxuXFxyXFxuLm92ZXJsYXlXZWxjb21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg5KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuLm92ZXJsYXlXZWxjb21lLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFdlbGNvbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDUwcHg7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIC8qIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG4gICAgIG9wYWNpdHk6IDA7ICAqL1xcclxcbn1cXHJcXG4ucG9wdXBXZWxjb21lIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcclxcbn1cXHJcXG4ucG9wdXBXZWxjb21lIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4ucG9wdXBXZWxjb21lLmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5idG5BZGQ6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvck9iamV0aXZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuLm9iamV0aXZvIHtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvclJlc3VtZW4gaW5wdXQ6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvclJlc3VtZW4ge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvclJlc3VtZW4gcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDhDQUE4QztJQUM5QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiOzttQkFFZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tYmctY29sb3I6ICMzNDMyMzM7XFxyXFxuICAgIC0tY29sb3ItYTogI2VmZWFlMTtcXHJcXG4gICAgLS1oZWFkZXItY29sb3I6ICM1ODRiNGY7XFxyXFxuICAgIC0tZW5mYXNpcy1hOiAjODFjMDhiO1xcclxcbiAgICAtLWJveC1nYW1lOiAjZmZkMTUyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbi5jb250ZW5lZG9ySGVhZGVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ySGVhZGVyIGgxIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JIZWFkZXIgaDE6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvckhlYWRlciBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ySGVhZGVyIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZW5mYXNpcy1hKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGEgZGUgSnVlZ28gKi9cXHJcXG4uY29udGVuZWRvclRhYmxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG4uY29udGVuZWRvckZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVhZTE7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBjb2xvcjogIzU3NGM0ZjtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3JGb290ZXIgYSB7XFxyXFxuICAgIGNvbG9yOiAjNTc0YzRmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW5lZG9yRm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5zcGFuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEZsdWpvIGRlIGp1ZWdvICovXFxyXFxuLmdhbWUge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1nYW1lKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZUJveCB7XFxyXFxuICAgIG1hcmdpbjogNTVweCBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZXQgdXNlciBuYW1lICovXFxyXFxuXFxyXFxuLm92ZXJsYXlXZWxjb21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg5KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuLm92ZXJsYXlXZWxjb21lLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFdlbGNvbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDUwcHg7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIC8qIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG4gICAgIG9wYWNpdHk6IDA7ICAqL1xcclxcbn1cXHJcXG4ucG9wdXBXZWxjb21lIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcclxcbn1cXHJcXG4ucG9wdXBXZWxjb21lIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4ucG9wdXBXZWxjb21lLmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5idG5BZGQ6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvck9iamV0aXZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuLm9iamV0aXZvIHtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvclJlc3VtZW4gaW5wdXQ6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWEpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvclJlc3VtZW4ge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVuZWRvclJlc3VtZW4gcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZGlzdGFuY2lhIGZyb20gXCIuL2ltYWdlcy9kaXN0YW5jaWEuanBnXCI7XHJcbmltcG9ydCBhZ2xvbWVyYWNpb24gZnJvbSBcIi4vaW1hZ2VzL2FnbG9tZXJhY2lvbmVzLmpwZ1wiO1xyXG5pbXBvcnQgY2hhdGFycmEgZnJvbSBcIi4vaW1hZ2VzL2NoYXRhcnJhRm9vZC5qcGdcIjtcclxuaW1wb3J0IG1hbm9zIGZyb20gXCIuL2ltYWdlcy9tYW5vcy5qcGdcIjtcclxuaW1wb3J0IG1hc2NhcmlsbGEgZnJvbSBcIi4vaW1hZ2VzL21hc2NhcmlsbGEuanBnXCI7XHJcbmltcG9ydCBzYWx1ZGFibGUgZnJvbSBcIi4vaW1hZ2VzL3NhbHVkYWJsZUZvb2QuanBnXCI7XHJcbmltcG9ydCBzaW5NYWNhcmlsbGEgZnJvbSBcIi4vaW1hZ2VzL3Npbk1hc2NhcmlsbGEuanBnXCI7XHJcbmltcG9ydCB2aXJ1cyBmcm9tIFwiLi9pbWFnZXMvdmlydXMuanBnXCI7XHJcbmltcG9ydCB7IGRvVGFibGUgfSBmcm9tIFwiLi90YWJsZU1haW4uanNcIjtcclxuXHJcbmxldCBnb29kUHJhY3RpY2VzID0ge1xyXG4gICAgMTogeyBpbWFnZW46IGRpc3RhbmNpYSwgZnJhc2U6IFwiTWFudGVuZXIgRGlzdGFuY2lhXCIgfSxcclxuICAgIDI6IHsgaW1hZ2VuOiBtYW5vcywgZnJhc2U6IFwiTGF2YXJzZSBsYXMgTWFub3NcIiB9LFxyXG4gICAgMzogeyBpbWFnZW46IG1hc2NhcmlsbGEsIGZyYXNlOiBcIlVzYXIgbWFzY2FyaWxsYVwiIH0sXHJcbiAgICA0OiB7IGltYWdlbjogc2FsdWRhYmxlLCBmcmFzZTogXCJDb21lciBzYWx1ZGFibGVcIiB9LFxyXG59O1xyXG5cclxubGV0IGJhZFByYWN0aWNlcyA9IHtcclxuICAgIDE6IHsgaW1hZ2VuOiBhZ2xvbWVyYWNpb24sIGZyYXNlOiBcIkVzdGFyIHRvZG9zIHVuaWRvc1wiIH0sXHJcbiAgICAyOiB7IGltYWdlbjogdmlydXMsIGZyYXNlOiBcIkNvdmlkIC0gMTlcIiB9LFxyXG4gICAgMzogeyBpbWFnZW46IHNpbk1hY2FyaWxsYSwgZnJhc2U6IFwiTm8gdXNhciBtYXNjYXJpbGxhXCIgfSxcclxuICAgIDQ6IHsgaW1hZ2VuOiBjaGF0YXJyYSwgZnJhc2U6IFwiQ29taWRhIENoYXRhcnJhXCIgfSxcclxufTtcclxuXHJcbi8vVE9ETzogSGFjZXIgdGl0dWxvcyBkZSBjYWRhIGltYWdlbiBwYXJhIHF1ZSBlbCBuacOxbyBoYWdhIHN1IGVsZWNjacOzblxyXG5cclxuZnVuY3Rpb24gZ2V0V2lubmVyKHBsYXllcikge1xyXG4gICAgY29uc3QgaXRlbU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGl2SXRlbU9uZVwiKSxcclxuICAgICAgICBpdGVtVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXZJdGVtVHdvXCIpO1xyXG5cclxuICAgIGxldCBpbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxyXG4gICAgICAgIGltZ1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXHJcbiAgICAgICAgZGl2SW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBkaXZJbWdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHRpdGxlSW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpLFxyXG4gICAgICAgIHRpdGxlSW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5cclxuICAgIGRpdkltZ09uZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJveFwiKTtcclxuICAgIGRpdkltZ1R3by5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJveFwiKTtcclxuXHJcbiAgICB0aXRsZUltZ09uZS50ZXh0Q29udGVudCA9IGdvb2RQcmFjdGljZXNbMV0uZnJhc2U7XHJcbiAgICB0aXRsZUltZ1R3by50ZXh0Q29udGVudCA9IGJhZFByYWN0aWNlc1sxXS5mcmFzZTtcclxuXHJcbiAgICBpbWdPbmUuYWx0ID0gXCJFc3RhIGVzIHVuYSBidWVuYSBpbWFnZW5cIjtcclxuICAgIGltZ09uZS5zcmMgPSBnb29kUHJhY3RpY2VzWzFdLmltYWdlbjtcclxuICAgIGRpdkltZ09uZS5hcHBlbmQodGl0bGVJbWdPbmUsIGltZ09uZSk7XHJcbiAgICBpdGVtT25lLmFwcGVuZENoaWxkKGRpdkltZ09uZSk7XHJcblxyXG4gICAgaW1nVHdvLmFsdCA9IFwiRXN0YSBlcyB1bmEgbWFsYSBpbWFnZW5cIjtcclxuICAgIGltZ1R3by5zcmMgPSBiYWRQcmFjdGljZXNbMV0uaW1hZ2VuO1xyXG4gICAgZGl2SW1nVHdvLmFwcGVuZCh0aXRsZUltZ1R3bywgaW1nVHdvKTtcclxuICAgIGl0ZW1Ud28uYXBwZW5kQ2hpbGQoZGl2SW1nVHdvKTtcclxuXHJcbiAgICBsZXQgY29udCA9IDI7XHJcblxyXG4gICAgZXZlbnRvc0VzY3VjaGFJdGVtT25lKFxyXG4gICAgICAgIGl0ZW1PbmUsXHJcbiAgICAgICAgY29udCxcclxuICAgICAgICBpbWdPbmUsXHJcbiAgICAgICAgdGl0bGVJbWdPbmUsXHJcbiAgICAgICAgaW1nVHdvLFxyXG4gICAgICAgIHRpdGxlSW1nVHdvLFxyXG4gICAgICAgIHBsYXllclxyXG4gICAgKTtcclxuICAgIGV2ZW50b3NFc2N1Y2hhSXRlbVR3byhcclxuICAgICAgICBpdGVtVHdvLFxyXG4gICAgICAgIGNvbnQsXHJcbiAgICAgICAgaW1nT25lLFxyXG4gICAgICAgIHRpdGxlSW1nT25lLFxyXG4gICAgICAgIGltZ1R3byxcclxuICAgICAgICB0aXRsZUltZ1R3byxcclxuICAgICAgICBwbGF5ZXJcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50b3NFc2N1Y2hhSXRlbU9uZShcclxuICAgIGl0ZW0sXHJcbiAgICBjb250LFxyXG4gICAgaW1hZ2VuVW5vLFxyXG4gICAgdGl0bGVVbm8sXHJcbiAgICBpbWFnZW5Eb3MsXHJcbiAgICB0aXRsZURvcyxcclxuICAgIHBsYXllclxyXG4pIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoY29udCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1PbmUoaW1hZ2VuVW5vLCAyLCB0aXRsZVVubywgcGxheWVyKTtcclxuICAgICAgICAgICAgc2V0SXRlbVR3byhpbWFnZW5Eb3MsIDIsIHRpdGxlRG9zLCBwbGF5ZXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1PbmUoaW1hZ2VuVW5vLCAzLCB0aXRsZVVubywgcGxheWVyKTtcclxuICAgICAgICAgICAgc2V0SXRlbVR3byhpbWFnZW5Eb3MsIDMsIHRpdGxlRG9zLCBwbGF5ZXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1PbmUoaW1hZ2VuVW5vLCA0LCB0aXRsZVVubywgcGxheWVyKTtcclxuICAgICAgICAgICAgc2V0SXRlbVR3byhpbWFnZW5Eb3MsIDQsIHRpdGxlRG9zLCBwbGF5ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1PbmUoaW1hZ2VuVW5vLCAxLCB0aXRsZVVubywgcGxheWVyKTtcclxuICAgICAgICAgICAgc2V0SXRlbVR3byhpbWFnZW5Eb3MsIDEsIHRpdGxlRG9zLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgICBjb250ID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnQgKz0gMTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudG9zRXNjdWNoYUl0ZW1Ud28oXHJcbiAgICBpdGVtLFxyXG4gICAgY29udCxcclxuICAgIGltYWdlblVubyxcclxuICAgIHRpdGxlVW5vLFxyXG4gICAgaW1hZ2VuRG9zLFxyXG4gICAgdGl0bGVEb3MsXHJcbiAgICBwbGF5ZXJcclxuKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnQgPT0gMikge1xyXG4gICAgICAgICAgICBzZXRJdGVtT25lKGltYWdlblVubywgMiwgdGl0bGVVbm8sIHBsYXllcik7XHJcbiAgICAgICAgICAgIHNldEl0ZW1Ud28oaW1hZ2VuRG9zLCAyLCB0aXRsZURvcywgcGxheWVyLCAxMDAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnQgPT0gMykge1xyXG4gICAgICAgICAgICBzZXRJdGVtT25lKGltYWdlblVubywgMywgdGl0bGVVbm8sIHBsYXllcik7XHJcbiAgICAgICAgICAgIHNldEl0ZW1Ud28oaW1hZ2VuRG9zLCAzLCB0aXRsZURvcywgcGxheWVyLCAzNTApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1PbmUoaW1hZ2VuVW5vLCA0LCB0aXRsZVVubywgcGxheWVyKTtcclxuICAgICAgICAgICAgc2V0SXRlbVR3byhpbWFnZW5Eb3MsIDQsIHRpdGxlRG9zLCBwbGF5ZXIsIDIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXRlbU9uZShpbWFnZW5Vbm8sIDEsIHRpdGxlVW5vLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgICBzZXRJdGVtVHdvKGltYWdlbkRvcywgMSwgdGl0bGVEb3MsIHBsYXllciwgNjAwKTtcclxuICAgICAgICAgICAgY29udCA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnQgKz0gMTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJdGVtT25lKGltYWdlLCBudW1iZXIsIHRpdGxlLCBwbGF5ZXIpIHtcclxuICAgIGltYWdlLmFsdCA9IFwiRXN0YSBlcyB1bmEgYnVlbmEgaW1hZ2VuXCI7XHJcbiAgICBpbWFnZS5zcmMgPSBnb29kUHJhY3RpY2VzW251bWJlcl0uaW1hZ2VuO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBnb29kUHJhY3RpY2VzW251bWJlcl0uZnJhc2U7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuaGVhbHRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SXRlbVR3byhpbWFnZSwgbnVtYmVyLCB0aXRsZSwgcGxheWVyLCBkYW1hZ2UgPSAwKSB7XHJcbiAgICBpbWFnZS5hbHQgPSBcIkVzdGEgZXMgdW5hIG1hbGEgaW1hZ2VuXCI7XHJcbiAgICBpbWFnZS5zcmMgPSBiYWRQcmFjdGljZXNbbnVtYmVyXS5pbWFnZW47XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGJhZFByYWN0aWNlc1tudW1iZXJdLmZyYXNlO1xyXG4gICAgcGxheWVyLmhlYWx0aCAtPSBkYW1hZ2U7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuaGVhbHRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKGJ0biwgbWFpbikge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmNoaWxkTm9kZXNbMV0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVsZW1lbnRzKHBsYXllcikge1xyXG4gICAgZG9UYWJsZSgpO1xyXG4gICAgZ2V0V2lubmVyKHBsYXllcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEVsZW1lbnRzLCBzdGFydEdhbWUgfTtcclxuIiwiaW1wb3J0IHsgc2V0RWxlbWVudHMgfSBmcm9tIFwiLi9nYW1lQ29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkb1BvcFVwV2VsY29tZSB9IGZyb20gXCIuL3BvcHVwLmpzXCI7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gZG9NZW51KCkge1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXHJcbiAgICAgICAgaXRlbU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICBpdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLFxyXG4gICAgICAgIGl0ZW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcclxuICAgICAgICByZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgIHJlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXHJcbiAgICAgICAgcmVUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIHJlT25lLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICByZU9uZS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vTGVuaW5uZXIvZ2FtZUphbVwiO1xyXG4gICAgcmVUd28udGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIHJlVHdvLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sZW5pbi1tYXphYmFuZGEtMTM3MGI0MWIyL1wiO1xyXG4gICAgcmVUaHJlZS50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgcmVUaHJlZS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vTGVuaW5uZXIvZ2FtZUphbS9ibG9iL21haW4vUkVBRE1FLm1kXCI7XHJcblxyXG4gICAgcmVPbmUudGV4dENvbnRlbnQgPSBcIlJlcG9cIjtcclxuICAgIHJlVHdvLnRleHRDb250ZW50ID0gXCJMaW5rZWRJblwiO1xyXG4gICAgcmVUaHJlZS50ZXh0Q29udGVudCA9IFwiSG93IHRvIHBsYXk/XCI7XHJcblxyXG4gICAgaXRlbU9uZS5hcHBlbmRDaGlsZChyZU9uZSk7XHJcbiAgICBpdGVtVHdvLmFwcGVuZENoaWxkKHJlVHdvKTtcclxuICAgIGl0ZW1UaHJlZS5hcHBlbmRDaGlsZChyZVRocmVlKTtcclxuICAgIG1lbnUuYXBwZW5kKGl0ZW1PbmUsIGl0ZW1Ud28sIGl0ZW1UaHJlZSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvSGVhZGVyKCkge1xyXG4gICAgbGV0IGRpdkNvbnRlbmVkb3JIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICAgIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9IFwiR2FtZSBKYW1cIjtcclxuXHJcbiAgICBkaXZDb250ZW5lZG9ySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW5lZG9ySGVhZGVyXCIpO1xyXG5cclxuICAgIGRpdkNvbnRlbmVkb3JIZWFkZXIuYXBwZW5kKHRpdGxlSGVhZGVyLCBkb01lbnUoKSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkNvbnRlbmVkb3JIZWFkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb0Zvb3RlcigpIHtcclxuICAgIGxldCBkaXZDb250ZW5lZG9yRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBzcGFuRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXHJcbiAgICAgICAgdGl0bGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gICAgdGl0bGVGb290ZXIudGV4dENvbnRlbnQgPSBcIkRldmVsb3BlZCBieSBMZW5pbm5lclwiO1xyXG5cclxuICAgIGRpdkNvbnRlbmVkb3JGb290ZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JGb290ZXJcIik7XHJcblxyXG4gICAgc3BhbkZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZUZvb3Rlcik7XHJcbiAgICBkaXZDb250ZW5lZG9yRm9vdGVyLmFwcGVuZChzcGFuRm9vdGVyLCBkb01lbnUoKSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkNvbnRlbmVkb3JGb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGRvSGVhZGVyKCk7XHJcbiAgICBkb1BvcFVwV2VsY29tZSgpO1xyXG4gICAgZG9Gb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29uc3RydWN0b3IgfTtcclxuIiwiaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSBcIi4vdGFibGVNYWluLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVDb250cm9sbGVyLmpzXCI7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gZG9Qb3BVcFdlbGNvbWUoKSB7XHJcbiAgICBsZXQgb3ZlcmxheVdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHBvcFVwV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY29udGVuZWRvclRpdGxlUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIGNvbnRlbmVkb3JJbnB1dHNQb3B1cHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcclxuICAgICAgICB0aXRsZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXHJcbiAgICAgICAgYnRuQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuICAgIHRpdGxlRm9ybS50ZXh0Q29udGVudCA9IFwiV2hhdMK0cyB5b3VyIG5hbWU/XCI7XHJcbiAgICB1c2VyTmFtZS5wbGFjZWhvbGRlciA9IFwiWW91ciBuYW1lXCI7XHJcbiAgICB1c2VyTmFtZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBidG5BZGQudmFsdWUgPSBcIkFkZFwiO1xyXG4gICAgYnRuQWRkLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoXCJidG5BZGRcIik7XHJcblxyXG4gICAgb3ZlcmxheVdlbGNvbWUuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlXZWxjb21lXCIpO1xyXG4gICAgcG9wVXBXZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFdlbGNvbWVcIik7XHJcbiAgICBjb250ZW5lZG9yVGl0bGVQb3B1cC5jbGFzc0xpc3QuYWRkKFwiY29udGVuZWRvclRpdGxlUG9wdXBcIik7XHJcbiAgICBjb250ZW5lZG9ySW5wdXRzUG9wdXBzLmNsYXNzTGlzdC5hZGQoXCJjb250ZW5lZG9ySW5wdXRzUG9wdXBzXCIpO1xyXG5cclxuICAgIGNvbnRlbmVkb3JUaXRsZVBvcHVwLmFwcGVuZENoaWxkKHRpdGxlRm9ybSk7XHJcbiAgICBjb250ZW5lZG9ySW5wdXRzUG9wdXBzLmFwcGVuZCh1c2VyTmFtZSwgYnRuQWRkKTtcclxuICAgIHBvcFVwV2VsY29tZS5hcHBlbmQoY29udGVuZWRvclRpdGxlUG9wdXAsIGNvbnRlbmVkb3JJbnB1dHNQb3B1cHMpO1xyXG4gICAgb3ZlcmxheVdlbGNvbWUuYXBwZW5kQ2hpbGQocG9wVXBXZWxjb21lKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQob3ZlcmxheVdlbGNvbWUpO1xyXG5cclxuICAgIGFkZFBsYXllcihidG5BZGQsIHVzZXJOYW1lLCBvdmVybGF5V2VsY29tZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvUmVzdW1lQmVmb3JlKHVzZXIsIGhlYWx0aCwgb3ZlcmxheSkge1xyXG4gICAgbGV0IGNvbnRlbmVkb3JSZXN1bWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcclxuICAgICAgICB0aXRsZVJlc3VtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXHJcbiAgICAgICAgc3BhbkhlYWx0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLFxyXG4gICAgICAgIGhlYWx0aFJlc3VtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIiksXHJcbiAgICAgICAgY29udGVuZWRvck9iamV0aXZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBjb250ZW5lZG9yVGl0bGVPYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgY29udGVuZWRvclBPYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgdGl0bGVPYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKSxcclxuICAgICAgICBwT2JqZXRpdm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSxcclxuICAgICAgICBidG5PYmpldGl2byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICBjb250ZW5lZG9yUmVzdW1lbi5jbGFzc0xpc3QuYWRkKFwicG9wdXBXZWxjb21lXCIsIFwiY29udGVuZWRvclJlc3VtZW5cIik7XHJcbiAgICBjb250ZW5lZG9yT2JqZXRpdm8uY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JPYmpldGl2b1wiKTtcclxuICAgIGNvbnRlbmVkb3JUaXRsZU9iamV0aXZvLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgXCJjb250ZW5lZG9yVGl0bGVPYmpldGl2b1wiLFxyXG4gICAgICAgIFwib2JqZXRpdm9cIlxyXG4gICAgKTtcclxuICAgIGNvbnRlbmVkb3JQT2JqZXRpdm8uY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JQT2JqZXRpdm9cIiwgXCJvYmpldGl2b1wiKTtcclxuICAgIGJ0bk9iamV0aXZvLmNsYXNzTGlzdC5hZGQoXCJidG5PYmpldGl2b1wiKTtcclxuXHJcbiAgICB0aXRsZVJlc3VtZW4udGV4dENvbnRlbnQgPSBcIkhpIFwiICsgdXNlciArIFwiIVwiO1xyXG4gICAgaGVhbHRoUmVzdW1lbi50ZXh0Q29udGVudCA9IFwiSGVhbHRoOiAgICAgICAgICAgIFwiICsgaGVhbHRoO1xyXG4gICAgdGl0bGVPYmpldGl2by50ZXh0Q29udGVudCA9IFwiR29hbDpcIjtcclxuICAgIHBPYmpldGl2by50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgXCJDaG9vc2UgdGhlIGJlc3Qgb3B0aW9uIGJldHdlZW4gdGhlIDIgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBhbmQgaW4gdGhlIGVuZCBJIHdpbGwgdGVsbCB5b3UgaWYgeW91IHdpbGwgc3Vydml2ZSBvciBub3RcIjtcclxuICAgIGJ0bk9iamV0aXZvLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgYnRuT2JqZXRpdm8udmFsdWUgPSBcIk9rIVwiO1xyXG5cclxuICAgIHNwYW5UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVJlc3VtZW4pO1xyXG4gICAgc3BhbkhlYWx0aC5hcHBlbmRDaGlsZChoZWFsdGhSZXN1bWVuKTtcclxuICAgIGNvbnRlbmVkb3JUaXRsZU9iamV0aXZvLmFwcGVuZENoaWxkKHRpdGxlT2JqZXRpdm8pO1xyXG4gICAgY29udGVuZWRvclBPYmpldGl2by5hcHBlbmRDaGlsZChwT2JqZXRpdm8pO1xyXG4gICAgY29udGVuZWRvck9iamV0aXZvLmFwcGVuZChjb250ZW5lZG9yVGl0bGVPYmpldGl2bywgY29udGVuZWRvclBPYmpldGl2byk7XHJcblxyXG4gICAgY29udGVuZWRvclJlc3VtZW4uYXBwZW5kKFxyXG4gICAgICAgIHNwYW5UaXRsZSxcclxuICAgICAgICBzcGFuSGVhbHRoLFxyXG4gICAgICAgIGNvbnRlbmVkb3JPYmpldGl2byxcclxuICAgICAgICBidG5PYmpldGl2b1xyXG4gICAgKTtcclxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY29udGVuZWRvclJlc3VtZW4pO1xyXG5cclxuICAgIHN0YXJ0R2FtZShidG5PYmpldGl2bywgbWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvUmVzdW1lQWZ0ZXIoKSB7fVxyXG5cclxuZXhwb3J0IHsgZG9Qb3BVcFdlbGNvbWUsIGRvUmVzdW1lQmVmb3JlIH07XHJcbiIsImltcG9ydCB7IHNldEVsZW1lbnRzIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IHsgZG9SZXN1bWVCZWZvcmUgfSBmcm9tIFwiLi9wb3B1cC5qc1wiO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuXHJcbmZ1bmN0aW9uIGRvVGFibGUoKSB7XHJcbiAgICBsZXQgZGl2Q29udGVuZWRvclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBpdGVtT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICBpdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBkaXZDb250ZW5lZG9yVGFibGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbmVkb3JUYWJsZVwiKTtcclxuICAgIGl0ZW1PbmUuY2xhc3NMaXN0LmFkZChcImRpdkl0ZW1PbmVcIiwgXCJnYW1lXCIpO1xyXG4gICAgaXRlbVR3by5jbGFzc0xpc3QuYWRkKFwiZGl2SXRlbVR3b1wiLCBcImdhbWVcIik7XHJcblxyXG4gICAgZGl2Q29udGVuZWRvclRhYmxlLmFwcGVuZChpdGVtT25lLCBpdGVtVHdvKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2Q29udGVuZWRvclRhYmxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHVzZXIpIHtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBsYXllcihidG4sIHVzZXIsIG92ZXJsYXkpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgY3JlYXRlUGxheWVyKHVzZXIudmFsdWUpO1xyXG4gICAgICAgIG92ZXJsYXkucmVtb3ZlQ2hpbGQob3ZlcmxheS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICBkb1Jlc3VtZUJlZm9yZShwbGF5ZXIudXNlciwgcGxheWVyLmhlYWx0aCwgb3ZlcmxheSk7XHJcbiAgICAgICAgc2V0RWxlbWVudHMocGxheWVyKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgY3JlYXRlUGxheWVyKHVzZXIudmFsdWUpO1xyXG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZUNoaWxkKG92ZXJsYXkuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgIGRvUmVzdW1lQmVmb3JlKHBsYXllci51c2VyLCBwbGF5ZXIuaGVhbHRoLCBvdmVybGF5LCBwbGF5ZXIpO1xyXG4gICAgICAgICAgICBzZXRFbGVtZW50cyhwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBkb1RhYmxlLCBjcmVhdGVQbGF5ZXIsIGFkZFBsYXllciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbnN0cnVjdG9yIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5cclxuY29uc3RydWN0b3IoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==