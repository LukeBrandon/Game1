class Player extends Sprite {
    constructor() {
        super();
        this.lastTouchCounter = 0;
    }
    update() {
        console.log("palyer update");
        this.lastTouchCounter++;
    }
    draw() {
    }
}
//# sourceMappingURL=Player.js.map