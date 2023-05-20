/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width);
    this.values = [width];
  }

  describe() {
    return `The shape is a Square. The width is ${this.values}, the area is ${
      this.values ** 2
    }, and the perimeter is ${this.values * 4}`;
  }
}

const newSquare = new Square(12);
console.log(newSquare.describe());
