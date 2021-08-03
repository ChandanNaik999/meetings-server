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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_core-js_stable_index_js-node_modules_regener-157406","public_js_customs_app_js-public_js_services_auth_js-public_css_main_css-data_image_svg_xml_3c-4ea2a1","public_js_app_js-public_js_data_add_meeting_form_js-public_js_services_meetings_js-public_js_-a4504f"], () => (__webpack_require__("./public/js/add_meeting.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5ncy8uL3B1YmxpYy9qcy9hZGRfbWVldGluZy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lZXRpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZ3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZWV0aW5ncy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsicGlja2VyIiwiUGlrYWRheSIsImZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvU3RyaW5nIiwiZGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ2YWxpZGF0ZVRlYW0iLCJ0ZWFtIiwiYXR0ZW5kZWVUeXBlIiwiYXR0ZW5kZWUiLCJ0eXBlIiwicmVzZXRGb3JtIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEpTT04iLCJBRERfTUVFVElOR19GT1JNIiwibWVldGluZ05hbWUiLCJ0cmltIiwiZGVzY3JpcHRpb24iLCJzZWxlY3RlZERhdGUiLCJzZWxlY3RTdGFydFRpbWVIb3VycyIsInBhcnNlSW50Iiwic2VsZWN0RW5kVGltZUhvdXJzIiwic2VsZWN0U3RhcnRUaW1lTWlucyIsInNlbGVjdEVuZFRpbWVNaW5zIiwiYXR0ZW5kZWVzIiwicmVwbGFjZSIsInNwbGl0IiwiYXR0ZW5kZWVzSlNPTiIsImF0dGVuZGVlc0xlbmd0aCIsImxlbmd0aCIsImdldEFsbFVzZXJzIiwidGhlbiIsInVzZXJzIiwibWVzc2FnZSIsIlNVQ0NFU1MiLCJmZXRjaFRlYW1zIiwidGVhbXMiLCJpZHhBdHQiLCJpZHgiLCJkYXRhIiwicHVzaCIsInVzZXJJZCIsInRlYW1NZW1iZXJFbWFpbHMiLCJtYXAiLCJ4IiwiZm9yRWFjaCIsIm1lbWJlciIsImluY2x1ZGVzIiwiYWRkTWVldGluZyIsInJlc3BvbnNlIiwiYWRkVG9hc3QiLCJib2R5IiwiRVJST1IiLCJlcnJvciIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVE9LRU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRvZGF5IiwiRGF0ZSIsInNldERhdGUiLCJpIiwib3B0aW9uIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxJQUFJQyxPQUFKLENBQWE7QUFDeEJDLE9BQUssRUFBRUMsUUFBUSxDQUFDQyxjQUFULENBQXlCLG9CQUF6QixDQURpQjtBQUV4QkMsVUFGd0Isb0JBRWRDLElBRmMsRUFFUDtBQUNiO0FBQ0EsUUFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLE9BQUwsRUFBWjtBQUNBLFFBQU1DLEtBQUssR0FBR0gsSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxJQUFJLENBQUNNLFdBQUwsRUFBYjtBQUNBLHFC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VUFDQTtVQUNBIiwiZmlsZSI6ImFkZF9tZWV0aW5nLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hZGRfbWVldGluZy5jc3MnO1xyXG5pbXBvcnQgJy4vYXBwJztcclxuaW1wb3J0IGFkZFRvYXN0IGZyb20gJy4vY3VzdG9tcy9hcHAnO1xyXG5pbXBvcnQgeyBUT0tFTiwgU1VDQ0VTUywgRVJST1IgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tICcuL3NlcnZpY2VzL3VzZXJfbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IGFkZE1lZXRpbmcgfSBmcm9tICcuL3NlcnZpY2VzL21lZXRpbmdzJztcclxuaW1wb3J0IHsgZmV0Y2hUZWFtcyB9IGZyb20gJy4vc2VydmljZXMvdGVhbXMnO1xyXG5pbXBvcnQgQUREX01FRVRJTkdfRk9STSBmcm9tICcuL2RhdGEvYWRkX21lZXRpbmdfZm9ybSc7XHJcblxyXG5jb25zdCBwaWNrZXIgPSBuZXcgUGlrYWRheSgge1xyXG4gICAgZmllbGQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZm9ybUdyb3VwRGF0ZUlucHV0JyApLFxyXG4gICAgdG9TdHJpbmcoIGRhdGUgKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuICdEL00vWVlZWSdcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcclxuICAgIH0sXHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoIGVtYWlsICkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdCggU3RyaW5nKCBlbWFpbCApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUZWFtKCB0ZWFtICkge1xyXG4gICAgY29uc3QgcmUgPSAvQFthLXpBLVpcXC0wLTldKyQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoIFN0cmluZyggdGVhbSApLnRvTG93ZXJDYXNlKCkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0ZW5kZWVUeXBlKCBhdHRlbmRlZSApIHtcclxuICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICBpZiAoIHZhbGlkYXRlRW1haWwoIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICdlbWFpbCc7XHJcbiAgICB9IGVsc2UgaWYgKCB2YWxpZGF0ZVRlYW0oIGF0dGVuZGVlICkgKSB7XHJcbiAgICAgICAgdHlwZSA9ICd0ZWFtJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHlwZSA9ICdub25lJztcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2lucHV0TWVldGluZ05hbWUnICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndGV4dGFyZWFNZWV0aW5nRGVzY3JpcHRpb24nICkudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0U3RhcnRUaW1lSG91cnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RFbmRUaW1lSG91cnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApLnZhbHVlID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZU1pbnMnICkudmFsdWUgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dFBhcnRpY2lwYW50cycgKS52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FkZE1lZXRpbmdGb3JtJyApLmFkZEV2ZW50TGlzdGVuZXIoICdzdWJtaXQnLCAoIGV2ZW50ICkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRKU09OID0gQUREX01FRVRJTkdfRk9STTtcclxuICAgIGNvbnN0IG1lZXRpbmdOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdpbnB1dE1lZXRpbmdOYW1lJyApLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd0ZXh0YXJlYU1lZXRpbmdEZXNjcmlwdGlvbicgKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBwaWNrZXIuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGAke3NlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3NlbGVjdGVkRGF0ZS5nZXRNb250aCgpICsgMX0tJHtzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVIb3VycyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZUhvdXJzID0gcGFyc2VJbnQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3Qgc2VsZWN0U3RhcnRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdFN0YXJ0VGltZU1pbnMnICkudmFsdWUsIDEwICk7XHJcbiAgICBjb25zdCBzZWxlY3RFbmRUaW1lTWlucyA9IHBhcnNlSW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApLnZhbHVlLCAxMCApO1xyXG4gICAgY29uc3QgYXR0ZW5kZWVzID0gKCAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnaW5wdXRQYXJ0aWNpcGFudHMnICkudmFsdWUgKS5yZXBsYWNlKCAvXFxzKy9nLCAnJyApICkuc3BsaXQoICcsJyApO1xyXG5cclxuICAgIHN1Ym1pdEpTT05bJ25hbWUnXSA9IG1lZXRpbmdOYW1lO1xyXG4gICAgc3VibWl0SlNPTlsnZGVzY3JpcHRpb24nXSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgc3VibWl0SlNPTlsnZGF0ZSddID0gZGF0ZTtcclxuICAgIHN1Ym1pdEpTT05bJ3N0YXJ0VGltZSddWydob3VycyddID0gc2VsZWN0U3RhcnRUaW1lSG91cnM7XHJcbiAgICBzdWJtaXRKU09OWydzdGFydFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0U3RhcnRUaW1lTWlucztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnaG91cnMnXSA9IHNlbGVjdEVuZFRpbWVIb3VycztcclxuICAgIHN1Ym1pdEpTT05bJ2VuZFRpbWUnXVsnbWludXRlcyddID0gc2VsZWN0RW5kVGltZU1pbnM7XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kZWVzSlNPTiA9IFtdO1xyXG4gICAgbGV0IGF0dGVuZGVlc0xlbmd0aCA9IGF0dGVuZGVlcy5sZW5ndGg7XHJcblxyXG4gICAgZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgIC50aGVuKCAoIHVzZXJzICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHVzZXJzLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFRlYW1zKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbiggKCB0ZWFtcyApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0ZWFtcy5tZXNzYWdlID09PSBTVUNDRVNTICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeEF0dCA9IDA7IGlkeEF0dCA8IGF0dGVuZGVlc0xlbmd0aDsgaWR4QXR0ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWUgPSBhdHRlbmRlZXNbaWR4QXR0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCBhdHRlbmRlZVR5cGUoIGF0dGVuZGVlc1tpZHhBdHRdICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaWR4ID0gMDsgaWR4IDwgdXNlcnMuZGF0YS5sZW5ndGg7IGlkeCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRlbmRlZS50b0xvd2VyQ2FzZSgpID09PSB1c2Vycy5kYXRhW2lkeF1bJ2VtYWlsJ10udG9Mb3dlckNhc2UoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXNKU09OLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2Vycy5kYXRhW2lkeF1bJ19pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlcnMuZGF0YVtpZHhdWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZWFtJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGlkeCA9IDA7IGlkeCA8IHRlYW1zLmRhdGEubGVuZ3RoOyBpZHggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ZW5kZWUgPT09IGBAJHt0ZWFtcy5kYXRhW2lkeF1bJ3Nob3J0TmFtZSddfWAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU1lbWJlckVtYWlscyA9ICggdGVhbXMuZGF0YVtpZHhdWydtZW1iZXJzJ10gKS5tYXAoICggeCApID0+IHhbJ2VtYWlsJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTWVtYmVyRW1haWxzLmZvckVhY2goICggbWVtYmVyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dGVuZGVlcy5pbmNsdWRlcyggbWVtYmVyICkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLnB1c2goIG1lbWJlciApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlc0xlbmd0aCArPSB0ZWFtcy5kYXRhW2lkeF1bJ21lbWJlcnMnXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0SlNPTlsnYXR0ZW5kZWVzJ10gPSBhdHRlbmRlZXNKU09OO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VibWl0IGNvbnN0cnVjdGVkIG1lZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1lZXRpbmcoIHN1Ym1pdEpTT04gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLm1lc3NhZ2UgPT09IFNVQ0NFU1MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggJ01lZXRpbmcgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZG9jdW1lbnQuYm9keSwgU1VDQ0VTUyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGFkZGluZyBtZWV0aW5nOiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKCBlcnJvciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgYWRkaW5nIG1lZXRpbmc6ICR7ZXJyb3IubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB0ZWFtczogJHt0ZWFtcy5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goICggZXJyb3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLnJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb2FzdCggYEVycm9yIGZldGNoaW5nIHRlYW1zOiAke2Vycm9yLm1lc3NhZ2V9YCwgZG9jdW1lbnQuYm9keSwgRVJST1IgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCBgRXJyb3IgZmV0Y2hpbmcgdXNlcnM6ICR7dXNlcnMubWVzc2FnZX1gLCBkb2N1bWVudC5ib2R5LCBFUlJPUiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5yZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoIGBFcnJvciBmZXRjaGluZyB1c2VyczogJHtlcnJvci5tZXNzYWdlfWAsIGRvY3VtZW50LmJvZHksIEVSUk9SICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbn0gKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGF1dGhvcml6YXRpb24gdG9rZW4gZG9lc250IGV4aXN0XHJcbiAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBUT0tFTiApID09PSBudWxsICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHBpY2tlci5zZXREYXRlKCB0b2RheSApO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdCBob3VycyBhbmQgbWluIG9wdGlvbnNcclxuICAgIGNvbnN0IHNlbGVjdFN0YXJ0VGltZUhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVIb3VycycgKTtcclxuICAgIGNvbnN0IHNlbGVjdEVuZFRpbWVIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VsZWN0RW5kVGltZUhvdXJzJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gJyc7XHJcbiAgICAgICAgaWYgKCBpID09PSAwICkge1xyXG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIjBcIiBzZWxlY3RlZD4wPC9vcHRpb24+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24gPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2l9PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0U3RhcnRUaW1lSG91cnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgICAgICBzZWxlY3RFbmRUaW1lSG91cnMuaW5uZXJIVE1MICs9IG9wdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RTdGFydFRpbWVNaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzZWxlY3RTdGFydFRpbWVNaW5zJyApO1xyXG4gICAgY29uc3Qgc2VsZWN0RW5kVGltZU1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdEVuZFRpbWVNaW5zJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gMSApIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gJyc7XHJcbiAgICAgICAgaWYgKCBpID09PSAwICkge1xyXG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIjBcIiBzZWxlY3RlZD4wPC9vcHRpb24+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24gPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2l9PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0U3RhcnRUaW1lTWlucy5pbm5lckhUTUwgKz0gb3B0aW9uO1xyXG4gICAgICAgIHNlbGVjdEVuZFRpbWVNaW5zLmlubmVySFRNTCArPSBvcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmluaXQoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYWRkX21lZXRpbmdcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttZWV0aW5nc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfc3RhYmxlX2luZGV4X2pzLW5vZGVfbW9kdWxlc19yZWdlbmVyLTE1NzQwNlwiLFwicHVibGljX2pzX2N1c3RvbXNfYXBwX2pzLXB1YmxpY19qc19zZXJ2aWNlc19hdXRoX2pzLXB1YmxpY19jc3NfbWFpbl9jc3MtZGF0YV9pbWFnZV9zdmdfeG1sXzNjLTRlYTJhMVwiLFwicHVibGljX2pzX2FwcF9qcy1wdWJsaWNfanNfZGF0YV9hZGRfbWVldGluZ19mb3JtX2pzLXB1YmxpY19qc19zZXJ2aWNlc19tZWV0aW5nc19qcy1wdWJsaWNfanNfLWE0NTA0ZlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9hZGRfbWVldGluZy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==