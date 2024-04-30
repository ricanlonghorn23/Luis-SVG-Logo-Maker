const Triangle = require('../triangle');

describe('Triangle', () => {
    test('render method should return correct SVG string', () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
  });
  