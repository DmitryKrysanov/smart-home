"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mode = /** @class */ (function () {
    function Mode(modes) {
        this.modes = modes;
        this.current = 0;
    }
    Mode.prototype.getModes = function () {
        return this.modes;
    };
    Mode.prototype.setModes = function (modes) {
        this.modes = modes;
    };
    Mode.prototype.getCurrentMode = function () {
        return this.modes[this.current];
    };
    Mode.prototype.next = function () {
        if (this.current === this.modes.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
    };
    Mode.prototype.prev = function () {
        if (this.current === 0) {
            this.current = this.modes.length - 1;
        }
        else {
            this.current--;
        }
    };
    return Mode;
}());
exports.default = Mode;
