class Oven extends Device {
    temperature: IRange;
    modes: object;
    constructor(name: string, temperature: IRange, modes: object) {
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
