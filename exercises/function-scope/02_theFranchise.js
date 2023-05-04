// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? Try fixing this
// problem by taking advantage of JavaScript lexical scoping rules.

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// This will not return the desired object because the callback function passed
// to map is not bound to the franchise object. We can fix this by using an arrow
// function, which will bind the callback function to the franchise object.

const franchise = {
  name: "How to Train Your Dragon",
  allMovies() {
    return [1, 2, 3].map(num => {
      return `${this.name} ${num}`
    })
  }
}

console.log(franchise.allMovies())
