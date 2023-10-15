class Block {
  constructor(container) {
    this.container = container;
    this.shape = null;
    this.color = null;
    this.position = { x: 0, y: 0 }
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
    console.log(this.position.x, this.position.y);
  }

}