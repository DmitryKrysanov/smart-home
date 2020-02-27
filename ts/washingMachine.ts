class WashingMachine extends Device {
    name: string;
    temperature: number;
    modes: string[];
    maxSpinSpeed: number;
    constructor(name: string, temperature: number, modes: string[]) {
        super(name);
        this.maxSpinSpeed = 1000;
        this.temperature = temperature;
        this.modes = modes;
    }

    setMaxSpinSpeed(maxSpinSpeed: number): void {
        this.maxSpinSpeed = maxSpinSpeed;
    }

    getTemperature(): number {
        return this.temperature;
    }
    
    getModes(): string[] {
        return this.modes;
    }
}


