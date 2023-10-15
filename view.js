class View {
  constructor(container, block) {
    this.container = container;
    this.block = block;
  }

  drawAll() {
    this.container.draw();
    this.block.draw();
  }
}
