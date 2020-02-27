'use strict'

class Oven extends Device {
    constructor(name, temperature, modes) {
        super(name);
        this._temperature = temperature;
        this._modes = modes;
    }

    get temperature() {
        return this._temperature;
    }
    
    get modes() {
        return this._modes;
    }
}
