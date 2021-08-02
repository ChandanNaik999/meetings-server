/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/add_meeting.js":
/*!**********************************!*\
  !*** ./public/js/add_meeting.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_add_meeting_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/add_meeting.css */ "./public/css/add_meeting.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _services_user_management__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user_management */ "./public/js/services/user_management.js");
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/meetings */ "./public/js/services/meetings.js");
/* harmony import */ var _services_teams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/teams */ "./public/js/services/teams.js");
/* harmony import */ var _data_add_meeting_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/add_meeting_form */ "./public/js/data/add_meeting_form.js");










var picker = new Pikaday({
  field: document.getElementById('formGroupDateInput'),
  toString: function toString(date) {
    // return 'D/M/YYYY'
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  }
});

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
  document.getElementById('inputMeetingName').value = '';
  document.getElementById('textareaMeetingDescription').value = '';
  document.getElementById('selectStartTimeHours').value = 0;
  document.getElementById('selectEndTimeHours').value = 0;
  document.getElementById('selectStartTimeMins').value = 0;
  document.getElementById('selectEndTimeMins').value = 0;
  document.getElementById('inputParticipants').value = '';
}

document.getElementById('addMeetingForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var submitJSON = _data_add_meeting_form__WEBPACK_IMPORTED_MODULE_9__.default;
  var meetingName = document.getElementById('inputMeetingName').value.trim();
  var description = document.getElementById('textareaMeetingDescription').value.trim();
  var selectedDate = picker.getDate();
  var date = "".concat(selectedDate.getFullYear(), "-").concat(selectedDate.getMonth() + 1, "-").concat(selectedDate.getDate());
  var selectStartTimeHours = parseInt(document.getElementById('selectStartTimeHours').value, 10);
  var selectEndTimeHours = parseInt(document.getElementById('selectEndTimeHours').value, 10);
  var selectStartTimeMins = parseInt(document.getElementById('selectStartTimeMins').value, 10);
  var selectEndTimeMins = parseInt(document.getElementById('selectEndTimeMins').value, 10);
  var attendees = document.getElementById('inputParticipants').value.replace(/\s+/g, '').split(',');
  submitJSON['name'] = meetingName;
  submitJSON['description'] = description;
  submitJSON['date'] = date;
  submitJSON['startTime']['hours'] = selectStartTimeHours;
  submitJSON['startTime']['minutes'] = selectStartTimeMins;
  submitJSON['endTime']['hours'] = selectEndTimeHours;
  submitJSON['endTime']['minutes'] = selectEndTimeMins;
  var attendeesJSON = [];
  var attendeesLength = attendees.length;
  (0,_services_user_management__WEBPACK_IMPORTED_MODULE_6__.default)().then(function (users) {
    if (users.message === _constants__WEBPACK_IMPORTED_MODULE_5__.SUCCESS) {
      (0,_services_teams__WEBPACK_IMPORTED_MODULE_8__.fetchTeams)().then(function (teams) {
        if (teams.message === _constants__WEBPACK_IMPORTED_MODULE_5__.SUCCESS) {
          for (var idxAtt = 0; idxAtt < attendeesLength; idxAtt += 1) {
            var attendee = attendees[idxAtt];

            switch (attendeeType(attendees[idxAtt])) {
              case 'email':
                for (var idx = 0; idx < users.data.length; idx += 1) {
                  if (attendee.toLowerCase() === users.data[idx]['email'].toLowerCase()) {
                    attendeesJSON.push({
                      userId: users.data[idx]['_id'],
                      email: users.data[idx]['email']
                    });
                    break;
                  }
                }

                break;

              case 'team':
                for (var _idx = 0; _idx < teams.data.length; _idx += 1) {
                  if (attendee === "@".concat(teams.data[_idx]['shortName'])) {
                    var teamMemberEmails = teams.data[_idx]['members'].map(function (x) {
                      return x['email'];
                    });

                    teamMemberEmails.forEach(function (member) {
                      if (attendees.includes(member) === false) {
                        attendees.push(member);
                      }
                    });
                    attendeesLength += teams.data[_idx]['members'].length;
                    break;
                  }
                }

                break;

              default:
                break;
            }
          }

          submitJSON['attendees'] = attendeesJSON; // submit constructed meeting

          (0,_services_meetings__WEBPACK_IMPORTED_MODULE_7__.addMeeting)(submitJSON).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_5__.SUCCESS) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Meeting added successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.SUCCESS);
              resetForm();
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
            } catch (_unused) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
            }
          });
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(teams.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
        } catch (_unused2) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
    } catch (_unused3) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_5__.ERROR);
    }
  });
});

