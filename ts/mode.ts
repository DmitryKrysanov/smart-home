class Mode implements IMode {
    private modes: string[];
    private current: number; 

    public constructor(modes: string[]) {
        this.modes = modes;
        this.current = 0;
    }

    public setModes(modes: string[]): void {
        this.modes = modes;
    }

    public getModes(): string[] {
        return this.modes;
    }

    public getCurrentMode(): string {
        return this.modes[this.current];
    }

    public next(): void {
        if (this.current === this.modes.length - 1) {
            this.current = 0;
        } else {
            this.current++;
        }
    }
    
    public prev(): void {
        if (this.current === 0) {
            this.current = this.modes.length - 1;
        } else {
            this.current--;
        }
    }
}
