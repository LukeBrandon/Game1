import { Paint, map} from "./Paint";
import { Player } from "./Player";

export class Model {
    public players: Player[];

    public amount: number;

    constructor() {
        this.players = [];
        this.players.push(new Player());
        this.players.push(new Player());
    }

    public update = () => {
        for (const player of this.players) {
            player.update();
        }
    }
}
