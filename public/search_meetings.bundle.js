/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/search_meetings.js":
/*!**************************************!*\
  !*** ./public/js/search_meetings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./public/css/main.css");
/* harmony import */ var _css_add_meeting_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/add_meeting.css */ "./public/css/add_meeting.css");
/* harmony import */ var _css_search_meetings_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/search_meetings.css */ "./public/css/search_meetings.css");
/* harmony import */ var _customs_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customs/app */ "./public/js/customs/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./public/js/app.js");
/* harmony import */ var _services_meetings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/meetings */ "./public/js/services/meetings.js");
/* harmony import */ var _services_user_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user_management */ "./public/js/services/user_management.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./public/js/constants.js");
/* harmony import */ var _services_teams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/teams */ "./public/js/services/teams.js");
/* harmony import */ var _data_add_meeting_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/add_meeting_form */ "./public/js/data/add_meeting_form.js");











var searchDate = 'today';

function resetNav() {
  document.getElementById('pastButton').style.background = '#fff';
  document.getElementById('presentButton').style.background = '#fff';
  document.getElementById('upcomingButton').style.background = '#fff';
  document.getElementById('allButton').style.background = '#fff';
}

document.getElementById('pastButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('pastButton').style.background = '#f5f8fa';
  searchDate = 'past';
});
document.getElementById('presentButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('presentButton').style.background = '#f5f8fa';
  searchDate = 'present';
});
document.getElementById('allButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('allButton').style.background = '#f5f8fa';
  searchDate = 'all';
});
document.getElementById('upcomingButton').addEventListener('click', function () {
  resetNav();
  document.getElementById('upcomingButton').style.background = '#f5f8fa';
  searchDate = 'upcoming';
});

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
      buttonExcuse.setAttribute('class', 'button-outline-red px-4');
      buttonExcuse.addEventListener('click', function () {
        (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.excuseFromMeeting)(meeting).then(function (response) {
          if (response.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('You have been removed from the team', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS);
            card.remove();
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error removing: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error removing: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          } catch (_unused) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error removing: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
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
      colSelectButton.setAttribute('class', 'button mx-2');
      colSelectButton.innerHTML = 'Add';
      colSelectButton.addEventListener('click', function () {
        if (selectMember.value !== 'none') {
          (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.addAttendeeToMeeting)(meeting, selectMember.value).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
              attendees.push(selectMember.value);
              meetingAttendees.innerHTML = "<strong>Attendees: </strong> ".concat(attendees.join(', '));
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Attendee has been added to the meeting', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS);
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding attendee: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding attendee: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            } catch (_unused2) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding attendee: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
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

document.getElementById('search-form').addEventListener('click', function () {
  // event.preventDefault();
  // const selectedDateOption = document.getElementById( 'formGroupDateInput' ).value;
  var selectedDateOption = searchDate;
  var searchText = document.getElementById('searchText').value.trim(); // const searchText = document.getElementById( 'formGroupSearchFor' ).value.trim();

  if (searchText === '') {
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.searchMeetings)(selectedDateOption).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
        (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
          if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
            populateMeetingsList(meetings.data, users.data);
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          } catch (_unused3) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        });
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      } catch (_unused4) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    });
  } else {
    (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.searchMeetings)(selectedDateOption, searchText).then(function (meetings) {
      if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
        (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
          if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
            populateMeetingsList(meetings.data, users.data);
          } else {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        })["catch"](function (error) {
          try {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          } catch (_unused5) {
            (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
          }
        });
      } else {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    })["catch"](function (error) {
      try {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      } catch (_unused6) {
        (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
      }
    });
  }
});

function init() {
  document.getElementById('presentButton').style.background = '#f5f8fa';
  (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.searchMeetings)('present').then(function (meetings) {
    if (meetings.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
      (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
        if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
          populateMeetingsList(meetings.data, users.data);
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        } catch (_unused7) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching meetings: ".concat(meetings.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    } catch (_unused8) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error Fetching your meetings: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  });
}

init(); // ================== ADD MEETING =====================

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

var myModal = null;
document.getElementById('addMeeting').addEventListener('click', function () {
  myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
});
document.getElementById('modalDismiss').addEventListener('click', function () {
  myModal.hide();
});
document.getElementById('submitAddMeeting').addEventListener('click', function () {
  myModal.hide();
  var submitJSON = _data_add_meeting_form__WEBPACK_IMPORTED_MODULE_10__.default;
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
  (0,_services_user_management__WEBPACK_IMPORTED_MODULE_7__.default)().then(function (users) {
    if (users.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
      (0,_services_teams__WEBPACK_IMPORTED_MODULE_9__.fetchTeams)().then(function (teams) {
        if (teams.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
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

          (0,_services_meetings__WEBPACK_IMPORTED_MODULE_6__.addMeeting)(submitJSON).then(function (response) {
            if (response.message === _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Meeting added successfully', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.SUCCESS);
              resetForm();
            } else {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(response.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          })["catch"](function (error) {
            try {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            } catch (_unused9) {
              (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error adding meeting: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
            }
          });
        } else {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(teams.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      })["catch"](function (error) {
        try {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        } catch (_unused10) {
          (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching teams: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
        }
      });
    } else {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(users.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  })["catch"](function (error) {
    try {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.response.data.description), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    } catch (_unused11) {
      (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)("Error fetching users: ".concat(error.message), document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    }
  });
});

function initAddMeeting() {
  // redirect to login page if authorization token doesnt exist
  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__.TOKEN) === null) {
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

initAddMeeting();

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ntextarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n\r\n.card-toolbar {\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.nav-pills-custom {\r\n    font-size: 1rem;\r\n    color: #7e8299;\r\n    background-color: white;\r\n    font-weight: 600;\r\n    display: inline;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.3rem;\r\n    padding-bottom: 0.3rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.nav-pills-custom:hover {\r\n    background-color: #f5f8fa;\r\n}\r\n\r\n.search-text-custom {\r\n    line-height: 0.8rem;\r\n    border: none;\r\n}", "",{"version":3,"sources":["webpack://./public/css/search_meetings.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,WAAW;IACX,cAAc;AAClB;;;AAGA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,gBAAgB;AACpB;;;AAGA;IACI,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":[":root {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ntextarea {\r\n    padding-top: 10px;\r\n    padding-bottom: 25px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n\r\n.card-toolbar {\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    margin-bottom: 1.5rem;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.nav-pills-custom {\r\n    font-size: 1rem;\r\n    color: #7e8299;\r\n    background-color: white;\r\n    font-weight: 600;\r\n    display: inline;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.3rem;\r\n    padding-bottom: 0.3rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.nav-pills-custom:hover {\r\n    background-color: #f5f8fa;\r\n}\r\n\r\n.search-text-custom {\r\n    line-height: 0.8rem;\r\n    border: none;\r\n}"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1","public_js_app_js-public_js_data_add_meeting_form_js-public_js_services_meetings_js-public_js_-a4504f"], () => (__webpack_require__("./public/js/search_meetings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9zZWFyY2hfbWVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3MiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3M/OWEwYSIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsic2VhcmNoRGF0ZSIsInJlc2V0TmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtYXRUaW1lIiwiaG91cnMiLCJtaW51dGVzIiwicmVzdWx0IiwicG9wdWxhdGVNZWV0aW5nc0xpc3QiLCJtZWV0aW5ncyIsInVzZXJzIiwibWVldGluZ3NMaXN0RGl2IiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwibWVldGluZ3NMaXN0VGl0bGUiLCJmb3JFYWNoIiwibWVldGluZyIsImF0dGVuZGVlcyIsImF0dGVuZGVlIiwicHVzaCIsImNhcmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2FyZEJvZHkiLCJjYXJkVGl0bGUiLCJkYXRlIiwiRGF0ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0b0RhdGVTdHJpbmciLCJhcHBlbmRDaGlsZCIsImNhcmRUZXh0IiwiYnV0dG9uRXhjdXNlIiwiZXhjdXNlRnJvbU1lZXRpbmciLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiU1VDQ0VTUyIsImFkZFRvYXN0IiwiYm9keSIsInJlbW92ZSIsIkVSUk9SIiwiZXJyb3IiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJociIsIm1lZXRpbmdBdHRlbmRlZXMiLCJqb2luIiwic2VsZWN0TWVtYmVyRGl2IiwiY29sU2VsZWN0TWVtYmVyIiwibGFiZWxTZWxlY3RNZW1iZXIiLCJzZWxlY3RNZW1iZXIiLCJub25NZW1iZXJzIiwidXNlciIsImluY2x1ZGVzIiwibm9uTWVtYmVyIiwiY29sU2VsZWN0TWVtYmVyMiIsImNvbFNlbGVjdEJ1dHRvbiIsInZhbHVlIiwiYWRkQXR0ZW5kZWVUb01lZXRpbmciLCJzZWxlY3RlZERhdGVPcHRpb24iLCJzZWFyY2hUZXh0IiwidHJpbSIsInNlYXJjaE1lZXRpbmdzIiwiZ2V0QWxsVXNlcnMiLCJpbml0IiwicGlja2VyIiwiUGlrYWRheSIsImZpZWxkIiwidG9TdHJpbmciLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwidmFsaWRhdGVUZWFtIiwidGVhbSIsImF0dGVuZGVlVHlwZSIsInR5cGUiLCJyZXNldEZvcm0iLCJteU1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJzaG93IiwiaGlkZSIsInN1Ym1pdEpTT04iLCJBRERfTUVFVElOR19GT1JNIiwibWVldGluZ05hbWUiLCJzZWxlY3RlZERhdGUiLCJzZWxlY3RTdGFydFRpbWVIb3VycyIsInBhcnNlSW50Iiwic2VsZWN0RW5kVGltZUhvdXJzIiwic2VsZWN0U3RhcnRUaW1lTWlucyIsInNlbGVjdEVuZFRpbWVNaW5zIiwicmVwbGFjZSIsInNwbGl0IiwiYXR0ZW5kZWVzSlNPTiIsImF0dGVuZGVlc0xlbmd0aCIsImZldGNoVGVhbXMiLCJ0ZWFtcyIsImlkeEF0dCIsImlkeCIsInVzZXJJZCIsInRlYW1NZW1iZXJFbWFpbHMiLCJtYXAiLCJ4IiwibWVtYmVyIiwiYWRkTWVldGluZyIsImluaXRBZGRNZWV0aW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwid2luZG93IiwibG9jYXRpb24iLCJ0b2RheSIsInNldERhdGUiLCJpIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxPQUFqQjs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCQyxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsWUFBekIsRUFBd0NDLEtBQXhDLENBQThDQyxVQUE5QyxHQUEyRCxNQUEzRDtBQUNBSCxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsZUFBekIsRUFBMkNDLEtBQTNDLENBQWlEQyxVQUFqRCxHQUE4RCxNQUE5RDtBQUNBSCxVQUFRLENBQUNDLGNBQVQsQ0FBeUIsZ0JBQXpCLEVBQTRDQyxLQUE1QyxDQUFrREMsVUFBbEQsR0FBK0QsTUFBL0Q7QUFDQUgsVUFBUSxDQUFDQyxjQUFULENBQXlCLFdBQXpCLEVBQXVDQyxLQUF2QyxDQUE2Q0MsVUFBN0MsR0FBMEQsTUFBMUQ7QUFDSDs7QUFFREgsUUFBUSxDQUFDQyxjQUFULENBQXlCLFlBQXpCLEVBQXdDRyxnQkFBeEMsQ0FBMEQsT0FBMUQsRUFBbUUsWUFBTztBQUN0RUwsVUFBUTtB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNlYXJjaF9tZWV0aW5ncy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvYWRkX21lZXRpbmcuY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcyc7XHJcbmltcG9ydCBhZGRUb2FzdCBmcm9tICcuL2N1c3RvbXMvYXBwJztcclxuaW1wb3J0ICcuL2FwcCc7XHJcbmltcG9ydCB7IGFkZEF0dGVuZGVlVG9NZWV0aW5nLCBzZWFyY2hNZWV0aW5ncywgZXhjdXNlRnJvbU1lZXRpbmcsIGFkZE1lZXRpbmcgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gJy4vc2VydmljZXMvdXNlcl9tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVE9LRU4sIFNVQ0NFU1MsIEVSUk9SIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBmZXRjaFRlYW1zIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtcyc7XHJcbmltcG9ydCBBRERfTUVFVElOR19GT1JNIGZyb20gJy4vZGF0YS9hZGRfbWVldGluZ19mb3JtJztcclxuXHJcbmxldCBzZWFyY2hEYXRlID0gJ3RvZGF5JztcclxuXHJcbmZ1bmN0aW9uIHJlc2V0TmF2KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwYXN0QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXBjb21pbmdCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWxsQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFzdEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFzdEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICdwYXN0JztcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICByZXNldE5hdigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ3ByZXNlbnQnO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FsbEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWxsQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ2FsbCc7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXBjb21pbmdCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwY29taW5nQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjhmYSc7XHJcbiAgICBzZWFyY2hEYXRlID0gJ3VwY29taW5nJztcclxufSApO1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZSggaG91cnMsIG1pbnV0ZXMgKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoIGhvdXJzIDwgMTAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAwJHtob3Vyc31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gaG91cnM7XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gJzonO1xyXG4gICAgaWYgKCBtaW51dGVzIDwgMTAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAwJHttaW51dGVzfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSBtaW51dGVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLCB1c2VycyApIHtcclxuICAgIGNvbnN0IG1lZXRpbmdzTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VhcmNoTWVldGluZ3NMaXN0JyApO1xyXG4gICAgbWVldGluZ3NMaXN0RGl2LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmICggbWVldGluZ3MgJiYgbWVldGluZ3MubGVuZ3RoID4gMCApIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVldGluZ3NMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ01lZXRpbmdzIG1hdGNoaW5nIHNlYXJjaCBjcml0ZXJpYSc7XHJcblxyXG4gICAgICAgIG1lZXRpbmdzLmZvckVhY2goICggbWVldGluZyApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVzID0gW107XHJcbiAgICAgICAgICAgIG1lZXRpbmdbJ2F0dGVuZGVlcyddLmZvckVhY2goICggYXR0ZW5kZWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggYXR0ZW5kZWVbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1lZXRpbmcgY2FyZCBhbmQgYXR0YWNoIGl0IHRvIHRoZSByZXNwZWN0aXZlIHBhcmVudFxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkIHAtMyBtYi0zJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLWJvZHknICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaDUnICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggbWVldGluZ1snZGF0ZSddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGZvcm1hdFRpbWUoIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydob3VycyddLCBtZWV0aW5nWydzdGFydFRpbWUnXVsnbWludXRlcyddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBmb3JtYXRUaW1lKCBtZWV0aW5nWydlbmRUaW1lJ11bJ2hvdXJzJ10sIG1lZXRpbmdbJ2VuZFRpbWUnXVsnbWludXRlcyddICk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHtkYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtzdGFydFRpbWV9LSR7ZW5kVGltZX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRpdGxlICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XHJcbiAgICAgICAgICAgIGNhcmRUZXh0LmlubmVySFRNTCA9IG1lZXRpbmdbJ25hbWUnXTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRUZXh0ICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkV4Y3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkV4Y3VzZS5pbm5lckhUTUwgPSAnRXhjdXNlIFlvdXJzZWxmJztcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbi1vdXRsaW5lLXJlZCBweC00JyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhjdXNlRnJvbU1lZXRpbmcoIG1lZXRpbmcgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB0ZWFtJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGJ1dHRvbkV4Y3VzZSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaHInICk7XHJcbiAgICAgICAgICAgIGhyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215LTMnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBociApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVldGluZ0F0dGVuZGVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBtZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkF0dGVuZGVlczogPC9zdHJvbmc+ICR7YXR0ZW5kZWVzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggbWVldGluZ0F0dGVuZGVlcyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdyBneS0yIGd4LTMgYWxpZ24taXRlbXMtY2VudGVyJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGFiZWwnICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3Zpc3VhbGx5LWhpZGRlbicgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnZm9yJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBsYWJlbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2Zvcm0tc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnaWQnLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdTZWxlY3QgTWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb25zdCBub25NZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goICggdXNlciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWVzLmluY2x1ZGVzKCB1c2VyWydlbWFpbCddICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbk1lbWJlcnMucHVzaCggdXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJub25lXCIgc2VsZWN0ZWQ+U2VsZWN0IG1lbWJlcjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIG5vbk1lbWJlcnMuZm9yRWFjaCggKCBub25NZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtub25NZW1iZXJbJ2VtYWlsJ119XCI+JHtub25NZW1iZXJbJ2VtYWlsJ119PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbiBteC0yJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCc7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdE1lbWJlci52YWx1ZSAhPT0gJ25vbmUnICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nKCBtZWV0aW5nLCBzZWxlY3RNZW1iZXIudmFsdWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggc2VsZWN0TWVtYmVyLnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ0F0dGVuZGVlcy5pbm5lckhUTUwgPSBgPHN0cm9uZz5BdHRlbmRlZXM6IDwvc3Ryb25nPiAke2F0dGVuZGVlcy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ0F0dGVuZGVlIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBtZWV0aW5nJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBhdHRlbmRlZTogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdEJ1dHRvbiApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIyICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXJEaXYgKTtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCggY2FyZEJvZHkgKTtcclxuICAgICAgICAgICAgbWVldGluZ3NMaXN0RGl2LmFwcGVuZENoaWxkKCBjYXJkICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVldGluZ3NMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ05vIG1lZXRpbmdzIGZvdW5kIHdpdGggZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhJztcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2gtZm9ybScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBjb25zdCBzZWxlY3RlZERhdGVPcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cERhdGVJbnB1dCcgKS52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZU9wdGlvbiA9IHNlYXJjaERhdGU7XHJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2hUZXh0JyApLnZhbHVlLnRyaW0oKTtcclxuICAgIC8vIGNvbnN0IHNlYXJjaFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cFNlYXJjaEZvcicgKS52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKCBzZWFyY2hUZXh0ID09PSAnJyApIHtcclxuICAgICAgICBzZWFyY2hNZWV0aW5ncyggc2VsZWN0ZWREYXRlT3B0aW9uIClcclxuICAgICAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB1c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MuZGF0YSwgdXNlcnMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIG1lZXRpbmdzOiAke21lZXRpbmdzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiwgc2VhcmNoVGV4dCApXHJcbiAgICAgICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZWV0aW5ncy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaE1lZXRpbmdzKCAncHJlc2VudCcgKVxyXG4gICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncy5kYXRhLCB1c2Vycy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmluaXQoKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PSBBREQgTUVFVElORyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHBpY2tlciA9IG5ldyBQaWthZGF5KCB7XHJcbiAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBEYXRlSW5wdXQnICksXHJcbiAgICB0b1N0cmluZyggZGF0ZSApIHtcclxuICAgICAgICAvLyByZXR1cm4gJ0QvTS9ZWVlZJ1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgfSxcclxufSApO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCggZW1haWwgKSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIGVtYWlsICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZSA9IC9AW2EtekEtWlxcLTAtOV0rJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCB0ZWFtICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlICkge1xyXG4gICAgbGV0IHR5cGUgPSAnJztcclxuICAgIGlmICggdmFsaWRhdGVFbWFpbCggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ2VtYWlsJztcclxuICAgIH0gZWxzZSBpZiAoIHZhbGlkYXRlVGVhbSggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ3RlYW0nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eXBlID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRNZWV0aW5nTmFtZScgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0UGFydGljaXBhbnRzJyApLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbmxldCBteU1vZGFsID0gbnVsbDtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWRkTWVldGluZycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdteU1vZGFsJyApICk7XHJcbiAgICBteU1vZGFsLnNob3coKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtb2RhbERpc21pc3MnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3VibWl0QWRkTWVldGluZycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsLmhpZGUoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX01FRVRJTkdfRk9STTtcclxuICAgIGNvbnN0IG1lZXRpbmdOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lZXRpbmdOYW1lJyApLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBwaWNrZXIuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGAke3NlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3NlbGVjdGVkRGF0ZS5nZXRNb250aCgpICsgMX0tJHtzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZUhvdXJzID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3QgYXR0ZW5kZWVzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRQYXJ0aWNpcGFudHMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IG1lZXRpbmdOYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgc3VibWl0SlNPTlsnZGF0ZSddID0gZGF0ZTtcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydob3VycyddID0gc2VsZWN0U3RhcnRUaW1lSG91cnM7XHJcbiAgICBzdWJtaXRKU09OWydzdGFydFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0U3RhcnRUaW1lTWlucztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnaG91cnMnXSA9IHNlbGVjdEVuZFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0RW5kVGltZU1pbnM7XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG4gICAgbGV0IGF0dGVuZGVlc0xlbmd0aCA9IGF0dGVuZGVlcy5sZW5ndGg7XHJcblxyXG4gICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFRlYW1zKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB0ZWFtcyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0ZWFtcy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeEF0dCA9IDA7IGlkeEF0dCA8IGF0dGVuZGVlc0xlbmd0aDsgaWR4QXR0ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWUgPSBhdHRlbmRlZXNbaWR4QXR0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlc1tpZHhBdHRdICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZS50b0xvd2VyQ2FzZSgpID09PSB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vycy5kYXRhW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnMuZGF0YVtpZHhdWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZWFtJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeCA9IDA7IGlkeCA8IHRlYW1zLmRhdGEubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWUgPT09IGBAJHt0ZWFtcy5kYXRhW2lkeF1bJ3Nob3J0TmFtZSddfWAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlckVtYWlscyA9ICggdGVhbXMuZGF0YVtpZHhdWydtZW1iZXJzJ10gKS5tYXAoICggeCApID0+IHhbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTWVtYmVyRW1haWxzLmZvckVhY2goICggbWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlcy5pbmNsdWRlcyggbWVtYmVyICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIG1lbWJlciApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0xlbmd0aCArPSB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0SlNPTlsnYXR0ZW5kZWVzJ10gPSBhdHRlbmRlZXNKU09OO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VibWl0IGNvbnN0cnVjdGVkIG1lZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ01lZXRpbmcgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHt0ZWFtcy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRBZGRNZWV0aW5nKCkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBhdXRob3JpemF0aW9uIHRva2VuIGRvZXNudCBleGlzdFxyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBwaWNrZXIuc2V0RGF0ZSggdG9kYXkgKTtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3QgaG91cnMgYW5kIG1pbiBvcHRpb25zXHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lSG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ+MDwvb3B0aW9uPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFN0YXJ0VGltZUhvdXJzLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICAgICAgc2VsZWN0RW5kVGltZUhvdXJzLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lTWlucycgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVNaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDYwOyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ+MDwvb3B0aW9uPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFN0YXJ0VGltZU1pbnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgICAgICBzZWxlY3RFbmRUaW1lTWlucy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbml0QWRkTWVldGluZygpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZC10b29sYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzdlODI5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdGV4dC1jdXN0b20ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMC44cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcmQtdG9vbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6ICM3ZTgyOTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1waWxscy1jdXN0b206aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRleHQtY3VzdG9tIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaF9tZWV0aW5ncy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaF9tZWV0aW5ncy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzZWFyY2hfbWVldGluZ3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfc3RhYmxlX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWdlbmVyLTE1NzQwNlwiLFwicHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19hdXRoX2pzLXB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjLTRlYTJhMVwiLFwicHVibGljX2pzX2FwcF9qcy1wdWJsaWNfanNfZGF0YV9hZGRfbWVldGluZ19mb3JtX2pzLXB1YmxpY19qc19zZXJ2aWNlc19tZWV0aW5nc19qcy1wdWJsaWNfanNfLWE0NTA0ZlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9zZWFyY2hfbWVldGluZ3MuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=