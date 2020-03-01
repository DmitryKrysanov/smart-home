interface IDevice {
    name: string;
    state: boolean;
}

class Device implements IDevice {
    name: string;
    state: boolean;

    constructor(name: string) {
        this.name = name;
        this.state = false;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    on(): void {
        this.state = true;
    }

    off(): void {
        this.state = false;
    }
    
    getState(): boolean {
        return this.state;
    }
}