class Mode {
    modes: string[];
    current: number; 

    constructor(modes: string[]) {
        this.modes = modes;
        this.current = 0;
    }

    setModes(modes: string[]): void {
        this.modes = modes;
    }

    getModes(): string[] {
        return this.modes;
    }

    getCurrentMode(): string {
        return this.modes[this.current];
    }

    next(): void {
        if (this.current === this.modes.length - 1) {
            this.current = 0;
        } else {
            this.current++;
        }
    }
    
    prev(): void {
        if (this.current === 0) {
            this.current = this.modes.length - 1;
        } else {
            this.current--;
        }
    }
}


