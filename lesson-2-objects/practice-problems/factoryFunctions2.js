// 1. Consider the code below:

// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
//
// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
//
// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// Think about what is necessary and unnecessary in this code. Where is there
// duplication?

// The getDescription() method is identical in each object definition.

// 2. Given our observations about the code above, implement a factory function
// for our country objects following the template laid out below:

// const makeCountry = (name, continent) => {
//   return {
//     name,
//     continent,
//     getDescription() {
//       return this.name + ' is located in ' + this.continent + '.';
//     }
//   }
// }
//
// let chile = makeCountry('The Republic of Chile', 'South America');
// let canada = makeCountry('Canada', 'North America');
// let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// 3. We've decided that we want to track which countries we've visited, and
// which we haven't. Alter the factory function so that the object it returns
// includes a property visited with a value of false.

// const makeCountry = (name, continent, visited = false) => {
//   return {
//     name,
//     continent,
//     visited,
//     getDescription() {
//       return this.name + ' is located in ' + this.continent + '.';
//     }
//   }
// }
//
// let chile = makeCountry('The Republic of Chile', 'South America');
// let canada = makeCountry('Canada', 'North America');
// let southAfrica = makeCountry('The Republic of South Africa', 'Africa');
//
// chile.getDescription();       // "The Republic of Chile is located in South America."
// canada.getDescription();      // "Canada is located in North America."
// southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

// 5. Let's add a method to our country objects that lets us visit them.
// Implement a method visitCountry that sets the visited property to true.

// const makeCountry = (name, continent, visited = false) => {
//   return {
//     name,
//     continent,
//     visited,
//     getDescription() {
//       return this.name + ' is located in ' + this.continent + '.';
//     },
//     visit() {
//       this.visited = true
//     },
//   }
// }
//
// let chile = makeCountry('The Republic of Chile', 'South America');
// let canada = makeCountry('Canada', 'North America');
// let southAfrica = makeCountry('The Republic of South Africa', 'Africa');
//
// chile.getDescription();       // "The Republic of Chile is located in South America."
// canada.getDescription();      // "Canada is located in North America."
// southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

// 6. Finally, let's update our getDescription function to reflect the visited
// data. Assuming that canada.visited is false, your code should look like
// this:

const makeCountry = (name, continent, visited = false) => {
  return {
    name,
    continent,
    visited,
    getDescription() {
      const description = `${this.name} is located in ${this.continent}`
      const visitedDescription = `I have${this.visited ? `` : `n't`} visited ${this.name}`
      return `${description}. ${visitedDescription}`
    },
    visitCountry() {
      this.visited = true
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');
console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
console.log(canada.visitCountry());
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."
