module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"21":"5bc73061326d6b82ad4d"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+u7p":
/***/ (function(module, exports) {



/***/ }),

/***/ "+yMl":
/***/ (function(module, exports) {

module.exports = require("emotion-rgba/dist");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0U3A":
/***/ (function(module, exports) {

module.exports = require("fp-ts/Option");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("w0X2");


/***/ }),

/***/ "3taC":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/ru");

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7tlt":
/***/ (function(module, exports) {

module.exports = require("facepaint");

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9HB/":
/***/ (function(module, exports) {

module.exports = require("cogo-toast");

/***/ }),

/***/ "A1cq":
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "C3pY":
/***/ (function(module, exports) {



/***/ }),

/***/ "DB9J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return match; });
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const isFI = value => typeof value === 'function';

const match = (matchTo, variants, fallthrough) => props => {
  const variant = variants[props[matchTo]] || fallthrough;
  return isFI(variant) ? variant(props) : variant;
};

/***/ }),

/***/ "FSQs":
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),

/***/ "GWJI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+u7p");
/* harmony import */ var _types_Icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_Icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_Icon__WEBPACK_IMPORTED_MODULE_0__) if(["default","arrows","actions","ui"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_Icon__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _services_builders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WVUK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIcon", function() { return _services_builders__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bwDB");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "arrows", function() { return _arrows__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2Sz");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qcGN");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return _ui__WEBPACK_IMPORTED_MODULE_4__; });









/***/ }),

/***/ "GYqh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_LoadingProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ylpd");
/* harmony import */ var _types_LoadingProps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_LoadingProps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_LoadingProps__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_LoadingProps__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _types_FI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eXIv");
/* harmony import */ var _types_FI__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types_FI__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_FI__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_FI__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _types_ToastTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZiEH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastTypes", function() { return _types_ToastTypes__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _types_ToastProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nhx8");
/* harmony import */ var _types_ToastProps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ToastProps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_ToastProps__WEBPACK_IMPORTED_MODULE_3__) if(["default","ToastTypes"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_ToastProps__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DB9J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "match", function() { return _match__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _transformMarkdownImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("u9eC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformMarkdownImages", function() { return _transformMarkdownImages__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fApV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return _toast__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _parseDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("hHRs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _parseDate__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _gtag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wKW+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return _gtag__WEBPACK_IMPORTED_MODULE_8__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _gtag__WEBPACK_IMPORTED_MODULE_8__["a"]; });











/***/ }),

/***/ "K2Sz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aspectRatio", function() { return aspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudUpload", function() { return cloudUpload; });
/* harmony import */ var _services_builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WVUK");

const language = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z');
const search = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(20, 20, 'M19.728 17.2926L15.8332 13.3982C15.6574 13.2224 15.4191 13.1247 15.1691 13.1247H14.5323C15.6105 11.7458 16.2512 10.0115 16.2512 8.12483C16.2512 3.63664 12.6142 0 8.12559 0C3.63698 0 0 3.63664 0 8.12483C0 12.613 3.63698 16.2497 8.12559 16.2497C10.0125 16.2497 11.747 15.609 13.126 14.5309V15.1676C13.126 15.4176 13.2236 15.6559 13.3994 15.8317L17.2942 19.7261C17.6614 20.0933 18.2552 20.0933 18.6185 19.7261L19.7241 18.6207C20.0913 18.2535 20.0913 17.6598 19.728 17.2926ZM8.12559 13.1247C5.36367 13.1247 3.12523 10.8904 3.12523 8.12483C3.12523 5.36317 5.35977 3.12493 8.12559 3.12493C10.8875 3.12493 13.126 5.35926 13.126 8.12483C13.126 10.8865 10.8914 13.1247 8.12559 13.1247Z');
const send = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(18, 18, 'M17.3993 0.969691C17.6075 1.17342 17.678 1.47584 17.5807 1.74778L12.2171 16.7478C12.1133 17.038 11.839 17.2369 11.5251 17.2494C11.2112 17.2619 10.9213 17.0856 10.7937 16.8046L7.84844 10.3182L1.22164 7.43538C0.934549 7.31049 0.754436 7.02671 0.767242 6.71945C0.780049 6.41219 0.983181 6.14371 1.27971 6.04213L16.6044 0.792127C16.8822 0.696948 17.1912 0.765962 17.3993 0.969691ZM9.34287 9.91612L11.4091 14.4667L15.0251 4.35429L9.34287 9.91612ZM13.9415 3.29362L3.61016 6.83297L8.25925 8.85546L13.9415 3.29362Z');
const fileUpload = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z');
const aspectRatio = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M19 12H17V15H14V17H19V12ZM7 9H10V7H5V12H7V9ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01Z');
const cloudUpload = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(131, 131, 'M105.619 54.8018C101.907 35.9706 85.3683 21.8335 65.5 21.8335C49.7254 21.8335 36.025 30.7852 29.2021 43.8852C12.7725 45.6318 0 59.5506 0 76.4168C0 94.4839 14.6829 109.167 32.75 109.167H103.708C118.773 109.167 131 96.9402 131 81.8752C131 67.4652 119.81 55.7843 105.619 54.8018ZM76.4167 70.9585V92.7918H54.5833V70.9585H38.2083L65.5 43.6668L92.7917 70.9585H76.4167Z');

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "M1sZ":
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "N+oV":
/***/ (function(module, exports) {

module.exports = require("@emotion/is-prop-valid");

/***/ }),

/***/ "NYUU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PuMY");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return _styles__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TBz5");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return _variants__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gZij");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_props__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _props__WEBPACK_IMPORTED_MODULE_2__) if(["default","styles","variants"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _props__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _types_AnyColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("m2nj");
/* harmony import */ var _types_AnyColor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_AnyColor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_AnyColor__WEBPACK_IMPORTED_MODULE_3__) if(["default","styles","variants"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_AnyColor__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _types_PropsBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b48A");
/* harmony import */ var _types_PropsBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types_PropsBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_PropsBase__WEBPACK_IMPORTED_MODULE_4__) if(["default","styles","variants"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_PropsBase__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));







/***/ }),

/***/ "Nhdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Anchor; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Variants; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Sizes; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ ButtonLink; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ Divider; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ Sizes_Sizes; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ Icon; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ Input; });
__webpack_require__.d(__webpack_exports__, "Q", function() { return /* reexport */ Spinner; });
__webpack_require__.d(__webpack_exports__, "R", function() { return /* reexport */ Toast; });
__webpack_require__.d(__webpack_exports__, "S", function() { return /* reexport */ Typography; });
__webpack_require__.d(__webpack_exports__, "K", function() { return /* reexport */ P; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ H1; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ H2; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ H3; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ H4; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ H5; });
__webpack_require__.d(__webpack_exports__, "J", function() { return /* reexport */ Overflow; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ Dropzone; });
__webpack_require__.d(__webpack_exports__, "P", function() { return /* reexport */ Skeleton; });
__webpack_require__.d(__webpack_exports__, "T", function() { return /* reexport */ Skeleton_styles_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ Card; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ Carousel; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ BannerCarousel; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ BannerCarouselSkeleton; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ BannerCarouselMobile; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ InputGroup; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ Directions_Directions; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ Drawer; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ component_Label; });
__webpack_require__.d(__webpack_exports__, "H", function() { return /* reexport */ Markdown; });
__webpack_require__.d(__webpack_exports__, "L", function() { return /* reexport */ Pagination; });
__webpack_require__.d(__webpack_exports__, "M", function() { return /* reexport */ Popover; });
__webpack_require__.d(__webpack_exports__, "N", function() { return /* reexport */ QuestionCard; });
__webpack_require__.d(__webpack_exports__, "O", function() { return /* reexport */ RelevantTopicCard; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ Dropdown; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* reexport */ LastUpdated; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ InteractiveCard; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ Header; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* reexport */ Layout; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* reexport */ component_Item; });
__webpack_require__.d(__webpack_exports__, "G", function() { return /* reexport */ ItemButton; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* reexport */ List; });
__webpack_require__.d(__webpack_exports__, "I", function() { return /* reexport */ OrderedList; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ Footer; });

// UNUSED EXPORTS: DividerDirections, H1Regular, H4Regular, CardTitle, CardContent, CardInteractive, BasicCarousel, Table, PaginationItemTypes, popoverModifiers, PopoverTargetTypes, PopoverModifierNames, PopoverCoverStrategies

// NAMESPACE OBJECT: ./src/components/atoms/Skeleton/styles.ts
var Skeleton_styles_namespaceObject = {};
__webpack_require__.r(Skeleton_styles_namespaceObject);
__webpack_require__.d(Skeleton_styles_namespaceObject, "shineAnimation", function() { return shineAnimation; });
__webpack_require__.d(Skeleton_styles_namespaceObject, "shineBase", function() { return shineBase; });
__webpack_require__.d(Skeleton_styles_namespaceObject, "shineGradient", function() { return shineGradient; });

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__("hsUr");
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: ./src/core/index.ts + 6 modules
var core = __webpack_require__("UzkQ");

// CONCATENATED MODULE: ./src/components/atoms/Anchor/component.ts


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




var component_ref = true ? {
  name: "1vsrr9p",
  styles: "cursor:pointer;text-decoration:none;"
} : undefined;

const defaultStyles = () => component_ref;

const Anchor = styled_base_default()("a", {
  target: "emrzar20"
})(core["e" /* typography */].styles.extendByVariant, core["a" /* colors */].styles.extendByVariant(['color', 'fill']), defaultStyles, true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/atoms/Anchor/index.ts

// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Root/types/Variants.ts
let Variants;

(function (Variants) {
  Variants[Variants["Raised"] = 0] = "Raised";
  Variants[Variants["Outlined"] = 1] = "Outlined";
  Variants[Variants["Flat"] = 2] = "Flat";
})(Variants || (Variants = {}));
// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Root/types/Sizes.ts
let Sizes;

(function (Sizes) {
  Sizes[Sizes["ExtraSmall"] = 24] = "ExtraSmall";
  Sizes[Sizes["Small"] = 28] = "Small";
  Sizes[Sizes["Medium"] = 36] = "Medium";
  Sizes[Sizes["Large"] = 48] = "Large";
})(Sizes || (Sizes = {}));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Label/component.ts


function component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Label = styled_base_default()("span", {
  target: "e1jkxfjf0"
})(true ? {
  name: "18v40m9",
  styles: "display:inherit;justify-content:inherit;align-items:inherit;flex-direction:inherit;height:inherit;width:100%;svg{height:100%;}"
} : undefined);
// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Label/index.ts

// EXTERNAL MODULE: external "@emotion/is-prop-valid"
var is_prop_valid_ = __webpack_require__("N+oV");
var is_prop_valid_default = /*#__PURE__*/__webpack_require__.n(is_prop_valid_);

// EXTERNAL MODULE: external "emotion-rgba/dist"
var dist_ = __webpack_require__("+yMl");

// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Root/styles.ts
function styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




const flatVariantColors = ({
  color
}) => /*#__PURE__*/Object(core_["css"])("color:", color, ";fill:", color, ";&:active{background-color:", Object(dist_["rgba"])(color, 0.1), ";}" + (true ? "" : undefined));

var styles_ref = true ? {
  name: "lza223",
  styles: "color:transparent;fill:transparent;"
} : undefined;

const outlinedVariantColors = color => ({
  loading
}) => /*#__PURE__*/Object(core_["css"])("border:1px solid ", color, ";", flatVariantColors({
  color
}), " ", loading && styles_ref, true ? "" : undefined);
const raisedVariantColors = (staleInner, staleBackground, active) => ({
  loading
}) => /*#__PURE__*/Object(core_["css"])("color:", staleInner, ";fill:", staleInner, ";background-color:", staleBackground, ";&:active{background-color:", active, ";}", loading && /*#__PURE__*/Object(core_["css"])(Skeleton_styles_namespaceObject.shineBase, Skeleton_styles_namespaceObject.shineGradient(staleBackground, active), {
  animation: `${Skeleton_styles_namespaceObject.shineAnimation} 1.5s infinite`,
  color: 'transparent',
  fill: 'transparent'
}, true ? "" : undefined), true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Root/component.ts


function Root_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const {
  variants
} = core["a" /* colors */];

var Root_component_ref = true ? {
  name: "ox994j",
  styles: "text-decoration:underline;text-underline-style:dotted;"
} : undefined;

const Root = /*#__PURE__*/styled_base_default()('button', {
  shouldForwardProp: prop => is_prop_valid_default()(prop) && prop !== 'loading',
  target: "e1okp9ef0"
})("align-items:center;justify-content:center;text-align:center;display:inline-flex;border:0;padding:0 12px;cursor:pointer;text-decoration:none;appearance:none;background:none;white-space:nowrap;transition:0.1s background-color;height:", props => props.size, "px;min-width:", props => props.size, "px;border-radius:", props => props.bordered ? 8 : props.size, "px;", props => props.disabled && /*#__PURE__*/Object(core_["css"])("user-select:none;pointer-events:none;opacity:", !props.loading && 0.5, ";" + (true ? "" : undefined)), " ", props => props.variant === Variants.Flat && props.underlined && Root_component_ref, " ", core["d" /* services */].match('size', {
  [Sizes.Medium]: core["e" /* typography */].styles.elementBold12,
  [Sizes.Large]: core["e" /* typography */].styles.headingBold22
}), " ", core["e" /* typography */].styles.extendByVariant, " text-transform:", props => props.textTransform, ";", core["d" /* services */].match('variant', {
  [Variants.Raised]: core["d" /* services */].match('color', {
    [variants.Brand.Purple]: raisedVariantColors(variants.Neutral.White, variants.Brand.Purple, variants.Brand.DarkPurple),
    [variants.Brand.ExtraLightPurple]: raisedVariantColors(variants.Brand.Purple, variants.Brand.ExtraLightPurple, variants.Brand.LightPurple),
    [variants.Brand.DarkPurple]: raisedVariantColors(variants.Neutral.White, variants.Brand.DarkPurple, variants.Brand.LightPurple)
  }),
  [Variants.Outlined]: core["d" /* services */].match('color', {
    [variants.Brand.Purple]: outlinedVariantColors(variants.Brand.Purple)
  }),
  [Variants.Flat]: core["d" /* services */].match('color', {}, flatVariantColors)
}), true ? "" : undefined);
Root.defaultProps = {
  textTransform: 'none',
  typography: core["e" /* typography */].variants.Element.Bold20,
  color: variants.Brand.Purple,
  variant: Variants.Raised,
  size: Sizes.Large
};
// CONCATENATED MODULE: ./src/components/atoms/Button/libs/Root/index.ts



// CONCATENATED MODULE: ./src/components/atoms/Button/component.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const RootLink = Root.withComponent('a', {
  target: "e14e7uo20"
});
RootLink.defaultProps = _objectSpread({
  type: 'button'
}, Root.defaultProps);

const createRootProps = props => {
  const disabled = props.loading || props.disabled;
  const tabIndex = disabled ? -1 : props.tabIndex;
  return _objectSpread(_objectSpread({}, props), {}, {
    disabled,
    tabIndex
  });
}; // eslint-disable-next-line react/display-name


const ButtonLink = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return Object(core_["jsx"])(RootLink, _extends({}, createRootProps(rest), {
    ref: ref
  }), Object(core_["jsx"])(Label, null, children));
}); // eslint-disable-next-line react/display-name

const Button = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref2, ref) => {
  let {
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return Object(core_["jsx"])(Root, _extends({}, createRootProps(rest), {
    ref: ref
  }), Object(core_["jsx"])(Label, null, children));
});
// CONCATENATED MODULE: ./src/components/atoms/Button/index.ts



// CONCATENATED MODULE: ./src/components/atoms/Divider/types/Directions.ts
let Directions;

(function (Directions) {
  Directions["Horizontal"] = "horizontal";
  Directions["Vertical"] = "vertical";
})(Directions || (Directions = {}));
// CONCATENATED MODULE: ./src/components/atoms/Divider/component.ts


function Divider_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




const Divider = styled_base_default()("hr", {
  target: "e1elr3d10"
})("margin:0;border:0;", core["a" /* colors */].styles.extendByVariant('backgroundColor'), " ", core["d" /* services */].match('direction', {
  [Directions.Horizontal]: true ? {
    name: "1sj8v7s",
    styles: "height:1px;width:100%;"
  } : undefined,
  [Directions.Vertical]: true ? {
    name: "h5npyu",
    styles: "width:1px;height:100%;"
  } : undefined
}), true ? "" : undefined);
Divider.defaultProps = {
  direction: Directions.Horizontal,
  color: core["a" /* colors */].variants.Neutral.LightGrey
};
// CONCATENATED MODULE: ./src/components/atoms/Divider/index.ts


// CONCATENATED MODULE: ./src/components/atoms/Icon/types/Sizes.ts
let Sizes_Sizes;

(function (Sizes) {
  Sizes[Sizes["ExtraSmall"] = 0.5] = "ExtraSmall";
  Sizes[Sizes["Small"] = 0.75] = "Small";
  Sizes[Sizes["Default"] = 1] = "Default";
  Sizes[Sizes["Medium"] = 1.5] = "Medium";
  Sizes[Sizes["Large"] = 2] = "Large";
  Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
})(Sizes_Sizes || (Sizes_Sizes = {}));
// CONCATENATED MODULE: ./src/components/atoms/Icon/services/createSvgPath.ts

const createSvgPath = path => /*#__PURE__*/Object(external_react_["isValidElement"])(path) ? path : Array.isArray(path) ? path.map((n, i) => /*#__PURE__*/Object(external_react_["createElement"])('path', {
  d: n,
  key: i
})) : /*#__PURE__*/Object(external_react_["createElement"])('path', {
  d: path
});
// CONCATENATED MODULE: ./src/components/atoms/Icon/component.tsx

var component_jsx = external_react_default.a.createElement;

