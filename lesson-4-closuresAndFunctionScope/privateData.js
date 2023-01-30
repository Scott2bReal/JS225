// We can use closures and IIFEs to create functions and object with private
// data

// We can use this to create a function which generates unique numbers:

// let studentId = 0;
//
// function generateStudentId() {
//   studentId += 1
//   return studentId
// }

let generateStudentId = (function () {
  let studentId = 0
  return function () {
    studentId += 1
    return studentId
  }
})()

let inventory = (function () {
  let stocks = []
  const isValid = (newStock) => {
    return stocks.every((stock) => newStock.name !== stock.name)
  }
  return {
    stockCounts() {
      stocks.forEach((stock) => {
        console.log(`${stock.name}: ${String(stock.count)}`)
      })
    },
    addStock(newStock) {
      if (isValid(newStock)) {
        stocks.push(newStock)
      }
    },
  }
})()
