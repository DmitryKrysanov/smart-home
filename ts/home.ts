class Home {
    name: string;
    devices: object[];

    constructor(name: string) {
        this.name = name;
        this.devices = [];
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    addDevice(device: object): void {
        this.devices.push(device);
    }

    getDevices(): object[] {
        return this.devices;
    }

    getDeviceByName(name: string): object {
        return this.devices.find( (device: object) => device['name'] === name )
    }

    deviceOn(name: string, delay: number, callback): void {
        const device: object = this.getDeviceByName(name);
        setTimeout(() => {
            device.on();
            //callback(device)
        }, delay)
    }

    deviceOff(name: string, delay: number, callback) {
        //const device: object = this.getDeviceByName(name);
        //setTimeout(() => {
            //device.off();
            // callback(device)
        //}, delay)
    }

    removeDevice(name: string) {
        //const index: number = this.devices.indexOf(this.getDeviceByName(name));
        //this.devices.splice(index, 1);
    }

    removeAllDevices(): void {
        this.devices = [];
    }
}