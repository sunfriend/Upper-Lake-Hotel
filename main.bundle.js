/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background-hero.jpg */ "./src/assets/images/background-hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: #1e81b0;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav .logo img {\n  max-width: 50%;\n}\nnav .hamburger-menu {\n  font-size: 2.6rem;\n  color: #eeeee4;\n  cursor: pointer;\n  position: relative;\n  z-index: 1500;\n}\nnav .hamburger-menu .fa-times {\n  display: none;\n}\nnav .nav-list {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 200%;\n  width: 100%;\n  height: 100vh;\n  background: rgba(30, 129, 176, 0.5);\n  color: #eeeee4;\n  align-items: center;\n  justify-content: center;\n  z-index: 1400;\n  transition: all 0.5s;\n}\nnav .nav-list .nav-item .nav-link {\n  position: relative;\n  display: block;\n  color: #eeeee4;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\nnav .nav-list .nav-item .nav-link::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background-color: #eeeee4;\n  transition: width 0.5s ease;\n}\nnav .nav-list .nav-item .nav-link:hover::before {\n  width: 100%;\n}\nnav .nav-list .nav-item:not(:last-child) {\n  margin-bottom: 2rem;\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu .fa-times {\n  display: block;\n}\n.menu-open .hamburger-menu .fa-bars {\n  display: none;\n}\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n}\n.hero div {\n  margin-bottom: 9rem;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n  opacity: 0.2;\n  background-color: #eeeee4;\n  z-index: -1;\n}\n.hero .main-heading {\n  position: relative;\n  color: #fff;\n  text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n}\n.hero .main-heading .title .substitude {\n  top: 4rem;\n  bottom: -4rem;\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin-top: 1rem;\n  display: inline-block;\n  font-size: 2.5rem;\n  font-family: \"Courgette\", sans-serif;\n  text-shadow: 1px 1px black;\n  letter-spacing: 0.5rem;\n  text-transform: lowercase;\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.3rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background-image: linear-gradient(#abdbe3, #1e81b0);\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n  /*   &:hover {\n      background-image: $btn-gradient-hover;\n    } */\n}\n.btn-gradient::before {\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  background-image: #76b5c5;\n  z-index: -1;\n  transition: all 0.4s ease-in-out;\n}\n.btn-gradient:hover::before {\n  background-color: #1e81b0;\n  color: black;\n  width: 100%;\n  opacity: 0.85;\n}\n\n.icon {\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  opacity: 0.85;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n.booking {\n  background-image: linear-gradient(#abdbe3, #1e81b0);\n}\n.booking .input-group {\n  margin-bottom: 1.5rem;\n}\n.booking .input-group .input-label {\n  display: block;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.booking .input-group .input, .booking .input-group .options {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0.5rem;\n  min-height: 4rem;\n  font-weight: bold;\n  color: #e5e5e5;\n  letter-spacing: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  /* resize: none; */\n}\n.booking .form-btn {\n  position: absolute;\n  margin-top: 1rem;\n  cursor: pointer;\n  background-color: #76b5c5;\n  z-index: 1;\n}\n.booking .form-btn .fa-solid {\n  transition: transform 1s ease;\n}\n.booking .form-btn:hover {\n  background-color: #1e81b0;\n  box-shadow: 0px 0px 2px #fff;\n}\n.booking .form-btn:hover .fa-solid {\n  transform: rotateY(180deg);\n}\n\n/*Variables*/\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.6rem;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/main.scss","webpack://./src/styles/hero.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\nheader {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: $eastern-blue;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  .logo img{\n    max-width: 50%;\n  }\n  .hamburger-menu {\n    font-size: 2.6rem;\n    color: $green-white;\n    cursor: pointer;\n    position: relative;\n    z-index: 1500;\n  }\n\n  .hamburger-menu .fa-times {\n    display: none;\n  }\n\n  .nav-list {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 200%;\n    width: 100%;\n    height: 100vh;\n    background: rgba($eastern-blue, 0.5);\n    color: $green-white;\n    align-items: center;\n    justify-content: center;\n    z-index: 1400;\n    transition: all 0.5s;\n    \n    .nav-item {\n      .nav-link {\n        position: relative;\n        display: block;\n        color: $green-white;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        padding: 1rem;\n        font-weight: $nav-list-font-weight;\n        transition: all 0.2s;\n        &::before {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 1px;\n          background-color: $green-white;\n          transition: width 0.5s ease;\n        }\n        &:hover::before {\n          width: 100%;\n        }\n      }\n\n      &:not(:last-child) {\n        margin-bottom: 2rem;\n      }\n    }\n  }\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu {\n  .fa-times {\n    display: block;\n  }\n  .fa-bars {\n    display: none;\n  }\n}","$eastern-blue: #1e81b0;\n$powder-blue: #abdbe3;\n$green-white: #eeeee4;\n$burnt-sienna: #e28743;\n$tacao: #eab676;\n$glacier: #76b5c5;\n$eternity: #21130d;\n$burnt-umber: #873e23;\n$catalina-blue: #063970;\n$chathams-blue: #154c79;\n$bg-gradient: linear-gradient(#abdbe3, #1e81b0);\n$btn-gradient-hover: linear-gradient(#1e81b0, #abdbe3);","@import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap');\n@import \"header.scss\";\n@import \"hero.scss\";\n@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\n/*Variables*/\n$body-font-size: 1.6rem;\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: $body-font-size;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}\n\n","@import \"./colors.scss\";\n\n$label-font-size: 1.3rem;\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(\"../assets/images/background-hero.jpg\") center no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n\n  div {\n    margin-bottom: 9rem;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: inherit;\n    height: inherit;\n    opacity: 0.2;\n    background-color: $green-white;\n    z-index: -1;\n  }\n\n  .main-heading {\n    position: relative;\n    color: #fff;\n    text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n    margin-bottom: 0.5rem;\n    text-transform: uppercase;\n      .title {\n        .substitude {\n            top: 4rem;\n            bottom: -4rem;\n            left: 0;\n            right: 0;\n            position: absolute;\n            margin-top: 1rem;\n            display: inline-block;\n            font-size: 2.5rem;\n            font-family: \"Courgette\", sans-serif;\n            text-shadow: 1px 1px black;\n            letter-spacing: 0.5rem;\n            text-transform: lowercase;\n        }\n    }\n  }\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.3rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background-image: $bg-gradient;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n/*   &:hover {\n    background-image: $btn-gradient-hover;\n  } */\n  &::before {\n    content: \"\";\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 0;\n    position: absolute;\n    background-image: $glacier;\n    z-index: -1;\n    transition: all 0.4s ease-in-out;\n  }\n  &:hover::before {\n    background-color: $eastern-blue;\n    color: black;\n    width: 100%;\n    opacity: 0.85;\n  }\n}\n\n.icon {\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  opacity: 0.85;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n//Booking\n\n.booking {\n  background-image: $bg-gradient;\n  .input-group {\n    margin-bottom: 1.5rem;\n\n    .input-label {\n      display: block;\n      font-size: $label-font-size;\n      text-transform: uppercase;\n      color:#fff;\n      font-weight: bold;\n      margin-bottom: 0.5rem;\n    }\n    .input, .options {\n      outline: none;\n      border: none;\n      width: 100%;\n      padding: 0.5rem;\n      min-height: 4rem;\n      font-weight: bold;\n      color: #e5e5e5;\n      letter-spacing: 2px;\n      font-family: \"Open Sans\", sans-serif;\n      /* resize: none; */\n    }\n  }\n\n  .form-btn {\n    $circle-element: 4rem;\n    position: absolute;\n    margin-top: 1rem;\n    cursor: pointer;\n    background-color: $glacier;\n    z-index: 1;\n    .fa-solid {\n      transition: transform 1s ease;\n    }\n      &:hover {\n        background-color: $eastern-blue;\n        box-shadow: 0px 0px 2px #fff;\n        .fa-solid {\n          transform: rotateY(180deg);\n        }\n      }\n    }\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  } // For old IE

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

