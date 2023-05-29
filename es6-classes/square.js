/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width);
    this.width = width;
  }

  describe() {
    return `The shape is a Square. The width is ${this.width}, the area is ${
      this.width ** 2
    }, and the perimeter is ${this.width * 4}`;
  }
}

const newSquare = new Square(12);
console.log(newSquare.describe());
