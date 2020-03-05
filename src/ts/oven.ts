class Oven extends Device {
    private temperature: IRange;
    private modes: IMode;

    public constructor(name: string, temperature: IRange, modes: IMode) {
        super(name);
        this.temperature = temperature;
        this.modes = modes;
    }

    public getTemperature(): IRange {
        return this.temperature;
    }

    public getModes(): IMode {
         return this.modes;
     }
}

