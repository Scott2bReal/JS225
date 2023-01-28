// 1. What will the code below output to the console?

let message = 'Hello from the global scope!'

function func(message) {
  message = 'Hello from the function scope!'
  console.log(message) // 'Hello from the function scope!'
}

func(message)
console.log(message) // 'Hello from the global scope!'

// 2.  What will the code below log to the console? What does this output
// demonstrate in relation to the output of problem one?

let myObj = { message: 'Greetings from the global scope!' }

function func2(obj) {
  obj.message = 'Greetings from the function scope!'
  console.log(obj.message) // Greetings from the function scope!
}

func2(myObj) // Greetings from the function scope!
console.log(myObj.message) // Greetings from the function scope!

// This shows the difference between mutating an objects property in a function
// vs. reassigning a function-scoped variable

// 3. What will the code below log to the console?

let anotherMessage = 'Hello from the global scope!'
function func3() {
  anotherMessage = 'Hello from the function scope!'
  console.log(anotherMessage)
}

func3() // Hello from the function scope!
console.log(anotherMessage) // Hello from the function scope!

// 4. What will the code below log to the console?

let a = 10
let obj = { a }
let newObj = obj
newObj.a += 10

console.log(obj.a === a) // false
console.log(newObj.a === obj.a) // true

// This shows that when we assign object properties to a variable, when we
// reassign that object property the variable itself will be pointing to that
// new value, which means any objects containing a reference to that variable
// will update.

// 5. Consider the code below:

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
}
let menagerie = {
  warthog: animal,
}
animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
}
menagerie.meerkat = animal
menagerie.warthog === animal // false
menagerie.meerkat === animal // true

// If objects are mutable, why does the second to last line return false?

// This is because while an object is mutable, the variable animal was
// reassigned to a new object. This means that the warthog property, which
// references the animal variable, is now pointing to the object which contains
// meerkat information
