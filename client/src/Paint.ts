import { Model } from "./Model";

export const map = {
  height: 500,
  width: 500,
};

export class Paint {
  public static sw: number = window.innerWidth;
  public static sh: number = window.innerHeight;
  public ctx: CanvasRenderingContext2D;
  public model: Model;

  private canvas: HTMLCanvasElement;

  constructor(model: Model) {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.top = -(map.height - Paint.sh) + "px";
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.textAlign = "center";

    this.model = model;
  }

  public draw() {
    this.ctx.fillStyle = "white"; // clearing screen
    this.ctx.fillRect(0, 0, Paint.sw, Paint.sh);
    for (const player of this.model.players) {
      player.draw(this);
    }
  }
}
