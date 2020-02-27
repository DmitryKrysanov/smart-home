'use strict'

class Device {
    constructor(name) {
        this._name = name;
        this._state = false;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    on() {
        this._state = true;
    }

    off() {
        this._state = false;
    }
    
    get state() {
        return this._state;
    }
}





