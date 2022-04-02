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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/the_paradise_bg.jpg */ "./src/assets/images/the_paradise_bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: #1e81b0;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav .logo img {\n  position: relative;\n  max-width: 200px;\n  /* background-color: $eastern-blue; */\n  /* border-radius: 50%; */\n  margin-top: 4.5rem;\n}\nnav .hamburger-menu {\n  font-size: 2.6rem;\n  color: #eeeee4;\n  cursor: pointer;\n  position: relative;\n  z-index: 1500;\n}\nnav .hamburger-menu .fa-times {\n  display: none;\n}\nnav .nav-list {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 200%;\n  width: 100%;\n  height: 100vh;\n  background: rgba(30, 129, 176, 0.5);\n  color: #eeeee4;\n  align-items: center;\n  justify-content: center;\n  z-index: 1400;\n  transition: all 0.5s;\n}\nnav .nav-list .nav-item .nav-link {\n  position: relative;\n  display: block;\n  color: #eeeee4;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\nnav .nav-list .nav-item .nav-link::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background-color: #eeeee4;\n  transition: width 0.5s ease;\n}\nnav .nav-list .nav-item .nav-link:hover::before {\n  width: 100%;\n}\nnav .nav-list .nav-item:not(:last-child) {\n  margin-bottom: 2rem;\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu .fa-times {\n  display: block;\n}\n.menu-open .hamburger-menu .fa-bars {\n  display: none;\n}\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n}\n.hero div {\n  margin-bottom: 9rem;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n  opacity: 0.2;\n  background-color: #eeeee4;\n  z-index: -1;\n}\n.hero .main-heading {\n  position: relative;\n  color: #fff;\n  text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n}\n.hero .main-heading .title .substitude {\n  top: 4rem;\n  bottom: -4rem;\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin-top: 1rem;\n  display: inline-block;\n  font-size: 2.5rem;\n  font-family: \"Courgette\", sans-serif;\n  text-shadow: 1px 1px black;\n  letter-spacing: 0.5rem;\n  text-transform: lowercase;\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.8rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background: #1e81b0;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n  /*   &:hover {\n      background-image: $btn-gradient-hover;\n    } */\n}\n.btn-gradient::before {\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  background: linear-gradient(#76b5c5, #abdbe3);\n  z-index: -1;\n  transition: all 0.4s ease-in-out;\n}\n.btn-gradient:hover::before {\n  background: linear-gradient(#76b5c5, #abdbe3);\n  color: black;\n  width: 100%;\n  opacity: 0.85;\n}\n\n.icon {\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  opacity: 0.85;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n.booking {\n  background-image: linear-gradient(#abdbe3, #1e81b0);\n  min-height: 500px;\n}\n.booking .input-group {\n  margin-bottom: 1.5rem;\n}\n.booking .input-group .input-label {\n  display: block;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.booking .input-group .input, .booking .input-group .options {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0.5rem;\n  min-height: 4rem;\n  font-weight: bold;\n  color: #e5e5e5;\n  letter-spacing: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  /* resize: none; */\n}\n.booking .form-btn {\n  position: absolute;\n  margin-top: 1rem;\n  cursor: pointer;\n  background-color: #76b5c5;\n  z-index: 1;\n}\n.booking .form-btn .fa-solid {\n  transition: transform 1s ease;\n}\n.booking .form-btn:hover {\n  background-color: #1e81b0;\n  box-shadow: 0px 0px 2px #fff;\n}\n.booking .form-btn:hover .fa-solid {\n  transform: rotateY(180deg);\n}\n\n.btn .key {\n  margin-left: 0.5rem;\n  position: relative;\n  padding: 1.2rem 0;\n}\n.btn .key i {\n  position: absolute;\n  top: 30%;\n  bottom: 50%;\n  right: -10%;\n  left: 58%;\n  /* transform: translate(95%, -50%); */\n  transition: transform 0.5s ease-in-out;\n}\n.btn .door {\n  margin-left: 0.5rem;\n}\n.btn .door-open {\n  display: none;\n}\n.btn:hover .key i {\n  transform: rotate(45deg);\n}\n.btn:hover .door-closed {\n  display: none;\n}\n.btn:hover .door-open {\n  display: inline;\n}\n\n/* Featured Hotels section styles */\n.section-head {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.heading {\n  display: block;\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n\n.sub-heading {\n  font-size: 1.7rem;\n  font-family: \"Courgette\", cursive;\n  font-weight: 300;\n  color: #a5a5a5;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-gap: 2.5rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.featured-hotels {\n  height: 35rem;\n  color: #fff;\n  padding: 1rem;\n  position: relative;\n  z-index: 0;\n}\n.featured-hotels::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #76b5c5;\n  z-index: -1;\n}\n\n.hotel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.hotel-name {\n  font-size: 2.6rem;\n}\n\n.hotel-price {\n  font-size: 1.8rem;\n}\n\n.hotel-rating {\n  margin: 1rem 0 2.5rem;\n}\n\n.rating {\n  color: #eab676;\n  text-shadow: 0 0 3px black;\n}\n\n/* Special Offer */\n.paragraph .btn.btn-gradient {\n  background: #063970;\n}\n\n.offer {\n  background: linear-gradient(to right, rgba(171, 219, 227, 0.8), rgba(30, 129, 176, 0.8)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") bottom center no-repeat;\n  background-size: cover;\n}\n\n/*Variables*/\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.6rem;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/main.scss","webpack://./src/styles/hero.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\nheader {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: $eastern-blue;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  .logo img{\n    position: relative;\n    max-width: 200px;\n    /* background-color: $eastern-blue; */\n    /* border-radius: 50%; */\n    margin-top: 4.5rem;\n    \n  }\n  .hamburger-menu {\n    font-size: 2.6rem;\n    color: $green-white;\n    cursor: pointer;\n    position: relative;\n    z-index: 1500;\n  }\n\n  .hamburger-menu .fa-times {\n    display: none;\n  }\n\n  .nav-list {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 200%;\n    width: 100%;\n    height: 100vh;\n    background: rgba($eastern-blue, 0.5);\n    color: $green-white;\n    align-items: center;\n    justify-content: center;\n    z-index: 1400;\n    transition: all 0.5s;\n    \n    .nav-item {\n      .nav-link {\n        position: relative;\n        display: block;\n        color: $green-white;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        padding: 1rem;\n        font-weight: $nav-list-font-weight;\n        transition: all 0.2s;\n        &::before {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 1px;\n          background-color: $green-white;\n          transition: width 0.5s ease;\n        }\n        &:hover::before {\n          width: 100%;\n        }\n      }\n\n      &:not(:last-child) {\n        margin-bottom: 2rem;\n      }\n    }\n  }\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu {\n  .fa-times {\n    display: block;\n  }\n  .fa-bars {\n    display: none;\n  }\n}","$eastern-blue: #1e81b0;\n$powder-blue: #abdbe3;\n$green-white: #eeeee4;\n$burnt-sienna: #e28743;\n$tacao: #eab676;\n$glacier: #76b5c5;\n$eternity: #21130d;\n$burnt-umber: #873e23;\n$catalina-blue: #063970;\n$chathams-blue: #154c79;\n$bg-gradient: linear-gradient(rgb(171, 219, 227), rgb(30, 129, 176));\n$btn-bg-gradient: linear-gradient(#76b5c5, #abdbe3);\n$btn-gradient-hover: linear-gradient(#1e81b0, #abdbe3);","@import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap');\n@import \"header.scss\";\n@import \"hero.scss\";\n@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\n/*Variables*/\n$body-font-size: 1.6rem;\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: $body-font-size;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}\n\n","@import \"./colors.scss\";\n\n$label-font-size: 1.3rem;\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(\"../assets/images/background-hero.jpg\") center no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n\n  div {\n    margin-bottom: 9rem;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: inherit;\n    height: inherit;\n    opacity: 0.2;\n    background-color: $green-white;\n    z-index: -1;\n  }\n\n  .main-heading {\n    position: relative;\n    color: #fff;\n    text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n    margin-bottom: 0.5rem;\n    text-transform: uppercase;\n      .title {\n        .substitude {\n            top: 4rem;\n            bottom: -4rem;\n            left: 0;\n            right: 0;\n            position: absolute;\n            margin-top: 1rem;\n            display: inline-block;\n            font-size: 2.5rem;\n            font-family: \"Courgette\", sans-serif;\n            text-shadow: 1px 1px black;\n            letter-spacing: 0.5rem;\n            text-transform: lowercase;\n        }\n    }\n  }\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.8rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background: $eastern-blue;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n/*   &:hover {\n    background-image: $btn-gradient-hover;\n  } */\n  &::before {\n    content: \"\";\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 0;\n    position: absolute;\n    background: $btn-bg-gradient;\n    z-index: -1;\n    transition: all 0.4s ease-in-out;\n  }\n  &:hover::before {\n    background: $btn-bg-gradient;\n    color: black;\n    width: 100%;\n    opacity: 0.85;\n  }\n}\n\n.icon {\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  opacity: 0.85;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n//Booking\n\n.booking {\n  background-image: $bg-gradient;\n  min-height: 500px;\n  .input-group {\n    margin-bottom: 1.5rem;\n\n    .input-label {\n      display: block;\n      font-size: $label-font-size;\n      text-transform: uppercase;\n      color:#fff;\n      font-weight: bold;\n      margin-bottom: 0.5rem;\n    }\n    .input, .options {\n      outline: none;\n      border: none;\n      width: 100%;\n      padding: 0.5rem;\n      min-height: 4rem;\n      font-weight: bold;\n      color: #e5e5e5;\n      letter-spacing: 2px;\n      font-family: \"Open Sans\", sans-serif;\n      /* resize: none; */\n    }\n  }\n\n  .form-btn {\n    $circle-element: 4rem;\n    position: absolute;\n    margin-top: 1rem;\n    cursor: pointer;\n    background-color: $glacier;\n    z-index: 1;\n    .fa-solid {\n      transition: transform 1s ease;\n    }\n      &:hover {\n        background-color: $eastern-blue;\n        box-shadow: 0px 0px 2px #fff;\n        .fa-solid {\n          transform: rotateY(180deg);\n        }\n      }\n    }\n}\n.btn {\n  .key {\n    margin-left: 0.5rem;\n    position: relative;\n    padding: 1.2rem 0;\n  \n    i {\n      position: absolute;\n      top: 30%;\n      bottom: 50%;\n      right: -10%;\n      left: 58%;\n      /* transform: translate(95%, -50%); */\n      transition: transform 0.5s ease-in-out;\n    }\n  }\n\n  .door {\n    margin-left: 0.5rem;\n  }\n  .door-open {\n    display: none;\n  }\n  &:hover .key i {\n    transform: rotate(45deg);\n  }\n  &:hover .door-closed {\n    display: none;\n  }\n  &:hover .door-open {\n    display: inline;\n  }\n}\n\n/* Featured Hotels section styles */\n.section-head {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.heading {\n  display: block;\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n.sub-heading {\n  font-size: 1.7rem;\n  font-family: \"Courgette\", cursive;\n  font-weight: 300;\n  color: #a5a5a5;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-gap: 2.5rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.featured-hotels {\n  height: 35rem;\n  color: #fff;\n  padding: 1rem;\n  position: relative;\n  z-index: 0;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $glacier;\n    z-index: -1;\n  }\n}\n\n.hotel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.hotel-name {\n  font-size: 2.6rem;\n}\n.hotel-price {\n  font-size: 1.8rem;\n}\n.hotel-rating {\n  margin: 1rem 0 2.5rem;\n}\n.rating {\n  color: $tacao;\n  text-shadow: 0 0 3px black;\n}\n\n/* Special Offer */\n.paragraph {\n  .btn.btn-gradient {\n    background: $catalina-blue;\n  }\n}\n.offer {\n  background: linear-gradient(to right, rgba(171, 219, 227, 0.8), rgba(30, 129, 176, 0.8)), url(\"../assets/images/the_paradise_bg.jpg\") bottom center no-repeat;\n  background-size: cover;\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/assets/images/the_paradise_bg.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/the_paradise_bg.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5324cbed6ab5ef68400.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssS0FBSyxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVB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QyxDQUFDO0FBRXBELFNBQVMsVUFBVTtJQUNqQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1oZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvdGhlX3BhcmFkaXNlX2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3VyZ2V0dGV8T3BlbitTYW5zOjQwMCw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODFiMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbm5hdiAubG9nbyBpbWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICRlYXN0ZXJuLWJsdWU7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXFxuICBtYXJnaW4tdG9wOiA0LjVyZW07XFxufVxcbm5hdiAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBjb2xvcjogI2VlZWVlNDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE1MDA7XFxufVxcbm5hdiAuaGFtYnVyZ2VyLW1lbnUgLmZhLXRpbWVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAyMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMTI5LCAxNzYsIDAuNSk7XFxuICBjb2xvcjogI2VlZWVlNDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxubmF2IC5uYXYtbGlzdCAubmF2LWl0ZW0gLm5hdi1saW5rIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNlZWVlZTQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbm5hdiAubmF2LWxpc3QgLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWU0O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xcbn1cXG5uYXYgLm5hdi1saXN0IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubmF2IC5uYXYtbGlzdCAubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWVudS1vcGVuIC5uYXYtbGlzdCB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubWVudS1vcGVuIC5oYW1idXJnZXItbWVudSAuZmEtdGltZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZW51LW9wZW4gLmhhbWJ1cmdlci1tZW51IC5mYS1iYXJzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5oZXJvIGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiA5cmVtO1xcbn1cXG4uaGVybzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlNDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uaGVybyAubWFpbi1oZWFkaW5nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uaGVybyAubWFpbi1oZWFkaW5nIC50aXRsZSAuc3Vic3RpdHVkZSB7XFxuICB0b3A6IDRyZW07XFxuICBib3R0b206IC00cmVtO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG59XFxuXFxuLmJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6ICMxZTgxYjA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgLyogICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYnRuLWdyYWRpZW50LWhvdmVyO1xcbiAgICB9ICovXFxufVxcbi5idG4tZ3JhZGllbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNzZiNWM1LCAjYWJkYmUzKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi5idG4tZ3JhZGllbnQ6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzc2YjVjNSwgI2FiZGJlMyk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4ubWFpbi1idG4ge1xcbiAgbWFyZ2luLXRvcDogNnJlbTtcXG59XFxuXFxuLmJvb2tpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNhYmRiZTMsICMxZTgxYjApO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxufVxcbi5ib29raW5nIC5pbnB1dC1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5ib29raW5nIC5pbnB1dC1ncm91cCAuaW5wdXQtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uYm9va2luZyAuaW5wdXQtZ3JvdXAgLmlucHV0LCAuYm9va2luZyAuaW5wdXQtZ3JvdXAgLm9wdGlvbnMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNlNWU1ZTU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLyogcmVzaXplOiBub25lOyAqL1xcbn1cXG4uYm9va2luZyAuZm9ybS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmI1YzU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYm9va2luZyAuZm9ybS1idG4gLmZhLXNvbGlkIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG4uYm9va2luZyAuZm9ybS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODFiMDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmY7XFxufVxcbi5ib29raW5nIC5mb3JtLWJ0bjpob3ZlciAuZmEtc29saWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi5idG4gLmtleSB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMS4ycmVtIDA7XFxufVxcbi5idG4gLmtleSBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICByaWdodDogLTEwJTtcXG4gIGxlZnQ6IDU4JTtcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDk1JSwgLTUwJSk7ICovXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmJ0biAuZG9vciB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4uYnRuIC5kb29yLW9wZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bjpob3ZlciAua2V5IGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4uYnRuOmhvdmVyIC5kb29yLWNsb3NlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuOmhvdmVyIC5kb29yLW9wZW4ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4vKiBGZWF0dXJlZCBIb3RlbHMgc2VjdGlvbiBzdHlsZXMgKi9cXG4uc2VjdGlvbi1oZWFkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjYTVhNWE1O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxuICBncmlkLWdhcDogMi41cmVtO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmVhdHVyZWQtaG90ZWxzIHtcXG4gIGhlaWdodDogMzVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uZmVhdHVyZWQtaG90ZWxzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZiNWM1O1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ob3RlbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uaG90ZWwtbmFtZSB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuXFxuLmhvdGVsLXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uaG90ZWwtcmF0aW5nIHtcXG4gIG1hcmdpbjogMXJlbSAwIDIuNXJlbTtcXG59XFxuXFxuLnJhdGluZyB7XFxuICBjb2xvcjogI2VhYjY3NjtcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xcbn1cXG5cXG4vKiBTcGVjaWFsIE9mZmVyICovXFxuLnBhcmFncmFwaCAuYnRuLmJ0bi1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjMDYzOTcwO1xcbn1cXG5cXG4ub2ZmZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE3MSwgMjE5LCAyMjcsIDAuOCksIHJnYmEoMzAsIDEyOSwgMTc2LCAwLjgpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBib3R0b20gY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qVmFyaWFibGVzKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypHbG9iYWwgc2l6ZSovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZXJvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkNSYTtFRFNiLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBRUZGOztBRktBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUVGRjtBRkdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBRURKO0FGSUU7RUFDRSxpQkFBQTtFQUNBLGNDNUJVO0VENkJWLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUVGSjtBRktFO0VBQ0UsYUFBQTtBRUhKO0FGTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0MvQ1U7RURnRFYsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRUpKO0FGT007RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQ3pETTtFRDBETix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQTdEZTtFQThEZixvQkFBQTtBRUxSO0FGTVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJDdEVJO0VEdUVKLDJC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LDJEQUFBO0VBQ0EsZ0JBQUE7QUR5RUY7O0FDdEVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRHlFRjs7QUN0RUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUR5RUY7QUN4RUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJGck9NO0VFc09OLFdBQUE7QUQwRUo7O0FDdEVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FEeUVGOztBQ3RFQTtFQUNFLGlCQUFBO0FEeUVGOztBQ3ZFQTtFQUNFLGlCQUFBO0FEMEVGOztBQ3hFQTtFQUNFLHFCQUFBO0FEMkVGOztBQ3pFQTtFQUNFLGNGL1BNO0VFZ1FOLDBCQUFBO0FENEVGOztBQ3pFQSxrQkFBQTtBQUVFO0VBQ0UsbUJGbFFZO0FDNlVoQjs7QUN4RUE7RUFDRSx5SkFBQTtFQUNBLHNCQUFBO0FEMkVGOztBQW5WQSxZQUFBO0FBR0E7OztFQUdJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFvVko7O0FBalZBLGNBQUE7QUFDQTtFQUNFLGVBQUE7QUFvVkY7O0FBalZBO0VBQ0Usb0NBQUE7RUFDQSxpQkFqQmU7QUFxV2pCOztBQWpWQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQW9WRjs7QUFqVkE7RUFDRSxnQkFBQTtBQW9WRjs7QUFqVkE7RUFDRSxlQUFBO0FBb1ZGOztBQWpWQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW9WRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJjb2xvcnMuc2Nzc1xcXCI7XFxuXFxuJG5hdi1saXN0LWZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRlYXN0ZXJuLWJsdWU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLmxvZ28gaW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICRlYXN0ZXJuLWJsdWU7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cXG4gICAgbWFyZ2luLXRvcDogNC41cmVtO1xcbiAgICBcXG4gIH1cXG4gIC5oYW1idXJnZXItbWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICBjb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTUwMDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItbWVudSAuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDIwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRlYXN0ZXJuLWJsdWUsIDAuNSk7XFxuICAgIGNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgXFxuICAgIC5uYXYtaXRlbSB7XFxuICAgICAgLm5hdi1saW5rIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgY29sb3I6ICRncmVlbi13aGl0ZTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkbmF2LWxpc3QtZm9udC13ZWlnaHQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1lbnUtb3BlbiAubmF2LWxpc3Qge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1lbnUtb3BlbiAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgLmZhLXRpbWVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuZmEtYmFycyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLFwiJGVhc3Rlcm4tYmx1ZTogIzFlODFiMDtcXG4kcG93ZGVyLWJsdWU6ICNhYmRiZTM7XFxuJGdyZWVuLXdoaXRlOiAjZWVlZWU0O1xcbiRidXJudC1zaWVubmE6ICNlMjg3NDM7XFxuJHRhY2FvOiAjZWFiNjc2O1xcbiRnbGFjaWVyOiAjNzZiNWM1O1xcbiRldGVybml0eTogIzIxMTMwZDtcXG4kYnVybnQtdW1iZXI6ICM4NzNlMjM7XFxuJGNhdGFsaW5hLWJsdWU6ICMwNjM5NzA7XFxuJGNoYXRoYW1zLWJsdWU6ICMxNTRjNzk7XFxuJGJnLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQocmdiKDE3MSwgMjE5LCAyMjcpLCByZ2IoMzAsIDEyOSwgMTc2KSk7XFxuJGJ0bi1iZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KCM3NmI1YzUsICNhYmRiZTMpO1xcbiRidG4tZ3JhZGllbnQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMWU4MWIwLCAjYWJkYmUzKTtcIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q291cmdldHRlfE9wZW4rU2Fuczo0MDAsODAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgXFxcImhlYWRlci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJoZXJvLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcImNvbG9ycy5zY3NzXFxcIjtcXG5cXG4kbmF2LWxpc3QtZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4vKlZhcmlhYmxlcyovXFxuJGJvZHktZm9udC1zaXplOiAxLjZyZW07XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qR2xvYmFsIHNpemUqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwcmVtO1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuXCIsXCJAaW1wb3J0IFxcXCIuL2NvbG9ycy5zY3NzXFxcIjtcXG5cXG4kbGFiZWwtZm9udC1zaXplOiAxLjNyZW07XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaGVyby5qcGdcXFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMDtcXG5cXG4gIGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDlyZW07XFxuICB9XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG5cXG4gIC5tYWluLWhlYWRpbmcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIC50aXRsZSB7XFxuICAgICAgICAuc3Vic3RpdHVkZSB7XFxuICAgICAgICAgICAgdG9wOiA0cmVtO1xcbiAgICAgICAgICAgIGJvdHRvbTogLTRyZW07XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiAwLjhyZW0gMi41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogJGVhc3Rlcm4tYmx1ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDE7XFxuLyogICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1ncmFkaWVudC1ob3ZlcjtcXG4gIH0gKi9cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogJGJ0bi1iZy1ncmFkaWVudDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgfVxcbiAgJjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZDogJGJ0bi1iZy1ncmFkaWVudDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gIH1cXG59XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5tYWluLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcbn1cXG5cXG4vL0Jvb2tpbmdcXG5cXG4uYm9va2luZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctZ3JhZGllbnQ7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIC5pbnB1dC1ncm91cCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG5cXG4gICAgLmlucHV0LWxhYmVsIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmb250LXNpemU6ICRsYWJlbC1mb250LXNpemU7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBjb2xvcjojZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgfVxcbiAgICAuaW5wdXQsIC5vcHRpb25zIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgbWluLWhlaWdodDogNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjb2xvcjogI2U1ZTVlNTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAvKiByZXNpemU6IG5vbmU7ICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC5mb3JtLWJ0biB7XFxuICAgICRjaXJjbGUtZWxlbWVudDogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnbGFjaWVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAuZmEtc29saWQge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZjtcXG4gICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbn1cXG4uYnRuIHtcXG4gIC5rZXkge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgXFxuICAgIGkge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDMwJTtcXG4gICAgICBib3R0b206IDUwJTtcXG4gICAgICByaWdodDogLTEwJTtcXG4gICAgICBsZWZ0OiA1OCU7XFxuICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTUlLCAtNTAlKTsgKi9cXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRvb3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgLmRvb3Itb3BlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAmOmhvdmVyIC5rZXkgaSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gICY6aG92ZXIgLmRvb3ItY2xvc2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICY6aG92ZXIgLmRvb3Itb3BlbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gIH1cXG59XFxuXFxuLyogRmVhdHVyZWQgSG90ZWxzIHNlY3Rpb24gc3R5bGVzICovXFxuLnNlY3Rpb24taGVhZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zdWItaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogI2E1YTVhNTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzByZW0sIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDIuNXJlbTtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZlYXR1cmVkLWhvdGVscyB7XFxuICBoZWlnaHQ6IDM1cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdsYWNpZXI7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcbn1cXG5cXG4uaG90ZWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmhvdGVsLW5hbWUge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcbi5ob3RlbC1wcmljZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuLmhvdGVsLXJhdGluZyB7XFxuICBtYXJnaW46IDFyZW0gMCAyLjVyZW07XFxufVxcbi5yYXRpbmcge1xcbiAgY29sb3I6ICR0YWNhbztcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xcbn1cXG5cXG4vKiBTcGVjaWFsIE9mZmVyICovXFxuLnBhcmFncmFwaCB7XFxuICAuYnRuLmJ0bi1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQ6ICRjYXRhbGluYS1ibHVlO1xcbiAgfVxcbn1cXG4ub2ZmZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE3MSwgMjE5LCAyMjcsIDAuOCksIHJnYmEoMzAsIDEyOSwgMTc2LCAwLjgpKSwgdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL3RoZV9wYXJhZGlzZV9iZy5qcGdcXFwiKSBib3R0b20gY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cblxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5sZXQgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyLW1lbnVcIik7XG5cbmhhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xuXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9