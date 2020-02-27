'use strict'

class Range {
    constructor(min, max, current, step) {
        this._min = min;
        this._max = max;
        this._current = current;
        this._step = step;
    }

    set min(min) {
        this._min = min;
    }

    get min() {
        return this._min;
    }

    set max(max) {
        this._max = max;
    }

    get max() {
        return this._max;
    }

    set current(current) {
        this._current = current;
    }

    get current() {
        return this._current;
    }

    set step(step) {
        this._step = step;
    }

    get step() {
        return this._step;
    }

    increase() {
        if (this._current !== this._max) {
            if ( (this._current + this._step) >= this._max) {
                this._current = this._max;
            } else {
                this._current += this._step;
            }
        }
    }
    
    decrease() {
        if (this._current !== this._min) {
            if ( (this._current - this._step) <= this._min) {
                this._current = this._min;
            } else {
                this._current -= this._step;
            }
        }
    }
}