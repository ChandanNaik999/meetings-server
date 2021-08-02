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

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./public/css/index.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/meetings */ "./public/js/services/meetings.js");
/* harmony import */ var _util_meetings_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/meetings_util */ "./public/js/util/meetings_util.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");









function setDate(date) {
  var selectedDate = document.getElementById('selectedDate');
  var selectedDay = document.getElementById('selectedDay');
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedDate.innerHTML = "".concat(date.getDate(), " ").concat(monthNames[date.getMonth()], " ").concat(date.getFullYear());
  selectedDay.innerHTML = dayNames[date.getDay()];
}
/**
 * function to draw the layout of the 24 hours of calendar
 */


function drawInitialCalendar(date) {
  var calendarContainer = document.getElementById('calendarContainer');
  calendarContainer.innerHTML = ''; // add individual hours - am

  for (var i = 0; i < 12; i += 1) {
    var text = '0';

    if (i <= 9) {
      text = "0".concat(i);
    } else {
      text = i;
    }

    calendarContainer.innerHTML += "\n        <div class=\"calendar-hour d-flex\">\n            <div class=\"calendar-hour-text px-2\">".concat(text, ":00 am</div>\n            <div class=\"calendar-hour-bg px-2 flex-grow-1\" id=\"calendarHour").concat(i, "\"></div>\n        </div> ");
  }

  for (var _i = 12; _i < 24; _i += 1) {
    var _text = '0';

    if (_i <= 9) {
      _text = "0".concat(_i);
    } else {
      _text = _i;
    }

    calendarContainer.innerHTML += "\n        <div class=\"calendar-hour d-flex\">\n            <div class=\"calendar-hour-text px-2\">".concat(_text, ":00 pm</div>\n            <div class=\"calendar-hour-bg px-2 flex-grow-1\" id=\"calendarHour").concat(_i, "\"></div>\n        </div> ");
  } // draw current time


  var today = new Date();
  today.setHours(0, 0, 0, 0); // eslint-disable-next-line no-use-before-define

  var pickerDate = date;
  pickerDate.setHours(0, 0, 0, 0);

  if (pickerDate.getTime() === today.getTime()) {
    var now = new Date();
    var time = 'am';
    var hourText = now.getHours();

    if (now.getHours() >= 12) {
      time = 'pm';
      hourText -= 12;
    }

    var timeNow = document.createElement('div');
    timeNow.setAttribute('class', 'time-now d-flex');
    timeNow.style.top = "".concat(now.getHours() * (60 + 10) + now.getMinutes(), "px");
    timeNow.innerHTML = "<div class=\"time-now-text px-2\">".concat(hourText, ":").concat(now.getMinutes(), " ").concat(time, "</div>\n                <div class=\"flex-grow-1 bg-info time-now-line\" id=\"timeNowHr\"></div>"); // calendarContainer = document.getElementById( 'calendarContainer' );

    calendarContainer.appendChild(timeNow);
  }
}

function populateCalendar(meetings) {
  if (meetings) {
    meetings.forEach(function (meeting) {
      var meetingDuration = (0,_util_meetings_util__WEBPACK_IMPORTED_MODULE_6__.default)(meeting['startTime'], meeting['endTime']);
      var attendees = [];
      meeting['attendees'].forEach(function (attendee) {
        attendees.push(attendee['email']);
      }); // create meeting card and attach it to the respective hour container

      var cardMeetingDiv = document.createElement('div');
      cardMeetingDiv.setAttribute('class', 'card-meeting');
      cardMeetingDiv.setAttribute('id', "card-meeting-".concat(meeting['_id']));
      cardMeetingDiv.style.top = "".concat(meeting['startTime']['minutes'], "px");
      var extraHeight = (meeting['endTime']['hours'] - meeting['startTime']['hours']) * 10;
      cardMeetingDiv.style.height = "".concat(meetingDuration + extraHeight, "px");
      var cardMeetingName = document.createElement('h5');
      cardMeetingName.setAttribute('id', 'card-meeting-name');
      cardMeetingName.setAttribute('class', 'card-meeting-name');
      cardMeetingName.innerHTML = meeting['name'];
      cardMeetingDiv.appendChild(cardMeetingName);
      var cardMeetingAttendees = document.createElement('p');
      cardMeetingAttendees.setAttribute('id', 'card-meeting-attendees');
      cardMeetingAttendees.setAttribute('class', 'card-meeting-attendees');
      cardMeetingAttendees.innerHTML = attendees.join(', ');
      cardMeetingDiv.appendChild(cardMeetingAttendees);
      var startTimeHours = meeting['startTime']['hours'];
      var hourContainer = document.getElementById("calendarHour".concat(startTimeHours));
      hourContainer.appendChild(cardMeetingDiv);
    });
  }
}

