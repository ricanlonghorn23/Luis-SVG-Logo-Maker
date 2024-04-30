const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

class Shape {
  constructor() {
    this.color = ""; 
  }

  setColor(color) {
    this.color = color;
  }



  render() {
    return ''; 
  }
}

module.exports = { Shape, Circle, Square, Triangle };
