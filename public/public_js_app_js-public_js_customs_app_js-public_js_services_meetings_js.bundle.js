(self["webpackChunkmeetings"] = self["webpackChunkmeetings"] || []).push([["public_js_app_js-public_js_customs_app_js-public_js_services_meetings_js"],{

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function setNavbar() {
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN) === null) {
    window.location = '/login';
  }

  var profileImage = document.getElementById('navPic');
  profileImage.setAttribute('src', "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/").concat(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.ID), ".png"));

  var _localStorage$getItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.NAME).split(' '),
      _localStorage$getItem2 = _slicedToArray(_localStorage$getItem, 1),
      firstName = _localStorage$getItem2[0];

  document.getElementById('nameNav').innerHTML = firstName;
}

function showBodyOnLoad() {
  document.body.classList.remove('hide');
}

showBodyOnLoad();
setNavbar();

/***/ }),

/***/ "./public/js/constants.js":
/*!********************************!*\
  !*** ./public/js/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./public/js/services/auth.js":
/*!************************************!*\
  !*** ./public/js/services/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./public/js/services/meetings.js":
/*!****************************************!*\
  !*** ./public/js/services/meetings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMeetings": () => (/* binding */ fetchMeetings),
/* harmony export */   "searchMeetings": () => (/* binding */ searchMeetings),
/* harmony export */   "addAttendeeToMeeting": () => (/* binding */ addAttendeeToMeeting),
/* harmony export */   "excuseFromMeeting": () => (/* binding */ excuseFromMeeting),
/* harmony export */   "addMeeting": () => (/* binding */ addMeeting)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./public/js/services/auth.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function fetchMeetings(_x) {
  return _fetchMeetings.apply(this, arguments);
}

