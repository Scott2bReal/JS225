// 1. What does this point to in the code below?

// function whatIsMyContext() {
//   return this;
// }

// Since execution context isn't set until execution time, we don't know the
// execution context

// 2. What does this point to in the code below?

function whatIsMyContext() {
  return this;
}
whatIsMyContext();

// this will point to the global object, or undefied if using stict mode

// 3. What does this point to in the code below?

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}
foo();

// this will be pointing to the implicit global execution object because JS be
// like that

// 4. What does this point to in the code below?

// let obj = {
//   count: 2,
//   method() {
//     return this.count;
//   },
// };
// obj.method();

// This will be pointing to obj

// 5. In strict mode, what does the following program log to the console?

// function foo() {
//   console.log(this.a);
// }
// let a = 2;
// foo();

// This will raise an error, since let does not create a property
// on the global object

// 6. What does the following program log to the console?

// let a = 1;
// function bar() {
//   console.log(this.a);
// }
// let obj = {
//   a: 2,
//   foo: bar,
// };
// obj.foo();

// This will log 2 to the console, because there is an explicit calling object
// (obj) with a property a with a value of 2

// 7. What does the following code log to the console?

let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },
  baz() {
    return this;
  },
};
foo.bar();
let qux = foo.bar;
qux();

// This will log:
// foo
// Error - this is pointing to the global execution object, which does not have
// a method baz()
