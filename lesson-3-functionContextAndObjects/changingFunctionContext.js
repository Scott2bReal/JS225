// To illustrate how a function's context changes at run time, let's use a
// function named average that calculates the average of the values in an Array
// passed as an argument. We'll use it to calculate an average temperature.

const temperatures = [53, 86, 12, 43]

// function average(values) {
//   let total = 0;
//   let i;
//   for (i = values.length - 1; i >=0; i -= 1) {
//     total += values[i]
//   }
//
//   return total / values.length
// }

// console.log(average(temperatures))

// Let's change the function to work with the context variable, this, instead.
// Remove the values argument from your definition and replace all remaining
// instances of values in the function with the keyword this. Call the function
// again with the temperatures array and check the return value.

function average() {
  let total = 0;
  let i;
  for (i = this.length - 1; i >=0; i -= 1) {
    total += this[i]
  }

  return total / this.length
}

console.log(average.call(temperatures))

const averageTemperatures = average.bind(temperatures)
console.log(averageTemperatures())
temperatures.average = average
console.log(temperatures.average())
