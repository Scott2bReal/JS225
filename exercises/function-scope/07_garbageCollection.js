// Read the following code carefully. Will the JavaScript garbage collection
// mechanism garbage collect the array assigned to the variable array after the
// function pushIt is called on line 11?

function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

// Solution No, it will not be eligible for garbage collection. This is because
// the variable which stores the array is created outside the scope of the
// function returned by makeArrays().
