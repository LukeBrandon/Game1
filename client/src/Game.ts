import io from "socket.io-client";
import { Controller } from "./Controller";
import { Model } from "./Model";
import { Paint } from "./Paint";

export class Game {
  public controller: Controller;
  public model: Model;
  public paint: Paint;
  public socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io("http://localhost:8000/");
    this.socket.on("connect", (data: any) => {
      this.model.setMainId(this.socket.id);
    });
    this.model = new Model(this.socket);
    this.paint = new Paint(this.model);
    this.controller = new Controller(this.model);
  }

  public run = () => {
    setInterval(() => {
      this.paint.draw();
      this.model.update();
      this.controller.update();
    }, 10);
  }
}

export const g = new Game();
g.run();
console.log(g);
