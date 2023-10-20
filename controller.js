class Controller {
  constructor(service) {
    this.service = service;
    this.isGameStarted = false;
  }

  init() {
    // Arrow Key Pressed
    window.addEventListener('keydown', this.keyPress);

    // Start Button Clicked
    const startBtn = document.getElementById("game-start-button");
    startBtn.addEventListener('click', this.clickStartButton);
  }

  keyPress(keyEvent) {
    const code = keyEvent.code;
    switch(code) {
      case 'ArrowUp':
        this.service.rotateBlock(); 
        break;
      case 'ArrowDown':
        this.service.fallBlock(); 
        break;
      case 'ArrowLeft':
        this.service.moveBlockLeft(); 
        break;
      case 'ArrowRight':
        this.service.moveBlockRight(); 
        break;
    }
  }

  clickStartButton() {
    // Already started, then pass.
    if (this.isGameStarted) return;

    // toggle start banner & game canvas
    const gameMenu = document.getElementById("game-menu");
    const canvas = document.getElementById("canvas");
    gameMenu.hidden = true;
    canvas.hidden = false;

    this.isGameStarted = true;
  }
}
