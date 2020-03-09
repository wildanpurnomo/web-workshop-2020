const events = require('events');
const emitter = new events.EventEmitter();

// create a callback function : a function that triggers
// when certain event happpens
const screamCallback = () => {
    console.log('Ice cream');
}

// add 'scream' event to our emitter
emitter.on('scream', screamCallback);

// emit the 'scream' event
emitter.emit('scream');

///////////////////////////////////////

// callback with arguments
const confessCallback = (boyName, girlName) => {
    console.log(`${boyName} has confessed to ${girlName}.`);
}

emitter.on('confess', confessCallback);

var bName = "Wildan";
var gName = "Cewek";
emitter.emit('confess', bName, gName);


////////////////////////////////////////
// example : error handling

const errorCallback = (errMsg) => {
    console.log(`Error: ${errMsg}`);
}

emitter.on('err', errorCallback);

const divider = (a, b) => {
    return a / b;
}

var nominator = 4
var denominator = 0

if (denominator === 0) emitter.emit('err', "Division by zero");
else console.log(divider(nominator, denominator));

