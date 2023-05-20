/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.values = [area, perimeter];
  }

  describe() {
    return `The area is ${this.values[0]} and the perimeter is ${this.values[1]}`;
  }
}

const newShape = new Shape(10, 20);
console.log(newShape.describe());
