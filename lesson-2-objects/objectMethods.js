let me = {
  firstName: 'Scott',
  lastName: 'Hoecker',
}

let anotherMe = {}
anotherMe.firstName = 'Scott'
anotherMe.lastName = 'Hoecker'

function fullName(person) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let margot = {
  firstName: 'Margot',
  lastName: 'Considine',
}

fullName(me) // Scott Hoecker

// let people = []
// people.push(me)
// people.push(margot)

function rollCall(collection) {
  collection.forEach(fullName)
}

let people = {
  collection: [me, margot],
  fullName: (person) => {
    console.log(`${person.firstName} ${person.lastName}`)
  },
  rollCall: () => {
    this.collection.forEach(this.fullName)
  },
  add: (person) => {
    this.collection.push(person)
  },
}

people.rollCall()
