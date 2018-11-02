import { Model } from "./Model";
import { Player } from "./Player";
import { Controller } from './Controller';

export const map = {
  height: 500,
  width: 500,
};

export enum Direction {
  Left, Right, Up, Down,
}

export class Game {
  public static paint: CanvasRenderingContext2D;
  public static sw: number = window.innerWidth;
  public static sh: number = window.innerHeight;
  public player: Player;
  public controller: Controller;
  public model: Model;
  private canvas: HTMLCanvasElement;

  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvas.width = map.width;
    this.canvas.height = map.height;
    this.canvas.style.top = -(map.height - Game.sh) + "px";
    Game.paint = this.canvas.getContext("2d");
    Game.paint.textAlign = "center";

    this.model = new Model();
    this.controller = new Controller(this.model);
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
