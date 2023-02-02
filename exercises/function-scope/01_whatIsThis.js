// Read the following code carefully. What do you think is logged on line 7.
// Try to answer the question before you run the code.

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// This will log NaN to the console, because in this case this is referring to
// the global object. firstName and lastName are undefined there, so the result
// of undefined + undefined is logged (NaN)
