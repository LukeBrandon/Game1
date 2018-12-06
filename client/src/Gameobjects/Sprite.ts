import { Paint } from "../Paint";
import { Player } from "../Player";

export abstract class Sprite {
    // member variables
    public x: number;
    public y: number;
    public h: number;
    public w: number;
    public prevX: number;
    public prevY: number;
    public type: string;
    public isMoveable: boolean;
    public health: number;
    public knockbackVal: number;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 0;
        this.h = h || 0;
        this.prevX = 0;
        this.prevY = 0;
        this.type = "undefined";
        this.health = 10;
        this.knockbackVal = 10;
        this.isMoveable = false;
    }

    public abstract update(): void;
    public abstract draw(paint: Paint): void;

    public get vx(): number {
        return this.prevX - this.x;
    }

    public get vy(): number {
        return this.prevY - this.y;
    }

    public getY(): number {
        return this.y;
    }
    public getX(): number {
        return this.x;
    }
    public getW(): number {
        return this.w;
    }
    public getH(): number {
        return this.h;
    }

    public oldPosition(): void {
        this.prevX = this.x;
        this.prevY = this.y;
    }

    public move(x: number, y: number): void {
        this.oldPosition();
        this.x += x;
        this.y += y;
    }

    public collides(that: Sprite): boolean {
        if (this.y + this.h <= that.getY()) {     // above
            return false;
        }
        if (this.x + this.w <= that.getX()) {     // right side of mario
            return false;
        }
        if (this.x >= that.getX() + that.getW()) {      // left side of mario
           return false;
        }
        if (this.y >= that.getY() + that.getH()) {      // below
            return false;
        }
        return true;

    }
    public pushOut(that: Sprite): string {
        // entering from top
        if (this.y + this.h >= that.getY() && !(this.prevY + this.h > that.getY())) {
            this.y = that.getY() - this.h;
            return "top";

        // entering from bottom
        } else if (this.y <= that.getY() + that.getH() && !(this.prevY < that.getY() + that.getH())) {
            this.y = that.getY() + that.getH() + 3;
            return "bottom";

        // entering from left
        } else if (this.x + this.w >= that.getX() && !(this.prevX + this.w > that.getX()) ) {
            this.x = that.getX()  - this.w;
            return "left";

        // entering from right
        } else if (this.x <= (that.getX() + that.getW()) && !(this.prevX < (that.getX() + that.getW()) )) {
            this.x = that.getX() + that.getW();
            return "right";

        } else {
            return "not";
              }
    }

    public knockback(that: Sprite): string {
        const spriteKnockback = that.knockbackVal;
        // entering from top
        if (this.y + this.h >= that.getY() && !(this.prevY + this.h > that.getY())) {
            this.y = that.getY() - this.h - spriteKnockback;
            return "top";

        // entering from bottom
        } else if (this.y <= that.getY() + that.getH() && !(this.prevY < that.getY() + that.getH())) {
            this.y = that.getY() + that.getH() + 3 + spriteKnockback;
            return "bottom";

        // entering from left
        } else if (this.x + this.w >= that.getX() && !(this.prevX + this.w > that.getX()) ) {
            this.x = that.getX()  - this.w - spriteKnockback;
            return "left";

        // entering from right
        } else if (this.x <= (that.getX() + that.getW()) && !(this.prevX < (that.getX() + that.getW()) )) {
            this.x = that.getX() + that.getW() + spriteKnockback;
            return "right";

        } else {
            return "not";
              }
    }

    public collisionDirection(that: Sprite): string {
        // entering from top
        if (this.y + this.h >= that.getY() && !(this.prevY + this.h > that.getY())) {
            return "top";

        // entering from bottom
        } else if (this.y <= that.getY() + that.getH() && !(this.prevY < that.getY() + that.getH())) {
            return "bottom";

        // entering from left
        } else if (this.x + this.w >= that.getX() && !(this.prevX + this.w > that.getX()) ) {
            return "left";

        // entering from right
        } else if (this.x <= (that.getX() + that.getW()) && !(this.prevX < (that.getX() + that.getW()) )) {
            return "right";

        } else {
            return "not";
              }
    }

    public playerHit(player: Player, direction: string) {
        if (direction === "left") {
          this.x = player.x + player.w;
        } else if (direction === "right") {
          this.x = player.x - this.w;
        } else if (direction === "top") {
          this.y = player.y + player.h;
        } else if (direction === "bottom") {
          this.y = player.y - this.h;
        } else {
          console.log("invalid direction on playerHit");
        }

      // frick all this tyler
        // const px = player.x - player.w / 2;
        // const py = player.y - player.h / 2;
        // const bx = this.x - this.w / 2;
        // const by = this.y - this.h / 2;
        // const dx = px - bx;
        // const dy = py - by;
        // const len = (dx**2 + dy**2) ** 0.5;
        // const mx = dx / len * 2;
        // const my = dy / len * 2;
        // this.move(-mx, -my)
        // if (Math.abs(mx) > Math.abs(my)) {
        //   this.move(-mx, 0);
        // } else {
        //   this.move(0, -my);
        // }
      }

}
