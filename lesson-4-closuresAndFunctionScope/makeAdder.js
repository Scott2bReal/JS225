function add(first, second) {
  return first + second
}
function addOne(value) {
  return add(1, value)
}
function makeAddN(addend) {
  return function(number) {
    return add(addend, number)
  }
}
let add1 = makeAddN(1)
add1(1) // 2
add1(41) // 42
let add9 = makeAddN(9)
add9(1) // 10
add9(9) // 18

function multiply(first, second) {
  return first * second
}
function makeMultiplyN(multiplyend) {
  return function(number) {
    return multiply(multiplyend, number)
  }
}

function repeat(count, string) {
  let result = '';
  let i;
  for (i = 0; i < count; i += 1) {
    result += string
  }
  return result
}
function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2)
  }
}
