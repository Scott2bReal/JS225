// In JavaScript, comparing two objects either with == or === checks for object
// identity. In other words, the comparison evaluates as true if it's the same
// object on either side of == or ===. This is a limitation, in a sense,
// because sometimes we need to check if two objects have the same key/value
// pairs. JavaScript doesn't give us a way to do that.
//
// Write a function objectsEqual that accepts two object arguments and returns
// true or false depending on whether the objects have the same key/value
// pairs.

const objectsEqual = (a, b) => {
  const keysOfA = Object.keys(a)
  const keysOfB = Object.keys(b)
  if (keysOfA.length !== keysOfB.length) return false
  for (let i = 0; i < keysOfA.length; i++) {
    if (a[keysOfA[i]] !== b[keysOfB[i]]) return false
  }
  return true
}

console.log(objectsEqual({ a: 'foo' }, { a: 'foo' })) // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' })) // false
console.log(objectsEqual({}, {})) // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 })) // false
