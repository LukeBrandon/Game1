import { Direction, Game } from "./Game";
import { Sprite } from "./Sprite";
export class Player extends Sprite {
    constructor() {
        super(100, 100, 100, 100);
        this.update = () => {
            this.lastTouchCounter++;
        };
        this.lastTouchCounter = 0;
    }
    move(dir) {
        if (dir === Direction.Up) {
            this.y++;
        }
    }
    draw() {
        const { x, y, w, h } = this;
        Game.paint.fillStyle = "red";
        Game.paint.fillRect(x, y, w, h);
    }
}
//# sourceMappingURL=Player.js.map