function component_extends() { component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return component_extends.apply(this, arguments); }

function component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Icon = (_ref) => {
  let {
    icon,
    color,
    fillRule = 'nonzero',
    clipRule = 'evenodd',
    size = Sizes_Sizes.Default
  } = _ref,
      rest = component_objectWithoutProperties(_ref, ["icon", "color", "fillRule", "clipRule", "size"]);

  // Width and Height must be integer.
  const width = Math.round(icon.width * size);
  const height = Math.round(icon.height * size);
  const viewBox = `0 0 ${icon.width} ${icon.height}`;
  return Object(core_["jsx"])("svg", component_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: viewBox,
    fillRule: fillRule,
    clipRule: clipRule,
    css: /*#__PURE__*/Object(core_["css"])({
      fill: color
    }, true ? "" : undefined)
  }, rest), createSvgPath(icon.path));
};
// CONCATENATED MODULE: ./src/components/atoms/Icon/index.ts


// CONCATENATED MODULE: ./src/components/atoms/Input/component.ts


function component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { component_ownKeys(Object(source), true).forEach(function (key) { component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Input_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



// eslint-disable-next-line react/display-name
const InputBase = /*#__PURE__*/Object(external_react_["forwardRef"])( // eslint-disable-next-line react/prop-types
(_ref, ref) => {
  let {
    element = /*#__PURE__*/Object(external_react_["createElement"])('input')
  } = _ref,
      rest = Input_component_objectWithoutProperties(_ref, ["element"]);

  return /*#__PURE__*/Object(external_react_["cloneElement"])(element, component_objectSpread(component_objectSpread({}, rest), {}, {
    ref
  }));
});
const Input = /*#__PURE__*/styled_base_default()(InputBase, {
  target: "e1kyvi2f0"
})("height:40px;width:100%;transition:0.1s padding;background-color:", core["a" /* colors */].variants.Background.Primary, ";border:1px solid ", props => props.color || core["a" /* colors */].variants.Neutral.LightGrey, ";border-radius:5px;padding:1rem;", core["e" /* typography */].styles.extendByVariant, " &::placeholder{color:", props => props.placeholderColor || core["a" /* colors */].variants.Neutral.Grey, ";line-height:normal;}:focus{outline:none;border-width:1.5px;border-color:", props => props.focusColor || props.color || core["a" /* colors */].variants.Brand.Purple, ";}" + (true ? "" : undefined));
Input.defaultProps = {
  typography: core["e" /* typography */].variants.Element.Regular16
};
// CONCATENATED MODULE: ./src/components/atoms/Input/index.ts

// EXTERNAL MODULE: external "emotion-rgba"
var external_emotion_rgba_ = __webpack_require__("p5Ix");

// CONCATENATED MODULE: ./src/components/atoms/Spinner/styles.ts

const spin = core_["keyframes"]`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
// CONCATENATED MODULE: ./src/components/atoms/Spinner/component.ts




const Spinner = styled_base_default()("div", {
  target: "e1i95ev40"
})("border-radius:50%;width:", ({
  size
}) => size, "px;height:", ({
  size
}) => size, "px;animation:", spin, " ", ({
  rotationTime
}) => rotationTime, "s linear infinite;border:", ({
  size
}) => Number(size) / 6, "px solid ", ({
  color
}) => Object(external_emotion_rgba_["rgba"])(String(color), 0.2), ";border-top-color:", ({
  color
}) => color, ";" + (true ? "" : undefined));
Spinner.defaultProps = {
  size: 35,
  rotationTime: 0.75,
  color: core["a" /* colors */].variants.Warning.Orange1
};
// CONCATENATED MODULE: ./src/components/atoms/Spinner/index.ts

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/components/atoms/Toast/component.tsx
var Toast_component_jsx = external_react_default.a.createElement;

function Toast_component_extends() { Toast_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Toast_component_extends.apply(this, arguments); }

function Toast_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Toast_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Toast_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const toastStyles = {
  [core["d" /* services */].ToastTypes.Success]: core["a" /* colors */].variants.Success.Green2,
  [core["d" /* services */].ToastTypes.Warning]: core["a" /* colors */].variants.Warning.Orange2,
  [core["d" /* services */].ToastTypes.Error]: core["a" /* colors */].variants.Error.Red2
};
const Toast = (_ref) => {
  let {
    text,
    type,
    className
  } = _ref,
      rest = Toast_component_objectWithoutProperties(_ref, ["text", "type", "className"]);

  const color = toastStyles[type] || '';
  return Object(core_["jsx"])(Card, Toast_component_extends({
    className: external_classnames_default()(className, 'd-flex', 'p-3'),
    color: color,
    borderColor: color
  }, rest), Object(core_["jsx"])("div", {
    className: "ml-2"
  }, text));
};
// CONCATENATED MODULE: ./src/components/atoms/Toast/index.ts

// CONCATENATED MODULE: ./src/components/atoms/Typography/component.ts


function Typography_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Typography_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Typography_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const colorSelectors = ['color', 'fill'];

const component_defaultStyles = () => /*#__PURE__*/Object(core_["css"])({
  margin: 0,
  padding: 0,
  color: core["a" /* colors */].variants.Text.Primary
}, true ? "" : undefined);

const TypographyBase = (_ref) => {
  let {
    as,
    children
  } = _ref,
      rest = Typography_component_objectWithoutProperties(_ref, ["as", "children"]);

  return /*#__PURE__*/Object(external_react_["createElement"])(as, rest, children);
};

const Typography = /*#__PURE__*/styled_base_default()(TypographyBase, {
  target: "eykjafi0"
})(component_defaultStyles, core["e" /* typography */].styles.extendByVariant, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const P = styled_base_default()("p", {
  target: "eykjafi1"
})(component_defaultStyles, core["e" /* typography */].styles.extendByVariant, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H1 = styled_base_default()("h1", {
  target: "eykjafi2"
})(component_defaultStyles, core["e" /* typography */].styles.headingBold34, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H1Regular = styled_base_default()("h1", {
  target: "eykjafi3"
})(component_defaultStyles, core["e" /* typography */].styles.headingRegular34, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H2 = styled_base_default()("h2", {
  target: "eykjafi4"
})(component_defaultStyles, core["e" /* typography */].styles.headingBold28, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H3 = styled_base_default()("h3", {
  target: "eykjafi5"
})(component_defaultStyles, core["e" /* typography */].styles.headingBold22, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H4 = styled_base_default()("h4", {
  target: "eykjafi6"
})(component_defaultStyles, core["e" /* typography */].styles.headingBold17, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H4Regular = styled_base_default()("h4", {
  target: "eykjafi7"
})(component_defaultStyles, core["e" /* typography */].styles.headingRegular17, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
const H5 = styled_base_default()("h6", {
  target: "eykjafi8"
})(component_defaultStyles, core["e" /* typography */].styles.elementBold12, core["a" /* colors */].styles.extendByVariant(colorSelectors), true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/atoms/Typography/index.ts

// CONCATENATED MODULE: ./src/components/atoms/Overflow/libs/Background/styles.ts

const fadeIn = core_["keyframes"]`
  from { opacity: 0 }
  to { opacity: 1 }
`;
const fadeOut = core_["keyframes"]`
  from { opacity: 1 }
  to { opacity: 0 }
`;
// CONCATENATED MODULE: ./src/components/atoms/Overflow/libs/Background/component.ts


const Background = styled_base_default()("div", {
  target: "e1ifqzx90"
})("position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-color:", props => props.color, ";cursor:", props => props.closeOnClick && 'pointer', ";animation:", props => props.active ? fadeIn : fadeOut, " 0.27s;" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/atoms/Overflow/libs/Background/index.ts

// CONCATENATED MODULE: ./src/components/atoms/Overflow/libs/Wrapper/component.ts

const Wrapper = styled_base_default()("div", {
  target: "e1964wd20"
})("position:fixed;top:0;left:0;width:100%;height:100%;z-index:", props => props.zIndex, ";overflow:hidden;" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/atoms/Overflow/libs/Wrapper/index.ts

// CONCATENATED MODULE: ./src/components/atoms/Overflow/component.tsx
var Overflow_component_jsx = external_react_default.a.createElement;

function Overflow_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Overflow_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Overflow_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Overflow_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var Overflow_component_ref = true ? {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}"
} : undefined;

const Overflow = props => {
  const {
    color = 'rgba(0, 0, 0, 0.5)',
    active: propActive,
    closeOnEscape,
    closeOnClick,
    onChange,
    children
  } = props,
        rest = Overflow_component_objectWithoutProperties(props, ["color", "active", "closeOnEscape", "closeOnClick", "onChange", "children"]);

  const {
    0: innerActive,
    1: setInnerActive
  } = Object(external_react_["useState"])(false);
  const active = propActive !== undefined ? propActive : innerActive;
  const {
    0: shouldRender,
    1: setRender
  } = Object(external_react_["useState"])(active);
  const onAnimationEnd = Object(external_react_["useCallback"])(() => {
    if (!active) setRender(active);
  }, [active]);
  const onClick = Object(external_react_["useCallback"])(() => {
    if (!active) return;

    if (closeOnClick) {
      if (onChange) onChange(!active);
      setInnerActive(!active);
    }
  }, [active, closeOnClick, onChange]);
  Object(external_react_["useEffect"])(() => {
    const onEscape = event => {
      if (!active) return;

      if (event.key === 'Escape' && closeOnEscape) {
        if (onChange) onChange(!active);
        setInnerActive(!active);
      }
    };

    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [active, closeOnEscape, onChange]);
  Object(external_react_["useEffect"])(() => {
    if (active) setRender(active);
  }, [active]);
  return shouldRender ? Object(core_["jsx"])(Wrapper, rest, Object(core_["jsx"])(core_["Global"], {
    styles: Overflow_component_ref
  }), children, Object(core_["jsx"])(Background, {
    color: color,
    active: active,
    onClick: onClick,
    closeOnClick: closeOnClick,
    onAnimationEnd: onAnimationEnd
  })) : null;
};
// CONCATENATED MODULE: ./src/components/atoms/Overflow/index.ts

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");

// CONCATENATED MODULE: ./src/components/atoms/Dropzone/component.tsx

var Dropzone_component_jsx = external_react_default.a.createElement;

function Dropzone_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Dropzone_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Dropzone_component_ownKeys(Object(source), true).forEach(function (key) { Dropzone_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Dropzone_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Dropzone_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Dropzone_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dropzone_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Dropzone_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const DropzoneBase = (_ref) => {
  let {
    file,
    setFile,
    className
  } = _ref,
      rest = Dropzone_component_objectWithoutProperties(_ref, ["file", "setFile", "className"]);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = Object(external_react_dropzone_["useDropzone"])({
    maxFiles: 1,
    accept: '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf'
  });
  Object(external_react_["useEffect"])(() => {
    if (file !== acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
    }
  }, [acceptedFiles, file, setFile]);
  return Object(core_["jsx"])("div", getRootProps(Dropzone_component_objectSpread(Dropzone_component_objectSpread({}, rest), {}, {
    className: external_classnames_default()(className, 'dropzone', 'p-5 d-flex flex-column align-items-center text-center')
  })), Object(core_["jsx"])(Input, getInputProps()), Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].actions.cloudUpload
  }), Object(core_["jsx"])(H1, {
    className: "mb-3"
  }, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0430"), Object(core_["jsx"])(H2, {
    className: "mb-3"
  }, "\u0438\u043B\u0438"), Object(core_["jsx"])(P, {
    typography: core["e" /* typography */].variants.Element.SemiBold20
  }, "\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B"));
};

const Dropzone = /*#__PURE__*/styled_base_default()(DropzoneBase, {
  target: "e15b69m00"
})("border-width:2px;border-radius:5px;border-style:dashed;border-color:", core["a" /* colors */].variants.Neutral.Grey, ";max-width:610px;", core["e" /* typography */].styles.extendByVariant, ":focus{outline:none;border-width:3px;border-color:", props => props.focusColor || props.color || core["a" /* colors */].variants.Brand.Purple, ";}" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/atoms/Dropzone/index.ts

// CONCATENATED MODULE: ./src/components/atoms/Skeleton/styles.ts
function Skeleton_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const shineAnimation = core_["keyframes"]`
  from { background-position: -200px 0 }
  to { background-position: calc(200px + 100%) 0 }
`;
const shineBase = true ? {
  name: "bkoekt",
  styles: "background-size:200px 100%;background-repeat:no-repeat;"
} : undefined;
const shineGradient = (mainColor, shineColor) => /*#__PURE__*/Object(core_["css"])("background-image:linear-gradient(90deg,", mainColor, ",", shineColor, ",", mainColor, ");" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/atoms/Skeleton/component.tsx

var Skeleton_component_jsx = external_react_default.a.createElement;

function Skeleton_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Skeleton_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Skeleton_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const {
  variants: component_variants
} = core["a" /* colors */];

const SkeletonBase = (_ref) => {
  let {
    borderRadius: _b,
    opacity: _o,
    rows: _r
  } = _ref,
      rest = Skeleton_component_objectWithoutProperties(_ref, ["borderRadius", "opacity", "rows"]);

  return Object(core_["jsx"])("span", rest, "\u200C");
};

const Skeleton = /*#__PURE__*/styled_base_default()(SkeletonBase, {
  target: "exdvagy0"
})("color:transparent;user-select:none;display:inherit;font-size:inherit;font-weight:inherit;font-family:inherit;line-height:inherit;animation:", shineAnimation, " 1.5s infinite;", ({
  width,
  height,
  borderRadius,
  opacity
}) => /*#__PURE__*/Object(core_["css"])("width:", width, ";height:", height, ";border-radius:", borderRadius, ";opacity:", opacity, ";" + (true ? "" : undefined)), " ", shineBase, " ", core["a" /* colors */].styles.extendByVariant('backgroundColor'), " ", core["d" /* services */].match('color', {
  [component_variants.Background.Primary]: shineGradient(component_variants.Background.Primary, component_variants.Brand.ExtraLightPurple),
  [component_variants.Background.Secondary]: shineGradient(component_variants.Background.Secondary, component_variants.Neutral.Grey)
}), true ? "" : undefined);
Skeleton.defaultProps = {
  color: core["a" /* colors */].variants.Background.Primary
};
// CONCATENATED MODULE: ./src/components/atoms/Skeleton/index.ts



// CONCATENATED MODULE: ./src/components/atoms/index.ts











// CONCATENATED MODULE: ./src/components/molecules/Card/component.tsx



const Card = styled_base_default()("div", {
  target: "emwl0yq0"
})(props => !props.disableBorder && /*#__PURE__*/Object(core_["css"])("border:1px solid ", core["a" /* colors */].variants.Neutral.Grey, ";border-radius:4px;border-color:", props.borderColor, ";" + (true ? "" : undefined)), " ", core["a" /* colors */].styles.extendByVariant('backgroundColor'), true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/molecules/Card/libs/Title/component.tsx
var Title_component_jsx = external_react_default.a.createElement;

function Title_component_extends() { Title_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Title_component_extends.apply(this, arguments); }

function Title_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Title_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Title_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Title = (_ref) => {
  let {
    className,
    children
  } = _ref,
      rest = Title_component_objectWithoutProperties(_ref, ["className", "children"]);

  return Object(core_["jsx"])("div", Title_component_extends({
    className: external_classnames_default()(className, 'px-3', 'pt-3')
  }, rest), children);
};
// CONCATENATED MODULE: ./src/components/molecules/Card/libs/Title/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Card/libs/Content/component.tsx
var Content_component_jsx = external_react_default.a.createElement;

function Content_component_extends() { Content_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Content_component_extends.apply(this, arguments); }

function Content_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Content_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Content_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Content = (_ref) => {
  let {
    className,
    children
  } = _ref,
      rest = Content_component_objectWithoutProperties(_ref, ["className", "children"]);

  return Object(core_["jsx"])("div", Content_component_extends({
    className: external_classnames_default()(className, 'p-3')
  }, rest), children);
};
// CONCATENATED MODULE: ./src/components/molecules/Card/libs/Content/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Card/libs/Interactive/component.tsx


function Interactive_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Interactive_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Interactive_component_ownKeys(Object(source), true).forEach(function (key) { Interactive_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Interactive_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Interactive_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Interactive_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Interactive_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Interactive_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InteractiveBase = (_ref) => {
  let {
    children,
    type
  } = _ref,
      rest = Interactive_component_objectWithoutProperties(_ref, ["children", "type"]);

  return /*#__PURE__*/Object(external_react_["createElement"])('link' in rest ? 'a' : 'button', Interactive_component_objectSpread({
    type: type || 'button'
  }, rest), children);
};

const Interactive = /*#__PURE__*/styled_base_default()(InteractiveBase, {
  target: "eo934pe0"
})("cursor:pointer;background:none;border:none;text-transform:none;text-align:start;text-decoration:none;color:inherit;&:hover{background-color:", props => props.color || core["a" /* colors */].variants.Neutral.LightGrey, ";}" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/molecules/Card/libs/Interactive/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Card/index.ts




// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: external "react-use-gesture"
var external_react_use_gesture_ = __webpack_require__("FSQs");

// CONCATENATED MODULE: ./src/components/molecules/Carousel/libs/Dot/component.tsx


const Dot = styled_base_default()("div", {
  target: "e1vpdvzw0"
})("height:", props => props.active ? '15px' : '11px', ";width:", props => props.active ? '15px' : '11px', ";border-radius:50%;background-color:", props => props.active ? core["a" /* colors */].variants.Neutral.Grey : core["a" /* colors */].variants.Neutral.LightGrey, ";transition:height 0.3s ease;transition:width 0.3s ease;" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/molecules/Carousel/libs/Dot/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Carousel/component.tsx

var Carousel_component_jsx = external_react_default.a.createElement;

function Carousel_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function Carousel_component_extends() { Carousel_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Carousel_component_extends.apply(this, arguments); }

function Carousel_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Carousel_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Carousel_component_ownKeys(Object(source), true).forEach(function (key) { Carousel_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Carousel_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Carousel_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Carousel_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Carousel_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Carousel_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var Carousel_component_ref = true ? {
  name: "n8unvv",
  styles: "bottom:1rem;left:0;right:0;"
} : undefined;

const Carousel = props => {
  const {
    onFrame,
    onChange,
    children,
    withScale,
    draggable = false,
    initialWidth = 0,
    elementsPerPage = 1,
    onRest: propOnRest,
    activeSlide: propActiveSlide,
    horizontalMargins = 0,
    withDots = false,
    withButtons = false
  } = props,
        rest = Carousel_component_objectWithoutProperties(props, ["onFrame", "onChange", "children", "withScale", "draggable", "initialWidth", "elementsPerPage", "onRest", "activeSlide", "horizontalMargins", "withDots", "withButtons"]);

  const slides = Object(external_react_["useMemo"])(() => [...children.map((slide, i) => ({
    el: Carousel_component_objectSpread({}, slide),
    clone: true,
    index: i
  })), ...children.map((slide, i) => ({
    el: Carousel_component_objectSpread({}, slide),
    clone: false,
    index: i
  })), ...children.map((slide, i) => ({
    el: Carousel_component_objectSpread({}, slide),
    clone: true,
    index: i
  })), ...children.map((slide, i) => ({
    el: Carousel_component_objectSpread({}, slide),
    clone: true,
    index: i
  }))], [children]);
  const wrapperRef = Object(external_react_["useRef"])(null);
  const {
    0: wrapperWidth,
    1: setWrapperWidth
  } = Object(external_react_["useState"])(initialWidth);
  const {
    0: innerActiveSlide,
    1: setInnerActiveSlide
  } = Object(external_react_["useState"])(0);
  const {
    0: buttonsDisabled,
    1: setButtonsDisabled
  } = Object(external_react_["useState"])(false);
  const activeSlide = propActiveSlide !== undefined ? propActiveSlide : innerActiveSlide;
  const [wrapper, setWrapper] = Object(external_react_spring_["useSpring"])(() => ({
    x: 0,
    onFrame
  }));
  const [elements, setElements] = Object(external_react_spring_["useSprings"])(children.length * 4, () => ({
    sc: 1
  }));
  const width = Object(external_react_["useMemo"])(() => elementsPerPage > 1 ? wrapperWidth / elementsPerPage : wrapperWidth, [elementsPerPage, wrapperWidth]);
  const onDotClick = Object(external_react_["useCallback"])(index => () => {
    if (onChange) onChange(index);
    setInnerActiveSlide(index);
  }, [onChange]);
  const onLeftButtonClick = Object(external_react_["useCallback"])(() => {
    setButtonsDisabled(true);
    const newSlide = activeSlide === -1 ? children.length - 1 : activeSlide - 1;
    setInnerActiveSlide(newSlide);
    if (onChange) onChange(newSlide);
  }, [activeSlide, children.length, onChange]);
  const onRightButtonClick = Object(external_react_["useCallback"])(() => {
    setButtonsDisabled(true);
    const newSlide = activeSlide === children.length ? 0 : activeSlide + 1;
    setInnerActiveSlide(newSlide);
    if (onChange) onChange(newSlide);
  }, [activeSlide, children.length, onChange]);
  const onResize = Object(external_react_["useCallback"])(() => {
    var _wrapperRef$current, _wrapperRef$current$g;

    return setWrapperWidth(((_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : (_wrapperRef$current$g = _wrapperRef$current.getBoundingClientRect()) === null || _wrapperRef$current$g === void 0 ? void 0 : _wrapperRef$current$g.width) || initialWidth);
  }, [initialWidth]);
  const onRest = Object(external_react_["useCallback"])(() => {
    if (activeSlide === -1) {
      setWrapper({
        x: children.length - 1,
        immediate: true
      });
      if (onChange) onChange(children.length - 1);
      setInnerActiveSlide(children.length - 1);
    }

    if (activeSlide >= children.length) {
      const toGoIndex = activeSlide - children.length;
      setWrapper({
        x: toGoIndex,
        immediate: true
      });
      if (onChange) onChange(toGoIndex);
      setInnerActiveSlide(toGoIndex);
    }

    if (propOnRest) propOnRest();
    setButtonsDisabled(false);
    setWrapper({
      immediate: false
    });
  }, [activeSlide, children.length, onChange, propOnRest, setWrapper]);
  Object(external_react_["useEffect"])(() => {
    setWrapper({
      x: activeSlide,
      config: {
        duration: 250
      },
      onRest
    });
  }, [activeSlide, onRest, setWrapper]); // Get carousel root element's width using ref.

  Object(external_react_["useEffect"])(() => {
    var _process;

    onResize();
    if ((_process = process) !== null && _process !== void 0 && false) window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);
  const bind = Object(external_react_use_gesture_["useGesture"])({
    onDrag: ({
      down,
      movement: [xDelta],
      distance,
      cancel
    }) => {
      if (wrapperWidth) {
        if (down && distance > wrapperWidth / 2 && cancel) cancel();
        setWrapper({
          x: activeSlide - xDelta / width,
          immediate: false,
          config: {
            duration: undefined
          }
        }); // TODO: remove `@ts-ignore` when a new major release of `react-spring` will comeout.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        setElements(() => ({
          sc: down ? 1 - distance / wrapperWidth / 2 : 1
        }));
      }
    },
    onDragEnd: ({
      direction: [dirX],
      distance
    }) => {
      if (wrapperWidth && distance >= wrapperWidth / 3) {
        setWrapper({
          x: dirX > 0 ? activeSlide - 1 : activeSlide + 1,
          immediate: false
        });
        if (onChange) onChange(dirX > 0 ? activeSlide - 1 : activeSlide + 1);
        setInnerActiveSlide(prevVal => dirX > 0 ? prevVal - 1 : prevVal + 1);
      } else {
        setWrapper({
          x: activeSlide,
          immediate: false
        });
      }
    }
  }, {
    enabled: draggable,
    drag: {
      useTouch: true
    }
  });
  return Object(core_["jsx"])("div", Carousel_component_extends({}, rest, {
    ref: wrapperRef,
    css: /*#__PURE__*/Object(core_["css"])({
      overflow: 'hidden',
      position: 'relative',
      height: wrapperWidth ? 'auto' : 0
    }, true ? "" : undefined)
  }), Object(core_["jsx"])(external_react_spring_["animated"].div, Carousel_component_extends({}, bind(), {
    style: {
      display: 'flex',
      flexDirection: 'row',
      transform: wrapper.x.interpolate(x => `translate(${-(x + children.length) * width}px, 0px)`)
    }
  }), elements.map(({
    sc
  }, i) => Object(core_["jsx"])(external_react_spring_["animated"].div, {
    key: i,
    style: {
      display: 'block',
      transform: withScale ? sc.interpolate(s => `scale(${s})`) : 'none'
    }
  }, /*#__PURE__*/Object(external_react_["cloneElement"])(slides[i].el, {
    style: Carousel_component_objectSpread(Carousel_component_objectSpread({}, slides[i].el.props.style), {}, {
      width: width - horizontalMargins * 2,
      margin: `0 ${horizontalMargins}px`
    })
  })))), (withDots || withButtons) && Object(core_["jsx"])("div", {
    className: "d-flex align-items-center justify-content-center position-absolute ",
    css: Carousel_component_ref
  }, withButtons && Object(core_["jsx"])(Button, {
    className: "mr-3",
    onClick: onLeftButtonClick,
    disabled: buttonsDisabled,
    variant: Variants.Flat,
    size: Sizes.ExtraSmall,
    color: core["a" /* colors */].variants.Neutral.Grey
  }, Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].arrows.keyboardArrowLeft
  })), withDots && children.map((_, i) => Object(core_["jsx"])(Dot, {
    key: i,
    className: "mx-1",
    active: i === activeSlide || i > activeSlide && i === 0 || i < activeSlide && i === children.length - 1,
    onClick: onDotClick(i)
  })), withButtons && Object(core_["jsx"])(Button, {
    className: "ml-3",
    onClick: onRightButtonClick,
    disabled: buttonsDisabled,
    variant: Variants.Flat,
    size: Sizes.ExtraSmall,
    color: core["a" /* colors */].variants.Neutral.Grey
  }, Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].arrows.keyboardArrowRight
  }))));
};
// CONCATENATED MODULE: ./src/components/molecules/Carousel/Mock.tsx
var Mock_jsx = external_react_default.a.createElement;



const Mock_images = [{
  src: 'https://i2.wp.com/writesomething.org.au/wp-content/uploads/2017/01/no.jpg?fit=1024%2C768&ssl=1',
  alt: 'yoda'
}, {
  src: 'https://www.w3schools.com/w3css/img_lights.jpg',
  alt: 'northern lights'
}, {
  src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  alt: 'asdfa'
}];
const BasicCarousel = () => Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(Carousel, {
  draggable: true
}, Mock_images.map((image, i) => Object(core_["jsx"])("img", {
  key: i + image.alt,
  draggable: false,
  alt: image.alt,
  src: image.src,
  style: {
    width: '100%',
    height: 866
  }
}))));
// CONCATENATED MODULE: ./src/components/molecules/Carousel/index.ts


// CONCATENATED MODULE: ./src/components/molecules/BannerCarousel/component.tsx
var BannerCarousel_component_jsx = external_react_default.a.createElement;

function BannerCarousel_component_extends() { BannerCarousel_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BannerCarousel_component_extends.apply(this, arguments); }

function BannerCarousel_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = BannerCarousel_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function BannerCarousel_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BannerCarousel_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var BannerCarousel_component_ref = true ? {
  name: "tmu6z3",
  styles: "max-width:1440px;height:500px;"
} : undefined;

var component_ref2 = true ? {
  name: "1ttywp7",
  styles: "width:45%;"
} : undefined;

var component_ref4 = true ? {
  name: "imtqqp",
  styles: "height:500px;"
} : undefined;

var component_ref5 = true ? {
  name: "12g6n3b",
  styles: "max-width:305px;"
} : undefined;

const BannerCarousel = (_ref3) => {
  var _banners$;

  let {
    banners
  } = _ref3,
      rest = BannerCarousel_component_objectWithoutProperties(_ref3, ["banners"]);

  return banners !== null && banners !== void 0 && (_banners$ = banners[0]) !== null && _banners$ !== void 0 && _banners$.banners ? Object(core_["jsx"])(Carousel, BannerCarousel_component_extends({
    draggable: true,
    css: component_ref4
  }, rest), banners[0].banners.map((banner, i) => {
    var _banner$image;

    const link = `${process.env.BASE_URL !== undefined ? process.env.BASE_URL : 'https://medsupport.kz/cms'}${banner !== null && banner !== void 0 && (_banner$image = banner.image) !== null && _banner$image !== void 0 && _banner$image.url ? banner.image.url : ''}`;
    return Object(core_["jsx"])("div", {
      key: i,
      className: "d-flex justify-content-center "
    }, Object(core_["jsx"])("div", {
      className: "w-100",
      css: BannerCarousel_component_ref
    }, Object(core_["jsx"])("div", {
      className: "container h-100 px-5",
      css: /*#__PURE__*/Object(core_["css"])("background-image:url(", link, ");background-repeat:no-repeat;background-size:auto 100%;background-position:center;" + (true ? "" : undefined))
    }, Object(core_["jsx"])("div", {
      className: "h-100 d-flex flex-column justify-content-center",
      css: component_ref2
    }, Object(core_["jsx"])(H1, {
      className: "mb-3"
    }, banner === null || banner === void 0 ? void 0 : banner.title), Object(core_["jsx"])(P, {
      className: "mb-5",
      typography: core["e" /* typography */].variants.Heading.Medium22
    }, banner === null || banner === void 0 ? void 0 : banner.subtitle), Object(core_["jsx"])(ButtonLink, {
      href: (banner === null || banner === void 0 ? void 0 : banner.buttonLink) || '',
      className: "w-100",
      css: component_ref5,
      bordered: true,
      target: "_blank"
    }, banner === null || banner === void 0 ? void 0 : banner.buttonTitle)))));
  })) : null;
};
// CONCATENATED MODULE: ./src/components/molecules/BannerCarousel/libs/BannerCarouselSkeleton/component.tsx
var BannerCarouselSkeleton_component_jsx = external_react_default.a.createElement;

function BannerCarouselSkeleton_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






var BannerCarouselSkeleton_component_ref = true ? {
  name: "vz3yqf",
  styles: "height:500px;width:100%;"
} : undefined;

var BannerCarouselSkeleton_component_ref2 = true ? {
  name: "vz3yqf",
  styles: "height:500px;width:100%;"
} : undefined;

var component_ref3 = true ? {
  name: "vz3yqf",
  styles: "height:500px;width:100%;"
} : undefined;

var BannerCarouselSkeleton_component_ref4 = true ? {
  name: "vz3yqf",
  styles: "height:500px;width:100%;"
} : undefined;

var BannerCarouselSkeleton_component_ref5 = true ? {
  name: "imtqqp",
  styles: "height:500px;"
} : undefined;

const BannerCarouselSkeleton = () => Object(core_["jsx"])(Carousel, {
  draggable: true,
  css: BannerCarouselSkeleton_component_ref5
}, Object(core_["jsx"])(Skeleton, {
  css: BannerCarouselSkeleton_component_ref
}), Object(core_["jsx"])(Skeleton, {
  css: BannerCarouselSkeleton_component_ref2
}), Object(core_["jsx"])(Skeleton, {
  css: component_ref3
}), Object(core_["jsx"])(Skeleton, {
  css: BannerCarouselSkeleton_component_ref4
}));
// CONCATENATED MODULE: ./src/components/molecules/BannerCarousel/libs/BannerCarouselSkeleton/index.ts

// CONCATENATED MODULE: ./src/components/molecules/BannerCarousel/index.ts


// CONCATENATED MODULE: ./src/components/molecules/BannerCarouselMobile/component.tsx
var BannerCarouselMobile_component_jsx = external_react_default.a.createElement;

function BannerCarouselMobile_component_extends() { BannerCarouselMobile_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BannerCarouselMobile_component_extends.apply(this, arguments); }

function BannerCarouselMobile_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function BannerCarouselMobile_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = BannerCarouselMobile_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function BannerCarouselMobile_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var BannerCarouselMobile_component_ref2 = true ? {
  name: "imtqqp",
  styles: "height:500px;"
} : undefined;

var BannerCarouselMobile_component_ref3 = true ? {
  name: "12g6n3b",
  styles: "max-width:305px;"
} : undefined;

const BannerCarouselMobile = (_ref) => {
  var _banners$;

  let {
    banners
  } = _ref,
      rest = BannerCarouselMobile_component_objectWithoutProperties(_ref, ["banners"]);

  return banners !== null && banners !== void 0 && (_banners$ = banners[0]) !== null && _banners$ !== void 0 && _banners$.banners ? Object(core_["jsx"])(Carousel, BannerCarouselMobile_component_extends({
    draggable: true,
    css: BannerCarouselMobile_component_ref2
  }, rest), banners[0].banners.map((banner, i) => {
    var _banner$image;

    const link = `${process.env.BASE_URL !== undefined ? process.env.BASE_URL : 'https://medsupport.kz/cms'}${banner !== null && banner !== void 0 && (_banner$image = banner.image) !== null && _banner$image !== void 0 && _banner$image.url ? banner.image.url : ''}`;
    return Object(core_["jsx"])("div", {
      key: i,
      className: "d-flex justify-content-center"
    }, Object(core_["jsx"])("div", {
      className: "w-100",
      css: /*#__PURE__*/Object(core_["css"])("background-image:url(", link, ");background-repeat:no-repeat;background-size:auto 100%;background-position:center;height:500px;" + (true ? "" : undefined))
    }, Object(core_["jsx"])("div", {
      className: "container h-100"
    }, Object(core_["jsx"])("div", {
      className: "h-100 w-100 d-flex flex-column justify-content-center"
    }, Object(core_["jsx"])(H2, {
      className: "mb-3"
    }, banner === null || banner === void 0 ? void 0 : banner.title), Object(core_["jsx"])(P, {
      className: "mb-5",
      typography: core["e" /* typography */].variants.Element.SemiBold16
    }, banner === null || banner === void 0 ? void 0 : banner.subtitle), Object(core_["jsx"])(ButtonLink, {
      href: (banner === null || banner === void 0 ? void 0 : banner.buttonLink) || '',
      className: "w-100",
      css: BannerCarouselMobile_component_ref3,
      bordered: true,
      target: "_blank"
    }, banner === null || banner === void 0 ? void 0 : banner.buttonTitle)))));
  })) : null;
};
// CONCATENATED MODULE: ./src/components/molecules/BannerCarouselMobile/index.ts

// CONCATENATED MODULE: ./src/components/molecules/InputGroup/libs/Element/component.ts

const Element = styled_base_default()("div", {
  target: "e1bpai170"
})("position:absolute;display:flex;align-items:center;height:100%;width:auto;top:0;", props => props.direction, ":0;" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/molecules/InputGroup/libs/Element/index.ts

// CONCATENATED MODULE: ./src/components/molecules/InputGroup/component.tsx
var InputGroup_component_jsx = external_react_default.a.createElement;

function InputGroup_component_extends() { InputGroup_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return InputGroup_component_extends.apply(this, arguments); }

function InputGroup_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = InputGroup_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function InputGroup_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// eslint-disable-next-line react/display-name
const InputGroup = /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => {
  const {
    className,
    leftElement,
    rightElement,
    children
  } = props,
        rest = InputGroup_component_objectWithoutProperties(props, ["className", "leftElement", "rightElement", "children"]);

  const {
    0: paddingLeft,
    1: setPaddingLeft
  } = Object(external_react_["useState"])();
  const {
    0: paddingRight,
    1: setPaddingRight
  } = Object(external_react_["useState"])();
  const leftElementRef = Object(external_react_["useRef"])(null);
  const rightElementRef = Object(external_react_["useRef"])(null);
  const style = Object(external_react_["useMemo"])(() => ({
    paddingLeft,
    paddingRight
  }), [paddingLeft, paddingRight]);
  Object(external_react_["useEffect"])(() => {
    if (leftElementRef.current) setPaddingLeft(leftElementRef.current.offsetWidth);
    if (rightElementRef.current) setPaddingRight(rightElementRef.current.offsetWidth);
  }, []);
  return Object(core_["jsx"])("div", InputGroup_component_extends({
    className: external_classnames_default()(className, 'position-relative')
  }, rest, {
    ref: ref
  }), leftElement && Object(core_["jsx"])(Element, {
    direction: "left",
    ref: leftElementRef
  }, leftElement), /*#__PURE__*/Object(external_react_["cloneElement"])(children, {
    style
  }), rightElement && Object(core_["jsx"])(Element, {
    direction: "right",
    ref: rightElementRef
  }, rightElement));
});
// CONCATENATED MODULE: ./src/components/molecules/InputGroup/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Drawer/types/Directions.ts
let Directions_Directions;

(function (Directions) {
  Directions["FromBottom"] = "formBottom";
  Directions["FromRight"] = "formRight";
  Directions["FromLeft"] = "formLeft";
})(Directions_Directions || (Directions_Directions = {}));
// CONCATENATED MODULE: ./src/components/molecules/Drawer/libs/Background/component.ts





const component_Background = /*#__PURE__*/styled_base_default()(external_react_spring_["animated"].div, {
  shouldForwardProp: is_prop_valid_default.a,
  target: "eg3pz0b0"
})("position:absolute;right:", props => props.direction === Directions_Directions.FromRight ? 0 : undefined, ";left:", props => props.direction === Directions_Directions.FromLeft ? 0 : undefined, ";bottom:", props => props.direction === Directions_Directions.FromBottom ? 0 : undefined, ";height:", props => props.height, ";box-shadow:0 0 30px rgba(0,0,0,0.2);width:", props => props.width, ";", core["a" /* colors */].styles.extendByVariant('backgroundColor'), true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/molecules/Drawer/libs/Background/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Drawer/component.tsx
var Drawer_component_jsx = external_react_default.a.createElement;

function Drawer_component_extends() { Drawer_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Drawer_component_extends.apply(this, arguments); }

function Drawer_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Drawer_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Drawer_component_ownKeys(Object(source), true).forEach(function (key) { Drawer_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Drawer_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Drawer_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Drawer_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Drawer_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Drawer_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Drawer = props => {
  const {
    style,
    zIndex,
    children,
    closeOnEscape,
    closeOnClick,
    closeOnSwipe,
    overflowBackgroundColor,
    color = core["a" /* colors */].variants.Background.Primary,
    width = '50%',
    height = '100%',
    swipeDistance = 50,
    active: propActive,
    onChange: propOnChange,
    direction = Directions_Directions.FromRight
  } = props,
        rest = Drawer_component_objectWithoutProperties(props, ["style", "zIndex", "children", "closeOnEscape", "closeOnClick", "closeOnSwipe", "overflowBackgroundColor", "color", "width", "height", "swipeDistance", "active", "onChange", "direction"]);

  const {
    0: xWidth,
    1: setXWidth
  } = Object(external_react_["useState"])(0);
  const {
    0: yHeight,
    1: setYHeight
  } = Object(external_react_["useState"])(0);
  const {
    0: innerActive,
    1: setInnerActive
  } = Object(external_react_["useState"])(false);
  const active = propActive !== undefined ? propActive : innerActive;
  const getSize = Object(external_react_["useCallback"])(value => {
    if (value && isNaN(Number(value)) && value.toString().endsWith('%')) {
      const stringValue = value.toString();
      const percents = Number(stringValue.substr(0, stringValue.length - 1));
      return Math.floor(window.innerWidth / 100 * percents);
    }

    return Number(value) || 0;
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, [getSize, height, width]);
  const onChange = Object(external_react_["useCallback"])(newState => {
    if (propOnChange) propOnChange(newState);
    setInnerActive(newState);
  }, [propOnChange]);
  const [{
    x,
    y
  }, set] = Object(external_react_spring_["useSpring"])(() => ({
    x: 0,
    y: 0,
    from: {
      x: xWidth,
      y: yHeight
    }
  }));
  const bind = Object(external_react_use_gesture_["useGesture"])({
    onDrag: ({
      down,
      movement: [xDistance, yDistance]
    }) => {
      if (!closeOnSwipe || !active) return;

      if (direction === Directions_Directions.FromRight) {
        set({
          x: down && xDistance > 0 ? xDistance : 0
        });
      } else if (direction === Directions_Directions.FromLeft) {
        set({
          x: down && xDistance < 0 ? -xDistance : 0
        });
      } else if (direction === Directions_Directions.FromBottom) {
        set({
          y: down && yDistance > 0 ? yDistance : 0
        });
      }
    },
    onDragEnd: ({
      movement: [xDistance, yDistance]
    }) => {
      if (!closeOnSwipe || !active) return;

      if (direction === Directions_Directions.FromRight && xDistance >= swipeDistance || direction === Directions_Directions.FromBottom && yDistance >= swipeDistance || direction === Directions_Directions.FromLeft && -xDistance >= swipeDistance) {
        if (propOnChange) propOnChange(false);
        setInnerActive(false);
      }
    }
  }, {
    drag: {
      useTouch: true
    }
  });
  Object(external_react_["useEffect"])(() => {
    set({
      x: !active && (direction === Directions_Directions.FromRight || direction === Directions_Directions.FromLeft) ? xWidth : 0,
      y: !active && direction === Directions_Directions.FromBottom ? yHeight : 0,
      config: {
        duration: active ? undefined : 250
      }
    });
  }, [active, set, yHeight, xWidth, direction]);
  return Object(core_["jsx"])(Overflow, {
    active: active,
    zIndex: zIndex,
    onChange: onChange,
    closeOnEscape: closeOnEscape,
    closeOnClick: closeOnClick,
    color: overflowBackgroundColor
  }, Object(core_["jsx"])(component_Background, Drawer_component_extends({}, bind(), {
    color: color,
    width: width,
    height: height,
    active: active,
    direction: direction,
    style: Drawer_component_objectSpread({
      transform: Object(external_react_spring_["interpolate"])([x, y], (x, y) => `translate(${direction === Directions_Directions.FromLeft ? -x : x}px, ${y}px)`)
    }, style)
  }, rest), children));
};
// CONCATENATED MODULE: ./src/components/molecules/Drawer/index.ts


// CONCATENATED MODULE: ./src/components/molecules/Label/component.tsx
var Label_component_jsx = external_react_default.a.createElement;

function Label_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Label_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const component_Label = (_ref) => {
  let {
    children,
    mainText,
    helperText,
    color
  } = _ref,
      rest = Label_component_objectWithoutProperties(_ref, ["children", "mainText", "helperText", "color"]);

  return Object(core_["jsx"])("label", rest, mainText && Object(core_["jsx"])(Typography, {
    as: "p",
    className: "mb-1",
    color: core["a" /* colors */].variants.Neutral.Grey,
    typography: core["e" /* typography */].variants.Element.SemiBold12
  }, mainText), children, helperText && Object(core_["jsx"])(Typography, {
    as: "p",
    className: "mt-1",
    color: color,
    typography: core["e" /* typography */].variants.Element.Regular12
  }, helperText));
};
component_Label.defaultProps = {
  color: core["a" /* colors */].variants.Neutral.Grey
};
// CONCATENATED MODULE: ./src/components/molecules/Label/index.ts

// EXTERNAL MODULE: C:/Users/eyes/Documents/GitHub/medsupport-monorepo/node_modules/bootstrap-4-grid/css/grid.css
var grid = __webpack_require__("C3pY");

// CONCATENATED MODULE: ./src/components/molecules/Table/component.tsx
var Table_component_jsx = external_react_default.a.createElement;

function Table_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






var Table_component_ref = true ? {
  name: "c6awkc",
  styles: "text-align:left;cursor:pointer;&:hover{background-color:rgba(64,17,77,0.05);}"
} : undefined;

var Table_component_ref2 = true ? {
  name: "1prg9h",
  styles: "color:#212529;border-collapse:collapse;"
} : undefined;

var Table_component_ref3 = true ? {
  name: "13brihr",
  styles: "text-align:left;"
} : undefined;

var Table_component_ref4 = true ? {
  name: "4t0hql",
  styles: "vertical-align:bottom;border-bottom:2px solid #dee2e6;padding:0.75rem;border-top:1px solid #dee2e6;"
} : undefined;

var Table_component_ref5 = true ? {
  name: "n01wj2",
  styles: "border-top:2px solid #dee2e6;"
} : undefined;

var component_ref6 = true ? {
  name: "1a1tdnk",
  styles: "padding:0.75rem;vertical-align:top;border-top:1px solid #dee2e6;"
} : undefined;

var component_ref7 = true ? {
  name: "1a1tdnk",
  styles: "padding:0.75rem;vertical-align:top;border-top:1px solid #dee2e6;"
} : undefined;

var component_ref8 = true ? {
  name: "1a1tdnk",
  styles: "padding:0.75rem;vertical-align:top;border-top:1px solid #dee2e6;"
} : undefined;

var component_ref9 = true ? {
  name: "1a1tdnk",
  styles: "padding:0.75rem;vertical-align:top;border-top:1px solid #dee2e6;"
} : undefined;

const Table = ({
  bodyData,
  headerData
}) => {
  const openDocument = Object(external_react_["useCallback"])(link => () => window.open(link), []);
  return Object(core_["jsx"])("table", {
    className: "w-100",
    css: Table_component_ref2
  }, Object(core_["jsx"])("thead", null, Object(core_["jsx"])("tr", {
    css: Table_component_ref3
  }, headerData && headerData.map((item, index) => Object(core_["jsx"])("th", {
    scope: "col",
    css: Table_component_ref4,
    key: index
  }, item)))), Object(core_["jsx"])("tbody", {
    css: Table_component_ref5
  }, bodyData.map((item, index) => Object(core_["jsx"])("tr", {
    css: Table_component_ref,
    onClick: openDocument(item.link),
    key: index
  }, Object(core_["jsx"])("td", {
    css: component_ref6
  }, item && item.name), Object(core_["jsx"])("td", {
    css: component_ref7
  }, item && item.date.toString()), Object(core_["jsx"])("td", {
    css: component_ref8
  }, item && item.size), Object(core_["jsx"])("td", {
    css: component_ref9
  }, item && item.posted)))));
};
// CONCATENATED MODULE: ./src/components/molecules/Table/index.ts

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "rehype-raw"
var external_rehype_raw_ = __webpack_require__("RwYs");
var external_rehype_raw_default = /*#__PURE__*/__webpack_require__.n(external_rehype_raw_);

// CONCATENATED MODULE: ./src/components/molecules/Markdown/component.tsx
var Markdown_component_jsx = external_react_default.a.createElement;

function Markdown_component_extends() { Markdown_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Markdown_component_extends.apply(this, arguments); }

function Markdown_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Markdown_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Markdown_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Markdown_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable react/display-name */








var Markdown_component_ref = true ? {
  name: "1gbr53",
  styles: "margin-left:auto;margin-right:auto;height:auto;"
} : undefined;

var Markdown_component_ref2 = true ? {
  name: "1e1em8u",
  styles: "list-style:disc;"
} : undefined;

var Markdown_component_ref3 = true ? {
  name: "188grpe",
  styles: "word-break:break-all;text-decoration:underline;color:blue;"
} : undefined;

const Markdown = (_ref4) => {
  let {
    children: childrenProp
  } = _ref4,
      rest = Markdown_component_objectWithoutProperties(_ref4, ["children"]);

  const children = Object(external_react_["useMemo"])(() => core["d" /* services */].transformMarkdownImages(childrenProp), [childrenProp]);
  const transformUri = Object(external_react_["useCallback"])(uri => uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`, []);
  return Object(core_["jsx"])(external_react_markdown_default.a, Markdown_component_extends({
    className: "d-flex flex-column",
    rehypePlugins: [external_rehype_raw_default.a],
    transformLinkUri: transformUri,
    transformImageUri: transformUri,
    skipHtml: false,
    components: {
      p: (_ref5) => {
        let {
          node: _node
        } = _ref5,
            props = Markdown_component_objectWithoutProperties(_ref5, ["node"]);

        return Object(core_["jsx"])(P, Markdown_component_extends({
          typography: core["e" /* typography */].variants.Content.Regular16,
          className: "mb-3"
        }, props));
      },
      h1: (_ref6) => {
        let {
          node: _node
        } = _ref6,
            props = Markdown_component_objectWithoutProperties(_ref6, ["node"]);

        return Object(core_["jsx"])(H1, Markdown_component_extends({
          className: "my-3",
          css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingBold28, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingBold28, core["e" /* typography */].styles.headingBold28, core["e" /* typography */].styles.headingBold34]), true ? "" : undefined)
        }, props));
      },
      h2: (_ref7) => {
        let {
          node: _node
        } = _ref7,
            props = Markdown_component_objectWithoutProperties(_ref7, ["node"]);

        return Object(core_["jsx"])(H2, Markdown_component_extends({
          className: "my-3",
          css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingBold22, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingBold22, core["e" /* typography */].styles.headingBold22, core["e" /* typography */].styles.headingBold28]), true ? "" : undefined)
        }, props));
      },
      h3: (_ref8) => {
        let {
          node: _node
        } = _ref8,
            props = Markdown_component_objectWithoutProperties(_ref8, ["node"]);

        return Object(core_["jsx"])(H3, Markdown_component_extends({
          className: "my-3",
          css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingBold17, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingBold17, core["e" /* typography */].styles.headingBold17, core["e" /* typography */].styles.headingBold22]), true ? "" : undefined)
        }, props));
      },
      h4: (_ref9) => {
        let {
          node: _node
        } = _ref9,
            props = Markdown_component_objectWithoutProperties(_ref9, ["node"]);

        return Object(core_["jsx"])(H4, Markdown_component_extends({
          className: "my-3",
          css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.elementBold12, core["c" /* media */].queryStyled([core["e" /* typography */].styles.elementBold12, core["e" /* typography */].styles.elementBold12, core["e" /* typography */].styles.headingBold17]), true ? "" : undefined)
        }, props));
      },
      h5: (_ref10) => {
        let {
          node: _node
        } = _ref10,
            props = Markdown_component_objectWithoutProperties(_ref10, ["node"]);

        return Object(core_["jsx"])(H5, Markdown_component_extends({
          className: "my-3"
        }, props));
      },
      img: (_ref11) => {
        let {
          node: _node,
          alt,
          src
        } = _ref11,
            props = Markdown_component_objectWithoutProperties(_ref11, ["node", "alt", "src"]);

        return Object(core_["jsx"])("img", Markdown_component_extends({
          alt: alt,
          src: src,
          className: "mb-3",
          css: Markdown_component_ref
        }, props));
      },
      ol: (_ref12) => {
        let {
          node: _node
        } = _ref12,
            props = Markdown_component_objectWithoutProperties(_ref12, ["node"]);

        return Object(core_["jsx"])(OrderedList, Markdown_component_extends({}, props, {
          className: "pl-5 mb-4",
          typography: core["e" /* typography */].variants.Content.Regular16
        }));
      },
      ul: (_ref13) => {
        let {
          node: _node
        } = _ref13,
            props = Markdown_component_objectWithoutProperties(_ref13, ["node"]);

        return Object(core_["jsx"])(List, Markdown_component_extends({}, props, {
          className: "pl-5 mb-4",
          css: Markdown_component_ref2
        }));
      },
      li: (_ref14) => {
        let {
          node: _node
        } = _ref14,
            props = Markdown_component_objectWithoutProperties(_ref14, ["node"]);

        return Object(core_["jsx"])(component_Item, Markdown_component_extends({}, props, {
          className: "mb-2",
          typography: core["e" /* typography */].variants.Content.Regular16
        }));
      },
      a: (_ref15) => {
        let {
          node: _node
        } = _ref15,
            props = Markdown_component_objectWithoutProperties(_ref15, ["node"]);

        return Object(core_["jsx"])(Anchor, Markdown_component_extends({}, props, {
          css: Markdown_component_ref3,
          target: "_blank"
        }));
      }
    }
  }, rest), children);
};
// CONCATENATED MODULE: ./src/components/molecules/Markdown/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Pagination/types/PaginationItemTypes.ts
let PaginationItemTypes;

