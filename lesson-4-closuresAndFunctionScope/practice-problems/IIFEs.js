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

function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?

// What kind of problem does this error highlight? Use an IIFE to address it,
// so that code runs without error.
