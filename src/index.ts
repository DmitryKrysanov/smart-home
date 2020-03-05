import Home from './ts/home';
import Oven from './ts/oven';
import WashingMachine from './ts/washingMachine';
import RangeTemp from './ts/range';
import Mode from './ts/mode';

let home = new Home('home')

home.addDevice(new Oven('bosch', new RangeTemp(10, 240, 20, 10), new Mode(['mode1', 'mode2'])));
home.addDevice(new WashingMachine('WM', new RangeTemp(20, 100, 10, 20), 1000, new Mode(['mode3', 'mode4'])))

home.deviceOn('bosch', 2000)
    .then(() => console.log('on'))
    .then(() => home.deviceOff('bosch', 2000))
    .then(() => console.log('off'))
    .then(() => home.deviceOn('bosch', 2000))
    .then(() => console.log('on'))