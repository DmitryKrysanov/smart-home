'use strict'

function Home(name) {
    this._name = name;
    this._devices = [];
}

Home.prototype.setName = function (name) {
    this._name = name;
}

Home.prototype.getName = function () {
    return this._name;
}

Home.prototype.addDevice = function (device) {
    this._devices.push(device);
}

Home.prototype.getDevices = function () {
    return this._devices;
}

Home.prototype.getDeviceByName = function (name) {
    for (var i = 0; i < this._devices.length; i++) {
        if (this._devices[i].getName() === name) {
            return this._devices[i];
        }
    }
}

Home.prototype.removeDevice = function (name) {
    var index = this._devices.indexOf(this.getDeviceByName(name));
    this._devices.splice(index, 1);
}

Home.prototype.removeAllDevices = function () {
    this._devices = [];
}