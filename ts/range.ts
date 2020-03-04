class RangeTemp implements IRange {
    private min: number;
    private max: number;
    private current: number;
    private step: number;

    public constructor(min: number, max: number, current: number, step: number) {
        this.min = min;
        this.max = max;
        this.current = current;
        this.step = step;
    }

    public setMin(min: number): void {
        this.min = min;
    }

    public getMin(): number {
        return this.min;
    }

    public setMax(max: number): void {
        this.max = max;
    }

    public getMax(): number {
        return this.max;
    }

    public setCurrent(current: number): void {
        this.current = current;
    }

    public getCurrent(): number {
        return this.current;
    }

    public setStep(step: number): void {
        this.step = step;
    }

    public getStep(): number {
        return this.step;
    }

    public increase(): void {
        if (this.current !== this.max) {
            if ((this.current + this.step) >= this.max) {
                this.current = this.max;
            } else {
                this.current += this.step;
            }
        }
    }

    public decrease(): void {
        if (this.current !== this.min) {
            if ((this.current - this.step) <= this.min) {
                this.current = this.min;
            } else {
                this.current -= this.step;
            }
        }
    }
}