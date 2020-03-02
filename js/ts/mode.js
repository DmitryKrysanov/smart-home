class Mode {
    constructor(modes) {
        this.modes = modes;
        this.current = 0;
    }
    setModes(modes) {
        this.modes = modes;
    }
    getModes() {
        return this.modes;
    }
    getCurrentMode() {
        return this.modes[this.current];
    }
    next() {
        if (this.current === this.modes.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
    }
    prev() {
        if (this.current === 0) {
            this.current = this.modes.length - 1;
        }
        else {
            this.current--;
        }
    }
}
