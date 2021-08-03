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

setNavbar();

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
/* harmony export */   "updateUserDetails": () => (/* binding */ updateUserDetails)
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n.bg-green {\r\n    background-color: #20d489;\r\n}\r\n\r\n.button {\r\n    color: #f9f2e7;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline {\r\n    color: #20d489;\r\n    background-color: #fff;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline:hover {\r\n    color: #fff;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button-outline-red {\r\n    color: #f1416c;\r\n    background-color: #ffeff3;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline-red:hover {\r\n    color: #ffeff3;\r\n    background-color: #f1416c;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button:hover {\r\n    color: #f9f2e7;\r\n    background-color: hsl(155, 72%, 44%);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.input-text {\r\n    color: #5e6278;\r\n    background-color: #f5f8fa;\r\n    border-color: #f5f8fa;\r\n    padding: 0.75rem;\r\n    padding-left: 1rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.inputHelp {\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n    color: #5e6278;\r\n    margin-bottom: 1rem;\r\n    margin-top: 2px;\r\n}\r\n\r\nbody{\r\n    background: #fbf9f6;\r\n    color: #181c32;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n.label-form {\r\n    padding-top: 8px;\r\n}", "",{"version":3,"sources":["webpack://./public/css/account.css"],"names":[],"mappings":";;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["\r\n\r\n.bg-green {\r\n    background-color: #20d489;\r\n}\r\n\r\n.button {\r\n    color: #f9f2e7;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline {\r\n    color: #20d489;\r\n    background-color: #fff;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline:hover {\r\n    color: #fff;\r\n    background-color: #20d489;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #20d489;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button-outline-red {\r\n    color: #f1416c;\r\n    background-color: #ffeff3;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    border-style: solid;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.button-outline-red:hover {\r\n    color: #ffeff3;\r\n    background-color: #f1416c;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-width: 2px;\r\n    border-color: #f1416c;\r\n    padding: 0.4rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.button:hover {\r\n    color: #f9f2e7;\r\n    background-color: hsl(155, 72%, 44%);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border-style: none;\r\n    padding: 0.5rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.input-text {\r\n    color: #5e6278;\r\n    background-color: #f5f8fa;\r\n    border-color: #f5f8fa;\r\n    padding: 0.75rem;\r\n    padding-left: 1rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.inputHelp {\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n    color: #5e6278;\r\n    margin-bottom: 1rem;\r\n    margin-top: 2px;\r\n}\r\n\r\nbody{\r\n    background: #fbf9f6;\r\n    color: #181c32;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n.label-form {\r\n    padding-top: 8px;\r\n}"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/account.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hY2NvdW50LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9wcm9maWxlLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9hY2NvdW50LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWNjb3VudC5jc3M/NWM2OCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaW1hZ2UiLCJmaWxlcyIsInVuZGVmaW5lZCIsImFwcGVuZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJJRCIsInNldFByb2ZpbGVQaWMiLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwicHJvZmlsZUltYWdlIiwic2V0QXR0cmlidXRlIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImFkZFRvYXN0IiwiYm9keSIsIkVSUk9SIiwiZXJyb3IiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJsb2dvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImluaXQiLCJBUElfQkFTRV9VUkwiLCJpbnB1dEZ1bGxOYW1lIiwidmFsdWUiLCJOQU1FIiwiaW5wdXRFbWFpbCIsIkVNQUlMIiwiZnVsbE5hbWUiLCJpbm5lckhUTUwiLCJ1c2VyRGF0YSIsImVtYWlsIiwibmFtZSIsImN1cnJlbnRFbWFpbCIsImxvZ2luQWdhaW4iLCJ1cGRhdGVVc2VyRGV0YWlscyIsInNldEl0ZW0iLCJzZXRUaW1lb3V0IiwiaW5wdXRPbGRQYXNzd29yZCIsImlucHV0TmV3UGFzc3dvcmQxIiwiaW5wdXROZXdQYXNzd29yZDIiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwic2V0TmF2YmFyIiwiVE9LRU4iLCJzcGxpdCIsImZpcnN0TmFtZSIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsImdldFByb2ZpbGVQaWMiLCJpZCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDQyxnQkFBdkMsQ0FBeUQsUUFBekQsRUFBbUUsWUFBTztBQUN0RSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBLE1BQU1DLEtBQUssR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDSyxLQUF2QyxDQUE2QyxDQUE3QyxDQUFkOztBQUNBLE1BQUtELEtBQUssS0FBS0UsU0FBZixF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ZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2FjY291bnQuY3NzJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoJztcclxuaW1wb3J0IHsgU1VDQ0VTUywgRVJST1IsIElELCBBUElfQkFTRV9VUkwsIE5BTUUsIEVNQUlMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBzZXRQcm9maWxlUGljLCB1cGRhdGVVc2VyRGV0YWlscyB9IGZyb20gJy4vc2VydmljZXMvcHJvZmlsZSc7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2VkaXRJbWFnZScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCApID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZWRpdEltYWdlJyApLmZpbGVzWzBdO1xyXG4gICAgaWYgKCBpbWFnZSA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvcm1EYXRhLmFwcGVuZCggJ3Byb2ZpbGVwaWMnLCBpbWFnZSApO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCAndXNlcklkJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICkgKTtcclxuICAgIHNldFByb2ZpbGVQaWMoIGZvcm1EYXRhIClcclxuICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcm9maWxlSW1hZ2UnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUltYWdlLnNldEF0dHJpYnV0ZSggJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKCBpbWFnZSApO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoICdQcm9maWxlIHBpYyB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHByb2ZpbGUgcGljOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHByb2ZpbGUgcGljOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBwcm9maWxlIHBpYzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9nb3V0QnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Byb2ZpbGVJbWFnZScgKTtcclxuICAgIHByb2ZpbGVJbWFnZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBgJHtBUElfQkFTRV9VUkx9LyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oIElEICl9LnBuZ2AgKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dEZ1bGxOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE5hbWUnICk7XHJcbiAgICBpbnB1dEZ1bGxOYW1lLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIE5BTUUgKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dEVtYWlsJyApO1xyXG4gICAgaW5wdXRFbWFpbC52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBFTUFJTCApO1xyXG5cclxuICAgIGNvbnN0IGZ1bGxOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcm9maWxlTmFtZScgKTtcclxuICAgIGZ1bGxOYW1lLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBOQU1FICk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2F2ZUNoYW5nZXMnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXROYW1lJyApLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRFbWFpbCcgKS52YWx1ZTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiBpbnB1dEVtYWlsLFxyXG4gICAgICAgIG5hbWU6IGlucHV0RnVsbE5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3VycmVudEVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIEVNQUlMICk7XHJcbiAgICBsZXQgbG9naW5BZ2FpbiA9IGZhbHNlO1xyXG4gICAgaWYgKCBjdXJyZW50RW1haWwgIT09IGlucHV0RW1haWwgKSB7XHJcbiAgICAgICAgbG9naW5BZ2FpbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVc2VyRGV0YWlscyggdXNlckRhdGEsICd1cGRhdGVfdXNlcicgKVxyXG4gICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggRU1BSUwsIHJlc3BvbnNlLmRhdGEuZW1haWwgKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBOQU1FLCByZXNwb25zZS5kYXRhLm5hbWUgKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91ciBkZXRhaWxzIGhhdmUgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgIGlmICggbG9naW5BZ2FpbiApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSB3aWxsIGJlIGxvZ2dlZCBvdXQuIExvZyBpbiBhZ2Fpbi4nLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciB1cGRhdGluZyB5b3VyIGRldGFpbHM6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciB1cGRhdGluZyB5b3VyIGRldGFpbHM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgdXBkYXRpbmcgeW91ciBkZXRhaWxzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd1cGRhdGVQYXNzd29yZCcgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dE9sZFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE9sZFBhc3N3b3JkJyApLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXROZXdQYXNzd29yZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TmV3UGFzc3dvcmQxJyApLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXROZXdQYXNzd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TmV3UGFzc3dvcmQyJyApLnZhbHVlO1xyXG5cclxuICAgIGlmICggaW5wdXROZXdQYXNzd29yZDEgPT09ICcnIHx8IGlucHV0TmV3UGFzc3dvcmQyID09PSAnJyB8fCBpbnB1dE9sZFBhc3N3b3JkID09PSAnJyApIHtcclxuICAgICAgICBhZGRUb2FzdCggJ0RvbnQgZW50ZXIgZW1wdHkgZmllbGRzIPCfmJ4nLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGlucHV0TmV3UGFzc3dvcmQxICE9PSBpbnB1dE5ld1Bhc3N3b3JkMiApIHtcclxuICAgICAgICBhZGRUb2FzdCggJ1lvdXIgbmV3IHBhc3N3b3JkcyBkb250IG1hdGNoJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IGlucHV0T2xkUGFzc3dvcmQsXHJcbiAgICAgICAgbmV3UGFzc3dvcmQ6IGlucHV0TmV3UGFzc3dvcmQxLFxyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVVc2VyRGV0YWlscyggdXNlckRhdGEsICd1cGRhdGVfcGFzc3dvcmQnIClcclxuICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIEVNQUlMLCByZXNwb25zZS5kYXRhLmVtYWlsICk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggTkFNRSwgcmVzcG9uc2UuZGF0YS5uYW1lICk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gdXBkYXRlZCcsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQgJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHVwZGF0aW5nIHBhc3N3b3JkOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHVwZGF0aW5nIHBhc3N3b3JkOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufSApO1xyXG5cclxuaW5pdCgpO1xyXG4iLCJpbXBvcnQgeyBBUElfQkFTRV9VUkwsIElELCBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYXZQaWMnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbnNldE5hdmJhcigpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRQcm9maWxlUGljKCBmb3JtRGF0YSApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3Byb2ZpbGVgLFxyXG4gICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9maWxlUGljKCBpZCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vcHJvZmlsZS9waWMvJHtpZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyRGV0YWlscyggdXNlckRhdGEsIGFjdGlvbiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hY2NvdW50P2FjdGlvbj0ke2FjdGlvbn1gLFxyXG4gICAgICAgIHVzZXJEYXRhLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgc2V0UHJvZmlsZVBpYyxcclxuICAgIGdldFByb2ZpbGVQaWMsXHJcbiAgICB1cGRhdGVVc2VyRGV0YWlscyxcclxufTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cXHJcXG4uYmctZ3JlZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkNDg5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6ICNmOWYyZTc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lIHtcXHJcXG4gICAgY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tb3V0bGluZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmUtcmVkIHtcXHJcXG4gICAgY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVmZjM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2YxNDE2YztcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tb3V0bGluZS1yZWQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZWZmMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDE2YztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZjlmMmU3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTU1LCA3MiUsIDQ0JSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRleHQge1xcclxcbiAgICBjb2xvcjogIzVlNjI3ODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVmOGZhO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0SGVscCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICM1ZTYyNzg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZiZjlmNjtcXHJcXG4gICAgY29sb3I6ICMxODFjMzI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1mb3JtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9hY2NvdW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcbi5iZy1ncmVlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGQ0ODk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBjb2xvcjogI2Y5ZjJlNztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLW91dGxpbmUge1xcclxcbiAgICBjb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjBkNDg5O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGQ0ODk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzIwZDQ4OTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24tb3V0bGluZS1yZWQge1xcclxcbiAgICBjb2xvcjogI2YxNDE2YztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZmMztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1vdXRsaW5lLXJlZDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZlZmYzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0MTZjO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmMTQxNmM7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmOWYyZTc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNTUsIDcyJSwgNDQlKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjNWU2Mjc4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmNWY4ZmE7XFxyXFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRIZWxwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzVlNjI3ODtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmJmOWY2O1xcclxcbiAgICBjb2xvcjogIzE4MWMzMjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLWZvcm0ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FjY291bnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hY2NvdW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFjY291bnRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfc3RhYmxlX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWdlbmVyLTE1NzQwNlwiLFwicHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19hdXRoX2pzLXB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjLTRlYTJhMVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9hY2NvdW50LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9