export class Controller {
    constructor(_model) {
        console.log("controller constructor");
        this.model = _model;
        document.addEventListener("keydown", this.keyboardInput);
    }
    keyboardInput(event) {
        console.log(event);
        if (event.keyCode == 37) {
            this.model.player.x -= 5;
        }
        if (event.keyCode == 38) {
            this.model.player.y -= 5;
        }
        if (event.keyCode == 39) {
            this.model.player.x += 5;
        }
        if (event.keyCode == 40) {
            this.model.player.y += 5;
        }
        if (event.keyCode == 41) {
            this.keySpace = true;
        }
    }
    update() {
        if (this.keySpace == true) {
            console.log("pressed key space");
            this.keySpace = false;
        }
    }
}
//# sourceMappingURL=Controller.js.map