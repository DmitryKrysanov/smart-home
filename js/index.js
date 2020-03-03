// 'use strict'
var home = new Home('home');
home.addDevice(new Oven('bosch', new RangeTemp(10, 240, 20, 10), new Mode(['mode1', 'mode2'])));
//home.addDevice(new WashingMachine('WM', {min: 20, max: 100, current: 10, step: 20}, {modes: ['mode3', 'mode4'], current: 0}))
home.deviceOn('bosch', 2000, function () {
    home.deviceOff('bosch', 2000, function () {
        home.deviceOn('bosch', 2000, function () {
            home.deviceOff('bosch', 2000, function () { console.log('off'); });
        });
    });
});
var oven = new Oven('bosch', new RangeTemp(10, 240, 20, 10), new Mode(['mode1', 'mode2']));
//console.log(oven)
// let assert = chai.assert;
// assert.equal(oven.name, "bosch");
// assert.equal(oven.state, false);
// oven.on();
// assert.equal(oven.state, true);
// oven.off();
// assert.equal(oven.state, false);
//  assert.typeOf(oven.temperature.current, 'number');
//  assert.equal(oven.temperature.current, 20);
// oven.temperature.decrease();
// assert.equal(oven.temperature.current, 10);
// oven.temperature.decrease();
// assert.equal(oven.temperature.current, 10);
// oven.temperature.increase();
// oven.temperature.increase();
// assert.equal(oven.temperature.current, 30);
// oven.temperature.current = 235;
// oven.temperature.increase();
// assert.equal(oven.temperature.current, 240);
// assert.typeOf(oven.modes, 'object');
// assert.equal(oven.modes.currentMode, 'mode1');
// assert.typeOf(oven.modes.currentMode, 'string');
// oven.modes.next();
// assert.equal(oven.modes.currentMode, 'mode2');
// oven.modes.prev();
// assert.equal(oven.modes.currentMode, 'mode1');
