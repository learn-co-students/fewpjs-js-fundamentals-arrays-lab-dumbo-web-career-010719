// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
let copy = drivers;

function destructivelyAppendDriver(name){
  return copy.push(name);
}

function destructivelyPrependDriver(name){
  return copy.unshift(name);
}

function destructivelyRemoveLastDriver(){
  return copy.pop();
}

function destructivelyRemoveFirstDriver(){
  return copy.shift();
}

function appendDriver(name){
  return [...drivers, name];
}

function prependDriver(name){
  return [name,...drivers];
}

function removeLastDriver(){
  return drivers.slice(0,-1);
}

function removeFirstDriver(){
  return drivers.slice(1)
}