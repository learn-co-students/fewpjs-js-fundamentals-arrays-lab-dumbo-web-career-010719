const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
   return drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
   return drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(driver){
  return drivers.pop(driver)
}

function destructivelyRemoveFirstDriver(driver){
  return drivers.shift(driver)
}

function appendDriver(driver){
  const moreDrivers = drivers.concat(driver)
  return moreDrivers
}

function prependDriver(driver){
  const moreDrivers = [driver, ...drivers];
  return moreDrivers
}

function removeLastDriver(driver){
  return drivers.slice(0, -1)
}

function removeFirstDriver(driver){
  return drivers.slice(1)
}
