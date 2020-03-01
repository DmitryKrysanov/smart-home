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

