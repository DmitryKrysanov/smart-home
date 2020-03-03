class WashingMachine extends Device {
    private temperature: IRange;
    private modes: IMode;
    private maxSpinSpeed: number;
    
    constructor(name: string, temperature: IRange, maxSpinSpeed: number, modes: IMode) {
        super(name);
        this.maxSpinSpeed = maxSpinSpeed;
        this.temperature = temperature;
        this.modes = modes;
    }

    public setMaxSpinSpeed(maxSpinSpeed: number): void {
        this.maxSpinSpeed = maxSpinSpeed;
    }
    
    public getMaxSpinSpeed(): number {
        return this.maxSpinSpeed;
    }

    public getTemperature(): IRange {
        return this.temperature;
    }
    
    public getModes(): IMode {
        return this.modes;
    }
}


