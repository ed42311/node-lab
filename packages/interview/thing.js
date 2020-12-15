const thing = 'hello'

const isObject = () => {
  const notString = (item) => typeof thing !== 'string'
  return false
}

// this wont let a string through
console.log(typeof thing === 'object')

const other = {
  thing: 'that',
}

console.log(Object.values(thing))

console.log(Object.values(thing))
