/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.values = [radius];
  }

  describe() {
    return `The shape is a Circle. The radius is ${this.values}, the area is ${(
      Math.PI *
      this.values ** 2
    ).toFixed(3)}, and the perimeter is ${(2 * Math.PI * this.values).toFixed(
      3
    )}`;
  }
}

const newCircle = new Circle(5);
console.log(newCircle.describe());