(function (PaginationItemTypes) {
  PaginationItemTypes["Page"] = "page";
  PaginationItemTypes["First"] = "first";
  PaginationItemTypes["Last"] = "last";
  PaginationItemTypes["Next"] = "next";
  PaginationItemTypes["Previous"] = "previous";
  PaginationItemTypes["Ellipsis"] = "ellipsis";
  PaginationItemTypes["StartEllipsis"] = "start-ellipsis";
  PaginationItemTypes["EndEllipsis"] = "end-ellipsis";
})(PaginationItemTypes || (PaginationItemTypes = {}));
// CONCATENATED MODULE: ./src/components/molecules/Pagination/services/builders.ts

const createPaginationItem = (item, disabled, page, count, handleClick, buttonPage) => typeof item === 'number' ? {
  onClick: event => handleClick(event, item),
  type: PaginationItemTypes.Page,
  page: item,
  selected: item === page,
  disabled
} : {
  onClick: event => {
    handleClick(event, buttonPage(item, page, count));
  },
  type: item,
  selected: false,
  disabled: disabled || item.indexOf(PaginationItemTypes.Ellipsis) === -1 && (item === PaginationItemTypes.Next || item === PaginationItemTypes.Last ? page >= count : page <= 1)
};
// CONCATENATED MODULE: ./src/components/molecules/Pagination/services/buttonPage.ts
 // Map the button type to its page number

