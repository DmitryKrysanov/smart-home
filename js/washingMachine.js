'use strict'

function WashingMachine(name, temperature, modes) {
    Device.call(this, name);
    this._maxSpinSpeed = 1000;
    this._temperature = temperature;
    this._modes = modes;
}

WashingMachine.prototype = Object.create(Device.prototype);
WashingMachine.prototype.constructor = Device;

WashingMachine.prototype.setMaxSpinSpeed = function (maxSpinSpeed) {
    this._maxSpinSpeed = maxSpinSpeed;
}

WashingMachine.prototype.getTemperature = function () {
    return this._temperature;
}

WashingMachine.prototype.getModes = function () {
    return this._modes;
}