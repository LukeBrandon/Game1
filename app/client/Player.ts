import { Direction, Game } from "./Game";
import { Sprite } from "./Sprite";
import { socket } from './Socket';
import { Paint } from "./Paint";


export class Player extends Sprite {
    public lastTouchCounter: number;
    private imgSize = 20;
    private moveSpeed = 8;
    private image: HTMLImageElement;
    public playerID: number;

    constructor() {
        super(300, 100, 100, 200);
        this.lastTouchCounter = 0;
        this.image = new Image();
        this.image.src = "img/player.png";
        this.image.height = this.imgSize;
        this.move = this.move.bind(this);
        this.playerID = Math.random();
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
        socket.emit("I Move", {
            id: this.playerID,
            x: this.x,
            y: this.y
        })
    }

    public draw(paint: Paint) {
        const { x, y, w, h, image } = this;
        paint.ctx.drawImage(image, x, y, w, h);
    }

}
