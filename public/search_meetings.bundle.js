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

/***/ "./public/js/search_meetings.js":
/*!**************************************!*\
  !*** ./public/js/search_meetings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_search_meetings_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/search_meetings.css */ "./public/css/search_meetings.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/meetings */ "./public/js/services/meetings.js");
/* harmony import */ var _services_user_management__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user_management */ "./public/js/services/user_management.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");









function formatTime(hours, minutes) {
  var result = '';

  if (hours < 10) {
    result += "0".concat(hours);
  } else {
    result += hours;
  }

  result += ':';

  if (minutes < 10) {
    result += "0".concat(minutes);
  } else {
    result += minutes;
  }

  return result;
}

function populateMeetingsList(meetings, users) {
  var meetingsListDiv = document.getElementById('searchMeetingsList');
  meetingsListDiv.innerHTML = '';

  if (meetings && meetings.length > 0) {
    var meetingsListTitle = document.getElementById('meetingsListTitle');
    meetingsListTitle.innerHTML = 'Meetings matching search criteria';
    meetings.forEach(function (meeting) {
      var attendees = [];
      meeting['attendees'].forEach(function (attendee) {
        attendees.push(attendee['email']);
      }); // create meeting card and attach it to the respective parent

      var card = document.createElement('div');
      card.setAttribute('class', 'card p-3 mb-3');
      var cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      var cardTitle = document.createElement('h5');
      var date = new Date(meeting['date']);
      var startTime = formatTime(meeting['startTime']['hours'], meeting['startTime']['minutes']);
      var endTime = formatTime(meeting['endTime']['hours'], meeting['endTime']['minutes']);
      cardTitle.innerHTML = "".concat(date.toDateString(), ", ").concat(startTime, "-").concat(endTime);
      cardBody.appendChild(cardTitle);
      var cardText = document.createElement('p');
      cardText.innerHTML = meeting['name'];
      cardBody.appendChild(cardText);
      var buttonExcuse = document.createElement('button');
      buttonExcuse.innerHTML = 'Excuse Yourself';
      buttonExcuse.setAttribute('class', 'btn btn-danger');
      buttonExcuse.addEventListener('click', function () {
        (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.excuseFromMeeting)(meeting).then(function (response) {
          if (response.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)('You have been removed from the team', document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS);
            card.remove();
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          } catch (_unused) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error removing: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          }
        });
      });
      cardBody.appendChild(buttonExcuse);
      var hr = document.createElement('hr');
      hr.setAttribute('class', 'my-3');
      cardBody.appendChild(hr);
      var meetingAttendees = document.createElement('p');
      meetingAttendees.innerHTML = "<strong>Attendees: </strong> ".concat(attendees.join(', '));
      cardBody.appendChild(meetingAttendees);
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
        if (attendees.includes(user['email']) === false) {
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
          (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.addAttendeeToMeeting)(meeting, selectMember.value).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
              attendees.push(selectMember.value);
              meetingAttendees.innerHTML = "<strong>Attendees: </strong> ".concat(attendees.join(', '));
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding attendee: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding attendee: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
            } catch (_unused2) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error adding attendee: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
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
    var _meetingsListTitle = document.getElementById('meetingsListTitle');

    _meetingsListTitle.innerHTML = 'No meetings found with given search criteria';
  }
}

document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var selectedDateOption = document.getElementById('formGroupDateInput').value;
  var searchText = document.getElementById('formGroupSearchFor').value.trim();

  if (searchText === '') {
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.searchMeetings)(selectedDateOption).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
        (0,_services_user_management__WEBPACK_IMPORTED_MODULE_6__.default)().then(function (users) {
          if (users.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
            populateMeetingsList(meetings.data, users.data);
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          } catch (_unused3) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          }
        });
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
      } catch (_unused4) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
      }
    });
  } else {
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.searchMeetings)(selectedDateOption, searchText).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
        (0,_services_user_management__WEBPACK_IMPORTED_MODULE_6__.default)().then(function (users) {
          if (users.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
            populateMeetingsList(meetings.data, users.data);
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          } catch (_unused5) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
          }
        });
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
      } catch (_unused6) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
      }
    });
  }
});

function init() {
  (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.searchMeetings)('present').then(function (meetings) {
    if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
      (0,_services_user_management__WEBPACK_IMPORTED_MODULE_6__.default)().then(function (users) {
        if (users.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
          populateMeetingsList(meetings.data, users.data);
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
        } catch (_unused7) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
    } catch (_unused8) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_3__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_7__.ERROR);
    }
  });
}

init();

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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/search_meetings.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/search_meetings.css ***!
  \******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ntextarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n}", "",{"version":3,"sources":["webpack://./public/css/search_meetings.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,WAAW;IACX,cAAc;AAClB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ntextarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/search_meetings.css":
