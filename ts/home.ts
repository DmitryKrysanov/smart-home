class Home {
    private name: string;
    private devices: Array<IDevice>;

    constructor(name: string) {
        this.name = name;
        this.devices = [];
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public addDevice(device: IDevice): void {
        this.devices.push(device);
    }

    public getDevices(): Array<IDevice> {
        return this.devices;
    }

    public selectDeviceByName(name: string): IDevice {
        return this.devices.find( device => device.getName() === name )
    }

    public deviceOn(name: string, delay: number, callback: () => void): void {
        setTimeout(() => {
            this.selectDeviceByName(name).on();
            callback()
        }, delay)
    }

    public deviceOff(name: string, delay: number, callback: () => void): void {
        setTimeout(() => {
            this.selectDeviceByName(name).off();
            callback()
        }, delay)
    }

    public removeDevice(name: string): void {
        const index: number = this.devices.indexOf(this.selectDeviceByName(name));
        this.devices.splice(index, 1);
    }

    public removeAllDevices(): void {
        this.devices = [];
    }
}