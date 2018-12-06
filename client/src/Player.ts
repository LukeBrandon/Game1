import { Game } from "./Game";
import { Block } from "./Gameobjects/Block";
import { Sprite } from "./Gameobjects/Sprite";
import { Model } from "./Model";
import { Paint } from "./Paint";

export class Player extends Sprite {
    public id: string = "-1";
    public socket: SocketIOClient.Socket;
    public moveSpeed = 4;
    public model: Model;
    private imgSize = 20;
    private image: HTMLImageElement = new Image();

    constructor(socket: SocketIOClient.Socket, model: Model) {
        super(300, 100, 100, 200);
        this.health = 50;
        this.knockbackVal = 100;
        this.model = model;
        this.image.src = "img/player.png";
        this.type = "player";
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
        // iterating sprites
        for (const sprite of this.model.sprites) {

            // checking if colliding with the sprite
            if (this.collides(sprite)) {
                const collisionDirection = this.collisionDirection(sprite);

                // if moveable sprites, then then update before pushout
                if (sprite.type === "block") {
                    (sprite as Block).playerHit(this, collisionDirection);
                }

                // if enemy
                if (sprite.type === "enemy") {
                    this.knockback(sprite);
                    this.health -= 5;
                    console.log("Player health is " + this.health);
                }

                // pushes out for all other collisions besides moveable ones
                const direction = this.pushOut(sprite); // gets direction of collision
                console.log("collided with " + sprite.type + " on the " + direction);
            }
        }
    }

    public movePlayer(x: number, y: number) {
        this.move(x * this.moveSpeed, y * this.moveSpeed);
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
