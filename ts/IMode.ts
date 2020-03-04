interface IMode {
    setModes(modes: Array<string>): void;
    getModes(): Array<string>;
    getCurrentMode(): string;
    next(): void;
    prev(): void;
}