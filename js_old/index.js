'use strict'

let home = new Home('home')
home.addDevice(new Oven('bosch', new Range(10, 240, 20, 10), new Mode(['mode1', 'mode2'])))
home.addDevice(new WashingMachine('WM', new Range(20, 100, 10, 20), new Mode(['mode3', 'mode4'])))



home.deviceOn('bosch', 2000, () => {
    home.deviceOff('bosch', 2000, () => {
        home.deviceOn('bosch', 2000, () => { 
            home.deviceOff('bosch', 2000, () => { console.log('off')});
        })
    })
 })