// 1. With strict mode not enabled, what object serves as the implicit
// execution context? What happens when strict mode is enabled?

/*
Without strict mode enabled, there is a global object which serves as the
implicit execution context (window in the browser). With strict mode enabled,
the implicit execution context is undefined
*/

// 2. What does the code below log?

a = 10;
console.log(window.a === a);

// This logs true

// 3. What does the code below log?

"use strict"

a = 10;

console.log(window.a === a);

// This code throws an error before it logs anything

// 4. What does the code below do?

function func() {
  let b = 1;
}

func();

console.log(b);

// This function creates a locally scoped variable b. The code will raise an
// error however, since b is referenced outside the function scope in which it
// is declared.

// 5. What does the code below do?

function func() {
  b = 1;
}

func();

console.log(b);

// This code declares a variable as a property of the window object, and logs 1

// 6. What does the code below log?

"use strict"

function func() {
  b = 1;
}

func();

console.log(b);

// This code does not log anything, and instead raises an error