function _fetchMeetings() {
  _fetchMeetings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(date) {
    var dateString, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dateString = '';

            if (date instanceof Date) {
              dateString = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/calendar?date=").concat(dateString), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchMeetings.apply(this, arguments);
}

function searchMeetings(_x2) {
  return _searchMeetings.apply(this, arguments);
}

function _searchMeetings() {
  _searchMeetings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(selectedDateOption) {
    var searchText,
        url,
        response,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            searchText = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : '';
            url = "".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/?period=").concat(selectedDateOption);

            if (searchText !== '') {
              url += '&search=';
              url += searchText.split(' ').join('%20');
            }

            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _searchMeetings.apply(this, arguments);
}

function addAttendeeToMeeting(_x3, _x4) {
  return _addAttendeeToMeeting.apply(this, arguments);
}

function _addAttendeeToMeeting() {
  _addAttendeeToMeeting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(meeting, email) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/").concat(meeting['_id'], "?action=add_attendee&email=").concat(email), {}, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addAttendeeToMeeting.apply(this, arguments);
}

function excuseFromMeeting(_x5) {
  return _excuseFromMeeting.apply(this, arguments);
}

function _excuseFromMeeting() {
  _excuseFromMeeting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(meeting) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/").concat(meeting['_id'], "?action=remove_attendee"), {}, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _excuseFromMeeting.apply(this, arguments);
}

function addMeeting(_x6) {
  return _addMeeting.apply(this, arguments);
} // async function fetchMeetingById( id ) {
//     const response = await axios.get(
//         `${API_BASE_URL}/workshops/${id}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//         },
//     );
//     return response.data;
// }
// async function deleteMeetingById( id ) {
//     const response = await axios.delete(
//         `${API_BASE_URL}/workshops/${id}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//         },
//     );
//     return response;
// }


function _addMeeting() {
  _addMeeting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(submitJSON) {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/meetings/"), submitJSON, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
              }
            });

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addMeeting.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2N1c3RvbXMvYXBwLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL2F1dGguanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvbWVldGluZ3MuanMiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcm9jZXNzIiwiRU1BSUwiLCJTVUNDRVNTIiwiRVJST1IiLCJhZGRUb2FzdCIsIm1lc3NhZ2UiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJteXRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYWRkIiwic2V0VGltZW91dCIsInJlZ2lzdGVyIiwiY3JlZGVudGlhbHMiLCJheGlvcyIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJsb2dpbiIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJnZXRUb2tlbiIsImZldGNoTWVldGluZ3MiLCJkYXRlIiwiZGF0ZVN0cmluZyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIkF1dGhvcml6YXRpb24iLCJzZWFyY2hNZWV0aW5ncyIsInNlbGVjdGVkRGF0ZU9wdGlvbiIsInNlYXJjaFRleHQiLCJ1cmwiLCJqb2luIiwiYWRkQXR0ZW5kZWVUb01lZXRpbmciLCJtZWV0aW5nIiwiZW1haWwiLCJleGN1c2VGcm9tTWVldGluZyIsImFkZE1lZXRpbmciLCJzdWJtaXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsTUFBS0MsWUFBWSxDQUFDQyxPQUFiLENBQXNCQyw2Q0FBdEIsTUFBa0MsSUFBdkMsRUFBOEM7QUFDMUNDLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixRQUFsQjtBQUNIOztBQUVELE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXlCLFFBQXpCLENBQXJCO0FBQ0FGLGNBQVksQ0FBQ0csWUFBYixDQUEyQixLQUEzQixZQUFxQ0Msb0RBQXJDLGNBQXFEVCxZQUFZLENBQUNDLE9BQWIsQ0FBc0JTLDBDQUF0QixDQUFyRDs7QUFFQSw4QkFBb0JWLFlBQVksQ0FBQ0MsT0FBYixDQUFzQlUsNENBQXRCLEVBQTZCQyxLQUE3QixDQUFvQyxHQUFwQyxDQUFwQjtBQUFBO0FBQUEsTUFBT0MsU0FBUDs7QUFDQVAsVUFBUSxDQUFDQyxjQUFULENBQXlCLFNBQXpCLEVBQXFDTyxTQUFyQyxHQUFpREQsU0FBakQ7QUFDSDs7QUFFRCxTQUFTRSxjQUFULEdBQTBCO0FBQ3RCVCxVQUFRLENBQUNVLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBZ0MsTUFBaEM7QUFDSDs7QUFDREgsY0FBYztBQUNkaEIsU0FBUyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlQ7QUFDQSxJQUFRVSxZQUFSLEdBQXlCVSwyQkFBekI7QUFDQSxJQUFNakIsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFNa0IsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFNVCxJQUFJLEdBQUcsTUFBYjtBQUNBLElBQU1E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Qm5DLG9EQURnQix1QkFDU3lELE9BQU8sQ0FBQyxLQUFELENBRGhCLDhCQUVuQixFQUZtQixFQUduQjtBQUNJckIscUJBQU8sRUFBRTtBQUNMYyw2QkFBYSxZQUFLUiwrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUhtQixDQUQzQjs7QUFBQTtBQUNVTCxvQkFEVjtBQUFBLDhDQVdXQSxRQUFRLENBQUNDLElBWHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FjZXNCLFU7O0VBY2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7d0VBdENBLGtCQUEyQkMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDMkIxQixpREFBQSxXQUNoQm5DLG9EQURnQixpQkFFbkI2RCxVQUZtQixFQUduQjtBQUNJekIscUJBQU8sRUFBRTtBQUNMYyw2QkFBYSxZQUFLUiwrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUhtQixDQUQzQjs7QUFBQTtBQUNVTCxvQkFEVjtBQUFBLDhDQVdXQSxRQUFRLENBQUNDLElBWHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoicHVibGljX2pzX2FwcF9qcy1wdWJsaWNfanNfY3VzdG9tc19hcHBfanMtcHVibGljX2pzX3NlcnZpY2VzX21lZXRpbmdzX2pzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9CQVNFX1VSTCwgSUQsIE5BTUUsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0TmF2YmFyKCkge1xyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hdlBpYycgKTtcclxuICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgJHtBUElfQkFTRV9VUkx9LyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICl9LnBuZ2AgKTtcclxuXHJcbiAgICBjb25zdCBbZmlyc3ROYW1lXSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICkuc3BsaXQoICcgJyApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYW1lTmF2JyApLmlubmVySFRNTCA9IGZpcnN0TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0JvZHlPbkxvYWQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG59XHJcbnNob3dCb2R5T25Mb2FkKCk7XHJcbnNldE5hdmJhcigpO1xyXG4iLCIvLyBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cDovL215bWVldGluZ3NhcHAuaGVyb2t1YXBwLmNvbS9hcGknO1xyXG5jb25zdCB7IEFQSV9CQVNFX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IFRPS0VOID0gJ3Rva2VuJztcclxuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xyXG5jb25zdCBOQU1FID0gJ25hbWUnO1xyXG5jb25zdCBJRCA9ICdpZCc7XHJcblxyXG5jb25zdCBTVUNDRVNTID0gJ3N1Y2Nlc3MnO1xyXG5jb25zdCBFUlJPUiA9ICdlcnJvcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQVBJX0JBU0VfVVJMLFxyXG4gICAgVE9LRU4sXHJcbiAgICBFTUFJTCxcclxuICAgIE5BTUUsXHJcbiAgICBJRCxcclxuICAgIFNVQ0NFU1MsXHJcbiAgICBFUlJPUixcclxufTtcclxuIiwiaW1wb3J0IHsgU1VDQ0VTUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2FzdCggbWVzc2FnZSwgZWxlbWVudCwgc3RhdGUgKSB7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgubWF4KCBNYXRoLmNlaWwoICggbWVzc2FnZS5sZW5ndGggKiAxMDAwICkgLyAyNSApLCAxMTAwICk7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3Qtd3JhcHBlcicgKTtcclxuXHJcbiAgICBjb25zdCBteXRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIGlmICggc3RhdGUgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgbXl0b2FzdC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0IG15dG9hc3Qtc3VjY2VzcycgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXl0b2FzdC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0IG15dG9hc3QtZXJyb3InICk7XHJcbiAgICB9XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKCBteXRvYXN0ICk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbnRlbnQnICk7XHJcbiAgICBteXRvYXN0LmFwcGVuZENoaWxkKCBjb250ZW50ICk7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgcC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgcC5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCggcCApO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIHdyYXBwZXIgKTtcclxuXHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnc2hvdycgKTtcclxuICAgIHNldFRpbWVvdXQoICggKSA9PiB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnaGlkZScgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMTAwMCApO1xyXG4gICAgfSwgZHVyYXRpb24gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkVG9hc3Q7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCwgVE9LRU4sIEVNQUlMLCBOQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggbmFtZSwgZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlZ2lzdGVyIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHNcclxuICogdG8gcmVnaXN0ZXIgZmFpbHNcclxuICogKiBAZXhhbXBsZSBjcmVkZW50aWFsc1xyXG4gKiB7XHJcbiAqICBcIm5hbWVcIjogXCJQcmFzaGFudGggUHVyYW5pa1wiLFxyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTJAZXhhbXBsZS5jb21cIixcclxuICogIFwicGFzc3dvcmRcIjogXCJQdXJhbmlAMlwiXHJcbiAqIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCBjcmVkZW50aWFscyApIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2F1dGgvcmVnaXN0ZXJgLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtvYmplY3R9IGNyZWRlbnRpYWxzIEFuIG9iamVjdCB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2dpbiByZXNwb25zZSBkYXRhLCBvciByZWplY3RzIGlmIHJlcXVlc3RzIHRvXHJcbiAqIGxvZ2luIGZhaWxzXHJcbiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwiZW1haWxcIjogXCJwdXJhbmkyMEBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oIGNyZWRlbnRpYWxzICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9sb2dpbmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBhdXRoIHRva2VuIGFuZCBlbWFpbCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIFRPS0VOICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggTkFNRSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIEVNQUlMICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqIEByZXR1cm5zIFRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgZ2V0VG9rZW4sXHJcbiAgICBsb2dpbixcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZWV0aW5ncyggZGF0ZSApIHtcclxuICAgIGxldCBkYXRlU3RyaW5nID0gJyc7XHJcbiAgICBpZiAoIGRhdGUgaW5zdGFuY2VvZiBEYXRlICkge1xyXG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9jYWxlbmRhcj9kYXRlPSR7ZGF0ZVN0cmluZ31gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hNZWV0aW5ncyggc2VsZWN0ZWREYXRlT3B0aW9uLCBzZWFyY2hUZXh0ID0gJycgKSB7XHJcbiAgICBsZXQgdXJsID0gYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8/cGVyaW9kPSR7c2VsZWN0ZWREYXRlT3B0aW9ufWA7XHJcbiAgICBpZiAoIHNlYXJjaFRleHQgIT09ICcnICkge1xyXG4gICAgICAgIHVybCArPSAnJnNlYXJjaD0nO1xyXG4gICAgICAgIHVybCArPSAoIHNlYXJjaFRleHQuc3BsaXQoICcgJyApICkuam9pbiggJyUyMCcgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEF0dGVuZGVlVG9NZWV0aW5nKCBtZWV0aW5nLCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8ke21lZXRpbmdbJ19pZCddfT9hY3Rpb249YWRkX2F0dGVuZGVlJmVtYWlsPSR7ZW1haWx9YCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjdXNlRnJvbU1lZXRpbmcoIG1lZXRpbmcgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvJHttZWV0aW5nWydfaWQnXX0/YWN0aW9uPXJlbW92ZV9hdHRlbmRlZWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy9gLFxyXG4gICAgICAgIHN1Ym1pdEpTT04sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGZldGNoTWVldGluZ0J5SWQoIGlkICkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbi8vICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS93b3Jrc2hvcHMvJHtpZH1gLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFRva2VuKCl9YCxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVldGluZ0J5SWQoIGlkICkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXHJcbi8vICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS93b3Jrc2hvcHMvJHtpZH1gLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFRva2VuKCl9YCxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaE1lZXRpbmdzLFxyXG4gICAgc2VhcmNoTWVldGluZ3MsXHJcbiAgICBhZGRBdHRlbmRlZVRvTWVldGluZyxcclxuICAgIGV4Y3VzZUZyb21NZWV0aW5nLFxyXG4gICAgYWRkTWVldGluZyxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==