const buttonPage_buttonPage = (type, page, count) => {
  switch (type) {
    case PaginationItemTypes.First:
      return 1;

    case PaginationItemTypes.Previous:
      return page - 1;

    case PaginationItemTypes.Next:
      return page + 1;

    case PaginationItemTypes.Last:
      return count;

    default:
      return NaN;
  }
};
// CONCATENATED MODULE: ./src/components/molecules/Pagination/services/range.ts
const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({
    length
  }, (_, i) => start + i);
};
// CONCATENATED MODULE: ./src/components/molecules/Pagination/hooks.ts
function hooks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hooks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hooks_ownKeys(Object(source), true).forEach(function (key) { hooks_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hooks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hooks_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hooks_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hooks_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const usePagination = props => {
  const {
    boundaryCount = 1,
    count = 1,
    page: pageProp,
    defaultPage = 1,
    disabled = false,
    onChange: handleChange,
    hidePrevButton = false,
    hideNextButton,
    siblingCount = 1
  } = props,
        other = hooks_objectWithoutProperties(props, ["boundaryCount", "count", "page", "defaultPage", "disabled", "onChange", "hidePrevButton", "hideNextButton", "siblingCount"]);

  const {
    0: page,
    1: setPageState
  } = Object(external_react_["useState"])(pageProp || defaultPage);
  const handleClick = Object(external_react_["useCallback"])((event, value) => {
    if (handleChange) {
      handleChange(event, value);
    }

    setPageState(value);
  }, [handleChange]);
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min( // Natural start
  page - siblingCount, // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1), // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max( // Natural end
  page + siblingCount, // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2), // Less than endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1); // Basic list of items to render
  // e.g itemsList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']

  const itemsList = Object(external_react_["useMemo"])(() => [...(hidePrevButton ? [] : [PaginationItemTypes.Previous]), ...startPages, // Start ellipsis
  ...(siblingsStart > boundaryCount + 2 ? [PaginationItemTypes.StartEllipsis] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), // Sibling pages
  ...range(siblingsStart, siblingsEnd), // End ellipsis
  ...(siblingsEnd < count - boundaryCount - 1 ? [PaginationItemTypes.EndEllipsis] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : [PaginationItemTypes.Next])], [boundaryCount, count, endPages, hideNextButton, hidePrevButton, siblingsEnd, siblingsStart, startPages]);
  const items = itemsList.map(item => createPaginationItem(item, disabled, page, count, handleClick, buttonPage_buttonPage));
  return hooks_objectSpread({
    items
  }, other);
};
// CONCATENATED MODULE: ./src/components/molecules/Pagination/libs/Item/libs/Button/component.ts


function Button_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Button_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_component_ownKeys(Object(source), true).forEach(function (key) { Button_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Button_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ButtonBase = (_ref) => {
  let {
    children
  } = _ref,
      rest = Button_component_objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(external_react_["createElement"])('button', Button_component_objectSpread({}, rest), children);
};

const component_Button = /*#__PURE__*/styled_base_default()(ButtonBase, {
  shouldForwardProp: is_prop_valid_default.a,
  target: "e510rgj0"
})("display:flex;justify-content:center;align-items:center;width:45px;height:45px;border:none;background:", core["a" /* colors */].variants.Neutral.White, ";cursor:pointer;", props => props.selected && `
      border-radius: 4px;
      background-color: ${core["a" /* colors */].variants.Brand.ExtraLightPurple};
    `, true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/molecules/Pagination/libs/Item/libs/Button/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Pagination/libs/Item/libs/Ellipsis/component.tsx

var Ellipsis_component_jsx = external_react_default.a.createElement;




const EllipsisBase = (_ref) => {
  let rest = Object.assign({}, _ref);
  return Object(core_["jsx"])("div", rest, Object(core_["jsx"])("div", null), Object(core_["jsx"])("div", null), Object(core_["jsx"])("div", null));
};

const Ellipsis = /*#__PURE__*/styled_base_default()(EllipsisBase, {
  target: "ey63g810"
})("display:flex;justify-content:center;align-items:center;width:32px;height:32px;div{width:4px;height:4px;margin-right:2px;background:", core["a" /* colors */].variants.Neutral.Black, ";border-radius:50%;&:last-child{margin-right:0;}}" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/molecules/Pagination/libs/Item/libs/Ellipsis/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Pagination/libs/Item/component.tsx
var Item_component_jsx = external_react_default.a.createElement;

function Item_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Item_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Item_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Item = (_ref) => {
  let {
    type,
    page,
    onClick,
    selected,
    disabled
  } = _ref,
      rest = Item_component_objectWithoutProperties(_ref, ["type", "page", "onClick", "selected", "disabled"]);

  const buttonTextColorStyles = selected ? core["a" /* colors */].variants.Brand.Purple : core["a" /* colors */].variants.Neutral.Black;
  const buttonIconColorStyles = disabled ? core["a" /* colors */].variants.Neutral.LightGrey : core["a" /* colors */].variants.Neutral.Black;
  return Object(core_["jsx"])("div", rest, type === PaginationItemTypes.StartEllipsis || type === PaginationItemTypes.EndEllipsis ? Object(core_["jsx"])(Ellipsis, null) : Object(core_["jsx"])(component_Button, {
    onClick: onClick,
    disabled: disabled,
    selected: selected,
    itemType: type
  }, type === PaginationItemTypes.Page && Object(core_["jsx"])(P, {
    typography: core["e" /* typography */].variants.Content.Regular16,
    color: buttonTextColorStyles
  }, page), type === PaginationItemTypes.Previous && Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].arrows.keyboardArrowLeft,
    color: buttonIconColorStyles
  }), type === PaginationItemTypes.Next && Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].arrows.keyboardArrowRight,
    color: buttonIconColorStyles
  })));
};
// CONCATENATED MODULE: ./src/components/molecules/Pagination/libs/Item/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Pagination/component.tsx

var Pagination_component_jsx = external_react_default.a.createElement;

function Pagination_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Pagination_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Pagination_component_ownKeys(Object(source), true).forEach(function (key) { Pagination_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Pagination_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Pagination_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Pagination_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Pagination_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Pagination_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const PaginationBase = (_ref) => {
  let {
    count,
    page,
    defaultPage,
    siblingCount,
    boundaryCount,
    spaceBetweenItems,
    renderItem = item => Object(core_["jsx"])(Item, item),
    onChange
  } = _ref,
      rest = Pagination_component_objectWithoutProperties(_ref, ["count", "page", "defaultPage", "siblingCount", "boundaryCount", "spaceBetweenItems", "renderItem", "onChange"]);

  const {
    items
  } = usePagination({
    count,
    onChange,
    page,
    siblingCount,
    boundaryCount,
    defaultPage,
    spaceBetweenItems
  });
  return Object(core_["jsx"])("nav", rest, Object(core_["jsx"])("ul", {
    className: "d-flex"
  }, items.map((item, index) => Object(core_["jsx"])("li", {
    key: index
  }, renderItem(Pagination_component_objectSpread({}, item))))));
};

const Pagination = /*#__PURE__*/styled_base_default()(PaginationBase, {
  target: "e1n8jvx40"
})("ul{list-style:none;padding:0;margin:0;}li{display:flex;align-items:center;margin-right:", props => `${props.spaceBetweenItems}px;`, ";&:last-child{margin-right:0;}}" + (true ? "" : undefined));
Pagination.defaultProps = {
  spaceBetweenItems: 4
};
// CONCATENATED MODULE: ./src/components/molecules/Pagination/index.ts


// EXTERNAL MODULE: external "@popperjs/core"
var external_popperjs_core_ = __webpack_require__("pccx");

// EXTERNAL MODULE: external "fp-ts/Apply"
var Apply_ = __webpack_require__("ZPpP");

// EXTERNAL MODULE: external "fp-ts/function"
var function_ = __webpack_require__("uscD");

// EXTERNAL MODULE: external "fp-ts/IO"
var IO_ = __webpack_require__("OX3g");

// EXTERNAL MODULE: external "fp-ts/Option"
var Option_ = __webpack_require__("0U3A");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// CONCATENATED MODULE: ./src/components/molecules/Popover/types/CoverStrategies.ts
let CoverStrategies;

(function (CoverStrategies) {
  CoverStrategies[CoverStrategies["Visibility"] = 0] = "Visibility";
})(CoverStrategies || (CoverStrategies = {}));
// CONCATENATED MODULE: ./src/components/molecules/Popover/types/DefaultRootIds.ts
let DefaultRootIds;

(function (DefaultRootIds) {
  DefaultRootIds["Root"] = "root";
  DefaultRootIds["Next"] = "__next";
})(DefaultRootIds || (DefaultRootIds = {}));
// CONCATENATED MODULE: ./src/components/molecules/Popover/types/TargetTypes.ts
let TargetTypes;

(function (TargetTypes) {
  TargetTypes[TargetTypes["Ref"] = 0] = "Ref";
  TargetTypes[TargetTypes["Element"] = 1] = "Element";
})(TargetTypes || (TargetTypes = {}));
// CONCATENATED MODULE: ./src/components/molecules/Popover/component.tsx
var Popover_component_jsx = external_react_default.a.createElement;

function Popover_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Popover_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Popover_component_ownKeys(Object(source), true).forEach(function (key) { Popover_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Popover_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Popover_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Popover_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Popover_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Popover_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const Popover = props => {
  // `rest` should contain only popper.js `OptionsGeneric`.
  const {
    children,
    onChange,
    hoverEnabled,
    coverStrategy,
    active: propActive,
    root: propRoot
  } = props,
        rest = Popover_component_objectWithoutProperties(props, ["children", "onChange", "hoverEnabled", "coverStrategy", "active", "root"]); // Popper.js instance.


  const popper = Object(external_react_["useRef"])(); // Children clone's ref.

  const contentRef = Object(external_react_["useRef"])(null); // Target element's ref if target `type` is set to `Element`.

  const targetElementRef = Object(external_react_["useRef"])(null); // Control active state if own is not provided by `props.active`.

  const {
    0: innerActive,
    1: setInnerActive
  } = Object(external_react_["useState"])(false); // Final active state.

  const active = propActive !== null && propActive !== void 0 ? propActive : innerActive; // Final Target type.

  const type = props.target ? TargetTypes.Element : TargetTypes.Ref; // Final target ref.

  const target = type === TargetTypes.Ref ? props.targetRef : targetElementRef; // Final document body.

  const body =  false && false; // Final Virtual DOM hydration root.

  const root = Object(external_react_["useMemo"])(() => false ? undefined : undefined, [propRoot]);
  const visibilityStyles = Object(external_react_["useMemo"])(() => coverStrategy === CoverStrategies.Visibility && !active ? {
    visibility: 'hidden',
    pointerEvents: 'none'
  } : {}, [active, coverStrategy]);
  const changeActive = Object(external_react_["useCallback"])((newActive = !active) => {
    if (onChange) onChange(newActive);
    setInnerActive(newActive);
  }, [active, onChange]);
  const onTargetHandler = Object(external_react_["useCallback"])((onClick, newActive = !active, switchTimeout = 0) => event => {
    if (onClick) onClick(event);
    setTimeout(() => changeActive(newActive), switchTimeout);
  }, [active, changeActive]);
  const onTargetRefHandler = Object(external_react_["useCallback"])((handler, newActive = !active, switchTimeout = 0) => event => {
    if (handler) handler(event);
    changeActive(newActive);
    setTimeout(() => changeActive(newActive), switchTimeout);
  }, [active, changeActive]);
  const getHoverHandlers = Object(external_react_["useCallback"])(props => ({
    onMouseEnter: onTargetHandler(props.onMouseEnter, true),
    onMouseLeave: onTargetHandler(props.onMouseLeave, false)
  }), [onTargetHandler]); // Initialize `popper` instance only once.

  Object(external_react_["useEffect"])(() => {
    Object(function_["pipe"])(popper, Option_["fromPredicate"](v => v.current === undefined), Option_["chain"](() => Object(Apply_["sequenceT"])(Option_["option"])(Option_["fromNullable"](target === null || target === void 0 ? void 0 : target.current), Option_["fromNullable"](contentRef.current))), Option_["map"](([target, content]) => Object(external_popperjs_core_["createPopper"])(target, content, rest)), // eslint-disable-next-line functional/immutable-data
    Option_["map"](p => popper.current = p));
  }, [children, rest, target]); // Handle click outside of the component.

  Object(external_react_["useEffect"])(() => {
    const eventKey = 'click';

    const onClickOutside = event => {
      Object(function_["pipe"])(Option_["fromNullable"](contentRef === null || contentRef === void 0 ? void 0 : contentRef.current), Option_["chain"](Option_["fromPredicate"](c => !c.contains(event.target))), Option_["map"](() => changeActive(false)));
    };

    root === null || root === void 0 ? void 0 : root.addEventListener(eventKey, onClickOutside);
    return () => root === null || root === void 0 ? void 0 : root.removeEventListener(eventKey, onClickOutside);
  }, [active, changeActive, root]); // Initialize event listeners for `targetRef`.

  Object(external_react_["useEffect"])(() => Object(function_["pipe"])(props, Option_["fromPredicate"](() => type === TargetTypes.Ref), Option_["chain"](p => {
    var _p$targetRef;

    return Option_["fromNullable"]((_p$targetRef = p.targetRef) === null || _p$targetRef === void 0 ? void 0 : _p$targetRef.current);
  }), Option_["chain"](r => Object(Apply_["sequenceT"])(Option_["option"])(Option_["some"](r), Option_["fromNullable"](onTargetRefHandler(r.onclick)), Option_["some"](Object(function_["pipe"])(hoverEnabled, Option_["fromPredicate"](v => !!v), Option_["chain"](() => Object(Apply_["sequenceT"])(Option_["option"])(Option_["fromNullable"](onTargetRefHandler(r.onmouseenter, true)), Option_["fromNullable"](onTargetRefHandler(r.onmouseleave, false)))))))), Option_["map"](([r, click, hover]) => Object(function_["pipe"])( // Register event listeners.
  r.addEventListener('click', click), IO_["of"](hover), Option_["map"](([mouseenter, mouseleave]) => Object(function_["pipe"])(r.addEventListener('mouseenter', mouseenter), () => r.addEventListener('mouseleave', mouseleave))), IO_["of"]( // Remove event listeners on component unmount.
  Object(function_["flow"])(() => r.removeEventListener('click', click), IO_["of"](hover), Option_["map"](([mouseenter, mouseleave]) => Object(function_["pipe"])(r.removeEventListener('mouseenter', mouseenter), () => r.removeEventListener('mouseleave', mouseleave))))))), Option_["getOrElse"](() => () => void 0)), [active, changeActive, hoverEnabled, onTargetRefHandler, props, type]);
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, type === TargetTypes.Element && props.target && /*#__PURE__*/Object(external_react_["cloneElement"])(props.target, Popover_component_objectSpread({
    ref: targetElementRef,
    onClick: onTargetHandler(props.target.props.onClick)
  }, hoverEnabled && getHoverHandlers(props.target.props))), body && /*#__PURE__*/Object(external_react_dom_["createPortal"])( /*#__PURE__*/Object(external_react_["cloneElement"])(children, Popover_component_objectSpread(Popover_component_objectSpread({
    ref: contentRef
  }, hoverEnabled && getHoverHandlers(children.props)), {}, {
    style: Popover_component_objectSpread(Popover_component_objectSpread(Popover_component_objectSpread({}, children.props.style), visibilityStyles), {}, {
      position: rest.strategy,
      zIndex: 120
    })
  })), body));
};
Popover.defaultProps = {
  coverStrategy: CoverStrategies.Visibility,
  placement: 'bottom-start',
  strategy: 'fixed'
};
// CONCATENATED MODULE: ./src/components/molecules/Popover/types/ModifierNames.ts
let ModifierNames;

(function (ModifierNames) {
  ModifierNames["SameWidth"] = "sameWidth";
  ModifierNames["Offset"] = "offset";
})(ModifierNames || (ModifierNames = {}));
// CONCATENATED MODULE: ./src/components/molecules/Popover/services/modifiers.ts


const sameWidth = {
  name: ModifierNames.SameWidth,
  enabled: true,
  phase: external_popperjs_core_["beforeWrite"],
  requires: ['computeStyles'],
  fn: ({
    state
  }) => {
    // eslint-disable-next-line functional/immutable-data
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({
    state
  }) => {
    // eslint-disable-next-line functional/immutable-data
    state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
  }
};
// CONCATENATED MODULE: ./src/components/molecules/Popover/index.ts






// CONCATENATED MODULE: ./src/components/molecules/QuestionCard/component.tsx

var QuestionCard_component_jsx = external_react_default.a.createElement;

function QuestionCard_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const QuestionCardContainer = styled_base_default()("a", {
  target: "e1whyqxo0"
})(props => /*#__PURE__*/Object(core_["css"])("border-radius:8px;background-color:", core["a" /* colors */].variants.Neutral.White, ";padding:2rem 1rem;cursor:pointer;box-shadow:1px 1px 8px rgba(201,201,201,0.8),0px 0.5px 0px rgba(172,172,172,0.9);transition:transform 0.1s ease-out;transform:", props.onHover ? 'scale(1.03)' : 'none', ";width:300px;height:100%;&:hover{background-color:", core["a" /* colors */].variants.Brand.MoreExtraLightPurple, ";}" + (true ? "" : undefined)), true ? "" : undefined);

var QuestionCard_component_ref = true ? {
  name: "xi606m",
  styles: "text-align:center;"
} : undefined;

var QuestionCard_component_ref2 = true ? {
  name: "xsdlot",
  styles: "border-radius:8px;margin-top:8rem;"
} : undefined;

const QuestionCard = props => {
  const {
    0: onHover,
    1: setOnHover
  } = Object(external_react_["useState"])(false);
  return Object(core_["jsx"])("div", {
    className: "p-3"
  }, Object(core_["jsx"])(QuestionCardContainer, {
    href: `/question/${props.id}`,
    className: "d-flex align-items-center justify-content-between flex-column" // eslint-disable-next-line react/jsx-no-bind
    ,
    onMouseOver: () => setOnHover(true) // eslint-disable-next-line react/jsx-no-bind
    ,
    onMouseOut: () => setOnHover(false),
    onHover: onHover
  }, Object(core_["jsx"])(H1, {
    className: "d-flex align-items-center justify-content-center",
    css: /*#__PURE__*/Object(core_["css"])("margin-bottom:3rem;border-style:solid;border-color:", core["a" /* colors */].variants.Brand.Purple, ";border-width:4px;border-radius:50%;width:60px;height:60px;" + (true ? "" : undefined))
  }, "?"), Object(core_["jsx"])(H2, {
    css: QuestionCard_component_ref
  }, props.title), Object(core_["jsx"])(Button, {
    css: QuestionCard_component_ref2,
    className: "pl-5 pr-5"
  }, props.buttonText)));
};
// CONCATENATED MODULE: ./src/components/molecules/QuestionCard/index.ts

// CONCATENATED MODULE: ./src/components/molecules/RelevantTopicCard/component.tsx
var RelevantTopicCard_component_jsx = external_react_default.a.createElement;





const RelevantTopicCard = props => Object(core_["jsx"])(Anchor, {
  href: `/question/${props.categoryId}/${props.id}`,
  className: "tw-col-6 hover:tw-bg-purple-500 hover:tw-text-white tw-px-8 tw-py-4 tw-border-b tw-w-full text-center",
  css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingSemiBold17, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingSemiBold17, core["e" /* typography */].styles.headingSemiBold17, core["e" /* typography */].styles.headingSemiBold22]), true ? "" : undefined)
}, props.title);
// CONCATENATED MODULE: ./src/components/molecules/RelevantTopicCard/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Dropdown/library/DropdownHeader/component.tsx



const DropdownHeader = styled_base_default()("button", {
  target: "e1qyuhll0"
})("width:100%;text-align:left;&:first-child{border-top:2px solid ", core["a" /* colors */].variants.Neutral.LightGrey, ";}", props => /*#__PURE__*/Object(core_["css"])("background-color:", props.open ? core["a" /* colors */].variants.Brand.MoreExtraLightPurple : core["a" /* colors */].variants.Neutral.White, ";border-bottom:2px solid ", core["a" /* colors */].variants.Neutral.LightGrey, ";" + (true ? "" : undefined)), true ? "" : undefined);
// CONCATENATED MODULE: ./src/components/molecules/Dropdown/library/DropdownHeader/index.ts

// CONCATENATED MODULE: ./src/components/molecules/Dropdown/component.tsx
var Dropdown_component_jsx = external_react_default.a.createElement;

function Dropdown_component_extends() { Dropdown_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dropdown_component_extends.apply(this, arguments); }

function Dropdown_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dropdown_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Dropdown_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Dropdown_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








var Dropdown_component_ref = true ? {
  name: "4g6ai3",
  styles: "cursor:pointer;"
} : undefined;

const Dropdown = (_ref2) => {
  var _question$localizatio, _question$localizatio2, _question$localizatio3, _question$localizatio4;

  let {
    isInitiallyOpen,
    useLocalization,
    question
  } = _ref2,
      rest = Dropdown_component_objectWithoutProperties(_ref2, ["isInitiallyOpen", "useLocalization", "question"]);

  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(isInitiallyOpen);

  const onOpenToggle = () => setOpen(prev => !prev);

  return Object(core_["jsx"])(DropdownHeader, Dropdown_component_extends({
    className: "d-flex flex-column justify-content-between align-items-center p-md-4 p-3",
    open: open,
    onClick: onOpenToggle,
    css: Dropdown_component_ref
  }, rest), Object(core_["jsx"])("div", {
    className: "tw-flex tw-justify-between tw-items-center tw-w-full"
  }, Object(core_["jsx"])(Typography, {
    as: "h2",
    css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingSemiBold17, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingSemiBold17, core["e" /* typography */].styles.headingSemiBold17, core["e" /* typography */].styles.headingBold22]), true ? "" : undefined)
  }, useLocalization ? question === null || question === void 0 ? void 0 : (_question$localizatio = question.localizations) === null || _question$localizatio === void 0 ? void 0 : (_question$localizatio2 = _question$localizatio[0]) === null || _question$localizatio2 === void 0 ? void 0 : _question$localizatio2.title : question.title), Object(core_["jsx"])("div", null, open ? Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].arrows.keyboardArrowUp,
    size: Sizes_Sizes.Medium
  }) : Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].arrows.keyboardArrowDown,
    size: Sizes_Sizes.Medium
  }))), open && Object(core_["jsx"])(Markdown, {
    className: "pt-4"
  }, useLocalization ? question === null || question === void 0 ? void 0 : (_question$localizatio3 = question.localizations) === null || _question$localizatio3 === void 0 ? void 0 : (_question$localizatio4 = _question$localizatio3[0]) === null || _question$localizatio4 === void 0 ? void 0 : _question$localizatio4.content : question.content));
};
// CONCATENATED MODULE: ./src/components/molecules/Dropdown/index.ts

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__("M1sZ");

