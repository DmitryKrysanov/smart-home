'use strict'

function Range(min, max, current, step) {
    this._min = min;
    this._max = max;
    this._current = current;
    this._step = step;
}

Range.prototype.setMin = function (min) {
    this._min = min;
}

Range.prototype.getMin = function () {
    return this._min;
}

Range.prototype.setMax = function (max) {
    this._max = max;
}

Range.prototype.getMax = function () {
    return this._max;
}

Range.prototype.setCurrent = function (current) {
    this._current = current;
}

Range.prototype.getCurrent = function () {
    return this._current;
}

Range.prototype.setStep = function (step) {
    this._step = step;
}

Range.prototype.getStep = function () {
    return this._step;
}

Range.prototype.increase = function () {
    if (this._current < this._max) {
        this._current += this._step;
    }
}

Range.prototype.decrease = function () {
    if (this._current > this._min) {
        this._current -= this._step;
    }
}