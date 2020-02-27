'use strict'

class Home {
    constructor(name) {
        this._name = name;
        this._devices = [];
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    addDevice(device) {
        this._devices.push(device);
    }

    get devices() {
        return this._devices;
    }

    getDeviceByName(name) {
        return this._devices.find( device => device.name === name )
    }

    deviceOn(name, delay, callback) {
        const device = this.getDeviceByName(name);
        setTimeout(() => {
            device.on();
            callback(device)
        }, delay)
    }

    deviceOff(name, delay, callback) {
        const device = this.getDeviceByName(name);
        setTimeout(() => {
            device.off();
            callback(device)
        }, delay)
    }

    removeDevice(name) {
        const index = this._devices.indexOf(this.getDeviceByName(name));
        this._devices.splice(index, 1);
    }

    removeAllDevices() {
        this._devices = [];
    }
}