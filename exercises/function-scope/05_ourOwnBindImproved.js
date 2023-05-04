// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides hard-binding
// functions to context objects. It's called partial function application. Read
// this assignment and the MDN documentation to learn more about partial
// function application.

// Alter the myBind function written in the previous exercise to support
// partial function application of additional arguments to the original
// function.

function myBind(func, ctx, ...partialArgs) {
  return function(args) {
    const fullArgs = partialArgs.concat(args)
    return func.call(ctx, ...fullArgs)
  }
}

const addNumbers = (a, b) => {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5)
console.log(addFive(10))

// This time we used the Function.prototype.call method and spread the fullArgs
// array into it in order to pass all arguments. The fullArgs array was created
// using Array.prototype.concat, which combines two or more arrays