function init() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_5__.TOKEN) === null) {
    window.location = '/login';
  }

  var today = new Date();
  picker.setDate(today); // construct hours and min options

  var selectStartTimeHours = document.getElementById('selectStartTimeHours');
  var selectEndTimeHours = document.getElementById('selectEndTimeHours');

  for (var i = 0; i < 24; i += 1) {
    var option = '';

    if (i === 0) {
      option = '<option value="0" selected>0</option>';
    } else {
      option = "<option value=\"".concat(i, "\">").concat(i, "</option>");
    }

    selectStartTimeHours.innerHTML += option;
    selectEndTimeHours.innerHTML += option;
  }

  var selectStartTimeMins = document.getElementById('selectStartTimeMins');
  var selectEndTimeMins = document.getElementById('selectEndTimeMins');

  for (var _i = 0; _i < 60; _i += 1) {
    var _option = '';

    if (_i === 0) {
      _option = '<option value="0" selected>0</option>';
    } else {
      _option = "<option value=\"".concat(_i, "\">").concat(_i, "</option>");
    }

    selectStartTimeMins.innerHTML += _option;
    selectEndTimeMins.innerHTML += _option;
  }
}

init();

/***/ }),

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

/***/ "./public/js/data/add_meeting_form.js":
/*!********************************************!*\
  !*** ./public/js/data/add_meeting_form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
var ADD_MEETING_FORM = {
  "name": "Google marketing campaign",
  "description": "Increasing brand awareness and spreading information about new products",
  "date": "2020-10-28",
  "startTime": {
    "hours": 9,
    "minutes": 0
  },
  "endTime": {
    "hours": 10,
    "minutes": 30
  },
  "attendees": []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ADD_MEETING_FORM);

/***/ }),

