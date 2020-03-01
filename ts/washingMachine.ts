class WashingMachine extends Device {
    name: string;
    temperature: IRange;
    modes: IMode;
    maxSpinSpeed: number;
    
    constructor(name: string, temperature: IRange, modes: IMode) {
        super(name);
        this.maxSpinSpeed = 1000;
        this.temperature = temperature;
        this.modes = modes;
    }

    setMaxSpinSpeed(maxSpinSpeed: number): void {
        this.maxSpinSpeed = maxSpinSpeed;
    }

    getTemperature(): object {
        return this.temperature;
    }
    
    getModes(): object {
        return this.modes;
    }
}


