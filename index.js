// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => {
  drivers.push(name);
};

const destructivelyPrependDriver = (name) => {
  drivers.unshift(name);
}

const destructivelyRemoveLastDriver = () => {
  drivers.pop(name);
}

const destructivelyRemoveFirstDriver = () => {
  drivers.shift(name);
}

const appendDriver = (name) => {
  return newDrivers = [...drivers, name];
}

const prependDriver = (name) => {
  return prependDrivers = [name, ...drivers];
}

const removeLastDriver = () => {
  return removeLastDrivers = drivers.slice(0, drivers.length - 1)
}

const removeFirstDriver = () => {
  return removeFirstDrivers = drivers.slice(1)
}
