class Oven extends Device {
    temperature: IRange;
    modes: IMode;

    constructor(name: string, temperature: IRange, modes: IMode) {
        super(name);
        this.temperature = temperature;
        this.modes = modes;
    }

    getTemperature(): object {
        return this.temperature;
    }

     getModes(): object {
         return this.modes;
     }
}

const oven = new Oven('bosch', {min: 10, max: 20, current: 1, step: 2}, {modes: ['mode1', 'mode2'], current: 0});
module.exports = oven;

