// 1. What does this point to in the code below, and what does the method
// return?

// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };
// myObject.myChildObject.myMethod();

// this will be pointing to myChildObject. The code will return undefined

// 2. In the previous problem, how would you change the context, or the value
// of this, to be the parent myObject?

let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};
// Modify this line to assign myObject as the execution context
myObject.myChildObject.myMethod.call(myObject);

// 3. What does the following code log to the console?

let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// This will log Peter Parker is the Amazing Spiderman

// 4. What does the following code log to the console?

// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     function specialDiscount() {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }
//     return this.price /*30000*/ + this.shipping /*2000*/ + tax /*3000*/ - specialDiscount() /*0*/;
//   }
// };
// console.log(computer.total());

// This will log 35000. specialDiscount() loses execution context, and will
// thus return 0

// If you want this program to log 34000, how would you fix it?

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    // Use an arrow function, so this retains its execution context
    const specialDiscount = () => {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price /*30000*/ + this.shipping /*2000*/ + tax /*3000*/ - specialDiscount() /*1000*/;
  }
};
console.log(computer.total());
