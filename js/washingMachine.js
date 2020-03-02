class WashingMachine extends Device {
    constructor(name, temperature, modes) {
        super(name);
        this.maxSpinSpeed = 1000;
        this.temperature = temperature;
        this.modes = modes;
    }
    setMaxSpinSpeed(maxSpinSpeed) {
        this.maxSpinSpeed = maxSpinSpeed;
    }
    getTemperature() {
        return this.temperature;
    }
    getModes() {
        return this.modes;
    }
}
