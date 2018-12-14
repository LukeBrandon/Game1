import { Model } from "../Model";
import { Paint } from "../Paint";
import { Enemy } from "./Enemy";

export class Spider extends Enemy {
    public socket: SocketIOClient.Socket;
    public model: Model;
    private image: HTMLImageElement = new Image();
    private imgSize = 20;

    constructor(socket: SocketIOClient.Socket, model: Model) {
        super(300, 200, 100, 100);
        this.model = model;
        this.knockbackVal = 100;
        this.dx = 5;
        this.dy = 5;
        this.image.src = "img/spider.png";
        this.image.height = this.imgSize;
        this.socket = socket;
        this.draw = this.draw.bind(this);
    }

    public update() {
        // update spider
        // moves enemy
        this.x += this.dx;
        this.y += this.dy;

        if (this.x > 400 || this.x < 0) {
            this.dx *= -1;
        } else if (this.y > 500 || this.y < 0) {
            this.dy *= -1;
        } else {
            // do nothing
        }

        // colliding with objects
        // add knockback to this loop

        for (const sprite of this.model.sprites) {
            if (this.collides(sprite)) {
                // console.log("colliding");

                const direction = this.collisionDirection(sprite);

                // if collidnig with the player
                if (sprite.type === "player") {
                    if (direction === "right" || direction === "left") {
                        this.dx *= -1;
                    }
                    if (direction === "top" || direction === "bottom") {
                        this.dy *= -1;
                    }
                }

                if (direction === "right" || direction === "left") {
                    this.pushOut(sprite);
                    this.dx *= -1;
                } else if ( direction === "top" || direction === "bottom") {
                    this.pushOut(sprite);
                    this.dy *= -1;
                } else {
                    console.log("error in sprie collisint with spider");
                }
            }
        }

    }

    public draw(paint: Paint) {
        // draw spider
        const { x, y, w, h, image } = this;
        paint.ctx.drawImage(image, x, y, w, h);

        // paint.ctx.fillStyle = "green";
        // paint.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
