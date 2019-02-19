// Write your solution here!

const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers;
}

function appendDriver(name){
  let copyofDrivers = drivers.slice();
  copyofDrivers.push(name);
  return copyofDrivers;
}

function prependDriver(name){
  let copyofDrivers = drivers.slice();
  copyofDrivers.unshift(name);
  return copyofDrivers
}

function removeLastDriver(){
  let copyofDrivers = drivers.slice();
  copyofDrivers.pop();
  return copyofDrivers
}

function removeFirstDriver(){
  let copyofDrivers = drivers.slice();
  copyofDrivers.shift();
  return copyofDrivers
}
