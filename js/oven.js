class Oven extends Device {
    constructor(name, temperature, modes) {
        super(name);
        this.temperature = temperature;
        this.modes = modes;
    }
    getTemperature() {
        return this.temperature;
    }
    getModes() {
        return this.modes;
    }
}