// CONCATENATED MODULE: ./src/components/molecules/LastUpdated/component.tsx
var LastUpdated_component_jsx = external_react_default.a.createElement;





const LastUpdated = props => Object(core_["jsx"])("div", {
  className: "d-flex justify-content-start align-items-center mb-3"
}, Object(core_["jsx"])(outline_["ClockIcon"], {
  className: "tw-h-5 tw-w-5 tw-mr-2"
}), Object(core_["jsx"])(P, {
  className: "pr-2",
  typography: core["e" /* typography */].variants.Element.SemiBold12
}, props.lastUpdatedText), Object(core_["jsx"])(P, {
  className: "pr-2",
  typography: core["e" /* typography */].variants.Element.Regular12
}, core["d" /* services */].parseDate(props.date.toString(), props.lang === 'ru-RU' ? 'ru' : 'kk')));
// CONCATENATED MODULE: ./src/components/molecules/LastUpdated/index.ts

// CONCATENATED MODULE: ./src/components/molecules/InteractiveCard/component.tsx

var InteractiveCard_component_jsx = external_react_default.a.createElement;

function InteractiveCard_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const InteractiveCardContainer = styled_base_default()("a", {
  target: "e1hu29hk0"
})(props => /*#__PURE__*/Object(core_["css"])("border-radius:8px;background-color:", core["a" /* colors */].variants.Neutral.White, ";padding:2rem 1rem;cursor:pointer;box-shadow:1px 1px 8px rgba(201,201,201,0.8),0px 0.5px 0px rgba(172,172,172,0.9);transition:transform 0.1s ease-out;transform:", props.onHover ? 'scale(1.03)' : 'none', ";width:300px;height:100%;&:hover{background-color:", core["a" /* colors */].variants.Brand.MoreExtraLightPurple, ";}" + (true ? "" : undefined)), true ? "" : undefined);

