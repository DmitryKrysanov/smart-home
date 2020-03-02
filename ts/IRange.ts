interface IRange {
    setMin(min: number): void;
    getMin(): number;
    setMax(max: number): void;
    getMax(): number;
    setCurrent(current: number): void;
    getCurrent(): number;
    setStep(step: number): void;
    getStep(): number;
    increase(): void;
    decrease(): void;
}