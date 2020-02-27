'use strict'

class WashingMachine extends Device {
    constructor(name, temperature, modes) {
        super(name);
        this._maxSpinSpeed = 1000;
        this._temperature = temperature;
        this._modes = modes;
    }

    set maxSpinSpeed(maxSpinSpeed) {
        this._maxSpinSpeed = maxSpinSpeed;
    }

    get temperature() {
        return this._temperature;
    }
    
    get modes() {
        return this._modes;
    }
}


