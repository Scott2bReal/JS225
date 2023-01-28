// 1. What will the code below output?

// function foo() {
//   return this;
// }
//
// let context = foo();
// console.log(context);

// This will output [object Window]

// 2. What will the code in the previous question output in strict mode?

// The code will output undefined - in strict mode the implicit global context
// is undefined

// 3. What will the code below output? Explain the difference, if any, between
// this output and that of problem 1.

let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context);

// This will output obj, as it is the implicit execution context of foo() when
// it is run

// 4. What will the code below output?

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage();

// This will first output 'Hello from the global scope', as variables defined
// with var are added to the global execution context

// Then, it will output 'Hello from the function scope', as deliverMessage is
// being invoked as a method on bar

// 5. What will the code below output? What would happen if we replaced var on
// line 1 with let? Can you explain why the output changes?

var a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add());   // 20
console.log(c.add()); // 0

// If we were to replace var with let, then the first invocation of add() as a
// function would return NaN since variables declared with let or const are not
// added to any object

// 6. The problems above all feature implicit function execution context. What
// methods have we learned so far that let us explicitly specify what a
// function's execution context should be?

// We have learned about call() and apply(), which are methods of Function.

// 7. In the code below, use call to invoke bar.add as a method but with foo as
// the execution context. What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};

bar.add.call(foo) // 3

// 8. Given the code and desired output shown below, should you use call or
// apply to supply explicit context and the arguments to outputList? That is,
// which method makes the most sense to use? Implement a solution using your
// preferred method such that the desired output is logged, and explain your
// choice.

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// Desired Output:
// A Collection of Fruit:
// Apple
// Banana
// Grapefruit
// Pineapple
// Orange

// invoke outputList here
outputList.apply(fruitsObj, fruitsObj.list)
outputList.call(fruitsObj, ...fruitsObj.list)

// 9. For an extra challenge, consider this line of code from the previous
// problem:

let args = [].slice.call(arguments);

// Inside of JavaScript functions, arguments is an object that holds all of the
// arguments passed to the function. Bearing in mind that the function author
// wants to iterate over the arguments later in the method using an Array
// method, why do you think he or she is invoking call?

// The developer is invoking call because the arguments object is NOT an array,
// and does not contain all of the methods of an array. This line is creating
// an array from the arguments object.

// A more modern implementation of outputList would be like this:
function modernOutputList(...args) {
  console.log(this.title + ":")
  args.forEach(elem => console.log(elem))
}
