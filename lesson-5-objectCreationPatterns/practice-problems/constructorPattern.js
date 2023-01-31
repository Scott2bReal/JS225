function Person(firstName, lastName = '') {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = () => {
    return `${this.firstName} ${this.lastName}`.trim()
  }
}

let scott = new Person('Scott', 'Hoecker')
let margot = new Person('Margot')

scott.fullName()
margot.fullName()

console.log(scott.constructor)
console.log(margot.constructor)

console.log(scott instanceof Person)
console.log(margot instanceof Person)
