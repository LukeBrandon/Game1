import { Controller } from "./Controller";
import { Model } from "./Model";
import { Paint } from "./Paint";
import "./Socket";

export enum Direction {
  Left,
  Right,
  Up,
  Down,
}

export class Game {
  public controller: Controller;
  public model: Model;
  public paint: Paint;

  constructor() {
    this.model = new Model();
    this.paint = new Paint(this.model);
    this.controller = new Controller(this.model);
  }

  public run = () => {
    setInterval(() => {
      this.paint.draw();
      this.model.update();
      this.controller.update();
    }, 10);
  }
}

export const g = new Game();
g.run();
