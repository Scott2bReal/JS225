// 1. Will the code below execute?

// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// this will throw an error because we cannot make an IIFE with a function
// declaration

// 2. Edit the code from problem one so it executes without error.

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

// 3. The code below throws an error:

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// What kind of problem does this error highlight? Use an IIFE to address it,
// so that code runs without error.

// This is an example of a function name overwriting an existing variable. Due
// to hoisting, sum is pointing to a function when the program reaches the line
// with the invocation. We can solve this by using an IIFE to increment the
// value of sum (shown below)

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers)

// 4. Consider the output below:

// Implementation
// function countdown(times) {
//   while (times > 0) {
//     times = (() => {
//       console.log(times)
//       return times - 1
//     })();
//   }
//   console.log(`Done!`)
// }

// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!

// Implement a function countdown that uses an IIFE to generate the desired
// output.

// 5. Is the named function in this IIFE accessible in the global scope?

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

// No, it isn't

// 6. For an extra challenge, refactor the solution to problem 4 using
// recursion, bearing in mind that a named function created in an IIFE can be
// referenced inside of the IIFE.

function countdown(times) {
  (function count(current) {
    if (current === 0) {
      console.log(`Done!`)
      return current
    } else {
      console.log(current)
      count(current - 1)
    }
  })(times)
}

countdown(7)
