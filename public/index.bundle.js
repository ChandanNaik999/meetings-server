/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      var cardMeetingNameDiv = document.createElement('div');
      cardMeetingNameDiv.setAttribute('class', 'row');
      var cardMeetingName = document.createElement('h5');
      cardMeetingName.setAttribute('id', 'card-meeting-name');
      cardMeetingName.setAttribute('class', 'col-auto me-auto card-meeting-name');
      cardMeetingName.innerHTML = meeting['name'];
      var cardMeetingTime = document.createElement('h5');
      cardMeetingTime.setAttribute('id', 'card-meeting-time');
      cardMeetingTime.setAttribute('class', 'col-auto card-meeting-name');
      var startTime = formatTime(meeting['startTime']['hours'], meeting['startTime']['minutes']);
      var endTime = formatTime(meeting['endTime']['hours'], meeting['endTime']['minutes']);
      cardMeetingTime.innerHTML = "".concat(startTime, "-").concat(endTime, " (").concat(meetingDuration, " mins)");
      cardMeetingNameDiv.appendChild(cardMeetingName);
      cardMeetingNameDiv.appendChild(cardMeetingTime);
      cardMeetingDiv.appendChild(cardMeetingNameDiv);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.calendar-container {\r\n    position: relative;\r\n}\r\n\r\n.calendar-hour {\r\n    position: relative;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.calendar-hour-bg {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.card-meeting {\r\n    position: absolute;\r\n    width: auto;\r\n    right: 10px;\r\n    left: 10px;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    background-color: hsla(145, 45%, 60%, 0.438);\r\n    border-left: 4px solid #2ecc71;\r\n    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.25);\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n    min-height: 40px;\r\n}\r\n\r\n.card-meeting:hover {\r\n    z-index: 3;\r\n    background: rgb(46,204,113);\r\n    background: linear-gradient(90deg, rgba(46,204,113,1) 0%, rgba(43,190,114,1) 100%);\r\n    border-left: none;\r\n    overflow: visible;\r\n    height: max-content !important;\r\n    transform: scale(1.1);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n.card-meeting-name {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-name{\r\n    color: white;\r\n}\r\n.card-meeting-attendees {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-attendees {\r\n    color: white;\r\n}\r\n\r\n.time-now {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.time-now-text {\r\n    color: hsl(202, 98%, 58%)\r\n}\r\n\r\n.time-now-line {\r\n    height: 3px;\r\n    align-self: center;\r\n}\r\n\r\n.date-input{\r\n    border-width: 1px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./public/css/index.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,UAAU;IACV,aAAa;IACb,4CAA4C;IAC5C,8BAA8B;IAC9B,8CAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,2BAA2B;IAC3B,kFAAkF;IAClF,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;;AAGA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.calendar-container {\r\n    position: relative;\r\n}\r\n\r\n.calendar-hour {\r\n    position: relative;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.calendar-hour-bg {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.card-meeting {\r\n    position: absolute;\r\n    width: auto;\r\n    right: 10px;\r\n    left: 10px;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    background-color: hsla(145, 45%, 60%, 0.438);\r\n    border-left: 4px solid #2ecc71;\r\n    box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.25);\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n    min-height: 40px;\r\n}\r\n\r\n.card-meeting:hover {\r\n    z-index: 3;\r\n    background: rgb(46,204,113);\r\n    background: linear-gradient(90deg, rgba(46,204,113,1) 0%, rgba(43,190,114,1) 100%);\r\n    border-left: none;\r\n    overflow: visible;\r\n    height: max-content !important;\r\n    transform: scale(1.1);\r\n    transition: .2s ease-in-out;\r\n}\r\n\r\n.card-meeting-name {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-name{\r\n    color: white;\r\n}\r\n.card-meeting-attendees {\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    color: #2ecc71;\r\n}\r\n.card-meeting:hover .card-meeting-attendees {\r\n    color: white;\r\n}\r\n\r\n.time-now {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.time-now-text {\r\n    color: hsl(202, 98%, 58%)\r\n}\r\n\r\n.time-now-line {\r\n    height: 3px;\r\n    align-self: center;\r\n}\r\n\r\n.date-input{\r\n    border-width: 1px;\r\n}\r\n"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0","public_js_app_js-public_js_customs_app_js-public_js_services_meetings_js"], () => (__webpack_require__("./public/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy91dGlsL21lZXRpbmdzX3V0aWwuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvaW5kZXguY3NzP2ZmNTYiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImZvcm1hdFRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJyZXN1bHQiLCJzZXREYXRlIiwiZGF0ZSIsInNlbGVjdGVkRGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RlZERheSIsIm1vbnRoTmFtZXMiLCJkYXlOYW1lcyIsImlubmVySFRNTCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0RGF5IiwiZHJhd0luaXRpYWxDYWxlbmRhciIsImNhbGVuZGFyQ29udGFpbmVyIiwiaSIsInRleHQiLCJ0b2RheSIsIkRhdGUiLCJzZXRIb3VycyIsInBpY2tlckRhdGUiLCJnZXRUaW1lIiwibm93IiwidGltZSIsImhvdXJUZXh0IiwiZ2V0SG91cnMiLCJ0aW1lTm93IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwidG9wIiwiZ2V0TWludXRlcyIsImFwcGVuZENoaWxkIiwicG9wdWxhdGVDYWxlbmRhciIsIm1lZXRpbmdzIiwiZm9yRWFjaCIsIm1lZXRpbmciLCJtZWV0aW5nRHVyYXRpb24iLCJnZXRNZWV0aW5nRHVyYXRpb24iLCJhdHRlbmRlZXMiLCJhdHRlbmRlZSIsInB1c2giLCJjYXJkTWVldGluZ0RpdiIsImV4dHJhSGVpZ2h0IiwiaGVpZ2h0IiwiY2FyZE1lZXRpbmdOYW1lRGl2IiwiY2FyZE1lZXRpbmdOYW1lIiwiY2FyZE1lZXRpbmdUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImNhcmRNZWV0aW5nQXR0ZW5kZWVzIiwiam9pbiIsInN0YXJ0VGltZUhvdXJzIiwiaG91ckNvbnRhaW5lciIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInZhbHVlIiwiZmV0Y2hNZWV0aW5ncyIsInRoZW4iLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImRhdGEiLCJhZGRUb2FzdCIsInJlc3BvbnNlIiwiYm9keSIsIkVSUk9SIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInBpY2tlciIsIlBpa2FkYXkiLCJmaWVsZCIsInRvU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwic2V0RGVmYXVsdERhdGUiLCJvblNlbGVjdCIsInNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBNEJDLE9BQTVCLEVB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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgeyBmZXRjaE1lZXRpbmdzIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZWV0aW5ncyc7XHJcbmltcG9ydCBnZXRNZWV0aW5nRHVyYXRpb24gZnJvbSAnLi91dGlsL21lZXRpbmdzX3V0aWwnO1xyXG5pbXBvcnQgeyBTVUNDRVNTLCBUT0tFTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWUoIGhvdXJzLCBtaW51dGVzICkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKCBob3VycyA8IDEwICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBgMCR7aG91cnN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGhvdXJzO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ICs9ICc6JztcclxuICAgIGlmICggbWludXRlcyA8IDEwICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBgMCR7bWludXRlc31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gbWludXRlcztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhdGUoIGRhdGUgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdGVkRGF0ZScgKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RlZERheScgKTtcclxuXHJcbiAgICBjb25zdCBtb250aE5hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcclxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuXHJcbiAgICBjb25zdCBkYXlOYW1lcyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcclxuXHJcbiAgICBzZWxlY3RlZERhdGUuaW5uZXJIVE1MID0gYCR7ZGF0ZS5nZXREYXRlKCl9ICR7bW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldfSAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgc2VsZWN0ZWREYXkuaW5uZXJIVE1MID0gZGF5TmFtZXNbZGF0ZS5nZXREYXkoKV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmdW5jdGlvbiB0byBkcmF3IHRoZSBsYXlvdXQgb2YgdGhlIDI0IGhvdXJzIG9mIGNhbGVuZGFyXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3SW5pdGlhbENhbGVuZGFyKCBkYXRlICkge1xyXG4gICAgY29uc3QgY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2NhbGVuZGFyQ29udGFpbmVyJyApO1xyXG4gICAgY2FsZW5kYXJDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBhZGQgaW5kaXZpZHVhbCBob3VycyAtIGFtXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAxICkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gJzAnO1xyXG4gICAgICAgIGlmICggaSA8PSA5ICkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gYDAke2l9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsZW5kYXJDb250YWluZXIuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWhvdXItdGV4dCBweC0yXCI+JHt0ZXh0fTowMCBhbTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ci1iZyBweC0yIGZsZXgtZ3Jvdy0xXCIgaWQ9XCJjYWxlbmRhckhvdXIke2l9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IGA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAxMjsgaSA8IDI0OyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSAnMCc7XHJcbiAgICAgICAgaWYgKCBpIDw9IDkgKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBgMCR7aX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxlbmRhckNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG91ci10ZXh0IHB4LTJcIj4ke3RleHR9OjAwIHBtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ob3VyLWJnIHB4LTIgZmxleC1ncm93LTFcIiBpZD1cImNhbGVuZGFySG91ciR7aX1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IGN1cnJlbnQgdGltZVxyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXkuc2V0SG91cnMoIDAsIDAsIDAsIDAgKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gICAgY29uc3QgcGlja2VyRGF0ZSA9IGRhdGU7XHJcbiAgICBwaWNrZXJEYXRlLnNldEhvdXJzKCAwLCAwLCAwLCAwICk7XHJcbiAgICBpZiAoIHBpY2tlckRhdGUuZ2V0VGltZSgpID09PSB0b2RheS5nZXRUaW1lKCkgKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgdGltZSA9ICdhbSc7XHJcbiAgICAgICAgbGV0IGhvdXJUZXh0ID0gbm93LmdldEhvdXJzKCk7XHJcbiAgICAgICAgaWYgKCBub3cuZ2V0SG91cnMoKSA+PSAxMiApIHtcclxuICAgICAgICAgICAgdGltZSA9ICdwbSc7XHJcbiAgICAgICAgICAgIGhvdXJUZXh0IC09IDEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aW1lTm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICB0aW1lTm93LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3RpbWUtbm93IGQtZmxleCcgKTtcclxuICAgICAgICB0aW1lTm93LnN0eWxlLnRvcCA9IGAke25vdy5nZXRIb3VycygpICogKCA2MCArIDEwICkgKyBub3cuZ2V0TWludXRlcygpfXB4YDtcclxuICAgICAgICB0aW1lTm93LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGltZS1ub3ctdGV4dCBweC0yXCI+JHtob3VyVGV4dH06JHtub3cuZ2V0TWludXRlcygpfSAke3RpbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgYmctaW5mbyB0aW1lLW5vdy1saW5lXCIgaWQ9XCJ0aW1lTm93SHJcIj48L2Rpdj5gO1xyXG4gICAgICAgIC8vIGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdjYWxlbmRhckNvbnRhaW5lcicgKTtcclxuICAgICAgICBjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGltZU5vdyApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUNhbGVuZGFyKCBtZWV0aW5ncyApIHtcclxuICAgIGlmICggbWVldGluZ3MgKSB7XHJcbiAgICAgICAgbWVldGluZ3MuZm9yRWFjaCggKCBtZWV0aW5nICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZWV0aW5nRHVyYXRpb24gPSBnZXRNZWV0aW5nRHVyYXRpb24oIG1lZXRpbmdbJ3N0YXJ0VGltZSddLCBtZWV0aW5nWydlbmRUaW1lJ10gKTtcclxuICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVzID0gW107XHJcbiAgICAgICAgICAgIG1lZXRpbmdbJ2F0dGVuZGVlcyddLmZvckVhY2goICggYXR0ZW5kZWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggYXR0ZW5kZWVbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1lZXRpbmcgY2FyZCBhbmQgYXR0YWNoIGl0IHRvIHRoZSByZXNwZWN0aXZlIGhvdXIgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY2FyZC1tZWV0aW5nJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5zZXRBdHRyaWJ1dGUoICdpZCcsIGBjYXJkLW1lZXRpbmctJHttZWV0aW5nWydfaWQnXX1gICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nRGl2LnN0eWxlLnRvcCA9IGAke21lZXRpbmdbJ3N0YXJ0VGltZSddWydtaW51dGVzJ119cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYUhlaWdodCA9ICggbWVldGluZ1snZW5kVGltZSddWydob3VycyddIC0gbWVldGluZ1snc3RhcnRUaW1lJ11bJ2hvdXJzJ10gKSAqIDEwO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5zdHlsZS5oZWlnaHQgPSBgJHttZWV0aW5nRHVyYXRpb24gKyBleHRyYUhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZURpdi5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdyb3cnICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRNZWV0aW5nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdoNScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLnNldEF0dHJpYnV0ZSggJ2lkJywgJ2NhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8gbWUtYXV0byBjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lLmlubmVySFRNTCA9IG1lZXRpbmdbJ25hbWUnXTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g1JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ1RpbWUuc2V0QXR0cmlidXRlKCAnaWQnLCAnY2FyZC1tZWV0aW5nLXRpbWUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nVGltZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0byBjYXJkLW1lZXRpbmctbmFtZScgKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gZm9ybWF0VGltZSggbWVldGluZ1snc3RhcnRUaW1lJ11bJ2hvdXJzJ10sIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydtaW51dGVzJ10gKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kVGltZSA9IGZvcm1hdFRpbWUoIG1lZXRpbmdbJ2VuZFRpbWUnXVsnaG91cnMnXSwgbWVldGluZ1snZW5kVGltZSddWydtaW51dGVzJ10gKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdUaW1lLmlubmVySFRNTCA9IGAke3N0YXJ0VGltZX0tJHtlbmRUaW1lfSAoJHttZWV0aW5nRHVyYXRpb259IG1pbnMpYDtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ05hbWUgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ1RpbWUgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZURpdiApO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ0F0dGVuZGVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0F0dGVuZGVlcy5zZXRBdHRyaWJ1dGUoICdpZCcsICdjYXJkLW1lZXRpbmctYXR0ZW5kZWVzJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0F0dGVuZGVlcy5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLW1lZXRpbmctYXR0ZW5kZWVzJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0F0dGVuZGVlcy5pbm5lckhUTUwgPSBhdHRlbmRlZXMuam9pbiggJywgJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ0Rpdi5hcHBlbmRDaGlsZCggY2FyZE1lZXRpbmdBdHRlbmRlZXMgKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lSG91cnMgPSBtZWV0aW5nWydzdGFydFRpbWUnXVsnaG91cnMnXTtcclxuICAgICAgICAgICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBgY2FsZW5kYXJIb3VyJHtzdGFydFRpbWVIb3Vyc31gICk7XHJcbiAgICAgICAgICAgIGhvdXJDb250YWluZXIuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nRGl2ICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBhdXRob3JpemF0aW9uIHRva2VuIGRvZXNudCBleGlzdFxyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2RhdGVwaWNrZXInICkudmFsdWUgPSBgJHt0b2RheS5nZXREYXRlKCl9LyR7dG9kYXkuZ2V0TW9udGgoKSArIDF9LyR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgc2V0RGF0ZSggdG9kYXkgKTtcclxuXHJcbiAgICBkcmF3SW5pdGlhbENhbGVuZGFyKCBuZXcgRGF0ZSgpICk7XHJcblxyXG4gICAgLy8gZmV0Y2ggbWVldGluZ3MgZm9yIHRvZGF5IGFuZCBwb3B1bGF0ZSB0aGUgY2FsZW5kYXIgY29udGFpbmVyc1xyXG4gICAgZmV0Y2hNZWV0aW5ncyggdG9kYXkgKVxyXG4gICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhbGVuZGFyKCBtZWV0aW5ncy5kYXRhICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBMb2dpbiBFcnJvcjogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBMb2dpbiBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBpY2tlciA9IG5ldyBQaWthZGF5KCB7XHJcbiAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdkYXRlcGlja2VyJyApLFxyXG4gICAgdG9TdHJpbmcoIGRhdGUgKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuICdEL00vWVlZWSdcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcclxuICAgIH0sXHJcbiAgICBzZXREZWZhdWx0RGF0ZTogdHJ1ZSxcclxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoKSB7XHJcbiAgICAgICAgc2V0RGF0ZSggcGlja2VyLmdldERhdGUoKSApO1xyXG4gICAgICAgIGRyYXdJbml0aWFsQ2FsZW5kYXIoIG5ldyBEYXRlKCBwaWNrZXIuZ2V0RGF0ZSgpICkgKTtcclxuICAgICAgICBmZXRjaE1lZXRpbmdzKCBwaWNrZXIuZ2V0RGF0ZSgpIClcclxuICAgICAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVDYWxlbmRhciggbWVldGluZ3MuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfSxcclxufSApO1xyXG5cclxuaW5pdCgpO1xyXG4iLCIvKipcclxuICogUmV0dXJuIHRoZSBtZWV0aW5nIGR1cmF0aW9uIGluIG1pbnV0ZXMgcHJvdmlkZWQgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZSBvZiBzYW1lIGRheVxyXG4gKiBAcGFyYW0ge0pTT059IHN0YXJ0VGltZSBUaGUgZm9ybWF0IGZvciBzdGFydCB0aW1lIGlzIHsgXCJob3Vyc1wiOiA5LCBcIm1pbnV0ZXNcIjogMCB9XHJcbiAqIEBwYXJhbSB7SlNPTn0gRW5kVGltZSBUaGUgZm9ybWF0IGZvciBlbmQgdGltZSBpcyB7IFwiaG91cnNcIjogOSwgXCJtaW51dGVzXCI6IDAgfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TWVldGluZ0R1cmF0aW9uKCBzdGFydFRpbWUsIGVuZFRpbWUgKSB7XHJcbiAgICByZXR1cm4gKCBlbmRUaW1lWydtaW51dGVzJ10gKyBlbmRUaW1lWydob3VycyddICogNjAgKSAtICggc3RhcnRUaW1lWydtaW51dGVzJ10gKyBzdGFydFRpbWVbJ2hvdXJzJ10gKiA2MCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNZWV0aW5nRHVyYXRpb247XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ci1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDQ1JSwgNjAlLCAwLjQzOCk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJlY2M3MTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDdweCAxNHB4IC01cHggcmdiYSgwLDAsMCwwLjI1KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tZWV0aW5nOmhvdmVyIHtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDQ2LDIwNCwxMTMpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDYsMjA0LDExMywxKSAwJSwgcmdiYSg0MywxOTAsMTE0LDEpIDEwMCUpO1xcclxcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmctbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICMyZWNjNzE7XFxyXFxufVxcclxcbi5jYXJkLW1lZXRpbmc6aG92ZXIgLmNhcmQtbWVldGluZy1uYW1le1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5jYXJkLW1lZXRpbmctYXR0ZW5kZWVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogIzJlY2M3MTtcXHJcXG59XFxyXFxuLmNhcmQtbWVldGluZzpob3ZlciAuY2FyZC1tZWV0aW5nLWF0dGVuZGVlcyB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpbWUtbm93LXRleHQge1xcclxcbiAgICBjb2xvcjogaHNsKDIwMiwgOTglLCA1OCUpXFxyXFxufVxcclxcblxcclxcbi50aW1lLW5vdy1saW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtaW5wdXR7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isa0ZBQWtGO0lBQ2xGLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXItaG91ci1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDQ1JSwgNjAlLCAwLjQzOCk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJlY2M3MTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDdweCAxNHB4IC01cHggcmdiYSgwLDAsMCwwLjI1KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tZWV0aW5nOmhvdmVyIHtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDQ2LDIwNCwxMTMpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDYsMjA0LDExMywxKSAwJSwgcmdiYSg0MywxOTAsMTE0LDEpIDEwMCUpO1xcclxcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lZXRpbmctbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICMyZWNjNzE7XFxyXFxufVxcclxcbi5jYXJkLW1lZXRpbmc6aG92ZXIgLmNhcmQtbWVldGluZy1uYW1le1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5jYXJkLW1lZXRpbmctYXR0ZW5kZWVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogIzJlY2M3MTtcXHJcXG59XFxyXFxuLmNhcmQtbWVldGluZzpob3ZlciAuY2FyZC1tZWV0aW5nLWF0dGVuZGVlcyB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtbm93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpbWUtbm93LXRleHQge1xcclxcbiAgICBjb2xvcjogaHNsKDIwMiwgOTglLCA1OCUpXFxyXFxufVxcclxcblxcclxcbi50aW1lLW5vdy1saW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtaW5wdXR7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfY3NzX2Jvb3RzdHJhcF9taW5fY3NzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19zdGFibGVfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZXItZWZkZGY3XCIsXCJwdWJsaWNfY3NzX21haW5fY3NzLWRhdGFfaW1hZ2Vfc3ZnX3htbF8zY3N2Z194bWxuc18yN2h0dHBfd3d3X3czX29yZ18yMDAwX3N2Z18yN192aWV3Qm94XzI3LTQtYjAxYmUwXCIsXCJwdWJsaWNfanNfYXBwX2pzLXB1YmxpY19qc19jdXN0b21zX2FwcF9qcy1wdWJsaWNfanNfc2VydmljZXNfbWVldGluZ3NfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=