function init() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__.TOKEN) === null) {
    window.location = '/login';
  }

  var today = new Date();
  document.getElementById('datepicker').value = "".concat(today.getDate(), "/").concat(today.getMonth() + 1, "/").concat(today.getFullYear());
  setDate(today);
  drawInitialCalendar(new Date()); // fetch meetings for today and populate the calendar containers

  (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.fetchMeetings)(today).then(function (meetings) {
    if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
      populateCalendar(meetings.data);
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(response.message), document.body, ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Login Error: ".concat(error.response.data.description), document.body, ERROR);
    } catch (_unused) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Login Error: ".concat(error.message), document.body, ERROR);
    }
  });
}

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  toString: function toString(date) {
    // return 'D/M/YYYY'
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  },
  setDefaultDate: true,
  onSelect: function select() {
    setDate(picker.getDate());
    drawInitialCalendar(new Date(picker.getDate()));
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_5__.fetchMeetings)(picker.getDate()).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
        populateCalendar(meetings.data);
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(response.message), document.body, ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, ERROR);
      } catch (_unused2) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, ERROR);
      }
    });
  }
});
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

/***/ "./public/js/util/meetings_util.js":
/*!*****************************************!*\
  !*** ./public/js/util/meetings_util.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Return the meeting duration in minutes provided the start and end time of same day
 * @param {JSON} startTime The format for start time is { "hours": 9, "minutes": 0 }
 * @param {JSON} EndTime The format for end time is { "hours": 9, "minutes": 0 }
 */
