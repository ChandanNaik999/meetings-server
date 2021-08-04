/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/constants.js":
/*!********************************!*\
  !*** ./public/js/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": () => (/* binding */ API_BASE_URL),
/* harmony export */   "TOKEN": () => (/* binding */ TOKEN),
/* harmony export */   "EMAIL": () => (/* binding */ EMAIL),
/* harmony export */   "NAME": () => (/* binding */ NAME),
/* harmony export */   "ID": () => (/* binding */ ID),
/* harmony export */   "SUCCESS": () => (/* binding */ SUCCESS),
/* harmony export */   "ERROR": () => (/* binding */ ERROR)
/* harmony export */ });
// const API_BASE_URL = 'http://mymeetingsapp.herokuapp.com/api';
var API_BASE_URL = "http://localhost:3000/api";
var TOKEN = 'token';
var EMAIL = 'email';
var NAME = 'name';
var ID = 'id';
var SUCCESS = 'success';
var ERROR = 'error';


/***/ }),

/***/ "./public/js/customs/app.js":
/*!**********************************!*\
  !*** ./public/js/customs/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");


function addToast(message, element, state) {
  var duration = Math.max(Math.ceil(message.length * 1000 / 25), 1100);
  var wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'mytoast-wrapper');
  var mytoast = document.createElement('div');

  if (state === _constants__WEBPACK_IMPORTED_MODULE_0__.SUCCESS) {
    mytoast.setAttribute('class', 'mytoast mytoast-success');
  } else {
    mytoast.setAttribute('class', 'mytoast mytoast-error');
  }

  wrapper.appendChild(mytoast);
  var content = document.createElement('div');
  content.setAttribute('class', 'content');
  mytoast.appendChild(content);
  var p = document.createElement('p');
  p.style.marginBottom = 0;
  p.innerHTML = message;
  content.appendChild(p);
  element.appendChild(wrapper);
  wrapper.classList.remove('hide');
  wrapper.classList.add('show');
  setTimeout(function () {
    wrapper.classList.add('hide');
    setTimeout(function () {
      wrapper.remove();
    }, 1000);
  }, duration);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToast);

/***/ }),

/***/ "./public/js/login.js":
/*!****************************!*\
  !*** ./public/js/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/login.css */ "./public/css/login.css");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth */ "./public/js/services/auth.js");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");









function showBodyOnLoad() {
  document.body.classList.remove('hide');
}

showBodyOnLoad();

function init() {
  var loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var emailEl = document.querySelector('#emailInput');
    var passwordEl = document.querySelector('#passwordInput');
    var email = emailEl.value;
    var password = passwordEl.value;
    (0,_services_auth__WEBPACK_IMPORTED_MODULE_6__.login)({
      email: email,
      password: password
    }).then(function (response) {
      if (response.message === _constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__.TOKEN, response.data.token);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__.EMAIL, response.data.email);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__.NAME, response.data.name);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__.ID, response.data['_id']);
        window.location = '/';
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_7__.default)("Login Error: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR);
        setTimeout(function () {
          window.location = '/login';
        }, 1000);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_7__.default)("Login Error: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR);
      } catch (_unused) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_7__.default)("Login Error: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR);
      }
    });
  });
}

init();

/***/ }),

/***/ "./public/js/services/auth.js":
/*!************************************!*\
  !*** ./public/js/services/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "login": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * @param {object} credentials An object with name, email and password
 * @returns A promise that resolves with the register response data, or rejects if requests
 * to register fails
 * * @example credentials
 * {
 *  "name": "Prashanth Puranik",
 *  "email": "purani2@example.com",
 *  "password": "Purani@2"
 * }
 */

function register(_x) {
  return _register.apply(this, arguments);
}
/**
 * @param {object} credentials An object with email and password
 * @returns A promise that resolves with the login response data, or rejects if requests to
 * login fails
 * @example credentials
 * {
 *  "email": "purani20@example.com",
 *  "password": "Purani@2"
 * }
 */


function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credentials) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/auth/register"), credentials, {
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _register.apply(this, arguments);
}

function login(_x2) {
  return _login.apply(this, arguments);
}
/**
 * Removes the auth token and email from the local storage.
 */


function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(credentials) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/auth/login"), credentials, {
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _login.apply(this, arguments);
}

function logout() {
  localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.TOKEN);
  localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.NAME);
  localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__.EMAIL);
}
/**
 * Returns the authorization token for logged in user, or null if no one is logged in
 * @returns The authorization token for logged in user, or null if no one is logged in
 */


