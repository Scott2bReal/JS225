"use strict";

const createStudent = (name, year) => {
  return {
    name,
    year,
    courses: [],
    info() {
      return `${this.name} is a ${this.year} year student`
    },
    listCourses() {
      console.log(this.courses)
    },
    addCourse(course) {
      this.courses.push(course)
    },
    addNote(code, note) {
      const course = this.findCourse(code)
      if (!course.note) {
        course.note = note
      } else {
        course.note += `; ${note}`
      }
    },
    updateNote(code, note) {
      const course = this.findCourse(code)
      course.note = note
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`)
        }
      })
    },
    findCourse(code) {
      return this.courses.find((course) => course.code === code)
    },
  }
}

// Create a school object. The school object uses the same kind of student object as the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the
// student to a collection of students. The method adds a constraint that the
// year can only be any of the following values: '1st', '2nd', '3rd', '4th', or
// '5th'. Returns a student object if year is valid otherwise it logs "Invalid
// Year".

// enrollStudent: Enrolls a student in a course.

// addGrade: Adds the grade of a student for a course.

// getReportCard: Logs the grades of a student for all courses. If the
// course has no grade, it uses "In progress" as the grade.

// courseReport: Logs the grades of all students for a given course name.
// Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the
// three student objects, produce the following values from the getReportCard
// and courseReport methods respectively.

const years = ['1st', '2nd', '3rd', '4th', '5th']

const school = {
  students: [],
  findCourse(student, courseName) {
    return student.courses.find((course) => course.name === courseName)
  },
  findStudent(studentName) {
    return this.students.find((student) => student.name === studentName)
  },
  addStudent(student) {
    const { year } = student
    if (!years.includes(year)) {
      console.log(`Invalid Year`)
    } else {
      this.students.push(student)
    }
  },
  enrollStudent(student, courseName) {
    const course = this.findCourse(courseName)
    student.addCourse(course)
  },
  addGrade(studentName, courseName, grade) {
    const student = this.findStudent(studentName)
    const course = this.findCourse(student, courseName)
    course.grade = grade
  },
  getReportCard(student) {
    student.courses.forEach((course) => {
      console.log(
        `${course.name}: ${course.grade ? course.grade : `In progress`}`
      )
    })
  },
  courseReport(courseName) {
    const grades = this.students
      .map((student) => {
        const { name, courses } = student
        const course = courses.find((course) => course.name === courseName)
        if (course?.grade) {
          return {
            name,
            grade: course.grade,
          }
        } else {
          return undefined
        }
      })
      .filter((grade) => grade)

    if (grades.length === 0) return;
    const average = this.courseAverage(grades)
    console.log(`= ${courseName} Grades =`)
    grades.forEach((grade) => console.log(`${grade.name}: ${grade.grade}`))
    console.log(`Course Average: ${average}`)
    console.log(`---`)
  },
  courseAverage(grades) {
    if (grades.length === 0) return;
    const total = grades.reduce((total, grade) => {
      const score = grade.grade
      return (total += score)
    }, 0)
    return total / grades.length
  },
}

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
const foo = createStudent('foo', '3rd')
foo.addCourse({ name: 'Math', code: 101, grade: 95 })
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90 })
foo.addCourse({ name: 'Physics', code: 202 })

const bar = createStudent('bar', '1st')
bar.addCourse({ name: 'Math', code: 101, grade: 91 })

const qux = createStudent('qux', '2nd')
qux.addCourse({ name: 'Math', code: 101, grade: 93 })
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90 })

school.addStudent(foo)
school.addStudent(bar)
school.addStudent(qux)

school.getReportCard(foo)
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math')
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math')
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics')
// undefined
