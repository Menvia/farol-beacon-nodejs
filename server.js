var bleno = require('bleno');

bleno.on('stateChange', function(state) {

	console.log('on -> stateChange: ' + state);

	if (state === 'poweredOn') {
		var uuid = '64657665-6c6f-7064-6279-6d656e766961';
		var major = 42; // 0x0000 - 0xffff
		var minor = 42; // 0x0000 - 0xffff
		var measuredPower = -59; // -128 - 127
		bleno.startAdvertisingIBeacon(uuid, major, minor, measuredPower); 
  	} else {
    	bleno.stopAdvertising();
  	}
});