var InteractiveCard_component_ref = true ? {
  name: "rl6otz",
  styles: "border-radius:8px;"
} : undefined;

const InteractiveCard = props => {
  const {
    0: onHover,
    1: setOnHover
  } = Object(external_react_["useState"])(false);
  return Object(core_["jsx"])("div", {
    className: "p-3"
  }, Object(core_["jsx"])(InteractiveCardContainer, {
    href: props.href,
    className: "tw-flex tw-items-center tw-justify-between tw-flex-col tw-text-center" // eslint-disable-next-line react/jsx-no-bind
    ,
    onMouseOver: () => setOnHover(true) // eslint-disable-next-line react/jsx-no-bind
    ,
    onMouseOut: () => setOnHover(false),
    onHover: onHover
  }, Object(core_["jsx"])(Typography, {
    as: "h3",
    css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingBold17, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingBold22, core["e" /* typography */].styles.headingBold22, core["e" /* typography */].styles.headingBold28]), true ? "" : undefined),
    className: "mb-3 tw-clip tw-w-full tw-overflow-hidden tw-break-words"
  }, props.title), Object(core_["jsx"])(P, {
    className: "mb-4"
  }, props.description), Object(core_["jsx"])(Button, {
    css: InteractiveCard_component_ref,
    variant: Variants.Flat
  }, props.buttonText)));
};
// CONCATENATED MODULE: ./src/components/molecules/InteractiveCard/index.ts

// CONCATENATED MODULE: ./src/components/molecules/index.ts
















// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/components/organisms/Header/styles.ts


const popoverListContent = /*#__PURE__*/Object(core_["css"])("background-color:", core["a" /* colors */].variants.Background.Primary, ";border-radius:4px;box-shadow:0px 1px 12px rgba(0,0,0,0.08);" + (true ? "" : undefined));
// CONCATENATED MODULE: ./src/components/organisms/Header/component.tsx
var Header_component_jsx = external_react_default.a.createElement;

function Header_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var Header_component_ref = true ? {
  name: "euhhy7",
  styles: "border-top-right-radius:20px;border-bottom-right-radius:20px;"
} : undefined;

var Header_component_ref2 = true ? {
  name: "1txxydz",
  styles: "padding-top:6rem;"
} : undefined;

var Header_component_ref3 = true ? {
  name: "ayshjd",
  styles: "overflow-x:auto;"
} : undefined;

const Header = props => {
  var _props$headerLinks, _props$headerLinks$, _props$headerLinks$$l, _props$headerLinks2, _props$headerLinks2$, _props$headerLinks2$$;

  const isMobile = core["c" /* media */].useMobileDetector().mobile();
  const {
    0: mobileMenuOpen,
    1: setMobileMenuOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: language,
    1: setLanguage
  } = Object(external_react_["useState"])(external_js_cookie_default.a.get('lang') === 'kk-Cyrl-KZ' ? 'Қаз' : 'Рус'); // const hasToken = useMemo(() => Cookies.get('token'), []);

  const onToggleMobileMenu = Object(external_react_["useCallback"])(() => setMobileMenuOpen(prev => !prev), []); // const onLogOut = useCallback(() => {
  //   Cookies.remove('token');
  //   const checkInterval = setInterval(() => {
  //     if (!Cookies.get('token')) {
  //       clearInterval(checkInterval);
  //       window.location.assign(window.location.href);
  //     }
  //   }, 10);
  // }, []);

  const onSetLanguage = Object(external_react_["useCallback"])(lang => () => {
    external_js_cookie_default.a.set('lang', lang);
    setLanguage(lang === 'kk-Cyrl-KZ' ? 'Қаз' : 'Рус');
    const checkInterval = setInterval(() => {
      if (external_js_cookie_default.a.get('lang') === lang) {
        clearInterval(checkInterval);

        if (window.location.href.includes('/article/')) {
          const newURL = window.location.href.replace(/article\/.+/, 'articles');
          window.location.assign(newURL);
        } else {
          window.location.assign(window.location.href);
        }
      }
    }, 10);
  }, []);
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, isMobile && Object(core_["jsx"])(Drawer, {
    active: mobileMenuOpen,
    closeOnClick: true,
    closeOnSwipe: true,
    direction: Directions_Directions.FromLeft,
    onChange: onToggleMobileMenu,
    width: "75%",
    css: Header_component_ref,
    zIndex: 50
  }, Object(core_["jsx"])("div", {
    className: "d-flex flex-column justify-content-between h-100 pl-5 pb-5",
    css: Header_component_ref2
  }, Object(core_["jsx"])("div", {
    className: "d-flex flex-column"
  }, (_props$headerLinks = props.headerLinks) === null || _props$headerLinks === void 0 ? void 0 : (_props$headerLinks$ = _props$headerLinks[0]) === null || _props$headerLinks$ === void 0 ? void 0 : (_props$headerLinks$$l = _props$headerLinks$.links) === null || _props$headerLinks$$l === void 0 ? void 0 : _props$headerLinks$$l.map(link => Object(core_["jsx"])(Anchor, {
    key: link === null || link === void 0 ? void 0 : link.title,
    href: (link === null || link === void 0 ? void 0 : link.link) || '/',
    className: "mb-4",
    color: core["a" /* colors */].variants.Neutral.Black,
    typography: core["e" /* typography */].variants.Heading.SemiBold17
  }, link === null || link === void 0 ? void 0 : link.title))))), Object(core_["jsx"])("div", {
    className: "container tw-grid tw-grid-cols-3 tw-justify-items-stretch py-3 tw-mx-auto"
  }, isMobile && Object(core_["jsx"])("button", {
    className: "tw-border-0",
    onClick: onToggleMobileMenu
  }, Object(core_["jsx"])(Icon, {
    icon: core["b" /* icons */].ui.menuHamburger,
    color: core["a" /* colors */].variants.Neutral.Black
  })), !isMobile && Object(core_["jsx"])("div", {
    className: "d-flex align-items-center",
    css: Header_component_ref3
  }, (_props$headerLinks2 = props.headerLinks) === null || _props$headerLinks2 === void 0 ? void 0 : (_props$headerLinks2$ = _props$headerLinks2[0]) === null || _props$headerLinks2$ === void 0 ? void 0 : (_props$headerLinks2$$ = _props$headerLinks2$.links) === null || _props$headerLinks2$$ === void 0 ? void 0 : _props$headerLinks2$$.map(link => Object(core_["jsx"])(Anchor, {
    key: link === null || link === void 0 ? void 0 : link.title,
    href: (link === null || link === void 0 ? void 0 : link.link) || '/',
    className: "mr-3",
    color: core["a" /* colors */].variants.Text.Primary,
    typography: core["e" /* typography */].variants.Heading.SemiBold17
  }, link === null || link === void 0 ? void 0 : link.title))), Object(core_["jsx"])(Anchor, {
    href: "/",
    className: "mx-5 tw-justify-self-center d-flex align-items-center tw-w-max"
  }, Object(core_["jsx"])("img", {
    alt: "logo",
    src: "/static/images/logoSmall.svg"
  }), Object(core_["jsx"])(H2, {
    className: "ml-2 ",
    css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.headingBold17, core["c" /* media */].queryStyled([core["e" /* typography */].styles.headingBold17, core["e" /* typography */].styles.headingBold17, core["e" /* typography */].styles.headingBold28]), true ? "" : undefined)
  }, "MedSupport")), Object(core_["jsx"])("div", {
    className: "d-flex align-items-center tw-justify-self-end"
  }, !isMobile && Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(Popover, {
    target: Object(core_["jsx"])(Button, {
      className: "mr-3 px-1",
      variant: Variants.Flat,
      size: Sizes.ExtraSmall
    }, Object(core_["jsx"])(Icon, {
      className: "mr-1",
      icon: core["b" /* icons */].actions.language,
      color: core["a" /* colors */].variants.Neutral.Black
    }), Object(core_["jsx"])(P, {
      typography: core["e" /* typography */].variants.Heading.SemiBold17,
      css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.elementSemiBold12, core["c" /* media */].queryStyled([core["e" /* typography */].styles.elementSemiBold12, core["e" /* typography */].styles.elementSemiBold12, core["e" /* typography */].styles.headingSemiBold17]), true ? "" : undefined)
    }, language))
  }, Object(core_["jsx"])(List, {
    css: popoverListContent
  }, Object(core_["jsx"])(component_Item, {
    interactive: true
  }, Object(core_["jsx"])(ItemButton, {
    onClick: onSetLanguage('ru-RU')
  }, Object(core_["jsx"])(P, {
    typography: core["e" /* typography */].variants.Content.Regular16
  }, "\u0420\u0443\u0441"))), Object(core_["jsx"])(Divider, null), Object(core_["jsx"])(component_Item, {
    interactive: true
  }, Object(core_["jsx"])(ItemButton, {
    onClick: onSetLanguage('kk-Cyrl-KZ')
  }, Object(core_["jsx"])(P, {
    typography: core["e" /* typography */].variants.Content.Regular16
  }, "\u049A\u0430\u0437")))))), isMobile && Object(core_["jsx"])("div", {
    className: "d-flex"
  }, Object(core_["jsx"])(Popover, {
    target: Object(core_["jsx"])(Button, {
      className: "px-1",
      variant: Variants.Flat,
      size: Sizes.ExtraSmall
    }, Object(core_["jsx"])(Icon, {
      className: "mr-1",
      icon: core["b" /* icons */].actions.language,
      color: core["a" /* colors */].variants.Neutral.Black
    }), Object(core_["jsx"])(P, {
      typography: core["e" /* typography */].variants.Heading.SemiBold17,
      css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.elementSemiBold12, core["c" /* media */].queryStyled([core["e" /* typography */].styles.elementSemiBold12, core["e" /* typography */].styles.elementSemiBold12, core["e" /* typography */].styles.headingSemiBold17]), true ? "" : undefined)
    }, language))
  }, Object(core_["jsx"])(List, {
    css: popoverListContent
  }, Object(core_["jsx"])(component_Item, {
    interactive: true
  }, Object(core_["jsx"])(ItemButton, {
    onClick: onSetLanguage('ru-RU')
  }, Object(core_["jsx"])(P, {
    typography: core["e" /* typography */].variants.Content.Regular16
  }, "\u0420\u0443\u0441"))), Object(core_["jsx"])(Divider, null), Object(core_["jsx"])(component_Item, {
    interactive: true
  }, Object(core_["jsx"])(ItemButton, {
    onClick: onSetLanguage('kk-Cyrl-KZ')
  }, Object(core_["jsx"])(P, {
    typography: core["e" /* typography */].variants.Content.Regular16
  }, "\u049A\u0430\u0437")))))))), !isMobile && Object(core_["jsx"])(Divider, null));
};
// CONCATENATED MODULE: ./src/components/organisms/Header/index.ts

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./src/components/organisms/Layout/component.tsx
var Layout_component_jsx = external_react_default.a.createElement;

