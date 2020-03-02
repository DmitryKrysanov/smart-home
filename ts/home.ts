class Home {
    private name: string;
    private devices: Array<IDevice>;

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

    addDevice(device: IDevice): void {
        this.devices.push(device);
    }

    getDevices(): Array<IDevice> {
        return this.devices;
    }

    selectDeviceByName(name: string): IDevice {
        return this.devices.find( device => device.getName() === name )
    }

    deviceOn(name: string, delay: number, callback: () => void): void {
        setTimeout(() => {
            this.selectDeviceByName(name).on();
            callback()
        }, delay)
    }

    deviceOff(name: string, delay: number, callback: () => void): void {
        setTimeout(() => {
            this.selectDeviceByName(name).off();
            callback()
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