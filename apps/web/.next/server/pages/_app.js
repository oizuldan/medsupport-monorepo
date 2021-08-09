module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+u7p":
/***/ (function(module, exports) {



/***/ }),

/***/ "/0TV":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "16WD":
/***/ (function(module, exports) {



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

/***/ "HaU7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "Khd+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HaU7")


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

/***/ "Y3ZS":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

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

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_4_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/0TV");
/* harmony import */ var bootstrap_4_grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_4_grid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("16WD");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hk0p");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UzkQ");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ePNP");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Khd+");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vHBd");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeComplete', url => {
  // To hit only in production and only on client side (in browser)
  if (false) {}
}); // eslint-disable-next-line functional/no-class

class App extends next_app__WEBPACK_IMPORTED_MODULE_6___default.a {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  componentDidMount() {
    // To hit only in production and only on client side (in browser)
    if (false) {}
  }

  render() {
    // eslint-disable-next-line functional/no-this-expression
    const {
      Component,
      pageProps,
      apollo
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: apollo
    },  true && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_10__["YMInitializer"], {
      accounts: [parseInt(process.env.YM_COUNTER_ID)],
      options: {
        webvisor: true,
        defer: true
      },
      version: "2"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("title", null, "Medsupportkz"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    })),  true && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("script", {
      dangerouslySetInnerHTML: {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Component, pageProps));
  }

}

App.getInitialProps = async appContext => {
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_6___default.a.getInitialProps(appContext);
  return _objectSpread({}, appProps);
};

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_5___default()(({
  initialState
}) => {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    uri: process.env.CMS_GRAPHQL_API_URL,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]().restore(initialState || {})
  });
})(App));

/***/ }),

/***/ "hk0p":
/***/ (function(module, exports) {



/***/ }),

/***/ "hmUJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "vHBd":
/***/ (function(module, exports) {

module.exports = require("react-yandex-metrika");

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