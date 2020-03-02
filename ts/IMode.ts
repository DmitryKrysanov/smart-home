interface IMode {
    setModes(modes: string[]): void;
    getModes(): string[];
    getCurrentMode(): string;
    next(): void;
    prev(): void;
}