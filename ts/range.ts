class RangeTemp implements IRange {
    private min: number;
    private max: number;
    private current: number;
    private step: number;

    constructor(min: number, max: number, current: number, step: number) {
        this.min = min;
        this.max = max;
        this.current = current;
        this.step = step;
    }

    setMin(min: number): void {
        this.min = min;
    }

    getMin(): number {
        return this.min;
    }

    setMax(max: number): void {
        this.max = max;
    }

    getMax(): number {
        return this.max;
    }

    setCurrent(current: number): void {
        this.current = current;
    }

    getCurrent(): number {
        return this.current;
    }

    setStep(step: number): void {
        this.step = step;
    }

    getStep(): number {
        return this.step;
    }

    increase(): void {
        if (this.current !== this.max) {
            if ((this.current + this.step) >= this.max) {
                this.current = this.max;
            } else {
                this.current += this.step;
            }
        }
    }

    decrease(): void {
        if (this.current !== this.min) {
            if ((this.current - this.step) <= this.min) {
                this.current = this.min;
            } else {
                this.current -= this.step;
            }
        }
    }
}