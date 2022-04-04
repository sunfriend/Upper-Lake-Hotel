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
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: #1e81b0;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nheader.active {\n  background-color: rgba(30, 129, 176, 0.5);\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav .logo img {\n  position: relative;\n  max-width: 200px;\n  /* background-color: $eastern-blue; */\n  /* border-radius: 50%; */\n  margin-top: 4.5rem;\n}\nnav .hamburger-menu {\n  font-size: 2.6rem;\n  color: #eeeee4;\n  cursor: pointer;\n  position: relative;\n  z-index: 1500;\n}\nnav .hamburger-menu .fa-times {\n  display: none;\n}\nnav .nav-list {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 200%;\n  width: 100%;\n  height: 100vh;\n  background: rgba(30, 129, 176, 0.5);\n  color: #eeeee4;\n  align-items: center;\n  justify-content: center;\n  z-index: 1400;\n  transition: all 0.5s;\n}\nnav .nav-list .nav-item .nav-link {\n  position: relative;\n  display: block;\n  color: #eeeee4;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\nnav .nav-list .nav-item .nav-link::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background-color: #eeeee4;\n  transition: width 0.5s ease;\n}\nnav .nav-list .nav-item .nav-link:hover::before {\n  width: 100%;\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu .fa-times {\n  display: block;\n}\n.menu-open .hamburger-menu .fa-bars {\n  display: none;\n}\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n}\n.hero div {\n  margin-bottom: 9rem;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n  opacity: 0.2;\n  background-color: #eeeee4;\n  z-index: -1;\n}\n.hero .main-heading {\n  position: relative;\n  color: #fff;\n  text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n}\n.hero .main-heading .title .substitude {\n  top: 4rem;\n  bottom: -4rem;\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin-top: 1rem;\n  display: inline-block;\n  font-size: 2.5rem;\n  font-family: \"Courgette\", sans-serif;\n  text-shadow: 1px 1px black;\n  letter-spacing: 0.5rem;\n  text-transform: lowercase;\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.8rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background: #1e81b0;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n  /*   &:hover {\n      background-image: $btn-gradient-hover;\n    } */\n}\n.btn-gradient::before {\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  background: linear-gradient(#76b5c5, #abdbe3);\n  z-index: -1;\n  transition: all 0.4s ease-in-out;\n}\n.btn-gradient:hover::before {\n  background: linear-gradient(#76b5c5, #abdbe3);\n  color: black;\n  width: 100%;\n  opacity: 0.85;\n}\n\n.icon {\n  font-size: 1.5rem;\n  margin-left: 0.5rem;\n  margin-right: -5px;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n.booking {\n  background-image: linear-gradient(#abdbe3, #1e81b0);\n  min-height: 500px;\n}\n.booking .input-group {\n  margin-bottom: 1.5rem;\n}\n.booking .input-group .input-label {\n  display: block;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.booking .input-group .input, .booking .input-group .options {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0.5rem;\n  min-height: 4rem;\n  font-weight: bold;\n  color: #a1a1a1;\n  letter-spacing: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #fff;\n  /* resize: none; */\n}\n.booking .form-btn {\n  position: absolute;\n  margin-top: 1rem;\n  cursor: pointer;\n  background-color: #76b5c5;\n  z-index: 1;\n}\n.booking .form-btn .fa-solid {\n  transition: transform 1s ease;\n}\n.booking .form-btn:hover {\n  background-color: #1e81b0;\n  box-shadow: 0px 0px 2px #fff;\n}\n.booking .form-btn:hover .fa-solid {\n  transform: rotateY(180deg);\n}\n\n.btn .key {\n  margin-left: 0.5rem;\n  position: relative;\n  padding: 1.2rem 0;\n}\n.btn .key i {\n  position: absolute;\n  top: 30%;\n  bottom: 50%;\n  right: -10%;\n  left: 58%;\n  /* transform: translate(95%, -50%); */\n  transition: transform 0.5s ease-in-out;\n}\n.btn .door {\n  margin-left: 0.5rem;\n}\n.btn .door-open {\n  display: none;\n}\n.btn:hover .key i {\n  transform: rotate(45deg);\n}\n.btn:hover .door-closed {\n  display: none;\n}\n.btn:hover .door-open {\n  display: inline;\n}\n\n/* Featured Hotels section styles */\n.hotels {\n  background-color: #eeeee4;\n}\n\n.section-head {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.heading {\n  display: block;\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n\n.sub-heading {\n  font-size: 1.7rem;\n  font-family: \"Courgette\", cursive;\n  font-weight: 300;\n  color: #a5a5a5;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-gap: 2.5rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.featured-hotels {\n  height: 35rem;\n  color: #fff;\n  padding: 1rem;\n  position: relative;\n  z-index: 0;\n}\n.featured-hotels::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #76b5c5;\n  z-index: -1;\n}\n\n.hotel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.hotel-name {\n  font-size: 2.6rem;\n}\n\n.hotel-price {\n  font-size: 1.8rem;\n}\n\n.hotel-rating {\n  margin: 1rem 0 2.5rem;\n}\n\n.rating {\n  color: #eab676;\n  text-shadow: 0 0 3px black;\n}\n\n/* Special Offer */\n.paragraph {\n  color: #063970;\n}\n.paragraph .btn.btn-gradient {\n  background: #063970;\n  display: block;\n  width: fit-content;\n  margin: 2rem auto 0 auto;\n}\n\n.offer {\n  background: linear-gradient(to right, rgba(171, 219, 227, 0.8), rgba(30, 129, 176, 0.8)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") bottom center no-repeat;\n  background-size: cover;\n}\n.offer .container .offer-content {\n  background-color: #fff;\n  text-align: center;\n  padding: 5rem 1rem;\n  position: relative;\n  overflow: hidden;\n}\n.offer .container .offer-content .discount {\n  background-color: #eab676;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem;\n  text-transform: uppercase;\n  outline: 2px solid #eab676;\n  outline-offset: 0.5rem;\n  font-weight: bold;\n}\n\n.rooms {\n  background-color: #eeeee4;\n}\n\n.image-wrap {\n  position: relative;\n  height: 25rem;\n  width: 100%;\n}\n.image-wrap::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(118, 181, 197, 0.4);\n}\n\n.room-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.room-name {\n  font-size: 2.6rem;\n  background-color: #eab676;\n  color: #fff;\n  padding: 0.5rem 2rem;\n  position: absolute;\n  left: 0;\n  bottom: 2.5rem;\n  z-index: 10;\n}\n\n.room-price {\n  display: block;\n  font-size: 3.6rem;\n  font-weight: bold;\n  color: #eab676;\n}\n\n.per-night {\n  color: #76b5c5;\n  font-size: 1.4rem;\n  font-weight: 100;\n}\n\n.rooms-btn {\n  color: #1e81b0;\n  padding: 0;\n  transition: color 0.5s;\n}\n.rooms-btn:hover {\n  color: #eab676;\n}\n\n.contact-content {\n  display: flex;\n  justify-content: center;\n}\n\n.traveler-wrap {\n  display: none;\n}\n\n.bar {\n  display: block;\n  position: relative;\n}\n.bar::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  height: 2px;\n  width: 100%;\n  background: #1e81b0;\n  transform: scaleX(0);\n  transition: transform 0.5s;\n  transform-origin: left;\n}\n\n.contact-form {\n  width: 100%;\n  background-image: linear-gradient(#abdbe3, #1e81b0);\n  padding: 2.5rem;\n  border-radius: 12px;\n}\n.contact-form input {\n  width: 100%;\n  display: block;\n  background: transparent;\n  color: #fff;\n  font-weight: normal;\n  border: none;\n  border-bottom: 2px solid #fff;\n  outline: none;\n  font-size: 1.5rem;\n}\n.contact-form input:focus + .bar::after {\n  transform: scaleX(1);\n}\n.contact-form textarea {\n  display: block;\n  background: transparent;\n  color: #fff;\n  font-weight: normal;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid #fff;\n  resize: none;\n  outline: none;\n  font-size: 1.5rem;\n}\n.contact-form textarea:focus + .bar::after {\n  transform: scaleX(1);\n}\n.contact-form .btn {\n  background-color: #063970;\n}\n.contact-form .btn .envelope {\n  margin-left: 0.5rem;\n}\n.contact-form .btn:hover {\n  cursor: pointer;\n}\n\n.input-group {\n  margin-bottom: 2rem;\n}\n\n.form-button {\n  background: #1e81b0;\n}\n\n.logo {\n  max-width: 200px;\n}\n\nfooter {\n  padding: 5rem 1rem;\n  background-color: #abdbe3;\n  color: #063970;\n}\n\n.footer-content-brand {\n  margin-bottom: 5rem;\n}\n\n.footer-heading {\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n\n.social-media {\n  display: flex;\n}\n.social-media .sm-link {\n  font-size: 2rem;\n  width: 4rem;\n  height: 4rem;\n  border: 2px solid #eab676;\n  border-radius: 50%;\n  display: flex;\n  margin-right: 1rem;\n  transition: background-color 0.5s;\n}\n.social-media .sm-link i {\n  margin: auto;\n}\n.social-media .sm-link:hover {\n  background-color: #eab676;\n  color: #063970;\n}\n\n/*Variables*/\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.6rem;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 760px) {\n  .header {\n    height: 10rem;\n  }\n  .header.active {\n    height: 6rem;\n  }\n\n  .title {\n    font-size: 8rem;\n  }\n  .title .substitude {\n    top: 9rem !important;\n  }\n\n  .contact-content {\n    justify-content: space-between;\n  }\n\n  .traveler-wrap {\n    display: block;\n    flex: 0 0 45%;\n  }\n  .traveler-wrap img {\n    width: 100%;\n  }\n\n  .contact-form {\n    flex: 0 0 50%;\n    align-self: flex-start;\n  }\n\n  .input-group-wrap {\n    display: flex;\n  }\n  .input-group-wrap .input-group {\n    width: 50%;\n    margin-right: 2rem;\n  }\n  .input-group-wrap .input-group:last-child {\n    margin-right: 0;\n  }\n\n  .footer-content {\n    display: flex;\n    justify-content: space-between;\n    overflow: hidden;\n  }\n  .footer-content .footer-content-brand {\n    margin-bottom: 0;\n    flex: 0 0 60%;\n  }\n\n  .footer-heading {\n    margin-bottom: 5rem;\n  }\n\n  .social-media-wrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-right: 5%;\n  }\n}\n@media screen and (min-width: 1000px) {\n  section:not(.booking) {\n    padding: 10rem 0;\n  }\n\n  .hamburger-menu {\n    display: none;\n  }\n\n  nav .nav-list {\n    position: initial;\n    width: initial;\n    height: initial;\n    background-color: transparent;\n    flex-direction: row;\n    padding: 0.5rem 0.5rem;\n  }\n  nav .nav-list .nav-item:not(:last-child) {\n    margin-right: 3rem;\n    margin-bottom: 0;\n  }\n\n  .nav-link {\n    font-size: 1.7rem;\n    font-weight: normal;\n    transition: color 0.5s;\n  }\n\n  .title {\n    font-size: 12rem;\n  }\n  .title .substitude {\n    margin-top: 5rem !important;\n    font-size: 4.6rem !important;\n  }\n\n  .book-form {\n    display: flex;\n    justify-content: space-between;\n  }\n  .book-form .input-group {\n    margin-bottom: 0;\n  }\n  .book-form .input-group:first-child {\n    flex: 0 0 20%;\n  }\n\n  .input,\n.options {\n    min-width: 10rem;\n  }\n\n  /* .rooms-grid {\n    grid-template-columns: repeat(auto-fit, minmax(40rem, 1ft));\n    grid-gap: 8rem;\n  }\n  .featured-rooms {\n    flex-direction: row;\n    align-items: flex-start;\n  } */\n  .rooms-info-wrap {\n    margin-left: 1.5rem;\n  }\n\n  .booking {\n    min-height: 4rem;\n  }\n  .booking .container .form {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    gap: 0.3rem;\n  }\n  .booking .container .form .input-group:first-child .input {\n    width: 40rem;\n  }\n  .booking .container .form .btn {\n    top: 6rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/main.scss","webpack://./src/styles/hero.scss","webpack://./src/styles/contact.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"colors.scss\";\n\n$nav-list-font-weight: 600;\n\nheader {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  background-color: $eastern-blue;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\nheader.active {\n  background-color: rgba(30, 129, 176, 0.5);\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  .logo img{\n    position: relative;\n    max-width: 200px;\n    /* background-color: $eastern-blue; */\n    /* border-radius: 50%; */\n    margin-top: 4.5rem;\n  }\n  .hamburger-menu {\n    font-size: 2.6rem;\n    color: $green-white;\n    cursor: pointer;\n    position: relative;\n    z-index: 1500;\n  }\n\n  .hamburger-menu .fa-times {\n    display: none;\n  }\n\n  .nav-list {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 200%;\n    width: 100%;\n    height: 100vh;\n    background: rgba($eastern-blue, 0.5);\n    color: $green-white;\n    align-items: center;\n    justify-content: center;\n    z-index: 1400;\n    transition: all 0.5s;\n    \n    .nav-item {\n      .nav-link {\n        position: relative;\n        display: block;\n        color: $green-white;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        padding: 1rem;\n        font-weight: $nav-list-font-weight;\n        transition: all 0.2s;\n        &::before {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 1px;\n          background-color: $green-white;\n          transition: width 0.5s ease;\n        }\n        &:hover::before {\n          width: 100%;\n        }\n      }\n    }\n  }\n}\n\n.menu-open .nav-list {\n  left: 0;\n}\n\n.menu-open .hamburger-menu {\n  .fa-times {\n    display: block;\n  }\n  .fa-bars {\n    display: none;\n  }\n}","$eastern-blue: #1e81b0;\n$powder-blue: #abdbe3;\n$green-white: #eeeee4;\n$burnt-sienna: #e28743;\n$tacao: #eab676;\n$glacier: #76b5c5;\n$glacier-transparent: rgba(118, 181, 197, 0.4);\n$eternity: #21130d;\n$burnt-umber: #873e23;\n$catalina-blue: #063970;\n$chathams-blue: #154c79;\n$bg-gradient: linear-gradient(rgb(171, 219, 227), rgb(30, 129, 176));\n$btn-bg-gradient: linear-gradient(#76b5c5, #abdbe3);\n$btn-gradient-hover: linear-gradient(#1e81b0, #abdbe3);","@import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap');\n@import \"header.scss\";\n@import \"hero.scss\";\n@import \"colors.scss\";\n@import \"contact.scss\";\n@import \"footer.scss\";\n\n$nav-list-font-weight: 600;\n\n/*Variables*/\n$body-font-size: 1.6rem;\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/*Global size*/\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: $body-font-size;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nsection {\n  padding: 5rem 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 120rem;\n  padding: 0 1.5rem;\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 760px){\n  // Header section style\n  .header\n  { \n    height: 10rem;\n    &.active {\n      height: 6rem;\n    }\n  }\n  // Hero Section Styles\n  .title {\n    font-size: 8rem;\n        .substitude {\n          top: 9rem !important;\n        }\n  }\n  // Contact section styles\n  .contact-content {\n    justify-content: space-between;\n  }\n  .traveler-wrap {\n    display: block;\n    flex: 0 0 45%;\n    img {\n      width: 100%;\n    }\n  }\n  .contact-form {\n    flex: 0 0 50%;\n    align-self: flex-start;\n  }\n  .input-group-wrap {\n    display: flex;\n    .input-group {\n      width: 50%;\n      margin-right: 2rem;\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n  // Footer section styls \n  .footer-content {\n    display: flex;\n    justify-content: space-between;\n    overflow: hidden;\n    .footer-content-brand {\n      margin-bottom: 0;\n      flex: 0 0 60%;\n    }\n  }\n  .footer-heading {\n    margin-bottom: 5rem;\n  }\n  .social-media-wrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-right: 5%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  section:not(.booking) {\n    padding: 10rem 0;\n  }\n  // Header section styles\n  .hamburger-menu {\n    display: none;\n  }\n  nav {\n    .nav-list {\n      position: initial;\n      width: initial;\n      height: initial;\n      background-color: transparent;\n      flex-direction: row;\n      padding: 0.5rem 0.5rem;\n\n      .nav-item:not(:last-child) {\n        margin-right: 3rem;\n        margin-bottom: 0;\n      }\n    }\n  }\n  .nav-link {\n    font-size: 1.7rem;\n    font-weight: normal;\n    transition: color 0.5s;\n  }\n  // Hero section styles\n  .title {\n    font-size: 12rem;\n    .substitude {\n      margin-top: 5rem !important;\n      font-size: 4.6rem !important;\n    }\n  }\n  // Booking section styles\n  .book-form {\n    display: flex;\n    justify-content: space-between;\n    .input-group {\n      margin-bottom: 0;\n      &:first-child {\n        flex: 0 0 20%;\n      }\n    }\n  }\n  .input,\n  .options {\n    min-width: 10rem;\n  }\n  // Rooms section styles \n  /* .rooms-grid {\n    grid-template-columns: repeat(auto-fit, minmax(40rem, 1ft));\n    grid-gap: 8rem;\n  }\n  .featured-rooms {\n    flex-direction: row;\n    align-items: flex-start;\n  } */\n  .rooms-info-wrap {\n    margin-left: 1.5rem;\n  }\n  .booking {\n    min-height: 4rem;\n    .container {\n      .form {\n        .input-group:first-child {\n          .input {\n            width: 40rem;\n          }\n        }\n        display: flex;\n        justify-content: center;\n        position: relative;\n        gap: 0.3rem;\n        .btn {\n          top: 6rem;\n        }\n      }\n    }\n  }\n}","@import \"./colors.scss\";\n\n$label-font-size: 1.3rem;\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: url(\"../assets/images/background-hero.jpg\") center no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  z-index: 0;\n\n  div {\n    margin-bottom: 9rem;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: inherit;\n    height: inherit;\n    opacity: 0.2;\n    background-color: $green-white;\n    z-index: -1;\n  }\n\n  .main-heading {\n    position: relative;\n    color: #fff;\n    text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);\n    margin-bottom: 0.5rem;\n    text-transform: uppercase;\n      .title {\n        .substitude {\n            top: 4rem;\n            bottom: -4rem;\n            left: 0;\n            right: 0;\n            position: absolute;\n            margin-top: 1rem;\n            display: inline-block;\n            font-size: 2.5rem;\n            font-family: \"Courgette\", sans-serif;\n            text-shadow: 1px 1px black;\n            letter-spacing: 0.5rem;\n            text-transform: lowercase;\n        }\n    }\n  }\n}\n\n.btn {\n  position: relative;\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.8rem 2.5rem;\n  border: none;\n  border-radius: 10rem;\n  display: inline-flex;\n  align-items: center;\n}\n\n.btn-gradient {\n  background: $eastern-blue;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n/*   &:hover {\n    background-image: $btn-gradient-hover;\n  } */\n  &::before {\n    content: \"\";\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 0;\n    position: absolute;\n    background: $btn-bg-gradient;\n    z-index: -1;\n    transition: all 0.4s ease-in-out;\n  }\n  &:hover::before {\n    background: $btn-bg-gradient;\n    color: black;\n    width: 100%;\n    opacity: 0.85;\n  }\n}\n\n.icon {\n  font-size: 1.5rem;\n  margin-left: 0.5rem;\n  margin-right: -5px;\n}\n\n.main-btn {\n  margin-top: 6rem;\n}\n\n//Booking\n\n.booking {\n  background-image: $bg-gradient;\n  min-height: 500px;\n  .input-group {\n    margin-bottom: 1.5rem;\n\n    .input-label {\n      display: block;\n      font-size: $label-font-size;\n      text-transform: uppercase;\n      color:#fff;\n      font-weight: bold;\n      margin-bottom: 0.5rem;\n    }\n    .input, .options {\n      outline: none;\n      border: none;\n      width: 100%;\n      padding: 0.5rem;\n      min-height: 4rem;\n      font-weight: bold;\n      color: #a1a1a1;\n      letter-spacing: 2px;\n      font-family: \"Open Sans\", sans-serif;\n      background-color: #fff;\n      /* resize: none; */\n    }\n  }\n\n  .form-btn {\n    $circle-element: 4rem;\n    position: absolute;\n    margin-top: 1rem;\n    cursor: pointer;\n    background-color: $glacier;\n    z-index: 1;\n    .fa-solid {\n      transition: transform 1s ease;\n    }\n      &:hover {\n        background-color: $eastern-blue;\n        box-shadow: 0px 0px 2px #fff;\n        .fa-solid {\n          transform: rotateY(180deg);\n        }\n      }\n    }\n}\n.btn {\n  .key {\n    margin-left: 0.5rem;\n    position: relative;\n    padding: 1.2rem 0;\n  \n    i {\n      position: absolute;\n      top: 30%;\n      bottom: 50%;\n      right: -10%;\n      left: 58%;\n      /* transform: translate(95%, -50%); */\n      transition: transform 0.5s ease-in-out;\n    }\n  }\n\n  .door {\n    margin-left: 0.5rem;\n  }\n  .door-open {\n    display: none;\n  }\n  &:hover .key i {\n    transform: rotate(45deg);\n  }\n  &:hover .door-closed {\n    display: none;\n  }\n  &:hover .door-open {\n    display: inline;\n  }\n}\n\n/* Featured Hotels section styles */\n.hotels {\n  background-color: #eeeee4;\n}\n.section-head {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n\n.heading {\n  display: block;\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n.sub-heading {\n  font-size: 1.7rem;\n  font-family: \"Courgette\", cursive;\n  font-weight: 300;\n  color: #a5a5a5;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  grid-gap: 2.5rem;\n}\n\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.featured-hotels {\n  height: 35rem;\n  color: #fff;\n  padding: 1rem;\n  position: relative;\n  z-index: 0;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $glacier;\n    z-index: -1;\n  }\n}\n\n.hotel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.hotel-name {\n  font-size: 2.6rem;\n}\n.hotel-price {\n  font-size: 1.8rem;\n}\n.hotel-rating {\n  margin: 1rem 0 2.5rem;\n}\n.rating {\n  color: $tacao;\n  text-shadow: 0 0 3px black;\n}\n\n/* Special Offer */\n.paragraph {\n  color: $catalina-blue;\n  .btn.btn-gradient {\n    background: $catalina-blue;\n    display: block;\n    width: fit-content;\n    margin: 2rem auto 0 auto;\n  }\n}\n\n.offer {\n  background: linear-gradient(to right, rgba(171, 219, 227, 0.8), rgba(30, 129, 176, 0.8)), url(\"../assets/images/the_paradise_bg.jpg\") bottom center no-repeat;\n  background-size: cover;\n  .container {\n    .offer-content {\n      background-color: #fff;\n      text-align: center;\n      padding: 5rem 1rem;\n      position: relative;\n      overflow: hidden;\n        .discount {\n        background-color: $tacao;\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: 1rem;\n        text-transform: uppercase;\n        outline: 2px solid $tacao;\n        outline-offset: .5rem;\n        font-weight: bold;\n      }\n    }\n  }\n}\n\n// Rooms section styles\n\n.rooms {\n  background-color: $green-white;\n}\n.image-wrap {\n  position: relative;\n  height: 25rem;\n  width: 100%;\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $glacier-transparent;\n  }\n}\n.room-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.room-name {\n  font-size: 2.6rem;\n  background-color: $tacao;\n  color: #fff;\n  padding: 0.5rem 2rem;\n  position: absolute;\n  left: 0;\n  bottom: 2.5rem;\n  z-index: 10;\n}\n.room-price {\n  display: block;\n  font-size: 3.6rem;\n  font-weight: bold;\n  color: $tacao;\n}\n.per-night {\n  color: $glacier;\n  font-size: 1.4rem;\n  font-weight: 100;\n}\n.rooms-btn {\n  color: $eastern-blue;\n  padding: 0;\n  transition: color 0.5s;\n\n  &:hover {\n    color: $tacao;\n  }\n}\n",".contact-content {\n  display: flex;\n  justify-content: center;\n}\n\n.traveler-wrap {\n  display: none;\n}\n\n.bar {\n  display: block;\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: 0px;\n    height: 2px;\n    width: 100%;\n    background: $eastern-blue;\n    transform: scaleX(0);\n    transition: transform 0.5s;\n    transform-origin: left;\n  }\n}\n\n.contact-form {\n  width: 100%;\n  background-image: $bg-gradient;\n  padding: 2.5rem;\n  border-radius: 12px;\n  input {\n    width: 100%;\n    display: block;\n    background: transparent;\n    color: #fff;\n    font-weight: normal;\n    border: none;\n    border-bottom: 2px solid #fff;\n    outline: none;\n    font-size: 1.5rem;\n  }\n  input:focus+.bar::after {\n    transform: scaleX(1);\n  }\n  textarea {\n    display: block;\n    background: transparent;\n    color: #fff;\n    font-weight: normal;\n    width: 100%;\n    border: none;\n    border-bottom: 2px solid #fff;\n    resize: none;\n    outline: none;\n    font-size: 1.5rem;\n    &:focus+.bar::after {\n      transform: scaleX(1);\n    }\n  }\n\n  .btn {\n   background-color: $catalina-blue;\n    .envelope {\n      margin-left: 0.5rem;\n    }\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n\n.input-group {\n  margin-bottom: 2rem;\n}\n\n\n.form-button {\n  background: $eastern-blue;\n}",".logo {\n  max-width: 200px;\n}\n\nfooter {\n  padding: 5rem 1rem;\n  background-color: $powder-blue;\n  color: $catalina-blue;\n}\n\n.footer-content-brand {\n  margin-bottom: 5rem;\n}\n\n.footer-heading {\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n\n.social-media {\n  display: flex;\n  .sm-link {\n    font-size: 2rem;\n    width: 4rem;\n    height: 4rem;\n    border: 2px solid $tacao;\n    border-radius: 50%;\n    display: flex;\n    margin-right: 1rem;\n    transition: background-color 0.5s;\n    i {\n      margin: auto;\n    }\n    &:hover {\n      background-color: $tacao;\n      color: $catalina-blue;\n    }\n  }\n}"],"sourceRoot":""}]);
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
window.addEventListener("scroll", function () {
    var windowPosition = this.window.scrollY > 0;
    header.classList.toggle("active", this.window.scrollY > 0);
});
hamburgerMenu.addEventListener("click", toggleMenu);
function toggleMenu() {
    header.classList.toggle('menu-open');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sK1FBQStRLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLFlBQVksS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLFlBQVksS0FBSyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsU0FBUyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxZQUFZLFlBQVksU0FBUyxZQUFZLE9BQU8sVUFBVSxVQUFVLFdBQVcsUUFBUSxZQUFZLEtBQUssVUFBVSxRQUFRLE9BQU8sV0FBVyxZQUFZLFNBQVMsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUs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Q0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNEI7QUFDRDtBQUUzQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUU5RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO0lBQ2hDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRXBELFNBQVMsVUFBVTtJQUNqQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9sYXp5LmpzIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2RlbW8tcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVtby1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kZW1vLXBvcnRmb2xpby8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaGVyby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3RoZV9wYXJhZGlzZV9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q291cmdldHRlfE9wZW4rU2Fuczo0MDAsODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTgxYjA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuaGVhZGVyLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAxMjksIDE3NiwgMC41KTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5uYXYgLmxvZ28gaW1nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xcbiAgbWFyZ2luLXRvcDogNC41cmVtO1xcbn1cXG5uYXYgLmhhbWJ1cmdlci1tZW51IHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgY29sb3I6ICNlZWVlZTQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxNTAwO1xcbn1cXG5uYXYgLmhhbWJ1cmdlci1tZW51IC5mYS10aW1lcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5uYXYgLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDEyOSwgMTc2LCAwLjUpO1xcbiAgY29sb3I6ICNlZWVlZTQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxNDAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcbm5hdiAubmF2LWxpc3QgLm5hdi1pdGVtIC5uYXYtbGluayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZWVlZWU0O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5uYXYgLm5hdi1saXN0IC5uYXYtaXRlbSAubmF2LWxpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlNDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXG59XFxubmF2IC5uYXYtbGlzdCAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51LW9wZW4gLm5hdi1saXN0IHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tZW51LW9wZW4gLmhhbWJ1cmdlci1tZW51IC5mYS10aW1lcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1lbnUtb3BlbiAuaGFtYnVyZ2VyLW1lbnUgLmZhLWJhcnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5oZXJvIGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiA5cmVtO1xcbn1cXG4uaGVybzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlNDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uaGVybyAubWFpbi1oZWFkaW5nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uaGVybyAubWFpbi1oZWFkaW5nIC50aXRsZSAuc3Vic3RpdHVkZSB7XFxuICB0b3A6IDRyZW07XFxuICBib3R0b206IC00cmVtO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG59XFxuXFxuLmJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6ICMxZTgxYjA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgLyogICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYnRuLWdyYWRpZW50LWhvdmVyO1xcbiAgICB9ICovXFxufVxcbi5idG4tZ3JhZGllbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNzZiNWM1LCAjYWJkYmUzKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi5idG4tZ3JhZGllbnQ6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzc2YjVjNSwgI2FiZGJlMyk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogLTVweDtcXG59XFxuXFxuLm1haW4tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxufVxcblxcbi5ib29raW5nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjYWJkYmUzLCAjMWU4MWIwKTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbn1cXG4uYm9va2luZyAuaW5wdXQtZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4uYm9va2luZyAuaW5wdXQtZ3JvdXAgLmlucHV0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLmJvb2tpbmcgLmlucHV0LWdyb3VwIC5pbnB1dCwgLmJvb2tpbmcgLmlucHV0LWdyb3VwIC5vcHRpb25zIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjYTFhMWExO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiByZXNpemU6IG5vbmU7ICovXFxufVxcbi5ib29raW5nIC5mb3JtLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YjVjNTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5ib29raW5nIC5mb3JtLWJ0biAuZmEtc29saWQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcbi5ib29raW5nIC5mb3JtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4MWIwO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZjtcXG59XFxuLmJvb2tpbmcgLmZvcm0tYnRuOmhvdmVyIC5mYS1zb2xpZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmJ0biAua2V5IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxLjJyZW0gMDtcXG59XFxuLmJ0biAua2V5IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBib3R0b206IDUwJTtcXG4gIHJpZ2h0OiAtMTAlO1xcbiAgbGVmdDogNTglO1xcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTUlLCAtNTAlKTsgKi9cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuIC5kb29yIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcbi5idG4gLmRvb3Itb3BlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuOmhvdmVyIC5rZXkgaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5idG46aG92ZXIgLmRvb3ItY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG46aG92ZXIgLmRvb3Itb3BlbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi8qIEZlYXR1cmVkIEhvdGVscyBzZWN0aW9uIHN0eWxlcyAqL1xcbi5ob3RlbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlNDtcXG59XFxuXFxuLnNlY3Rpb24taGVhZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5zdWItaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogI2E1YTVhNTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzByZW0sIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDIuNXJlbTtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZlYXR1cmVkLWhvdGVscyB7XFxuICBoZWlnaHQ6IDM1cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG59XFxuLmZlYXR1cmVkLWhvdGVsczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YjVjNTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uaG90ZWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmhvdGVsLW5hbWUge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbi5ob3RlbC1wcmljZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmhvdGVsLXJhdGluZyB7XFxuICBtYXJnaW46IDFyZW0gMCAyLjVyZW07XFxufVxcblxcbi5yYXRpbmcge1xcbiAgY29sb3I6ICNlYWI2NzY7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDNweCBibGFjaztcXG59XFxuXFxuLyogU3BlY2lhbCBPZmZlciAqL1xcbi5wYXJhZ3JhcGgge1xcbiAgY29sb3I6ICMwNjM5NzA7XFxufVxcbi5wYXJhZ3JhcGggLmJ0bi5idG4tZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogIzA2Mzk3MDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiAycmVtIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4ub2ZmZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE3MSwgMjE5LCAyMjcsIDAuOCksIHJnYmEoMzAsIDEyOSwgMTc2LCAwLjgpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBib3R0b20gY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5vZmZlciAuY29udGFpbmVyIC5vZmZlci1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cmVtIDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ub2ZmZXIgLmNvbnRhaW5lciAub2ZmZXItY29udGVudCAuZGlzY291bnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjY3NjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZWFiNjc2O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucm9vbXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlNDtcXG59XFxuXFxuLmltYWdlLXdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaW1hZ2Utd3JhcDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOCwgMTgxLCAxOTcsIDAuNCk7XFxufVxcblxcbi5yb29tLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5yb29tLW5hbWUge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFiNjc2O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDIuNXJlbTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ucm9vbS1wcmljZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMy42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2VhYjY3NjtcXG59XFxuXFxuLnBlci1uaWdodCB7XFxuICBjb2xvcjogIzc2YjVjNTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnJvb21zLWJ0biB7XFxuICBjb2xvcjogIzFlODFiMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbn1cXG4ucm9vbXMtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZWFiNjc2O1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRyYXZlbGVyLXdyYXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJhciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJhcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzFlODFiMDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNhYmRiZTMsICMxZTgxYjApO1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuLmNvbnRhY3QtZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmNvbnRhY3QtZm9ybSBpbnB1dDpmb2N1cyArIC5iYXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzICsgLmJhcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcbi5jb250YWN0LWZvcm0gLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzOTcwO1xcbn1cXG4uY29udGFjdC1mb3JtIC5idG4gLmVudmVsb3BlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcbi5jb250YWN0LWZvcm0gLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dC1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzFlODFiMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmRiZTM7XFxuICBjb2xvcjogIzA2Mzk3MDtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50LWJyYW5kIHtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5mb290ZXItaGVhZGluZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc29jaWFsLW1lZGlhIC5zbS1saW5rIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VhYjY3NjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxufVxcbi5zb2NpYWwtbWVkaWEgLnNtLWxpbmsgaSB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5zb2NpYWwtbWVkaWEgLnNtLWxpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjY3NjtcXG4gIGNvbG9yOiAjMDYzOTcwO1xcbn1cXG5cXG4vKlZhcmlhYmxlcyovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qR2xvYmFsIHNpemUqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwcmVtO1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbiAgLmhlYWRlci5hY3RpdmUge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICB9XFxuICAudGl0bGUgLnN1YnN0aXR1ZGUge1xcbiAgICB0b3A6IDlyZW0gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAudHJhdmVsZXItd3JhcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbGV4OiAwIDAgNDUlO1xcbiAgfVxcbiAgLnRyYXZlbGVyLXdyYXAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFjdC1mb3JtIHtcXG4gICAgZmxleDogMCAwIDUwJTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5pbnB1dC1ncm91cC13cmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5pbnB1dC1ncm91cC13cmFwIC5pbnB1dC1ncm91cCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIH1cXG4gIC5pbnB1dC1ncm91cC13cmFwIC5pbnB1dC1ncm91cDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgLmZvb3Rlci1jb250ZW50IC5mb290ZXItY29udGVudC1icmFuZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZsZXg6IDAgMCA2MCU7XFxuICB9XFxuXFxuICAuZm9vdGVyLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgfVxcblxcbiAgLnNvY2lhbC1tZWRpYS13cmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgc2VjdGlvbjpub3QoLmJvb2tpbmcpIHtcXG4gICAgcGFkZGluZzogMTByZW0gMDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYgLm5hdi1saXN0IHtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIHdpZHRoOiBpbml0aWFsO1xcbiAgICBoZWlnaHQ6IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgfVxcbiAgbmF2IC5uYXYtbGlzdCAubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5uYXYtbGluayB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxMnJlbTtcXG4gIH1cXG4gIC50aXRsZSAuc3Vic3RpdHVkZSB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW0gIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiA0LjZyZW0gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5ib29rLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9vay1mb3JtIC5pbnB1dC1ncm91cCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuICAuYm9vay1mb3JtIC5pbnB1dC1ncm91cDpmaXJzdC1jaGlsZCB7XFxuICAgIGZsZXg6IDAgMCAyMCU7XFxuICB9XFxuXFxuICAuaW5wdXQsXFxuLm9wdGlvbnMge1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgfVxcblxcbiAgLyogLnJvb21zLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwcmVtLCAxZnQpKTtcXG4gICAgZ3JpZC1nYXA6IDhyZW07XFxuICB9XFxuICAuZmVhdHVyZWQtcm9vbXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH0gKi9cXG4gIC5yb29tcy1pbmZvLXdyYXAge1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgfVxcblxcbiAgLmJvb2tpbmcge1xcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgfVxcbiAgLmJvb2tpbmcgLmNvbnRhaW5lciAuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgfVxcbiAgLmJvb2tpbmcgLmNvbnRhaW5lciAuZm9ybSAuaW5wdXQtZ3JvdXA6Zmlyc3QtY2hpbGQgLmlucHV0IHtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgfVxcbiAgLmJvb2tpbmcgLmNvbnRhaW5lciAuZm9ybSAuYnRuIHtcXG4gICAgdG9wOiA2cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZXJvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29udGFjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJDUmE7RURTYixtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUVGRjs7QUZLQTtFQUNFLHlDQUFBO0FFRkY7O0FGS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRUZGO0FGR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FFREo7QUZHRTtFQUNFLGlCQUFBO0VBQ0EsY0MvQlU7RURnQ1YsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRURKO0FGSUU7RUFDRSxhQUFBO0FFRko7QUZLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQ2xEVTtFRG1EVixtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FFSEo7QUZNTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNDNURNO0VENkROLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBaEVlO0VBaUVmLG9CQUFBO0FFSlI7QUZLUTtFQUNFLFdBQUE7RUFD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LFNBQUE7RUFvaUJSO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiY29sb3JzLnNjc3NcXFwiO1xcblxcbiRuYXYtbGlzdC1mb250LXdlaWdodDogNjAwO1xcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbmhlYWRlci5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMTI5LCAxNzYsIDAuNSk7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC5sb2dvIGltZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXFxuICAgIG1hcmdpbi10b3A6IDQuNXJlbTtcXG4gIH1cXG4gIC5oYW1idXJnZXItbWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICBjb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTUwMDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItbWVudSAuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDIwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRlYXN0ZXJuLWJsdWUsIDAuNSk7XFxuICAgIGNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgXFxuICAgIC5uYXYtaXRlbSB7XFxuICAgICAgLm5hdi1saW5rIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgY29sb3I6ICRncmVlbi13aGl0ZTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkbmF2LWxpc3QtZm9udC13ZWlnaHQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4td2hpdGU7XFxuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWVudS1vcGVuIC5uYXYtbGlzdCB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubWVudS1vcGVuIC5oYW1idXJnZXItbWVudSB7XFxuICAuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5mYS1iYXJzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsXCIkZWFzdGVybi1ibHVlOiAjMWU4MWIwO1xcbiRwb3dkZXItYmx1ZTogI2FiZGJlMztcXG4kZ3JlZW4td2hpdGU6ICNlZWVlZTQ7XFxuJGJ1cm50LXNpZW5uYTogI2UyODc0MztcXG4kdGFjYW86ICNlYWI2NzY7XFxuJGdsYWNpZXI6ICM3NmI1YzU7XFxuJGdsYWNpZXItdHJhbnNwYXJlbnQ6IHJnYmEoMTE4LCAxODEsIDE5NywgMC40KTtcXG4kZXRlcm5pdHk6ICMyMTEzMGQ7XFxuJGJ1cm50LXVtYmVyOiAjODczZTIzO1xcbiRjYXRhbGluYS1ibHVlOiAjMDYzOTcwO1xcbiRjaGF0aGFtcy1ibHVlOiAjMTU0Yzc5O1xcbiRiZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHJnYigxNzEsIDIxOSwgMjI3KSwgcmdiKDMwLCAxMjksIDE3NikpO1xcbiRidG4tYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgjNzZiNWM1LCAjYWJkYmUzKTtcXG4kYnRuLWdyYWRpZW50LWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzFlODFiMCwgI2FiZGJlMyk7XCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvdXJnZXR0ZXxPcGVuK1NhbnM6NDAwLDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IFxcXCJoZWFkZXIuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiaGVyby5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJjb2xvcnMuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiY29udGFjdC5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJmb290ZXIuc2Nzc1xcXCI7XFxuXFxuJG5hdi1saXN0LWZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuLypWYXJpYWJsZXMqL1xcbiRib2R5LWZvbnQtc2l6ZTogMS42cmVtO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKkdsb2JhbCBzaXplKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2MHB4KXtcXG4gIC8vIEhlYWRlciBzZWN0aW9uIHN0eWxlXFxuICAuaGVhZGVyXFxuICB7IFxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICAmLmFjdGl2ZSB7XFxuICAgICAgaGVpZ2h0OiA2cmVtO1xcbiAgICB9XFxuICB9XFxuICAvLyBIZXJvIFNlY3Rpb24gU3R5bGVzXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgICAgICAuc3Vic3RpdHVkZSB7XFxuICAgICAgICAgIHRvcDogOXJlbSAhaW1wb3J0YW50O1xcbiAgICAgICAgfVxcbiAgfVxcbiAgLy8gQ29udGFjdCBzZWN0aW9uIHN0eWxlc1xcbiAgLmNvbnRhY3QtY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC50cmF2ZWxlci13cmFwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsZXg6IDAgMCA0NSU7XFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG4gIC5jb250YWN0LWZvcm0ge1xcbiAgICBmbGV4OiAwIDAgNTAlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgLmlucHV0LWdyb3VwLXdyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAuaW5wdXQtZ3JvdXAge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAvLyBGb290ZXIgc2VjdGlvbiBzdHlscyBcXG4gIC5mb290ZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLmZvb3Rlci1jb250ZW50LWJyYW5kIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIGZsZXg6IDAgMCA2MCU7XFxuICAgIH1cXG4gIH1cXG4gIC5mb290ZXItaGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICB9XFxuICAuc29jaWFsLW1lZGlhLXdyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICBzZWN0aW9uOm5vdCguYm9va2luZykge1xcbiAgICBwYWRkaW5nOiAxMHJlbSAwO1xcbiAgfVxcbiAgLy8gSGVhZGVyIHNlY3Rpb24gc3R5bGVzXFxuICAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgLm5hdi1saXN0IHtcXG4gICAgICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gICAgICB3aWR0aDogaW5pdGlhbDtcXG4gICAgICBoZWlnaHQ6IGluaXRpYWw7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcblxcbiAgICAgIC5uYXYtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAubmF2LWxpbmsge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcXG4gIH1cXG4gIC8vIEhlcm8gc2VjdGlvbiBzdHlsZXNcXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJyZW07XFxuICAgIC5zdWJzdGl0dWRlIHtcXG4gICAgICBtYXJnaW4tdG9wOiA1cmVtICFpbXBvcnRhbnQ7XFxuICAgICAgZm9udC1zaXplOiA0LjZyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgfVxcbiAgLy8gQm9va2luZyBzZWN0aW9uIHN0eWxlc1xcbiAgLmJvb2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLmlucHV0LWdyb3VwIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZmxleDogMCAwIDIwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC5pbnB1dCxcXG4gIC5vcHRpb25zIHtcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIH1cXG4gIC8vIFJvb21zIHNlY3Rpb24gc3R5bGVzIFxcbiAgLyogLnJvb21zLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwcmVtLCAxZnQpKTtcXG4gICAgZ3JpZC1nYXA6IDhyZW07XFxuICB9XFxuICAuZmVhdHVyZWQtcm9vbXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH0gKi9cXG4gIC5yb29tcy1pbmZvLXdyYXAge1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgfVxcbiAgLmJvb2tpbmcge1xcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAuZm9ybSB7XFxuICAgICAgICAuaW5wdXQtZ3JvdXA6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAuaW5wdXQge1xcbiAgICAgICAgICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgICAgICAuYnRuIHtcXG4gICAgICAgICAgdG9wOiA2cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIixcIkBpbXBvcnQgXFxcIi4vY29sb3JzLnNjc3NcXFwiO1xcblxcbiRsYWJlbC1mb250LXNpemU6IDEuM3JlbTtcXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1oZXJvLmpwZ1xcXCIpIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMDtcXG5cXG4gIGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDlyZW07XFxuICB9XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLXdoaXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG5cXG4gIC5tYWluLWhlYWRpbmcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIC50aXRsZSB7XFxuICAgICAgICAuc3Vic3RpdHVkZSB7XFxuICAgICAgICAgICAgdG9wOiA0cmVtO1xcbiAgICAgICAgICAgIGJvdHRvbTogLTRyZW07XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiAwLjhyZW0gMi41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogJGVhc3Rlcm4tYmx1ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDE7XFxuLyogICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1ncmFkaWVudC1ob3ZlcjtcXG4gIH0gKi9cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogJGJ0bi1iZy1ncmFkaWVudDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgfVxcbiAgJjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZDogJGJ0bi1iZy1ncmFkaWVudDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gIH1cXG59XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbn1cXG5cXG4ubWFpbi1idG4ge1xcbiAgbWFyZ2luLXRvcDogNnJlbTtcXG59XFxuXFxuLy9Cb29raW5nXFxuXFxuLmJvb2tpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogJGJnLWdyYWRpZW50O1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICAuaW5wdXQtZ3JvdXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuXFxuICAgIC5pbnB1dC1sYWJlbCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgZm9udC1zaXplOiAkbGFiZWwtZm9udC1zaXplO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgY29sb3I6I2ZmZjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIH1cXG4gICAgLmlucHV0LCAub3B0aW9ucyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgY29sb3I6ICNhMWExYTE7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAvKiByZXNpemU6IG5vbmU7ICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC5mb3JtLWJ0biB7XFxuICAgICRjaXJjbGUtZWxlbWVudDogNHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnbGFjaWVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAuZmEtc29saWQge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWFzdGVybi1ibHVlO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZjtcXG4gICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbn1cXG4uYnRuIHtcXG4gIC5rZXkge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgXFxuICAgIGkge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDMwJTtcXG4gICAgICBib3R0b206IDUwJTtcXG4gICAgICByaWdodDogLTEwJTtcXG4gICAgICBsZWZ0OiA1OCU7XFxuICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTUlLCAtNTAlKTsgKi9cXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRvb3Ige1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgLmRvb3Itb3BlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAmOmhvdmVyIC5rZXkgaSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gICY6aG92ZXIgLmRvb3ItY2xvc2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICY6aG92ZXIgLmRvb3Itb3BlbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gIH1cXG59XFxuXFxuLyogRmVhdHVyZWQgSG90ZWxzIHNlY3Rpb24gc3R5bGVzICovXFxuLmhvdGVscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWU0O1xcbn1cXG4uc2VjdGlvbi1oZWFkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnN1Yi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjYTVhNWE1O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxuICBncmlkLWdhcDogMi41cmVtO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmVhdHVyZWQtaG90ZWxzIHtcXG4gIGhlaWdodDogMzVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ2xhY2llcjtcXG4gICAgei1pbmRleDogLTE7XFxuICB9XFxufVxcblxcbi5ob3RlbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uaG90ZWwtbmFtZSB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuLmhvdGVsLXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG4uaG90ZWwtcmF0aW5nIHtcXG4gIG1hcmdpbjogMXJlbSAwIDIuNXJlbTtcXG59XFxuLnJhdGluZyB7XFxuICBjb2xvcjogJHRhY2FvO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XFxufVxcblxcbi8qIFNwZWNpYWwgT2ZmZXIgKi9cXG4ucGFyYWdyYXBoIHtcXG4gIGNvbG9yOiAkY2F0YWxpbmEtYmx1ZTtcXG4gIC5idG4uYnRuLWdyYWRpZW50IHtcXG4gICAgYmFja2dyb3VuZDogJGNhdGFsaW5hLWJsdWU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvIDAgYXV0bztcXG4gIH1cXG59XFxuXFxuLm9mZmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNzEsIDIxOSwgMjI3LCAwLjgpLCByZ2JhKDMwLCAxMjksIDE3NiwgMC44KSksIHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy90aGVfcGFyYWRpc2VfYmcuanBnXFxcIikgYm90dG9tIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIC5vZmZlci1jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA1cmVtIDFyZW07XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAuZGlzY291bnQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRhY2FvO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICR0YWNhbztcXG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAuNXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBSb29tcyBzZWN0aW9uIHN0eWxlc1xcblxcbi5yb29tcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4td2hpdGU7XFxufVxcbi5pbWFnZS13cmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gICY6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ2xhY2llci10cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuLnJvb20taW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLnJvb20tbmFtZSB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YWNhbztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAyLjVyZW07XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLnJvb20tcHJpY2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDMuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICR0YWNhbztcXG59XFxuLnBlci1uaWdodCB7XFxuICBjb2xvcjogJGdsYWNpZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5yb29tcy1idG4ge1xcbiAgY29sb3I6ICRlYXN0ZXJuLWJsdWU7XFxuICBwYWRkaW5nOiAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogJHRhY2FvO1xcbiAgfVxcbn1cXG5cIixcIi5jb250YWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udHJhdmVsZXItd3JhcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAkZWFzdGVybi1ibHVlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB9XFxufVxcblxcbi5jb250YWN0LWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctZ3JhZGllbnQ7XFxuICBwYWRkaW5nOiAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBpbnB1dDpmb2N1cysuYmFyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgfVxcbiAgdGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgJjpmb2N1cysuYmFyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5idG4ge1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICRjYXRhbGluYS1ibHVlO1xcbiAgICAuZW52ZWxvcGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIH1cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5pbnB1dC1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogJGVhc3Rlcm4tYmx1ZTtcXG59XCIsXCIubG9nbyB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvd2Rlci1ibHVlO1xcbiAgY29sb3I6ICRjYXRhbGluYS1ibHVlO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQtYnJhbmQge1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1oZWFkaW5nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAuc20tbGluayB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgJHRhY2FvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbiAgICBpIHtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRhY2FvO1xcbiAgICAgIGNvbG9yOiAkY2F0YWxpbmEtYmx1ZTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nLmxhenlcIikpO1xuXG4gIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChcbiAgICAgIGVudHJpZXMsXG4gICAgICBvYnNlcnZlclxuICAgICkge1xuICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBsZXQgbGF6eUltYWdlID0gZW50cnkudGFyZ2V0O1xuICAgICAgICAgIGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmM7XG4gICAgICAgICAgbGF6eUltYWdlLnNyY3NldCA9IGxhenlJbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4gICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlJbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGF6eUltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYXp5SW1hZ2UpIHtcbiAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQb3NzaWJseSBmYWxsIGJhY2sgdG8gZXZlbnQgaGFuZGxlcnMgaGVyZVxuICB9XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvbGF6eS5qc1wiO1xuXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbmxldCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItbWVudVwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG4gIGxldCB3aW5kb3dQb3NpdGlvbiA9IHRoaXMud2luZG93LnNjcm9sbFkgPiAwO1xuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCB0aGlzLndpbmRvdy5zY3JvbGxZID4gMCk7XG59KTtcblxuaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=