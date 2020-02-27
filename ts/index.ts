// 'use strict'

// let home = new Home('home')
// home.addDevice(new Oven('bosch', new Range(10, 240, 20, 10), new Mode(['mode1', 'mode2'])))
// home.addDevice(new WashingMachine('WM', new Range(20, 100, 10, 20), new Mode(['mode3', 'mode4'])))



// home.deviceOn('bosch', 2000, () => {
//     home.deviceOff('bosch', 2000, () => {
//         home.deviceOn('bosch', 2000, () => { 
//             home.deviceOff('bosch', 2000, () => { console.log('off')});
//         })
//     })
//  })


let home = new Home('myHome')

let oven = new Oven('bosch', new RangeTemp(10, 240, 20, 10), new Mode(['mode1', 'mode2']))
home.addDevice(oven)
let oven2 = new Oven('bosch', new RangeTemp(10, 240, 20, 10), new Mode(['mode1', 'mode2']))
home.addDevice(oven2)
console.log(home)