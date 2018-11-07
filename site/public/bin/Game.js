import { Model } from "./Model";
import { Controller } from './Controller';
export const map = {
    height: 500,
    width: 500,
};
export var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
export class Game {
    constructor() {
        this.run = () => {
            setInterval(() => {
                this.model.draw();
                this.model.update();
            }, 100);
        };
        this.canvas = document.getElementById("myCanvas");
        this.canvas.width = map.width;
        this.canvas.height = map.height;
        this.canvas.style.top = -(map.height - Game.sh) + "px";
        Game.paint = this.canvas.getContext("2d");
        Game.paint.textAlign = "center";
        this.model = new Model();
        this.controller = new Controller(this.model);
    }
}
Game.sw = window.innerWidth;
Game.sh = window.innerHeight;
const g = new Game();
g.run();
//# sourceMappingURL=Game.js.map