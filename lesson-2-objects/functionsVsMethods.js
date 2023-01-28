let greeter = {
  morning: function() {
    console.log('Good morning!');
  },
}

function evening() {
  console.log(`Good evening!`);
}

// Method
greeter.morning(); // greeter is the receiver/calling object;

// Function
evening(); // no explicit receiver; evening() is a function

let functionGreeter = greeter.morning;
functionGreeter()
