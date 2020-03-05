var home = new Home('home');
home.addDevice(new Oven('bosch', new RangeTemp(10, 240, 20, 10), new Mode(['mode1', 'mode2'])));
home.addDevice(new WashingMachine('WM', new RangeTemp(20, 100, 10, 20), 1000, new Mode(['mode3', 'mode4'])));
home.deviceOn('bosch', 2000)
    .then(function () { return console.log('on'); })
    .then(function () { return home.deviceOff('bosch', 2000); })
    .then(function () { return console.log('off'); })
    .then(function () { return home.deviceOn('bosch', 2000); })
    .then(function () { return console.log('on'); });
