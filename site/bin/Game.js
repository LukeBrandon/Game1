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
    }
    draw() {
        Game.paint.fillStyle = "red";
        Game.paint.fillRect(10, 10, 100, 100);
    }
}
Game.sw = window.innerWidth;
Game.sh = window.innerHeight;
const g = new Game();
g.draw();
//# sourceMappingURL=Game.js.map