'use strict'

class Mode {
    constructor(modes) {
        this._modes = modes;
        this._current = 0;
    }

    set modes(modes) {
        this._modes = modes;
    }

    get modes() {
        return this._modes;
    }

    get currentMode() {
        return this._modes[this._current];
    }

    next() {
        if (this._current === this._modes.length - 1) {
            this._current = 0;
        } else {
            this._current++;
        }
    }
    
    prev() {
        if (this._current === 0) {
            this._current = this._modes.length - 1;
        } else {
            this._current--;
        }
    }
}





