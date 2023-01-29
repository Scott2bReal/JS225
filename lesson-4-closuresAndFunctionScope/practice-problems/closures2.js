// 1. Write a function named makeMultipleLister that, when invoked and passed a
// number, returns a function that logs every positive integer multiple of that
// number less than 100. Usage looks like this:

function makeMultipleLister(num) {
  return () => {
    let multiplier = 1
    while (true) {
      if (num * multiplier < 100) {
        console.log(num * multiplier)
        multiplier += 1
      } else {
        return
      }
    }
  }
}

let lister = makeMultipleLister(13)
lister()
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// 2. Write a program that uses two functions, add and subtract, to manipulate
// a running total value. When you invoke either function with a number, it
// should add or subtract that number from the running total and log the new
// total to the console. Usage looks like this:

let total = 0

const add = (num) => (total += num)
const subtract = (num) => (total -= num)

console.log(add(1))
// 1
console.log(add(42))
// 43
console.log(subtract(39))
// 4
console.log(add(6))
// 10

// 3. Given the following code:

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// let systemStatus = // ?

// How can you set the value of systemStatus to the value of the inner variable
// status without changing startup in any way?

// The inner variable cannot be accessed outside of the function
