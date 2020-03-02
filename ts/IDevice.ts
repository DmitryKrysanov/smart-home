interface IDevice {
    setName(name: string): void;
    getName(): string;
    on(): void;
    off(): void;
    getState(): boolean;
}