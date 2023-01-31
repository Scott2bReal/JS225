// 1. Write a function that returns the object on a given object's prototype
// chain where a property is defined. See the example code below:

function getDefiningObject(object, propKey) {
  return (checkPrototype = (object) => {
    return !object || object.hasOwnProperty(propKey)
      ? object
      : checkPrototype(Object.getPrototypeOf(object))
  })(object)
}

// let foo = {
//   a: 1,
//   b: 2,
// }
//
// let bar = Object.create(foo)
// let baz = Object.create(bar)
// let qux = Object.create(baz)
//
// bar.c = 3
//
// console.log(getDefiningObject(qux, 'c') === bar) // => true
// console.log(getDefiningObject(qux, 'e')) // => null

// 2. Write a function to provide a shallow copy of an object. The object that
// you copy should share the same prototype chain as the original object, and
// it should have the same own properties that return the same values or
// objects when accessed. Use the code below to verify your implementation:

function shallowCopy(object) {
  return Object.getOwnPropertyNames(object).reduce((copy, propKey) => {
    copy[propKey] = object[propKey]
    return copy
  }, Object.create(object))
}

// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };
//
// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// baz.hasOwnProperty('a');  // false
// baz.hasOwnProperty('b');  // false

// 3. Write a function that extends an object (destination object) with
// contents from multiple objects (source objects).

function extend(destination) {
  if (!destination) return
  const args = Array.from(arguments).slice(1)
  args.forEach(arg => {
    const keyProps = Object.getOwnPropertyNames(arg)
    keyProps.forEach(keyProp => {
      destination[keyProp] = arg[keyProp]
    })
  })
  return destination
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
