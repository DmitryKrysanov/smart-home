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
const oven = new Oven('bosch', { min: 10, max: 20, current: 1, step: 2 }, { modes: ['mode1', 'mode2'], current: 0 });
module.exports = oven;
