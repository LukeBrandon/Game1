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
        this.model = new Model();
        this.controller = new Controller(this.model);
        this.view = new View(this.controller, this.model);
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