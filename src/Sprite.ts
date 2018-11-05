export abstract class Sprite {
    // member variables
    public x: number;
    public y: number;
    public h: number;
    public w: number;
    public prevX: number;
    public prevY: number;
    public type: string;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 0;
        this.h = h || 0;
        this.prevX = 0;
        this.prevY = 0;
    }

    public abstract update(): void;
    public abstract draw(): void;

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

}
