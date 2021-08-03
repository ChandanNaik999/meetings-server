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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VydmljZXMvbWVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvdXRpbC9tZWV0aW5nc191dGlsLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL2luZGV4LmNzcz9mZjU2Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJzZXROYXZiYXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb2ZpbGVJbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJBUElfQkFTRV9VUkwiLCJJRCIsIk5BTUUiLCJzcGxpdCIsImZpcnN0TmFtZSIsImlubmVySFRNTCIsInNldERhdGUiLCJkYXRlIiwic2VsZWN0ZWREYXRlIiwic2VsZWN0ZWREYXkiLCJtb250aE5hbWVzIiwiZGF5TmFtZXMiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldERheSIsImRyYXdJbml0aWFsQ2FsZW5kYXIiLCJjYWxlbmRhckNvbnRhaW5lciIsImkiLCJ0ZXh0IiwidG9kYXkiLCJEYXRlIiwic2V0SG91cnMiLCJwaWNrZXJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsInRpbWUiLCJob3VyVGV4dCIsImdldEhvdXJzIiwidGltZU5vdyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInRvcCIsImdldE1pbnV0ZXMiLCJhcHBlbmRDaGlsZCIsInBvcHVsYXRlQ2FsZW5kYXIiLCJtZWV0aW5ncyIsImZvckVhY2giLCJtZWV0aW5nIiwibWVldGluZ0R1cmF0aW9uIiwiZ2V0TWVldGluZ0R1cmF0aW9uIiwiYXR0ZW5kZWVzIiwiYXR0ZW5kZWUiLCJwdXNoIiwiY2FyZE1lZXRpbmdEaXYiLCJleHRyYUhlaWdodCIsImhlaWdodCIsImNhcmRNZWV0aW5nTmFtZSIsImNhcmRNZWV0aW5nQXR0ZW5kZWVzIiwiam9pbiIsInN0YXJ0VGltZUhvdXJzIiwiaG91ckNvbnRhaW5lciIsImluaXQiLCJ2YWx1ZSIsImZldGNoTWVldGluZ3MiLCJ0aGVuIiwibWVzc2FnZSIsIlNVQ0NFU1MiLCJkYXRhIiwiYWRkVG9hc3QiLCJyZXNwb25zZSIsImJvZHkiLCJFUlJPUiIsImVycm9yIiwiZGVzY3JpcHRpb24iLCJwaWNrZXIiLCJQaWthZGF5IiwiZmllbGQiLCJ0b1N0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInNldERlZmF1bHREYXRlIiwib25TZWxlY3QiLCJzZWxlY3QiLCJkYXRlU3RyaW5nIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwic2VhcmNoTWVldGluZ3MiLCJzZWxlY3RlZERhdGVPcHRpb24iLCJzZWFyY2hUZXh0IiwidXJsIiwiYWRkQXR0ZW5kZWVUb01lZXRpbmciLCJlbWFpbCIsImV4Y3VzZUZyb21NZWV0aW5nIiwiYWRkTWVldGluZyIsInN1Ym1pdEpTT04iLCJzdGFydFRpbWUiLCJlbmRUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQ2pCLE1BQUtDLFlBQVksQ0FBQ0MsT0FBYixDQUFzQkMsNkNBQXRCLE1BQWtDLElBQXZDLEVBQThDO0FBQzFDQyxVQUFNLENBQUNDLFFBQVAsR0FBa0IsUUFBbEI7QUFDSDs7QUFFRCxNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixRQUF6QixDQUFyQjtBQUNBRixjQUFZLENBQUNHLFlBQWIsQ0FBMkIsS0FBM0IsWUFBcUNDLG9EQUFyQyxjQUFxRFQsWUFBWSxDQUFDQyxPQUFiLENBQXNCUywwQ0FBdEIsQ0FBckQ7O0FBRUEsOEJBQW9CVixZQUFZLENBQUNDLE9BQWIsQ0FBc0JVLDRDQUF0QixFQUE2QkMsS0FBN0IsQ0FBb0MsR0FBcEMsQ0FBcEI7QUFBQTtBQUFBLE1BQU9DLFNBQVA7O0FBQ0FQLFVBQVEsQ0FBQ0MsY0FBVCxDQUF5QixTQUF6QixFQUFxQ08sU0FBckMsR0FBaURELFNBQWpEO0FBQ0g7O0FBRURkLFNBQVMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2dCLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXlCO0FBQ3JCLE1BQU1DLFlBQVksR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQXlCLGNBQXpCLENBQXJCO0FBQ0EsTUFBTVcsV0FBVyxHQUFHWixRQUFRLENBQUNDLGNBQVQsQ0FBeUIsYUFBekIsQ0FBcEI7QUFFQSxNQUFNWSxVQUFVLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxFQUFpRCxNQUFqRCxFQUNmLE1BRGUsRUFDUCxRQURPLEVBQ0csV0FESCxFQUNnQixTQURoQixFQUMyQixVQUQzQixFQUN1QyxVQUR2QyxDQUFuQjtBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLEVBQWdDLFdBQWhDLEVBQTZDLFVBQTdDLEVBQXlELFFBQXpELEVBQW1FLFVBQW5FLENBQWpCO0FBRUFILGNBQVksQ0FBQ0gsU0FBYixhQUE0QkUsSUFBSSxDQUFDSyxPQUFMLEVBQTVCLGNBQThDRixVQUFVLENBQUNILElBQUksQ0FBQ00sUUFBTCxFQUFELENBQXhELGNBQTZFTixJQUFJLENBQUNPLFdBQUwsRUFBN0U7QUFDQUwsYUFBVyxDQUFDSixTQUFaLEdBQXdCTSxRQUFRLENBQUNKLElBQUksQ0FBQ1EsTUFBTCxFQUFELENBQWhDO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLG1CQUFULENBQThCVCxJQUE5QixFQUFxQztBQUNqQyxNQUFNVSxpQkFBaUIsR0FBR3BCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixtQkFBekIsQ0FBMUI7QUFDQW1CLG1CQUFpQixDQUFDWixTQUFsQixHQUE4QixFQUE5QixDQUZpQyxDQUdqQzs7QUFDQSxPQUFNLElBQUlhLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUcsRUFBckIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFrQztBQUM5QixRQUFJQyxJQUFJLEdBQUcsR0FBWDs7QUFDQSxRQUFLRCxDQUFDLElBQUksQ0FBVixFQUFjO0FBQ1ZDLFVBQUksY0FBT0QsQ0FBUCxDQUFKO0FBQ0gsS0FGRCxNQUVPO0FBQ0hDLFVBQUksR0FBR0QsQ0FBUDtBQUNIOztBQUNERCxxQkFBaUIsQ0FBQ1osU0FBbEIsaUhBRTJDYyxJQUYzQyx5R0FHcUVELENBSHJFO0FBS0g7O0FBRUQsT0FBTSxJQUFJQSxFQUFDLEdBQUcsRUFBZCxFQUFrQkEsRUFBQyxHQUFHLEVBQXRCLEVBQTBCQSxFQUFDLElBQUksQ0FBL0IsRUFBbUM7QUFDL0IsUUFBSUMsS0FBSSxHQUFHLEdBQVg7O0FBQ0EsUUFBS0QsRUFBQyxJQUFJLENBQVYsRUFBYztBQUNWQyxXQUFJLGNBQU9ELEVBQVAsQ0FBSjtBQUNILEtBRkQsTUFFTztBQUNIQyxXQUFJLEdBQUdELEVBQVA7QUFDSDs7QUFDREQscUJBQWlCLENBQUNaLFNBQWxCLGlIQUUyQ2MsS0FGM0MseUdBR3FFRCxFQUhyRTtBQUtILEdBOUJnQyxDQWdDakM7OztBQUNBLE1BQU1FLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQUQsT0FBSyxDQUFDRSxRQUFOLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBbENpQyxDQW1DakM7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHaEIsSUFBbkI7QUFDQWdCLFlBQVUsQ0FBQ0QsUUFBWCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixDQUE5Qjs7QUFDQSxNQUFLQyxVQUFVLENBQUNDLE9BQVgsT0FBeUJKLEtBQUssQ0FBQ0ksT0FBTixFQUE5QixFQUFnRDtBQUM1QyxRQUFNQyxHQUFHLEdBQUcsSUFBSUosSUFBSixFQUFaO0FBQ0EsUUFBSUssSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0csUUFBSixFQUFmOztBQUNBLFFBQUtILEdBQUcsQ0FBQ0csUUFBSixNQUFrQixFQUF2QixFQUE0QjtBQUN4QkYsVUFBSSxHQUFHLElBQVA7QUFDQUMsY0FBUSxJQUFJLEVBQVo7QUFDSDs7QUFDRCxRQUFNRSxPQUFPLEdBQUdoQyxRQUFRLENBQUNpQyxhQUFULENBQXdCLEtBQXhCLENBQWhCO0FBQ0FELFdBQU8sQ0FBQzlCLFlBQVIsQ0FBc0IsT0FBdEIsRUFBK0IsaUJBQS9CO0FBQ0E4QixXQUFPLENBQUNFLEtBQVIsQ0FBY0MsR0FBZCxhQUF1QlAsR0FBRyxDQUFDRyxRQUFKLE1BQW1CLEtBQUssRUFBeEIsSUFBK0JILEdBQUcsQ0FBQ1EsVUFBSixFQUF0RDtBQUNBSixXQUFPLENBQUN4QixTQUFSLCtDQUF1RHNCLFFBQXZELGNBQW1FRixHQUFHLENBQUNRLFVBQUosRUFBbkUsY0FBdUZQLElBQXZGLHNHQVg0QyxDQWE1Qzs7QUFDQVQscUJBQWlCLENBQUNpQixXQUFsQixDQUErQkwsT0FBL0I7QUFDSDtBQUNKOztBQUVELFNBQVNNLGdCQUFULENBQTJCQyxRQUEzQixFQUFzQztBQUNsQyxNQUFLQSxRQUFMLEVBQWdCO0FBQ1pBLFlBQVEsQ0FBQ0MsT0FBVCxDQUFrQixVQUFFQyxPQUFGLEVBQWU7QUFDN0IsVUFBTUMsZUFBZSxHQUFHQyw0REFBa0IsQ0FBRUYsT0FBTyxDQUFDLFdBQUQsQ0FBVCxFQUF3QkEsT0FBTyxDQUFDLFNBQUQsQ0FBL0IsQ0FBMUM7QUFDQSxVQUFNRyxTQUFTLEdBQUcsRUFBbEI7QUFDQUgsYUFBTyxDQUFDLFdBQUQsQ0FBUCxDQUFxQkQsT0FBckIsQ0FBOEIsVUFBRUssUUFBRixFQUFnQjtBQUMxQ0QsaUJBQVMsQ0FBQ0UsSUFBVixDQUFnQkQsUUFBUSxDQUFDLE9BQUQsQ0FBeEI7QUFDSCxPQUZELEVBSDZCLENBTzdCOztBQUNBLFVBQU1FLGNBQWMsR0FBRy9DLFFBQVEsQ0FBQ2lDLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBdkI7QUFDQWMsb0JBQWMsQ0FBQzdDLFlBQWYsQ0FBNkIsT0FBN0IsRUFBc0MsY0FBdEM7QUFDQTZDLG9CQUFjLENBQUM3QyxZQUFmLENBQTZCLElBQTdCLHlCQUFtRHVDLE9BQU8sQ0FBQyxLQUFELENBQTFEO0FBQ0FNLG9CQUFjLENBQUNiLEtBQWYsQ0FBcUJDLEdBQXJCLGFBQThCTSxPQUFPLENBQUMsV0FBRCxDQUFQLENBQXFCLFNBQXJCLENBQTlCO0FBQ0EsVUFBTU8sV0FBVyxHQUFHLENBQUVQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUIsT0FBbkIsSUFBOEJBLE9BQU8sQ0FBQyxXQUFELENBQVAsQ0FBcUIsT0FBckIsQ0FBaEMsSUFBa0UsRUFBdEY7QUFDQU0sb0JBQWMsQ0FBQ2IsS0FBZixDQUFxQmUsTUFBckIsYUFBaUNQLGVBQWUsR0FBR00sV0FBbkQ7QUFDQSxVQUFNRSxlQUFlLEdBQUdsRCxRQUFRLENBQUNpQyxhQUFULENBQXdCLElBQXhCLENBQXhCO0FBQ0FpQixxQkFBZSxDQUFDaEQsWUFBaEIsQ0FBOEIsSUFBOUIsRUFBb0MsbUJBQXBDO0FBQ0FnRCxxQkFBZSxDQUFDaEQsWUFBaEIsQ0FBOEIsT0FBOUIsRUFBdUMsbUJBQXZDO0FBQ0FnRCxxQkFBZSxDQUFDMUMsU0FBaEIsR0FBNEJpQyxPQUFPLENBQUMsTUFBRCxDQUFuQztBQUNBTSxvQkFBYyxDQUFDVixXQUFmLENBQTRCYSxlQUE1QjtBQUNBLFVBQU1DLG9CQUFvQixHQUFHbkQsUUFBUSxDQUFDaUMsYUFBVCxDQUF3QixHQUF4QixDQUE3QjtBQUNBa0IsMEJBQW9CLENBQUNqRCxZQUFyQixDQUFtQyxJQUFuQyxFQUF5Qyx3QkFBekM7QUFDQWlELDBCQUFvQixDQUFDakQsWUFBckIsQ0FBbUMsT0FBbkMsRUFBNEMsd0JBQTVDO0FBQ0FpRCwwQkFBb0IsQ0FBQzNDLFNBQXJCLEdBQWlDb0MsU0FBUyxDQUFDUSxJQUFWLENBQWdCLElBQWhCLENBQWpDO0FBQ0FMLG9CQUFjLENBQUNWLFdBQWYsQ0FBNEJjLG9CQUE1QjtBQUNBLFVBQU1FLGNBQWMsR0FBR1osT0FBTyxDQUFDLFdBQUQsQ0FBUCxDQUFxQixPQUFyQixDQUF2QjtBQUNBLFVBQU1hLGFBQWEsR0FBR3RELFFBQVEsQ0FBQ0MsY0FBVCx1QkFBd0NvRCxjQUF4QyxFQUF0QjtBQUNBQyxtQkFBYSxDQUFDakIsV0FBZCxDQUEyQlUsY0FBM0I7QUFDSCxLQTNCRDtBQTRCSDtBQUNKOztBQUVELFNBQVNRLElBQVQsR0FBZ0I7QUFDWjtBQUNBLE1BQUs3RCxZQUFZLENBQUNDLE9BQWIsQ0FBc0JDLDZDQUF0QixNQUFrQyxJQUF2QyxFQUE4QztBQUMxQ0MsVUFBTSxDQUFDQyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0g7O0FBRUQsTUFBTXlCLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQXhCLFVBQVEsQ0FBQ0MsY0FBVCxDQUF5QixZQUF6QixFQUF3Q3VELEtBQXhDLGFBQW1EakMsS0FBSyxDQUFDUixPQUFOLEVBQW5ELGNBQXNFUSxLQUFLLENBQUNQLFFBQU4sS0FBbUIsQ0FBekYsY0FBOEZPLEtBQUssQ0FBQ04sV0FBTixFQUE5RjtBQUNBUixTQUFPLENBQUVjLEtBQUYsQ0FBUDtBQUVBSixxQkFBbUIsQ0FBRSxJQUFJSyxJQUFKLEVBQUYsQ0FBbkIsQ0FWWSxDQVlaOztBQUNBaUMsbUVBQWEsQ0FBRWxDLEtBQUYsQ0FBYixDQUNLbUMsSUFETCxDQUNXLFVBQUVuQixRQUFGLEVBQWdCO0FBQ25CLFFBQUtBLFFBQVEsQ0FBQ29CLE9BQVQsS0FBcUJDLCtDQUExQixFQUFvQztBQUNoQ3RCLHNCQUFnQixDQUFFQyxRQUFRLENBQUNzQixJQUFYLENBQWhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hDLDJEQUFRLHlDQUFtQ0MsUUFBUSxDQUFDSixPQUE1QyxHQUF1RDNELFFBQVEsQ0FBQ2dFLElBQWhFLEVBQXNFQyxLQUF0RSxDQUFSO0FBQ0g7QUFDSixHQVBMLFdBUVksVUFBRUMsS0FBRixFQUFhO0FBQ2pCLFFBQUk7QUFDQUosMkRBQVEsd0JBQWtCSSxLQUFLLENBQUNILFFBQU4sQ0FBZUYsSUFBZixDQUFvQk0sV0FBdEMsR0FBcURuRSxRQUFRLENBQUNnRSxJQUE5RCxFQUFvRUMsS0FBcEUsQ0FBUjtBQUNILEtBRkQsQ0FFRSxnQkFBTTtBQUNKSCwyREFBUSx3QkFBa0JJLEtBQUssQ0FBQ1AsT0FBeEIsR0FBbUMzRCxRQUFRLENBQUNnRSxJQUE1QyxFQUFrREMsS0FBbEQsQ0FBUjtBQUNIO0FBQ0osR0FkTDtBQWVIOztBQUVELElBQU1HLE1BQU0sR0FBRyxJQUFJQyxPQUFKLENBQWE7QUFDeEJDLE9BQUssRUFBRXRFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixZQUF6QixDQURpQjtBQUV4QnNFLFVBRndCLG9CQUVkN0QsSUFGYyxFQUVQO0FBQ2I7QUFDQSxRQUFNOEQsR0FBRyxHQUFHOUQsSUFBSSxDQUFDSyxPQUFMLEVBQVo7QUFDQSxRQUFNMEQsS0FBSyxHQUFHL0QsSUFBSSxDQUFDTSxRQUFMLEtBQWtCLENBQWhDO0FBQ0EsUUFBTTBELElBQUksR0FBR2hFLElBQUksQ0FBQ08sV0FBTCxFQUFiO0FBQ0EscUJBQVV1RCxHQUFWLGNBQWlCQyxLQUFqQixjQUEwQkMsSUFBMUI7QUFDSCxHQVJ1QjtBQVN4QkMsZ0JBQWMsRUFBRSxJQVRRO0FBVXhCQyxVQUFRLEVBQUUsU0FBU0MsTUFBVCxHQUFrQjtBQUN4QnBFLFdBQU8sQ0FBRTJELE1BQU0sQ0FBQ3JELE9BQVAsRUFBRixDQUFQO0FBQ0FJLHVCQUFtQixDQUFFLElBQUlLLElBQUosQ0FBVTRDLE1BQU0sQ0FBQ3JELE9BQVAsRUFBVixDQUFGLENBQW5CO0FBQ0EwQyxxRUFBYSxDQUFFVyxNQUFNLENBQUNyRCxPQUFQLEVBQUYsQ0FBYixDQUNLMkMsSUFETCxDQUNXLFVBQUVuQixRQUFGLEVBQWdCO0FBQ25CLFVBQUtBLFFBQVEsQ0FBQ29CLE9BQVQsS0FBcUJDLCtDQUExQixFQUFvQztBQUNoQ3RCLHdCQUFnQixDQUFFQyxRQUFRLENBQUNzQixJQUFYLENBQWhCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hDLDZEQUFRLHlDQUFtQ0MsUUFBUSxDQUFDSixPQUE1QyxHQUF1RDNELFFBQVEsQ0FBQ2dFLElBQWhFLEVBQXNFQyxLQUF0RSxDQUFSO0FBQ0g7QUFDSixLQVBMLFdBUVksVUFBRUMsS0FBRixFQUFhO0FBQ2pCLFVBQUk7QUFDQUosNkRBQVEseUNBQW1DSSxLQUFLLENBQUNILFFBQU4sQ0FBZUYsSUFBZixDQUFvQk0sV0FBdkQsR0FBc0VuRSxRQUFRLENBQUNnRSxJQUEvRSxFQUFxRkMsS0FBckYsQ0FBUjtBQUNILE9BRkQsQ0FFRSxpQkFBTTtBQUNKSCw2REFBUSx5Q0FBbUNJLEtBQUssQ0FBQ1AsT0FBekMsR0FBb0QzRCxRQUFRLENBQUNnRSxJQUE3RCxFQUFtRUMsS0FBbkUsQ0FBUjtBQUNIO0FBQ0osS0FkTDtBQWVIO0FBNUJ1QixDQUFiLENBQWY7QUErQkFWLElBQUksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBRWVFLGE7Ozs7OzJFQUFmLGlCQUE4Qi9DLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRb0Usc0JBRFIsR0FDcUIsRUFEckI7O0FBRUksZ0JBQUtwRSxJQUFJLFlBQVljLElBQXJCLEVBQTRCO0FBQ3hCc0Qsd0JBQVUsYUFBTXBFLElBQUksQ0FBQ08sV0FBTCxFQUFOLGNBQTRCUCxJQUFJLENBQUNNLFFBQUwsS0FBa0IsQ0FBOUMsY0FBbUROLElBQUksQ0FBQ0ssT0FBTCxFQUFuRCxDQUFWO0FBQ0g7O0FBSkw7QUFBQSxtQkFLMkJnRSxnREFBQSxXQUNoQjVFLG9EQURnQiw0QkFDYzJFLFVBRGQsR0FFbkI7QUFDSUUscUJBQU8sRUFBRTtBQUNMQyw2QkFBYSxZQUFLQywrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUZtQixDQUwzQjs7QUFBQTtBQUtVbkIsb0JBTFY7QUFBQSw2Q0FjV0EsUUFBUSxDQUFDRixJQWRwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBaUJlc0IsYzs7Ozs7NEVBQWYsa0JBQStCQyxrQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EQyxzQkFBbkQsOERBQWdFLEVBQWhFO0FBQ1FDLGVBRFIsYUFDaUJuRixvREFEakIsK0JBQ2tEaUYsa0JBRGxEOztBQUVJLGdCQUFLQyxVQUFVLEtBQUssRUFBcEIsRUFBeUI7QUFDckJDLGlCQUFHLElBQUksVUFBUDtBQUNBQSxpQkFBRyxJQUFNRCxVQUFVLENBQUMvRSxLQUFYLENBQWtCLEdBQWxCLENBQUYsQ0FBNEI4QyxJQUE1QixDQUFrQyxLQUFsQyxDQUFQO0FBQ0g7O0FBTEw7QUFBQSxtQkFPMkIyQixnREFBQSxDQUNuQk8sR0FEbUIsRUFFbkI7QUFDSU4scUJBQU8sRUFBRTtBQUNMQyw2QkFBYSxZQUFLQywrQ0FBUSxFQUFiO0FBRFI7QUFEYixhQUZtQixDQVAzQjs7QUFBQTtBQU9VbkIsb0JBUFY7QUFBQSw4Q0FnQldBLFFBQVEsQ0FBQ0YsSUFoQnBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FtQmUwQixvQjs7Ozs7a0ZBQWYsa0JBQXFDOUMsT0FBckMsRUFBOEMrQyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQlQsa0RBQUEsV0FDaEI1RSxvREFEZ0IsdUJBQ1NzQyxPQUFPLENBQUMsS0FBRCxDQURoQix3Q0FDcUQrQyxLQURyRCxHQUVuQixFQUZtQixFQUduQjtBQUNJUixxQkFBTyxFQUFFO0FBQ0xDLDZCQUFhLFlBQUtDLCtDQUFRLEVBQWI7QUFEUjtBQURiLGFBSG1CLENBRDNCOztBQUFBO0FBQ1VuQixvQkFEVjtBQUFBLDhDQVdXQSxRQUFRLENBQUNGLElBWHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FjZTRCLGlCOzs7OzsrRUFBZixrQkFBa0NoRCxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQnNDLGtEQUFBLFdBQ2hCNUUsb0RBRGdCLHVCQUNTc0MsT0FBTyxDQUFDLEtBQUQsQ0FEaEIsOEJBRW5CLEVBRm1CLEVBR25CO0FBQ0l1QyxxQkFBTyxFQUFFO0FBQ0xDLDZCQUFhLFlBQUtDLCtDQUFRLEVBQWI7QUFEUjtBQURiLGFBSG1CLENBRDNCOztBQUFBO0FBQ1VuQixvQkFEVjtBQUFBLDhDQVdXQSxRQUFRLENBQUNGLElBWHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FjZTZCLFU7O0VBY2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7d0VBdENBLGtCQUEyQkMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDMkJaLGlEQUFBLFdBQ2hCNUUsb0RBRGdCLGlCQUVuQndGLFVBRm1CLEVBR25CO0FBQ0lYLHFCQUFPLEVBQUU7QUFDTEMsNkJBQWEsWUFBS0MsK0NBQVEsRUFBYjtBQURSO0FBRGIsYUFIbUIsQ0FEM0I7O0FBQUE7QUFDVW5CLG9CQURWO0FBQUEsOENBV1dBLFFBQVEsQ0FBQ0YsSUFYcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTbEIsa0JBQVQsQ0FBNkJpRCxTQUE3QixFQUF3Q0MsT0FBeEMsRUFBa0Q7QUFDOUMsU0FBU0EsT0FBTyxDQUFDLFNBQUQsQ0FBUCxHQUFxQkEsT0FBTyxDQUFDLE9BQUQsQ0FBUCxHQUFtQixFQUExQyxJQUFtREQsU0FBUyxDQUFDLFNBQUQsQ0FBVCxHQUF1QkEsU0FBUyxDQUFDLE9BQUQsQ0FBVCxHQUFxQixFQUEvRixDQUFQO0FBQ0g7O0FBRUQsaUVBQWVqRCxrQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELHdCQUF3QixLQUFLLFlBQVkseUJBQXlCLDRCQUE0QixrQkFBa0IsaURBQWlELEtBQUssNkJBQTZCLDJCQUEyQixLQUFLLHdCQUF3QiwyQkFBMkIscUJBQXFCLDRCQUE0QixLQUFLLDJCQUEyQiwyQkFBMkIsMEJBQTBCLEtBQUssdUJBQXVCLDJCQUEyQixvQkFBb0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsc0JBQXNCLG1EQUFtRCx1Q0FBdUMsdURBQXVELHlCQUF5QiwyQkFBMkIsS0FBSyw0QkFBNEIsd0JBQXdCLHlCQUF5QixrQ0FBa0MsS0FBSyxpQ0FBaUMsd0JBQXdCLHlCQUF5QixrQ0FBa0MsS0FBSyxtQkFBbUIsMkJBQTJCLG9CQUFvQixLQUFLLDRCQUE0QixzQ0FBc0Msd0JBQXdCLG9CQUFvQiwyQkFBMkIsS0FBSyxPQUFPLHVGQUF1RixVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksaUNBQWlDLHdCQUF3QixLQUFLLFlBQVkseUJBQXlCLDRCQUE0QixrQkFBa0IsaURBQWlELEtBQUssNkJBQTZCLDJCQUEyQixLQUFLLHdCQUF3QiwyQkFBMkIscUJBQXFCLDRCQUE0QixLQUFLLDJCQUEyQiwyQkFBMkIsMEJBQTBCLEtBQUssdUJBQXVCLDJCQUEyQixvQkFBb0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsc0JBQXNCLG1EQUFtRCx1Q0FBdUMsdURBQXVELHlCQUF5QiwyQkFBMkIsS0FBSyw0QkFBNEIsd0JBQXdCLHlCQUF5QixrQ0FBa0MsS0FBSyxpQ0FBaUMsd0JBQXdCLHlCQUF5QixrQ0FBa0MsS0FBSyxtQkFBbUIsMkJBQTJCLG9CQUFvQixLQUFLLDRCQUE0QixzQ0FBc0Msd0JBQXdCLG9CQUFvQiwyQkFBMkIsS0FBSyxtQkFBbUI7QUFDempHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHOzs7O0FBSXRHOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7O0FBRXBDLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7O1VDMUI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLHdDQUF3QztXQUN0RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQixxQkFBcUI7V0FDckM7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfQkFTRV9VUkwsIElELCBOQU1FLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFRPS0VOICkgPT09IG51bGwgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICduYXZQaWMnICk7XHJcbiAgICBwcm9maWxlSW1hZ2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgYCR7QVBJX0JBU0VfVVJMfS8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCBJRCApfS5wbmdgICk7XHJcblxyXG4gICAgY29uc3QgW2ZpcnN0TmFtZV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggTkFNRSApLnNwbGl0KCAnICcgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbmFtZU5hdicgKS5pbm5lckhUTUwgPSBmaXJzdE5hbWU7XHJcbn1cclxuXHJcbnNldE5hdmJhcigpO1xyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0IHsgZmV0Y2hNZWV0aW5ncyB9IGZyb20gJy4vc2VydmljZXMvbWVldGluZ3MnO1xyXG5pbXBvcnQgZ2V0TWVldGluZ0R1cmF0aW9uIGZyb20gJy4vdXRpbC9tZWV0aW5nc191dGlsJztcclxuaW1wb3J0IHsgU1VDQ0VTUywgVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBzZXREYXRlKCBkYXRlICkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RlZERhdGUnICk7XHJcbiAgICBjb25zdCBzZWxlY3RlZERheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0ZWREYXknICk7XHJcblxyXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXHJcbiAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcblxyXG4gICAgY29uc3QgZGF5TmFtZXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XHJcblxyXG4gICAgc2VsZWN0ZWREYXRlLmlubmVySFRNTCA9IGAke2RhdGUuZ2V0RGF0ZSgpfSAke21vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXX0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgIHNlbGVjdGVkRGF5LmlubmVySFRNTCA9IGRheU5hbWVzW2RhdGUuZ2V0RGF5KCldO1xyXG59XHJcblxyXG4vKipcclxuICogZnVuY3Rpb24gdG8gZHJhdyB0aGUgbGF5b3V0IG9mIHRoZSAyNCBob3VycyBvZiBjYWxlbmRhclxyXG4gKi9cclxuZnVuY3Rpb24gZHJhd0luaXRpYWxDYWxlbmRhciggZGF0ZSApIHtcclxuICAgIGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdjYWxlbmRhckNvbnRhaW5lcicgKTtcclxuICAgIGNhbGVuZGFyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gYWRkIGluZGl2aWR1YWwgaG91cnMgLSBhbVxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgMTI7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICcwJztcclxuICAgICAgICBpZiAoIGkgPD0gOSApIHtcclxuICAgICAgICAgICAgdGV4dCA9IGAwJHtpfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGVuZGFyQ29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyLXRleHQgcHgtMlwiPiR7dGV4dH06MDAgYW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXItYmcgcHgtMiBmbGV4LWdyb3ctMVwiIGlkPVwiY2FsZW5kYXJIb3VyJHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBgO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoIGxldCBpID0gMTI7IGkgPCAyNDsgaSArPSAxICkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gJzAnO1xyXG4gICAgICAgIGlmICggaSA8PSA5ICkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gYDAke2l9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsZW5kYXJDb250YWluZXIuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXItdGV4dCBweC0yXCI+JHt0ZXh0fTowMCBwbTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ci1iZyBweC0yIGZsZXgtZ3Jvdy0xXCIgaWQ9XCJjYWxlbmRhckhvdXIke2l9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IGA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyBjdXJyZW50IHRpbWVcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5LnNldEhvdXJzKCAwLCAwLCAwLCAwICk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICAgIGNvbnN0IHBpY2tlckRhdGUgPSBkYXRlO1xyXG4gICAgcGlja2VyRGF0ZS5zZXRIb3VycyggMCwgMCwgMCwgMCApO1xyXG4gICAgaWYgKCBwaWNrZXJEYXRlLmdldFRpbWUoKSA9PT0gdG9kYXkuZ2V0VGltZSgpICkge1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRpbWUgPSAnYW0nO1xyXG4gICAgICAgIGxldCBob3VyVGV4dCA9IG5vdy5nZXRIb3VycygpO1xyXG4gICAgICAgIGlmICggbm93LmdldEhvdXJzKCkgPj0gMTIgKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSAncG0nO1xyXG4gICAgICAgICAgICBob3VyVGV4dCAtPSAxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGltZU5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgdGltZU5vdy5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICd0aW1lLW5vdyBkLWZsZXgnICk7XHJcbiAgICAgICAgdGltZU5vdy5zdHlsZS50b3AgPSBgJHtub3cuZ2V0SG91cnMoKSAqICggNjAgKyAxMCApICsgbm93LmdldE1pbnV0ZXMoKX1weGA7XHJcbiAgICAgICAgdGltZU5vdy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRpbWUtbm93LXRleHQgcHgtMlwiPiR7aG91clRleHR9OiR7bm93LmdldE1pbnV0ZXMoKX0gJHt0aW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xIGJnLWluZm8gdGltZS1ub3ctbGluZVwiIGlkPVwidGltZU5vd0hyXCI+PC9kaXY+YDtcclxuICAgICAgICAvLyBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnY2FsZW5kYXJDb250YWluZXInICk7XHJcbiAgICAgICAgY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoIHRpbWVOb3cgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVDYWxlbmRhciggbWVldGluZ3MgKSB7XHJcbiAgICBpZiAoIG1lZXRpbmdzICkge1xyXG4gICAgICAgIG1lZXRpbmdzLmZvckVhY2goICggbWVldGluZyApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVldGluZ0R1cmF0aW9uID0gZ2V0TWVldGluZ0R1cmF0aW9uKCBtZWV0aW5nWydzdGFydFRpbWUnXSwgbWVldGluZ1snZW5kVGltZSddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlcyA9IFtdO1xyXG4gICAgICAgICAgICBtZWV0aW5nWydhdHRlbmRlZXMnXS5mb3JFYWNoKCAoIGF0dGVuZGVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIGF0dGVuZGVlWydlbWFpbCddICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtZWV0aW5nIGNhcmQgYW5kIGF0dGFjaCBpdCB0byB0aGUgcmVzcGVjdGl2ZSBob3VyIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtbWVldGluZycgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuc2V0QXR0cmlidXRlKCAnaWQnLCBgY2FyZC1tZWV0aW5nLSR7bWVldGluZ1snX2lkJ119YCApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5zdHlsZS50b3AgPSBgJHttZWV0aW5nWydzdGFydFRpbWUnXVsnbWludXRlcyddfXB4YDtcclxuICAgICAgICAgICAgY29uc3QgZXh0cmFIZWlnaHQgPSAoIG1lZXRpbmdbJ2VuZFRpbWUnXVsnaG91cnMnXSAtIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydob3VycyddICkgKiAxMDtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuc3R5bGUuaGVpZ2h0ID0gYCR7bWVldGluZ0R1cmF0aW9uICsgZXh0cmFIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5zZXRBdHRyaWJ1dGUoICdpZCcsICdjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuaW5uZXJIVE1MID0gbWVldGluZ1snbmFtZSddO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdOYW1lICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nQXR0ZW5kZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nQXR0ZW5kZWVzLnNldEF0dHJpYnV0ZSggJ2lkJywgJ2NhcmQtbWVldGluZy1hdHRlbmRlZXMnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nQXR0ZW5kZWVzLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NhcmQtbWVldGluZy1hdHRlbmRlZXMnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGF0dGVuZGVlcy5qb2luKCAnLCAnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ0F0dGVuZGVlcyApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWVIb3VycyA9IG1lZXRpbmdbJ3N0YXJ0VGltZSddWydob3VycyddO1xyXG4gICAgICAgICAgICBjb25zdCBob3VyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGBjYWxlbmRhckhvdXIke3N0YXJ0VGltZUhvdXJzfWAgKTtcclxuICAgICAgICAgICAgaG91ckNvbnRhaW5lci5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdEaXYgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGF1dGhvcml6YXRpb24gdG9rZW4gZG9lc250IGV4aXN0XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZGF0ZXBpY2tlcicgKS52YWx1ZSA9IGAke3RvZGF5LmdldERhdGUoKX0vJHt0b2RheS5nZXRNb250aCgpICsgMX0vJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICBzZXREYXRlKCB0b2RheSApO1xyXG5cclxuICAgIGRyYXdJbml0aWFsQ2FsZW5kYXIoIG5ldyBEYXRlKCkgKTtcclxuXHJcbiAgICAvLyBmZXRjaCBtZWV0aW5ncyBmb3IgdG9kYXkgYW5kIHBvcHVsYXRlIHRoZSBjYWxlbmRhciBjb250YWluZXJzXHJcbiAgICBmZXRjaE1lZXRpbmdzKCB0b2RheSApXHJcbiAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIHBvcHVsYXRlQ2FsZW5kYXIoIG1lZXRpbmdzLmRhdGEgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYExvZ2luIEVycm9yOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYExvZ2luIEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxufVxyXG5cclxuY29uc3QgcGlja2VyID0gbmV3IFBpa2FkYXkoIHtcclxuICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2RhdGVwaWNrZXInICksXHJcbiAgICB0b1N0cmluZyggZGF0ZSApIHtcclxuICAgICAgICAvLyByZXR1cm4gJ0QvTS9ZWVlZJ1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgfSxcclxuICAgIHNldERlZmF1bHREYXRlOiB0cnVlLFxyXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcclxuICAgICAgICBzZXREYXRlKCBwaWNrZXIuZ2V0RGF0ZSgpICk7XHJcbiAgICAgICAgZHJhd0luaXRpYWxDYWxlbmRhciggbmV3IERhdGUoIHBpY2tlci5nZXREYXRlKCkgKSApO1xyXG4gICAgICAgIGZldGNoTWVldGluZ3MoIHBpY2tlci5nZXREYXRlKCkgKVxyXG4gICAgICAgICAgICAudGhlbiggKCBtZWV0aW5ncyApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggbWVldGluZ3MubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhbGVuZGFyKCBtZWV0aW5ncy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9LFxyXG59ICk7XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVldGluZ3MoIGRhdGUgKSB7XHJcbiAgICBsZXQgZGF0ZVN0cmluZyA9ICcnO1xyXG4gICAgaWYgKCBkYXRlIGluc3RhbmNlb2YgRGF0ZSApIHtcclxuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vY2FsZW5kYXI/ZGF0ZT0ke2RhdGVTdHJpbmd9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiwgc2VhcmNoVGV4dCA9ICcnICkge1xyXG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvP3BlcmlvZD0ke3NlbGVjdGVkRGF0ZU9wdGlvbn1gO1xyXG4gICAgaWYgKCBzZWFyY2hUZXh0ICE9PSAnJyApIHtcclxuICAgICAgICB1cmwgKz0gJyZzZWFyY2g9JztcclxuICAgICAgICB1cmwgKz0gKCBzZWFyY2hUZXh0LnNwbGl0KCAnICcgKSApLmpvaW4oICclMjAnICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRBdHRlbmRlZVRvTWVldGluZyggbWVldGluZywgZW1haWwgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvJHttZWV0aW5nWydfaWQnXX0/YWN0aW9uPWFkZF9hdHRlbmRlZSZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21NZWV0aW5nKCBtZWV0aW5nICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L21lZXRpbmdzLyR7bWVldGluZ1snX2lkJ119P2FjdGlvbj1yZW1vdmVfYXR0ZW5kZWVgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRNZWV0aW5nKCBzdWJtaXRKU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vbWVldGluZ3MvYCxcclxuICAgICAgICBzdWJtaXRKU09OLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7Z2V0VG9rZW4oKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBmZXRjaE1lZXRpbmdCeUlkKCBpZCApIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4vLyAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vd29ya3Nob3BzLyR7aWR9YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRUb2tlbigpfWAsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lZXRpbmdCeUlkKCBpZCApIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFxyXG4vLyAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vd29ya3Nob3BzLyR7aWR9YCxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRUb2tlbigpfWAsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4vLyB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgZmV0Y2hNZWV0aW5ncyxcclxuICAgIHNlYXJjaE1lZXRpbmdzLFxyXG4gICAgYWRkQXR0ZW5kZWVUb01lZXRpbmcsXHJcbiAgICBleGN1c2VGcm9tTWVldGluZyxcclxuICAgIGFkZE1lZXRpbmcsXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1lZXRpbmcgZHVyYXRpb24gaW4gbWludXRlcyBwcm92aWRlZCB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lIG9mIHNhbWUgZGF5XHJcbiAqIEBwYXJhbSB7SlNPTn0gc3RhcnRUaW1lIFRoZSBmb3JtYXQgZm9yIHN0YXJ0IHRpbWUgaXMgeyBcImhvdXJzXCI6IDksIFwibWludXRlc1wiOiAwIH1cclxuICogQHBhcmFtIHtKU09OfSBFbmRUaW1lIFRoZSBmb3JtYXQgZm9yIGVuZCB0aW1lIGlzIHsgXCJob3Vyc1wiOiA5LCBcIm1pbnV0ZXNcIjogMCB9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNZWV0aW5nRHVyYXRpb24oIHN0YXJ0VGltZSwgZW5kVGltZSApIHtcclxuICAgIHJldHVybiAoIGVuZFRpbWVbJ21pbnV0ZXMnXSArIGVuZFRpbWVbJ2hvdXJzJ10gKiA2MCApIC0gKCBzdGFydFRpbWVbJ21pbnV0ZXMnXSArIHN0YXJ0VGltZVsnaG91cnMnXSAqIDYwICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1lZXRpbmdEdXJhdGlvbjtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1ob3VyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhci1ob3VyLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMCwgMjExLCAxMTgsIDAuNCk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJlY2M3MTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDdweCAxNHB4IC01cHggcmdiYSgwLDAsMCwwLjI1KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tZWV0aW5nLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiBoc2woMTQ1LCA2MyUsIDM4JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmctYXR0ZW5kZWVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogaHNsKDE0NSwgNjMlLCAzOCUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZS1ub3cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGltZS1ub3ctdGV4dCB7XFxyXFxuICAgIGNvbG9yOiBoc2woMjAyLCA5OCUsIDU4JSlcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93LWxpbmUge1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsOEJBQThCO0lBQzlCLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ci1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzAsIDIxMSwgMTE4LCAwLjQpO1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyZWNjNzE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCA3cHggMTRweCAtNXB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVldGluZy1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogaHNsKDE0NSwgNjMlLCAzOCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tZWV0aW5nLWF0dGVuZGVlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgY29sb3I6IGhzbCgxNDUsIDYzJSwgMzglKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpbWUtbm93LXRleHQge1xcclxcbiAgICBjb2xvcjogaHNsKDIwMiwgOTglLCA1OCUpXFxyXFxufVxcclxcblxcclxcbi50aW1lLW5vdy1saW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWVldGluZ3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci0xNTc0MDZcIixcInB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfYXV0aF9qcy1wdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zYy00ZWEyYTFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=