// 1. Our desired output for the code below is: Christopher Turk is a Surgeon.
// What will the code output, and what explains the difference, if any, between
// the actual and desired outputs?

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     )
//   },
// }
//
// function logReturnVal(func) {
//   let returnVal = func()
//   console.log(returnVal)
// }
//
// logReturnVal(turk.getDescription)

// This code will output undefined undefined is a undefined When
// turk.getDescription() is passed as an argument to logReturnVal(), it loses
// its execution context. Because there are no properties firstName, lastName,
// or occupation on the global execution context, references to those
// properties will return undefined.

// 2. Alter logReturnVal such that it takes an additional context argument, and
// use one of the methods we've learned in this lesson to invoke func inside of
// logReturnVal with context as its function execution context. Alter the
// invocation of logReturnVal and supply turk as the context argument.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     )
//   },
// }
//
// function logReturnVal(func, context) {
//   // Use the call() method to pass along the context
//   let returnVal = func.call(context)
//   console.log(returnVal)
// }
//
// // Pass the turk object to logReturnVal() to define execution context
// logReturnVal(turk.getDescription, turk)

// 3. Suppose that we want to extract getDescription from turk, but always have
// it execute with turk as context. Use one of the methods we've learned in the
// last lesson to assign such a permanently bound function to a new variable,
// getTurkDescription.

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return (
      this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
    )
  },
}

// Create permanently bound version of getDescription()
const getTurkDescription = turk.getDescription.bind(turk)

function logReturnVal(func) {
  let returnVal = func()
  console.log(returnVal)
}

// Pass the turk object to logReturnVal() to define execution context
logReturnVal(getTurkDescription)

// 4. Consider the code below, and our desired output:

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };
//
// TESgames.listGames();

// The callback provided to forEach() will lose the execution context, and it
// will not produce the desired output

// 5. Use an arrow function so that the code logs our desired output.

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     // This line changed
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };
//
// TESgames.listGames();

// 6. Use the let self = this fix to alter TESgames.listGames such that it logs
// our desired output to the console.

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     // Add this line
//     const self = this
//     this.titles.forEach(function (title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };
//
// TESgames.listGames();

// 7. If we don't want to rely on let self = this, forEach provides us with an
// alternative means of supplying execution context to the inner function. Use
// this means to achieve our desired output.

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function (title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this /* added the optional thisArg argument */);
  }
};

TESgames.listGames();

// 8. Consider the code below:

// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }
//
//     increment();
//   }
// };
//
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// What will the value of foo.a be after this code has executed?

// The value of foo.a will still be 0 when this code has executed. increment()
// does not share execution context with incrementA()

// 9. Use one of the methods we learned in this lesson to invoke increment with
// explicit context such that foo.a is incremented with each invocation of
// incrementA.

// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }
//
//     // Modify this line
//     increment.call(this);
//   }
// };
//
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// 10. We decide that we want each invocation of foo.incrementA to increment
// foo.a by 3, rather than 1, and alter our code accordingly:

let foo = {
  a: 0,
  incrementA() {
    const increment = function () {
      this.a += 1;
    }.bind(this)

    increment()
    increment()
    increment()
    // Old Implementation
    // increment.apply(this);
    // increment.apply(this);
    // increment.apply(this);
  }
};

// Calling apply three times seems repetitive, though. Use bind to permanently
// set foo as increment's execution context.
