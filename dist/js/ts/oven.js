"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var device_1 = require("./device");
var Oven = /** @class */ (function (_super) {
    __extends(Oven, _super);
    function Oven(name, temperature, modes) {
        var _this = _super.call(this, name) || this;
        _this.temperature = temperature;
        _this.modes = modes;
        return _this;
    }
    Oven.prototype.getTemperature = function () {
        return this.temperature;
    };
    Oven.prototype.getModes = function () {
        return this.modes;
    };
    return Oven;
}(device_1.default));
exports.default = Oven;
