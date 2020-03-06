/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/home */ \"./src/ts/home.ts\");\n/* harmony import */ var _ts_oven__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/oven */ \"./src/ts/oven.ts\");\n/* harmony import */ var _ts_washingMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/washingMachine */ \"./src/ts/washingMachine.ts\");\n/* harmony import */ var _ts_components_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/components/range */ \"./src/ts/components/range.ts\");\n/* harmony import */ var _ts_components_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/components/mode */ \"./src/ts/components/mode.ts\");\n\n\n\n\n\nvar home = new _ts_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('home');\nhome.addDevice(new _ts_oven__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('bosch', new _ts_components_range__WEBPACK_IMPORTED_MODULE_3__[\"default\"](10, 240, 20, 10), new _ts_components_mode__WEBPACK_IMPORTED_MODULE_4__[\"default\"](['mode1', 'mode2'])));\nhome.addDevice(new _ts_washingMachine__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('WM', new _ts_components_range__WEBPACK_IMPORTED_MODULE_3__[\"default\"](20, 100, 10, 20), 1000, new _ts_components_mode__WEBPACK_IMPORTED_MODULE_4__[\"default\"](['mode3', 'mode4'])));\nhome.deviceOn('bosch', 2000)\n    .then(function () { return console.log('on'); })\n    .then(function () { return home.deviceOff('bosch', 2000); })\n    .then(function () { return console.log('off'); })\n    .then(function () { return home.deviceOn('bosch', 2000); })\n    .then(function () { return console.log('on'); });\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/ts/components/mode.ts":
/*!***********************************!*\
  !*** ./src/ts/components/mode.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Mode = /** @class */ (function () {\n    function Mode(modes) {\n        this.modes = modes;\n        this.current = 0;\n    }\n    Mode.prototype.getModes = function () {\n        return this.modes;\n    };\n    Mode.prototype.setModes = function (modes) {\n        this.modes = modes;\n    };\n    Mode.prototype.getCurrentMode = function () {\n        return this.modes[this.current];\n    };\n    Mode.prototype.next = function () {\n        if (this.current === this.modes.length - 1) {\n            this.current = 0;\n        }\n        else {\n            this.current++;\n        }\n    };\n    Mode.prototype.prev = function () {\n        if (this.current === 0) {\n            this.current = this.modes.length - 1;\n        }\n        else {\n            this.current--;\n        }\n    };\n    return Mode;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mode);\n\n\n//# sourceURL=webpack:///./src/ts/components/mode.ts?");

/***/ }),

/***/ "./src/ts/components/range.ts":
/*!************************************!*\
  !*** ./src/ts/components/range.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RangeTemp = /** @class */ (function () {\n    function RangeTemp(min, max, current, step) {\n        this.min = min;\n        this.max = max;\n        this.current = current;\n        this.step = step;\n    }\n    RangeTemp.prototype.getMin = function () {\n        return this.min;\n    };\n    RangeTemp.prototype.setMin = function (min) {\n        this.min = min;\n    };\n    RangeTemp.prototype.getMax = function () {\n        return this.max;\n    };\n    RangeTemp.prototype.setMax = function (max) {\n        this.max = max;\n    };\n    RangeTemp.prototype.getCurrent = function () {\n        return this.current;\n    };\n    RangeTemp.prototype.setCurrent = function (current) {\n        this.current = current;\n    };\n    RangeTemp.prototype.getStep = function () {\n        return this.step;\n    };\n    RangeTemp.prototype.setStep = function (step) {\n        this.step = step;\n    };\n    RangeTemp.prototype.increase = function () {\n        if (this.current !== this.max) {\n            if ((this.current + this.step) >= this.max) {\n                this.current = this.max;\n            }\n            else {\n                this.current += this.step;\n            }\n        }\n    };\n    RangeTemp.prototype.decrease = function () {\n        if (this.current !== this.min) {\n            if ((this.current - this.step) <= this.min) {\n                this.current = this.min;\n            }\n            else {\n                this.current -= this.step;\n            }\n        }\n    };\n    return RangeTemp;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (RangeTemp);\n\n\n//# sourceURL=webpack:///./src/ts/components/range.ts?");

/***/ }),

