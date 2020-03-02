class Oven extends Device {
    temperature: IRange;
    modes: IMode;

    constructor(name: string, temperature: IRange, modes: IMode) {
        super(name);
        this.temperature = temperature;
        this.modes = modes;
    }

    getTemperature(): IRange {
        return this.temperature;
    }

     getModes(): IMode {
         return this.modes;
     }
}

