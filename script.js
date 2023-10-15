let container = new Container();
let block = new Block(container);
let view = new View(container, block);

let score = 0;
let level = 1;

const frame = 60;
let fpsInterval = 1000 / frame;
let then = null;

function animate() {
  
  // game logic
  block.animate();
  if ( container.checkGameOver() ) {
    stopGame();
    return;
  }
  container.checkBottomFill();
  
  // FPS
  const now = Date.now();
  const diff = now - then;
  if (diff >= fpsInterval) {
    view.drawAll();
    then = now;
  }

  window.requestAnimationFrame(animate);
}

function startGame() {
  controller.init();
  then = Date.now();
  animate();
}

function stopGame() {

}

startGame();