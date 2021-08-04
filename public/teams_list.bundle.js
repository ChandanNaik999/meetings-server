/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./public/js/data/add_team_form.js":
/*!*****************************************!*\
  !*** ./public/js/data/add_team_form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
var ADD_TEAM_FORM = {
  "name": "Agile team 57",
  "shortName": "agilenew",
  "description": "Team spreading awareness about Agile practices at Zwiggy",
  "members": []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ADD_TEAM_FORM);

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

/***/ "./public/js/services/teams.js":
/*!*************************************!*\
  !*** ./public/js/services/teams.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTeams": () => (/* binding */ fetchTeams),
/* harmony export */   "addTeam": () => (/* binding */ addTeam),
/* harmony export */   "addMemberToTeam": () => (/* binding */ addMemberToTeam),
/* harmony export */   "excuseFromTeam": () => (/* binding */ excuseFromTeam)
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







function fetchTeams() {
  return _fetchTeams.apply(this, arguments);
}

function _fetchTeams() {
  _fetchTeams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
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
  return _fetchTeams.apply(this, arguments);
}

function addTeam(_x) {
  return _addTeam.apply(this, arguments);
}

function _addTeam() {
  _addTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(teamJSON) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams/"), teamJSON, {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
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
  return _addTeam.apply(this, arguments);
}

function addMemberToTeam(_x2, _x3) {
  return _addMemberToTeam.apply(this, arguments);
}

function _addMemberToTeam() {
  _addMemberToTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(team, email) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams/").concat(team['_id'], "?action=add_member&email=").concat(email), {}, {
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
  return _addMemberToTeam.apply(this, arguments);
}

function excuseFromTeam(_x4) {
  return _excuseFromTeam.apply(this, arguments);
}

function _excuseFromTeam() {
  _excuseFromTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(team) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/teams/").concat(team['_id'], "?action=remove_member"), {}, {
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
  return _excuseFromTeam.apply(this, arguments);
}



/***/ }),

/***/ "./public/js/services/user_management.js":
/*!***********************************************!*\
  !*** ./public/js/services/user_management.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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






/**
 * Get the list of all registered users.
 * @returns list of all users
 */

function getAllUsers() {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL, "/users"), {
              headers: {
                Authorization: "".concat((0,_auth__WEBPACK_IMPORTED_MODULE_2__.getToken)())
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
  return _getAllUsers.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllUsers);

/***/ }),

/***/ "./public/js/teams_list.js":
/*!*********************************!*\
  !*** ./public/js/teams_list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_teams_list_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/teams_list.css */ "./public/css/teams_list.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_teams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/teams */ "./public/js/services/teams.js");
/* harmony import */ var _data_add_team_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/add_team_form */ "./public/js/data/add_team_form.js");
/* harmony import */ var _services_user_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user_management */ "./public/js/services/user_management.js");









var users = [];

