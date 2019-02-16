// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) => {
  return drivers.push(name)
}

const destructivelyPrependDriver = (name) => {
  return drivers.unshift(name)
}

const destructivelyRemoveLastDriver = () => {
  return drivers.pop()
}

const destructivelyRemoveFirstDriver = () => {
  return drivers.shift();
}

const appendDriver = (name) => {
  return [...drivers, name];
}

const prependDriver = (name) => {
  return [name, ...drivers]
}

const removeLastDriver = () => {
  return drivers.slice(0,2)
}

const removeFirstDriver = () => {
  return drivers.slice(1);
}
