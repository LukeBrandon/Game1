import { Direction, Game } from "./Game";
import { Sprite } from "./Sprite";

export class Player extends Sprite {
    // member variables
    public lastTouchCounter: number;
    private moveSpeed = 8;

    constructor() {
        super(100, 100, 100, 100);
        this.lastTouchCounter = 0;
        this.move = this.move.bind(this);
    }

    public update = () => {
        this.lastTouchCounter++;
    }

    public move(dir: Direction) {
        if (dir === Direction.Up) {
            this.y -= this.moveSpeed;
        } else if (dir === Direction.Left) {
            this.x -= this.moveSpeed;
        } else if (dir === Direction.Down) {
            this.y += this.moveSpeed;
        } else if (dir === Direction.Right) {
            this.x += this.moveSpeed;
        }
    }

    public draw() {
        const { x, y, w, h } = this;
        Game.paint.fillStyle = "red";
        Game.paint.fillRect(x, y, w, h);
    }

}
