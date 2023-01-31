// 1. What naming convention separates constructor functions from other
// functions?

// We capitalize constructor funtions to signify that they are intended to be
// used with the new operator

// 2. What will the code below output? Why?

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }
//
// let lizzy = Lizard();
// lizzy.scamper(); // ?

// This will not output anything, because invoking Lizard() does not have a
// return value

// 3. Alter the code in problem 2 so that it produces the desired output.

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
