class RangeTemp {
    constructor(min, max, current, step) {
        this.min = min;
        this.max = max;
        this.current = current;
        this.step = step;
    }
    setMin(min) {
        this.min = min;
    }
    getMin() {
        return this.min;
    }
    setMax(max) {
        this.max = max;
    }
    getMax() {
        return this.max;
    }
    setCurrent(current) {
        this.current = current;
    }
    getCurrent() {
        return this.current;
    }
    setStep(step) {
        this.step = step;
    }
    getStep() {
        return this.step;
    }
    increase() {
        if (this.current !== this.max) {
            if ((this.current + this.step) >= this.max) {
                this.current = this.max;
            }
            else {
                this.current += this.step;
            }
        }
    }
    decrease() {
        if (this.current !== this.min) {
            if ((this.current - this.step) <= this.min) {
                this.current = this.min;
            }
            else {
                this.current -= this.step;
            }
        }
    }
}
// let range = new RangeTemp(1, 2, 3, 4);
// console.log(range);
