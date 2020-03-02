const expect = require('chai').expect;
const ovenClass = require('../ts/oven.ts');
describe('Oven', function () {
    it('should pass', function () {
        expect(ovenClass).to.be.a('object');
    });
});
//const oven = new Oven('bosch', {min: 10, max: 20, current: 1, step: 2}, {modes: ['mode1', 'mode2'], current: 0});
//console.log(oven)
//console.log(oven.getName() === 'bosch');
///console.log(oven.getTemperature() === 'bosch');
