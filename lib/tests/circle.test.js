const Circle = require('../circle');

describe('Circle', () => {
    test('render method should return correct SVG string', () => {
      const circle = new Circle();
      circle.setColor("red");
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });