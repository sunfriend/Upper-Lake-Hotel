/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: #1e81b0;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav .logo img {\n  position: relative;\n  max-width: 200px;\n  /* background-color: $eastern-blue; */\n  /* border-radius: 50%; */\n  margin-top: 4.5rem;\n}\nnav .hamburger-menu {\n  font-size: 2.6rem;\n  color: #eeeee4;\n  cursor: pointer;\n  position: relative;\n  z-index: 1500;\n}\nnav .hamburger-menu .fa-times {\n  display: none;\n}\nnav .nav-list {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 200%;\n  width: 100%;\n  height: 100vh;\n  background: rgba(30, 129, 176, 0.5);\n  color: #eeeee4;\n  align-items: center;\n  justify-content: center;\n  z-index: 1400;\n  transition: all 0.5s;\n}\nnav .nav-list .nav-item .nav-link {\n  position: relative;\n  display: block;\n  color: #eeeee4;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\nnav .nav-list .nav-item .nav-link::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background-color: #eeeee4;\n  transition: width 0.5s ease;\n}\nnav .nav-list .nav-item .nav-link:hover::before {\n  width: 100%;\n}\nnav .nav-list .nav-item:not(:last-child) {\n  margin-bottom: 2rem;\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu .fa-times {\n  display: block;\n}\n.menu-open .hamburger-menu .fa-bars {\n  display: none;\n}\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n}\n.hero div {\n  margin-bottom: 9rem;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n  opacity: 0.2;\n  background-color: #eeeee4;\n  z-index: -1;\n}\n.hero .main-heading {\n  position: relative;\n  color: #fff;\n  text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n}\n.hero .main-heading .title .substitude {\n  top: 4rem;\n  bottom: -4rem;\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin-top: 1rem;\n  display: inline-block;\n  font-size: 2.5rem;\n  font-family: \"Courgette\", sans-serif;\n  text-shadow: 1px 1px black;\n  letter-spacing: 0.5rem;\n  text-transform: lowercase;\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.8rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background: #1e81b0;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n  /*   &:hover {\n      background-image: $btn-gradient-hover;\n    } */\n}\n.btn-gradient::before {\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  background: linear-gradient(#76b5c5, #abdbe3);\n  z-index: -1;\n  transition: all 0.4s ease-in-out;\n}\n.btn-gradient:hover::before {\n  background: linear-gradient(#76b5c5, #abdbe3);\n  color: black;\n  width: 100%;\n  opacity: 0.85;\n}\n\n.icon {\n  font-size: 1.5rem;\n  margin-left: 0.5rem;\n  margin-right: -5px;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n.booking {\n  background-image: linear-gradient(#abdbe3, #1e81b0);\n  min-height: 500px;\n}\n.booking .input-group {\n  margin-bottom: 1.5rem;\n}\n.booking .input-group .input-label {\n  display: block;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.booking .input-group .input, .booking .input-group .options {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0.5rem;\n  min-height: 4rem;\n  font-weight: bold;\n  color: #e5e5e5;\n  letter-spacing: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  /* resize: none; */\n}\n.booking .form-btn {\n  position: absolute;\n  margin-top: 1rem;\n  cursor: pointer;\n  background-color: #76b5c5;\n  z-index: 1;\n}\n.booking .form-btn .fa-solid {\n  transition: transform 1s ease;\n}\n.booking .form-btn:hover {\n  background-color: #1e81b0;\n  box-shadow: 0px 0px 2px #fff;\n}\n.booking .form-btn:hover .fa-solid {\n  transform: rotateY(180deg);\n}\n\n.btn .key {\n  margin-left: 0.5rem;\n  position: relative;\n  padding: 1.2rem 0;\n}\n.btn .key i {\n  position: absolute;\n  top: 30%;\n  bottom: 50%;\n  right: -10%;\n  left: 58%;\n  /* transform: translate(95%, -50%); */\n  transition: transform 0.5s ease-in-out;\n}\n.btn .door {\n  margin-left: 0.5rem;\n}\n.btn .door-open {\n  display: none;\n}\n.btn:hover .key i {\n  transform: rotate(45deg);\n}\n.btn:hover .door-closed {\n  display: none;\n}\n.btn:hover .door-open {\n  display: inline;\n}\n\n/* Featured Hotels section styles */\n.section-head {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.heading {\n  display: block;\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n\n.sub-heading {\n  font-size: 1.7rem;\n  font-family: \"Courgette\", cursive;\n  font-weight: 300;\n  color: #a5a5a5;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-gap: 2.5rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.featured-hotels {\n  height: 35rem;\n  color: #fff;\n  padding: 1rem;\n  position: relative;\n  z-index: 0;\n}\n.featured-hotels::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #76b5c5;\n  z-index: -1;\n}\n\n.hotel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.hotel-name {\n  font-size: 2.6rem;\n}\n\n.hotel-price {\n  font-size: 1.8rem;\n}\n\n.hotel-rating {\n  margin: 1rem 0 2.5rem;\n}\n\n.rating {\n  color: #eab676;\n  text-shadow: 0 0 3px black;\n}\n\n/* Special Offer */\n.paragraph .btn.btn-gradient {\n  background: #063970;\n}\n\n.offer {\n  background: linear-gradient(to right, rgba(171, 219, 227, 0.8), rgba(30, 129, 176, 0.8)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") bottom center no-repeat;\n  background-size: cover;\n}\n.offer .container .offer-content {\n  background-color: #fff;\n  text-align: center;\n  padding: 5rem 1rem;\n  position: relative;\n  overflow: hidden;\n}\n.offer .container .offer-content .discount {\n  background-color: #eab676;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem;\n  text-transform: uppercase;\n  outline: 2px solid #eab676;\n  outline-offset: 0.5rem;\n  font-weight: bold;\n}\n\n/*Variables*/\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.6rem;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/main.scss","webpack://./src/styles/hero.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\nheader {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: $eastern-blue;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  .logo img{\n    position: relative;\n    max-width: 200px;\n    /* background-color: $eastern-blue; */\n    /* border-radius: 50%; */\n    margin-top: 4.5rem;\n    \n  }\n  .hamburger-menu {\n    font-size: 2.6rem;\n    color: $green-white;\n    cursor: pointer;\n    position: relative;\n    z-index: 1500;\n  }\n\n  .hamburger-menu .fa-times {\n    display: none;\n  }\n\n  .nav-list {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 200%;\n    width: 100%;\n    height: 100vh;\n    background: rgba($eastern-blue, 0.5);\n    color: $green-white;\n    align-items: center;\n    justify-content: center;\n    z-index: 1400;\n    transition: all 0.5s;\n    \n    .nav-item {\n      .nav-link {\n        position: relative;\n        display: block;\n        color: $green-white;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        padding: 1rem;\n        font-weight: $nav-list-font-weight;\n        transition: all 0.2s;\n        &::before {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 1px;\n          background-color: $green-white;\n          transition: width 0.5s ease;\n        }\n        &:hover::before {\n          width: 100%;\n        }\n      }\n\n      &:not(:last-child) {\n        margin-bottom: 2rem;\n      }\n    }\n  }\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu {\n  .fa-times {\n    display: block;\n  }\n  .fa-bars {\n    display: none;\n  }\n}","$eastern-blue: #1e81b0;\n$powder-blue: #abdbe3;\n$green-white: #eeeee4;\n$burnt-sienna: #e28743;\n$tacao: #eab676;\n$glacier: #76b5c5;\n$eternity: #21130d;\n$burnt-umber: #873e23;\n$catalina-blue: #063970;\n$chathams-blue: #154c79;\n$bg-gradient: linear-gradient(rgb(171, 219, 227), rgb(30, 129, 176));\n$btn-bg-gradient: linear-gradient(#76b5c5, #abdbe3);\n$btn-gradient-hover: linear-gradient(#1e81b0, #abdbe3);","@import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap');\n@import \"header.scss\";\n@import \"hero.scss\";\n@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\n/*Variables*/\n$body-font-size: 1.6rem;\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: $body-font-size;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}\n\n","@import \"./colors.scss\";\n\n$label-font-size: 1.3rem;\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(\"../assets/images/background-hero.jpg\") center no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n\n  div {\n    margin-bottom: 9rem;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: inherit;\n    height: inherit;\n    opacity: 0.2;\n    background-color: $green-white;\n    z-index: -1;\n  }\n\n  .main-heading {\n    position: relative;\n    color: #fff;\n    text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n    margin-bottom: 0.5rem;\n    text-transform: uppercase;\n      .title {\n        .substitude {\n            top: 4rem;\n            bottom: -4rem;\n            left: 0;\n            right: 0;\n            position: absolute;\n            margin-top: 1rem;\n            display: inline-block;\n            font-size: 2.5rem;\n            font-family: \"Courgette\", sans-serif;\n            text-shadow: 1px 1px black;\n            letter-spacing: 0.5rem;\n            text-transform: lowercase;\n        }\n    }\n  }\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.8rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background: $eastern-blue;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n/*   &:hover {\n    background-image: $btn-gradient-hover;\n  } */\n  &::before {\n    content: \"\";\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 0;\n    position: absolute;\n    background: $btn-bg-gradient;\n    z-index: -1;\n    transition: all 0.4s ease-in-out;\n  }\n  &:hover::before {\n    background: $btn-bg-gradient;\n    color: black;\n    width: 100%;\n    opacity: 0.85;\n  }\n}\n\n.icon {\n  font-size: 1.5rem;\n  margin-left: 0.5rem;\n  margin-right: -5px;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n//Booking\n\n.booking {\n  background-image: $bg-gradient;\n  min-height: 500px;\n  .input-group {\n    margin-bottom: 1.5rem;\n\n    .input-label {\n      display: block;\n      font-size: $label-font-size;\n      text-transform: uppercase;\n      color:#fff;\n      font-weight: bold;\n      margin-bottom: 0.5rem;\n    }\n    .input, .options {\n      outline: none;\n      border: none;\n      width: 100%;\n      padding: 0.5rem;\n      min-height: 4rem;\n      font-weight: bold;\n      color: #e5e5e5;\n      letter-spacing: 2px;\n      font-family: \"Open Sans\", sans-serif;\n      /* resize: none; */\n    }\n  }\n\n  .form-btn {\n    $circle-element: 4rem;\n    position: absolute;\n    margin-top: 1rem;\n    cursor: pointer;\n    background-color: $glacier;\n    z-index: 1;\n    .fa-solid {\n      transition: transform 1s ease;\n    }\n      &:hover {\n        background-color: $eastern-blue;\n        box-shadow: 0px 0px 2px #fff;\n        .fa-solid {\n          transform: rotateY(180deg);\n        }\n      }\n    }\n}\n.btn {\n  .key {\n    margin-left: 0.5rem;\n    position: relative;\n    padding: 1.2rem 0;\n  \n    i {\n      position: absolute;\n      top: 30%;\n      bottom: 50%;\n      right: -10%;\n      left: 58%;\n      /* transform: translate(95%, -50%); */\n      transition: transform 0.5s ease-in-out;\n    }\n  }\n\n  .door {\n    margin-left: 0.5rem;\n  }\n  .door-open {\n    display: none;\n  }\n  &:hover .key i {\n    transform: rotate(45deg);\n  }\n  &:hover .door-closed {\n    display: none;\n  }\n  &:hover .door-open {\n    display: inline;\n  }\n}\n\n/* Featured Hotels section styles */\n.section-head {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.heading {\n  display: block;\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n.sub-heading {\n  font-size: 1.7rem;\n  font-family: \"Courgette\", cursive;\n  font-weight: 300;\n  color: #a5a5a5;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-gap: 2.5rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.featured-hotels {\n  height: 35rem;\n  color: #fff;\n  padding: 1rem;\n  position: relative;\n  z-index: 0;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $glacier;\n    z-index: -1;\n  }\n}\n\n.hotel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.hotel-name {\n  font-size: 2.6rem;\n}\n.hotel-price {\n  font-size: 1.8rem;\n}\n.hotel-rating {\n  margin: 1rem 0 2.5rem;\n}\n.rating {\n  color: $tacao;\n  text-shadow: 0 0 3px black;\n}\n\n/* Special Offer */\n.paragraph {\n  .btn.btn-gradient {\n    background: $catalina-blue;\n  }\n}\n\n.offer {\n  background: linear-gradient(to right, rgba(171, 219, 227, 0.8), rgba(30, 129, 176, 0.8)), url(\"../assets/images/the_paradise_bg.jpg\") bottom center no-repeat;\n  background-size: cover;\n  .container {\n    .offer-content {\n      background-color: #fff;\n      text-align: center;\n      padding: 5rem 1rem;\n      position: relative;\n      overflow: hidden;\n        .discount {\n        background-color: $tacao;\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: 1rem;\n        text-transform: uppercase;\n        outline: 2px solid $tacao;\n        outline-offset: .5rem;\n        font-weight: bold;\n      }\n    }\n  }\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/scripts/lazy.js":
/*!*****************************!*\
  !*** ./src/scripts/lazy.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});


/***/ }),

/***/ "./src/assets/images/background-hero.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/background-hero.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0065b8fb9771d4aa398c.jpg";

/***/ }),

/***/ "./src/assets/images/the_paradise_bg.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/the_paradise_bg.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_lazy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/lazy.js */ "./src/scripts/lazy.js");
/* harmony import */ var _scripts_lazy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_lazy_js__WEBPACK_IMPORTED_MODULE_1__);


var header = document.querySelector("header");
var hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", toggleMenu);
function toggleMenu() {
    header.classList.toggle('menu-open');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1B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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUNEO0FBRTNCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTlELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFcEQsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2xhenkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1oZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvdGhlX3BhcmFkaXNlX2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3VyZ2V0dGV8T3BlbitTYW5zOjQwMCw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODFiMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbm5hdiAubG9nbyBpbWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICRlYXN0ZXJuLWJsdWU7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXFxuICBtYXJnaW4tdG9wOiA0LjVyZW07XFxufVxcbm5hdiAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBjb2xvcjogI2VlZWVlNDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE1MDA7XFxufVxcbm5hdiAuaGFtYnVyZ2VyLW1lbnUgLmZhLXRpbWVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAyMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMTI5LCAxNzYsIDAuNSk7XFxuICBjb2xvcjogI2VlZWVlNDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE0MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxubmF2IC5uYXYtbGlzdCAubmF2LWl0ZW0gLm5hdi1saW5rIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNlZWVlZTQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbm5hdiAubmF2LWxpc3QgLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWU0O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xcbn1cXG5uYXYgLm5hdi1saXN0IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubmF2IC5uYXYtbGlzdCAubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWVudS1vcGVuIC5uYXYtbGlzdCB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubWVudS1vcGVuIC5oYW1idXJnZXItbWVudSAuZmEtdGltZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZW51LW9wZW4gLmhhbWJ1cmdlci1tZW51IC5mYS1iYXJzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uaGVybyBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogOXJlbTtcXG59XFxuLmhlcm86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTQ7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmhlcm8gLm1haW4taGVhZGluZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmhlcm8gLm1haW4taGVhZGluZyAudGl0bGUgLnN1YnN0aXR1ZGUge1xcbiAgdG9wOiA0cmVtO1xcbiAgYm90dG9tOiAtNHJlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxufVxcblxcbi5idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAyLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjMWU4MWIwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG4gIC8qICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1ncmFkaWVudC1ob3ZlcjtcXG4gICAgfSAqL1xcbn1cXG4uYnRuLWdyYWRpZW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzc2YjVjNSwgI2FiZGJlMyk7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuLWdyYWRpZW50OmhvdmVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM3NmI1YzUsICNhYmRiZTMpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XFxufVxcblxcbi5tYWluLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcbn1cXG5cXG4uYm9va2luZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2FiZGJlMywgIzFlODFiMCk7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG59XFxuLmJvb2tpbmcgLmlucHV0LWdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuLmJvb2tpbmcgLmlucHV0LWdyb3VwIC5pbnB1dC1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5ib29raW5nIC5pbnB1dC1ncm91cCAuaW5wdXQsIC5ib29raW5nIC5pbnB1dC1ncm91cCAub3B0aW9ucyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2U1ZTVlNTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAvKiByZXNpemU6IG5vbmU7ICovXFxufVxcbi5ib29raW5nIC5mb3JtLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YjVjNTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5ib29raW5nIC5mb3JtLWJ0biAuZmEtc29saWQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcbi5ib29raW5nIC5mb3JtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4MWIwO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZjtcXG59XFxuLmJvb2tpbmcgLmZvcm0tYnRuOmhvdmVyIC5mYS1zb2xpZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmJ0biAua2V5IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxLjJyZW0gMDtcXG59XFxuLmJ0biAua2V5IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBib3R0b206IDUwJTtcXG4gIHJpZ2h0OiAtMTAlO1xcbiAgbGVmdDogNTglO1xcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTUlLCAtNTAlKTsgKi9cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuIC5kb29yIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcbi5idG4gLmRvb3Itb3BlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuOmhvdmVyIC5rZXkgaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5idG46aG92ZXIgLmRvb3ItY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG46aG92ZXIgLmRvb3Itb3BlbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi8qIEZlYXR1cmVkIEhvdGVscyBzZWN0aW9uIHN0eWxlcyAqL1xcbi5zZWN0aW9uLWhlYWQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNhNWE1YTU7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyLjVyZW07XFxufVxcblxcbi5ncmlkLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mZWF0dXJlZC1ob3RlbHMge1xcbiAgaGVpZ2h0OiAzNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5mZWF0dXJlZC1ob3RlbHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmI1YzU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmhvdGVsLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ob3RlbC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG4uaG90ZWwtcHJpY2Uge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5ob3RlbC1yYXRpbmcge1xcbiAgbWFyZ2luOiAxcmVtIDAgMi41cmVtO1xcbn1cXG5cXG4ucmF0aW5nIHtcXG4gIGNvbG9yOiAjZWFiNjc2O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XFxufVxcblxcbi8qIFNwZWNpYWwgT2ZmZXIgKi9cXG4ucGFyYWdyYXBoIC5idG4uYnRuLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6ICMwNjM5NzA7XFxufVxcblxcbi5vZmZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTcxLCAyMTksIDIyNywgMC44KSwgcmdiYSgzMCwgMTI5LCAxNzYsIDAuOCkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGJvdHRvbSBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLm9mZmVyIC5jb250YWluZXIgLm9mZmVyLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVyZW0gMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5vZmZlciAuY29udGFpbmVyIC5vZmZlci1jb250ZW50IC5kaXNjb3VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFiNjc2O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNlYWI2NzY7XFxuICBvdXRsaW5lLW9mZnNldDogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qVmFyaWFibGVzKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypHbG9iYWwgc2l6ZSovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZXJvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkNSYTtFRFNiLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBRUZGOztBRktBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUVGRjtBRkdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBRURKO0FGSUU7RUFDRSxpQkFBQTtFQUNBLGNDNUJVO0VENkJWLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUVGSjtBRktFO0VBQ0UsYUFBQTtBRUhKO0FGTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0MvQ1U7RURnRFYsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRUpKO0FGT007RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFD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O0FBdVdKOztBQXBXQSxjQUFBO0FBQ0E7RUFDRSxlQUFBO0FBdVdGOztBQXBXQTtFQUNFLG9DQUFBO0VBQ0EsaUJBakJlO0FBd1hqQjs7QUFwV0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUF1V0Y7O0FBcFdBO0VBQ0UsZ0JBQUE7QUF1V0Y7O0FBcFdBO0VBQ0UsZUFBQTtBQXVXRjs7QUFwV0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF1V0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiY29sb3JzLnNjc3NcXFwiO1xcblxcbiRuYXYtbGlzdC1mb250LXdlaWdodDogNjAwO1xcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC5sb2dvIGltZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXFxuICAgIG1hcmdpbi10b3A6IDQuNXJlbTtcXG4gICAgXFxuICB9XFxuICAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgY29sb3I6ICRncmVlbi13aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE1MDA7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyLW1lbnUgLmZhLXRpbWVzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAyMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgkZWFzdGVybi1ibHVlLCAwLjUpO1xcbiAgICBjb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTQwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIFxcbiAgICAubmF2LWl0ZW0ge1xcbiAgICAgIC5uYXYtbGluayB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogJG5hdi1saXN0LWZvbnQtd2VpZ2h0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XFxuICAgICAgICB9XFxuICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tZW51LW9wZW4gLm5hdi1saXN0IHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tZW51LW9wZW4gLmhhbWJ1cmdlci1tZW51IHtcXG4gIC5mYS10aW1lcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLmZhLWJhcnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIixcIiRlYXN0ZXJuLWJsdWU6ICMxZTgxYjA7XFxuJHBvd2Rlci1ibHVlOiAjYWJkYmUzO1xcbiRncmVlbi13aGl0ZTogI2VlZWVlNDtcXG4kYnVybnQtc2llbm5hOiAjZTI4NzQzO1xcbiR0YWNhbzogI2VhYjY3NjtcXG4kZ2xhY2llcjogIzc2YjVjNTtcXG4kZXRlcm5pdHk6ICMyMTEzMGQ7XFxuJGJ1cm50LXVtYmVyOiAjODczZTIzO1xcbiRjYXRhbGluYS1ibHVlOiAjMDYzOTcwO1xcbiRjaGF0aGFtcy1ibHVlOiAjMTU0Yzc5O1xcbiRiZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHJnYigxNzEsIDIxOSwgMjI3KSwgcmdiKDMwLCAxMjksIDE3NikpO1xcbiRidG4tYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgjNzZiNWM1LCAjYWJkYmUzKTtcXG4kYnRuLWdyYWRpZW50LWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzFlODFiMCwgI2FiZGJlMyk7XCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvdXJnZXR0ZXxPcGVuK1NhbnM6NDAwLDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IFxcXCJoZWFkZXIuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiaGVyby5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJjb2xvcnMuc2Nzc1xcXCI7XFxuXFxuJG5hdi1saXN0LWZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuLypWYXJpYWJsZXMqL1xcbiRib2R5LWZvbnQtc2l6ZTogMS42cmVtO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKkdsb2JhbCBzaXplKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcblwiLFwiQGltcG9ydCBcXFwiLi9jb2xvcnMuc2Nzc1xcXCI7XFxuXFxuJGxhYmVsLWZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWhlcm8uanBnXFxcIikgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOXJlbTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcblxcbiAgLm1haW4taGVhZGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgLnRpdGxlIHtcXG4gICAgICAgIC5zdWJzdGl0dWRlIHtcXG4gICAgICAgICAgICB0b3A6IDRyZW07XFxuICAgICAgICAgICAgYm90dG9tOiAtNHJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAyLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAkZWFzdGVybi1ibHVlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG4vKiAgICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYnRuLWdyYWRpZW50LWhvdmVyO1xcbiAgfSAqL1xcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAkYnRuLWJnLWdyYWRpZW50O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICAmOmhvdmVyOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kOiAkYnRuLWJnLWdyYWRpZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgfVxcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XFxufVxcblxcbi5tYWluLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcbn1cXG5cXG4vL0Jvb2tpbmdcXG5cXG4uYm9va2luZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctZ3JhZGllbnQ7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIC5pbnB1dC1ncm91cCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG5cXG4gICAgLmlucHV0LWxhYmVsIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBmb250LXNpemU6ICRsYWJlbC1mb250LXNpemU7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBjb2xvcjojZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgfVxcbiAgICAuaW5wdXQsIC5vcHRpb25zIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgbWluLWhlaWdodDogNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjb2xvcjogI2U1ZTVlNTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAvKiByZXNpemU6IG5vbmU7ICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC5mb3JtLWJ0biB7XFxuICAgICRjaXJjbGUtZWxlbWVudDogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnbGFjaWVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAuZmEtc29saWQge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZjtcXG4gICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbn1cXG4uYnRuIHtcXG4gIC5rZXkge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgXFxuICAgIGkge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDMwJTtcXG4gICAgICBib3R0b206IDUwJTtcXG4gICAgICByaWdodDogLTEwJTtcXG4gICAgICBsZWZ0OiA1OCU7XFxuICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTUlLCAtNTAlKTsgKi9cXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRvb3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgLmRvb3Itb3BlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAmOmhvdmVyIC5rZXkgaSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gICY6aG92ZXIgLmRvb3ItY2xvc2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICY6aG92ZXIgLmRvb3Itb3BlbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gIH1cXG59XFxuXFxuLyogRmVhdHVyZWQgSG90ZWxzIHNlY3Rpb24gc3R5bGVzICovXFxuLnNlY3Rpb24taGVhZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zdWItaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogI2E1YTVhNTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzByZW0sIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDIuNXJlbTtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZlYXR1cmVkLWhvdGVscyB7XFxuICBoZWlnaHQ6IDM1cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdsYWNpZXI7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcbn1cXG5cXG4uaG90ZWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmhvdGVsLW5hbWUge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcbi5ob3RlbC1wcmljZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuLmhvdGVsLXJhdGluZyB7XFxuICBtYXJnaW46IDFyZW0gMCAyLjVyZW07XFxufVxcbi5yYXRpbmcge1xcbiAgY29sb3I6ICR0YWNhbztcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xcbn1cXG5cXG4vKiBTcGVjaWFsIE9mZmVyICovXFxuLnBhcmFncmFwaCB7XFxuICAuYnRuLmJ0bi1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQ6ICRjYXRhbGluYS1ibHVlO1xcbiAgfVxcbn1cXG5cXG4ub2ZmZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE3MSwgMjE5LCAyMjcsIDAuOCksIHJnYmEoMzAsIDEyOSwgMTc2LCAwLjgpKSwgdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL3RoZV9wYXJhZGlzZV9iZy5qcGdcXFwiKSBib3R0b20gY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAuY29udGFpbmVyIHtcXG4gICAgLm9mZmVyLWNvbnRlbnQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDVyZW0gMXJlbTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIC5kaXNjb3VudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFjYW87XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJHRhY2FvO1xcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC41cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhenlJbWFnZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcubGF6eVwiKSk7XG5cbiAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICBsZXQgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKFxuICAgICAgZW50cmllcyxcbiAgICAgIG9ic2VydmVyXG4gICAgKSB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIGxldCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcbiAgICAgICAgICBsYXp5SW1hZ2Uuc3Jjc2V0ID0gbGF6eUltYWdlLmRhdGFzZXQuc3Jjc2V0O1xuICAgICAgICAgIGxhenlJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eVwiKTtcbiAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci51bm9ic2VydmUobGF6eUltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsYXp5SW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGxhenlJbWFnZSkge1xuICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5SW1hZ2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFBvc3NpYmx5IGZhbGwgYmFjayB0byBldmVudCBoYW5kbGVycyBoZXJlXG4gIH1cbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9sYXp5LmpzXCI7XG5cbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xubGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpO1xuXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51KTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==