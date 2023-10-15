class Container {
  constructor() {
    this.WIDTH = 13;
    this.HEIGHT = 20;
    this.box = null;
    this.initBox();
  }
  
  initBox() {
    this.box = new Array(this.HEIGHT);
    for (let i = 0; i < this.HEIGHT; i++) {
      this.box[i] = new Array(this.WIDTH);
    }
  }

  getWidth() {
    return this.WIDTH;
  }
  getHeight() {
    return this.HEIGHT;
  }

  isFilledBlock(x, y) {
    if (x < 0 || x >= this.WIDTH || y < 0 || y >= this.HEIGHT) return true;
    if (this.box[y][x] === 1) return true;
    else return false;
  }

  fillBlock(x, y) {
    this.box[y][x] = 1;
  }

  checkBottomFill() {

  }

  draw() {
    //
  }

  checkGameOver() {
    
  }
}