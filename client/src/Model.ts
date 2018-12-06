import { Block } from "./Gameobjects/Block";
import { Spider } from "./Gameobjects/Spider";
import { Sprite } from "./GameObjects/Sprite";
import { Player } from "./Player";


export class Model {
    public players: Player[] = [];
    public readonly mainPlayer: Player;
    public spider: Spider;
    public socket: SocketIOClient.Socket;
    public sprites: Sprite[] = [    ];

    constructor(socket: SocketIOClient.Socket) {
        this.mainPlayer = new Player(socket, this);
        this.players.push(this.mainPlayer);

        this.spider = new Spider(socket, this);
        this.sprites.push(this.spider);
        this.sprites.push(this.mainPlayer);

        this.socket = socket;
        this.socket.on("allPlayers", this.setPlayers.bind(this));
        this.socket.on("newUser", this.newUser.bind(this));
        this.socket.on("userMove", this.setPlayerPos.bind(this));
        this.socket.on("userDisconnect", this.removeUser.bind(this));

        this.addBrick();
    }

    public update() {
        // updating players
        for (const player of this.players) {
            player.update();
        }
        // updating sprites
        for (const sprite of this.sprites) {
            sprite.update();
        }
    }

    public addBrick() {
        const block = new Block();
        this.sprites.push(block);
    }

    public setMainId(id: string) {
        this.mainPlayer.setId(id);
    }

    public newUser(id: string) {
        const p = new Player(this.socket, this);
        p.setId(id);
        this.players.push(p);
    }

    public removeUser(id: string) {
        this.players = this.players.filter((p) => p.id !== id);
    }

    public setPlayers(data: any) {
        this.players = [];
        this.players.push(this.mainPlayer);
        for (const player of data) {
            if (player.id !== this.mainPlayer.id) {
                const p = new Player(this.socket, this);
                p.setId(player.id);
                p.setPos(player);
                this.players.push(p);
            }
        }
    }

    public setPlayerPos(data: Player) {
        const { id, x, y } = data;
        const player = this.players.filter((p) => p.id === id)[0];
        if (player) {
            player.x = x;
            player.y = y;
        }
    }
}