function Layout_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const component_Header = dynamic_default()(() => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, "hJjj")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("hJjj")],
    modules: ['./libs/Header']
  }
});

var Layout_component_ref = true ? {
  name: "vooagt",
  styles: "min-height:100vh;"
} : undefined;

const Layout = props => Object(core_["jsx"])("div", {
  className: "d-flex flex-column",
  css: Layout_component_ref
}, Object(core_["jsx"])(component_Header, {
  headerButtons: props.headerButtons,
  headerLinks: props.headerLinks
}), props.children, Object(core_["jsx"])(Footer, {
  footerSections: props.footerSections
}));
// CONCATENATED MODULE: ./src/components/organisms/Layout/index.ts

// CONCATENATED MODULE: ./src/components/organisms/List/libs/Item/component.tsx



const component_Item = styled_base_default()("li", {
  target: "e1pqx2230"
})(props => props.interactive && core["d" /* services */].match('color', {
  [core["a" /* colors */].variants.Background.Primary]: /*#__PURE__*/Object(core_["css"])("color:", core["a" /* colors */].variants.Text.Primary, ";&:hover{background-color:", core["a" /* colors */].variants.Neutral.LightGrey, ";}" + (true ? "" : undefined))
}), " ", core["e" /* typography */].styles.extendByVariant, true ? "" : undefined);
component_Item.defaultProps = {
  typography: core["e" /* typography */].variants.Heading.Regular22,
  color: core["a" /* colors */].variants.Neutral.White
};
// CONCATENATED MODULE: ./src/components/organisms/List/libs/Item/index.ts

// CONCATENATED MODULE: ./src/components/organisms/List/libs/ItemButton/component.tsx

var ItemButton_component_jsx = external_react_default.a.createElement;

function ItemButton_component_extends() { ItemButton_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ItemButton_component_extends.apply(this, arguments); }

function ItemButton_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ItemButton_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ItemButton_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ItemButton_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






// eslint-disable-next-line react/display-name
const ItemButtonBase = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    className,
    children
  } = _ref,
      rest = ItemButton_component_objectWithoutProperties(_ref, ["className", "children"]);

  const Component = 'link' in rest ? ButtonLink : Button;
  return Object(core_["jsx"])(Component, ItemButton_component_extends({
    variant: Variants.Flat,
    color: core["a" /* colors */].variants.Text.Primary,
    typography: core["e" /* typography */].variants.Heading.Regular22,
    className: external_classnames_default()('w-100', 'justify-content-between', className) // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, rest, {
    ref: ref
  }), children);
});
const ItemButton = /*#__PURE__*/styled_base_default()(ItemButtonBase, {
  target: "eglg16o0"
})(true ? {
  name: "1k07npk",
  styles: "border-radius:0;"
} : undefined);
// CONCATENATED MODULE: ./src/components/organisms/List/libs/ItemButton/index.ts

// CONCATENATED MODULE: ./src/components/organisms/List/component.ts


const List = styled_base_default()("ul", {
  target: "e10mkx0i0"
})("margin:0;padding:0;list-style:none;", core["a" /* colors */].styles.extendByVariant('backgroundColor'), true ? "" : undefined);
const OrderedList = styled_base_default()("ol", {
  target: "e10mkx0i1"
})("margin:0;padding:0;", core["e" /* typography */].styles.extendByVariant, true ? "" : undefined);
OrderedList.defaultProps = {
  typography: core["e" /* typography */].variants.Content.Regular16
};
// CONCATENATED MODULE: ./src/components/organisms/List/index.ts



// CONCATENATED MODULE: ./src/components/organisms/Footer/component.tsx

var Footer_component_jsx = external_react_default.a.createElement;

function Footer_component_extends() { Footer_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Footer_component_extends.apply(this, arguments); }

function Footer_component_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function Footer_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Footer_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Footer_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Footer_component_ref2 = true ? {
  name: "542wex",
  styles: "word-break:break-word;"
} : undefined;

var Footer_component_ref3 = true ? {
  name: "1sg7bn7",
  styles: "max-width:150px;"
} : undefined;

var Footer_component_ref4 = true ? {
  name: "1sg7bn7",
  styles: "max-width:150px;"
} : undefined;

var Footer_component_ref5 = true ? {
  name: "1id8hns",
  styles: "max-width:300px;"
} : undefined;

