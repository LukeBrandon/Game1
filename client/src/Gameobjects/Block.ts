import { Paint } from "../Paint";
import { Player } from "../Player";
import { Sprite } from "./Sprite";

export class Block extends Sprite {
  constructor() {
    super(500, 500, 100, 100);
    this.type = "block";
  }

  public update() {
    // console.log("update");
  }

  public draw(paint: Paint) {
    paint.ctx.fillStyle = 'green';
    paint.ctx.fillRect(this.x, this.y, this.w, this.h);
    // paint.ctx.beginPath();
    // paint.ctx.arc(this.x + this.w / 2,this.y + this.h / 2,this.w / 2,0,2*Math.PI);
    // paint.ctx.fill();
  }

  public playerHit(player: Player) {
    console.log("hit");
    const px = player.x - player.w / 2;
    const py = player.y - player.h / 2;
    const bx = this.x - this.w / 2;
    const by = this.y - this.h / 2;
    const dx = px - bx;
    const dy = py - by;
    const len = (dx**2 + dy**2) ** 0.5;
    const mx = dx / len * 2;
    const my = dy / len * 2;
    this.move(-mx, -my)
    // if (Math.abs(mx) > Math.abs(my)) {
    //   this.move(-mx, 0);
    // } else {
    //   this.move(0, -my);
    // }
  }
}
