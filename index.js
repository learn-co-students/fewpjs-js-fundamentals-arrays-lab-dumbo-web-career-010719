// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let copyDriver = drivers.slice();
  copyDriver.push(name);
  return copyDriver;
}

function prependDriver(name) {
  let copyDriver = drivers.slice();
  copyDriver.unshift(name);
  return copyDriver;
}

function removeLastDriver() {
  let copyDriver = drivers.slice();
  copyDriver.pop();
  return copyDriver;
}
function removeFirstDriver() {
  let copyDriver = drivers.slice();
  copyDriver.shift();
  return copyDriver;
}
