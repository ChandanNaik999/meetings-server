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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvZGF0YS9hZGRfdGVhbV9mb3JtLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy90ZWFtc19saXN0LmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvdGVhbXNfbGlzdC5jc3M/NzczYyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2V0TmF2YmFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJwcm9maWxlSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiQVBJX0JBU0VfVVJMIiwiSUQiLCJOQU1FIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJpbm5lckhUTUwiLCJBRERfVEVBTV9GT1JNIiwiZmV0Y2hUZWFtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFkZFRlYW0iLCJ0ZWFtSlNPTiIsImFkZE1lbWJlclRvVGVhbSIsInRlYW0iLCJlbWFpbCIsImV4Y3VzZUZyb21UZWFtIiwiZ2V0QWxsVXNlcnMiLCJ1c2VycyIsInBvcHVsYXRlVGVhbXMiLCJ0ZWFtcyIsIm1lZXRpbmdzTGlzdERpdiIsImxlbmd0aCIsIm1lZXRpbmdzTGlzdFRpdGxlIiwiZm9yRWFjaCIsIm1lbWJlcnMiLCJtZW1iZXIiLCJwdXNoIiwiY2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjYXJkQm9keSIsImNhcmRUaXRsZSIsImFwcGVuZENoaWxkIiwiY2FyZFRleHQiLCJidXR0b25FeGN1c2UiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsIm1lc3NhZ2UiLCJTVUNDRVNTIiwiYWRkVG9hc3QiLCJib2R5IiwicmVtb3ZlIiwiRVJST1IiLCJlcnJvciIsImRlc2NyaXB0aW9uIiwiaHIiLCJ0ZWFtTWVtYmVycyIsImpvaW4iLCJzZWxlY3RNZW1iZXJEaXYiLCJjb2xTZWxlY3RNZW1iZXIiLCJsYWJlbFNlbGVjdE1lbWJlciIsInNlbGVjdE1lbWJlciIsIm5vbk1lbWJlcnMiLCJ1c2VyIiwiaW5jbHVkZXMiLCJub25NZW1iZXIiLCJjb2xTZWxlY3RNZW1iZXIyIiwiY29sU2VsZWN0QnV0dG9uIiwidmFsdWUiLCJpbml0IiwiX3VzZXJzIiwidmFsaWRhdGVFbWFpbCIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwidmFsaWRhdGVUZWFtIiwiYXR0ZW5kZWVUeXBlIiwiYXR0ZW5kZWUiLCJ0eXBlIiwibXlNb2RhbCIsImJvb3RzdHJhcCIsIk1vZGFsIiwic2hvdyIsImhpZGUiLCJ0ZWFtTmFtZSIsInRlYW1TaG9ydE5hbWUiLCJ0ZWFtRGVzY3JpcHRpb24iLCJyZXBsYWNlIiwic3VibWl0SlNPTiIsImF0dGVuZGVlc0pTT04iLCJpZHhBdHQiLCJpZHgiLCJ1c2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsTUFBS0MsWUFBWSxDQUFDQyxPQUFiLENBQXNCQyw2Q0FBdEIsTUFBa0MsSUFBdkMsRUFBOEM7QUFDMUNDLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixRQUFsQjtBQUNIOztBQUVELE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXlCLFFBQXpCLENBQXJCO0FBQ0FGLGNBQVksQ0FBQ0csWUFBYixDQUEyQixLQUEzQixZQUFxQ0Msb0RBQXJDLGNBQXFEVCxZQUFZLENBQUNDLE9BQWIsQ0FBc0JTLDBDQUF0QixDQUFyRDs7QUFFQSw4QkFBb0JWLFlBQVksQ0FBQ0MsT0FBYixDQUFzQlUsNENBQXRCLEVBQTZCQyxLQUE3QixDQUFvQyxHQUFwQyxDQUFwQjtBQUFBO0FBQUEsTUFBT0MsU0FBUDs7QUFDQVAsVUFBUSxDQUFDQyxjQUFULENBQXlCLFNBQXpCLEVBQXFDTyxTQUFyQyxHQUFpREQsU0FBakQ7QUFDSDs7QUFFRGQsU0FBUyxHOzs7Ozs7Ozs7Ozs7OztBQ2RUO0FBQ0EsSUFBTWdCLGFBQWEsR0FBRztBQUNsQixVQUFRLGVBRFU7QUFFbEIsZUFBYSxVQUZLO0FBR2xCLGlCQUFlLDBEQUhHO0FBSWxCLGFBQVc7QUFKTyxDQUF0QjtBQVFBLGlFQUFlQSxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUMsVTs7Ozs7d0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDMkJDLGdEQUFBLFdBQ2hCUixvREFEZ0IsYUFFbkI7QUFDSVMscUJBQU8sRUFBRTtBQUNMQyw2QkFBYSxZQUFLQywrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUZtQixDQUQzQjs7QUFBQTtBQUNVQyxvQkFEVjtBQUFBLDZDQVVXQSxRQUFRLENBQUNDLElBVnBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FhZUMsTzs7Ozs7cUVBQWYsa0JBQXdCQyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQlAsaURBQUEsV0FDaEJSLG9EQURnQixjQUVuQmUsUUFGbUIsRUFHbkI7QUFDSU4scUJBQU8sRUFBRTtBQUNMQyw2QkFBYSxZQUFLQywrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUhtQixDQUQzQjs7QUFBQTtBQUNVQyxvQkFEVjtBQUFBLDhDQVdXQSxRQUFRLENBQUNDLElBWHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FjZUcsZTs7Ozs7NkVBQWYsa0JBQWdDQyxJQUFoQyxFQUFzQ0MsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDMkJWLGtEQUFBLFdBQ2hCUixvREFEZ0Isb0JBQ01pQixJQUFJLENBQUMsS0FBRCxDQURWLHNDQUM2Q0MsS0FEN0MsR0FFbkIsRUFGbUIsRUFHbkI7QUFDSVQscUJBQU8sRUFBRTtBQUNMQyw2QkFBYSxZQUFLQywrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUhtQixDQUQzQjs7QUFBQTtBQUNVQyxvQkFEVjtBQUFBLDhDQVdXQSxRQUFRLENBQUNDLElBWHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FjZU0sYzs7Ozs7NEVBQWYsa0JBQStCRixJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQlQsa0RBQUEsV0FDaEJSLG9EQURnQixvQkFDTWlCLElBQUksQ0FBQyxLQUFELENBRFYsNEJBRW5CLEVBRm1CLEVBR25CO0FBQ0lSLHFCQUFPLEVBQUU7QUFDTEMsNkJBQWEsWUFBS0MsK0NBQVEsRUFBYjtBQURSO0FBRGIsYUFIbUIsQ0FEM0I7O0FBQUE7QUFDVUMsb0JBRFY7QUFBQSw4Q0FXV0EsUUFBUSxDQUFDQyxJQVhwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztTQUNlTyxXOzs7Ozt5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQlosZ0RBQUEsV0FDaEJSLG9EQURnQixhQUVuQjtBQUNJUyxxQkFBTyxFQUFFO0FBQ0xDLDZCQUFhLFlBQUtDLCtDQUFRLEVBQWI7QUFEUjtBQURiLGFBRm1CLENBRDNCOztBQUFBO0FBQ1VDLG9CQURWO0FBQUEsNkNBVVdBLFFBQVEsQ0FBQ0MsSUFWcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWFBLGlFQUFlTyxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFNBQVNDLGFBQVQsQ0FBd0JDLEtBQXhCLEVBQWdDO0FBQzVCLE1BQU1DLGVBQWUsR0FBRzNCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixXQUF6QixDQUF4QjtBQUNBMEIsaUJBQWUsQ0FBQ25CLFNBQWhCLEdBQTRCLEVBQTVCOztBQUVBLE1BQUtrQixLQUFLLElBQUlBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQTdCLEVBQWlDO0FBQzdCLFFBQU1DLGlCQUFpQixHQUFHN0IsUUFBUSxDQUFDQyxjQUFULENBQXlCLGdCQUF6QixDQUExQjtBQUNBNEIscUJBQWlCLENBQUNyQixTQUFsQixHQUE4Qiw4Q0FBOUI7QUFDQWtCLFNBQUssQ0FBQ0ksT0FBTixDQUFlLFVBQUVWLElBQUYsRUFBWTtBQUN2QixVQUFNVyxPQUFPLEdBQUcsRUFBaEI7QUFDQVgsVUFBSSxDQUFDLFNBQUQsQ0FBSixDQUFnQlUsT0FBaEIsQ0FBeUIsVUFBRUUsTUFBRixFQUFjO0FBQ25DRCxlQUFPLENBQUNFLElBQVIsQ0FBY0QsTUFBTSxDQUFDLE9BQUQsQ0FBcEI7QUFDSCxPQUZEO0FBSUEsVUFBTUUsSUFBSSxHQUFHbEMsUUFBUSxDQUFDbUMsYUFBVCxDQUF3QixLQUF4QixDQUFiO0FBQ0FELFVBQUksQ0FBQ2hDLFlBQUwsQ0FBbUIsT0FBbkIsRUFBNEIscUJBQTVCO0FBRUEsVUFBTWtDLFFBQVEsR0FBR3BDLFFBQVEsQ0FBQ21DLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBakI7QUFDQUMsY0FBUSxDQUFDbEMsWUFBVCxDQUF1QixPQUF2QixFQUFnQyxXQUFoQztBQUVBLFVBQU1tQyxTQUFTLEdBQUdyQyxRQUFRLENBQUNtQyxhQUFULENBQXdCLElBQXhCLENBQWxCO0FBQ0FFLGVBQVMsQ0FBQ25DLFlBQVYsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBakM7QUFDQW1DLGVBQVMsQ0FBQzdCLFNBQVYsR0FBc0JZLElBQUksQ0FBQyxNQUFELENBQTFCO0FBQ0FnQixjQUFRLENBQUNFLFdBQVQsQ0FBc0JELFNBQXRCO0FBRUEsVUFBTUUsUUFBUSxHQUFHdkMsUUFBUSxDQUFDbUMsYUFBVCxDQUF3QixHQUF4QixDQUFqQjtBQUNBRSxlQUFTLENBQUNuQyxZQUFWLENBQXdCLE9BQXhCLEVBQWlDLFdBQWpDO0FBQ0FxQyxjQUFRLENBQUMvQixTQUFULGNBQXlCWSxJQUFJLENBQUMsV0FBRCxDQUE3QjtBQUNBZ0IsY0FBUSxDQUFDRSxXQUFULENBQXNCQyxRQUF0QjtBQUVBLFVBQU1DLFlBQVksR0FBR3hDLFFBQVEsQ0FBQ21DLGFBQVQsQ0FBd0IsUUFBeEIsQ0FBckI7QUFDQUssa0JBQVksQ0FBQ2hDLFNBQWIsR0FBeUIsaUJBQXpCO0FBQ0FnQyxrQkFBWSxDQUFDdEMsWUFBYixDQUEyQixPQUEzQixFQUFvQyx5QkFBcEM7QUFDQXNDLGtCQUFZLENBQUNDLGdCQUFiLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDMUNuQix1RUFBYyxDQUFFRixJQUFGLENBQWQsQ0FDS3NCLElBREwsQ0FDVyxVQUFFM0IsUUFBRixFQUFnQjtBQUNuQixjQUFLQSxRQUFRLENBQUM0QixPQUFULEtBQXFCQywrQ0FBMUIsRUFBb0M7QUFDaENDLGlFQUFRLENBQUUscUNBQUYsRUFBeUM3QyxRQUFRLENBQUM4QyxJQUFsRCxFQUF3REYsK0NBQXhELENBQVI7QUFDQVYsZ0JBQUksQ0FBQ2EsTUFBTDtBQUNILFdBSEQsTUFHTztBQUNIRixpRUFBUSwyQkFBcUI5QixRQUFRLENBQUM0QixPQUE5QixHQUF5QzNDLFFBQVEsQ0FBQzhDLElBQWxELEVBQXdERSw2Q0FBeEQsQ0FBUjtBQUNIO0FBQ0osU0FSTCxXQVNZLFVBQUVDLEtBQUYsRUFBYTtBQUNqQixjQUFJO0FBQ0FKLGlFQUFRLDJCQUFxQkksS0FBSyxDQUFDbEMsUUFBTixDQUFlQyxJQUFmLENBQW9Ca0MsV0FBekMsR0FBd0RsRCxRQUFRLENBQUM4QyxJQUFqRSxFQUF1RUUsNkNBQXZFLENBQVI7QUFDSCxXQUZELENBRUUsZ0JBQU07QUFDSkgsaUVBQVEsMkJBQXFCSSxLQUFLLENBQUNOLE9BQTNCLEdBQXNDM0MsUUFBUSxDQUFDOEMsSUFBL0MsRUFBcURFLDZDQUFyRCxDQUFSO0FBQ0g7QUFDSixTQWZMO0FBZ0JILE9BakJEO0FBa0JBWixjQUFRLENBQUNFLFdBQVQsQ0FBc0JFLFlBQXRCO0FBRUEsVUFBTVcsRUFBRSxHQUFHbkQsUUFBUSxDQUFDbUMsYUFBVCxDQUF3QixJQUF4QixDQUFYO0FBQ0FnQixRQUFFLENBQUNqRCxZQUFILENBQWlCLE9BQWpCLEVBQTBCLE1BQTFCO0FBQ0FrQyxjQUFRLENBQUNFLFdBQVQsQ0FBc0JhLEVBQXRCO0FBRUEsVUFBTUMsV0FBVyxHQUFHcEQsUUFBUSxDQUFDbUMsYUFBVCxDQUF3QixHQUF4QixDQUFwQjtBQUNBaUIsaUJBQVcsQ0FBQzVDLFNBQVosd0NBQXNEdUIsT0FBTyxDQUFDc0IsSUFBUixDQUFjLElBQWQsQ0FBdEQ7QUFDQWpCLGNBQVEsQ0FBQ0UsV0FBVCxDQUFzQmMsV0FBdEI7QUFFQSxVQUFNRSxlQUFlLEdBQUd0RCxRQUFRLENBQUNtQyxhQUFULENBQXdCLEtBQXhCLENBQXhCO0FBQ0FtQixxQkFBZSxDQUFDcEQsWUFBaEIsQ0FBOEIsT0FBOUIsRUFBdUMsa0NBQXZDO0FBRUEsVUFBTXFELGVBQWUsR0FBR3ZELFFBQVEsQ0FBQ21DLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBeEI7QUFDQW9CLHFCQUFlLENBQUNyRCxZQUFoQixDQUE4QixPQUE5QixFQUF1QyxVQUF2QztBQUVBLFVBQU1zRCxpQkFBaUIsR0FBR3hELFFBQVEsQ0FBQ21DLGFBQVQsQ0FBd0IsT0FBeEIsQ0FBMUI7QUFDQXFCLHVCQUFpQixDQUFDdEQsWUFBbEIsQ0FBZ0MsT0FBaEMsRUFBeUMsaUJBQXpDO0FBQ0FzRCx1QkFBaUIsQ0FBQ3RELFlBQWxCLENBQWdDLEtBQWhDLEVBQXVDLGNBQXZDO0FBQ0FxRCxxQkFBZSxDQUFDakIsV0FBaEIsQ0FBNkJrQixpQkFBN0I7QUFFQSxVQUFNQyxZQUFZLEdBQUd6RCxRQUFRLENBQUNtQyxhQUFULENBQXdCLFFBQXhCLENBQXJCO0FBQ0FzQixrQkFBWSxDQUFDdkQsWUFBYixDQUEyQixPQUEzQixFQUFvQyxhQUFwQztBQUNBdUQsa0JBQVksQ0FBQ3ZELFlBQWIsQ0FBMkIsSUFBM0IsRUFBaUMsY0FBakM7QUFDQXVELGtCQUFZLENBQUN2RCxZQUFiLENBQTJCLFlBQTNCLEVBQXlDLGVBQXpDO0FBQ0EsVUFBTXdELFVBQVUsR0FBRyxFQUFuQjtBQUNBbEMsV0FBSyxDQUFDTSxPQUFOLENBQWUsVUFBRTZCLElBQUYsRUFBWTtBQUN2QixZQUFLNUIsT0FBTyxDQUFDNkIsUUFBUixDQUFrQkQsSUFBSSxDQUFDLE9BQUQsQ0FBdEIsTUFBc0MsS0FBM0MsRUFBbUQ7QUFDL0NELG9CQUFVLENBQUN6QixJQUFYLENBQWlCMEIsSUFBakI7QUFDSDtBQUNKLE9BSkQ7QUFNQUYsa0JBQVksQ0FBQ2pELFNBQWIsR0FBeUIsc0RBQXpCO0FBQ0FrRCxnQkFBVSxDQUFDNUIsT0FBWCxDQUFvQixVQUFFK0IsU0FBRixFQUFpQjtBQUNqQ0osb0JBQVksQ0FBQ2pELFNBQWIsOEJBQTRDcUQsU0FBUyxDQUFDLE9BQUQsQ0FBckQsZ0JBQW1FQSxTQUFTLENBQUMsT0FBRCxDQUE1RTtBQUNILE9BRkQ7QUFHQU4scUJBQWUsQ0FBQ2pCLFdBQWhCLENBQTZCbUIsWUFBN0I7QUFFQUgscUJBQWUsQ0FBQ2hCLFdBQWhCLENBQTZCaUIsZUFBN0I7QUFFQSxVQUFNTyxnQkFBZ0IsR0FBRzlELFFBQVEsQ0FBQ21DLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7QUFDQTJCLHNCQUFnQixDQUFDNUQsWUFBakIsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBeEM7QUFFQSxVQUFNNkQsZUFBZSxHQUFHL0QsUUFBUSxDQUFDbUMsYUFBVCxDQUF3QixRQUF4QixDQUF4QjtBQUNBNEIscUJBQWUsQ0FBQzdELFlBQWhCLENBQThCLE9BQTlCLEVBQXVDLGFBQXZDO0FBQ0E2RCxxQkFBZSxDQUFDdkQsU0FBaEIsR0FBNEIsS0FBNUI7QUFDQXVELHFCQUFlLENBQUN0QixnQkFBaEIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUM3QyxZQUFLZ0IsWUFBWSxDQUFDTyxLQUFiLEtBQXVCLE1BQTVCLEVBQXFDO0FBQ2pDN0MsMEVBQWUsQ0FBRUMsSUFBRixFQUFRcUMsWUFBWSxDQUFDTyxLQUFyQixDQUFmLENBQ0t0QixJQURMLENBQ1csVUFBRTNCLFFBQUYsRUFBZ0I7QUFDbkIsZ0JBQUtBLFFBQVEsQ0FBQzRCLE9BQVQsS0FBcUJDLCtDQUExQixFQUFvQztBQUNoQ2IscUJBQU8sQ0FBQ0UsSUFBUixDQUFjd0IsWUFBWSxDQUFDTyxLQUEzQjtBQUNBWix5QkFBVyxDQUFDNUMsU0FBWiwwQ0FBd0R1QixPQUFPLENBQUNzQixJQUFSLENBQWMsSUFBZCxDQUF4RDtBQUNBUixtRUFBUSxDQUFFLDJCQUFGLEVBQStCN0MsUUFBUSxDQUFDOEMsSUFBeEMsRUFBOENGLCtDQUE5QyxDQUFSO0FBQ0gsYUFKRCxNQUlPO0FBQ0hDLG1FQUFRLGdDQUEwQjlCLFFBQVEsQ0FBQzRCLE9BQW5DLEdBQThDM0MsUUFBUSxDQUFDOEMsSUFBdkQsRUFBNkRFLDZDQUE3RCxDQUFSO0FBQ0g7QUFDSixXQVRMLFdBVVksVUFBRUMsS0FBRixFQUFhO0FBQ2pCLGdCQUFJO0FBQ0FKLG1FQUFRLGdDQUEwQkksS0FBSyxDQUFDbEMsUUFBTixDQUFlQyxJQUFmLENBQW9Ca0MsV0FBOUMsR0FBNkRsRCxRQUFRLENBQUM4QyxJQUF0RSxFQUE0RUUsNkNBQTVFLENBQVI7QUFDSCxhQUZELENBRUUsaUJBQU07QUFDSkgsbUVBQVEsZ0NBQTBCSSxLQUFLLENBQUNOLE9BQWhDLEdBQTJDM0MsUUFBUSxDQUFDOEMsSUFBcEQsRUFBMERFLDZDQUExRCxDQUFSO0FBQ0g7QUFDSixXQWhCTDtBQWlCSDtBQUNKLE9BcEJEO0FBc0JBYyxzQkFBZ0IsQ0FBQ3hCLFdBQWpCLENBQThCeUIsZUFBOUI7QUFFQVQscUJBQWUsQ0FBQ2hCLFdBQWhCLENBQTZCd0IsZ0JBQTdCO0FBQ0ExQixjQUFRLENBQUNFLFdBQVQsQ0FBc0JnQixlQUF0QjtBQUNBcEIsVUFBSSxDQUFDSSxXQUFMLENBQWtCRixRQUFsQjtBQUNBVCxxQkFBZSxDQUFDVyxXQUFoQixDQUE2QkosSUFBN0I7QUFDSCxLQXJIRDtBQXNISCxHQXpIRCxNQXlITztBQUNILFFBQU1MLGtCQUFpQixHQUFHN0IsUUFBUSxDQUFDQyxjQUFULENBQXlCLGdCQUF6QixDQUExQjs7QUFDQTRCLHNCQUFpQixDQUFDckIsU0FBbEIsR0FBOEIsdUNBQTlCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTeUQsSUFBVCxHQUFnQjtBQUNaO0FBQ0EsTUFBS3ZFLFlBQVksQ0FBQ0MsT0FBYixDQUFzQkMsNkNBQXRCLE1BQWtDLElBQXZDLEVBQThDO0FBQzFDQyxVQUFNLENBQUNDLFFBQVAsR0FBa0IsUUFBbEI7QUFDSCxHQUpXLENBTVo7OztBQUNBWSw2REFBVSxHQUNMZ0MsSUFETCxDQUNXLFVBQUVoQixLQUFGLEVBQWE7QUFDaEIsUUFBS0EsS0FBSyxDQUFDaUIsT0FBTixLQUFrQkMsK0NBQXZCLEVBQWlDO0FBQzdCckIsd0VBQVcsR0FDTm1CLElBREwsQ0FDVyxVQUFFd0IsTUFBRixFQUFjO0FBQ2pCLFlBQUtBLE1BQU0sQ0FBQ3ZCLE9BQVAsS0FBbUJDLCtDQUF4QixFQUFrQztBQUM5QnBCLGVBQUssR0FBRzBDLE1BQU0sQ0FBQ2xELElBQWY7QUFDQVMsdUJBQWEsQ0FBRUMsS0FBSyxDQUFDVixJQUFSLENBQWI7QUFDSCxTQUhELE1BR087QUFDSDZCLCtEQUFRLGlDQUEyQnFCLE1BQU0sQ0FBQ3ZCLE9BQWxDLEdBQTZDM0MsUUFBUSxDQUFDOEMsSUFBdEQsRUFBNERFLDZDQUE1RCxDQUFSO0FBQ0g7QUFDSixPQVJMLFdBU1ksVUFBRUMsS0FBRixFQUFhO0FBQ2pCLFlBQUk7QUFDQUosK0RBQVEsaUNBQTJCSSxLQUFLLENBQUNsQyxRQUFOLENBQWVDLElBQWYsQ0FBb0JrQyxXQUEvQyxHQUE4RGxELFFBQVEsQ0FBQzhDLElBQXZFLEVBQTZFRSw2Q0FBN0UsQ0FBUjtBQUNILFNBRkQsQ0FFRSxpQkFBTTtBQUNKSCwrREFBUSxpQ0FBMkJJLEtBQUssQ0FBQ04sT0FBakMsR0FBNEMzQyxRQUFRLENBQUM4QyxJQUFyRCxFQUEyREUsNkNBQTNELENBQVI7QUFDSDtBQUNKLE9BZkw7QUFnQkgsS0FqQkQsTUFpQk87QUFDSEgsMkRBQVEsaUNBQTJCbkIsS0FBSyxDQUFDaUIsT0FBakMsR0FBNEMzQyxRQUFRLENBQUM4QyxJQUFyRCxFQUEyREUsNkNBQTNELENBQVI7QUFDSDtBQUNKLEdBdEJMLFdBdUJZLFVBQUVDLEtBQUYsRUFBYTtBQUNqQixRQUFJO0FBQ0FKLDJEQUFRLGlDQUEyQkksS0FBSyxDQUFDbEMsUUFBTixDQUFlQyxJQUFmLENBQW9Ca0MsV0FBL0MsR0FBOERsRCxRQUFRLENBQUM4QyxJQUF2RSxFQUE2RUUsNkNBQTdFLENBQVI7QUFDSCxLQUZELENBRUUsaUJBQU07QUFDSkgsMkRBQVEsaUNBQTJCSSxLQUFLLENBQUNOLE9BQWpDLEdBQTRDM0MsUUFBUSxDQUFDOEMsSUFBckQsRUFBMkRFLDZDQUEzRCxDQUFSO0FBQ0g7QUFDSixHQTdCTDtBQThCSDs7QUFFRCxTQUFTbUIsYUFBVCxDQUF3QjlDLEtBQXhCLEVBQWdDO0FBQzVCLE1BQU0rQyxFQUFFLEdBQUcsdUpBQVg7QUFDQSxTQUFPQSxFQUFFLENBQUNDLElBQUgsQ0FBU0MsTUFBTSxDQUFFakQsS0FBRixDQUFOLENBQWdCa0QsV0FBaEIsRUFBVCxDQUFQO0FBQ0g7O0FBRUQsU0FBU0MsWUFBVCxDQUF1QnBELElBQXZCLEVBQThCO0FBQzFCLE1BQU1nRCxFQUFFLEdBQUcsa0JBQVg7QUFDQSxTQUFPQSxFQUFFLENBQUNDLElBQUgsQ0FBU0MsTUFBTSxDQUFFbEQsSUFBRixDQUFOLENBQWVtRCxXQUFmLEVBQVQsQ0FBUDtBQUNIOztBQUVELFNBQVNFLFlBQVQsQ0FBdUJDLFFBQXZCLEVBQWtDO0FBQzlCLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE1BQUtSLGFBQWEsQ0FBRU8sUUFBRixDQUFsQixFQUFpQztBQUM3QkMsUUFBSSxHQUFHLE9BQVA7QUFDSCxHQUZELE1BRU8sSUFBS0gsWUFBWSxDQUFFRSxRQUFGLENBQWpCLEVBQWdDO0FBQ25DQyxRQUFJLEdBQUcsTUFBUDtBQUNILEdBRk0sTUFFQTtBQUNIQSxRQUFJLEdBQUcsTUFBUDtBQUNIOztBQUNELFNBQU9BLElBQVA7QUFDSDs7QUFDRCxJQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBNUUsUUFBUSxDQUFDQyxjQUFULENBQXlCLGtCQUF6QixFQUE4Q3dDLGdCQUE5QyxDQUFnRSxPQUFoRSxFQUF5RSxZQUFNO0FBQzNFbUMsU0FBTyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsS0FBZCxDQUFxQjlFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixTQUF6QixDQUFyQixDQUFWO0FBQ0EyRSxTQUFPLENBQUNHLElBQVI7QUFDSCxDQUhEO0FBS0EvRSxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsY0FBekIsRUFBMEN3QyxnQkFBMUMsQ0FBNEQsT0FBNUQsRUFBcUUsWUFBTTtBQUN2RTtBQUNBbUMsU0FBTyxDQUFDSSxJQUFSO0FBQ0gsQ0FIRDtBQUtBaEYsUUFBUSxDQUFDQyxjQUFULENBQXlCLGVBQXpCLEVBQTJDd0MsZ0JBQTNDLENBQTZELE9BQTdELEVBQXNFLFlBQU07QUFDeEU7QUFDQW1DLFNBQU8sQ0FBQ0ksSUFBUjtBQUVBLE1BQU1DLFFBQVEsR0FBR2pGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixlQUF6QixFQUEyQytELEtBQTVEO0FBQ0EsTUFBTWtCLGFBQWEsR0FBR2xGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixnQkFBekIsRUFBNEMrRCxLQUFsRTtBQUNBLE1BQU1tQixlQUFlLEdBQUduRixRQUFRLENBQUNDLGNBQVQsQ0FBeUIsaUJBQXpCLEVBQTZDK0QsS0FBckU7QUFDQSxNQUFNWixXQUFXLEdBQU9wRCxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsY0FBekIsRUFBMEMrRCxLQUE1QyxDQUFvRG9CLE9BQXBELENBQTZELE1BQTdELEVBQXFFLEVBQXJFLENBQUYsQ0FBOEU5RSxLQUE5RSxDQUFxRixHQUFyRixDQUFwQixDQVB3RSxDQVN4RTs7QUFDQSxNQUFNK0UsVUFBVSxHQUFHNUUsd0RBQW5CO0FBQ0E0RSxZQUFVLENBQUMsTUFBRCxDQUFWLEdBQXFCSixRQUFyQjtBQUNBSSxZQUFVLENBQUMsV0FBRCxDQUFWLEdBQTBCSCxhQUExQjtBQUNBRyxZQUFVLENBQUMsYUFBRCxDQUFWLEdBQTRCRixlQUE1QjtBQUNBLE1BQU1HLGFBQWEsR0FBRyxFQUF0Qjs7QUFFQSxPQUFNLElBQUlDLE1BQU0sR0FBRyxDQUFuQixFQUFzQkEsTUFBTSxHQUFHbkMsV0FBVyxDQUFDeEIsTUFBM0MsRUFBbUQyRCxNQUFNLElBQUksQ0FBN0QsRUFBaUU7QUFDN0QsUUFBTXZELE1BQU0sR0FBR29CLFdBQVcsQ0FBQ21DLE1BQUQsQ0FBMUI7O0FBQ0EsWUFBU2QsWUFBWSxDQUFFekMsTUFBRixDQUFyQjtBQUNBLFdBQUssT0FBTDtBQUNJLGFBQU0sSUFBSXdELEdBQUcsR0FBRyxDQUFoQixFQUFtQkEsR0FBRyxHQUFHaEUsS0FBSyxDQUFDSSxNQUEvQixFQUF1QzRELEdBQUcsSUFBSSxDQUE5QyxFQUFrRDtBQUM5QyxjQUFLeEQsTUFBTSxDQUFDdUMsV0FBUCxPQUF5Qi9DLEtBQUssQ0FBQ2dFLEdBQUQsQ0FBTCxDQUFXLE9BQVgsRUFBb0JqQixXQUFwQixFQUE5QixFQUFrRTtBQUM5RGUseUJBQWEsQ0FBQ3JELElBQWQsQ0FBb0I7QUFDaEJ3RCxvQkFBTSxFQUFFakUsS0FBSyxDQUFDZ0UsR0FBRCxDQUFMLENBQVcsS0FBWCxDQURRO0FBRWhCbkUsbUJBQUssRUFBRUcsS0FBSyxDQUFDZ0UsR0FBRCxDQUFMLENBQVcsT0FBWDtBQUZTLGFBQXBCO0FBSUE7QUFDSDtBQUNKOztBQUNEOztBQUNKO0FBQVM7QUFaVDtBQWNIOztBQUNESCxZQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCQyxhQUF4QjtBQUVBckUsMERBQU8sQ0FBRW9FLFVBQUYsQ0FBUCxDQUNLM0MsSUFETCxDQUNXLFVBQUUzQixRQUFGLEVBQWdCO0FBQ25CLFFBQUtBLFFBQVEsQ0FBQzRCLE9BQVQsS0FBcUJDLCtDQUExQixFQUFvQztBQUNoQ2dDLGFBQU8sQ0FBQ0ksSUFBUjtBQUNBbkMsMkRBQVEsQ0FBRSx5QkFBRixFQUE2QjdDLFFBQVEsQ0FBQzhDLElBQXRDLEVBQTRDRiwrQ0FBNUMsQ0FBUjtBQUNILEtBSEQsTUFHTztBQUNIQywyREFBUSw4QkFBd0I5QixRQUFRLENBQUM0QixPQUFqQyxHQUE0QzNDLFFBQVEsQ0FBQzhDLElBQXJELEVBQTJERSw2Q0FBM0QsQ0FBUjtBQUNIO0FBQ0osR0FSTCxXQVNZLFVBQUVDLEtBQUYsRUFBYTtBQUNqQjJCLFdBQU8sQ0FBQ0ksSUFBUjs7QUFDQSxRQUFJO0FBQ0FuQywyREFBUSw4QkFBd0JJLEtBQUssQ0FBQ2xDLFFBQU4sQ0FBZUMsSUFBZixDQUFvQmtDLFdBQTVDLEdBQTJEbEQsUUFBUSxDQUFDOEMsSUFBcEUsRUFBMEVFLDZDQUExRSxDQUFSO0FBQ0gsS0FGRCxDQUVFLGlCQUFNO0FBQ0pILDJEQUFRLDhCQUF3QkksS0FBSyxDQUFDTixPQUE5QixHQUF5QzNDLFFBQVEsQ0FBQzhDLElBQWxELEVBQXdERSw2Q0FBeEQsQ0FBUjtBQUNIO0FBQ0osR0FoQkw7QUFpQkgsQ0FwREQ7QUFzREFpQixJQUFJLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdRSjtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELHdCQUF3QixLQUFLLFdBQVcsK0JBQStCLEtBQUssaUJBQWlCLHdCQUF3QixxQkFBcUIsdUJBQXVCLEtBQUssWUFBWSx5QkFBeUIsNEJBQTRCLGtCQUFrQixpREFBaUQsS0FBSyxPQUFPLDRGQUE0RixVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxpQ0FBaUMsd0JBQXdCLEtBQUssV0FBVywrQkFBK0IsS0FBSyxpQkFBaUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsS0FBSyxZQUFZLHlCQUF5Qiw0QkFBNEIsa0JBQWtCLGlEQUFpRCxLQUFLLG1CQUFtQjtBQUM5NkI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMkc7Ozs7QUFJM0c7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTs7QUFFcEMsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUlxRDtBQUM3RSxPQUFPLGlFQUFlLHdGQUFPLElBQUksK0ZBQWMsR0FBRywrRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7VUMxQjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsd0NBQXdDO1dBQ3RFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLHFCQUFxQjtXQUNyQztXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InRlYW1zX2xpc3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBJRCwgTkFNRSwgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBzZXROYXZiYXIoKSB7XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmF2UGljJyApO1xyXG4gICAgcHJvZmlsZUltYWdlLnNldEF0dHJpYnV0ZSggJ3NyYycsIGAke0FQSV9CQVNFX1VSTH0vJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggSUQgKX0ucG5nYCApO1xyXG5cclxuICAgIGNvbnN0IFtmaXJzdE5hbWVdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIE5BTUUgKS5zcGxpdCggJyAnICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hbWVOYXYnICkuaW5uZXJIVE1MID0gZmlyc3ROYW1lO1xyXG59XHJcblxyXG5zZXROYXZiYXIoKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuY29uc3QgQUREX1RFQU1fRk9STSA9IHtcclxuICAgIFwibmFtZVwiOiBcIkFnaWxlIHRlYW0gNTdcIixcclxuICAgIFwic2hvcnROYW1lXCI6IFwiYWdpbGVuZXdcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJUZWFtIHNwcmVhZGluZyBhd2FyZW5lc3MgYWJvdXQgQWdpbGUgcHJhY3RpY2VzIGF0IFp3aWdneVwiLFxyXG4gICAgXCJtZW1iZXJzXCI6IFtdXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUREX1RFQU1fRk9STTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1zKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFRlYW0oIHRlYW1KU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvYCxcclxuICAgICAgICB0ZWFtSlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVtYmVyVG9UZWFtKCB0ZWFtLCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249YWRkX21lbWJlciZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21UZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1yZW1vdmVfbWVtYmVyYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoVGVhbXMsXHJcbiAgICBhZGRUZWFtLFxyXG4gICAgYWRkTWVtYmVyVG9UZWFtLFxyXG4gICAgZXhjdXNlRnJvbVRlYW0sXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIHVzZXJzLlxyXG4gKiBAcmV0dXJucyBsaXN0IG9mIGFsbCB1c2Vyc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3VzZXJzYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7XHJcbiIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy90ZWFtc19saXN0LmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0IHsgU1VDQ0VTUywgRVJST1IsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IHsgYWRkTWVtYmVyVG9UZWFtLCBmZXRjaFRlYW1zLCBleGN1c2VGcm9tVGVhbSwgYWRkVGVhbSB9IGZyb20gJy4vc2VydmljZXMvdGVhbXMnO1xyXG5pbXBvcnQgQUREX1RFQU1fRk9STSBmcm9tICcuL2RhdGEvYWRkX3RlYW1fZm9ybSc7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tICcuL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudCc7XHJcblxyXG5sZXQgdXNlcnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlVGVhbXMoIHRlYW1zICkge1xyXG4gICAgY29uc3QgbWVldGluZ3NMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZWFtc0xpc3QnICk7XHJcbiAgICBtZWV0aW5nc0xpc3REaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgaWYgKCB0ZWFtcyAmJiB0ZWFtcy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgIGNvbnN0IG1lZXRpbmdzTGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZWFtc0xpc3RUaXRsZScgKTtcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5pbm5lckhUTUwgPSAnVmlldyBhbmQgZWRpdCB0aGUgdGVhbXMgdGhhdCB5b3UgYXJlIHBhcnQgb2YnO1xyXG4gICAgICAgIHRlYW1zLmZvckVhY2goICggdGVhbSApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICB0ZWFtWydtZW1iZXJzJ10uZm9yRWFjaCggKCBtZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzLnB1c2goIG1lbWJlclsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkIG15LWNvbCBwLTMgbS0yJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLWJvZHknICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDUnICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLXRpdGxlJyApO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuaW5uZXJIVE1MID0gdGVhbVsnbmFtZSddO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRpdGxlICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZC10ZXh0JyApO1xyXG4gICAgICAgICAgICBjYXJkVGV4dC5pbm5lckhUTUwgPSBgQCR7dGVhbVsnc2hvcnROYW1lJ119YDtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRUZXh0ICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FeGN1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuaW5uZXJIVE1MID0gJ0V4Y3VzZSBZb3Vyc2VsZic7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdidXR0b24tb3V0bGluZS1yZWQgcHgtNCcgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4Y3VzZUZyb21UZWFtKCB0ZWFtIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoICdZb3UgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgdGVhbScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBidXR0b25FeGN1c2UgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2hyJyApO1xyXG4gICAgICAgICAgICBoci5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdteS0zJyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggaHIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1NZW1iZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIHRlYW1NZW1iZXJzLmlubmVySFRNTCA9IGA8c3Ryb25nPk1lbWJlcnM6IDwvc3Ryb25nPiAke21lbWJlcnMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCB0ZWFtTWVtYmVycyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdyBneS0yIGd4LTMgYWxpZ24taXRlbXMtY2VudGVyJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGFiZWwnICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3Zpc3VhbGx5LWhpZGRlbicgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnZm9yJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBsYWJlbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2Zvcm0tc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnaWQnLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdTZWxlY3QgTWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb25zdCBub25NZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goICggdXNlciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVtYmVycy5pbmNsdWRlcyggdXNlclsnZW1haWwnXSApID09PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBub25NZW1iZXJzLnB1c2goIHVzZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwibm9uZVwiIHNlbGVjdGVkPlNlbGVjdCBtZW1iZXI8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICBub25NZW1iZXJzLmZvckVhY2goICggbm9uTWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TWVtYmVyLmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7bm9uTWVtYmVyWydlbWFpbCddfVwiPiR7bm9uTWVtYmVyWydlbWFpbCddfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlckRpdi5hcHBlbmRDaGlsZCggY29sU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyMi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0bycgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdidXR0b24gbXgtMicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmlubmVySFRNTCA9ICdBZGQnO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RNZW1iZXIudmFsdWUgIT09ICdub25lJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNZW1iZXJUb1RlYW0oIHRlYW0sIHNlbGVjdE1lbWJlci52YWx1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMucHVzaCggc2VsZWN0TWVtYmVyLnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU1lbWJlcnMuaW5uZXJIVE1MID0gYDxzdHJvbmc+QXR0ZW5kZWVzOiA8L3N0cm9uZz4gJHttZW1iZXJzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnQWRkZWQgbWVtYmVyIHN1Y2Nlc3NmdWxseScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVtYmVyOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBhZGRpbmcgbWVtYmVyOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lbWJlcjogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyMi5hcHBlbmRDaGlsZCggY29sU2VsZWN0QnV0dG9uICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdE1lbWJlcjIgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlckRpdiApO1xyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKCBjYXJkQm9keSApO1xyXG4gICAgICAgICAgICBtZWV0aW5nc0xpc3REaXYuYXBwZW5kQ2hpbGQoIGNhcmQgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1lZXRpbmdzTGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZWFtc0xpc3RUaXRsZScgKTtcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5pbm5lckhUTUwgPSAnU29ycnk6KCB5b3UgYXJlIG5vdCBwYXJ0IG9mIGFueSB0ZWFtLic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGF1dGhvcml6YXRpb24gdG9rZW4gZG9lc250IGV4aXN0XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZldGNoIHlvdXIgdGVhbXNcclxuICAgIGZldGNoVGVhbXMoKVxyXG4gICAgICAgIC50aGVuKCAoIHRlYW1zICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHRlYW1zLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggX3VzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIF91c2Vycy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnMgPSBfdXNlcnMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlVGVhbXMoIHRlYW1zLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7X3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHt0ZWFtcy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCggZW1haWwgKSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIGVtYWlsICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZSA9IC9AW2EtekEtWlxcLTAtOV0rJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCB0ZWFtICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlICkge1xyXG4gICAgbGV0IHR5cGUgPSAnJztcclxuICAgIGlmICggdmFsaWRhdGVFbWFpbCggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ2VtYWlsJztcclxuICAgIH0gZWxzZSBpZiAoIHZhbGlkYXRlVGVhbSggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ3RlYW0nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eXBlID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGU7XHJcbn1cclxubGV0IG15TW9kYWwgPSBudWxsO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhZGROZXdUZWFtQnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuc2hvdygpO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21vZGFsRGlzbWlzcycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdteU1vZGFsJyApICk7XHJcbiAgICBteU1vZGFsLmhpZGUoKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdWJtaXRBZGRUZWFtJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IG15TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ215TW9kYWwnICkgKTtcclxuICAgIG15TW9kYWwuaGlkZSgpO1xyXG5cclxuICAgIGNvbnN0IHRlYW1OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFRlYW1OYW1lJyApLnZhbHVlO1xyXG4gICAgY29uc3QgdGVhbVNob3J0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRTaG9ydE5hbWUnICkudmFsdWU7XHJcbiAgICBjb25zdCB0ZWFtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RlYW1EZXNjcmlwdGlvbicgKS52YWx1ZTtcclxuICAgIGNvbnN0IHRlYW1NZW1iZXJzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRNZW1iZXJzJyApLnZhbHVlICkucmVwbGFjZSggL1xccysvZywgJycgKSApLnNwbGl0KCAnLCcgKTtcclxuXHJcbiAgICAvLyBUT0RPOiBWYWxpZGF0aW9uXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX1RFQU1fRk9STTtcclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IHRlYW1OYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnc2hvcnROYW1lJ10gPSB0ZWFtU2hvcnROYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IHRlYW1EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGF0dGVuZGVlc0pTT04gPSBbXTtcclxuXHJcbiAgICBmb3IgKCBsZXQgaWR4QXR0ID0gMDsgaWR4QXR0IDwgdGVhbU1lbWJlcnMubGVuZ3RoOyBpZHhBdHQgKz0gMSApIHtcclxuICAgICAgICBjb25zdCBtZW1iZXIgPSB0ZWFtTWVtYmVyc1tpZHhBdHRdO1xyXG4gICAgICAgIHN3aXRjaCAoIGF0dGVuZGVlVHlwZSggbWVtYmVyICkgKSB7XHJcbiAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVtYmVyLnRvTG93ZXJDYXNlKCkgPT09IHVzZXJzW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vyc1tpZHhdWydfaWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXJzW2lkeF1bJ2VtYWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1Ym1pdEpTT05bJ21lbWJlcnMnXSA9IGF0dGVuZGVlc0pTT047XHJcblxyXG4gICAgYWRkVGVhbSggc3VibWl0SlNPTiApXHJcbiAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIG15TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoICdUZWFtIGFkZGVkIHN1Y2Nlc3NmdWxseScsIGRvY3VtZW50LmJvZHksIFNVQ0NFU1MgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHRlYW06ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICBteU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHRlYW06ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIHRlYW06ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG59ICk7XHJcblxyXG5pbml0KCk7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktY29sIHtcXHJcXG4gICAgZmxleC1iYXNpczogMzAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy90ZWFtc19saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktY29sIHtcXHJcXG4gICAgZmxleC1iYXNpczogMzAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZWFtc19saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVhbXNfbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ0ZWFtc19saXN0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci0xNTc0MDZcIixcInB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfYXV0aF9qcy1wdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zYy00ZWEyYTFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvdGVhbXNfbGlzdC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==