/***/ "./public/js/services/meetings.js":
/*!****************************************!*\
  !*** ./public/js/services/meetings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/add_meeting.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/add_meeting.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n  }\r\n\r\n  hr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n  textarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n  }", "",{"version":3,"sources":["webpack://./public/css/add_meeting.css"],"names":[],"mappings":"AAAA;IACI,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;EAC1C;;EAEA;IACE,iBAAiB;IACjB,oBAAoB;IACpB,WAAW;IACX,cAAc;EAChB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n  }\r\n\r\n  hr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n  textarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/add_meeting.css":
/*!************************************!*\
  !*** ./public/css/add_meeting.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./add_meeting.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/add_meeting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_add_meeting_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"add_meeting": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/add_meeting.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hZGRfbWVldGluZy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvZGF0YS9hZGRfbWVldGluZ19mb3JtLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL21lZXRpbmdzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9hZGRfbWVldGluZy5jc3M/MDljOSIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsicGlja2VyIiwiUGlrYWRheSIsImZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvU3RyaW5nIiwiZGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJ0ZWFtIiwiYXR0ZW5kZWVUeXBlIiwiYXR0ZW5kZWUiLCJ0eXBlIiwicmVzZXRGb3JtIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEpTT04iLCJBRERfTUVFVElOR19GT1JNIiwibWVldGluZ05hbWUiLCJ0cmltIiwiZGVzY3JpcHRpb24iLCJzZWxlY3RlZERhdGUiLCJzZWxlY3RTdGFydFRpbWVIb3VycyIsInBhcnNlSW50Iiwic2VsZWN0RW5kVGltZUhvdXJzIiwic2VsZWN0U3RhcnRUaW1lTWlucyIsInNlbGVjdEVuZFRpbWVNaW5zIiwiYXR0ZW5kZWVzIiwicmVwbGFjZSIsInNwbGl0IiwiYXR0ZW5kZWVzSlNPTiIsImF0dGVuZGVlc0xlbmd0aCIsImxlbmd0aCIsImdldEFsbFVzZXJzIiwidGhlbiIsInVzZXJzIiwibWVzc2FnZSIsIlNVQ0NFU1MiLCJmZXRjaFRlYW1zIiwidGVhbXMiLCJpZHhBdHQiLCJpZHgiLCJkYXRhIiwicHVzaCIsInVzZXJJZCIsInRlYW1NZW1iZXJFbWFpbHMiLCJtYXAiLCJ4IiwiZm9yRWFjaCIsIm1lbWJlciIsImluY2x1ZGVzIiwiYWRkTWVldGluZyIsInJlc3BvbnNlIiwiYWRkVG9hc3QiLCJib2R5IiwiRVJST1IiLCJlcnJvciIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRvZGF5IiwiRGF0ZSIsInNldERhdGUiLCJpIiwib3B0aW9uIiwiaW5uZXJIVE1MIiwic2V0TmF2YmFyIiwibG9nb3V0IiwiTkFNRSIsImZpcnN0TmFtZSIsImZldGNoTWVldGluZ3MiLCJkYXRlU3RyaW5nIiwiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwic2VhcmNoTWVldGluZ3MiLCJzZWxlY3RlZERhdGVPcHRpb24iLCJzZWFyY2hUZXh0IiwidXJsIiwiam9pbiIsImFkZEF0dGVuZGVlVG9NZWV0aW5nIiwibWVldGluZyIsImV4Y3VzZUZyb21NZWV0aW5nIiwiYWRkVGVhbSIsInRlYW1KU09OIiwiYWRkTWVtYmVyVG9UZWFtIiwiZXhjdXNlRnJvbVRlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLE9BQUosQ0FBYTtBQUN4QkMsT0FBSyxFQUFFQyxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsb0JBQXpCLENBRGlCO0FBRXhCQyxVQUZ3QixvQkFFZEMsSUFGYyxFQUVQO0FBQ2I7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBaEM7QUFDQSxRQUFNQyxJQUFJLEdBQUdMLElBQUksQ0FBQ00sV0FBTCxFQUFiO0FBQ0EscUJBQVVMLEdBQVYsY0FBaUJFLEtBQWpCLGNBQTBCRSxJQUExQjtBQUNIO0FBUnVCLENBQWIsQ0FBZjs7QUFXQSxTQUFTRSxhQUFULENBQXdCQyxLQUF4QixFQUFnQztBQUM1QixNQUFNQyxFQUFFLEdBQUcsdUpBQVg7QUFDQSxTQUFPQSxFQUFFLENBQUNDLElBQUgsQ0FBU0MsTUFBTSxDQUFFSCxLQUFGLENBQU4sQ0FBZ0JJLFdBQWhCLEVBQVQsQ0FBUDtBQUNIOztBQUVELFNBQVNDLFlBQVQsQ0FBdUJDLElB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OztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImFkZF9tZWV0aW5nLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hZGRfbWVldGluZy5jc3MnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgeyBUT0tFTiwgU1VDQ0VTUywgRVJST1IgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tICcuL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IGFkZE1lZXRpbmcgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IHsgZmV0Y2hUZWFtcyB9IGZyb20gJy4vc2VydmljZXMvdGVhbXMnO1xyXG5pbXBvcnQgQUREX01FRVRJTkdfRk9STSBmcm9tICcuL2RhdGEvYWRkX21lZXRpbmdfZm9ybSc7XHJcblxyXG5jb25zdCBwaWNrZXIgPSBuZXcgUGlrYWRheSgge1xyXG4gICAgZmllbGQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZm9ybUdyb3VwRGF0ZUlucHV0JyApLFxyXG4gICAgdG9TdHJpbmcoIGRhdGUgKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuICdEL00vWVlZWSdcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcclxuICAgIH0sXHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCBlbWFpbCApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmUgPSAvQFthLXpBLVpcXC0wLTldKyQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggdGVhbSApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0ZW5kZWVUeXBlKCBhdHRlbmRlZSApIHtcclxuICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICBpZiAoIHZhbGlkYXRlRW1haWwoIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICdlbWFpbCc7XHJcbiAgICB9IGVsc2UgaWYgKCB2YWxpZGF0ZVRlYW0oIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICd0ZWFtJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHlwZSA9ICdub25lJztcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TWVldGluZ05hbWUnICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGV4dGFyZWFNZWV0aW5nRGVzY3JpcHRpb24nICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lSG91cnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApLnZhbHVlID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZU1pbnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFBhcnRpY2lwYW50cycgKS52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE1lZXRpbmdGb3JtJyApLmFkZEV2ZW50TGlzdGVuZXIoICdzdWJtaXQnLCAoIGV2ZW50ICkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX01FRVRJTkdfRk9STTtcclxuICAgIGNvbnN0IG1lZXRpbmdOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lZXRpbmdOYW1lJyApLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBwaWNrZXIuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGAke3NlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3NlbGVjdGVkRGF0ZS5nZXRNb250aCgpICsgMX0tJHtzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZUhvdXJzID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3QgYXR0ZW5kZWVzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRQYXJ0aWNpcGFudHMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IG1lZXRpbmdOYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgc3VibWl0SlNPTlsnZGF0ZSddID0gZGF0ZTtcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydob3VycyddID0gc2VsZWN0U3RhcnRUaW1lSG91cnM7XHJcbiAgICBzdWJtaXRKU09OWydzdGFydFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0U3RhcnRUaW1lTWlucztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnaG91cnMnXSA9IHNlbGVjdEVuZFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0RW5kVGltZU1pbnM7XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG4gICAgbGV0IGF0dGVuZGVlc0xlbmd0aCA9IGF0dGVuZGVlcy5sZW5ndGg7XHJcblxyXG4gICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFRlYW1zKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB0ZWFtcyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0ZWFtcy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeEF0dCA9IDA7IGlkeEF0dCA8IGF0dGVuZGVlc0xlbmd0aDsgaWR4QXR0ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWUgPSBhdHRlbmRlZXNbaWR4QXR0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlc1tpZHhBdHRdICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZS50b0xvd2VyQ2FzZSgpID09PSB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vycy5kYXRhW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnMuZGF0YVtpZHhdWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZWFtJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeCA9IDA7IGlkeCA8IHRlYW1zLmRhdGEubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWUgPT09IGBAJHt0ZWFtcy5kYXRhW2lkeF1bJ3Nob3J0TmFtZSddfWAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlckVtYWlscyA9ICggdGVhbXMuZGF0YVtpZHhdWydtZW1iZXJzJ10gKS5tYXAoICggeCApID0+IHhbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTWVtYmVyRW1haWxzLmZvckVhY2goICggbWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlcy5pbmNsdWRlcyggbWVtYmVyICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIG1lbWJlciApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0xlbmd0aCArPSB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0SlNPTlsnYXR0ZW5kZWVzJ10gPSBhdHRlbmRlZXNKU09OO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VibWl0IGNvbnN0cnVjdGVkIG1lZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ01lZXRpbmcgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHt0ZWFtcy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGF1dGhvcml6YXRpb24gdG9rZW4gZG9lc250IGV4aXN0XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHBpY2tlci5zZXREYXRlKCB0b2RheSApO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdCBob3VycyBhbmQgbWluIG9wdGlvbnNcclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZUhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gJyc7XHJcbiAgICAgICAgaWYgKCBpID09PSAwICkge1xyXG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIjBcIiBzZWxlY3RlZD4wPC9vcHRpb24+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24gPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2l9PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0U3RhcnRUaW1lSG91cnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgICAgICBzZWxlY3RFbmRUaW1lSG91cnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVNaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZU1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gJyc7XHJcbiAgICAgICAgaWYgKCBpID09PSAwICkge1xyXG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIjBcIiBzZWxlY3RlZD4wPC9vcHRpb24+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24gPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2l9PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0U3RhcnRUaW1lTWlucy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgICAgIHNlbGVjdEVuZFRpbWVNaW5zLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmluaXQoKTtcclxuIiwiaW1wb3J0IHsgTkFNRSwgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XHJcblxyXG5mdW5jdGlvbiBzZXROYXZiYXIoKSB7XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2dvdXRMaW5rJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH0gKTtcclxuICAgIGNvbnN0IFtmaXJzdE5hbWVdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIE5BTUUgKS5zcGxpdCggJyAnICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hbWVOYXYnICkuaW5uZXJIVE1MID0gZmlyc3ROYW1lO1xyXG59XHJcblxyXG5zZXROYXZiYXIoKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuY29uc3QgQUREX01FRVRJTkdfRk9STSA9IHtcclxuICAgIFwibmFtZVwiOiBcIkdvb2dsZSBtYXJrZXRpbmcgY2FtcGFpZ25cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbmNyZWFzaW5nIGJyYW5kIGF3YXJlbmVzcyBhbmQgc3ByZWFkaW5nIGluZm9ybWF0aW9uIGFib3V0IG5ldyBwcm9kdWN0c1wiLFxyXG4gICAgXCJkYXRlXCI6IFwiMjAyMC0xMC0yOFwiLFxyXG4gICAgXCJzdGFydFRpbWVcIjoge1xyXG4gICAgICAgIFwiaG91cnNcIjogOSxcclxuICAgICAgICBcIm1pbnV0ZXNcIjogMFxyXG4gICAgfSxcclxuICAgIFwiZW5kVGltZVwiOiB7XHJcbiAgICAgICAgXCJob3Vyc1wiOiAxMCxcclxuICAgICAgICBcIm1pbnV0ZXNcIjogMzBcclxuICAgIH0sXHJcbiAgICBcImF0dGVuZGVlc1wiOiBbXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFERF9NRUVUSU5HX0ZPUk07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZWV0aW5ncyggZGF0ZSApIHtcclxuICAgIGxldCBkYXRlU3RyaW5nID0gJyc7XHJcbiAgICBpZiAoIGRhdGUgaW5zdGFuY2VvZiBEYXRlICkge1xyXG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9jYWxlbmRhcj9kYXRlPSR7ZGF0ZVN0cmluZ31gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hNZWV0aW5ncyggc2VsZWN0ZWREYXRlT3B0aW9uLCBzZWFyY2hUZXh0ID0gJycgKSB7XHJcbiAgICBsZXQgdXJsID0gYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8/cGVyaW9kPSR7c2VsZWN0ZWREYXRlT3B0aW9ufWA7XHJcbiAgICBpZiAoIHNlYXJjaFRleHQgIT09ICcnICkge1xyXG4gICAgICAgIHVybCArPSAnJnNlYXJjaD0nO1xyXG4gICAgICAgIHVybCArPSAoIHNlYXJjaFRleHQuc3BsaXQoICcgJyApICkuam9pbiggJyUyMCcgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEF0dGVuZGVlVG9NZWV0aW5nKCBtZWV0aW5nLCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8ke21lZXRpbmdbJ19pZCddfT9hY3Rpb249YWRkX2F0dGVuZGVlJmVtYWlsPSR7ZW1haWx9YCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjdXNlRnJvbU1lZXRpbmcoIG1lZXRpbmcgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvJHttZWV0aW5nWydfaWQnXX0/YWN0aW9uPXJlbW92ZV9hdHRlbmRlZWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy9gLFxyXG4gICAgICAgIHN1Ym1pdEpTT04sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGZldGNoTWVldGluZ0J5SWQoIGlkICkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbi8vICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS93b3Jrc2hvcHMvJHtpZH1gLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFRva2VuKCl9YCxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVldGluZ0J5SWQoIGlkICkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXHJcbi8vICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS93b3Jrc2hvcHMvJHtpZH1gLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFRva2VuKCl9YCxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaE1lZXRpbmdzLFxyXG4gICAgc2VhcmNoTWVldGluZ3MsXHJcbiAgICBhZGRBdHRlbmRlZVRvTWVldGluZyxcclxuICAgIGV4Y3VzZUZyb21NZWV0aW5nLFxyXG4gICAgYWRkTWVldGluZyxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRUZWFtKCB0ZWFtSlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zL2AsXHJcbiAgICAgICAgdGVhbUpTT04sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlclRvVGVhbSggdGVhbSwgZW1haWwgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvJHt0ZWFtWydfaWQnXX0/YWN0aW9uPWFkZF9tZW1iZXImZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tVGVhbSggdGVhbSApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249cmVtb3ZlX21lbWJlcmAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaFRlYW1zLFxyXG4gICAgYWRkVGVhbSxcclxuICAgIGFkZE1lbWJlclRvVGVhbSxcclxuICAgIGV4Y3VzZUZyb21UZWFtLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCB1c2Vycy5cclxuICogQHJldHVybnMgbGlzdCBvZiBhbGwgdXNlcnNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS91c2Vyc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7RUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRfbWVldGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZF9tZWV0aW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFkZF9tZWV0aW5nXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci0xNTc0MDZcIixcInB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfYXV0aF9qcy1wdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zYy00ZWEyYTFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvYWRkX21lZXRpbmcuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=