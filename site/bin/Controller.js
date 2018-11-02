class Controller {
    constructor(_model) {
        let model = _model;
        this.keyRight = false;
        this.keyLeft = false;
    }
    setView(v) {
        this.view = v;
    }
    keyboardInput(event) {
        if (event.keyCode == 37) {
            this.keyLeft = true;
        }
        if (event.keyCode == 38) {
            this.keyUp = true;
        }
        if (event.keyCode == 39) {
            this.keyRight = true;
        }
        if (event.keyCode == 40) {
            this.keyDown = true;
        }
        if (event.keyCode == 41) {
            this.keySpace = true;
        }
    }
    update() {
        console.log("controller update");
        if (this.keyLeft == true) {
            this.model.player.x -= 10;
            console.log("left key pressed");
            this.keyLeft = false;
        }
        if (this.keyRight == true) {
            this.model.player.x += 10;
            this.keyRight = false;
        }
        if (this.keyUp == true) {
            this.model.player.y -= 10;
            this.keyUp = false;
        }
        if (this.keyDown == true) {
            this.model.player.y += 10;
            this.keyDown = false;
        }
        if (this.keySpace == true) {
            console.log("pressed key space");
            this.keySpace = false;
        }
    }
}
//# sourceMappingURL=Controller.js.map