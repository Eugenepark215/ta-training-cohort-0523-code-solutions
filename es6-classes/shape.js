/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}

const newShape = new Shape(10, 20);
console.log(newShape.describe());
