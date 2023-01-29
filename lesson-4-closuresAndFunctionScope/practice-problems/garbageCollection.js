// 1. In the following code, when can JavaScript garbage collect each of the
// following arrays? [1], [2], and [1, 2].

let a = [1];

function add(b) {
  a = a.concat(b);
}

// [1] is available for garbage collection after a is reassigned

function run() {
  let c = [2];
  let d = add(c);
}

run();
// Nothing else is eligible for garbage collection until right here

// 2. In the following code, when can JavaScript garbage collect the value
// ["Steve", "Edie"]?

function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
// It can't garbage collect them until the program has finished
