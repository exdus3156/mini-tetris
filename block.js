class Block {
  constructor(container, shapes) {
    this.container = container;
    this.shape = null;
    this.shapes = shapes;
    this.color = 'red';
    this.position = { x: 0, y: 0 }
    changeShape();
  }

  moveLeft() {
    const nextX = this.position.x - 1;
    if ( !this.detectCollision({ x: nextX, y: this.position.y }) ) {
      this.position.x -= 1;
    }
  }

  moveRight() {
    const nextX = this.position.x + 1;
    if ( !this.detectCollision({ x: nextX, y: this.position.y }) ) {
      this.position.x += 1;
    }
  }

  moveDown() {
    const nextY = this.position.y + 1;
    if ( !this.detectCollision({ x: this.position.x, y: nextY }) ) {
      this.position.y += 1;
    }
  }

  rotate() {
    // rotate and check collision
  }

  changeShape() {
    // set new shape and new postion;
    const shape = pickRandomShape();
    this.shape = SHAPES[shape];
    resetBlockPosition();

    // Helper Functions
    function pickRandomShape() {
      const shapes = [ 'L', 'T', 'I', 'Z', 'S', 'J', 'O' ];
      const randomIndex = Math.floor(Math.random() * shapes.length);
      return this.shapes[randomIndex];
    }
    function resetBlockPosition() {
      this.position.x = Math.floor(this.container.WIDTH / 2);
      this.position.y = 0;
    }
  }

  detectCollision(position) {
    for (let x = 0; x < this.shape.length; x++) {
      for (let y = 0; y < this.shape[x].length; y++) {
        const containerX = x + position.x;
        const containerY = y + position.y;
        if ( this.container.isFilledBlock(containerX, containerY) ) {
          return true;
        }
      }
    }

    return false;
  }

  // move down and check collision, if not collide then stack block
  animate() {
    const nextY = this.position.y + 1;
    if ( this.detectCollision({ x: this.position.x, y: nextY }) ) {
      this.stackBlock();
      this.changeShape();
    } else {
      this.position.y += 1;
    }
  }

  stackBlock() {
    for (let x = 0; x < this.shape.length; x++) {
      for (let y = 0; y < this.shape[x].length; y++) {
        if (this.shape[y][x] === 1) {
          const containerX = x + position.x;
          const containerY = y + position.y;
          this.container.fillBlock(containerX, containerY);
        }
      }
    }
  }

  draw() {
    //
  }

}


const SHAPES = {
  'O': [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ],

  'I': [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  'S': [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],

  'Z': [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
  ],

  'L': [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ],

  'J': [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ],

  'T': [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]
}