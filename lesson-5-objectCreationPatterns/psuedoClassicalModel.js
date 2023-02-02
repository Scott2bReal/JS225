let pointA = {
  x: 30,
  y: 40,
  onXAxis() {
    return this.x === 0
  },
  onYAxis() {
    return this.y === 0
  },
  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
}

pointA.distanceToOrigin() // 50
pointA.onXAxis() // false
pointA.onYAxis() // false
