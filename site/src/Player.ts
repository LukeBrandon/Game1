import { Direction, Game } from "./Game";
import { Sprite } from "./Sprite";

export class Player extends Sprite {
    // member variables
    public lastTouchCounter: number;
    public direction: string;

    constructor() {
        super(100, 100, 100, 100);
        this.lastTouchCounter = 0;
    }

    public update = () => {
        this.lastTouchCounter++;
        this.x++;

    }

    public draw() {
        const { x, y, w, h } = this;
        Game.paint.fillStyle = "red";
        Game.paint.fillRect(x, y, w, h);
    }

}
