// 1. Is JavaScript a garbage-collected language, and if so, what does this
// entail?

// Yes, it is a garbage-collected language. This means that it will
// automatically deal with allocating and deallocating memory without the
// programmer needing to explicitly do those things.

// 2. Consider the code below:

let myNum = 1;
function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
  // nothing
}
foo();
// what is eligible for GC here?
// ['this is an array'] is available here

// 3. Consider the code below:

function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here? No, because reference to the object is
// still contained within the closure from which greeting was created.

// 4. Consider the script below:

let bash = {};

// Will the object {} ever be eligible for garbage collection?

// It won't be available for garbage collection until the program ends, or we
// assign bash to null
