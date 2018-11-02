import { Game, map} from "./Game";
import { Player } from "./Player";

export class Model {
    public player: Player;

    constructor() {
        this.player = new Player();
    }

    public update = () => {
        this.player.update();
    }

    public draw = () => {
        // clear screen
        Game.paint.fillStyle = "white";
        Game.paint.fillRect(0, 0, map.width, map.height);

        this.player.draw();
    }
}
