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
        return this.devices.find((device) => device['name'] === name);
    }
    deviceOn(name, delay, callback) {
        const device = this.selectDeviceByName(name); //any should be deleted
        console.log(typeof (device));
        setTimeout(() => {
            device.on();
            //callback(device)
        }, delay);
    }
    deviceOff(name, delay, callback) {
        const device = this.selectDeviceByName(name); //any should be deleted
        setTimeout(() => {
            device.off();
            // callback(device)
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
