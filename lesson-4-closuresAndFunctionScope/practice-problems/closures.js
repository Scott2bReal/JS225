// 1. Create a makeCounterLogger function that takes a number as an argument
// and returns a function. When we invoke the returned function with a second
// number, it should count up or down from the first number to the second
// number, logging each number to the console:

function makeCounterLogger(start) {
  return (end) => {
    if (start < end) {
      for (let i = start; i <= end; i++) {
        console.log(i)
      }
    } else {
      for (let i = start; i >= end; i--) {
        console.log(i)
      }
    }
  }
}

let countlog = makeCounterLogger(5)
countlog(8)
// 5
// 6
// 7
// 8
countlog(2)
// 5
// 4
// 3
// 2

// 2. We'll build a simple todo list program using the techniques we've seen in
// this assignment. Write a makeList function that returns a new function that
// implements a todo list. The returned function should have the following
// behavior:

// When called with an argument that is not already on the list, it adds
// that argument to the list.

// When called with an argument that is already on the list, it removes the
// element from the list.

// When called without arguments, it logs all items on the list. If the list is
// empty, it logs an appropriate message.

function makeList() {
  let list = []
  const getIndex = (todo) => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (todo === item) return i
    }
    return -1
  }
  const removeTodo = (index) => {
    return list.splice(index, 1)
  }
  return (todo) => {
    if (!todo) {
      if (list.length === 0) {
        console.log(`The list is empty`)
      } else {
        list.forEach((item) => console.log(item))
      }
    } else {
      if (list.includes(todo)) {
        removeTodo(getIndex(todo))
        console.log(`${todo} was removed!`)
      } else {
        list.push(todo)
        console.log(`${todo} was added!`)
      }
    }
  }
}

let list = makeList()
list()
// The list is empty.
list('make breakfast')
// make breakfast added!
list('read book')
// read book added!
list()
// make breakfast
// read book
list('make breakfast')
// make breakfast removed!
list()
// read book
