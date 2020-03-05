"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RangeTemp = /** @class */ (function () {
    function RangeTemp(min, max, current, step) {
        this.min = min;
        this.max = max;
        this.current = current;
        this.step = step;
    }
    RangeTemp.prototype.getMin = function () {
        return this.min;
    };
    RangeTemp.prototype.setMin = function (min) {
        this.min = min;
    };
    RangeTemp.prototype.getMax = function () {
        return this.max;
    };
    RangeTemp.prototype.setMax = function (max) {
        this.max = max;
    };
    RangeTemp.prototype.getCurrent = function () {
        return this.current;
    };
    RangeTemp.prototype.setCurrent = function (current) {
        this.current = current;
    };
    RangeTemp.prototype.getStep = function () {
        return this.step;
    };
    RangeTemp.prototype.setStep = function (step) {
        this.step = step;
    };
    RangeTemp.prototype.increase = function () {
        if (this.current !== this.max) {
            if ((this.current + this.step) >= this.max) {
                this.current = this.max;
            }
            else {
                this.current += this.step;
            }
        }
    };
    RangeTemp.prototype.decrease = function () {
        if (this.current !== this.min) {
            if ((this.current - this.step) <= this.min) {
                this.current = this.min;
            }
            else {
                this.current -= this.step;
            }
        }
    };
    return RangeTemp;
}());
exports.default = RangeTemp;
