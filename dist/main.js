/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/domFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_clearsky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/clearsky.png */ "./src/assets/clearsky.png");
/* harmony import */ var _assets_fewclouds_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fewclouds.png */ "./src/assets/fewclouds.png");
/* harmony import */ var _assets_mist_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/mist.png */ "./src/assets/mist.png");
/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/rain.png */ "./src/assets/rain.png");
/* harmony import */ var _assets_brokenclouds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/brokenclouds.png */ "./src/assets/brokenclouds.png");
/* harmony import */ var _assets_showerrain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/showerrain.png */ "./src/assets/showerrain.png");
/* harmony import */ var _assets_thunderstrom_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/thunderstrom.png */ "./src/assets/thunderstrom.png");
/* harmony import */ var _assets_humidity_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/humidity.png */ "./src/assets/humidity.png");
/* harmony import */ var _assets_windspeed_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/windspeed.png */ "./src/assets/windspeed.png");
/* harmony import */ var _assets_feelslike_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/feelslike.png */ "./src/assets/feelslike.png");











const city = document.getElementById("cityName");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const weatherCondition = document.getElementById("weatherCondition");
const showHide = document.querySelector('.showHide');


document.querySelector(".feelsLike").src = _assets_feelslike_png__WEBPACK_IMPORTED_MODULE_9__;
document.querySelector(".windSpeed").src = _assets_windspeed_png__WEBPACK_IMPORTED_MODULE_8__;
document.querySelector(".humidity").src = _assets_humidity_png__WEBPACK_IMPORTED_MODULE_7__;


const weatherConditions = [_assets_clearsky_png__WEBPACK_IMPORTED_MODULE_0__, _assets_fewclouds_png__WEBPACK_IMPORTED_MODULE_1__, _assets_mist_png__WEBPACK_IMPORTED_MODULE_2__, _assets_rain_png__WEBPACK_IMPORTED_MODULE_3__, _assets_brokenclouds_png__WEBPACK_IMPORTED_MODULE_4__, _assets_showerrain_png__WEBPACK_IMPORTED_MODULE_5__, _assets_thunderstrom_png__WEBPACK_IMPORTED_MODULE_6__];
function setResult (data) {
    const weatherConditionNoWhiteSpace = data.weatherCondition.replace(/\s+/g, '');
    console.log(weatherConditionNoWhiteSpace);
    weatherConditions.forEach((condition) => {
        if (condition.includes(weatherConditionNoWhiteSpace)) {
            weatherCondition.src = condition;
        }
    })
    city.textContent = data.city;
    temp.textContent = `${data.temp}°C`;
    feelsLike.textContent = `${data.feelsLike}°C`;
    windSpeed.textContent = `${data.windSpeed} km/h`;
    humidity.textContent = `${data.humidity} %`;
    /* show result */
    if (!showHide.classList.contains('active')) {
        showHide.classList.add('active');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setResult);

/***/ }),

/***/ "./src/modules/weatherapp.js":
/*!***********************************!*\
  !*** ./src/modules/weatherapp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
function getInput() {
    const inputForm = document.getElementById("cityInput");
    const city = inputForm.value;
    return city;
}

const weather = ( () => {

    function roundAfterOneDigit(n) {
        return Math.round(n * 10) / 10;
    }

    function processData (data) {

        const {
            name: city,
            main: {humidity},
            weather: {'0': {description : weatherCondition}},
            wind: {speed: windSpeed}
        } = data


        let {
            temp,
            feels_like: feelsLike,
                        
        } = data.main
        
        return {
            city,
            humidity,
            weatherCondition,
            temp: roundAfterOneDigit(temp),
            feelsLike: roundAfterOneDigit(feelsLike),
            windSpeed
        };
    }

    async function getData (city){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=177eb24cf9e5c8ddad2b2fed130150dd`, {mode : 'cors'});
            if (!response.ok) {
                throw new Error(`City is not found! Please check your spelling.`);
            }
            let data = await response.json();
            data = processData(data);
            return data;            
        }
        catch (err) {
            return err.message;
        }

    }

    return {getData};
})();



/***/ }),

/***/ "./src/assets/brokenclouds.png":
/*!*************************************!*\
  !*** ./src/assets/brokenclouds.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/brokenclouds.png";

/***/ }),

/***/ "./src/assets/clearsky.png":
/*!*********************************!*\
  !*** ./src/assets/clearsky.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/clearsky.png";

/***/ }),

/***/ "./src/assets/feelslike.png":
/*!**********************************!*\
  !*** ./src/assets/feelslike.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/feelslike.png";

/***/ }),

