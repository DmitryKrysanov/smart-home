"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = require("./ts/home");
var oven_1 = require("./ts/oven");
var washingMachine_1 = require("./ts/washingMachine");
var range_1 = require("./ts/range");
var mode_1 = require("./ts/mode");
var home = new home_1.default('home');
home.addDevice(new oven_1.default('bosch', new range_1.default(10, 240, 20, 10), new mode_1.default(['mode1', 'mode2'])));
home.addDevice(new washingMachine_1.default('WM', new range_1.default(20, 100, 10, 20), 1000, new mode_1.default(['mode3', 'mode4'])));
home.deviceOn('bosch', 2000)
    .then(function () { return console.log('on'); })
    .then(function () { return home.deviceOff('bosch', 2000); })
    .then(function () { return console.log('off'); })
    .then(function () { return home.deviceOn('bosch', 2000); })
    .then(function () { return console.log('on'); });
