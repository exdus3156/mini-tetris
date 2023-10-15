let isStart = false;
const controller = Object.create(null);

controller.rotate = function() {
  window.addEventListener('keydown', (keyEvent) => {
    if (isStart) {
      if (keyEvent.code === 'ArrowUp') {
        block.rotate();
      }
    }
  })
}

controller.moveBlock = function() {
  window.addEventListener('keydown', (keyEvent) => {
    if (isStart) {
      const keyCode = keyEvent.code;
      switch(keyCode) {
        case 'ArrowLeft': 
          block.moveLeft();
          break;
        case 'ArrowRight':
          block.moveRight();
          break;
        case 'ArrowDown':
          block.moveDown();
          break;
      }
    }
  })
}

controller.startButton = function() {
  const startBtn = document.getElementById("game-start-button");
  startBtn.addEventListener('click', function() {
    const gameMenu = document.getElementById("game-menu");
    const canvas = document.getElementById("canvas");
    this.hidden = true;
    gameMenu.hidden = true;
    canvas.hidden = false;
    isStart = true;
  })
}

controller.init = function() {
  this.rotate();
  this.moveBlock();
  this.startButton();
}