const Footer = (_ref) => {
  var _footerSections$, _footerSections$$sect;

  let {
    className,
    footerSections
  } = _ref,
      rest = Footer_component_objectWithoutProperties(_ref, ["className", "footerSections"]);

  const transformUri = Object(external_react_["useCallback"])(uri => uri ? uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}` : '', []);
  const getSection = Object(external_react_["useCallback"])(section => {
    var _section$links;

    return Object(core_["jsx"])("div", {
      className: 'd-flex flex-column col-md-4 col-6 p-3',
      css: Footer_component_ref2
    }, Object(core_["jsx"])(Typography, {
      as: "p",
      className: "mb-lg-3 mb-2",
      css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.elementBold16, core["c" /* media */].queryStyled([core["e" /* typography */].styles.elementBold16, core["e" /* typography */].styles.elementBold16, core["e" /* typography */].styles.elementSemiBold20]), true ? "" : undefined),
      color: core["a" /* colors */].variants.Text.Secondary
    }, section === null || section === void 0 ? void 0 : section.title), section === null || section === void 0 ? void 0 : (_section$links = section.links) === null || _section$links === void 0 ? void 0 : _section$links.map((link, i) => {
      var _link$image, _link$image2, _link$image3, _link$image4, _link$image5;

      return Object(core_["jsx"])("div", {
        key: i,
        className: `d-flex align-items-center ${section !== null && section !== void 0 && section.links && i !== section.links.length - 1 ? 'mb-lg-3 mb-2' : ''}`
      }, (link === null || link === void 0 ? void 0 : link.title) && (link === null || link === void 0 ? void 0 : link.link) && !(link !== null && link !== void 0 && (_link$image = link.image) !== null && _link$image !== void 0 && _link$image.url) && Object(core_["jsx"])(Anchor, {
        href: link.link,
        target: "_blank",
        color: core["a" /* colors */].variants.Text.Secondary,
        css: /*#__PURE__*/Object(core_["css"])(core["e" /* typography */].styles.elementRegular12, core["c" /* media */].queryStyled([core["e" /* typography */].styles.elementRegular12, core["e" /* typography */].styles.elementRegular12, core["e" /* typography */].styles.elementRegular16]), true ? "" : undefined)
      }, link.title), (link === null || link === void 0 ? void 0 : (_link$image2 = link.image) === null || _link$image2 === void 0 ? void 0 : _link$image2.url) && (link === null || link === void 0 ? void 0 : (_link$image3 = link.image) === null || _link$image3 === void 0 ? void 0 : _link$image3.name) && !(link !== null && link !== void 0 && link.link) && Object(core_["jsx"])("img", {
        alt: link === null || link === void 0 ? void 0 : link.image.name,
        className: i !== 0 ? 'tw-mt-4' : undefined,
        src: transformUri(link === null || link === void 0 ? void 0 : link.image.url),
        css: Footer_component_ref3
      }), (link === null || link === void 0 ? void 0 : (_link$image4 = link.image) === null || _link$image4 === void 0 ? void 0 : _link$image4.url) && (link === null || link === void 0 ? void 0 : (_link$image5 = link.image) === null || _link$image5 === void 0 ? void 0 : _link$image5.name) && (link === null || link === void 0 ? void 0 : link.link) && Object(core_["jsx"])(Anchor, {
        href: link === null || link === void 0 ? void 0 : link.link,
        target: "_blank"
      }, Object(core_["jsx"])("img", {
        alt: link === null || link === void 0 ? void 0 : link.image.name,
        className: i !== 0 ? 'tw-mt-4' : undefined,
        src: transformUri(link === null || link === void 0 ? void 0 : link.image.url),
        css: Footer_component_ref4
      })));
    }));
  }, [transformUri]);
  return Object(core_["jsx"])("div", Footer_component_extends({
    className: external_classnames_default()(className, 'd-flex flex-column p-lg-3 p-2 mt-auto'),
    css: /*#__PURE__*/Object(core_["css"])({
      backgroundColor: core["a" /* colors */].variants.Brand.DarkPurple
    }, true ? "" : undefined)
  }, rest), Object(core_["jsx"])("div", {
    className: "container-xl mb-3 d-flex flex-lg-row flex-column w-100 align-items-center"
  }, Object(core_["jsx"])("img", {
    alt: "footer",
    src: "/static/images/logoWhite.svg",
    className: "mr-lg-4 mr-0",
    css: Footer_component_ref5
  }), Object(core_["jsx"])("div", {
    className: "d-flex  w-100 flex-lg-row flex-column-reverse "
  }, Object(core_["jsx"])("div", {
    className: "d-flex flex-wrap p-0"
  }, footerSections === null || footerSections === void 0 ? void 0 : (_footerSections$ = footerSections[0]) === null || _footerSections$ === void 0 ? void 0 : (_footerSections$$sect = _footerSections$.sections) === null || _footerSections$$sect === void 0 ? void 0 : _footerSections$$sect.map(data => getSection(data))))), Object(core_["jsx"])(P, {
    className: "align-self-lg-end align-self-center",
    color: core["a" /* colors */].variants.Text.Secondary,
    typography: core["e" /* typography */].variants.Element.SemiBold16
  }, "All rights reserved. 2021"));
};
// CONCATENATED MODULE: ./src/components/organisms/Footer/index.ts

// CONCATENATED MODULE: ./src/components/organisms/index.ts




// CONCATENATED MODULE: ./src/components/index.ts




/***/ }),

/***/ "OX3g":
/***/ (function(module, exports) {

module.exports = require("fp-ts/IO");

/***/ }),

/***/ "P51O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
let Heading;

(function (Heading) {
  Heading["SemiBold34"] = "heading_semi_bold_34";
  Heading["SemiBold28"] = "heading_semi_bold_28";
  Heading["SemiBold22"] = "heading_semi_bold_22";
  Heading["SemiBold17"] = "heading_semi_bold_17";
  Heading["Bold34"] = "heading_bold_34";
  Heading["Bold28"] = "heading_bold_28";
  Heading["Bold22"] = "heading_bold_22";
  Heading["Bold17"] = "heading_bold_17";
  Heading["Medium34"] = "heading_medium_34";
  Heading["Medium28"] = "heading_medium_28";
  Heading["Medium22"] = "heading_medium_22";
  Heading["Medium17"] = "heading_medium_17";
  Heading["Regular34"] = "heading_regular_34";
  Heading["Regular28"] = "heading_regular_28";
  Heading["Regular22"] = "heading_regular_22";
  Heading["Regular17"] = "heading_regular_17";
})(Heading || (Heading = {}));

let Content;

(function (Content) {
  Content["Regular24"] = "content_regular_24";
  Content["Regular20"] = "content_regular_20";
  Content["Regular16"] = "content_regular_16";
})(Content || (Content = {}));

let Element;

(function (Element) {
  Element["Regular20"] = "element_regular_20";
  Element["Regular16"] = "element_regular_16";
  Element["Regular12"] = "element_regular_12";
  Element["SemiBold20"] = "element_semi_bold_20";
  Element["SemiBold16"] = "element_semi_bold_16";
  Element["SemiBold12"] = "element_semi_bold_12";
  Element["Bold20"] = "element_bold_20";
  Element["Bold16"] = "element_bold_16";
  Element["Bold12"] = "element_bold_12";
})(Element || (Element = {}));

/***/ }),

/***/ "PuMY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendByVariant", function() { return extendByVariant; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const extendByVariant = selectors => ({
  color
}) => /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(Array.isArray(selectors) ? selectors.reduce((acc, cur) => _objectSpread(_objectSpread({}, acc), {}, {
  [cur]: color
}), {}) : {
  [selectors.toString()]: color
}, true ? "" : undefined);

/***/ }),

/***/ "RwYs":
/***/ (function(module, exports) {

module.exports = require("rehype-raw");

/***/ }),

/***/ "TBz5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Neutral", function() { return Neutral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
let Text;

(function (Text) {
  Text["Primary"] = "#18191F";
  Text["Secondary"] = "#FFFFFF";
})(Text || (Text = {}));

let Neutral;

(function (Neutral) {
  Neutral["Grey"] = "#969BAB";
  Neutral["LightGrey"] = "#D9DBE1";
  Neutral["White"] = "#FFFFFF";
  Neutral["Black"] = "#000000";
  Neutral["WhiteWithOpacity20"] = "rgba(255,255,255,0.2)";
})(Neutral || (Neutral = {}));

let Background;

(function (Background) {
  Background["Primary"] = "#FFFFFF";
  Background["Secondary"] = "#18191F";
})(Background || (Background = {}));

let Brand;

(function (Brand) {
  Brand["Purple"] = "#8C30F5";
  Brand["DarkPurple"] = "#6019B7";
  Brand["LightPurple"] = "#D6B1FF";
  Brand["ExtraLightPurple"] = "#F1E4FF";
  Brand["MoreExtraLightPurple"] = "#faf5ff";
})(Brand || (Brand = {}));

let Warning;

(function (Warning) {
  Warning["Orange1"] = "#F4901E";
  Warning["Orange2"] = "#FFB965";
  Warning["Orange3"] = "#FFE3C1";
})(Warning || (Warning = {}));

let Success;

(function (Success) {
  Success["Green1"] = "#00AA79";
  Success["Green2"] = "#00C48C";
  Success["Green3"] = "#7FF9D6";
})(Success || (Success = {}));

let Error;

(function (Error) {
  Error["Red1"] = "#ED2F3A";
  Error["Red2"] = "#FF646D";
  Error["Red3"] = "#FF9CA2";
  Error["Red4"] = "#F03333";
})(Error || (Error = {}));

/***/ }),

/***/ "UzkQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ colors; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ typography; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ services; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ media_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ icons; });

// NAMESPACE OBJECT: ./src/core/media/index.ts
var media_namespaceObject = {};
__webpack_require__.r(media_namespaceObject);
__webpack_require__.d(media_namespaceObject, "Breakpoints", function() { return Breakpoints; });
__webpack_require__.d(media_namespaceObject, "query", function() { return query; });
__webpack_require__.d(media_namespaceObject, "queryStyled", function() { return queryStyled; });
__webpack_require__.d(media_namespaceObject, "useMobileDetector", function() { return useMobileDetector; });

// EXTERNAL MODULE: ./src/core/colors/index.ts
var colors = __webpack_require__("NYUU");

// EXTERNAL MODULE: ./src/core/typography/index.ts
var typography = __webpack_require__("r5Jg");

// EXTERNAL MODULE: ./src/core/services/index.ts
var services = __webpack_require__("GYqh");

// CONCATENATED MODULE: ./src/core/media/types/Breakpoints.ts
let Breakpoints;

(function (Breakpoints) {
  Breakpoints[Breakpoints["Small"] = 576] = "Small";
  Breakpoints[Breakpoints["Medium"] = 768] = "Medium";
  Breakpoints[Breakpoints["Large"] = 992] = "Large";
  Breakpoints[Breakpoints["ExtraLarge"] = 1200] = "ExtraLarge";
})(Breakpoints || (Breakpoints = {}));
// EXTERNAL MODULE: external "facepaint"
var external_facepaint_ = __webpack_require__("7tlt");
var external_facepaint_default = /*#__PURE__*/__webpack_require__.n(external_facepaint_);

// CONCATENATED MODULE: ./src/core/media/services/toMedia.ts
const toMedia = (pixels, point = 'min-width') => `@media(${point}: ${Number(pixels)}px)`;
// CONCATENATED MODULE: ./src/core/media/query.ts



const query = external_facepaint_default()(Object.values(Breakpoints).filter(Number).map(n => toMedia(n)));
// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// CONCATENATED MODULE: ./src/core/media/queryStyled.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const breakpointTuple = [Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.ExtraLarge];
/**
 * @param breakpoints - if array of styles, it will replicate `media.query` functionality but with `literal: true`.
 * @example
 *   styled.div`
 *     ${media.queryStyled([
 *       typography.styles.contentRegular15,  // for higher than small
 *       typography.styles.contentSemiBold17, // for higher than medium
 *     ])},
 *   `
 *
 *   styled.div`
 *     ${media.queryStyled({
 *       [media.Breakpoints.Large]: css({ styles for breakpoint higher than large })
 *     })},
 *   `
 */

const queryStyled = breakpoints => Array.isArray(breakpoints) ? /*#__PURE__*/Object(core_["css"])(breakpoints.reduce((acc, cur, i) => _objectSpread(_objectSpread({}, acc), {}, {
  [toMedia(breakpointTuple[i])]: cur
}), {}), true ? "" : undefined) : /*#__PURE__*/Object(core_["css"])(Object.entries(breakpoints).reduce((acc, [key, value]) => _objectSpread(_objectSpread({}, acc), {}, {
  [toMedia(key)]: value
}), {}), true ? "" : undefined);
// EXTERNAL MODULE: external "mobile-detect"
var external_mobile_detect_ = __webpack_require__("A1cq");
var external_mobile_detect_default = /*#__PURE__*/__webpack_require__.n(external_mobile_detect_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/core/media/deviceDetect.ts


const useMobileDetector = md => Object(external_react_["useMemo"])(() => md || new external_mobile_detect_default.a(false ? undefined : ''), [md]);
// CONCATENATED MODULE: ./src/core/media/index.ts




// EXTERNAL MODULE: ./src/core/icons/index.ts
var icons = __webpack_require__("GWJI");

// CONCATENATED MODULE: ./src/core/index.ts











/***/ }),

/***/ "WVUK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createIcon; });
const createIcon = (width, height, path) => ({
  width,
  height,
  path
});

/***/ }),

/***/ "Y8Bx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSemiBold34", function() { return headingSemiBold34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingBold34", function() { return headingBold34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingMedium34", function() { return headingMedium34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingRegular34", function() { return headingRegular34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSemiBold28", function() { return headingSemiBold28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingBold28", function() { return headingBold28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingMedium28", function() { return headingMedium28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingRegular28", function() { return headingRegular28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSemiBold22", function() { return headingSemiBold22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingBold22", function() { return headingBold22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingMedium22", function() { return headingMedium22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingRegular22", function() { return headingRegular22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSemiBold17", function() { return headingSemiBold17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingBold17", function() { return headingBold17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingMedium17", function() { return headingMedium17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingRegular17", function() { return headingRegular17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentRegular24", function() { return contentRegular24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentRegular20", function() { return contentRegular20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentRegular16", function() { return contentRegular16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementRegular20", function() { return elementRegular20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementSemiBold20", function() { return elementSemiBold20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementBold20", function() { return elementBold20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementRegular16", function() { return elementRegular16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementSemiBold16", function() { return elementSemiBold16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementBold16", function() { return elementBold16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementRegular12", function() { return elementRegular12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementSemiBold12", function() { return elementSemiBold12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementBold12", function() { return elementBold12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendByVariant", function() { return extendByVariant; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nUy5");
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("P51O");



const headingSemiBold34 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:34px;line-height:41px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingBold34 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:34px;line-height:41px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingMedium34 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:500;font-size:34px;line-height:41px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingRegular34 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:34px;line-height:41px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingSemiBold28 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:28px;line-height:34px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingBold28 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:28px;line-height:34px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingMedium28 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:500;font-size:28px;line-height:34px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingRegular28 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:28px;line-height:34px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingSemiBold22 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:22px;line-height:28px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingBold22 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:22px;line-height:28px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingMedium22 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:500;font-size:22px;line-height:28px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingRegular22 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:22px;line-height:28px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingSemiBold17 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:17px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingBold17 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:17px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingMedium17 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:500;font-size:17px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const headingRegular17 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:17px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["poppins"], true ? "" : undefined);
const contentRegular24 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:24px;line-height:35px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const contentRegular20 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:20px;line-height:24px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const contentRegular16 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:16px;line-height:20px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementRegular20 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:20px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementSemiBold20 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:20px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementBold20 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:20px;line-height:22px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementRegular16 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:16px;line-height:20px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementSemiBold16 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:16px;line-height:20px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementBold16 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:16px;line-height:20px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementRegular12 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:400;font-size:12px;line-height:17px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementSemiBold12 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:600;font-size:12px;line-height:17px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);
const elementBold12 = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-weight:700;font-size:12px;line-height:17px;", _fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"], true ? "" : undefined);

const extendByVariantBase = variantStyles => props => typeof props.typography !== 'undefined' && variantStyles[props.typography];

const extendByVariant = extendByVariantBase({
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Bold34]: headingBold34,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].SemiBold34]: headingSemiBold34,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Medium34]: headingMedium34,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Regular34]: headingRegular34,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Bold28]: headingBold28,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].SemiBold28]: headingSemiBold28,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Medium28]: headingMedium28,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Regular28]: headingRegular28,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Bold22]: headingBold22,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].SemiBold22]: headingSemiBold22,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Medium22]: headingMedium22,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Regular22]: headingRegular22,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Bold17]: headingBold17,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].SemiBold17]: headingSemiBold17,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Medium17]: headingMedium17,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Heading"].Regular17]: headingRegular17,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Content"].Regular24]: contentRegular24,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Content"].Regular20]: contentRegular20,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Content"].Regular16]: contentRegular16,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].Regular20]: elementRegular20,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].SemiBold20]: elementSemiBold20,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].Bold20]: elementBold20,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].Regular16]: elementRegular16,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].SemiBold16]: elementSemiBold16,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].Bold16]: elementBold16,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].Regular12]: elementRegular12,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].SemiBold12]: elementSemiBold12,
  [_variants__WEBPACK_IMPORTED_MODULE_2__["Element"].Bold12]: elementBold12
});

/***/ }),

/***/ "Ylpd":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZPpP":
/***/ (function(module, exports) {

module.exports = require("fp-ts/Apply");

/***/ }),

/***/ "ZiEH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastTypes; });
let ToastTypes;

(function (ToastTypes) {
  ToastTypes[ToastTypes["Success"] = 0] = "Success";
  ToastTypes[ToastTypes["Warning"] = 1] = "Warning";
  ToastTypes[ToastTypes["Error"] = 2] = "Error";
  ToastTypes[ToastTypes["Info"] = 3] = "Info";
})(ToastTypes || (ToastTypes = {}));

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "b48A":
/***/ (function(module, exports) {



/***/ }),

/***/ "bwDB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardArrowRight", function() { return keyboardArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardArrowLeft", function() { return keyboardArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowBack", function() { return arrowBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardArrowDown", function() { return keyboardArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardArrowUp", function() { return keyboardArrowUp; });
/* harmony import */ var _services_builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WVUK");

const keyboardArrowRight = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z');
const keyboardArrowLeft = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z');
const arrowBack = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z');
const keyboardArrowDown = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z');
const keyboardArrowUp = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(24, 24, 'M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z');

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eXIv":
/***/ (function(module, exports) {



/***/ }),

/***/ "fApV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toast; });
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9HB/");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const toast = (toast, type, text) => {
  const {
    hide
  } = cogo_toast__WEBPACK_IMPORTED_MODULE_0___default.a.info(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(toast, {
    text,
    type,
    style: {
      margin: '-12px -20px -12px -35px'
    }
  })), {
    hideAfter: 5,
    onClick: () => {
      if (hide) hide();
    },
    position: 'top-right',
    renderIcon: () => {
      return undefined;
    },
    bar: {
      size: '0'
    }
  });
};

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gZij":
/***/ (function(module, exports) {



/***/ }),

/***/ "hHRs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseDate; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale_kk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o+PE");
/* harmony import */ var date_fns_locale_kk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_kk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3taC");
/* harmony import */ var date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_2__);




const localizedMonthFrom = (date, lang) => {
  const localToFNSLangMap = {
    ru: date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_2___default.a,
    kk: date_fns_locale_kk__WEBPACK_IMPORTED_MODULE_1___default.a
  };
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, 'MMMM', {
    locale: localToFNSLangMap[lang]
  } // Pass the locale as an option
  );
};

const parseDate = (isoDate, lang) => {
  const dateObj = new Date(isoDate);
  return `${dateObj.getDate()} ${localizedMonthFrom(dateObj, lang)}, ${dateObj.getFullYear()}`;
};

/***/ }),

/***/ "hmUJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "hsUr":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "m2nj":
/***/ (function(module, exports) {



/***/ }),

/***/ "nUy5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poppins", function() { return poppins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSans", function() { return openSans; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const poppins = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])({
  fontFamily: `Poppins, sans-serif`
}, true ? "" : undefined);
const openSans = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])({
  fontFamily: `Open Sans, sans-serif`
}, true ? "" : undefined);

/***/ }),

/***/ "nhx8":
/***/ (function(module, exports) {



/***/ }),

/***/ "o+PE":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/kk");

/***/ }),

/***/ "p5Ix":
/***/ (function(module, exports) {

module.exports = require("emotion-rgba");

/***/ }),

/***/ "pccx":
/***/ (function(module, exports) {

module.exports = require("@popperjs/core");

/***/ }),

/***/ "qcGN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuHamburger", function() { return menuHamburger; });
/* harmony import */ var _services_builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WVUK");

const menuHamburger = Object(_services_builders__WEBPACK_IMPORTED_MODULE_0__[/* createIcon */ "a"])(18, 14, 'M17.5 2H0.5C0.223858 2 0 1.77614 0 1.5V0.5C0 0.223858 0.223858 0 0.5 0H17.5C17.7761 0 18 0.223858 18 0.5V1.5C18 1.77614 17.7761 2 17.5 2ZM12 7.5V6.5C12 6.22386 11.7761 6 11.5 6H0.5C0.223858 6 0 6.22386 0 6.5V7.5C0 7.77614 0.223858 8 0.5 8H11.5C11.7761 8 12 7.77614 12 7.5ZM6 12.5V13.5C6 13.7761 5.77614 14 5.5 14H0.5C0.223858 14 0 13.7761 0 13.5V12.5C0 12.2239 0.223858 12 0.5 12H5.5C5.77614 12 6 12.2239 6 12.5Z');

/***/ }),

/***/ "r5Jg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nUy5");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return _fonts__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y8Bx");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return _styles__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("P51O");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return _variants__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hmUJ");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_props__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _props__WEBPACK_IMPORTED_MODULE_3__) if(["default","styles","variants","fonts"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _props__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));






/***/ }),

/***/ "u9eC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformMarkdownImages; });
const regexp = /!\[([\w\s\d.]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/g;
const transformMarkdownImages = c => c.replace(regexp, (_, g1, g2) => `<img src="${g2}" alt="${g1}" />`);

/***/ }),

/***/ "uscD":
/***/ (function(module, exports) {

module.exports = require("fp-ts/function");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "w0X2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ArticlePage; });

// EXTERNAL MODULE: ./src/components/index.ts + 121 modules
var components = __webpack_require__("Nhdc");

// EXTERNAL MODULE: ./src/core/index.ts + 6 modules
var core = __webpack_require__("UzkQ");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./src/components/pages/ArticlePage/graphql.ts

const queryArticle = client_["gql"]`
  query Article($id: ID!, $locale: String) {
    article(id: $id) {
      id
      title
      content
      previewImage {
        url
        name
      }
      locale
      localizations {
        content
      }
    }
    artilcesPageBackButton(locale: $locale) {
      backButton {
        link
        title
      }
    }
    headerButtons(locale: $locale) {
      buttons {
        title
        link
      }
    }
    footerSections(locale: $locale) {
      sections {
        title
        links {
          title
          link
          image {
            url
            name
          }
        }
      }
    }
    headerLinks(locale: $locale) {
      links {
        title
        link
      }
    }
  }
`;
// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// CONCATENATED MODULE: ./src/components/pages/ArticlePage/component.tsx
var __jsx = external_react_default.a.createElement;







const ArticlePage = props => {
  var _data$data, _data$data$article, _data$data2, _data$data2$article, _data$data3, _data$data3$article, _data$data3$article$l, _data$data3$article$l2, _props$data, _props$data$data, _props$data$data$arti, _props$data2, _props$data2$data, _props$data2$data$art, _props$data3, _props$data3$data, _props$data3$data$art, _props$data4, _props$data4$data, _props$data4$data$art, _props$data5, _props$data5$data, _props$data5$data$art, _props$data6, _props$data6$data, _props$data7, _props$data7$data, _props$data8, _props$data8$data, _props$data9, _props$data9$data, _props$data9$data$art, _props$data9$data$art2, _data$data4, _data$data4$artilcesP, _data$data4$artilcesP2;

  const {
    data,
    lang
  } = props;
  const router = Object(router_["useRouter"])();
  const content = (data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$article = _data$data.article) === null || _data$data$article === void 0 ? void 0 : _data$data$article.locale) === lang ? data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$article = _data$data2.article) === null || _data$data2$article === void 0 ? void 0 : _data$data2$article.content : data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : (_data$data3$article = _data$data3.article) === null || _data$data3$article === void 0 ? void 0 : (_data$data3$article$l = _data$data3$article.localizations) === null || _data$data3$article$l === void 0 ? void 0 : (_data$data3$article$l2 = _data$data3$article$l[0]) === null || _data$data3$article$l2 === void 0 ? void 0 : _data$data3$article$l2.content;
  Object(external_react_["useEffect"])(() => {
    if ((!content || content.length === 0) && window) {
      const newURL = window.location.href.replace(/article\/.+/, 'articles');
      window.location.assign(newURL);
    }
  }, [content, lang, router]);
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(head_default.a, null, Object(core_["jsx"])("title", null, (_props$data = props.data) === null || _props$data === void 0 ? void 0 : (_props$data$data = _props$data.data) === null || _props$data$data === void 0 ? void 0 : (_props$data$data$arti = _props$data$data.article) === null || _props$data$data$arti === void 0 ? void 0 : _props$data$data$arti.title), Object(core_["jsx"])("meta", {
    name: "keywords",
    content: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : (_props$data2$data = _props$data2.data) === null || _props$data2$data === void 0 ? void 0 : (_props$data2$data$art = _props$data2$data.article) === null || _props$data2$data$art === void 0 ? void 0 : _props$data2$data$art.title
  }), Object(core_["jsx"])("meta", {
    property: "description",
    content: (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : (_props$data3$data = _props$data3.data) === null || _props$data3$data === void 0 ? void 0 : (_props$data3$data$art = _props$data3$data.article) === null || _props$data3$data$art === void 0 ? void 0 : _props$data3$data$art.content.substring(0, 200)
  }), Object(core_["jsx"])("meta", {
    property: "og:title",
    content: (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : (_props$data4$data = _props$data4.data) === null || _props$data4$data === void 0 ? void 0 : (_props$data4$data$art = _props$data4$data.article) === null || _props$data4$data$art === void 0 ? void 0 : _props$data4$data$art.title
  }), Object(core_["jsx"])("meta", {
    property: "og:description",
    content: (_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : (_props$data5$data = _props$data5.data) === null || _props$data5$data === void 0 ? void 0 : (_props$data5$data$art = _props$data5$data.article) === null || _props$data5$data$art === void 0 ? void 0 : _props$data5$data$art.content.substring(0, 200)
  }), Object(core_["jsx"])("meta", {
    property: "og:image",
    content: "https://medsupport.kz/static/images/logoBig.png"
  }), Object(core_["jsx"])("meta", {
    property: "og:locale",
    content: lang === 'ru_RU' ? 'ru_RU' : 'kz_KZ'
  }), Object(core_["jsx"])("meta", {
    property: "og:locale:alternate",
    content: lang === 'ru_RU' ? 'kz_KZ' : 'ru_RU'
  }), Object(core_["jsx"])("meta", {
    property: "og:site_name",
    content: "medsupport"
  }), Object(core_["jsx"])("meta", {
    property: "og:site_name",
    content: "medsupport"
  }), Object(core_["jsx"])("meta", {
    property: "og:type",
    content: "article"
  }), Object(core_["jsx"])("meta", {
    property: "og:article:section",
    content: "medicine"
  })), Object(core_["jsx"])(components["D" /* Layout */], {
    headerButtons: (_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : (_props$data6$data = _props$data6.data) === null || _props$data6$data === void 0 ? void 0 : _props$data6$data.headerButtons,
    footerSections: (_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : (_props$data7$data = _props$data7.data) === null || _props$data7$data === void 0 ? void 0 : _props$data7$data.footerSections,
    headerLinks: (_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : (_props$data8$data = _props$data8.data) === null || _props$data8$data === void 0 ? void 0 : _props$data8$data.headerLinks
  }, Object(core_["jsx"])("div", {
    className: "container my-3"
  }, Object(core_["jsx"])(components["f" /* ButtonLink */], {
    href: (_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : (_props$data9$data = _props$data9.data) === null || _props$data9$data === void 0 ? void 0 : (_props$data9$data$art = _props$data9$data.artilcesPageBackButton) === null || _props$data9$data$art === void 0 ? void 0 : (_props$data9$data$art2 = _props$data9$data$art.backButton) === null || _props$data9$data$art2 === void 0 ? void 0 : _props$data9$data$art2.link,
    variant: components["h" /* ButtonVariants */].Flat,
    size: components["g" /* ButtonSizes */].Small,
    className: "pl-0"
  }, Object(core_["jsx"])(components["w" /* Icon */], {
    icon: core["b" /* icons */].arrows.arrowBack,
    color: core["a" /* colors */].variants.Neutral.Black,
    className: "mr-1"
  }), Object(core_["jsx"])(components["K" /* P */], {
    color: core["a" /* colors */].variants.Neutral.Grey,
    typography: core["e" /* typography */].variants.Element.Regular12
  }, data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : (_data$data4$artilcesP = _data$data4.artilcesPageBackButton) === null || _data$data4$artilcesP === void 0 ? void 0 : (_data$data4$artilcesP2 = _data$data4$artilcesP.backButton) === null || _data$data4$artilcesP2 === void 0 ? void 0 : _data$data4$artilcesP2.title)), content && Object(core_["jsx"])(components["H" /* Markdown */], null, content))));
};

ArticlePage.getInitialProps = async ctx => {
  var _ctx$query, _ctx$req, _ctx$req$headers, _ctx$req$headers$cook, _ctx$req$headers$cook2;

  const id = (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.id.toString();
  const lang = ((_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : (_ctx$req$headers = _ctx$req.headers) === null || _ctx$req$headers === void 0 ? void 0 : (_ctx$req$headers$cook = _ctx$req$headers.cookie) === null || _ctx$req$headers$cook === void 0 ? void 0 : (_ctx$req$headers$cook2 = _ctx$req$headers$cook.match(/(kk-Cyrl-KZ|ru-RU)/)) === null || _ctx$req$headers$cook2 === void 0 ? void 0 : _ctx$req$headers$cook2[0]) || 'ru-RU';
  const data = await ctx.apolloClient.query({
    query: queryArticle,
    variables: {
      id,
      locale: lang
    }
  });
  return {
    data,
    lang
  };
};
// CONCATENATED MODULE: ./src/components/pages/ArticlePage/index.ts

// CONCATENATED MODULE: ./src/pages/article.ts


/***/ }),

/***/ "wKW+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return event; });
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = url => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag('config', process.env.GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });