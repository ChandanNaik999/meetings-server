/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    meetingsListTitle.style.display = 'none';
    meetings.forEach(function (meeting) {
      var attendees = [];
      meeting['attendees'].forEach(function (attendee) {
        attendees.push(attendee['email']);
      }); // create meeting card and attach it to the respective parent

      var card = document.createElement('div');
      card.setAttribute('class', 'card p-3 mb-3');
      var cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      var cardMeetingNameDiv = document.createElement('div');
      cardMeetingNameDiv.setAttribute('class', 'row');
      var cardMeetingName = document.createElement('h4');
      cardMeetingName.setAttribute('id', 'card-meeting-name');
      cardMeetingName.setAttribute('class', 'col-auto me-auto card-meeting-name');
      cardMeetingName.innerHTML = meeting['name'];
      var cardMeetingTime = document.createElement('h5');
      cardMeetingTime.setAttribute('class', 'col-auto card-meeting-name');
      var date = new Date(meeting['date']);
      var startTime = formatTime(meeting['startTime']['hours'], meeting['startTime']['minutes']);
      var endTime = formatTime(meeting['endTime']['hours'], meeting['endTime']['minutes']);
      cardMeetingTime.innerHTML = "".concat(date.toDateString(), ", ").concat(startTime, "-").concat(endTime);
      cardMeetingNameDiv.appendChild(cardMeetingName);
      cardMeetingNameDiv.appendChild(cardMeetingTime); // cardMeetingDiv.appendChild( cardMeetingNameDiv );

      cardBody.appendChild(cardMeetingNameDiv);
      var cardText = document.createElement('p');
      cardText.innerHTML = meeting['description'];
      cardBody.appendChild(cardText);
      var buttonExcuse = document.createElement('button');
      buttonExcuse.innerHTML = 'Leave meeting';
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
    _meetingsListTitle.style.display = 'block';
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

  if (meetingName.length <= 3) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Please enter a longer meeting name', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return;
  }

  var description = document.getElementById('textareaMeetingDescription').value.trim();

  if (description.length <= 10) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Please enter a longer meeting name  ( 10 characters min )', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return;
  }

  var selectedDate = picker.getDate();
  var date = "".concat(selectedDate.getFullYear(), "-").concat(selectedDate.getMonth() + 1, "-").concat(selectedDate.getDate());
  var selectStartTimeHours = parseInt(document.getElementById('selectStartTimeHours').value, 10);
  var selectEndTimeHours = parseInt(document.getElementById('selectEndTimeHours').value, 10);
  var selectStartTimeMins = parseInt(document.getElementById('selectStartTimeMins').value, 10);
  var selectEndTimeMins = parseInt(document.getElementById('selectEndTimeMins').value, 10);

  if (selectEndTimeHours < selectStartTimeHours) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Start time has to be less than end time', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return; // eslint-disable-next-line no-else-return
    // eslint-disable-next-line max-len
  }

  if (selectEndTimeHours === selectStartTimeHours && selectStartTimeMins >= selectEndTimeMins) {
    (0,_customs_app__WEBPACK_IMPORTED_MODULE_4__.default)('Start time has to be less than end time', document.body, _constants__WEBPACK_IMPORTED_MODULE_8__.ERROR);
    return;
  }

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
              setTimeout(function () {
                window.location.reload();
              }, 1500);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css","vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-efddf7","public_css_main_css-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4-b01be0","public_js_app_js-public_js_customs_app_js-public_js_services_meetings_js"], () => (__webpack_require__("./public/js/search_meetings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9kYXRhL2FkZF9tZWV0aW5nX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVldGluZ3MvLi9wdWJsaWMvanMvc2VhcmNoX21lZXRpbmdzLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3RlYW1zLmpzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2pzL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3MvYWRkX21lZXRpbmcuY3NzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9zZWFyY2hfbWVldGluZ3MuY3NzIiwid2VicGFjazovL21lZXRpbmdzLy4vcHVibGljL2Nzcy9hZGRfbWVldGluZy5jc3M/MDljOSIsIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9jc3Mvc2VhcmNoX21lZXRpbmdzLmNzcz85YTBhIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJBRERfTUVFVElOR19GT1JNIiwic2VhcmNoRGF0ZSIsInJlc2V0TmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtYXRUaW1lIiwiaG91cnMiLCJtaW51dGVzIiwicmVzdWx0IiwicG9wdWxhdGVNZWV0aW5nc0xpc3QiLCJtZWV0aW5ncyIsInVzZXJzIiwibWVldGluZ3NMaXN0RGl2IiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwibWVldGluZ3NMaXN0VGl0bGUiLCJkaXNwbGF5IiwiZm9yRWFjaCIsIm1lZXRpbmciLCJhdHRlbmRlZXMiLCJhdHRlbmRlZSIsInB1c2giLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNhcmRCb2R5IiwiY2FyZE1lZXRpbmdOYW1lRGl2IiwiY2FyZE1lZXRpbmdOYW1lIiwiY2FyZE1lZXRpbmdUaW1lIiwiZGF0ZSIsIkRhdGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidG9EYXRlU3RyaW5nIiwiYXBwZW5kQ2hpbGQiLCJjYXJkVGV4dCIsImJ1dHRvbkV4Y3VzZSIsImV4Y3VzZUZyb21NZWV0aW5nIiwidGhlbiIsInJlc3BvbnNlIiwibWVzc2FnZSIsIlNVQ0NFU1MiLCJhZGRUb2FzdCIsImJvZHkiLCJyZW1vdmUiLCJFUlJPUiIsImVycm9yIiwiZGF0YSIsImRlc2NyaXB0aW9uIiwiaHIiLCJtZWV0aW5nQXR0ZW5kZWVzIiwiam9pbiIsInNlbGVjdE1lbWJlckRpdiIsImNvbFNlbGVjdE1lbWJlciIsImxhYmVsU2VsZWN0TWVtYmVyIiwic2VsZWN0TWVtYmVyIiwibm9uTWVtYmVycyIsInVzZXIiLCJpbmNsdWRlcyIsIm5vbk1lbWJlciIsImNvbFNlbGVjdE1lbWJlcjIiLCJjb2xTZWxlY3RCdXR0b24iLCJ2YWx1ZSIsImFkZEF0dGVuZGVlVG9NZWV0aW5nIiwic2VsZWN0ZWREYXRlT3B0aW9uIiwic2VhcmNoVGV4dCIsInRyaW0iLCJzZWFyY2hNZWV0aW5ncyIsImdldEFsbFVzZXJzIiwiaW5pdCIsInBpY2tlciIsIlBpa2FkYXkiLCJmaWVsZCIsInRvU3RyaW5nIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJyZSIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInZhbGlkYXRlVGVhbSIsInRlYW0iLCJhdHRlbmRlZVR5cGUiLCJ0eXBlIiwicmVzZXRGb3JtIiwibXlNb2RhbCIsImJvb3RzdHJhcCIsIk1vZGFsIiwic2hvdyIsImhpZGUiLCJzdWJtaXRKU09OIiwibWVldGluZ05hbWUiLCJzZWxlY3RlZERhdGUiLCJzZWxlY3RTdGFydFRpbWVIb3VycyIsInBhcnNlSW50Iiwic2VsZWN0RW5kVGltZUhvdXJzIiwic2VsZWN0U3RhcnRUaW1lTWlucyIsInNlbGVjdEVuZFRpbWVNaW5zIiwicmVwbGFjZSIsInNwbGl0IiwiYXR0ZW5kZWVzSlNPTiIsImF0dGVuZGVlc0xlbmd0aCIsImZldGNoVGVhbXMiLCJ0ZWFtcyIsImlkeEF0dCIsImlkeCIsInVzZXJJZCIsInRlYW1NZW1iZXJFbWFpbHMiLCJtYXAiLCJ4IiwibWVtYmVyIiwiYWRkTWVldGluZyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImluaXRBZGRNZWV0aW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRPS0VOIiwidG9kYXkiLCJzZXREYXRlIiwiaSIsIm9wdGlvbiIsImF4aW9zIiwiQVBJX0JBU0VfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsImFkZFRlYW0iLCJ0ZWFtSlNPTiIsImFkZE1lbWJlclRvVGVhbSIsImV4Y3VzZUZyb21UZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJzZWFyY2hfbWVldGluZ3MuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuY29uc3QgQUREX01FRVRJTkdfRk9STSA9IHtcclxuICAgIFwibmFtZVwiOiBcIkdvb2dsZSBtYXJrZXRpbmcgY2FtcGFpZ25cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbmNyZWFzaW5nIGJyYW5kIGF3YXJlbmVzcyBhbmQgc3ByZWFkaW5nIGluZm9ybWF0aW9uIGFib3V0IG5ldyBwcm9kdWN0c1wiLFxyXG4gICAgXCJkYXRlXCI6IFwiMjAyMC0xMC0yOFwiLFxyXG4gICAgXCJzdGFydFRpbWVcIjoge1xyXG4gICAgICAgIFwiaG91cnNcIjogOSxcclxuICAgICAgICBcIm1pbnV0ZXNcIjogMFxyXG4gICAgfSxcclxuICAgIFwiZW5kVGltZVwiOiB7XHJcbiAgICAgICAgXCJob3Vyc1wiOiAxMCxcclxuICAgICAgICBcIm1pbnV0ZXNcIjogMzBcclxuICAgIH0sXHJcbiAgICBcImF0dGVuZGVlc1wiOiBbXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFERF9NRUVUSU5HX0ZPUk07IiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2FkZF9tZWV0aW5nLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3NlYXJjaF9tZWV0aW5ncy5jc3MnO1xyXG5pbXBvcnQgYWRkVG9hc3QgZnJvbSAnLi9jdXN0b21zL2FwcCc7XHJcbmltcG9ydCAnLi9hcHAnO1xyXG5pbXBvcnQgeyBhZGRBdHRlbmRlZVRvTWVldGluZywgc2VhcmNoTWVldGluZ3MsIGV4Y3VzZUZyb21NZWV0aW5nLCBhZGRNZWV0aW5nIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZWV0aW5ncyc7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tICcuL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IFRPS0VOLCBTVUNDRVNTLCBFUlJPUiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZmV0Y2hUZWFtcyB9IGZyb20gJy4vc2VydmljZXMvdGVhbXMnO1xyXG5pbXBvcnQgQUREX01FRVRJTkdfRk9STSBmcm9tICcuL2RhdGEvYWRkX21lZXRpbmdfZm9ybSc7XHJcblxyXG5sZXQgc2VhcmNoRGF0ZSA9ICd0b2RheSc7XHJcblxyXG5mdW5jdGlvbiByZXNldE5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFzdEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdwcmVzZW50QnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwY29taW5nQnV0dG9uJyApLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FsbEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Bhc3RCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Bhc3RCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaERhdGUgPSAncGFzdCc7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJlc2VudEJ1dHRvbicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgcmVzZXROYXYoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncHJlc2VudEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICdwcmVzZW50JztcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhbGxCdXR0b24nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCApID0+IHtcclxuICAgIHJlc2V0TmF2KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FsbEJ1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICdhbGwnO1xyXG59ICk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3VwY29taW5nQnV0dG9uJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggKSA9PiB7XHJcbiAgICByZXNldE5hdigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd1cGNvbWluZ0J1dHRvbicgKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY4ZmEnO1xyXG4gICAgc2VhcmNoRGF0ZSA9ICd1cGNvbWluZyc7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWUoIGhvdXJzLCBtaW51dGVzICkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKCBob3VycyA8IDEwICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBgMCR7aG91cnN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGhvdXJzO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ICs9ICc6JztcclxuICAgIGlmICggbWludXRlcyA8IDEwICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBgMCR7bWludXRlc31gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gbWludXRlcztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncywgdXNlcnMgKSB7XHJcbiAgICBjb25zdCBtZWV0aW5nc0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlYXJjaE1lZXRpbmdzTGlzdCcgKTtcclxuICAgIG1lZXRpbmdzTGlzdERpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBpZiAoIG1lZXRpbmdzICYmIG1lZXRpbmdzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgY29uc3QgbWVldGluZ3NMaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21lZXRpbmdzTGlzdFRpdGxlJyApO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLmlubmVySFRNTCA9ICdNZWV0aW5ncyBtYXRjaGluZyBzZWFyY2ggY3JpdGVyaWEnO1xyXG4gICAgICAgIG1lZXRpbmdzTGlzdFRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIG1lZXRpbmdzLmZvckVhY2goICggbWVldGluZyApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVzID0gW107XHJcbiAgICAgICAgICAgIG1lZXRpbmdbJ2F0dGVuZGVlcyddLmZvckVhY2goICggYXR0ZW5kZWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggYXR0ZW5kZWVbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1lZXRpbmcgY2FyZCBhbmQgYXR0YWNoIGl0IHRvIHRoZSByZXNwZWN0aXZlIHBhcmVudFxyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkIHAtMyBtYi0zJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjYXJkLWJvZHknICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVldGluZ05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWVEaXYuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAncm93JyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g0JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuc2V0QXR0cmlidXRlKCAnaWQnLCAnY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nTmFtZS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdjb2wtYXV0byBtZS1hdXRvIGNhcmQtbWVldGluZy1uYW1lJyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ05hbWUuaW5uZXJIVE1MID0gbWVldGluZ1snbmFtZSddO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZE1lZXRpbmdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2g1JyApO1xyXG4gICAgICAgICAgICBjYXJkTWVldGluZ1RpbWUuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnY29sLWF1dG8gY2FyZC1tZWV0aW5nLW5hbWUnICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggbWVldGluZ1snZGF0ZSddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGZvcm1hdFRpbWUoIG1lZXRpbmdbJ3N0YXJ0VGltZSddWydob3VycyddLCBtZWV0aW5nWydzdGFydFRpbWUnXVsnbWludXRlcyddICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBmb3JtYXRUaW1lKCBtZWV0aW5nWydlbmRUaW1lJ11bJ2hvdXJzJ10sIG1lZXRpbmdbJ2VuZFRpbWUnXVsnbWludXRlcyddICk7XHJcbiAgICAgICAgICAgIGNhcmRNZWV0aW5nVGltZS5pbm5lckhUTUwgPSBgJHtkYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtzdGFydFRpbWV9LSR7ZW5kVGltZX1gO1xyXG5cclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ05hbWUgKTtcclxuICAgICAgICAgICAgY2FyZE1lZXRpbmdOYW1lRGl2LmFwcGVuZENoaWxkKCBjYXJkTWVldGluZ1RpbWUgKTtcclxuICAgICAgICAgICAgLy8gY2FyZE1lZXRpbmdEaXYuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZURpdiApO1xyXG5cclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGNhcmRNZWV0aW5nTmFtZURpdiApO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBjYXJkVGV4dC5pbm5lckhUTUwgPSBtZWV0aW5nWydkZXNjcmlwdGlvbiddO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggY2FyZFRleHQgKTtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRXhjdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLmlubmVySFRNTCA9ICdMZWF2ZSBtZWV0aW5nJztcclxuICAgICAgICAgICAgYnV0dG9uRXhjdXNlLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbi1vdXRsaW5lLXJlZCBweC00JyApO1xyXG4gICAgICAgICAgICBidXR0b25FeGN1c2UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhjdXNlRnJvbU1lZXRpbmcoIG1lZXRpbmcgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ1lvdSBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB0ZWFtJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgcmVtb3Zpbmc6ICR7cmVzcG9uc2UubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciByZW1vdmluZzogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoIGJ1dHRvbkV4Y3VzZSApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaHInICk7XHJcbiAgICAgICAgICAgIGhyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ215LTMnICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBociApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVldGluZ0F0dGVuZGVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xyXG4gICAgICAgICAgICBtZWV0aW5nQXR0ZW5kZWVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkF0dGVuZGVlczogPC9zdHJvbmc+ICR7YXR0ZW5kZWVzLmpvaW4oICcsICcgKX1gO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCggbWVldGluZ0F0dGVuZGVlcyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3JvdyBneS0yIGd4LTMgYWxpZ24taXRlbXMtY2VudGVyJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTZWxlY3RNZW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGFiZWwnICk7XHJcbiAgICAgICAgICAgIGxhYmVsU2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ3Zpc3VhbGx5LWhpZGRlbicgKTtcclxuICAgICAgICAgICAgbGFiZWxTZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnZm9yJywgJ3NlbGVjdE1lbWJlcicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0TWVtYmVyLmFwcGVuZENoaWxkKCBsYWJlbFNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0TWVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NlbGVjdCcgKTtcclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2Zvcm0tc2VsZWN0JyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnaWQnLCAnc2VsZWN0TWVtYmVyJyApO1xyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdTZWxlY3QgTWVtYmVyJyApO1xyXG4gICAgICAgICAgICBjb25zdCBub25NZW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goICggdXNlciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWVzLmluY2x1ZGVzKCB1c2VyWydlbWFpbCddICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbk1lbWJlcnMucHVzaCggdXNlciApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJub25lXCIgc2VsZWN0ZWQ+U2VsZWN0IG1lbWJlcjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIG5vbk1lbWJlcnMuZm9yRWFjaCggKCBub25NZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNZW1iZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtub25NZW1iZXJbJ2VtYWlsJ119XCI+JHtub25NZW1iZXJbJ2VtYWlsJ119PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIuYXBwZW5kQ2hpbGQoIHNlbGVjdE1lbWJlciApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdE1lbWJlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RNZW1iZXIyLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2NvbC1hdXRvJyApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2J1dHRvbicgKTtcclxuICAgICAgICAgICAgY29sU2VsZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2J1dHRvbiBteC0yJyApO1xyXG4gICAgICAgICAgICBjb2xTZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCc7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdE1lbWJlci52YWx1ZSAhPT0gJ25vbmUnICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEF0dGVuZGVlVG9NZWV0aW5nKCBtZWV0aW5nLCBzZWxlY3RNZW1iZXIudmFsdWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCByZXNwb25zZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggc2VsZWN0TWVtYmVyLnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ0F0dGVuZGVlcy5pbm5lckhUTUwgPSBgPHN0cm9uZz5BdHRlbmRlZXM6IDwvc3Ryb25nPiAke2F0dGVuZGVlcy5qb2luKCAnLCAnICl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ0F0dGVuZGVlIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBtZWV0aW5nJywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBhdHRlbmRlZTogJHtyZXNwb25zZS5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIGF0dGVuZGVlOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNvbFNlbGVjdE1lbWJlcjIuYXBwZW5kQ2hpbGQoIGNvbFNlbGVjdEJ1dHRvbiApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TWVtYmVyRGl2LmFwcGVuZENoaWxkKCBjb2xTZWxlY3RNZW1iZXIyICk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKCBzZWxlY3RNZW1iZXJEaXYgKTtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCggY2FyZEJvZHkgKTtcclxuICAgICAgICAgICAgbWVldGluZ3NMaXN0RGl2LmFwcGVuZENoaWxkKCBjYXJkICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZWV0aW5nc0xpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVldGluZ3NMaXN0VGl0bGUnICk7XHJcbiAgICAgICAgbWVldGluZ3NMaXN0VGl0bGUuaW5uZXJIVE1MID0gJ05vIG1lZXRpbmdzIGZvdW5kIHdpdGggZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhJztcclxuICAgICAgICBtZWV0aW5nc0xpc3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2gtZm9ybScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoICkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBjb25zdCBzZWxlY3RlZERhdGVPcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cERhdGVJbnB1dCcgKS52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZU9wdGlvbiA9IHNlYXJjaERhdGU7XHJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWFyY2hUZXh0JyApLnZhbHVlLnRyaW0oKTtcclxuICAgIC8vIGNvbnN0IHNlYXJjaFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Zvcm1Hcm91cFNlYXJjaEZvcicgKS52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKCBzZWFyY2hUZXh0ID09PSAnJyApIHtcclxuICAgICAgICBzZWFyY2hNZWV0aW5ncyggc2VsZWN0ZWREYXRlT3B0aW9uIClcclxuICAgICAgICAgICAgLnRoZW4oICggbWVldGluZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB1c2VycyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZU1lZXRpbmdzTGlzdCggbWVldGluZ3MuZGF0YSwgdXNlcnMuZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHVzZXJzOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIG1lZXRpbmdzOiAke21lZXRpbmdzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB5b3VyIG1lZXRpbmdzOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VhcmNoTWVldGluZ3MoIHNlbGVjdGVkRGF0ZU9wdGlvbiwgc2VhcmNoVGV4dCApXHJcbiAgICAgICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZWV0aW5ncy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNZWV0aW5nc0xpc3QoIG1lZXRpbmdzLmRhdGEsIHVzZXJzLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHt1c2Vycy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBGZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3ByZXNlbnRCdXR0b24nICkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmOGZhJztcclxuICAgIHNlYXJjaE1lZXRpbmdzKCAncHJlc2VudCcgKVxyXG4gICAgICAgIC50aGVuKCAoIG1lZXRpbmdzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1lZXRpbmdzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTWVldGluZ3NMaXN0KCBtZWV0aW5ncy5kYXRhLCB1c2Vycy5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHVzZXJzOiAke3VzZXJzLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgdXNlcnM6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyBtZWV0aW5nczogJHttZWV0aW5ncy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIEZldGNoaW5nIHlvdXIgbWVldGluZ3M6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgRmV0Y2hpbmcgeW91ciBtZWV0aW5nczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn1cclxuXHJcbmluaXQoKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PSBBREQgTUVFVElORyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHBpY2tlciA9IG5ldyBQaWthZGF5KCB7XHJcbiAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmb3JtR3JvdXBEYXRlSW5wdXQnICksXHJcbiAgICB0b1N0cmluZyggZGF0ZSApIHtcclxuICAgICAgICAvLyByZXR1cm4gJ0QvTS9ZWVlZJ1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgfSxcclxufSApO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCggZW1haWwgKSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KCBTdHJpbmcoIGVtYWlsICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRlYW0oIHRlYW0gKSB7XHJcbiAgICBjb25zdCByZSA9IC9AW2EtekEtWlxcLTAtOV0rJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCB0ZWFtICkudG9Mb3dlckNhc2UoKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlICkge1xyXG4gICAgbGV0IHR5cGUgPSAnJztcclxuICAgIGlmICggdmFsaWRhdGVFbWFpbCggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ2VtYWlsJztcclxuICAgIH0gZWxzZSBpZiAoIHZhbGlkYXRlVGVhbSggYXR0ZW5kZWUgKSApIHtcclxuICAgICAgICB0eXBlID0gJ3RlYW0nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0eXBlID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRNZWV0aW5nTmFtZScgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKS52YWx1ZSA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0UGFydGljaXBhbnRzJyApLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbmxldCBteU1vZGFsID0gbnVsbDtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnYWRkTWVldGluZycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdteU1vZGFsJyApICk7XHJcbiAgICBteU1vZGFsLnNob3coKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtb2RhbERpc21pc3MnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbXlNb2RhbC5oaWRlKCk7XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3VibWl0QWRkTWVldGluZycgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcbiAgICBteU1vZGFsLmhpZGUoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX01FRVRJTkdfRk9STTtcclxuICAgIGNvbnN0IG1lZXRpbmdOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lZXRpbmdOYW1lJyApLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICBpZiAoIG1lZXRpbmdOYW1lLmxlbmd0aCA8PSAzICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnUGxlYXNlIGVudGVyIGEgbG9uZ2VyIG1lZXRpbmcgbmFtZScsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3RleHRhcmVhTWVldGluZ0Rlc2NyaXB0aW9uJyApLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICggZGVzY3JpcHRpb24ubGVuZ3RoIDw9IDEwICkge1xyXG4gICAgICAgIGFkZFRvYXN0KCAnUGxlYXNlIGVudGVyIGEgbG9uZ2VyIG1lZXRpbmcgbmFtZSAgKCAxMCBjaGFyYWN0ZXJzIG1pbiApJywgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBwaWNrZXIuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGAke3NlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3NlbGVjdGVkRGF0ZS5nZXRNb250aCgpICsgMX0tJHtzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZUhvdXJzID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApLnZhbHVlLCAxMCApO1xyXG5cclxuICAgIGlmICggc2VsZWN0RW5kVGltZUhvdXJzIDwgc2VsZWN0U3RhcnRUaW1lSG91cnMgKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoICdTdGFydCB0aW1lIGhhcyB0byBiZSBsZXNzIHRoYW4gZW5kIHRpbWUnLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbHNlLXJldHVyblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgIH0gaWYgKCBzZWxlY3RFbmRUaW1lSG91cnMgPT09IHNlbGVjdFN0YXJ0VGltZUhvdXJzICYmIHNlbGVjdFN0YXJ0VGltZU1pbnMgPj0gc2VsZWN0RW5kVGltZU1pbnMgKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoICdTdGFydCB0aW1lIGhhcyB0byBiZSBsZXNzIHRoYW4gZW5kIHRpbWUnLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdHRlbmRlZXMgPSAoICggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFBhcnRpY2lwYW50cycgKS52YWx1ZSApLnJlcGxhY2UoIC9cXHMrL2csICcnICkgKS5zcGxpdCggJywnICk7XHJcblxyXG4gICAgc3VibWl0SlNPTlsnbmFtZSddID0gbWVldGluZ05hbWU7XHJcbiAgICBzdWJtaXRKU09OWydkZXNjcmlwdGlvbiddID0gZGVzY3JpcHRpb247XHJcbiAgICBzdWJtaXRKU09OWydkYXRlJ10gPSBkYXRlO1xyXG4gICAgc3VibWl0SlNPTlsnc3RhcnRUaW1lJ11bJ2hvdXJzJ10gPSBzZWxlY3RTdGFydFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydtaW51dGVzJ10gPSBzZWxlY3RTdGFydFRpbWVNaW5zO1xyXG4gICAgc3VibWl0SlNPTlsnZW5kVGltZSddWydob3VycyddID0gc2VsZWN0RW5kVGltZUhvdXJzO1xyXG4gICAgc3VibWl0SlNPTlsnZW5kVGltZSddWydtaW51dGVzJ10gPSBzZWxlY3RFbmRUaW1lTWlucztcclxuXHJcbiAgICBjb25zdCBhdHRlbmRlZXNKU09OID0gW107XHJcbiAgICBsZXQgYXR0ZW5kZWVzTGVuZ3RoID0gYXR0ZW5kZWVzLmxlbmd0aDtcclxuXHJcbiAgICBnZXRBbGxVc2VycygpXHJcbiAgICAgICAgLnRoZW4oICggdXNlcnMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdXNlcnMubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgIGZldGNoVGVhbXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHRlYW1zICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRlYW1zLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4QXR0ID0gMDsgaWR4QXR0IDwgYXR0ZW5kZWVzTGVuZ3RoOyBpZHhBdHQgKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZSA9IGF0dGVuZGVlc1tpZHhBdHRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoIGF0dGVuZGVlVHlwZSggYXR0ZW5kZWVzW2lkeEF0dF0gKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGxldCBpZHggPSAwOyBpZHggPCB1c2Vycy5kYXRhLmxlbmd0aDsgaWR4ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlLnRvTG93ZXJDYXNlKCkgPT09IHVzZXJzLmRhdGFbaWR4XVsnZW1haWwnXS50b0xvd2VyQ2FzZSgpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0pTT04ucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJzLmRhdGFbaWR4XVsnX2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RlYW0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdGVhbXMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZSA9PT0gYEAke3RlYW1zLmRhdGFbaWR4XVsnc2hvcnROYW1lJ119YCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVyRW1haWxzID0gKCB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXSApLm1hcCggKCB4ICkgPT4geFsnZW1haWwnXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1NZW1iZXJFbWFpbHMuZm9yRWFjaCggKCBtZW1iZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWVzLmluY2x1ZGVzKCBtZW1iZXIgKSA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXMucHVzaCggbWVtYmVyICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzTGVuZ3RoICs9IHRlYW1zLmRhdGFbaWR4XVsnbWVtYmVycyddLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRKU09OWydhdHRlbmRlZXMnXSA9IGF0dGVuZGVlc0pTT047XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJtaXQgY29uc3RydWN0ZWQgbWVldGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTWVldGluZyggc3VibWl0SlNPTiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UubWVzc2FnZSA9PT0gU1VDQ0VTUyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCAnTWVldGluZyBhZGRlZCBzdWNjZXNzZnVsbHknLCBkb2N1bWVudC5ib2R5LCBTVUNDRVNTICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxNTAwICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHt0ZWFtcy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRBZGRNZWV0aW5nKCkge1xyXG4gICAgLy8gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiBhdXRob3JpemF0aW9uIHRva2VuIGRvZXNudCBleGlzdFxyXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggVE9LRU4gKSA9PT0gbnVsbCApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBwaWNrZXIuc2V0RGF0ZSggdG9kYXkgKTtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3QgaG91cnMgYW5kIG1pbiBvcHRpb25zXHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lSG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVIb3VycycgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ+MDwvb3B0aW9uPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFN0YXJ0VGltZUhvdXJzLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICAgICAgc2VsZWN0RW5kVGltZUhvdXJzLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lTWlucycgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVNaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lTWlucycgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDYwOyBpICs9IDEgKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGlmICggaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gdmFsdWU9XCIwXCIgc2VsZWN0ZWQ+MDwvb3B0aW9uPic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uID0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFN0YXJ0VGltZU1pbnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgICAgICBzZWxlY3RFbmRUaW1lTWlucy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbml0QWRkTWVldGluZygpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1zKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtc2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFRlYW0oIHRlYW1KU09OICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vdGVhbXMvYCxcclxuICAgICAgICB0ZWFtSlNPTixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVtYmVyVG9UZWFtKCB0ZWFtLCBlbWFpbCApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS90ZWFtcy8ke3RlYW1bJ19pZCddfT9hY3Rpb249YWRkX21lbWJlciZlbWFpbD0ke2VtYWlsfWAsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtnZXRUb2tlbigpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y3VzZUZyb21UZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3RlYW1zLyR7dGVhbVsnX2lkJ119P2FjdGlvbj1yZW1vdmVfbWVtYmVyYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoVGVhbXMsXHJcbiAgICBhZGRUZWFtLFxyXG4gICAgYWRkTWVtYmVyVG9UZWFtLFxyXG4gICAgZXhjdXNlRnJvbVRlYW0sXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi9hdXRoJztcclxuXHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIHVzZXJzLlxyXG4gKiBAcmV0dXJucyBsaXN0IG9mIGFsbCB1c2Vyc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L3VzZXJzYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke2dldFRva2VuKCl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBociB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9hZGRfbWVldGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztFQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXJkLXRvb2xiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5hdi1waWxscy1jdXN0b20ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjN2U4Mjk5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10ZXh0LWN1c3RvbSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjhyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcHVibGljL2Nzcy9zZWFyY2hfbWVldGluZ3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZC10b29sYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXYtcGlsbHMtY3VzdG9tIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzdlODI5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXBpbGxzLWN1c3RvbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdGV4dC1jdXN0b20ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMC44cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWRkX21lZXRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRfbWVldGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoX21lZXRpbmdzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoX21lZXRpbmdzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNlYXJjaF9tZWV0aW5nc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21lZXRpbmdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9jc3NfYm9vdHN0cmFwX21pbl9jc3NcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX3N0YWJsZV9pbmRleF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lci1lZmRkZjdcIixcInB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjc3ZnX3htbG5zXzI3aHR0cF93d3dfdzNfb3JnXzIwMDBfc3ZnXzI3X3ZpZXdCb3hfMjctNC1iMDFiZTBcIixcInB1YmxpY19qc19hcHBfanMtcHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19tZWV0aW5nc19qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9zZWFyY2hfbWVldGluZ3MuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=