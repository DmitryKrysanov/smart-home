'use strict'

function Mode(modes) {
    this._modes = modes;
    this._current = 0;
}

Mode.prototype.setModes = function (modes) {
    this._modes = modes;
}

Mode.prototype.getModes = function () {
    return this._modes;
}

Mode.prototype.getCurrentMode = function () {
    return this._modes[this._current];
}

Mode.prototype.next = function () {
    if (this._current === this._modes.length - 1) {
        this._current = 0;
    } else {
        this._current++;
    }
}

Mode.prototype.prev = function () {
    if (this._current === 0) {
        this._current = this._modes.length - 1;
    } else {
        this._current--;
    }
}