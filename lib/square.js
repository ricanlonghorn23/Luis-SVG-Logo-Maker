class Square {
  constructor() {
    this.color = ""; 
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="30" y="30" width="240" height="140" fill="${this.color}" />`;
  }
}

module.exports = Square;
