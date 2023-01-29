// function makeList() {
//   let list = []
//   const getIndex = (todo) => {
//     for (let i = 0; i < list.length; i++) {
//       const item = list[i]
//       if (todo === item) return i
//     }
//     return -1
//   }
//   const removeTodo = (index) => {
//     return list.splice(index, 1)
//   }
//   return (todo) => {
//     if (!todo) {
//       if (list.length === 0) {
//         console.log(`The list is empty`)
//       } else {
//         list.forEach((item) => console.log(item))
//       }
//     } else {
//       if (list.includes(todo)) {
//         removeTodo(getIndex(todo))
//         console.log(`${todo} was removed!`)
//       } else {
//         list.push(todo)
//         console.log(`${todo} was added!`)
//       }
//     }
//   }
// }

// 1. Reimplement makeList, so that it returns an Object that provides the
// interface shown above, including add, list, and remove methods.

// function makeList() {
//   return {
//     items: [],
//     add(item) {
//       if (this.items.includes(item)) {
//         console.log(`${item} is already on the list!`)
//       } else {
//         this.items.push(item)
//         console.log(`${item} added!`)
//       }
//     },
//     remove(item) {
//       if (this.items.includes(item)) {
//         this.items.splice(this.items.indexOf(item), 1)
//         console.log(`${item} removed!`)
//       } else {
//         console.log(`${item} is not on the list!`)
//       }
//     },
//     list() {
//       if (this.items.length === 0) {
//         console.log(`The list is empty`)
//       } else {
//         this.items.forEach(item => console.log(item))
//       }
//     },
//   }
// }

// let list = makeList();
// list.add('peas');
// // = peas added!
// list.list();
// // = peas
// list.add('corn');
// // = corn added!
// list.list();
// // = peas
// // = corn
// list.remove('peas');
// // = peas removed!
// list.list();
// // = corn

// 2. Notice that the solution lets us access the array of items through the items property

// Update the implementation from problem 1 so that it retains the use of an
// object with methods but prevents outside access to the items the object
// stores internally.

function makeList() {
  let items = []
  return {
    add(item) {
      if (items.includes(item)) {
        console.log(`${item} is already on the list!`)
      } else {
        items.push(item)
        console.log(`${item} added!`)
      }
    },
    remove(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1)
        console.log(`${item} removed!`)
      } else {
        console.log(`${item} is not on the list!`)
      }
    },
    list() {
      if (items.length === 0) {
        console.log(`The list is empty`)
      } else {
        items.forEach(item => console.log(item))
      }
    },
  }
}

let list = makeList();
list.add('peas');
// = peas added!
list.list();
// = peas
list.add('corn');
// = corn added!
list.list();
// = peas
// = corn
list.remove('peas');
// = peas removed!
list.list();
// = corn
console.log(list.items); // undefined
