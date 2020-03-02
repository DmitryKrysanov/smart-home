// 'use strict'

let home = new Home('home')

//home.addDevice(new Oven('bosch', {min: 10, max: 240, current: 20, step: 10}, {modes: ['mode1', 'mode2'], current: 0}));
//home.addDevice(new WashingMachine('WM', {min: 20, max: 100, current: 10, step: 20}, {modes: ['mode3', 'mode4'], current: 0}))

// home.deviceOn('bosch', 2000, () => {
//     home.deviceOff('bosch', 2000, () => {
//         home.deviceOn('bosch', 2000, () => { 
//             home.deviceOff('bosch', 2000, () => { console.log('off')});
//         })
//     })
//  })


let oven = new Oven('sdf', new RangeTemp(10, 20, 10, 2), new Mode(['mode1', 'mode2']))

console.log(oven)
//home.addDevice(new Oven('bosch', new RangeTemp(10, 20, 10, 2), new Mode(['mode1', 'mode2'])))