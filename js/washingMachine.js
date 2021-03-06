var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine(name, temperature, maxSpinSpeed, modes) {
        var _this = _super.call(this, name) || this;
        _this.maxSpinSpeed = maxSpinSpeed;
        _this.temperature = temperature;
        _this.modes = modes;
        return _this;
    }
    WashingMachine.prototype.setMaxSpinSpeed = function (maxSpinSpeed) {
        this.maxSpinSpeed = maxSpinSpeed;
    };
    WashingMachine.prototype.getMaxSpinSpeed = function () {
        return this.maxSpinSpeed;
    };
    WashingMachine.prototype.getTemperature = function () {
        return this.temperature;
    };
    WashingMachine.prototype.getModes = function () {
        return this.modes;
    };
    return WashingMachine;
}(Device));
