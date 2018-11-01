const map = {
  height: 1000,
  width: 1000
}

class Game {
  private canvas: HTMLCanvasElement;
  static paint: CanvasRenderingContext2D;
  static sw: number = window.innerWidth;
  static sh: number = window.innerHeight;


  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvas.width = map.width;
    this.canvas.height = map.height;
    this.canvas.style.top = -(map.height - Game.sh) + "px";
    Game.paint = this.canvas.getContext("2d");
    Game.paint.textAlign = "center";
  }

  draw() {
    Game.paint.fillStyle = "red";
    Game.paint.fillRect(10, 10, 100, 100);
  }




}

const g = new Game();

g.draw();


