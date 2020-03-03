var Home = /** @class */ (function () {
    function Home(name) {
        this.name = name;
        this.devices = [];
    }
    Home.prototype.setName = function (name) {
        this.name = name;
    };
    Home.prototype.getName = function () {
        return this.name;
    };
    Home.prototype.addDevice = function (device) {
        this.devices.push(device);
    };
    Home.prototype.getDevices = function () {
        return this.devices;
    };
    Home.prototype.selectDeviceByName = function (name) {
        return this.devices.find(function (device) { return device.getName() === name; });
    };
    Home.prototype.deviceOn = function (name, delay, callback) {
        var _this = this;
        setTimeout(function () {
            _this.selectDeviceByName(name).on();
            callback();
        }, delay);
    };
    Home.prototype.deviceOff = function (name, delay, callback) {
        var _this = this;
        setTimeout(function () {
            _this.selectDeviceByName(name).off();
            callback();
        }, delay);
    };
    Home.prototype.removeDevice = function (name) {
        var index = this.devices.indexOf(this.selectDeviceByName(name));
        this.devices.splice(index, 1);
    };
    Home.prototype.removeAllDevices = function () {
        this.devices = [];
    };
    return Home;
}());
