import { Game, map } from "./Game";
import { Player } from "./Player";
export class Model {
    constructor() {
        this.update = () => {
            this.player.update();
        };
        this.draw = () => {
            Game.paint.fillStyle = "white";
            Game.paint.fillRect(0, 0, map.width, map.height);
            this.player.draw();
        };
        this.player = new Player();
    }
}
//# sourceMappingURL=Model.js.map