/***/ "./src/ts/device.ts":
/*!**************************!*\
  !*** ./src/ts/device.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Device = /** @class */ (function () {\n    function Device(name) {\n        this.name = name;\n        this.state = false;\n    }\n    Device.prototype.getName = function () {\n        return this.name;\n    };\n    Device.prototype.setName = function (name) {\n        this.name = name;\n    };\n    Device.prototype.getState = function () {\n        return this.state;\n    };\n    Device.prototype.on = function () {\n        this.state = true;\n    };\n    Device.prototype.off = function () {\n        this.state = false;\n    };\n    return Device;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Device);\n\n\n//# sourceURL=webpack:///./src/ts/device.ts?");

/***/ }),

/***/ "./src/ts/home.ts":
/*!************************!*\
  !*** ./src/ts/home.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Home = /** @class */ (function () {\n    function Home(name) {\n        this.name = name;\n        this.devices = [];\n    }\n    Home.prototype.getName = function () {\n        return this.name;\n    };\n    Home.prototype.setName = function (name) {\n        this.name = name;\n    };\n    Home.prototype.getDevices = function () {\n        return this.devices;\n    };\n    Home.prototype.addDevice = function (device) {\n        this.devices.push(device);\n    };\n    Home.prototype.selectDeviceByName = function (name) {\n        return this.devices.find(function (device) { return device.getName() === name; });\n    };\n    Home.prototype.deviceOn = function (name, delay) {\n        var _this = this;\n        return new Promise(function (resolve) { return setTimeout(function () {\n            _this.selectDeviceByName(name).on();\n            resolve();\n        }, delay); });\n    };\n    Home.prototype.deviceOff = function (name, delay) {\n        var _this = this;\n        return new Promise(function (resolve) { return setTimeout(function () {\n            _this.selectDeviceByName(name).off();\n            resolve();\n        }, delay); });\n    };\n    Home.prototype.removeDevice = function (name) {\n        var index = this.devices.indexOf(this.selectDeviceByName(name));\n        this.devices.splice(index, 1);\n    };\n    Home.prototype.removeAllDevices = function () {\n        this.devices = [];\n    };\n    return Home;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack:///./src/ts/home.ts?");

/***/ }),

/***/ "./src/ts/oven.ts":
/*!************************!*\
  !*** ./src/ts/oven.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device */ \"./src/ts/device.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Oven = /** @class */ (function (_super) {\n    __extends(Oven, _super);\n    function Oven(name, temperature, modes) {\n        var _this = _super.call(this, name) || this;\n        _this.temperature = temperature;\n        _this.modes = modes;\n        return _this;\n    }\n    Oven.prototype.getTemperature = function () {\n        return this.temperature;\n    };\n    Oven.prototype.getModes = function () {\n        return this.modes;\n    };\n    return Oven;\n}(_device__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Oven);\n\n\n//# sourceURL=webpack:///./src/ts/oven.ts?");

/***/ }),

/***/ "./src/ts/washingMachine.ts":
/*!**********************************!*\
  !*** ./src/ts/washingMachine.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device */ \"./src/ts/device.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar WashingMachine = /** @class */ (function (_super) {\n    __extends(WashingMachine, _super);\n    function WashingMachine(name, temperature, maxSpinSpeed, modes) {\n        var _this = _super.call(this, name) || this;\n        _this.maxSpinSpeed = maxSpinSpeed;\n        _this.temperature = temperature;\n        _this.modes = modes;\n        return _this;\n    }\n    WashingMachine.prototype.getMaxSpinSpeed = function () {\n        return this.maxSpinSpeed;\n    };\n    WashingMachine.prototype.setMaxSpinSpeed = function (maxSpinSpeed) {\n        this.maxSpinSpeed = maxSpinSpeed;\n    };\n    WashingMachine.prototype.getTemperature = function () {\n        return this.temperature;\n    };\n    WashingMachine.prototype.getModes = function () {\n        return this.modes;\n    };\n    return WashingMachine;\n}(_device__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (WashingMachine);\n\n\n//# sourceURL=webpack:///./src/ts/washingMachine.ts?");

/***/ })

/******/ });