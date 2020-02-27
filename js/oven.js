'use strict'

function Oven(name, temperature, modes) {
    Device.call(this, name);
    this._temperature = temperature;
    this._modes = modes;
}

Oven.prototype = Object.create(Device.prototype);
Oven.prototype.constructor = Device;

Oven.prototype.getTemperature = function () {
    return this._temperature;
}

Oven.prototype.getModes = function () {
    return this._modes;
}