function populateTeams(teams) {
  var meetingsListDiv = document.getElementById('teamsList');
  meetingsListDiv.innerHTML = '';

  if (teams && teams.length > 0) {
    var meetingsListTitle = document.getElementById('teamsListTitle');
    meetingsListTitle.innerHTML = 'View and edit the teams that you are part of';
    teams.forEach(function (team) {
      var members = [];
      team['members'].forEach(function (member) {
        members.push(member['email']);
      });
      var card = document.createElement('div'); // card.setAttribute( 'class', 'card my-col p-3 m-2 col-12 col-sm-6 col-md-4' );

      card.setAttribute('class', 'card p-3 m-2');
      var cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      var cardTitle = document.createElement('h5');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerHTML = team['name'];
      cardBody.appendChild(cardTitle);
      var cardText = document.createElement('p');
      cardTitle.setAttribute('class', 'card-text');
      cardText.innerHTML = "@".concat(team['shortName']);
      cardBody.appendChild(cardText);
      var buttonExcuse = document.createElement('button');
      buttonExcuse.innerHTML = 'Leave team';
      buttonExcuse.setAttribute('class', 'button-outline-red px-4');
      buttonExcuse.addEventListener('click', function () {
        (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.excuseFromTeam)(team).then(function (response) {
          if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('You have been removed from the team', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS);
            card.remove();
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
          } catch (_unused) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
          }
        });
      });
      cardBody.appendChild(buttonExcuse);
      var hr = document.createElement('hr');
      hr.setAttribute('class', 'my-3');
      cardBody.appendChild(hr);
      var teamMembers = document.createElement('p');
      teamMembers.innerHTML = "<strong>Members: </strong> ".concat(members.join(', '));
      cardBody.appendChild(teamMembers);
      var selectMemberDiv = document.createElement('div');
      selectMemberDiv.setAttribute('class', 'row gy-2 gx-3 align-items-center');
      var colSelectMember = document.createElement('div');
      colSelectMember.setAttribute('class', 'col-auto');
      var labelSelectMember = document.createElement('label');
      labelSelectMember.setAttribute('class', 'visually-hidden');
      labelSelectMember.setAttribute('for', 'selectMember');
      colSelectMember.appendChild(labelSelectMember);
      var selectMember = document.createElement('select');
      selectMember.setAttribute('class', 'form-select');
      selectMember.setAttribute('id', 'selectMember');
      selectMember.setAttribute('aria-label', 'Select Member');
      var nonMembers = [];
      users.forEach(function (user) {
        if (members.includes(user['email']) === false) {
          nonMembers.push(user);
        }
      });
      selectMember.innerHTML = '<option value="none" selected>Select member</option>';
      nonMembers.forEach(function (nonMember) {
        selectMember.innerHTML += "<option value=\"".concat(nonMember['email'], "\">").concat(nonMember['email'], "</option>");
      });
      colSelectMember.appendChild(selectMember);
      selectMemberDiv.appendChild(colSelectMember);
      var colSelectMember2 = document.createElement('div');
      colSelectMember2.setAttribute('class', 'col-auto');
      var colSelectButton = document.createElement('button');
      colSelectButton.setAttribute('class', 'button mx-2');
      colSelectButton.innerHTML = 'Add member';
      colSelectButton.addEventListener('click', function () {
        if (selectMember.value !== 'none') {
          (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.addMemberToTeam)(team, selectMember.value).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
              members.push(selectMember.value);
              teamMembers.innerHTML = "<strong>Members: </strong> ".concat(members.join(', '));
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Added member successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS);
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding member: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding member: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
            } catch (_unused2) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding member: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
            }
          });
        }
      });
      colSelectMember2.appendChild(colSelectButton);
      selectMemberDiv.appendChild(colSelectMember2);
      cardBody.appendChild(selectMemberDiv);
      card.appendChild(cardBody);
      meetingsListDiv.appendChild(card);
    });
  } else {
    var _meetingsListTitle = document.getElementById('teamsListTitle');

    _meetingsListTitle.innerHTML = 'Sorry:( you are not part of any team.';
  }
}

