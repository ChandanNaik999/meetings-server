/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/account.js":
/*!******************************!*\
  !*** ./public/js/account.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_account_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/account.css */ "./public/css/account.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth */ "./public/js/services/auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _services_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/profile */ "./public/js/services/profile.js");








document.getElementById('editImage').addEventListener('change', function () {
  var formData = new FormData();
  var image = document.getElementById('editImage').files[0];

  if (image === undefined) {
    return;
  }

  formData.append('profilepic', image);
  formData.append('userId', localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.ID));
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.setProfilePic)(formData).then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var profileImage = document.getElementById('profileImage');
        profileImage.setAttribute('src', e.target.result);
      };

      reader.readAsDataURL(image);
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Profile pic updated successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding profile pic: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding profile pic: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    } catch (_unused) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding profile pic: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  });
});
document.getElementById('logoutButton').addEventListener('click', function () {
  (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.logout)();
  window.location = '/login';
});

function init() {
  var profileImage = document.getElementById('profileImage');
  profileImage.setAttribute('src', "".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.API_BASE_URL, "/").concat(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.ID), ".png"));
  var inputFullName = document.getElementById('inputName');
  inputFullName.value = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME);
  var inputEmail = document.getElementById('inputEmail');
  inputEmail.value = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL);
  var fullName = document.getElementById('profileName');
  fullName.innerHTML = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME);
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.getTotalTeams)().then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      document.getElementById('stat1Value').innerHTML = response.data[0].count;
    }
  })["catch"](function () {
    document.getElementById('stat1Value').innerHTML = ' - ';
  });
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.getTotalMeetings)().then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      document.getElementById('stat2Value').innerHTML = response.data[0].count;
    }
  })["catch"](function () {
    document.getElementById('stat2Value').innerHTML = ' - ';
  });
}

document.getElementById('saveChanges').addEventListener('click', function () {
  var inputFullName = document.getElementById('inputName').value;
  var inputEmail = document.getElementById('inputEmail').value;
  var userData = {
    email: inputEmail,
    name: inputFullName
  };
  var currentEmail = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL);
  var loginAgain = false;

  if (currentEmail !== inputEmail) {
    loginAgain = true;
  }

  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.updateUserDetails)(userData, 'update_user').then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL, response.data.email);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME, response.data.name);
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Your details have been updated successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);

      if (loginAgain) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('You will be logged out. Log in again.', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
        setTimeout(function () {
          (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.logout)();
          window.location = '/login';
        }, 2000);
      }
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating your details: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating your details: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    } catch (_unused2) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating your details: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  });
});
document.getElementById('updatePassword').addEventListener('click', function () {
  var inputOldPassword = document.getElementById('inputOldPassword').value;
  var inputNewPassword1 = document.getElementById('inputNewPassword1').value;
  var inputNewPassword2 = document.getElementById('inputNewPassword2').value;

  if (inputNewPassword1 === '' || inputNewPassword2 === '' || inputOldPassword === '') {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Dont enter empty fields 😞', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    return;
  }

  if (inputNewPassword1 !== inputNewPassword2) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Your new passwords dont match', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    return;
  }

  var userData = {
    oldPassword: inputOldPassword,
    newPassword: inputNewPassword1
  };
  (0,_services_profile__WEBPACK_IMPORTED_MODULE_7__.updateUserDetails)(userData, 'update_password').then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS) {
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.EMAIL, response.data.email);
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_6__.NAME, response.data.name);
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Your password has been updated', document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating password ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating password: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    } catch (_unused3) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error updating password: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_6__.ERROR);
    }
  });
});
init();

/***/ }),

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/js/services/profile.js":
/*!***************************************!*\
  !*** ./public/js/services/profile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setProfilePic": () => (/* binding */ setProfilePic),
