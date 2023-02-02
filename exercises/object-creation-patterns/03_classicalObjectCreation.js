// Implement the following diagram (./classical.png) using the pseudo-classical
// approach. Subclasses should inherit all of the superclass's methods. Reuse
// the constructors of the superclass when implementing a subclass.

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.gender = gender
// }
// Person.prototype.eat = function() {
//   console.log(`Eating`)
// }
// Person.prototype.communicate = function() {
//   console.log(`Communicating`)
// }
// Person.prototype.sleep = function() {
//   console.log(`Sleeping`)
// }
// Person.prototype.fullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }
//
// function Doctor(firstName, lastName, age, gender, speciality) {
//   Person.call(this, firstName, lastName, age, gender)
//   this.speciality = speciality
// }
// Doctor.prototype = Object.create(Person.prototype)
// Doctor.prototype.diagnose = function() {
//   console.log(`Diagnosing`)
// }
//
// function Student(firstName, lastName, age, gender, ...fields) {
//   Person.call(this, firstName, lastName, age, gender)
//   this.fields = fields
// }
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.study = function() {
//   console.log(`Studying`)
// }
// Student.prototype.research = function() {
//   console.log(`Researching`)
// }
//
// function GraduateStudent(firstName, lastName, age, gender, ...fields) {
//   Student.call(this, firstName, lastName, age, gender)
//   this.fields = fields
// }
// GraduateStudent.prototype = Object.create(Student.prototype)
//
// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'
//
// const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'
//
// const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// Further Exploration: Refactor the solution to use ES6 class syntax.

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  eat() {
    console.log(`Eating`)
  }
  communicate() {
    console.log(`Communicating`)
  }
  sleep() {
    console.log(`Sleeping`)
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, speciality) {
    super(firstName, lastName, age, gender)
    this.speciality = speciality
  }
  diagnose() {
    console.log(`Diagnosing`)
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender)
    this.degree = degree
  }
  study() {
    console.log(`Studying`)
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree)
    this.graduateDegree = graduateDegree
  }
  research() {
    console.log(`Researching`)
  }
}

const person = new Person('foo', 'bar', 21, 'gender')
console.log(person instanceof Person) // logs true
person.eat() // logs 'Eating'
person.communicate() // logs 'Communicating'
person.sleep() // logs 'Sleeping'
console.log(person.fullName()) // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics')
console.log(doctor instanceof Person) // logs true
console.log(doctor instanceof Doctor) // logs true
doctor.eat() // logs 'Eating'
doctor.communicate() // logs 'Communicating'
doctor.sleep() // logs 'Sleeping'
console.log(doctor.fullName()) // logs 'foo bar'
doctor.diagnose() // logs 'Diagnosing'

const graduateStudent = new GraduateStudent(
  'foo',
  'bar',
  21,
  'gender',
  'BS Industrial Engineering',
  'MS Industrial Engineering'
)
// logs true for next three statements
console.log(graduateStudent instanceof Person)
console.log(graduateStudent instanceof Student)
console.log(graduateStudent instanceof GraduateStudent)
graduateStudent.eat() // logs 'Eating'
graduateStudent.communicate() // logs 'Communicating'
graduateStudent.sleep() // logs 'Sleeping'
console.log(graduateStudent.fullName()) // logs 'foo bar'
graduateStudent.study() // logs 'Studying'
graduateStudent.research() // logs 'Researching'
