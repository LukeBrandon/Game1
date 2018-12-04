import { Game } from "./Game";
import { Paint } from "./Paint";
import { Sprite } from "./Gameobjects/Sprite";
import { Block } from "./Gameobjects/Block"
import { Model } from "./Model";

export class Player extends Sprite {
    public id: string = "-1";
    public socket: SocketIOClient.Socket;
    private imgSize = 20;
    public moveSpeed = 4;
    public model: Model;
    private image: HTMLImageElement = new Image();

    constructor(socket: SocketIOClient.Socket, model: Model) {
        super(300, 100, 100, 200);
        this.model = model;
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
        //iterating sprites
        for (const sprite of this.model.sprites){

            //checking if colliding with the sprite
            if(this.collides(sprite)){
                const direction = this.pushOut(sprite); //gets direction of collision

                //if block
                if(sprite.type == "block"){
                    (sprite as Block).playerHit(this);
                }

                //if enemy
                
            }
        }
    }

    public movePlayer(x:number, y:number) {
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
