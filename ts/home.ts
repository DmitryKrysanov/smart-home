class Home {
    private name: string;
    private devices: object[];

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

    selectDeviceByName(name: string): object {
        return this.devices.find( (device: object) => device['name'] === name )
    }

    deviceOn(name: string, delay: number, callback: () => void): void {
        const device: any = this.selectDeviceByName(name);  //any should be deleted
        console.log(typeof(device))
        setTimeout(() => {
            device.on();
            //callback(device)
        }, delay)
    }

    deviceOff(name: string, delay: number, callback) {
        const device: any = this.selectDeviceByName(name);  //any should be deleted
        setTimeout(() => {
            device.off();
            // callback(device)
        }, delay)
    }

    removeDevice(name: string): void {
        const index: number = this.devices.indexOf(this.selectDeviceByName(name));
        this.devices.splice(index, 1);
    }

    removeAllDevices(): void {
        this.devices = [];
    }
}