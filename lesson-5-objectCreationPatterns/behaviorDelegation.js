let cat = {
  meow() {
    console.log(`${this.name} says meow!`)
  },
  pounce() {
    console.log(`${this.name} pounces!`)
  }
}
let kiki = Object.create(cat)
kiki.name = 'Kiki'
kiki.meow() // Kiki says meow!
kiki.pounce() // Kiki pounces!

// Practice Problems

// 1.  What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);
//
// foo.a = 1;
//
// console.log(bar.a);

// This will log 1 to the console. JavaScript will look up the prototype chain
// until it finds a property "a"


// 2.  What will the code below log to the console?

let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);

//  This will log 2 to the console. JavaScript will first look at the current
//  object, and only move up the chain if it does not find the property on that
//  object.

// 3. Given the code below, do we know for certain that on the last line we are
// ultimately referencing a property owned by boo? How can we test that far is
// not delegating to boo?

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1
// Solution
far.hasOwnProperty('myProp')
