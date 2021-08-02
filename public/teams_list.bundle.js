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
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth */ "./public/js/services/auth.js");
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

  document.getElementById('logoutLink').addEventListener('click', function () {
    (0,_services_auth__WEBPACK_IMPORTED_MODULE_1__.logout)();
    window.location = '/login';
  });

  var _localStorage$getItem = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.NAME).split(' '),
      _localStorage$getItem2 = _slicedToArray(_localStorage$getItem, 1),
      firstName = _localStorage$getItem2[0];

  document.getElementById('nameNav').innerHTML = firstName;
}

setNavbar();

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
      var card = document.createElement('div');
      card.setAttribute('class', 'card my-col p-3 m-2');
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
      buttonExcuse.innerHTML = 'Excuse Yourself';
      buttonExcuse.setAttribute('class', 'btn btn-danger');
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
      colSelectButton.setAttribute('class', 'btn btn-info text-white');
      colSelectButton.innerHTML = 'Add';
      colSelectButton.addEventListener('click', function () {
        if (selectMember.value !== 'none') {
          (0,_services_teams__WEBPACK_IMPORTED_MODULE_6__.addMemberToTeam)(team, selectMember.value).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_4__.SUCCESS) {
              members.push(selectMember.value);
              teamMembers.innerHTML = "<strong>Attendees: </strong> ".concat(members.join(', '));
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
  var teamShortName = document.getElementById('inputShortName').value;
  var teamDescription = document.getElementById('teamDescription').value;
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.my-col {\r\n    flex-basis: 30%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}", "",{"version":3,"sources":["webpack://./public/css/teams_list.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.my-col {\r\n    flex-basis: 30%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/teams_list.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvZGF0YS9hZGRfdGVhbV9mb3JtLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy90ZWFtc19saXN0LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvdGVhbXNfbGlzdC5jc3M/NzczYyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ291dCIsIk5BTUUiLCJzcGxpdCIsImZpcnN0TmFtZSIsImlubmVySFRNTCIsIkFERF9URUFNX0ZPUk0iLCJmZXRjaFRlYW1zIiwiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwicmVzcG9uc2UiLCJkYXRhIiwiYWRkVGVhbSIsInRlYW1KU09OIiwiYWRkTWVtYmVyVG9UZWFtIiwidGVhbSIsImVtYWlsIiwiZXhjdXNlRnJvbVRlYW0iLCJnZXRBbGxVc2VycyIsInVzZXJzIiwicG9wdWxhdGVUZWFtcyIsInRlYW1zIiwibWVldGluZ3NMaXN0RGl2IiwibGVuZ3RoIiwibWVldGluZ3NMaXN0VGl0bGUiLCJmb3JFYWNoIiwibWVtYmVycyIsIm1lbWJlciIsInB1c2giLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNhcmRCb2R5IiwiY2FyZFRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJjYXJkVGV4dCIsImJ1dHRvbkV4Y3VzZSIsInRoZW4iLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImFkZFRvYXN0IiwiYm9keSIsInJlbW92ZSIsIkVSUk9SIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsImhyIiwidGVhbU1lbWJlcnMiLCJqb2luIiwic2VsZWN0TWVtYmVyRGl2IiwiY29sU2VsZWN0TWVtYmVyIiwibGFiZWxTZWxlY3RNZW1iZXIiLCJzZWxlY3RNZW1iZXIiLCJub25NZW1iZXJzIiwidXNlciIsImluY2x1ZGVzIiwibm9uTWVtYmVyIiwiY29sU2VsZWN0TWVtYmVyMiIsImNvbFNlbGVjdEJ1dHRvbiIsInZhbHVlIiwiaW5pdCIsIl91c2VycyIsInZhbGlkYXRlRW1haWwiLCJyZSIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInZhbGlkYXRlVGVhbSIsImF0dGVuZGVlVHlwZSIsImF0dGVuZGVlIiwidHlwZSIsIm15TW9kYWwiLCJib290c3RyYXAiLCJNb2RhbCIsInNob3ciLCJoaWRlIiwidGVhbU5hbWUiLCJ0ZWFtU2hvcnROYW1lIiwidGVhbURlc2NyaXB0aW9uIiwicmVwbGFjZSIsInN1Ym1pdEpTT04iLCJhdHRlbmRlZXNKU09OIiwiaWR4QXR0IiwiaWR4IiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQ2pCLE1BQUtDLFlBQVksQ0FBQ0MsT0FBYixDQUFzQkMsNkNBQXRCLE1BQWtDLElBQXZDLEVBQThDO0FBQzFDQyxVQUFNLENBQUNDLFFBQVAsR0FBa0IsUUFBbEI7QUFDSDs7QUFDREMsVUFBUSxDQUFDQyxjQUFULENBQXlCLFlBQXpCLEVBQXdDQyxnQkFBeEMsQ0FBMEQsT0FBMUQsRUFBbUUsWUFBTTtBQUNyRUMsMERBQU07QUFDTkwsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0gsR0FIRDs7QUFJQSw4QkFBb0JKLFlBQVksQ0FBQ0MsT0FBYixDQUFzQlEsNENBQXRCLEVBQTZCQyxLQUE3QixDQUFvQyxHQUFwQyxDQUFwQjtBQUFBO0FBQUEsTUFBT0MsU0FBUDs7QUFDQU4sVUFBUSxDQUFDQyxjQUFULENBQXlCLFNBQXpCLEVBQXFDTSxTQUFyQyxHQUFpREQsU0FBakQ7QUFDSDs7QUFFRFosU0FBUyxHOzs7Ozs7Ozs7Ozs7OztBQ2ZUO0FBQ0EsSUFBTWMsYUFBYSxHQUFHO0FBQ2xCLFVBQVEsZUFEVTtBQUVsQixlQUFhLFVBRks7QUFHbEIsaUJBQWUsMERBSEc7QUFJbEIsYUFBVztBQUpPLENBQXRCO0FBUUEsaUVBQWVBLGFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQUVlQyxVOzs7Ozt3RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQkMsZ0RBQUEsV0FDaEJD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dCI6WyJpbXBvcnQgeyBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvZ291dExpbmsnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfSApO1xyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbnNldE5hdmJhcigpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5jb25zdCBBRERfVEVBTV9GT1JNID0ge1xyXG4gICAgXCJuYW1lXCI6IFwiQWdpbGUgdGVhbSA1N1wiLFxyXG4gICAgXCJzaG9ydE5hbWVcIjogXCJhZ2lsZW5ld1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRlYW0gc3ByZWFkaW5nIGF3YXJlbmVzcyBhYm91dCBBZ2lsZSBwcmFjdGljZXMgYXQgWndpZ2d5XCIsXHJcbiAgICBcIm1lbWJlcnNcIjogW11cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRERfVEVBTV9GT1JNOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbXMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkVGVhbSggdGVhbUpTT04gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy9gLFxyXG4gICAgICAgIHRlYW1KU09OLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRNZW1iZXJUb1RlYW0oIHRlYW0sIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1hZGRfbWVtYmVyJmVtYWlsPSR7ZW1haWx9YCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjdXNlRnJvbVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvJHt0ZWFtWydfaWQnXX0/YWN0aW9uPXJlbW92ZV9tZW1iZXJgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZmV0Y2hUZWFtcyxcclxuICAgIGFkZFRlYW0sXHJcbiAgICBhZGRNZW1iZXJUb1RlYW0sXHJcbiAgICBleGN1c2VGcm9tVGVhbSxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgdXNlcnMuXHJcbiAqIEByZXR1cm5zIGxpc3Qgb2YgYWxsIHVzZXJzXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdXNlcnNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxVc2VycztcclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3RlYW1zX2xpc3QuY3NzJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgeyBTVUNDRVNTLCBFUlJPUiwgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCAnLi9hcHAnO1xyXG5pbXBvcnQgeyBhZGRNZW1iZXJUb1RlYW0sIGZldGNoVGVhbXMsIGV4Y3VzZUZyb21UZWFtLCBhZGRUZWFtIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtcyc7XHJcbmltcG9ydCBBRERfVEVBTV9GT1JNIGZyb20gJy4vZGF0YS9hZGRfdGVhbV9mb3JtJztcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gJy4vc2VydmljZXMvdXNlcl9tYW5hZ2VtZW50JztcclxuXHJcbmxldCB1c2VycyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVUZWFtcyggdGVhbXMgKSB7XHJcbiAgICBjb25zdCBtZWV0aW5nc0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdCcgKTtcclxuICAgIG1lZXRpbmdzTGlzdERpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBpZiAoIHRlYW1zICYmIHRlYW1zLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdWaWV3IGFuZCBlZGl0IHRoZSB0ZWFtcyB0aGF0IHlvdSBhcmUgcGFydCBvZic7XHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCggKCB0ZWFtICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHRlYW1bJ21lbWJlcnMnXS5mb3JFYWNoKCAoIG1lbWJlciApID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbWJlcnMucHVzaCggbWVtYmVyWydlbWFpbCddICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQgbXktY29sIHAtMyBtLTInICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtYm9keScgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdoNScgKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtdGl0bGUnICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSB0ZWFtWyduYW1lJ107XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBjYXJkVGl0bGUgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLXRleHQnICk7XHJcbiAgICAgICAgICAgIGNhcmRUZXh0LmlubmVySFRNTCA9IGBAJHt0ZWFtWydzaG9ydE5hbWUnXX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRleHQgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkV4Y3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5pbm5lckhUTUwgPSAnRXhjdXNlIFlvdXJzZWxmJztcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J0biBidG4tZGFuZ2VyJyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhjdXNlRnJvbVRlYW0oIHRlYW0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB0ZWFtJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGJ1dHRvbkV4Y3VzZSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaHInICk7XHJcbiAgICAgICAgICAgIGhyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215LTMnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBociApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgICAgICAgICAgdGVhbU1lbWJlcnMuaW5uZXJIVE1MID0gYDxzdHJvbmc+TWVtYmVyczogPC9zdHJvbmc+ICR7bWVtYmVycy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIHRlYW1NZW1iZXJzICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAncm93IGd5LTIgZ3gtMyBhbGlnbi1pdGVtcy1jZW50ZXInICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbFNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAndmlzdWFsbHktaGlkZGVuJyApO1xyXG4gICAgICAgICAgICBsYWJlbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdmb3InLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIGxhYmVsU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnZm9ybS1zZWxlY3QnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdpZCcsICdzZWxlY3RNZW1iZXInICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ1NlbGVjdCBNZW1iZXInICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbk1lbWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCggKCB1c2VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZW1iZXJzLmluY2x1ZGVzKCB1c2VyWydlbWFpbCddICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbk1lbWJlcnMucHVzaCggdXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJub25lXCIgc2VsZWN0ZWQ+U2VsZWN0IG1lbWJlcjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIG5vbk1lbWJlcnMuZm9yRWFjaCggKCBub25NZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtub25NZW1iZXJbJ2VtYWlsJ119XCI+JHtub25NZW1iZXJbJ2VtYWlsJ119PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J0biBidG4taW5mbyB0ZXh0LXdoaXRlJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCc7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdE1lbWJlci52YWx1ZSAhPT0gJ25vbmUnICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1lbWJlclRvVGVhbSggdGVhbSwgc2VsZWN0TWVtYmVyLnZhbHVlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5wdXNoKCBzZWxlY3RNZW1iZXIudmFsdWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTWVtYmVycy5pbm5lckhUTUwgPSBgPHN0cm9uZz5BdHRlbmRlZXM6IDwvc3Ryb25nPiAke21lbWJlcnMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdBZGRlZCBtZW1iZXIgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZW1iZXI6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVtYmVyOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLmFwcGVuZENoaWxkKCBjb2xTZWxlY3RCdXR0b24gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyMiApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyRGl2ICk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoIGNhcmRCb2R5ICk7XHJcbiAgICAgICAgICAgIG1lZXRpbmdzTGlzdERpdi5hcHBlbmRDaGlsZCggY2FyZCApO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1zTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdTb3JyeTooIHlvdSBhcmUgbm90IHBhcnQgb2YgYW55IHRlYW0uJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIC8vIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgaWYgYXV0aG9yaXphdGlvbiB0b2tlbiBkb2VzbnQgZXhpc3RcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmV0Y2ggeW91ciB0ZWFtc1xyXG4gICAgZmV0Y2hUZWFtcygpXHJcbiAgICAgICAgLnRoZW4oICggdGVhbXMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGVhbXMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCBfdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggX3VzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycyA9IF91c2Vycy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVUZWFtcyggdGVhbXMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtfdXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke3RlYW1zLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdGVhbXM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggZW1haWwgKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlID0gL0BbYS16QS1aXFwtMC05XSskLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIHRlYW0gKS50b0xvd2VyQ2FzZSgpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGVuZGVlVHlwZSggYXR0ZW5kZWUgKSB7XHJcbiAgICBsZXQgdHlwZSA9ICcnO1xyXG4gICAgaWYgKCB2YWxpZGF0ZUVtYWlsKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAnZW1haWwnO1xyXG4gICAgfSBlbHNlIGlmICggdmFsaWRhdGVUZWFtKCBhdHRlbmRlZSApICkge1xyXG4gICAgICAgIHR5cGUgPSAndGVhbSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR5cGUgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5sZXQgbXlNb2RhbCA9IG51bGw7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE5ld1RlYW1CdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5zaG93KCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbW9kYWxEaXNtaXNzJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N1Ym1pdEFkZFRlYW0nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgbXlNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbXlNb2RhbCcgKSApO1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcblxyXG4gICAgY29uc3QgdGVhbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0VGVhbU5hbWUnICkudmFsdWU7XHJcbiAgICBjb25zdCB0ZWFtU2hvcnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFNob3J0TmFtZScgKS52YWx1ZTtcclxuICAgIGNvbnN0IHRlYW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGVhbURlc2NyaXB0aW9uJyApLnZhbHVlO1xyXG4gICAgY29uc3QgdGVhbU1lbWJlcnMgPSAoICggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lbWJlcnMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIC8vIFRPRE86IFZhbGlkYXRpb25cclxuICAgIGNvbnN0IHN1Ym1pdEpTT04gPSBBRERfVEVBTV9GT1JNO1xyXG4gICAgc3VibWl0SlNPTlsnbmFtZSddID0gdGVhbU5hbWU7XHJcbiAgICBzdWJtaXRKU09OWydzaG9ydE5hbWUnXSA9IHRlYW1TaG9ydE5hbWU7XHJcbiAgICBzdWJtaXRKU09OWydkZXNjcmlwdGlvbiddID0gdGVhbURlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG5cclxuICAgIGZvciAoIGxldCBpZHhBdHQgPSAwOyBpZHhBdHQgPCB0ZWFtTWVtYmVycy5sZW5ndGg7IGlkeEF0dCArPSAxICkge1xyXG4gICAgICAgIGNvbnN0IG1lbWJlciA9IHRlYW1NZW1iZXJzW2lkeEF0dF07XHJcbiAgICAgICAgc3dpdGNoICggYXR0ZW5kZWVUeXBlKCBtZW1iZXIgKSApIHtcclxuICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpZHggPSAwOyBpZHggPCB1c2Vycy5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZW1iZXIudG9Mb3dlckNhc2UoKSA9PT0gdXNlcnNbaWR4XVsnZW1haWwnXS50b0xvd2VyQ2FzZSgpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0pTT04ucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJzW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnNbaWR4XVsnZW1haWwnXSxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VibWl0SlNPTlsnbWVtYmVycyddID0gYXR0ZW5kZWVzSlNPTjtcclxuXHJcbiAgICBhZGRUZWFtKCBzdWJtaXRKU09OIClcclxuICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgbXlNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1RlYW0gYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgdGVhbTogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIG15TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgdGVhbTogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgdGVhbTogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmluaXQoKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5teS1jb2wge1xcclxcbiAgICBmbGV4LWJhc2lzOiAzMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvY3NzL3RlYW1zX2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5teS1jb2wge1xcclxcbiAgICBmbGV4LWJhc2lzOiAzMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlYW1zX2xpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZWFtc19saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInRlYW1zX2xpc3RcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfc3RhYmxlX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWdlbmVyLTE1NzQwNlwiLFwicHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19hdXRoX2pzLXB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjLTRlYTJhMVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy90ZWFtc19saXN0LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9