// 1. Follow the steps below:

// Create an object called shape that has a getType method.

// Define a Triangle constructor function whose prototype is shape.

// Objects created with Triangle should have four own properties: a, b, c
// (representing the sides of a triangle), and type.

// Add a new method to the prototype called getPerimeter.

// Test your implementation with the following code:

function Triangle(a, b, c) {
  this.a = a
  this.b = b
  this.c = c
  this.type = 'triangle'
}
const shape = {
  getType() {
    return this.type
  },
}
Triangle.prototype = shape
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c
}
// This is necessary since we lose the automatic constructor reference when we
// reassign Triangle's prototype
Triangle.prototype.constructor = Triangle

let t = new Triangle(3, 4, 5)
console.log(t.constructor) // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t)) // true
console.log(t.getPerimeter()) // 12
console.log(t.getType()) // "triangle"

// 2. Since a constructor is just a function, it can be called without the new
// operator, and this can lead to unexpected results and errors especially for
// inexperienced programmers.

// Write a constructor function that can be used with or without the new
// operator, and return the same result in either form. Use the code below to
// check your solution:

function User(first, last) {
  if (this instanceof User) {
    this.first = first
    this.last = last
    this.name = `${first} ${last}`.trim()
  } else {
    return new User(first, last)
  }
}

let name = 'Jane Doe'
let user1 = new User('John', 'Doe')
let user2 = User('John', 'Doe')

console.log(name) // => Jane Doe
console.log(user1.name) // => John Doe
console.log(user2.name) // => John Doe

// 3. Create a function that can create an object with a given object as its
// prototype, without using Object.create.

// function createObject(obj) {
//   // This method is not ideal, as directly modifying the [[Prototype]] property
//   // is a very slow operation
//   // const newObj = {}
//   // Object.setPrototypeOf(newObj, obj)
//   // return newObj
//   let F = function() {}
//   F.prototype = obj
//   return new F()
// }
//
// let foo = {
//   a: 1
// };
//
// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

// 4. Similar to the problem above, without using Object.create, create a
// begetObject method that you can call on any object to create an object
// inherited from it:

Object.prototype.begetObject = function () {
  let F = function () {}
  F.prototype = this
  return new F()
}

let foo = {
  a: 1,
}

let bar = foo.begetObject()
console.log(foo.isPrototypeOf(bar)) // true

// 5. Create a function neww, so that it works like the new operator. For this
// practice problem, you may use Object.create.

function neww(constructor, args) {
  const object = Object.create(constructor.prototype)
  let result = constructor.apply(object, args)
  return typeof result === 'object' ? result : object
}

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.greeting = function () {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName)
}

let john = neww(Person, ['John', 'Doe'])
john.greeting() // => Hello, John Doe
console.log(john.constructor) // Person(firstName, lastName) {...}
