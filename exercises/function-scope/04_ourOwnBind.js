// Function.prototype.bind is a method on all function objects that allows us to
// hard-bind a function to a particular object. The way this works is that you
// pass a context object to the bind method and it returns a new function that is
// essentially the same function but hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function to bind,
// 2) The context object, and returns a new function that's hard-bound to the
// passed in context object.

function myBind(func, ctx) {
  return function() {
    return func.apply(ctx)
  }
}

// This solution uses the Function.prototype.apply method to bind the execution
// context of the function supplied as the first argument to myBind to the ctx
// object passed as the second argument to myBind. We return an anonymous
// function from myBind which itself returns the result of calling the apply
// method included by default on the function passed to myBind
