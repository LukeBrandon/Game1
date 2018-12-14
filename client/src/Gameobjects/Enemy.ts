import { Paint } from "../Paint";
import { Sprite } from "./Sprite";

export class Enemy extends Sprite {
    public dx: number;
    public dy: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.dx = 10;   // make random values and have update change direcgtion when hitting wall
        this.dy = 10;
        this.type = "enemy";
    }

    public update() {
        // update enemy
    }

    public draw(paint: Paint) {
        // draw enemy
    }

}