/*!****************************************!*\
  !*** ./public/css/search_meetings.css ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./search_meetings.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/search_meetings.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_search_meetings_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"search_meetings": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/search_meetings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VhcmNoX21lZXRpbmdzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL21lZXRpbmdzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcz85YTBhIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJzZXROYXZiYXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nb3V0IiwiTkFNRSIsInNwbGl0IiwiZmlyc3ROYW1lIiwiaW5uZXJIVE1MIiwiZm9ybWF0VGltZSIsImhvdXJzIiwibWludXRlcyIsInJlc3VsdCIsInBvcHVsYXRlTWVldGluZ3NMaXN0IiwibWVldGluZ3MiLCJ1c2VycyIsIm1lZXRpbmdzTGlzdERpdiIsImxlbmd0aCIsIm1lZXRpbmdzTGlzdFRpdGxlIiwiZm9yRWFjaCIsIm1lZXRpbmciLCJhdHRlbmRlZXMiLCJhdHRlbmRlZSIsInB1c2giLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNhcmRCb2R5IiwiY2FyZFRpdGxlIiwiZGF0ZSIsIkRhdGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidG9EYXRlU3RyaW5nIiwiYXBwZW5kQ2hpbGQiLCJjYXJkVGV4dCIsImJ1dHRvbkV4Y3VzZSIsImV4Y3VzZUZyb21NZWV0aW5nIiwidGhlbiIsInJlc3BvbnNlIiwibWVzc2FnZSIsIlNVQ0NFU1MiLCJhZGRUb2FzdCIsImJvZHkiLCJyZW1vdmUiLCJFUlJPUiIsImVycm9yIiwiZGF0YSIsImRlc2NyaXB0aW9uIiwiaHIiLCJtZWV0aW5nQXR0ZW5kZWVzIiwiam9pbiIsInNlbGVjdE1lbWJlckRpdiIsImNvbFNlbGVjdE1lbWJlciIsImxhYmVsU2VsZWN0TWVtYmVyIiwic2VsZWN0TWVtYmVyIiwibm9uTWVtYmVycyIsInVzZXIiLCJpbmNsdWRlcyIsIm5vbk1lbWJlciIsImNvbFNlbGVjdE1lbWJlcjIiLCJjb2xTZWxlY3RCdXR0b24iLCJ2YWx1ZSIsImFkZEF0dGVuZGVlVG9NZWV0aW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGVkRGF0ZU9wdGlvbiIsInNlYXJjaFRleHQiLCJ0cmltIiwic2VhcmNoTWVldGluZ3MiLCJnZXRBbGxVc2VycyIsImluaXQiLCJmZXRjaE1lZXRpbmdzIiwiZGF0ZVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwidXJsIiwiZW1haWwiLCJhZGRNZWV0aW5nIiwic3VibWl0SlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixNQUFLQyxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBQ0RDLFVBQVEsQ0FBQ0MsY0FBVCxDQUF5QixZQUF6QixFQUF3Q0MsZ0JBQXhDLENBQTBELE9BQTFELEVBQW1FLFlBQU07QUFDckVDLDBEQUFNO0FBQ05MLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixRQUFsQjtBQUNILEdBSEQ7O0FBSUEsOEJBQW9CSixZQUFZLENBQUNDLE9BQWIsQ0FBc0JRLDRDQUF0QixFQUE2QkMsS0FBN0IsQ0FBb0MsR0FBcEMsQ0FBcEI7QUFBQTtBQUFBLE1BQU9DLFNBQVA7O0FBQ0FOLFVBQVEsQ0FBQ0MsY0FBVCxDQUF5QixTQUF6QixFQUFxQ00sU0FBckMsR0FBaURELFNBQWpEO0FBQ0g7O0FBRURaLFNBQVMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2MsVUFBVCxDQUFxQkMsS0FBckIsRUFBNEJDLE9BQTVCLEVBQXNDO0FBQ2xDLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLE1BQUtGLEtBQUssR0FBRyxFQUFiLEVBQWtCO0FBQ2RFLFVBQU0sZUFBUUYsS0FBUixDQUFOO0FBQ0gsR0FGRCxNQUVPO0FBQ0hFLFVBQU0sSUFBSUYsS0FBVjtBQUNIOztBQUNERSxRQUFNLElBQUksR0FBVjs7QUFDQSxNQUFLRCxPQUFPLEdBQUcsRUFBZixFQUFvQjtBQUNoQkMsVUFBTSxl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Q0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNlYXJjaF9tZWV0aW5ncy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvZ291dExpbmsnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfSApO1xyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbnNldE5hdmJhcigpO1xyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCB7IGFkZEF0dGVuZGVlVG9NZWV0aW5nLCBzZWFyY2hNZWV0aW5ncywgZXhjdXNlRnJvbU1lZXRpbmcgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gJy4vc2VydmljZXMvdXNlcl9tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgU1VDQ0VTUywgRVJST1IgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lKCBob3VycywgbWludXRlcyApIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmICggaG91cnMgPCAxMCApIHtcclxuICAgICAgICByZXN1bHQgKz0gYDAke2hvdXJzfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSBob3VycztcclxuICAgIH1cclxuICAgIHJlc3VsdCArPSAnOic7XHJcbiAgICBpZiAoIG1pbnV0ZXMgPCAxMCApIHtcclxuICAgICAgICByZXN1bHQgKz0gYDAke21pbnV0ZXN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IG1pbnV0ZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MsIHVzZXJzICkge1xyXG4gICAgY29uc3QgbWVldGluZ3NMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2hNZWV0aW5nc0xpc3QnICk7XHJcbiAgICBtZWV0aW5nc0xpc3REaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgaWYgKCBtZWV0aW5ncyAmJiBtZWV0aW5ncy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgIGNvbnN0IG1lZXRpbmdzTGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZWV0aW5nc0xpc3RUaXRsZScgKTtcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5pbm5lckhUTUwgPSAnTWVldGluZ3MgbWF0Y2hpbmcgc2VhcmNoIGNyaXRlcmlhJztcclxuXHJcbiAgICAgICAgbWVldGluZ3MuZm9yRWFjaCggKCBtZWV0aW5nICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdHRlbmRlZXMgPSBbXTtcclxuICAgICAgICAgICAgbWVldGluZ1snYXR0ZW5kZWVzJ10uZm9yRWFjaCggKCBhdHRlbmRlZSApID0+IHtcclxuICAgICAgICAgICAgICAgIGF0dGVuZGVlcy5wdXNoKCBhdHRlbmRlZVsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWVldGluZyBjYXJkIGFuZCBhdHRhY2ggaXQgdG8gdGhlIHJlc3BlY3RpdmUgcGFyZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQgcC0zIG1iLTMnICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtYm9keScgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdoNScgKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCBtZWV0aW5nWydkYXRlJ10gKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gZm9ybWF0VGltZSggbWVldGluZ1snc3RhcnRUaW1lJ11bJ2hvdXJzJ10sIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydtaW51dGVzJ10gKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kVGltZSA9IGZvcm1hdFRpbWUoIG1lZXRpbmdbJ2VuZFRpbWUnXVsnaG91cnMnXSwgbWVldGluZ1snZW5kVGltZSddWydtaW51dGVzJ10gKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke2RhdGUudG9EYXRlU3RyaW5nKCl9LCAke3N0YXJ0VGltZX0tJHtlbmRUaW1lfWA7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBjYXJkVGl0bGUgKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcclxuICAgICAgICAgICAgY2FyZFRleHQuaW5uZXJIVE1MID0gbWVldGluZ1snbmFtZSddO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRleHQgKTtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRXhjdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmlubmVySFRNTCA9ICdFeGN1c2UgWW91cnNlbGYnO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2Uuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYnRuIGJ0bi1kYW5nZXInICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleGN1c2VGcm9tTWVldGluZyggbWVldGluZyApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnWW91IGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIHRlYW0nLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIHJlbW92aW5nOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggYnV0dG9uRXhjdXNlICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdocicgKTtcclxuICAgICAgICAgICAgaHIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbXktMycgKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGhyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZWV0aW5nQXR0ZW5kZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIG1lZXRpbmdBdHRlbmRlZXMuaW5uZXJIVE1MID0gYDxzdHJvbmc+QXR0ZW5kZWVzOiA8L3N0cm9uZz4gJHthdHRlbmRlZXMuam9pbiggJywgJyApfWA7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBtZWV0aW5nQXR0ZW5kZWVzICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAncm93IGd5LTIgZ3gtMyBhbGlnbi1pdGVtcy1jZW50ZXInICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbFNlbGVjdE1lbWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAndmlzdWFsbHktaGlkZGVuJyApO1xyXG4gICAgICAgICAgICBsYWJlbFNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdmb3InLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIGxhYmVsU2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnZm9ybS1zZWxlY3QnICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdpZCcsICdzZWxlY3RNZW1iZXInICk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ1NlbGVjdCBNZW1iZXInICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbk1lbWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCggKCB1c2VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZXMuaW5jbHVkZXMoIHVzZXJbJ2VtYWlsJ10gKSA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uTWVtYmVycy5wdXNoKCB1c2VyICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE1lbWJlci5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBzZWxlY3RlZD5TZWxlY3QgbWVtYmVyPC9vcHRpb24+JztcclxuICAgICAgICAgICAgbm9uTWVtYmVycy5mb3JFYWNoKCAoIG5vbk1lbWJlciApID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdE1lbWJlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke25vbk1lbWJlclsnZW1haWwnXX1cIj4ke25vbk1lbWJlclsnZW1haWwnXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlci5hcHBlbmRDaGlsZCggc2VsZWN0TWVtYmVyICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXJEaXYuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8nICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xTZWxlY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYnV0dG9uJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYnRuIGJ0bi1pbmZvIHRleHQtd2hpdGUnICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0TWVtYmVyLnZhbHVlICE9PSAnbm9uZScgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQXR0ZW5kZWVUb01lZXRpbmcoIG1lZXRpbmcsIHNlbGVjdE1lbWJlci52YWx1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlcy5wdXNoKCBzZWxlY3RNZW1iZXIudmFsdWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkF0dGVuZGVlczogPC9zdHJvbmc+ICR7YXR0ZW5kZWVzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBhdHRlbmRlZTogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdEJ1dHRvbiApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIyICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXJEaXYgKTtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCggY2FyZEJvZHkgKTtcclxuICAgICAgICAgICAgbWVldGluZ3NMaXN0RGl2LmFwcGVuZENoaWxkKCBjYXJkICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVldGluZ3NMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ05vIG1lZXRpbmdzIGZvdW5kIHdpdGggZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhJztcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2gtZm9ybScgKS5hZGRFdmVudExpc3RlbmVyKCAnc3VibWl0JywgKCBldmVudCApID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBEYXRlSW5wdXQnICkudmFsdWU7XHJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBTZWFyY2hGb3InICkudmFsdWUudHJpbSgpO1xyXG5cclxuICAgIGlmICggc2VhcmNoVGV4dCA9PT0gJycgKSB7XHJcbiAgICAgICAgc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiApXHJcbiAgICAgICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZWV0aW5ncy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24sIHNlYXJjaFRleHQgKVxyXG4gICAgICAgICAgICAudGhlbiggKCBtZWV0aW5ncyApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1c2Vycy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncy5kYXRhLCB1c2Vycy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgbWVldGluZ3M6ICR7bWVldGluZ3MubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfVxyXG59ICk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgc2VhcmNoTWVldGluZ3MoICdwcmVzZW50JyApXHJcbiAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB1c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1c2Vycy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIG1lZXRpbmdzOiAke21lZXRpbmdzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufVxyXG5cclxuaW5pdCgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdzKCBkYXRlICkge1xyXG4gICAgbGV0IGRhdGVTdHJpbmcgPSAnJztcclxuICAgIGlmICggZGF0ZSBpbnN0YW5jZW9mIERhdGUgKSB7XHJcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2NhbGVuZGFyP2RhdGU9JHtkYXRlU3RyaW5nfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24sIHNlYXJjaFRleHQgPSAnJyApIHtcclxuICAgIGxldCB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLz9wZXJpb2Q9JHtzZWxlY3RlZERhdGVPcHRpb259YDtcclxuICAgIGlmICggc2VhcmNoVGV4dCAhPT0gJycgKSB7XHJcbiAgICAgICAgdXJsICs9ICcmc2VhcmNoPSc7XHJcbiAgICAgICAgdXJsICs9ICggc2VhcmNoVGV4dC5zcGxpdCggJyAnICkgKS5qb2luKCAnJTIwJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkQXR0ZW5kZWVUb01lZXRpbmcoIG1lZXRpbmcsIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1hZGRfYXR0ZW5kZWUmZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tTWVldGluZyggbWVldGluZyApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8ke21lZXRpbmdbJ19pZCddfT9hY3Rpb249cmVtb3ZlX2F0dGVuZGVlYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVldGluZyggc3VibWl0SlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzL2AsXHJcbiAgICAgICAgc3VibWl0SlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBkZWxldGVNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTWVldGluZ3MsXHJcbiAgICBzZWFyY2hNZWV0aW5ncyxcclxuICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nLFxyXG4gICAgZXhjdXNlRnJvbU1lZXRpbmcsXHJcbiAgICBhZGRNZWV0aW5nLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCB1c2Vycy5cclxuICogQHJldHVybnMgbGlzdCBvZiBhbGwgdXNlcnNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS91c2Vyc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFVzZXJzO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9zZWFyY2hfbWVldGluZ3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaF9tZWV0aW5ncy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaF9tZWV0aW5ncy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzZWFyY2hfbWVldGluZ3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfc3RhYmxlX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWdlbmVyLTE1NzQwNlwiLFwicHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19hdXRoX2pzLXB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjLTRlYTJhMVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9zZWFyY2hfbWVldGluZ3MuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=