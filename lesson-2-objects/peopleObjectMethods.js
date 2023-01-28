let me = {
  firstName: 'Scott',
  lastName: 'Hoecker',
}

let margot = {
  firstName: 'Margot',
  lastName: 'Considine',
}

let people = {
  collection: [],
  lastUsedIndex: -1,
  fullName: (person) => {
    console.log(`${person.firstName} ${person.lastName}`)
  },
  rollCall: function () {
    this.collection.forEach(this.fullName)
  },
  add: function (person) {
    if (this.isInvalidPerson(person)) return
    person.index = this.lastUsedIndex + 1
    this.lastUsedIndex += 1
    this.collection.push(person)
  },
  getIndex: function (person) {
    let index = -1
    this.collection.forEach(function (comparator, i) {
      if (person.index) {
        if (comparator.index === person.index) {
          index = i
        }
      } else if (
        comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName
      ) {
        index = i
      }
    })
    return index
  },
  remove: function (person) {
    if (this.isInvalidPerson(person)) return
    let index = this.getIndex(person)
    if (index === -1) return
    this.collection.splice(index, 1)
  },
  isInvalidPerson: function (person) {
    return (
      typeof person.firstName !== 'string' &&
      typeof person.lastName !== 'string' &&
      typeof person.index !== number
    )
  },
  get: function (person) {
    if (this.isInvalidPerson(person)) return
    return this.collection[this.getIndex(person)]
  },
  update: function (person) {
    if (this.isInvalidPerson) return
    let existingPersonId = this.getIndex(person)
    if (existingPersonId === -1) {
      this.add(person)
    } else {
      this.collection[existingPersonId] = person
    }
  },
}

people.rollCall()

// Removing a person is a bit more complicated. We'll need to find the person
// using their first and last name, and then use their index from the
// collections property to remove them from the collection array

console.log(people.collection)
people.add(me)
console.log(people.collection)
people.add(margot)
console.log(people.collection)