/* harmony export */   "getProfilePic": () => (/* binding */ getProfilePic),
/* harmony export */   "updateUserDetails": () => (/* binding */ updateUserDetails),
/* harmony export */   "getTotalTeams": () => (/* binding */ getTotalTeams),
/* harmony export */   "getTotalMeetings": () => (/* binding */ getTotalMeetings)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./public/js/services/auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function setProfilePic(_x) {
  return _setProfilePic.apply(this, arguments);
}

function _setProfilePic() {
  _setProfilePic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(formData) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/profile"), formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _setProfilePic.apply(this, arguments);
}

function getProfilePic(_x2) {
  return _getProfilePic.apply(this, arguments);
}

function _getProfilePic() {
  _getProfilePic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/profile/pic/").concat(id), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _getProfilePic.apply(this, arguments);
}

function updateUserDetails(_x3, _x4) {
  return _updateUserDetails.apply(this, arguments);
}

function _updateUserDetails() {
  _updateUserDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userData, action) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/account?action=").concat(action), userData, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _updateUserDetails.apply(this, arguments);
}

function getTotalTeams() {
  return _getTotalTeams.apply(this, arguments);
}

function _getTotalTeams() {
  _getTotalTeams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/account/teams"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _getTotalTeams.apply(this, arguments);
}

function getTotalMeetings() {
  return _getTotalMeetings.apply(this, arguments);
}

