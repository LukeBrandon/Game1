import bunyan from "bunyan";
import { Server, Socket } from "socket.io";
import { IPlayer } from "../types/Player";

const log = bunyan.createLogger({
  name: "User Service",
});

export class Players {
  private players: {
    [s: string]: IPlayer,
  };
  private io: Server;
  constructor(io: Server) {
    this.players = {};
    this.io = io;
    this.userConnected = this.userConnected.bind(this);
  }

  public userConnected(socket: Socket) {

    // add the player to the server
    log.info("A user connected");
    const p: IPlayer = {
      id: socket.id,
      x: 0,
      y: 0,
    };
    this.addPlayer(p);

    // tell everyone there is a new player
    this.io.emit("newUser", socket.id);

    // tell the new player about everyone else
    const playerData = Object.keys(this.players).map((key) => this.players[key]);
    socket.emit("allPlayers", playerData);

    // set up events for the new player
    socket.on("iMove", (data: IPlayer) => {
      const { id, x, y } = data;
      this.movePlayer(id, x, y);
      this.io.emit("userMove", data);
    });
    socket.on("disconnect", () => {
      this.userDisconnected(socket);
    });
  }

  public userDisconnected(socket: Socket) {
    log.info("A user disconnected");
    this.io.emit("userDisconnect", socket.id);
    delete this.players[socket.id];
  }

  public movePlayer(id: string, x: number, y: number) {
    log.info(this.players[id], x, y);
    this.players[id].x = x;
    this.players[id].y = y;
    log.info(this.players[id], x, y);
  }

  public addPlayer(player: IPlayer): void {
    this.players[player.id] = player;
  }

  public sendAllPlayers() {
    const values = Object.keys(this.players).map((key) => this.players[key]);
    this.io.emit("allPlayers", values);
  }
}
