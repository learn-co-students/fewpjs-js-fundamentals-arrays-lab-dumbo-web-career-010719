// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
  drivers.push(name)
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
};

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
};

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
};

function appendDriver(name) {
  let newDrivers = [...drivers, name]
  return newDrivers
};

function prependDriver(name) {
  let newDrivers = [name,...drivers]
  return newDrivers
};

function removeLastDriver() {
  let newArray = drivers.slice(0,-1)
  return newArray
};

function removeFirstDriver(){
  let newArray = drivers.slice(1)
  return newArray
};