/***/ "./src/assets/fewclouds.png":
/*!**********************************!*\
  !*** ./src/assets/fewclouds.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fewclouds.png";

/***/ }),

/***/ "./src/assets/humidity.png":
/*!*********************************!*\
  !*** ./src/assets/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/humidity.png";

/***/ }),

/***/ "./src/assets/mist.png":
/*!*****************************!*\
  !*** ./src/assets/mist.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mist.png";

/***/ }),

/***/ "./src/assets/rain.png":
/*!*****************************!*\
  !*** ./src/assets/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/rain.png";

/***/ }),

/***/ "./src/assets/showerrain.png":
/*!***********************************!*\
  !*** ./src/assets/showerrain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/showerrain.png";

/***/ }),

/***/ "./src/assets/thunderstrom.png":
/*!*************************************!*\
  !*** ./src/assets/thunderstrom.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/thunderstrom.png";

/***/ }),

/***/ "./src/assets/windspeed.png":
/*!**********************************!*\
  !*** ./src/assets/windspeed.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/windspeed.png";

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherapp */ "./src/modules/weatherapp.js");
/* harmony import */ var _modules_domFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domFunctions */ "./src/modules/domFunctions.js");



const searchBtn = document.querySelector('.btn-submit');
const form = document.querySelector('.searchForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

searchBtn.addEventListener('click', async function ()  {
    const city = (0,_modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__.getInput)();
    if (city) {
        console.log(city);
        const data = await _modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__.weather.getData(city);
        if (typeof data === 'string') {
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = data;
        }
        else {
            errorMessage.textContent = '';
            (0,_modules_domFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
        }       
    }

})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDRTtBQUNWO0FBQ0E7QUFDZ0I7QUFDSjtBQUNJO0FBQ0w7QUFDRTtBQUNBOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsMkNBQTJDLGtEQUFZO0FBQ3ZELDJDQUEyQyxrREFBWTtBQUN2RCwwQ0FBMEMsaURBQVc7OztBQUdyRCwyQkFBMkIsaURBQVEsRUFBRSxrREFBUyxFQUFFLDZDQUFJLEVBQUUsNkNBQUksRUFBRSxxREFBWSxFQUFFLG1EQUFVLEVBQUUscURBQVk7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQywrQkFBK0IsZUFBZTtBQUM5QywrQkFBK0IsZ0JBQWdCO0FBQy9DLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsc0JBQXNCLE1BQU0sZ0NBQWdDO0FBQzVELG1CQUFtQjtBQUNuQixVQUFVOzs7QUFHVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEZBQThGLEtBQUssd0RBQXdELGNBQWM7QUFDeks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2Z5RDtBQUNUOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLDZEQUFRO0FBQ3pCO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBUztBQUNyQjtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJhcHAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGVhclNreSBmcm9tICcuLi9hc3NldHMvY2xlYXJza3kucG5nJztcbmltcG9ydCBmZXdDbG91ZHMgZnJvbSAnLi4vYXNzZXRzL2Zld2Nsb3Vkcy5wbmcnO1xuaW1wb3J0IG1pc3QgZnJvbSAnLi4vYXNzZXRzL21pc3QucG5nJztcbmltcG9ydCByYWluIGZyb20gJy4uL2Fzc2V0cy9yYWluLnBuZyc7XG5pbXBvcnQgYnJva2VuQ2xvdWRzIGZyb20gJy4uL2Fzc2V0cy9icm9rZW5jbG91ZHMucG5nJztcbmltcG9ydCBzaG93ZXJSYWluIGZyb20gJy4uL2Fzc2V0cy9zaG93ZXJyYWluLnBuZyc7XG5pbXBvcnQgdGh1bmRlclN0cm9tIGZyb20gJy4uL2Fzc2V0cy90aHVuZGVyc3Ryb20ucG5nJztcbmltcG9ydCBodW1pZGl0eUltZyBmcm9tICcuLi9hc3NldHMvaHVtaWRpdHkucG5nJztcbmltcG9ydCB3aW5kU3BlZWRJbWcgZnJvbSAnLi4vYXNzZXRzL3dpbmRzcGVlZC5wbmcnO1xuaW1wb3J0IGZlZWxzTGlrZUltZyBmcm9tICcuLi9hc3NldHMvZmVlbHNsaWtlLnBuZyc7XG5cbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlOYW1lXCIpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNMaWtlXCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kU3BlZWRcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG5jb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyQ29uZGl0aW9uXCIpO1xuY29uc3Qgc2hvd0hpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd0hpZGUnKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZVwiKS5zcmMgPSBmZWVsc0xpa2VJbWc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRTcGVlZFwiKS5zcmMgPSB3aW5kU3BlZWRJbWc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpLnNyYyA9IGh1bWlkaXR5SW1nO1xuXG5cbmNvbnN0IHdlYXRoZXJDb25kaXRpb25zID0gW2NsZWFyU2t5LCBmZXdDbG91ZHMsIG1pc3QsIHJhaW4sIGJyb2tlbkNsb3Vkcywgc2hvd2VyUmFpbiwgdGh1bmRlclN0cm9tXTtcbmZ1bmN0aW9uIHNldFJlc3VsdCAoZGF0YSkge1xuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25Ob1doaXRlU3BhY2UgPSBkYXRhLndlYXRoZXJDb25kaXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckNvbmRpdGlvbk5vV2hpdGVTcGFjZSk7XG4gICAgd2VhdGhlckNvbmRpdGlvbnMuZm9yRWFjaCgoY29uZGl0aW9uKSA9PiB7XG4gICAgICAgIGlmIChjb25kaXRpb24uaW5jbHVkZXMod2VhdGhlckNvbmRpdGlvbk5vV2hpdGVTcGFjZSkpIHtcbiAgICAgICAgICAgIHdlYXRoZXJDb25kaXRpb24uc3JjID0gY29uZGl0aW9uO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBjaXR5LnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9wrBDYDtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzTGlrZX3CsENgO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZFNwZWVkfSBrbS9oYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9ICVgO1xuICAgIC8qIHNob3cgcmVzdWx0ICovXG4gICAgaWYgKCFzaG93SGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHNob3dIaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0UmVzdWx0OyIsImZ1bmN0aW9uIGdldElucHV0KCkge1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eUlucHV0XCIpO1xuICAgIGNvbnN0IGNpdHkgPSBpbnB1dEZvcm0udmFsdWU7XG4gICAgcmV0dXJuIGNpdHk7XG59XG5cbmNvbnN0IHdlYXRoZXIgPSAoICgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHJvdW5kQWZ0ZXJPbmVEaWdpdChuKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG4gKiAxMCkgLyAxMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YSAoZGF0YSkge1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5hbWU6IGNpdHksXG4gICAgICAgICAgICBtYWluOiB7aHVtaWRpdHl9LFxuICAgICAgICAgICAgd2VhdGhlcjogeycwJzoge2Rlc2NyaXB0aW9uIDogd2VhdGhlckNvbmRpdGlvbn19LFxuICAgICAgICAgICAgd2luZDoge3NwZWVkOiB3aW5kU3BlZWR9XG4gICAgICAgIH0gPSBkYXRhXG5cblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgdGVtcCxcbiAgICAgICAgICAgIGZlZWxzX2xpa2U6IGZlZWxzTGlrZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9ID0gZGF0YS5tYWluXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgIGh1bWlkaXR5LFxuICAgICAgICAgICAgd2VhdGhlckNvbmRpdGlvbixcbiAgICAgICAgICAgIHRlbXA6IHJvdW5kQWZ0ZXJPbmVEaWdpdCh0ZW1wKSxcbiAgICAgICAgICAgIGZlZWxzTGlrZTogcm91bmRBZnRlck9uZURpZ2l0KGZlZWxzTGlrZSksXG4gICAgICAgICAgICB3aW5kU3BlZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhIChjaXR5KXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9MTc3ZWIyNGNmOWU1YzhkZGFkMmIyZmVkMTMwMTUwZGRgLCB7bW9kZSA6ICdjb3JzJ30pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2l0eSBpcyBub3QgZm91bmQhIFBsZWFzZSBjaGVjayB5b3VyIHNwZWxsaW5nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBkYXRhID0gcHJvY2Vzc0RhdGEoZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7Z2V0RGF0YX07XG59KSgpO1xuXG5leHBvcnQgeyBnZXRJbnB1dCwgd2VhdGhlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGdldElucHV0LCB3ZWF0aGVyIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyYXBwXCI7XG5pbXBvcnQgc2V0UmVzdWx0ICBmcm9tIFwiLi9tb2R1bGVzL2RvbUZ1bmN0aW9uc1wiO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXN1Ym1pdCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hGb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSAge1xuICAgIGNvbnN0IGNpdHkgPSBnZXRJbnB1dCgpO1xuICAgIGlmIChjaXR5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKGNpdHkpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yTWVzc2FnZVwiKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKTtcbiAgICAgICAgfSAgICAgICBcbiAgICB9XG5cbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==