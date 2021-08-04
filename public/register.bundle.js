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

/***/ "./public/js/register.js":
/*!*******************************!*\
  !*** ./public/js/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth */ "./public/js/services/auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");








function showBodyOnLoad() {
  document.body.classList.remove('hide');
}

showBodyOnLoad();

function init() {
  var loginForm = document.getElementById('register-form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameEl = document.querySelector('#nameInput');
    var emailEl = document.querySelector('#emailInput');
    var passwordEl = document.querySelector('#passwordInput');
    var name = nameEl.value;
    var email = emailEl.value;
    var password = passwordEl.value;
    (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.register)({
      name: name,
      email: email,
      password: password
    }).then(function (response) {
      if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Registration Successful', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
        setTimeout(function () {
          window.location = '/login';
        }, 2000);
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Registration Error: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Registration Error: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
      } catch (_unused) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Registration Error: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
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
/******/ 			"register": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0"], () => (__webpack_require__("./public/js/register.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY3VzdG9tcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQVBJX0JBU0VfVVJMIiwicHJvY2VzcyIsIlRPS0VOIiwiRU1BSUwiLCJOQU1FIiwiSUQiLCJTVUNDRVNTIiwiRVJST1IiLCJhZGRUb2FzdCIsIm1lc3NhZ2UiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm15dG9hc3QiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJwIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic2hvd0JvZHlPbkxvYWQiLCJib2R5IiwiaW5pdCIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lRWwiLCJxdWVyeVNlbGVjdG9yIiwiZW1haWxFbCIsInBhc3N3b3JkRWwiLCJuYW1lIiwidmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImVycm9yIiwiZGF0YSIsImRlc2NyaXB0aW9uIiwiY3JlZGVudGlhbHMiLCJheGlvcyIsImhlYWRlcnMiLCJsb2dpbiIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJnZXRUb2tlbiIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFRQSxZQUFSLEdBQXlCQywyQkFBekI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxJQUFNQyxFQUFFLEdBQUcsSUFBWDtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUEsU0FBU0MsUUFBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLE9BQTVCLEVBQXFDQyxLQUFyQyxFQUE2QztBQUN6QyxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFVRCxJQUFJLENBQUNFLElBQUwsQ0FBYU4sT0FBTyxDQUFDTyxNQUFSLEdBQWlCLElBQW5CLEdBQTRCLEVBQXZDLENBQVYsRUFBdUQsSUFB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V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InJlZ2lzdGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwOi8vbXltZWV0aW5nc2FwcC5oZXJva3VhcHAuY29tL2FwaSc7XHJcbmNvbnN0IHsgQVBJX0JBU0VfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3QgVE9LRU4gPSAndG9rZW4nO1xyXG5jb25zdCBFTUFJTCA9ICdlbWFpbCc7XHJcbmNvbnN0IE5BTUUgPSAnbmFtZSc7XHJcbmNvbnN0IElEID0gJ2lkJztcclxuXHJcbmNvbnN0IFNVQ0NFU1MgPSAnc3VjY2Vzcyc7XHJcbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBBUElfQkFTRV9VUkwsXHJcbiAgICBUT0tFTixcclxuICAgIEVNQUlMLFxyXG4gICAgTkFNRSxcclxuICAgIElELFxyXG4gICAgU1VDQ0VTUyxcclxuICAgIEVSUk9SLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBTVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFRvYXN0KCBtZXNzYWdlLCBlbGVtZW50LCBzdGF0ZSApIHtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5tYXgoIE1hdGguY2VpbCggKCBtZXNzYWdlLmxlbmd0aCAqIDEwMDAgKSAvIDI1ICksIDExMDAgKTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdC13cmFwcGVyJyApO1xyXG5cclxuICAgIGNvbnN0IG15dG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgaWYgKCBzdGF0ZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICBteXRvYXN0LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3QgbXl0b2FzdC1zdWNjZXNzJyApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBteXRvYXN0LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3QgbXl0b2FzdC1lcnJvcicgKTtcclxuICAgIH1cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoIG15dG9hc3QgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29udGVudCcgKTtcclxuICAgIG15dG9hc3QuYXBwZW5kQ2hpbGQoIGNvbnRlbnQgKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICBwLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICBwLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKCBwICk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCggd3JhcHBlciApO1xyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2hpZGUnICk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdzaG93JyApO1xyXG4gICAgc2V0VGltZW91dCggKCApID0+IHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdoaWRlJyApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgICB9LCAxMDAwICk7XHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRUb2FzdDtcclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5pbXBvcnQgYWRkVG9hc3QgZnJvbSAnLi9jdXN0b21zL2FwcCc7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XHJcbmltcG9ydCB7IEVSUk9SLCBTVUNDRVNTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0JvZHlPbkxvYWQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG59XHJcbnNob3dCb2R5T25Mb2FkKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdyZWdpc3Rlci1mb3JtJyApO1xyXG5cclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCAnc3VibWl0JywgKCBldmVudCApID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI25hbWVJbnB1dCcgKTtcclxuICAgICAgICBjb25zdCBlbWFpbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNlbWFpbElucHV0JyApO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI3Bhc3N3b3JkSW5wdXQnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBlbWFpbEVsLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRFbC52YWx1ZTtcclxuXHJcbiAgICAgICAgcmVnaXN0ZXIoIHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gKVxyXG4gICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1JlZ2lzdHJhdGlvbiBTdWNjZXNzZnVsJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYFJlZ2lzdHJhdGlvbiBFcnJvcjogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgUmVnaXN0cmF0aW9uIEVycm9yOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgUmVnaXN0cmF0aW9uIEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCwgVE9LRU4sIEVNQUlMLCBOQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggbmFtZSwgZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlZ2lzdGVyIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHNcclxuICogdG8gcmVnaXN0ZXIgZmFpbHNcclxuICogKiBAZXhhbXBsZSBjcmVkZW50aWFsc1xyXG4gKiB7XHJcbiAqICBcIm5hbWVcIjogXCJQcmFzaGFudGggUHVyYW5pa1wiLFxyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTJAZXhhbXBsZS5jb21cIixcclxuICogIFwicGFzc3dvcmRcIjogXCJQdXJhbmlAMlwiXHJcbiAqIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCBjcmVkZW50aWFscyApIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2F1dGgvcmVnaXN0ZXJgLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtvYmplY3R9IGNyZWRlbnRpYWxzIEFuIG9iamVjdCB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2dpbiByZXNwb25zZSBkYXRhLCBvciByZWplY3RzIGlmIHJlcXVlc3RzIHRvXHJcbiAqIGxvZ2luIGZhaWxzXHJcbiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwiZW1haWxcIjogXCJwdXJhbmkyMEBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oIGNyZWRlbnRpYWxzICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9sb2dpbmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBhdXRoIHRva2VuIGFuZCBlbWFpbCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIFRPS0VOICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggTkFNRSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIEVNQUlMICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqIEByZXR1cm5zIFRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgZ2V0VG9rZW4sXHJcbiAgICBsb2dpbixcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicmVnaXN0ZXJcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfY3NzX2Jvb3RzdHJhcF9taW5fY3NzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItZWZkZGY3XCIsXCJwdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zY3N2Z194bWxuc18yN2h0dHBfd3d3X3czX29yZ18yMDAwX3N2Z18yN192aWV3Qm94XzI3LTQtYjAxYmUwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL3JlZ2lzdGVyLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9