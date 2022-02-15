// don't use for loops because...
// overly verbose
// error prone (index out of bounds in Java)
// is not functional

const carBatteries = [0.32423, 0.65765, 0.3242, 0.13543];

// task add a charge to each battery
const chargedCarBatteries = carBatteries.map(battery => battery + 0.4);

console.log(chargedCarBatteries);

// place each car and its battery in a separate indexed charger
// no need to return a new array so forEach is allowed
// task how do I get index
carBatteries.forEach((battery, index) => console.log(`You go in stand ${index + 1}.`));

// filter out the batteries that have more than 50% charge
const drainedBatteries = carBatteries.filter(battery => battery < 0.5);

console.log(drainedBatteries);