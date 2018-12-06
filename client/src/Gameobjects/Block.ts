import { Paint } from "../Paint";
import { Player } from "../Player";
import { Sprite } from "./Sprite";

export class Block extends Sprite {
  constructor() {
    super(500, 500, 100, 100);
    this.type = "block";
    this.isMoveable = true;
  }

  public update() {
    // console.log("update");
  }

  public draw(paint: Paint) {
    paint.ctx.fillStyle = "green";
    paint.ctx.fillRect(this.x, this.y, this.w, this.h);
    // paint.ctx.beginPath();
    // paint.ctx.arc(this.x + this.w / 2,this.y + this.h / 2,this.w / 2,0,2*Math.PI);
    // paint.ctx.fill();
  }

} // end of Block class
