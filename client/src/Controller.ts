import { Model } from "./Model";

export class Controller {
  public model: Model;

  public keys: Set<string> = new Set();

  constructor(model: Model) {
    this.model = model;
    document.addEventListener("keydown", (event) => this.keys.add(event.key));
    document.addEventListener("keyup", (event) => this.keys.delete(event.key));
  }

  public update() {
    if (this.keys.has("ArrowUp")) {
      this.model.mainPlayer.movePlayer(0, -1);
    }

    if (this.keys.has("ArrowDown")) {
      this.model.mainPlayer.movePlayer(0 , 1);
    }

    if (this.keys.has("ArrowLeft")) {
      this.model.mainPlayer.movePlayer(-1, 0);
    }

    if (this.keys.has("ArrowRight")) {
      this.model.mainPlayer.movePlayer(1, 0);
    }
  }
}
