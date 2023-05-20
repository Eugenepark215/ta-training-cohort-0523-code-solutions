/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
  }

  describe() {
    return `The shape is a Circle. The radius is ${this.radius}, the area is ${(
      Math.PI *
      this.radius ** 2
    ).toFixed(3)}, and the perimeter is ${(2 * Math.PI * this.radius).toFixed(
      3
    )}`;
  }
}

const newCircle = new Circle(5);
console.log(newCircle.describe());
