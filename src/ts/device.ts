import IDevice from './IDevice';

export default abstract class Device implements IDevice {
    private name: string;
    private state: boolean;

    public constructor(name: string) {
        this.name = name;
        this.state = false;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getState(): boolean {
        return this.state;
    }

    public on(): void {
        this.state = true;
    }

    public off(): void {
        this.state = false;
    }
}