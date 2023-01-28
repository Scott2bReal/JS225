// 1. Write a makeCar function that works as shown above.

// 3. Our application now needs to handle braking to slow down. Extend the code
// from problem 1 to handle specifying a braking rate for each car. Also, add a
// method that tells the car to apply the brakes for one second. It should work
// like this:

const makeCar = (rate, brakingRate) => {
  return {
    // From question 1
    speed: 0,
    rate,
    accelerate() {
      this.speed += this.rate
    },
    // From question 3
    brakingRate,
    brake() {
      const newSpeed = this.speed -= this.brakingRate
      this.speed = newSpeed >= 0 ? newSpeed : 0
    },
  }
}

// 2. Use your new definition of makeCar to create a hatchback car whose rate
// of acceleration is 8 mph/s.

const hatchback = makeCar(9, 6)
const sedan = makeCar(8, 6)
