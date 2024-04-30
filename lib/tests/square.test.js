const Square = require('../square');

describe('Square', () => {
    test('render method should return correct SVG string', () => {
      const square = new Square();
      square.setColor("green");
      expect(square.render()).toEqual('<rect x="30" y="30" width="240" height="140" fill="green" />');
    });
  });