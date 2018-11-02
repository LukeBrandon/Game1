const map = {
    height: 1000,
    width: 1000
};
class Game {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.canvas.width = map.width;
        this.canvas.height = map.height;
        this.canvas.style.top = -(map.height - Game.sh) + "px";
        Game.paint = this.canvas.getContext("2d");
        Game.paint.textAlign = "center";
        let model = new Model();
        let controller = new Controller(model);
        let view = new View(controller, model);
    }
    draw() {
    }
    run() {
        while (true) {
            this.controller.update();
            this.model.update();
            this.view.paintComponent();
        }
    }
}
Game.sw = window.innerWidth;
Game.sh = window.innerHeight;
const g = new Game();
g.run();
//# sourceMappingURL=Game.js.map