class Home {
    private name: string;
    private devices: Array<IDevice>;

    public constructor(name: string) {
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
        return this.devices.find(device => device.getName() === name)
    }

    public deviceOn(name: string, delay: number): Promise<void> {
        return new Promise(resolve => setTimeout(() => {
            this.selectDeviceByName(name).on()
            resolve()
        }, delay))
    }

    public deviceOff(name: string, delay: number): Promise<void> {
        return new Promise(resolve => setTimeout(() => {
            this.selectDeviceByName(name).off()
            resolve()
        }, delay))
    }

    public removeDevice(name: string): void {
        const index: number = this.devices.indexOf(this.selectDeviceByName(name));
        this.devices.splice(index, 1);
    }

    public removeAllDevices(): void {
        this.devices = [];
    }
}