import { Direction } from "./Game";
import { Model } from "./Model";

export class Controller {
  public model: Model;

  public keyRight: boolean;
  public keyLeft: boolean;
  public keyUp: boolean;
  public keyDown: boolean;
  public keySpace: boolean;
  public keys: Set<string> = new Set();

  constructor(model: Model) {
    this.model = model;
    document.addEventListener("keydown", (event) => this.keys.add(event.key));
    document.addEventListener("keyup", (event) => this.keys.delete(event.key));
  }

  public update() {
    if (this.keys.has("ArrowUp")) {
      this.model.player.move(Direction.Up);
    }

    if (this.keys.has("ArrowDown")) {
      this.model.player.move(Direction.Down);
    }

    if (this.keys.has("ArrowLeft")) {
      this.model.player.move(Direction.Left);
    }

    if (this.keys.has("ArrowRight")) {
      this.model.player.move(Direction.Right);
    }
  }
}
