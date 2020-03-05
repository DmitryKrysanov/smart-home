var Device = /** @class */ (function () {
    function Device(name) {
        this.name = name;
        this.state = false;
    }
    Device.prototype.getName = function () {
        return this.name;
    };
    Device.prototype.setName = function (name) {
        this.name = name;
    };
    Device.prototype.getState = function () {
        return this.state;
    };
    Device.prototype.on = function () {
        this.state = true;
    };
    Device.prototype.off = function () {
        this.state = false;
    };
    return Device;
}());
