// In this exercise we'll update the implementation of myFilter by adding the
// functionality of accepting an optional thisArg just like the original
// Array.prototype.filter.

// Here's our original implementation. We also show an example of how we want
// to call our modified function: the 3rd argument, filter, supplies the
// desired context (thisArg).

// Example implementation
// function myFilter(array, func) {
//   const result = [];
//
//   array.forEach(value => {
//     if (func(value)) {
//       result.push(value);
//     }
//   });
//
//   return result;
// }

// Solution implementation
function myFilter(array, func, thisArg) {
  const result = [];
  console.log(thisArg);

  if (thisArg) {
    array.forEach((value) => {
      if (func.call(thisArg, value)) {
        result.push(value);
      }
    });
  } else {
    array.forEach((value) => {
      if (func(value)) {
        result.push(value);
      }
    });
  }

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

myFilter(
  [2, 1, 3, 4, 5, 6, 12],
  function (val) {
    return this.allowedValues.includes(val);
  },
  filter
); // returns [5, 6]

// Modify the original implementation such that the expected result is
// returned. Don't use the thisArg argument of Array.prototype.forEach.
