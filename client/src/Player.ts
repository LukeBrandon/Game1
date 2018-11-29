import { Direction, Game } from "./Game";
import { Paint } from "./Paint";
import { Sprite } from "./Sprite";

export class Player extends Sprite {
    public id: string = "-1";
    public lastTouchCounter: number = 0;
    public socket: SocketIOClient.Socket;
    private imgSize = 20;
    private moveSpeed = 8;
    private image: HTMLImageElement = new Image();

    constructor(socket: SocketIOClient.Socket) {
        super(300, 100, 100, 200);
        this.image.src = "img/player.png";
        this.image.height = this.imgSize;
        this.move = this.move.bind(this);
        this.draw = this.draw.bind(this);
        this.socket = socket;
    }

    public setPos(data: any) {
        if (data.id === this.id) {
            this.x = data.x;
            this.y = data.y;
        }
    }

    public setId(id: string) {
        this.id = id;
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
        this.socket.emit("iMove", {
            id: this.id,
            x: this.x,
            y: this.y,
        });
    }

    public draw(paint: Paint) {
        const { x, y, w, h, image } = this;
        paint.ctx.drawImage(image, x, y, w, h);
    }

}