/***/ "./src/assets/images/background-hero.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/background-hero.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1828032a45cea483cbbb.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

var header = document.querySelector("header");
var hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", toggleMenu);
function toggleMenu() {
    header.classList.toggle('menu-open');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFV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Q0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7QUNyQjRCO0FBRzVCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTlELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFcEQsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWhlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvdXJnZXR0ZXxPcGVuK1NhbnM6NDAwLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTgxYjA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5uYXYgLmxvZ28gaW1nIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5uYXYgLmhhbWJ1cmdlci1tZW51IHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgY29sb3I6ICNlZWVlZTQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxNTAwO1xcbn1cXG5uYXYgLmhhbWJ1cmdlci1tZW51IC5mYS10aW1lcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5uYXYgLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDEyOSwgMTc2LCAwLjUpO1xcbiAgY29sb3I6ICNlZWVlZTQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcbm5hdiAubmF2LWxpc3QgLm5hdi1pdGVtIC5uYXYtbGluayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZWVlZWU0O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5uYXYgLm5hdi1saXN0IC5uYXYtaXRlbSAubmF2LWxpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlNDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXG59XFxubmF2IC5uYXYtbGlzdCAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm5hdiAubmF2LWxpc3QgLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1lbnUtb3BlbiAubmF2LWxpc3Qge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1lbnUtb3BlbiAuaGFtYnVyZ2VyLW1lbnUgLmZhLXRpbWVzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWVudS1vcGVuIC5oYW1idXJnZXItbWVudSAuZmEtYmFycyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uaGVybyBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogOXJlbTtcXG59XFxuLmhlcm86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTQ7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmhlcm8gLm1haW4taGVhZGluZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmhlcm8gLm1haW4taGVhZGluZyAudGl0bGUgLnN1YnN0aXR1ZGUge1xcbiAgdG9wOiA0cmVtO1xcbiAgYm90dG9tOiAtNHJlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxufVxcblxcbi5idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAyLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2FiZGJlMywgIzFlODFiMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgLyogICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYnRuLWdyYWRpZW50LWhvdmVyO1xcbiAgICB9ICovXFxufVxcbi5idG4tZ3JhZGllbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICM3NmI1YzU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuLWdyYWRpZW50OmhvdmVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODFiMDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5tYWluLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcbn1cXG5cXG4uYm9va2luZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2FiZGJlMywgIzFlODFiMCk7XFxufVxcbi5ib29raW5nIC5pbnB1dC1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5ib29raW5nIC5pbnB1dC1ncm91cCAuaW5wdXQtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uYm9va2luZyAuaW5wdXQtZ3JvdXAgLmlucHV0LCAuYm9va2luZyAuaW5wdXQtZ3JvdXAgLm9wdGlvbnMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNlNWU1ZTU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLyogcmVzaXplOiBub25lOyAqL1xcbn1cXG4uYm9va2luZyAuZm9ybS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmI1YzU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYm9va2luZyAuZm9ybS1idG4gLmZhLXNvbGlkIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG4uYm9va2luZyAuZm9ybS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODFiMDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmY7XFxufVxcbi5ib29raW5nIC5mb3JtLWJ0bjpob3ZlciAuZmEtc29saWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi8qVmFyaWFibGVzKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypHbG9iYWwgc2l6ZSovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZXJvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkNSYTtFRFNiLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBRUZGOztBRktBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUVGRjtBRkdFO0VBQ0UsY0FBQTtBRURKO0FGR0U7RUFDRSxpQkFBQTtFQUNBLGNDdkJVO0VEd0JWLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUVESjtBRklFO0VBQ0UsYUFBQTtBRUZKO0FGS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0MxQ1U7RUQyQ1YsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRUhKO0FGTU07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQ3BETTtFRHFETix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQXhEZTtFQXlEZixvQkFBQTtBRUpSO0FGS1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJDakVJO0VEa0VKLDJCQUFBO0FFSFY7QUZLUTtFQUNFLFdBQUE7QUVIVjtBRk9NO0VBQ0UsbUJBQUE7QUVMUjs7QUZXQTtFQUNFLE9BQUE7QUVSRjs7QUZZRTtFQUNFLGNBQUE7QUVUSjtBRldFO0VBQ0UsYUFBQTtBRVRKOztBQzlFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEaUZGO0FDL0VFO0VBQ0UsbUJBQUE7QURpRko7QUM5RUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRnpCVTtFRTBCVixXQUFBO0FEZ0ZKO0FDN0VFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FEK0VKO0FDN0VRO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUQrRVo7O0FDekVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FENEVGOztBQ3pFQTtFQUNFLG1ERjVEWTtFRTZEWixzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Y7O09BQUE7QUQ4RUE7QUMzRUU7RUFDRSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJGaEZNO0VFaUZOLFdBQUE7RUFDQSxnQ0FBQTtBRDZFSjtBQzNFRTtFQUNFLHlCRjFGVztFRTJGWCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUQ2RUo7O0FDekVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRDRFRjs7QUN6RUE7RUFDRSxnQkFBQTtBRDRFRjs7QUN2RUE7RUFDRSxtREZwR1k7QUM4S2Q7QUN6RUU7RUFDRSxxQkFBQTtBRDJFSjtBQ3pFSTtFQUNFLGNBQUE7RUFDQSxpQkFsSFk7RUFtSFoseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBRDJFTjtBQ3pFSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBRDJFTjtBQ3ZFRTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJGeElNO0VFeUlOLFVBQUE7QUR3RUo7QUN2RUk7RUFDRSw2QkFBQTtBRHlFTjtBQ3ZFTTtFQUNFLHlCRm5KTztFRW9KUCw0QkFBQTtBRHlFUjtBQ3hFUTtFQUNFLDBCQUFBO0FEMEVWOztBQXpOQSxZQUFBO0FBR0E7OztFQUdJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUEwTko7O0FBdk5BLGNBQUE7QUFDQTtFQUNFLGVBQUE7QUEwTkY7O0FBdk5BO0VBQ0Usb0NBQUE7RUFDQSxpQkFqQmU7QUEyT2pCOztBQXZOQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQTBORjs7QUF2TkE7RUFDRSxnQkFBQTtBQTBORjs7QUF2TkE7RUFDRSxlQUFBO0FBME5GOztBQXZOQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTBORlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJjb2xvcnMuc2Nzc1xcXCI7XFxuXFxuJG5hdi1saXN0LWZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRlYXN0ZXJuLWJsdWU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLmxvZ28gaW1ne1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5oYW1idXJnZXItbWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICBjb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTUwMDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItbWVudSAuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDIwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRlYXN0ZXJuLWJsdWUsIDAuNSk7XFxuICAgIGNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgXFxuICAgIC5uYXYtaXRlbSB7XFxuICAgICAgLm5hdi1saW5rIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgY29sb3I6ICRncmVlbi13aGl0ZTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkbmF2LWxpc3QtZm9udC13ZWlnaHQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1lbnUtb3BlbiAubmF2LWxpc3Qge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1lbnUtb3BlbiAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgLmZhLXRpbWVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuZmEtYmFycyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLFwiJGVhc3Rlcm4tYmx1ZTogIzFlODFiMDtcXG4kcG93ZGVyLWJsdWU6ICNhYmRiZTM7XFxuJGdyZWVuLXdoaXRlOiAjZWVlZWU0O1xcbiRidXJudC1zaWVubmE6ICNlMjg3NDM7XFxuJHRhY2FvOiAjZWFiNjc2O1xcbiRnbGFjaWVyOiAjNzZiNWM1O1xcbiRldGVybml0eTogIzIxMTMwZDtcXG4kYnVybnQtdW1iZXI6ICM4NzNlMjM7XFxuJGNhdGFsaW5hLWJsdWU6ICMwNjM5NzA7XFxuJGNoYXRoYW1zLWJsdWU6ICMxNTRjNzk7XFxuJGJnLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoI2FiZGJlMywgIzFlODFiMCk7XFxuJGJ0bi1ncmFkaWVudC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMxZTgxYjAsICNhYmRiZTMpO1wiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3VyZ2V0dGV8T3BlbitTYW5zOjQwMCw4MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCBcXFwiaGVhZGVyLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcImhlcm8uc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiY29sb3JzLnNjc3NcXFwiO1xcblxcbiRuYXYtbGlzdC1mb250LXdlaWdodDogNjAwO1xcblxcbi8qVmFyaWFibGVzKi9cXG4kYm9keS1mb250LXNpemU6IDEuNnJlbTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypHbG9iYWwgc2l6ZSovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAkYm9keS1mb250LXNpemU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5cIixcIkBpbXBvcnQgXFxcIi4vY29sb3JzLnNjc3NcXFwiO1xcblxcbiRsYWJlbC1mb250LXNpemU6IDEuM3JlbTtcXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1oZXJvLmpwZ1xcXCIpIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOXJlbTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcblxcbiAgLm1haW4taGVhZGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgLnRpdGxlIHtcXG4gICAgICAgIC5zdWJzdGl0dWRlIHtcXG4gICAgICAgICAgICB0b3A6IDRyZW07XFxuICAgICAgICAgICAgYm90dG9tOiAtNHJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAyLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctZ3JhZGllbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbi8qICAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRidG4tZ3JhZGllbnQtaG92ZXI7XFxuICB9ICovXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRnbGFjaWVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICAmOmhvdmVyOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgfVxcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLm1haW4tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxufVxcblxcbi8vQm9va2luZ1xcblxcbi5ib29raW5nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1ncmFkaWVudDtcXG4gIC5pbnB1dC1ncm91cCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG5cXG4gICAgLmlucHV0LWxhYmVsIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmb250LXNpemU6ICRsYWJlbC1mb250LXNpemU7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBjb2xvcjojZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgfVxcbiAgICAuaW5wdXQsIC5vcHRpb25zIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgbWluLWhlaWdodDogNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjb2xvcjogI2U1ZTVlNTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAvKiByZXNpemU6IG5vbmU7ICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC5mb3JtLWJ0biB7XFxuICAgICRjaXJjbGUtZWxlbWVudDogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnbGFjaWVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAuZmEtc29saWQge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZjtcXG4gICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuXG5cbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xubGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpO1xuXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51KTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==