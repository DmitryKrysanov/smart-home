class Home {
    constructor(name) {
        this.name = name;
        this.devices = [];
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addDevice(device) {
        this.devices.push(device);
    }
    getDevices() {
        return this.devices;
    }
    selectDeviceByName(name) {
        return this.devices.find(device => device.getName() === name);
    }
    deviceOn(name, delay, callback) {
        setTimeout(() => {
            this.selectDeviceByName(name).on();
            callback();
        }, delay);
    }
    deviceOff(name, delay, callback) {
        setTimeout(() => {
            this.selectDeviceByName(name).off();
            callback();
        }, delay);
    }
    removeDevice(name) {
        const index = this.devices.indexOf(this.selectDeviceByName(name));
        this.devices.splice(index, 1);
    }
    removeAllDevices() {
        this.devices = [];
    }
}
