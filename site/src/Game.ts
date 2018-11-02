import { Model } from "./Model";
import { Player } from "./Player";

export const map = {
  height: 1000,
  width: 1000,
};

export enum Direction {
  Left, Right, Up, Down,
}

export class Game {
  public static paint: CanvasRenderingContext2D;
  public static sw: number = window.innerWidth;
  public static sh: number = window.innerHeight;
  public player: Player;
  // controller: Controller;
  public model: Model;
  private canvas: HTMLCanvasElement;
  // view: View;

  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvas.width = map.width;
    this.canvas.height = map.height;
    this.canvas.style.top = -(map.height - Game.sh) + "px";
    Game.paint = this.canvas.getContext("2d");
    Game.paint.textAlign = "center";

    this.model = new Model();
    // this.controller = new Controller(this.model);
    // this.view = new View(this.controller, this.model);
  }

  public draw = () => {
    Game.paint.fillStyle = "red";
    Game.paint.fillRect(this.model.player.x, this.model.player.y, 100, 100);
  }

  public run = () => {
    setInterval(() => {
      this.model.draw();
      this.model.update();
    }, 100);
  }
}

const g = new Game();
g.run();
