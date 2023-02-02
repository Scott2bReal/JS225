// 1. What does the following code log to the console?

// let a = 1;
// let foo;
// let obj;
//
// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }
//
// foo = new Foo();
// // Logs 2
//
// foo.bar();
// // Logs 2
// Foo();
// // Logs 2
//
// obj = {};
// Foo.call(obj);
// // Logs 2
// obj.bar();
// // Logs 2
//
// console.log(this.a);
// // Logs 2

// 2. What does the following code log to the console?

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };
//
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   // this.area = RECTANGLE.area();
//   // this.perimeter = RECTANGLE.perimeter();
//   // Change the above two lines to this
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }
//
// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// This will log NaN twice to the console, because height and width are
// undefined on RECTANGLE

// 2a. How do you fix this problem?

// We can fix this problem by calling the RECTANGLE methods with this as their
// context

// 3. Write a constructor function Circle, that takes a radius as an argument.
// You should be able to call an area method on the created objects to get the
// circle's area. Test your implementation with the following code:

// function Circle(radius) {
//   this.radius = radius
// }
// Circle.prototype.area = function() {
//   return (this.radius ** 2) * Math.PI
// }
//
// let a = new Circle(3);
// let b = new Circle(4);
//
// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// 4. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }
//
// ninja = new Ninja();
//
// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };
//
// console.log(ninja.swingSword());

// This will log true, because when we assign ninja the return value of calling
// Ninja() as a constructor, it sets the property swung on ninja to true. Then,
// the swingSword() method returns that value, which is logged to the console.

// 5. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }
//
// ninja = new Ninja();
//
// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };
//
// console.log(ninja.swingSword());

// This will raise an error because swingSword() we changed the object that
// Ninja.prototype is pointing to. ninja still inherits from the old
// Ninja.prototype object.

// 6. Implement the method described in the comments below:

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }
//
// ninjaA = new Ninja();
// ninjaB = new Ninja();
//
// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung
//
// Ninja.prototype.swing = function() {
//   this.swung = true
//   return this
// }
//
// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// 7. In this problem, we'll ask you to create a new instance of an object,
// without having direct access to the constructor function:

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

let ninjaB = new ninjaA.constructor()

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
