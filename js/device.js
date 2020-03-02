class Device {
    constructor(name) {
        this.name = name;
        this.state = false;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
    getState() {
        return this.state;
    }
}