function _getTotalMeetings() {
  _getTotalMeetings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.API_BASE_URL, "/account/meetings"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_1__.getToken)())
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
  return _getTotalMeetings.apply(this, arguments);
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/account.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/account.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n.bg-green {\r\n    background-color: #20d489;\r\n}\r\n\r\n.button {\r\n    color: #f9f2e7;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline {\r\n    color: #20d489;\r\n    background-color: #fff;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline:hover {\r\n    color: #fff;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button-outline-red {\r\n    color: #f1416c;\r\n    background-color: #ffeff3;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline-red:hover {\r\n    color: #ffeff3;\r\n    background-color: #f1416c;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n    transform: scale(1.05);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n\r\n.button:hover {\r\n    color: #f9f2e7;\r\n    background-color: hsl(155, 72%, 44%);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.input-text {\r\n    color: #5e6278;\r\n    background-color: #f5f8fa;\r\n    border-color: #f5f8fa;\r\n    padding: 0.75rem;\r\n    padding-left: 1rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.inputHelp {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    color: #5e6278;\r\n    margin-bottom: 1rem;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\nbody{\r\n    background: #fbf9f6;\r\n    color: #181c32;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n.label-form {\r\n    padding-top: 8px;\r\n}", "",{"version":3,"sources":["webpack://./public/css/account.css"],"names":[],"mappings":";;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,2BAA2B;AAC/B;;;AAGA;IACI,cAAc;IACd,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["\r\n\r\n.bg-green {\r\n    background-color: #20d489;\r\n}\r\n\r\n.button {\r\n    color: #f9f2e7;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline {\r\n    color: #20d489;\r\n    background-color: #fff;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline:hover {\r\n    color: #fff;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button-outline-red {\r\n    color: #f1416c;\r\n    background-color: #ffeff3;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline-red:hover {\r\n    color: #ffeff3;\r\n    background-color: #f1416c;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n    transform: scale(1.05);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n\r\n.button:hover {\r\n    color: #f9f2e7;\r\n    background-color: hsl(155, 72%, 44%);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.input-text {\r\n    color: #5e6278;\r\n    background-color: #f5f8fa;\r\n    border-color: #f5f8fa;\r\n    padding: 0.75rem;\r\n    padding-left: 1rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.inputHelp {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    color: #5e6278;\r\n    margin-bottom: 1rem;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\nbody{\r\n    background: #fbf9f6;\r\n    color: #181c32;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n.label-form {\r\n    padding-top: 8px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/account.css":
/*!********************************!*\
  !*** ./public/css/account.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./account.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/account.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_account_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"account": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0"], () => (__webpack_require__("./public/js/account.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hY2NvdW50LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY3VzdG9tcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9wcm9maWxlLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9hY2NvdW50LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWNjb3VudC5jc3M/NWM2OCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaW1hZ2UiLCJmaWxlcyIsInVuZGVmaW5lZCIsImFwcGVuZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJJRCIsInNldFByb2ZpbGVQaWMiLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwicHJvZmlsZUltYWdlIiwic2V0QXR0cmlidXRlIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImFkZFRvYXN0IiwiYm9keSIsIkVSUk9SIiwiZXJyb3IiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJsb2dvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImluaXQiLCJBUElfQkFTRV9VUkwiLCJpbnB1dEZ1bGxOYW1lIiwidmFsdWUiLCJOQU1FIiwiaW5wdXRFbWFpbCIsIkVNQUlMIiwiZnVsbE5hbWUiLCJpbm5lckhUTUwiLCJnZXRUb3RhbFRlYW1zIiwiY291bnQiLCJnZXRUb3RhbE1lZXRpbmdzIiwidXNlckRhdGEiLCJlbWFpbCIsIm5hbWUiLCJjdXJyZW50RW1haWwiLCJsb2dpbkFnYWluIiwidXBkYXRlVXNlckRldGFpbHMiLCJzZXRJdGVtIiwic2V0VGltZW91dCIsImlucHV0T2xkUGFzc3dvcmQiLCJpbnB1dE5ld1Bhc3N3b3JkMSIsImlucHV0TmV3UGFzc3dvcmQyIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInNldE5hdmJhciIsIlRPS0VOIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJzaG93Qm9keU9uTG9hZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInByb2Nlc3MiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJteXRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYWRkIiwicmVnaXN0ZXIiLCJjcmVkZW50aWFscyIsImF4aW9zIiwiaGVhZGVycyIsImxvZ2luIiwicmVtb3ZlSXRlbSIsImdldFRva2VuIiwiQXV0aG9yaXphdGlvbiIsImdldFByb2ZpbGVQaWMiLCJpZCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDQyxnQkFBdkMsQ0FBeUQsUUFBekQsRUFBbUUsWUFBTztBQUN0RSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBLE1BQU1DLEtBQUssR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDSyxLQUF2QyxDQUE2QyxDQUE3QyxDQUFkOztBQUNBLE1BQUtELEtBQUssS0FBS0UsU0FBZixFQUEyQjtBQUN2QjtBQUNIOztBQUNESixVQUFRLENBQUNLLE1BQVQsQ0FBaUIsWUFBakIsRUFBK0JILEtBQS9CO0FBQ0FGLFVBQVEsQ0FBQ0ssTUFBVCxDQUFpQixRQUFqQixFQUEyQkMsWUFBWSxDQUFDQyxPQUFiLENBQXNCQywwQ0FBdEIsQ0FBM0I7QUFDQUMsa0VBQWEsQ0FBRVQsUUFBRixDQUFiLENBQ0tVLElBREwsQ0FDVyxVQUFFQyxRQUFGLEVBQWdCO0FBQ25CLFFBQUtBLFFBQVEsQ0FBQ0MsT0FBVCxLQUFxQkMsK0NBQTFCLEVBQW9DO0FBQ2hDLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7O0FBQ0FELFlBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFFQyxDQUFGLEVBQVM7QUFDckIsWUFBTUMsWUFBWSxHQUFHckIsUUFBUSxDQUFDQyxjQUFULENBQXlCLGNBQXpCLENBQXJCO0FBQ0FvQixvQkFBWSxDQUFDQyxZQUFiLENBQTJCLEtBQTNCLEVBQWtDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsTUFBM0M7QUFDSCxP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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhY2NvdW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hY2NvdW50LmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIEVSUk9SLCBJRCwgQVBJX0JBU0VfVVJMLCBOQU1FLCBFTUFJTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2V0UHJvZmlsZVBpYywgdXBkYXRlVXNlckRldGFpbHMsIGdldFRvdGFsVGVhbXMsIGdldFRvdGFsTWVldGluZ3MgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2ZpbGUnO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdlZGl0SW1hZ2UnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICggKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2VkaXRJbWFnZScgKS5maWxlc1swXTtcclxuICAgIGlmICggaW1hZ2UgPT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoICdwcm9maWxlcGljJywgaW1hZ2UgKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCggJ3VzZXJJZCcsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApICk7XHJcbiAgICBzZXRQcm9maWxlUGljKCBmb3JtRGF0YSApXHJcbiAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJvZmlsZUltYWdlJyApO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlLnRhcmdldC5yZXN1bHQgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCggaW1hZ2UgKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnUHJvZmlsZSBwaWMgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBwcm9maWxlIHBpYzogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBwcm9maWxlIHBpYzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgcHJvZmlsZSBwaWM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvZ291dEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG59ICk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcm9maWxlSW1hZ2UnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROYW1lJyApO1xyXG4gICAgaW5wdXRGdWxsTmFtZS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRFbWFpbCcgKTtcclxuICAgIGlucHV0RW1haWwudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggRU1BSUwgKTtcclxuXHJcbiAgICBjb25zdCBmdWxsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJvZmlsZU5hbWUnICk7XHJcbiAgICBmdWxsTmFtZS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApO1xyXG5cclxuICAgIGdldFRvdGFsVGVhbXMoIClcclxuICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdGF0MVZhbHVlJyApLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGFbMF0uY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhdDFWYWx1ZScgKS5pbm5lckhUTUwgPSAnIC0gJztcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgZ2V0VG90YWxNZWV0aW5ncyggKVxyXG4gICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXQyVmFsdWUnICkuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YVswXS5jb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCApID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdGF0MlZhbHVlJyApLmlubmVySFRNTCA9ICcgLSAnO1xyXG4gICAgICAgIH0gKTtcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzYXZlQ2hhbmdlcycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dEZ1bGxOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE5hbWUnICkudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dEVtYWlsJyApLnZhbHVlO1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgZW1haWw6IGlucHV0RW1haWwsXHJcbiAgICAgICAgbmFtZTogaW5wdXRGdWxsTmFtZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBjdXJyZW50RW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggRU1BSUwgKTtcclxuICAgIGxldCBsb2dpbkFnYWluID0gZmFsc2U7XHJcbiAgICBpZiAoIGN1cnJlbnRFbWFpbCAhPT0gaW5wdXRFbWFpbCApIHtcclxuICAgICAgICBsb2dpbkFnYWluID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVzZXJEZXRhaWxzKCB1c2VyRGF0YSwgJ3VwZGF0ZV91c2VyJyApXHJcbiAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBFTUFJTCwgcmVzcG9uc2UuZGF0YS5lbWFpbCApO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIE5BTUUsIHJlc3BvbnNlLmRhdGEubmFtZSApO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoICdZb3VyIGRldGFpbHMgaGF2ZSBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBsb2dpbkFnYWluICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91IHdpbGwgYmUgbG9nZ2VkIG91dC4gTG9nIGluIGFnYWluLicsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHVwZGF0aW5nIHlvdXIgZGV0YWlsczogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHVwZGF0aW5nIHlvdXIgZGV0YWlsczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciB1cGRhdGluZyB5b3VyIGRldGFpbHM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwZGF0ZVBhc3N3b3JkJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0T2xkUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0T2xkUGFzc3dvcmQnICkudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dE5ld1Bhc3N3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROZXdQYXNzd29yZDEnICkudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dE5ld1Bhc3N3b3JkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROZXdQYXNzd29yZDInICkudmFsdWU7XHJcblxyXG4gICAgaWYgKCBpbnB1dE5ld1Bhc3N3b3JkMSA9PT0gJycgfHwgaW5wdXROZXdQYXNzd29yZDIgPT09ICcnIHx8IGlucHV0T2xkUGFzc3dvcmQgPT09ICcnICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnRG9udCBlbnRlciBlbXB0eSBmaWVsZHMg8J+YnicsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggaW5wdXROZXdQYXNzd29yZDEgIT09IGlucHV0TmV3UGFzc3dvcmQyICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnWW91ciBuZXcgcGFzc3dvcmRzIGRvbnQgbWF0Y2gnLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgICBvbGRQYXNzd29yZDogaW5wdXRPbGRQYXNzd29yZCxcclxuICAgICAgICBuZXdQYXNzd29yZDogaW5wdXROZXdQYXNzd29yZDEsXHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZVVzZXJEZXRhaWxzKCB1c2VyRGF0YSwgJ3VwZGF0ZV9wYXNzd29yZCcgKVxyXG4gICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggRU1BSUwsIHJlc3BvbnNlLmRhdGEuZW1haWwgKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBOQU1FLCByZXNwb25zZS5kYXRhLm5hbWUgKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91ciBwYXNzd29yZCBoYXMgYmVlbiB1cGRhdGVkJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciB1cGRhdGluZyBwYXNzd29yZCAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQ6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQ6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCB7IEFQSV9CQVNFX1VSTCwgSUQsIE5BTUUsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0TmF2YmFyKCkge1xyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hdlBpYycgKTtcclxuICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgJHtBUElfQkFTRV9VUkx9LyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICl9LnBuZ2AgKTtcclxuXHJcbiAgICBjb25zdCBbZmlyc3ROYW1lXSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICkuc3BsaXQoICcgJyApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYW1lTmF2JyApLmlubmVySFRNTCA9IGZpcnN0TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0JvZHlPbkxvYWQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG59XHJcbnNob3dCb2R5T25Mb2FkKCk7XHJcbnNldE5hdmJhcigpO1xyXG4iLCIvLyBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cDovL215bWVldGluZ3NhcHAuaGVyb2t1YXBwLmNvbS9hcGknO1xyXG5jb25zdCB7IEFQSV9CQVNFX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IFRPS0VOID0gJ3Rva2VuJztcclxuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xyXG5jb25zdCBOQU1FID0gJ25hbWUnO1xyXG5jb25zdCBJRCA9ICdpZCc7XHJcblxyXG5jb25zdCBTVUNDRVNTID0gJ3N1Y2Nlc3MnO1xyXG5jb25zdCBFUlJPUiA9ICdlcnJvcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQVBJX0JBU0VfVVJMLFxyXG4gICAgVE9LRU4sXHJcbiAgICBFTUFJTCxcclxuICAgIE5BTUUsXHJcbiAgICBJRCxcclxuICAgIFNVQ0NFU1MsXHJcbiAgICBFUlJPUixcclxufTtcclxuIiwiaW1wb3J0IHsgU1VDQ0VTUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2FzdCggbWVzc2FnZSwgZWxlbWVudCwgc3RhdGUgKSB7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgubWF4KCBNYXRoLmNlaWwoICggbWVzc2FnZS5sZW5ndGggKiAxMDAwICkgLyAyNSApLCAxMTAwICk7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215dG9hc3Qtd3JhcHBlcicgKTtcclxuXHJcbiAgICBjb25zdCBteXRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIGlmICggc3RhdGUgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgbXl0b2FzdC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0IG15dG9hc3Qtc3VjY2VzcycgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXl0b2FzdC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0IG15dG9hc3QtZXJyb3InICk7XHJcbiAgICB9XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKCBteXRvYXN0ICk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbnRlbnQnICk7XHJcbiAgICBteXRvYXN0LmFwcGVuZENoaWxkKCBjb250ZW50ICk7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgcC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgcC5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCggcCApO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIHdyYXBwZXIgKTtcclxuXHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdoaWRlJyApO1xyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnc2hvdycgKTtcclxuICAgIHNldFRpbWVvdXQoICggKSA9PiB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnaGlkZScgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMTAwMCApO1xyXG4gICAgfSwgZHVyYXRpb24gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkVG9hc3Q7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCwgVE9LRU4sIEVNQUlMLCBOQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggbmFtZSwgZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlZ2lzdGVyIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHNcclxuICogdG8gcmVnaXN0ZXIgZmFpbHNcclxuICogKiBAZXhhbXBsZSBjcmVkZW50aWFsc1xyXG4gKiB7XHJcbiAqICBcIm5hbWVcIjogXCJQcmFzaGFudGggUHVyYW5pa1wiLFxyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTJAZXhhbXBsZS5jb21cIixcclxuICogIFwicGFzc3dvcmRcIjogXCJQdXJhbmlAMlwiXHJcbiAqIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCBjcmVkZW50aWFscyApIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2F1dGgvcmVnaXN0ZXJgLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtvYmplY3R9IGNyZWRlbnRpYWxzIEFuIG9iamVjdCB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2dpbiByZXNwb25zZSBkYXRhLCBvciByZWplY3RzIGlmIHJlcXVlc3RzIHRvXHJcbiAqIGxvZ2luIGZhaWxzXHJcbiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwiZW1haWxcIjogXCJwdXJhbmkyMEBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oIGNyZWRlbnRpYWxzICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9sb2dpbmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBhdXRoIHRva2VuIGFuZCBlbWFpbCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIFRPS0VOICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggTkFNRSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIEVNQUlMICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqIEByZXR1cm5zIFRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgZ2V0VG9rZW4sXHJcbiAgICBsb2dpbixcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0UHJvZmlsZVBpYyggZm9ybURhdGEgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9wcm9maWxlYCxcclxuICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZVBpYyggaWQgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3Byb2ZpbGUvcGljLyR7aWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckRldGFpbHMoIHVzZXJEYXRhLCBhY3Rpb24gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYWNjb3VudD9hY3Rpb249JHthY3Rpb259YCxcclxuICAgICAgICB1c2VyRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxUZWFtcyggKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FjY291bnQvdGVhbXNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRUb3RhbE1lZXRpbmdzKCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYWNjb3VudC9tZWV0aW5nc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBzZXRQcm9maWxlUGljLFxyXG4gICAgZ2V0UHJvZmlsZVBpYyxcclxuICAgIHVwZGF0ZVVzZXJEZXRhaWxzLFxyXG4gICAgZ2V0VG90YWxUZWFtcyxcclxuICAgIGdldFRvdGFsTWVldGluZ3MsXHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXFxyXFxuLmJnLWdyZWVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZDQ4OTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiAjZjlmMmU3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tb3V0bGluZSB7XFxyXFxuICAgIGNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lLXJlZCB7XFxyXFxuICAgIGNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZmYzO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmUtcmVkOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmVmZjM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2YxNDE2YztcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZjlmMmU3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTU1LCA3MiUsIDQ0JSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRleHQge1xcclxcbiAgICBjb2xvcjogIzVlNjI3ODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVmOGZhO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0SGVscCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICM1ZTYyNzg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZiZjlmNjtcXHJcXG4gICAgY29sb3I6ICMxODFjMzI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1mb3JtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9hY2NvdW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5cXHJcXG4uYmctZ3JlZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkNDg5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6ICNmOWYyZTc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lIHtcXHJcXG4gICAgY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tb3V0bGluZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmUtcmVkIHtcXHJcXG4gICAgY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVmZjM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2YxNDE2YztcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tb3V0bGluZS1yZWQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZWZmMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDE2YztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmOWYyZTc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNTUsIDcyJSwgNDQlKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjNWU2Mjc4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmNWY4ZmE7XFxyXFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRIZWxwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzVlNjI3ODtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmJmOWY2O1xcclxcbiAgICBjb2xvcjogIzE4MWMzMjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLWZvcm0ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FjY291bnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hY2NvdW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFjY291bnRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfY3NzX2Jvb3RzdHJhcF9taW5fY3NzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItZWZkZGY3XCIsXCJwdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zY3N2Z194bWxuc18yN2h0dHBfd3d3X3czX29yZ18yMDAwX3N2Z18yN192aWV3Qm94XzI3LTQtYjAxYmUwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL2FjY291bnQuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=