function getToken() {
  return localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.TOKEN);
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/login.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/login.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  .form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n\r\n  .form-signin input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }", "",{"version":3,"sources":["webpack://./public/css/login.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;EAC3B;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,YAAY;EACd;;EAEA;IACE,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;EAC9B;;EAEA;IACE,mBAAmB;IACnB,yBAAyB;IACzB,0BAA0B;EAC5B","sourcesContent":["body {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  .form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n\r\n  .form-signin input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/login.css":
/*!******************************!*\
  !*** ./public/css/login.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/login.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"login": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmeetings"] = self["webpackChunkmeetings"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0"], () => (__webpack_require__("./public/js/login.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY3VzdG9tcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvbG9naW4uY3NzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9sb2dpbi5jc3M/NGIwYyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQVBJX0JBU0VfVVJMIiwicHJvY2VzcyIsIlRPS0VOIiwiRU1BSUwiLCJOQU1FIiwiSUQiLCJTVUNDRVNTIiwiRVJST1IiLCJhZGRUb2FzdCIsIm1lc3NhZ2UiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm15dG9hc3QiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJwIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic2hvd0JvZHlPbkxvYWQiLCJib2R5IiwiaW5pdCIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbWFpbEVsIiwicXVlcnlTZWxlY3RvciIsInBhc3N3b3JkRWwiLCJlbWFpbCIsInZhbHVlIiwicGFzc3dvcmQiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwidG9rZW4iLCJuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJlcnJvciIsImRlc2NyaXB0aW9uIiwicmVnaXN0ZXIiLCJjcmVkZW50aWFscyIsImF4aW9zIiwiaGVhZGVycyIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJnZXRUb2tlbiIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFRQSxZQUFSLEdBQXlCQywyQkFBekI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxJQUFNQyxFQUFFLEdBQUcsSUFBWDtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUEsU0FBU0MsUUFBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLE9BQTVCLEVBQXFDQyxLQUFyQyxFQUE2QztBQUN6QyxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFVRCxJQUFJLENBQUNFLElBQUwsQ0FBYU4sT0FBTyxDQUFDTyxNQUFSLEdBQWlCLElBQW5CLEdBQTRCLEVBQXZDLENBQVYsRUFBdUQsSUFBdkQsQ0FBakI7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixLQUF4QixDQUFoQjtBQUNBRixTQUFPLENBQUNHLFlBQVIsQ0FBc0IsT0FBdEIsRUFBK0IsaUJBQS9CO0FBRUEsTUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBaEI7O0FBQ0EsTUFBS1IsS0FBSyxLQUFLTCwrQ0FBZixFQUF5QjtBQUNyQmUsV0FBTyxDQUFDRCxZQUFSLENBQXNCLE9BQXRCLEVBQStCLHlCQUEvQjtBQUNILEdBRkQsTUFFTztBQUNIQyxXQUFPLENBQUNELFlBQVIsQ0FBc0IsT0FBdEIsRUFBK0IsdUJBQS9CO0FBQ0g7O0FBQ0RILFNBQU8sQ0FBQ0ssV0FBUixDQUFxQkQsT0FBckI7QUFFQSxNQUFNRSxPQUFPLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixLQUF4QixDQUFoQjtBQUNBSSxTQUFPLENBQUNILFlBQVIsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBL0I7QUFDQUMsU0FBTyxDQUFDQyxXQUFSLENBQXFCQyxPQUFyQjtBQUVBLE1BQU1DLENBQUMsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXdCLEdBQXhCLENBQVY7QUFDQUssR0FBQyxDQUFDQyxLQUFGLENBQVFDLFlBQVIsR0FBdUIsQ0FBdkI7QUFDQUYsR0FBQyxDQUFDRyxTQUFGLEdBQWNsQixPQUFkO0FBQ0FjLFNBQU8sQ0FBQ0QsV0FBUixDQUFxQkUsQ0FBckI7QUFFQWQsU0FBTyxDQUFDWSxXQUFSLENBQXFCTCxPQUFyQjtBQUVBQSxTQUFPLENBQUNXLFNBQVIsQ0FBa0JDLE1BQWxCLENBQTBCLE1BQTFCO0FBQ0FaLFNBQU8sQ0FBQ1csU0FBUixDQUFrQkUsR0FBbEIsQ0FBdUIsTUFBdkI7QUFDQUMsWUFBVSxDQUFFLFlBQU87QUFDZmQsV0FBTyxDQUFDVyxTQUFSLENBQWtCRSxHQUFsQixDQUF1QixNQUF2QjtBQUNBQyxjQUFVLENBQUUsWUFBTTtBQUNkZCxhQUFPLENBQUNZLE1BQVI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FMUyxFQUtQakIsUUFMTyxDQUFWO0FBTUg7O0FBRUQsaUVBQWVKLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsU0FBU3dCLGNBQVQsR0FBMEI7QUFDdEJkLFVBQVEsQ0FBQ2UsSUFBVCxDQUFjTCxTQUFkLENBQXdCQyxNQUF4QixDQUFnQyxNQUFoQztBQUNIOztBQUNERyxjQUFjOztBQUVkLFNBQVNFLElBQVQsR0FBZ0I7QUFDWixNQUFNQyxTQUFTLEdBQUdqQixRQUFRLENBQUNrQixjQUFULENBQXlCLFlBQXpCLENBQWxCO0FBRUFELFdBQVMsQ0FBQ0UsZ0JBQVYsQ0FBNEIsUUFBNUIsRUFBc0MsVUFBRUMsS0FBRixFQUFhO0FBQy9DQSxTQUFLLENBQUNDLGNBQU47QUFFQSxRQUFNQyxPQUFPLEdBQUd0QixRQUFRLENBQUN1QixhQUFULENBQXdCLGFBQXhCLENBQWhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHeEIsUUFBUSxDQUFDdUIsYUFBVCxDQUF3QixnQkFBeEIsQ0FBbkI7QUFDQSxRQUFNRSxLQUFLLEdBQUdILE9BQU8sQ0FBQ0ksS0FBdEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdILFVBQVUsQ0FBQ0UsS0FBNUI7QUFFQUUseURBQUssQ0FBRTtBQUFFSCxXQUFLLEVBQUxBLEtBQUY7QUFBU0UsY0FBUSxFQUFSQTtBQUFULEtBQUYsQ0FBTCxDQUNLRSxJQURMLENBQ1csVUFBRUMsUUFBRixFQUFnQjtBQUNuQixVQUFLQSxRQUFRLENBQUN2QyxPQUFULEtBQXFCSCwrQ0FBMUIsRUFBb0M7QUFDaEMyQyxvQkFBWSxDQUFDQyxPQUFiLENBQXNCaEQsNkNBQXRCLEVBQTZCOEMsUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQTNDO0FBQ0FILG9CQUFZLENBQUNDLE9BQWIsQ0FBc0IvQyw2Q0FBdEIsRUFBNkI2QyxRQUFRLENBQUNHLElBQVQsQ0FBY1IsS0FBM0M7QUFDQU0sb0JBQVksQ0FBQ0MsT0FBYixDQUFzQjlDLDRDQUF0QixFQUE0QjRDLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRSxJQUExQztBQUNBSixvQkFBWSxDQUFDQyxPQUFiLENBQXNCN0MsMENBQXRCLEVBQTBCMkMsUUFBUSxDQUFDRyxJQUFULENBQWMsS0FBZCxDQUExQjtBQUNBRyxjQUFNLENBQUNDLFFBQVAsR0FBa0IsR0FBbEI7QUFDSCxPQU5ELE1BTU87QUFDSC9DLDZEQUFRLHdCQUFrQndDLFFBQVEsQ0FBQ3ZDLE9BQTNCLEdBQXNDUyxRQUFRLENBQUNlLElBQS9DLEVBQXFEMUIsNkNBQXJELENBQVI7QUFDQXdCLGtCQUFVLENBQUUsWUFBTTtBQUNkdUIsZ0JBQU0sQ0FBQ0MsUUFBUCxHQUFrQixRQUFsQjtBQUNILFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUNKLEtBZEwsV0FlWSxVQUFFQyxLQUFGLEVBQWE7QUFDakIsVUFBSTtBQUNBaEQsNkRBQVEsd0JBQWtCZ0QsS0FBSyxDQUFDUixRQUFOLENBQWVHLElBQWYsQ0FBb0JNLFdBQXRDLEdBQXFEdkMsUUFBUSxDQUFDZSxJQUE5RCxFQUFvRTFCLDZDQUFwRSxDQUFSO0FBQ0gsT0FGRCxDQUVFLGdCQUFNO0FBQ0pDLDZEQUFRLHdCQUFrQmdELEtBQUssQ0FBQy9DLE9BQXhCLEdBQW1DUyxRQUFRLENBQUNlLElBQTVDLEVBQWtEMUIsNkNBQWxELENBQVI7QUFDSDtBQUNKLEtBckJMO0FBc0JILEdBOUJEO0FBK0JIOztBQUVEMkIsSUFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREo7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBQ2V3QixROzs7QUFjZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztzRUF2QkEsaUJBQXlCQyxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUUyQkMsaURBQUEsV0FDaEI1RCxvREFEZ0IscUJBRW5CMkQsV0FGbUIsRUFHbkI7QUFDSUUscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYO0FBRGIsYUFIbUIsQ0FGM0I7O0FBQUE7QUFFVWIsb0JBRlY7QUFBQSw2Q0FXV0EsUUFBUSxDQUFDRyxJQVhwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBd0JlTCxLOzs7QUFhZjtBQUNBO0FBQ0E7Ozs7bUVBZkEsa0JBQXNCYSxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQkMsaURBQUEsV0FDaEI1RCxvREFEZ0Isa0JBRW5CMkQsV0FGbUIsRUFHbkI7QUFDSUUscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYO0FBRGIsYUFIbUIsQ0FEM0I7O0FBQUE7QUFDVWIsb0JBRFY7QUFBQSw4Q0FVV0EsUUFBUSxDQUFDRyxJQVZwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZ0JBLFNBQVNXLE1BQVQsR0FBa0I7QUFDZGIsY0FBWSxDQUFDYyxVQUFiLENBQXlCN0QsNkNBQXpCO0FBQ0ErQyxjQUFZLENBQUNjLFVBQWIsQ0FBeUIzRCw0Q0FBekI7QUFDQTZDLGNBQVksQ0FBQ2MsVUFBYixDQUF5QjVELDZDQUF6QjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVM2RCxRQUFULEdBQW9CO0FBQ2hCLFNBQU9mLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBc0IvRCw2Q0FBdEIsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRDtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHNCQUFzQiw0QkFBNEIsa0NBQWtDLE9BQU8sd0JBQXdCLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixPQUFPLDhDQUE4Qyw0QkFBNEIsc0NBQXNDLHFDQUFxQyxPQUFPLGlEQUFpRCw0QkFBNEIsa0NBQWtDLG1DQUFtQyxPQUFPLE9BQU8sdUZBQXVGLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsZ0NBQWdDLHNCQUFzQiw0QkFBNEIsa0NBQWtDLE9BQU8sd0JBQXdCLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixPQUFPLDhDQUE4Qyw0QkFBNEIsc0NBQXNDLHFDQUFxQyxPQUFPLGlEQUFpRCw0QkFBNEIsa0NBQWtDLG1DQUFtQyxPQUFPLG1CQUFtQjtBQUM1NEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7Ozs7QUFJdEc7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTs7QUFFcEMsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7VUMxQjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsd0NBQXdDO1dBQ3RFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLHFCQUFxQjtXQUNyQztXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImxvZ2luLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwOi8vbXltZWV0aW5nc2FwcC5oZXJva3VhcHAuY29tL2FwaSc7XHJcbmNvbnN0IHsgQVBJX0JBU0VfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3QgVE9LRU4gPSAndG9rZW4nO1xyXG5jb25zdCBFTUFJTCA9ICdlbWFpbCc7XHJcbmNvbnN0IE5BTUUgPSAnbmFtZSc7XHJcbmNvbnN0IElEID0gJ2lkJztcclxuXHJcbmNvbnN0IFNVQ0NFU1MgPSAnc3VjY2Vzcyc7XHJcbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBBUElfQkFTRV9VUkwsXHJcbiAgICBUT0tFTixcclxuICAgIEVNQUlMLFxyXG4gICAgTkFNRSxcclxuICAgIElELFxyXG4gICAgU1VDQ0VTUyxcclxuICAgIEVSUk9SLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBTVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFRvYXN0KCBtZXNzYWdlLCBlbGVtZW50LCBzdGF0ZSApIHtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5tYXgoIE1hdGguY2VpbCggKCBtZXNzYWdlLmxlbmd0aCAqIDEwMDAgKSAvIDI1ICksIDExMDAgKTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdC13cmFwcGVyJyApO1xyXG5cclxuICAgIGNvbnN0IG15dG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgaWYgKCBzdGF0ZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICBteXRvYXN0LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3QgbXl0b2FzdC1zdWNjZXNzJyApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBteXRvYXN0LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3QgbXl0b2FzdC1lcnJvcicgKTtcclxuICAgIH1cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoIG15dG9hc3QgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29udGVudCcgKTtcclxuICAgIG15dG9hc3QuYXBwZW5kQ2hpbGQoIGNvbnRlbnQgKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICBwLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBwLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKCBwICk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCggd3JhcHBlciApO1xyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2hpZGUnICk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdzaG93JyApO1xyXG4gICAgc2V0VGltZW91dCggKCApID0+IHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdoaWRlJyApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgICB9LCAxMDAwICk7XHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRUb2FzdDtcclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2xvZ2luLmNzcyc7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIFRPS0VOLCBFTUFJTCwgTkFNRSwgRVJST1IsIElEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoJztcclxuXHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuXHJcbmZ1bmN0aW9uIHNob3dCb2R5T25Mb2FkKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxufVxyXG5zaG93Qm9keU9uTG9hZCgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9naW4tZm9ybScgKTtcclxuXHJcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lciggJ3N1Ym1pdCcsICggZXZlbnQgKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW1haWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjZW1haWxJbnB1dCcgKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNwYXNzd29yZElucHV0JyApO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZW1haWxFbC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkRWwudmFsdWU7XHJcblxyXG4gICAgICAgIGxvZ2luKCB7IGVtYWlsLCBwYXNzd29yZCB9IClcclxuICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIFRPS0VOLCByZXNwb25zZS5kYXRhLnRva2VuICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIEVNQUlMLCByZXNwb25zZS5kYXRhLmVtYWlsICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIE5BTUUsIHJlc3BvbnNlLmRhdGEubmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBJRCwgcmVzcG9uc2UuZGF0YVsnX2lkJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgTG9naW4gRXJyb3I6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYExvZ2luIEVycm9yOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgTG9naW4gRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmluaXQoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBUT0tFTiwgRU1BSUwsIE5BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVkZW50aWFscyBBbiBvYmplY3Qgd2l0aCBuYW1lLCBlbWFpbCBhbmQgcGFzc3dvcmRcclxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVnaXN0ZXIgcmVzcG9uc2UgZGF0YSwgb3IgcmVqZWN0cyBpZiByZXF1ZXN0c1xyXG4gKiB0byByZWdpc3RlciBmYWlsc1xyXG4gKiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwibmFtZVwiOiBcIlByYXNoYW50aCBQdXJhbmlrXCIsXHJcbiAqICBcImVtYWlsXCI6IFwicHVyYW5pMkBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoIGNyZWRlbnRpYWxzICkge1xyXG4gICAgLy8gY29uc29sZS5sb2coY3JlZGVudGlhbHMpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9yZWdpc3RlcmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvZ2luIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHMgdG9cclxuICogbG9naW4gZmFpbHNcclxuICogQGV4YW1wbGUgY3JlZGVudGlhbHNcclxuICoge1xyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTIwQGV4YW1wbGUuY29tXCIsXHJcbiAqICBcInBhc3N3b3JkXCI6IFwiUHVyYW5pQDJcIlxyXG4gKiB9XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2dpbiggY3JlZGVudGlhbHMgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hdXRoL2xvZ2luYCxcclxuICAgICAgICBjcmVkZW50aWFscyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGF1dGggdG9rZW4gYW5kIGVtYWlsIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggVE9LRU4gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBOQU1FICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggRU1BSUwgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIGxvZ2dlZCBpbiB1c2VyLCBvciBudWxsIGlmIG5vIG9uZSBpcyBsb2dnZWQgaW5cclxuICogQHJldHVybnMgVGhlIGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIGxvZ2dlZCBpbiB1c2VyLCBvciBudWxsIGlmIG5vIG9uZSBpcyBsb2dnZWQgaW5cclxuICovXHJcbmZ1bmN0aW9uIGdldFRva2VuKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBsb2dvdXQsXHJcbiAgICBnZXRUb2tlbixcclxuICAgIGxvZ2luLFxyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tc2lnbmluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMzMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3MvbG9naW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tc2lnbmluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMzMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsb2dpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9jc3NfYm9vdHN0cmFwX21pbl9jc3NcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci1lZmRkZjdcIixcInB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjc3ZnX3htbG5zXzI3aHR0cF93d3dfdzNfb3JnXzIwMDBfc3ZnXzI3X3ZpZXdCb3hfMjctNC1iMDFiZTBcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvbG9naW4uanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=