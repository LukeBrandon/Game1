class Sprite {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.h = 0;
        this.w = 0;
        this.prevX = 0;
        this.prevY = 0;
    }
    getY() {
        return this.y;
    }
    getX() {
        return this.x;
    }
    getW() {
        return this.w;
    }
    getH() {
        return this.h;
    }
    collides(that) {
        if (this.y + this.h <= that.getY()) {
            return false;
        }
        if (this.x + this.w <= that.getX()) {
            return false;
        }
        if (this.x >= that.getX() + that.getW()) {
            return false;
        }
        if (this.y >= that.getY() + that.getH()) {
            return false;
        }
        return true;
    }
    pushOut(that) {
        if (this.y + this.h >= that.getY() && !(this.prevY + this.h > that.getY())) {
            this.y = that.getY() - this.h;
            return "top";
        }
        else if (this.y <= that.getY() + that.getH() && !(this.prevY < that.getY() + that.getH())) {
            this.y = that.getY() + that.getH() + 3;
            return "bottom";
        }
        else if (this.x + this.w >= that.getX() && !(this.prevX + this.w > that.getX())) {
            this.x = that.getX() - this.w;
            return "left";
        }
        else if (this.x <= (that.getX() + that.getW()) && !(this.prevX < (that.getX() + that.getW()))) {
            this.x = that.getX() + that.getW();
            return "right";
        }
        else
            return "not";
    }
}
//# sourceMappingURL=Sprite.js.map