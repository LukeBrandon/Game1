

const map = {
  height: 1000,
  width: 1000
}

class Game {
  private canvas: HTMLCanvasElement;
  static paint: CanvasRenderingContext2D;
  static sw: number = window.innerWidth;
  static sh: number = window.innerHeight;
  controller: Controller;
  model: Model;
  view: View;


  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    //document.addEventListener('keydown', this.controller.keyboardInput);
    this.canvas.width = map.width;
    this.canvas.height = map.height;
    this.canvas.style.top = -(map.height - Game.sh) + "px";
    Game.paint = this.canvas.getContext("2d");
    Game.paint.textAlign = "center";

    console.log("before instantiating model");
    this.model = new Model();
    this.controller = new Controller(this.model);
    this.view = new View(this.controller, this.model);
  }

  draw() {
    // Game.paint.fillStyle = "red";
    // Game.paint.fillRect(this.model.player.x, this.model.player.y, 100, 100);
  }

  run(){
    while(true){
        this.controller.update();
        this.model.update();
        this.view.paintComponent();
    }
  }


}

    const g = new Game();
    g.run();
    // /g.draw();