function init() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN) === null) {
    window.location = '/login';
  } // fetch your teams


  (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.fetchTeams)().then(function (teams) {
    if (teams.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
      (0,_services_user_management__WEBPACK_IMPORTED_MODULE_8__.default)().then(function (_users) {
        if (_users.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
          users = _users.data;
          populateTeams(teams.data);
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(_users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
        } catch (_unused3) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching teams: ".concat(teams.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching teams: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    } catch (_unused4) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching teams: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  });
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateTeam(team) {
  var re = /@[a-zA-Z\-0-9]+$/;
  return re.test(String(team).toLowerCase());
}

function attendeeType(attendee) {
  var type = '';

  if (validateEmail(attendee)) {
    type = 'email';
  } else if (validateTeam(attendee)) {
    type = 'team';
  } else {
    type = 'none';
  }

  return type;
}

function resetForm() {
  document.getElementById('inputTeamName').value = '';
  document.getElementById('inputShortName').value = '';
  document.getElementById('teamDescription').value = '';
  document.getElementById('inputMembers').value = '';
}

var myModal = null;
document.getElementById('addNewTeamButton').addEventListener('click', function () {
  myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
});
document.getElementById('modalDismiss').addEventListener('click', function () {
  // const myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
  myModal.hide();
});
document.getElementById('submitAddTeam').addEventListener('click', function () {
  // const myModal = new bootstrap.Modal( document.getElementById( 'myModal' ) );
  myModal.hide();
  var teamName = document.getElementById('inputTeamName').value;

  if (teamName.length === 0) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Please enter a  team name', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    return;
  }

  var teamShortName = document.getElementById('inputShortName').value;

  if (teamName.length === 0) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Please enter a team Short name.', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    return;
  }

  var teamDescription = document.getElementById('teamDescription').value;

  if (teamName.length <= 0) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Please enter a longer description ( 10 characters min )', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    return;
  }

  var teamMembers = document.getElementById('inputMembers').value.replace(/\s+/g, '').split(','); // TODO: Validation

  var submitJSON = _data_add_team_form__WEBPACK_IMPORTED_MODULE_7__.default;
  submitJSON['name'] = teamName;
  submitJSON['shortName'] = teamShortName;
  submitJSON['description'] = teamDescription;
  var attendeesJSON = [];

  for (var idxAtt = 0; idxAtt < teamMembers.length; idxAtt += 1) {
    var member = teamMembers[idxAtt];

    switch (attendeeType(member)) {
      case 'email':
        for (var idx = 0; idx < users.length; idx += 1) {
          if (member.toLowerCase() === users[idx]['email'].toLowerCase()) {
            attendeesJSON.push({
              userId: users[idx]['_id'],
              email: users[idx]['email']
            });
            break;
          }
        }

        break;

      default:
        break;
    }
  }

  submitJSON['members'] = attendeesJSON;
  (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.addTeam)(submitJSON).then(function (response) {
    if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
      myModal.hide();
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('Team added successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS);
      resetForm();
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding team: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  })["catch"](function (error) {
    myModal.hide();

    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding team: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    } catch (_unused5) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding team: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_4__.ERROR);
    }
  });
});
init();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/teams_list.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/teams_list.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.my-col {\r\n    flex-basis: 30%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.my-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));\r\n}", "",{"version":3,"sources":["webpack://./public/css/teams_list.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,2DAA2D;AAC/D","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.my-col {\r\n    flex-basis: 30%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.my-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/teams_list.css":
/*!***********************************!*\
  !*** ./public/css/teams_list.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./teams_list.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/teams_list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_teams_list_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"teams_list": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0"], () => (__webpack_require__("./public/js/teams_list.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2N1c3RvbXMvYXBwLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL2RhdGEvYWRkX3RlYW1fZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZXJ2aWNlcy9hdXRoLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy90ZWFtc19saXN0LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvdGVhbXNfbGlzdC5jc3M/NzczYyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJzaG93Qm9keU9uTG9hZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcm9jZXNzIiwiRU1BSUwiLCJTVUNDRVNTIiwiRVJST1IiLCJhZGRUb2FzdCIsIm1lc3NhZ2UiLCJlbGVtZW50Iiwic3RhdGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJteXRvYXN0IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwicCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiYWRkIiwic2V0VGltZW91dCIsIkFERF9URUFNX0ZPUk0iLCJyZWdpc3RlciIsImNyZWRlbnRpYWxzIiwiYXhpb3MiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJkYXRhIiwibG9naW4iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiZ2V0VG9rZW4iLCJmZXRjaFRlYW1zIiwiQXV0aG9yaXphdGlvbiIsImFkZFRlYW0iLCJ0ZWFtSlNPTiIsImFkZE1lbWJlclRvVGVhbSIsInRlYW0iLCJlbWFpbCIsImV4Y3VzZUZyb21UZWFtIiwiZ2V0QWxsVXNlcnMiLCJ1c2VycyIsInBvcHVsYXRlVGVhbXMiLCJ0ZWFtcyIsIm1lZXRpbmdzTGlzdERpdiIsIm1lZXRpbmdzTGlzdFRpdGxlIiwiZm9yRWFjaCIsIm1lbWJlcnMiLCJtZW1iZXIiLCJwdXNoIiwiY2FyZCIsImNhcmRCb2R5IiwiY2FyZFRpdGxlIiwiY2FyZFRleHQiLCJidXR0b25FeGN1c2UiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsImVycm9yIiwiZGVzY3JpcHRpb24iLCJociIsInRlYW1NZW1iZXJzIiwiam9pbiIsInNlbGVjdE1lbWJlckRpdiIsImNvbFNlbGVjdE1lbWJlciIsImxhYmVsU2VsZWN0TWVtYmVyIiwic2VsZWN0TWVtYmVyIiwibm9uTWVtYmVycyIsInVzZXIiLCJpbmNsdWRlcyIsIm5vbk1lbWJlciIsImNvbFNlbGVjdE1lbWJlcjIiLCJjb2xTZWxlY3RCdXR0b24iLCJ2YWx1ZSIsImluaXQiLCJfdXNlcnMiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJhdHRlbmRlZVR5cGUiLCJhdHRlbmRlZSIsInR5cGUiLCJyZXNldEZvcm0iLCJteU1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJzaG93IiwiaGlkZSIsInRlYW1OYW1lIiwidGVhbVNob3J0TmFtZSIsInRlYW1EZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJzdWJtaXRKU09OIiwiYXR0ZW5kZWVzSlNPTiIsImlkeEF0dCIsImlkeCIsInVzZXJJZCIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixNQUFLQyxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBRUQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsUUFBekIsQ0FBckI7QUFDQUYsY0FBWSxDQUFDRyxZQUFiLENBQTJCLEtBQTNCLFlBQXFDQyxvREFBckMsY0FBcURULFlBQVksQ0FBQ0MsT0FBYixDQUFzQlMsMENBQXRCLENBQXJEOztBQUVBLDhCQUFvQlYsWUFB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QkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoidGVhbXNfbGlzdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfQkFTRV9VUkwsIElELCBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYXZQaWMnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCb2R5T25Mb2FkKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxufVxyXG5zaG93Qm9keU9uTG9hZCgpO1xyXG5zZXROYXZiYXIoKTtcclxuIiwiLy8gY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9teW1lZXRpbmdzYXBwLmhlcm9rdWFwcC5jb20vYXBpJztcclxuY29uc3QgeyBBUElfQkFTRV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG5jb25zdCBUT0tFTiA9ICd0b2tlbic7XHJcbmNvbnN0IEVNQUlMID0gJ2VtYWlsJztcclxuY29uc3QgTkFNRSA9ICduYW1lJztcclxuY29uc3QgSUQgPSAnaWQnO1xyXG5cclxuY29uc3QgU1VDQ0VTUyA9ICdzdWNjZXNzJztcclxuY29uc3QgRVJST1IgPSAnZXJyb3InO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEFQSV9CQVNFX1VSTCxcclxuICAgIFRPS0VOLFxyXG4gICAgRU1BSUwsXHJcbiAgICBOQU1FLFxyXG4gICAgSUQsXHJcbiAgICBTVUNDRVNTLFxyXG4gICAgRVJST1IsXHJcbn07XHJcbiIsImltcG9ydCB7IFNVQ0NFU1MgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9hc3QoIG1lc3NhZ2UsIGVsZW1lbnQsIHN0YXRlICkge1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLm1heCggTWF0aC5jZWlsKCAoIG1lc3NhZ2UubGVuZ3RoICogMTAwMCApIC8gMjUgKSwgMTEwMCApO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteXRvYXN0LXdyYXBwZXInICk7XHJcblxyXG4gICAgY29uc3QgbXl0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICBpZiAoIHN0YXRlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgIG15dG9hc3Quc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdCBteXRvYXN0LXN1Y2Nlc3MnICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG15dG9hc3Quc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXl0b2FzdCBteXRvYXN0LWVycm9yJyApO1xyXG4gICAgfVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCggbXl0b2FzdCApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb250ZW50JyApO1xyXG4gICAgbXl0b2FzdC5hcHBlbmRDaGlsZCggY29udGVudCApO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgIHAuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHAuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoIHAgKTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKCB3cmFwcGVyICk7XHJcblxyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnaGlkZScgKTtcclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ3Nob3cnICk7XHJcbiAgICBzZXRUaW1lb3V0KCAoICkgPT4ge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ2hpZGUnICk7XHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDEwMDAgKTtcclxuICAgIH0sIGR1cmF0aW9uICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRvYXN0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5jb25zdCBBRERfVEVBTV9GT1JNID0ge1xyXG4gICAgXCJuYW1lXCI6IFwiQWdpbGUgdGVhbSA1N1wiLFxyXG4gICAgXCJzaG9ydE5hbWVcIjogXCJhZ2lsZW5ld1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRlYW0gc3ByZWFkaW5nIGF3YXJlbmVzcyBhYm91dCBBZ2lsZSBwcmFjdGljZXMgYXQgWndpZ2d5XCIsXHJcbiAgICBcIm1lbWJlcnNcIjogW11cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRERfVEVBTV9GT1JNOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCwgVE9LRU4sIEVNQUlMLCBOQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlZGVudGlhbHMgQW4gb2JqZWN0IHdpdGggbmFtZSwgZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlZ2lzdGVyIHJlc3BvbnNlIGRhdGEsIG9yIHJlamVjdHMgaWYgcmVxdWVzdHNcclxuICogdG8gcmVnaXN0ZXIgZmFpbHNcclxuICogKiBAZXhhbXBsZSBjcmVkZW50aWFsc1xyXG4gKiB7XHJcbiAqICBcIm5hbWVcIjogXCJQcmFzaGFudGggUHVyYW5pa1wiLFxyXG4gKiAgXCJlbWFpbFwiOiBcInB1cmFuaTJAZXhhbXBsZS5jb21cIixcclxuICogIFwicGFzc3dvcmRcIjogXCJQdXJhbmlAMlwiXHJcbiAqIH1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCBjcmVkZW50aWFscyApIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2F1dGgvcmVnaXN0ZXJgLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtvYmplY3R9IGNyZWRlbnRpYWxzIEFuIG9iamVjdCB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2dpbiByZXNwb25zZSBkYXRhLCBvciByZWplY3RzIGlmIHJlcXVlc3RzIHRvXHJcbiAqIGxvZ2luIGZhaWxzXHJcbiAqIEBleGFtcGxlIGNyZWRlbnRpYWxzXHJcbiAqIHtcclxuICogIFwiZW1haWxcIjogXCJwdXJhbmkyMEBleGFtcGxlLmNvbVwiLFxyXG4gKiAgXCJwYXNzd29yZFwiOiBcIlB1cmFuaUAyXCJcclxuICogfVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oIGNyZWRlbnRpYWxzICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXV0aC9sb2dpbmAsXHJcbiAgICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBhdXRoIHRva2VuIGFuZCBlbWFpbCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIFRPS0VOICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggTkFNRSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIEVNQUlMICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqIEByZXR1cm5zIFRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZvciBsb2dnZWQgaW4gdXNlciwgb3IgbnVsbCBpZiBubyBvbmUgaXMgbG9nZ2VkIGluXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgZ2V0VG9rZW4sXHJcbiAgICBsb2dpbixcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRUZWFtKCB0ZWFtSlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zL2AsXHJcbiAgICAgICAgdGVhbUpTT04sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlclRvVGVhbSggdGVhbSwgZW1haWwgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvJHt0ZWFtWydfaWQnXX0/YWN0aW9uPWFkZF9tZW1iZXImZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249cmVtb3ZlX21lbWJlcmAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaFRlYW1zLFxyXG4gICAgYWRkVGVhbSxcclxuICAgIGFkZE1lbWJlclRvVGVhbSxcclxuICAgIGV4Y3VzZUZyb21UZWFtLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCB1c2Vycy5cclxuICogQHJldHVybnMgbGlzdCBvZiBhbGwgdXNlcnNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS91c2Vyc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzO1xyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvdGVhbXNfbGlzdC5jc3MnO1xyXG5pbXBvcnQgYWRkVG9hc3QgZnJvbSAnLi9jdXN0b21zL2FwcCc7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIEVSUk9SLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCB7IGFkZE1lbWJlclRvVGVhbSwgZmV0Y2hUZWFtcywgZXhjdXNlRnJvbVRlYW0sIGFkZFRlYW0gfSBmcm9tICcuL3NlcnZpY2VzL3RlYW1zJztcclxuaW1wb3J0IEFERF9URUFNX0ZPUk0gZnJvbSAnLi9kYXRhL2FkZF90ZWFtX2Zvcm0nO1xyXG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSAnLi9zZXJ2aWNlcy91c2VyX21hbmFnZW1lbnQnO1xyXG5cclxubGV0IHVzZXJzID0gW107XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZVRlYW1zKCB0ZWFtcyApIHtcclxuICAgIGNvbnN0IG1lZXRpbmdzTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbXNMaXN0JyApO1xyXG4gICAgbWVldGluZ3NMaXN0RGl2LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmICggdGVhbXMgJiYgdGVhbXMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbXNMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ1ZpZXcgYW5kIGVkaXQgdGhlIHRlYW1zIHRoYXQgeW91IGFyZSBwYXJ0IG9mJztcclxuICAgICAgICB0ZWFtcy5mb3JFYWNoKCAoIHRlYW0gKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdGVhbVsnbWVtYmVycyddLmZvckVhY2goICggbWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVtYmVycy5wdXNoKCBtZW1iZXJbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIC8vIGNhcmQuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZCBteS1jb2wgcC0zIG0tMiBjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQnICk7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZCBwLTMgbS0yJyApO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtYm9keScgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdoNScgKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtdGl0bGUnICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSB0ZWFtWyduYW1lJ107XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBjYXJkVGl0bGUgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLXRleHQnICk7XHJcbiAgICAgICAgICAgIGNhcmRUZXh0LmlubmVySFRNTCA9IGBAJHt0ZWFtWydzaG9ydE5hbWUnXX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRleHQgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkV4Y3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5pbm5lckhUTUwgPSAnTGVhdmUgdGVhbSc7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdidXR0b24tb3V0bGluZS1yZWQgcHgtNCcgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4Y3VzZUZyb21UZWFtKCB0ZWFtIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdZb3UgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgdGVhbScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBidXR0b25FeGN1c2UgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2hyJyApO1xyXG4gICAgICAgICAgICBoci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteS0zJyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggaHIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1NZW1iZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIHRlYW1NZW1iZXJzLmlubmVySFRNTCA9IGA8c3Ryb25nPk1lbWJlcnM6IDwvc3Ryb25nPiAke21lbWJlcnMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCB0ZWFtTWVtYmVycyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdyBneS0yIGd4LTMgYWxpZ24taXRlbXMtY2VudGVyJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGFiZWwnICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3Zpc3VhbGx5LWhpZGRlbicgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnZm9yJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBsYWJlbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2Zvcm0tc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnaWQnLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdTZWxlY3QgTWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb25zdCBub25NZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goICggdXNlciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVtYmVycy5pbmNsdWRlcyggdXNlclsnZW1haWwnXSApID09PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBub25NZW1iZXJzLnB1c2goIHVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwibm9uZVwiIHNlbGVjdGVkPlNlbGVjdCBtZW1iZXI8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICBub25NZW1iZXJzLmZvckVhY2goICggbm9uTWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TWVtYmVyLmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7bm9uTWVtYmVyWydlbWFpbCddfVwiPiR7bm9uTWVtYmVyWydlbWFpbCddfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyMi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0bycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdidXR0b24gbXgtMicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmlubmVySFRNTCA9ICdBZGQgbWVtYmVyJztcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0TWVtYmVyLnZhbHVlICE9PSAnbm9uZScgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTWVtYmVyVG9UZWFtKCB0ZWFtLCBzZWxlY3RNZW1iZXIudmFsdWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLnB1c2goIHNlbGVjdE1lbWJlci52YWx1ZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1NZW1iZXJzLmlubmVySFRNTCA9IGA8c3Ryb25nPk1lbWJlcnM6IDwvc3Ryb25nPiAke21lbWJlcnMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdBZGRlZCBtZW1iZXIgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVtYmVyOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLmFwcGVuZENoaWxkKCBjb2xTZWxlY3RCdXR0b24gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyMiApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyRGl2ICk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoIGNhcmRCb2R5ICk7XHJcbiAgICAgICAgICAgIG1lZXRpbmdzTGlzdERpdi5hcHBlbmRDaGlsZCggY2FyZCApO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdTb3JyeTooIHlvdSBhcmUgbm90IHBhcnQgb2YgYW55IHRlYW0uJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgaWYgYXV0aG9yaXphdGlvbiB0b2tlbiBkb2VzbnQgZXhpc3RcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmV0Y2ggeW91ciB0ZWFtc1xyXG4gICAgZmV0Y2hUZWFtcygpXHJcbiAgICAgICAgLnRoZW4oICggdGVhbXMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGVhbXMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCBfdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggX3VzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycyA9IF91c2Vycy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVUZWFtcyggdGVhbXMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtfdXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke3RlYW1zLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggZW1haWwgKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlID0gL0BbYS16QS1aXFwtMC05XSskLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIHRlYW0gKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGVuZGVlVHlwZSggYXR0ZW5kZWUgKSB7XHJcbiAgICBsZXQgdHlwZSA9ICcnO1xyXG4gICAgaWYgKCB2YWxpZGF0ZUVtYWlsKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAnZW1haWwnO1xyXG4gICAgfSBlbHNlIGlmICggdmFsaWRhdGVUZWFtKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAndGVhbSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR5cGUgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFRlYW1OYW1lJyApLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0U2hvcnROYW1lJyApLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1EZXNjcmlwdGlvbicgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lbWJlcnMnICkudmFsdWUgPSAnJztcclxufVxyXG5cclxubGV0IG15TW9kYWwgPSBudWxsO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhZGROZXdUZWFtQnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuc2hvdygpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21vZGFsRGlzbWlzcycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdteU1vZGFsJyApICk7XHJcbiAgICBteU1vZGFsLmhpZGUoKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdWJtaXRBZGRUZWFtJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG5cclxuICAgIGNvbnN0IHRlYW1OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFRlYW1OYW1lJyApLnZhbHVlO1xyXG4gICAgaWYgKCB0ZWFtTmFtZS5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoICdQbGVhc2UgZW50ZXIgYSAgdGVhbSBuYW1lJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZWFtU2hvcnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFNob3J0TmFtZScgKS52YWx1ZTtcclxuICAgIGlmICggdGVhbU5hbWUubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnUGxlYXNlIGVudGVyIGEgdGVhbSBTaG9ydCBuYW1lLicsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlYW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbURlc2NyaXB0aW9uJyApLnZhbHVlO1xyXG5cclxuICAgIGlmICggdGVhbU5hbWUubGVuZ3RoIDw9IDAgKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoICdQbGVhc2UgZW50ZXIgYSBsb25nZXIgZGVzY3JpcHRpb24gKCAxMCBjaGFyYWN0ZXJzIG1pbiApJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZWFtTWVtYmVycyA9ICggKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TWVtYmVycycgKS52YWx1ZSApLnJlcGxhY2UoIC9cXHMrL2csICcnICkgKS5zcGxpdCggJywnICk7XHJcblxyXG4gICAgLy8gVE9ETzogVmFsaWRhdGlvblxyXG4gICAgY29uc3Qgc3VibWl0SlNPTiA9IEFERF9URUFNX0ZPUk07XHJcbiAgICBzdWJtaXRKU09OWyduYW1lJ10gPSB0ZWFtTmFtZTtcclxuICAgIHN1Ym1pdEpTT05bJ3Nob3J0TmFtZSddID0gdGVhbVNob3J0TmFtZTtcclxuICAgIHN1Ym1pdEpTT05bJ2Rlc2NyaXB0aW9uJ10gPSB0ZWFtRGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBhdHRlbmRlZXNKU09OID0gW107XHJcblxyXG4gICAgZm9yICggbGV0IGlkeEF0dCA9IDA7IGlkeEF0dCA8IHRlYW1NZW1iZXJzLmxlbmd0aDsgaWR4QXR0ICs9IDEgKSB7XHJcbiAgICAgICAgY29uc3QgbWVtYmVyID0gdGVhbU1lbWJlcnNbaWR4QXR0XTtcclxuICAgICAgICBzd2l0Y2ggKCBhdHRlbmRlZVR5cGUoIG1lbWJlciApICkge1xyXG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgZm9yICggbGV0IGlkeCA9IDA7IGlkeCA8IHVzZXJzLmxlbmd0aDsgaWR4ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lbWJlci50b0xvd2VyQ2FzZSgpID09PSB1c2Vyc1tpZHhdWydlbWFpbCddLnRvTG93ZXJDYXNlKCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzSlNPTi5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcnNbaWR4XVsnX2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2Vyc1tpZHhdWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdWJtaXRKU09OWydtZW1iZXJzJ10gPSBhdHRlbmRlZXNKU09OO1xyXG5cclxuICAgIGFkZFRlYW0oIHN1Ym1pdEpTT04gKVxyXG4gICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBteU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnVGVhbSBhZGRlZCBzdWNjZXNzZnVsbHknLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxNTAwICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyB0ZWFtOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgbXlNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyB0ZWFtOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyB0ZWFtOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufSApO1xyXG5cclxuaW5pdCgpO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWNvbCB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDMwJTtcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5teS1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxOXJlbSwgMWZyKSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3MvdGVhbXNfbGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtBQUMvRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5teS1jb2wge1xcclxcbiAgICBmbGV4LWJhc2lzOiAzMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTlyZW0sIDFmcikpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlYW1zX2xpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZWFtc19saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInRlYW1zX2xpc3RcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfY3NzX2Jvb3RzdHJhcF9taW5fY3NzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItZWZkZGY3XCIsXCJwdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zY3N2Z194bWxuc18yN2h0dHBfd3d3X3czX29yZ18yMDAwX3N2Z18yN192aWV3Qm94XzI3LTQtYjAxYmUwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL3RlYW1zX2xpc3QuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=