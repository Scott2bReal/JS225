// 1. What method can we use to permanently bind a function to a particular
// execution context?

// We can use bind() to do that

// 2. What will the code below log to console?

// let obj = {
//   message: 'JavaScript',
// };
//
// function foo() {
//   console.log(this.message);
// }
//
// foo.bind(obj);

// This will not log anything, as bind() does not invoke the function. It
// merely creates a new function with an explicitly set context

// 3. What will the code below output?

// let obj = {
//   a: 2,
//   b: 3,
// };
//
// function foo() {
//   return this.a + this.b;
// }
//
// let bar = foo.bind(obj);
//
// console.log(bar());

// This will output 5

// 4. What will the code below log to the console?

// let positiveMentality = {
//   message: 'JavaScript makes sense!',
// };
//
// let negativeMentality = {
//   message: 'JavaScript makes no sense!',
// };
//
// function foo() {
//   console.log(this.message);
// }
//
// let bar = foo.bind(positiveMentality);
//
// negativeMentality.logMessage = bar;
// negativeMentality.logMessage();

// This will output 'JavaScript makes sense!', because the function bar has
// been bound to the positiveMentality object. Even though it is set as a
// property of negativeMentality, it retains its explicitly set execution
// context of positiveMentality

// 5. What will the code below output?

let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

// This will still output Amazebulous, because the context of bar() has been
// explicitly set.
