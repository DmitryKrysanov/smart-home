abstract class Device implements IDevice {
    private name: string;
    private state: boolean;

    constructor(name: string) {
        this.name = name;
        this.state = false;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public on(): void {
        this.state = true;
    }

    public off(): void {
        this.state = false;
    }
    
    public getState(): boolean {
        return this.state;
    }
}