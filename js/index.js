'use strict'

var home = new Home()
home.setName('my home');
home.addDevice(new Oven('bosh', new Range(10, 240, 20, 10), new Mode(['mode1', 'mode2'])))
home.addDevice(new WashingMachine('WM', new Range(20, 100, 10, 20), new Mode(['mode3', 'mode4'])))


var oven = new Oven('oven', new Range(10, 100, 20, 10), new Mode(['mode1', 'mode2']))