// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers;
}
function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers;
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}
function appendDriver(name) {
  let copy = drivers.slice();
  copy.push(name);
  return copy;
}
function prependDriver(name) {
  let copy = drivers.slice();
  copy.unshift(name);
  return copy;
}
function removeLastDriver() {
  let copy = drivers.slice();
  copy.pop();
  return copy;
}
function removeFirstDriver() {
  let copy = drivers.slice();
  copy.shift();
  return copy;
}
