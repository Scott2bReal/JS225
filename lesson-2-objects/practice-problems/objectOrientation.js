// In these problems, we will be building an object-oriented inventory
// management system.

// 1. Suppose we want to use code to keep track of products in our hardware
// store's inventory. A first stab might look something like this:

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;
//
// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// This code presents a number of problems, however. What if we want to add
// another kind of drill? Given what we've learned about object orientation in
// the previous assignment, how could we use objects to organize these two
// groups of data?

// const scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// }
// const drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// }

// 2. Our new organization also makes it easier to write functions dealing with
// the products, because we can now take advantage of conventions in the
// objects' data. Create a function that takes one of our product objects as an
// argument, and sets the object's price to a non-negative number of our
// choosing, passed in as a second argument. If the new price is negative,
// alert the user that the new price is invalid.

// const setPrice = (product, newPrice) => {
//   if (newPrice < 0) {
//     console.log(`Can't set price to ${newPrice}: Price must be 0 or greater`)
//     return
//   }
//   product.price = newPrice
//   return
// }

// 3. It would also be useful to have the ability to output descriptions of our
// product objects. Implement such a function following the example below:

// const describeProduct = (product) => {
//   const { id, name, price, stock } = product
//   console.log(`Name: ${name}\nID: ${id}\nPrice: $${price}\nStock: ${stock}`)
// }

// describeProduct(scissors)
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8

// 4. We want our code to take an object-oriented approach to keeping track of
// the products, and although the functions we just wrote work fine, since they
// are manipulating data in the objects, we should place them in the objects
// themselves. Rewrite the code such that the functions describeProduct and
// setProductPrice become methods describe and setPrice on both our scissors
// and drill objects.

// const scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   describeProduct() {
//     const { id, name, price, stock } = this
//     console.log(`Name: ${name}\nID: ${id}\nPrice: $${price}\nStock: ${stock}`)
//   },
//   setPrice(newPrice) {
//     if (newPrice < 0) {
//       console.log(`Can't set price to ${newPrice}: Price must be 0 or greater`)
//       return
//     }
//     this.price = newPrice
//     return
//   },
// }
// const drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
//   describeProduct() {
//     const { id, name, price, stock } = this
//     console.log(`Name: ${name}\nID: ${id}\nPrice: $${price}\nStock: ${stock}`)
//   },
//   setPrice(newPrice) {
//     if (newPrice < 0) {
//       console.log(`Can't set price to ${newPrice}: Price must be 0 or greater`)
//       return
//     }
//     this.price = newPrice
//     return
//   },
// }

// 5. This solution has brought us closer to our object-oriented ideal, but has
// also introduced some inefficiency, insofar as our setPrice and describe
// methods are duplicated in each object, and we will have to type out this
// code for each new object we want to create. One solution to this problem is
// to stop manually creating each object, and instead use a factory function to
// generate them. Create a new function createProduct which takes arguments for
// id, name, stock, and price and also adds setPrice and describe to the new
// object.

const createProduct = (id, name, stock, price) => {
  return {
    id,
    name,
    stock,
    price,
    describeProduct() {
      const { id, name, price, stock } = this
      console.log(`Name: ${name}\nID: ${id}\nPrice: $${price}\nStock: ${stock}`)
    },
    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log(
          `Can't set price to ${newPrice}: Price must be 0 or greater`
        )
        return
      }
      this.price = newPrice
      return
    },
  }
}

const scissors = createProduct(0, 'Scissors', 8, 10)
const drill = createProduct(1, 'Cordless Drill', 15, 45)
