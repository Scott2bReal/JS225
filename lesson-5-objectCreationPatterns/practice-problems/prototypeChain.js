// 1. Use the method we learned above to assign foo below to a new Object
// with prot as its prototype.

// let prot = {};
// let foo = Object.create(prot)

// 2. Use getPrototypeOf to demonstrate the prototypal relationship
// between prot and foo.

Object.getPrototypeOf(foo) === prot // true

// 3. Use isPrototypeOf to demonstrate the prototypal relationship between
// prot and foo.

prot.isPrototypeOf(foo) // true

// 4. What will the last two lines of the code below return? Why?

let prot = {};
let foo = Object.create(prot);

prot.isPrototypeOf(foo); // true
Object.prototype.isPrototypeOf(foo); // true

// They will both return true, because foo is an object created by using
// Object.create() with prot passed in as an argument. Because prot is an
// object which was created without using Object.create(), it receives the
// Object prototype.