function getMeetingDuration(startTime, endTime) {
  return endTime['minutes'] + endTime['hours'] * 60 - (startTime['minutes'] + startTime['hours'] * 60);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeetingDuration);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.calendar-container {\r\n    position: relative;\r\n}\r\n\r\n.calendar-hour {\r\n    position: relative;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.calendar-hour-bg {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.card-meeting {\r\n    position: absolute;\r\n    width: auto;\r\n    right: 10px;\r\n    left: 10px;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    background-color: rgba(130, 211, 118, 0.4);\r\n    border-left: 4px solid #2ecc71;\r\n    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.25);\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n}\r\n\r\n.card-meeting-name {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: hsl(145, 63%, 38%);\r\n}\r\n\r\n.card-meeting-attendees {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: hsl(145, 63%, 38%);\r\n}\r\n\r\n.time-now {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.time-now-text {\r\n    color: hsl(202, 98%, 58%)\r\n}\r\n\r\n.time-now-line {\r\n    height: 3px;\r\n    align-self: center;\r\n}", "",{"version":3,"sources":["webpack://./public/css/index.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,UAAU;IACV,aAAa;IACb,0CAA0C;IAC1C,8BAA8B;IAC9B,8CAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;;AAGA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.calendar-container {\r\n    position: relative;\r\n}\r\n\r\n.calendar-hour {\r\n    position: relative;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.calendar-hour-bg {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.card-meeting {\r\n    position: absolute;\r\n    width: auto;\r\n    right: 10px;\r\n    left: 10px;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    background-color: rgba(130, 211, 118, 0.4);\r\n    border-left: 4px solid #2ecc71;\r\n    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.25);\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n}\r\n\r\n.card-meeting-name {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: hsl(145, 63%, 38%);\r\n}\r\n\r\n.card-meeting-attendees {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: hsl(145, 63%, 38%);\r\n}\r\n\r\n.time-now {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.time-now-text {\r\n    color: hsl(202, 98%, 58%)\r\n}\r\n\r\n.time-now-line {\r\n    height: 3px;\r\n    align-self: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/index.css":
/*!******************************!*\
  !*** ./public/css/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./public/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1"], () => (__webpack_require__("./public/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvbWVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvdXRpbC9tZWV0aW5nc191dGlsLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL2luZGV4LmNzcz9mZjU2Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJzZXROYXZiYXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nb3V0IiwiTkFNRSIsInNwbGl0IiwiZmlyc3ROYW1lIiwiaW5uZXJIVE1MIiwic2V0RGF0ZSIsImRhdGUiLCJzZWxlY3RlZERhdGUiLCJzZWxlY3RlZERheSIsIm1vbnRoTmFtZXMiLCJkYXlOYW1lcyIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0RGF5IiwiZHJhd0luaXRpYWxDYWxlbmRhciIsImNhbGVuZGFyQ29udGFpbmVyIiwiaSIsInRleHQiLCJ0b2RheSIsIkRhdGUiLCJzZXRIb3VycyIsInBpY2tlckRhdGUiLCJnZXRUaW1lIiwibm93IiwidGltZSIsImhvdXJUZXh0IiwiZ2V0SG91cnMiLCJ0aW1lTm93IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwidG9wIiwiZ2V0TWludXRlcyIsImFwcGVuZENoaWxkIiwicG9wdWxhdGVDYWxlbmRhciIsIm1lZXRpbmdzIiwiZm9yRWFjaCIsIm1lZXRpbmciLCJtZWV0aW5nRHVyYXRpb24iLCJnZXRNZWV0aW5nRHVyYXRpb24iLCJhdHRlbmRlZXMiLCJhdHRlbmRlZSIsInB1c2giLCJjYXJkTWVldGluZ0RpdiIsImV4dHJhSGVpZ2h0IiwiaGVpZ2h0IiwiY2FyZE1lZXRpbmdOYW1lIiwiY2FyZE1lZXRpbmdBdHRlbmRlZXMiLCJqb2luIiwic3RhcnRUaW1lSG91cnMiLCJob3VyQ29udGFpbmVyIiwiaW5pdCIsInZhbHVlIiwiZmV0Y2hNZWV0aW5ncyIsInRoZW4iLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImRhdGEiLCJhZGRUb2FzdCIsInJlc3BvbnNlIiwiYm9keSIsIkVSUk9SIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInBpY2tlciIsIlBpa2FkYXkiLCJmaWVsZCIsInRvU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwic2V0RGVmYXVsdERhdGUiLCJvblNlbGVjdCIsInNlbGVjdCIsImRhdGVTdHJpbmciLCJheGlvcyIsIkFQSV9CQVNFX1VSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJzZWFyY2hNZWV0aW5ncyIsInNlbGVjdGVkRGF0ZU9wdGlvbiIsInNlYXJjaFRleHQiLCJ1cmwiLCJhZGRBdHRlbmRlZVRvTWVldGluZyIsImVtYWlsIiwiZXhjdXNlRnJvbU1lZXRpbmciLCJhZGRNZWV0aW5nIiwic3VibWl0SlNPTiIsInN0YXJ0VGltZSIsImVuZFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsTUFBS0MsWUFBWSxDQUFDQyxPQUFiLENBQXNCQyw2Q0FBdEIsTUFBa0MsSUFBdkMsRUFBOEM7QUFDMUNDLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixRQUFsQjtBQUNIOztBQUNEQyxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsWUFBekIsRUFBd0NDLGdCQUF4QyxDQUEwRCxPQUExRCxFQUFtRSxZQUFNO0FBQ3JFQywwREFBTTtBQUNOTCxVQUFNLENBQUNDLFFBQVAsR0FBa0IsUUFBbEI7QUFDSCxHQUhEOztBQUlBLDhCQUFvQkosWUFBWSxDQUFDQyxPQUFiLENBQXNCUSw0Q0FBdEIsRUFBNkJDLEtBQTdCLENBQW9DLEdBQXBDLENBQXBCO0FBQUE7QUFBQSxNQUFPQyxTQUFQOztBQUNBTixVQUFRLENBQUNDLGNBQVQsQ0FBeUIsU0FBekIsRUFBcUNNLFNBQXJDLEdBQWlERCxTQUFqRDtBQUNIOztBQUVEWixTQUFTLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNjLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXlCO0FBQ3JCLE1BQU1DLFlBQVksR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXlCLGNBQXpCLENBQXJCO0FBQ0EsTUFBTVUsV0FBVyxHQUFHWCxRQUFRLENBQUNDLGNBQVQsQ0FBeUIsYUFBekIsQ0FBcEI7QUFFQSxNQUFNVyxVQUFVLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkFNRSwgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XHJcblxyXG5mdW5jdGlvbiBzZXROYXZiYXIoKSB7XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2dvdXRMaW5rJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH0gKTtcclxuICAgIGNvbnN0IFtmaXJzdE5hbWVdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oIE5BTUUgKS5zcGxpdCggJyAnICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ25hbWVOYXYnICkuaW5uZXJIVE1MID0gZmlyc3ROYW1lO1xyXG59XHJcblxyXG5zZXROYXZiYXIoKTtcclxuIiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9hcHAnO1xyXG5pbXBvcnQgYWRkVG9hc3QgZnJvbSAnLi9jdXN0b21zL2FwcCc7XHJcbmltcG9ydCB7IGZldGNoTWVldGluZ3MgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IGdldE1lZXRpbmdEdXJhdGlvbiBmcm9tICcuL3V0aWwvbWVldGluZ3NfdXRpbCc7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIFRPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZSggZGF0ZSApIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0ZWREYXRlJyApO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdGVkRGF5JyApO1xyXG5cclxuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxyXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuICAgIGNvbnN0IGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG5cclxuICAgIHNlbGVjdGVkRGF0ZS5pbm5lckhUTUwgPSBgJHtkYXRlLmdldERhdGUoKX0gJHttb250aE5hbWVzW2RhdGUuZ2V0TW9udGgoKV19ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICBzZWxlY3RlZERheS5pbm5lckhUTUwgPSBkYXlOYW1lc1tkYXRlLmdldERheSgpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGZ1bmN0aW9uIHRvIGRyYXcgdGhlIGxheW91dCBvZiB0aGUgMjQgaG91cnMgb2YgY2FsZW5kYXJcclxuICovXHJcbmZ1bmN0aW9uIGRyYXdJbml0aWFsQ2FsZW5kYXIoIGRhdGUgKSB7XHJcbiAgICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnY2FsZW5kYXJDb250YWluZXInICk7XHJcbiAgICBjYWxlbmRhckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGFkZCBpbmRpdmlkdWFsIGhvdXJzIC0gYW1cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSAnMCc7XHJcbiAgICAgICAgaWYgKCBpIDw9IDkgKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBgMCR7aX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxlbmRhckNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ci10ZXh0IHB4LTJcIj4ke3RleHR9OjAwIGFtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyLWJnIHB4LTIgZmxleC1ncm93LTFcIiBpZD1cImNhbGVuZGFySG91ciR7aX1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gYDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDEyOyBpIDwgMjQ7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICcwJztcclxuICAgICAgICBpZiAoIGkgPD0gOSApIHtcclxuICAgICAgICAgICAgdGV4dCA9IGAwJHtpfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGVuZGFyQ29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyLXRleHQgcHgtMlwiPiR7dGV4dH06MDAgcG08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXItYmcgcHgtMiBmbGV4LWdyb3ctMVwiIGlkPVwiY2FsZW5kYXJIb3VyJHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgY3VycmVudCB0aW1lXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheS5zZXRIb3VycyggMCwgMCwgMCwgMCApO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgICBjb25zdCBwaWNrZXJEYXRlID0gZGF0ZTtcclxuICAgIHBpY2tlckRhdGUuc2V0SG91cnMoIDAsIDAsIDAsIDAgKTtcclxuICAgIGlmICggcGlja2VyRGF0ZS5nZXRUaW1lKCkgPT09IHRvZGF5LmdldFRpbWUoKSApIHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aW1lID0gJ2FtJztcclxuICAgICAgICBsZXQgaG91clRleHQgPSBub3cuZ2V0SG91cnMoKTtcclxuICAgICAgICBpZiAoIG5vdy5nZXRIb3VycygpID49IDEyICkge1xyXG4gICAgICAgICAgICB0aW1lID0gJ3BtJztcclxuICAgICAgICAgICAgaG91clRleHQgLT0gMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWVOb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIHRpbWVOb3cuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAndGltZS1ub3cgZC1mbGV4JyApO1xyXG4gICAgICAgIHRpbWVOb3cuc3R5bGUudG9wID0gYCR7bm93LmdldEhvdXJzKCkgKiAoIDYwICsgMTAgKSArIG5vdy5nZXRNaW51dGVzKCl9cHhgO1xyXG4gICAgICAgIHRpbWVOb3cuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0aW1lLW5vdy10ZXh0IHB4LTJcIj4ke2hvdXJUZXh0fToke25vdy5nZXRNaW51dGVzKCl9ICR7dGltZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSBiZy1pbmZvIHRpbWUtbm93LWxpbmVcIiBpZD1cInRpbWVOb3dIclwiPjwvZGl2PmA7XHJcbiAgICAgICAgLy8gY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2NhbGVuZGFyQ29udGFpbmVyJyApO1xyXG4gICAgICAgIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKCB0aW1lTm93ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQ2FsZW5kYXIoIG1lZXRpbmdzICkge1xyXG4gICAgaWYgKCBtZWV0aW5ncyApIHtcclxuICAgICAgICBtZWV0aW5ncy5mb3JFYWNoKCAoIG1lZXRpbmcgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lZXRpbmdEdXJhdGlvbiA9IGdldE1lZXRpbmdEdXJhdGlvbiggbWVldGluZ1snc3RhcnRUaW1lJ10sIG1lZXRpbmdbJ2VuZFRpbWUnXSApO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRlbmRlZXMgPSBbXTtcclxuICAgICAgICAgICAgbWVldGluZ1snYXR0ZW5kZWVzJ10uZm9yRWFjaCggKCBhdHRlbmRlZSApID0+IHtcclxuICAgICAgICAgICAgICAgIGF0dGVuZGVlcy5wdXNoKCBhdHRlbmRlZVsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWVldGluZyBjYXJkIGFuZCBhdHRhY2ggaXQgdG8gdGhlIHJlc3BlY3RpdmUgaG91ciBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLW1lZXRpbmcnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LnNldEF0dHJpYnV0ZSggJ2lkJywgYGNhcmQtbWVldGluZy0ke21lZXRpbmdbJ19pZCddfWAgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuc3R5bGUudG9wID0gYCR7bWVldGluZ1snc3RhcnRUaW1lJ11bJ21pbnV0ZXMnXX1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhSGVpZ2h0ID0gKCBtZWV0aW5nWydlbmRUaW1lJ11bJ2hvdXJzJ10gLSBtZWV0aW5nWydzdGFydFRpbWUnXVsnaG91cnMnXSApICogMTA7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LnN0eWxlLmhlaWdodCA9IGAke21lZXRpbmdEdXJhdGlvbiArIGV4dHJhSGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g1JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuc2V0QXR0cmlidXRlKCAnaWQnLCAnY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLmlubmVySFRNTCA9IG1lZXRpbmdbJ25hbWUnXTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZSApO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ0F0dGVuZGVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0F0dGVuZGVlcy5zZXRBdHRyaWJ1dGUoICdpZCcsICdjYXJkLW1lZXRpbmctYXR0ZW5kZWVzJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0F0dGVuZGVlcy5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLW1lZXRpbmctYXR0ZW5kZWVzJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0F0dGVuZGVlcy5pbm5lckhUTUwgPSBhdHRlbmRlZXMuam9pbiggJywgJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdBdHRlbmRlZXMgKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lSG91cnMgPSBtZWV0aW5nWydzdGFydFRpbWUnXVsnaG91cnMnXTtcclxuICAgICAgICAgICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBgY2FsZW5kYXJIb3VyJHtzdGFydFRpbWVIb3Vyc31gICk7XHJcbiAgICAgICAgICAgIGhvdXJDb250YWluZXIuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nRGl2ICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBhdXRob3JpemF0aW9uIHRva2VuIGRvZXNudCBleGlzdFxyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2RhdGVwaWNrZXInICkudmFsdWUgPSBgJHt0b2RheS5nZXREYXRlKCl9LyR7dG9kYXkuZ2V0TW9udGgoKSArIDF9LyR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgc2V0RGF0ZSggdG9kYXkgKTtcclxuXHJcbiAgICBkcmF3SW5pdGlhbENhbGVuZGFyKCBuZXcgRGF0ZSgpICk7XHJcblxyXG4gICAgLy8gZmV0Y2ggbWVldGluZ3MgZm9yIHRvZGF5IGFuZCBwb3B1bGF0ZSB0aGUgY2FsZW5kYXIgY29udGFpbmVyc1xyXG4gICAgZmV0Y2hNZWV0aW5ncyggdG9kYXkgKVxyXG4gICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhbGVuZGFyKCBtZWV0aW5ncy5kYXRhICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBMb2dpbiBFcnJvcjogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBMb2dpbiBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBpY2tlciA9IG5ldyBQaWthZGF5KCB7XHJcbiAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdkYXRlcGlja2VyJyApLFxyXG4gICAgdG9TdHJpbmcoIGRhdGUgKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuICdEL00vWVlZWSdcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcclxuICAgIH0sXHJcbiAgICBzZXREZWZhdWx0RGF0ZTogdHJ1ZSxcclxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoKSB7XHJcbiAgICAgICAgc2V0RGF0ZSggcGlja2VyLmdldERhdGUoKSApO1xyXG4gICAgICAgIGRyYXdJbml0aWFsQ2FsZW5kYXIoIG5ldyBEYXRlKCBwaWNrZXIuZ2V0RGF0ZSgpICkgKTtcclxuICAgICAgICBmZXRjaE1lZXRpbmdzKCBwaWNrZXIuZ2V0RGF0ZSgpIClcclxuICAgICAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVDYWxlbmRhciggbWVldGluZ3MuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfSxcclxufSApO1xyXG5cclxuaW5pdCgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdzKCBkYXRlICkge1xyXG4gICAgbGV0IGRhdGVTdHJpbmcgPSAnJztcclxuICAgIGlmICggZGF0ZSBpbnN0YW5jZW9mIERhdGUgKSB7XHJcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2NhbGVuZGFyP2RhdGU9JHtkYXRlU3RyaW5nfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaE1lZXRpbmdzKCBzZWxlY3RlZERhdGVPcHRpb24sIHNlYXJjaFRleHQgPSAnJyApIHtcclxuICAgIGxldCB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLz9wZXJpb2Q9JHtzZWxlY3RlZERhdGVPcHRpb259YDtcclxuICAgIGlmICggc2VhcmNoVGV4dCAhPT0gJycgKSB7XHJcbiAgICAgICAgdXJsICs9ICcmc2VhcmNoPSc7XHJcbiAgICAgICAgdXJsICs9ICggc2VhcmNoVGV4dC5zcGxpdCggJyAnICkgKS5qb2luKCAnJTIwJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkQXR0ZW5kZWVUb01lZXRpbmcoIG1lZXRpbmcsIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1hZGRfYXR0ZW5kZWUmZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1c2VGcm9tTWVldGluZyggbWVldGluZyApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9tZWV0aW5ncy8ke21lZXRpbmdbJ19pZCddfT9hY3Rpb249cmVtb3ZlX2F0dGVuZGVlYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVldGluZyggc3VibWl0SlNPTiApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzL2AsXHJcbiAgICAgICAgc3VibWl0SlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBkZWxldGVNZWV0aW5nQnlJZCggaWQgKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuLy8gICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3dvcmtzaG9wcy8ke2lkfWAsXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTWVldGluZ3MsXHJcbiAgICBzZWFyY2hNZWV0aW5ncyxcclxuICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nLFxyXG4gICAgZXhjdXNlRnJvbU1lZXRpbmcsXHJcbiAgICBhZGRNZWV0aW5nLFxyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJuIHRoZSBtZWV0aW5nIGR1cmF0aW9uIGluIG1pbnV0ZXMgcHJvdmlkZWQgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZSBvZiBzYW1lIGRheVxyXG4gKiBAcGFyYW0ge0pTT059IHN0YXJ0VGltZSBUaGUgZm9ybWF0IGZvciBzdGFydCB0aW1lIGlzIHsgXCJob3Vyc1wiOiA5LCBcIm1pbnV0ZXNcIjogMCB9XHJcbiAqIEBwYXJhbSB7SlNPTn0gRW5kVGltZSBUaGUgZm9ybWF0IGZvciBlbmQgdGltZSBpcyB7IFwiaG91cnNcIjogOSwgXCJtaW51dGVzXCI6IDAgfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TWVldGluZ0R1cmF0aW9uKCBzdGFydFRpbWUsIGVuZFRpbWUgKSB7XHJcbiAgICByZXR1cm4gKCBlbmRUaW1lWydtaW51dGVzJ10gKyBlbmRUaW1lWydob3VycyddICogNjAgKSAtICggc3RhcnRUaW1lWydtaW51dGVzJ10gKyBzdGFydFRpbWVbJ2hvdXJzJ10gKiA2MCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNZWV0aW5nRHVyYXRpb247XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ci1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDIxMSwgMTE4LCAwLjQpO1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyZWNjNzE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCA3cHggMTRweCAtNXB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZy1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogaHNsKDE0NSwgNjMlLCAzOCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tZWV0aW5nLWF0dGVuZGVlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgY29sb3I6IGhzbCgxNDUsIDYzJSwgMzglKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpbWUtbm93LXRleHQge1xcclxcbiAgICBjb2xvcjogaHNsKDIwMiwgOTglLCA1OCUpXFxyXFxufVxcclxcblxcclxcbi50aW1lLW5vdy1saW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLDhCQUE4QjtJQUM5Qiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOzs7QUFHQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyLWhvdXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyLWhvdXItYmcge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tZWV0aW5nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMwLCAyMTEsIDExOCwgMC40KTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMmVjYzcxO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggN3B4IDE0cHggLTVweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmctbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IGhzbCgxNDUsIDYzJSwgMzglKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZy1hdHRlbmRlZXMge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGNvbG9yOiBoc2woMTQ1LCA2MyUsIDM4JSk7XFxyXFxufVxcclxcblxcclxcbi50aW1lLW5vdyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aW1lLW5vdy10ZXh0IHtcXHJcXG4gICAgY29sb3I6IGhzbCgyMDIsIDk4JSwgNTglKVxcclxcbn1cXHJcXG5cXHJcXG4udGltZS1ub3ctbGluZSB7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItMTU3NDA2XCIsXCJwdWJsaWNfanNfY3VzdG9tc19hcHBfanMtcHVibGljX2pzX3NlcnZpY2VzX2F1dGhfanMtcHVibGljX2Nzc19tYWluX2Nzcy1kYXRhX2ltYWdlX3N2Z194bWxfM2MtNGVhMmExXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9