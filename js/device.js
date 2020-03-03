var Device = /** @class */ (function () {
    function Device(name) {
        this.name = name;
        this.state = false;
    }
    Device.prototype.setName = function (name) {
        this.name = name;
    };
    Device.prototype.getName = function () {
        return this.name;
    };
    Device.prototype.on = function () {
        this.state = true;
    };
    Device.prototype.off = function () {
        this.state = false;
    };
    Device.prototype.getState = function () {
        return this.state;
    };
    return Device;
}());
