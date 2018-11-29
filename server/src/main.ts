import bunyan from "bunyan";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import path from "path";
import socketIO from "socket.io";
import { Socket } from "socket.io";
import { Players } from "./players";

const log = bunyan.createLogger({
  name: "Server",
});

const app = express();
const port = 8000;

app.use(cors({ credentials: true, origin: "http://localhost:8005"}));

const server = createServer(app);

export const io = socketIO(server, {
  origins: "http://localhost:8005",
});

export const PlayersData = new Players(io);

io.on("connection", PlayersData.userConnected);

server.listen(port, () => {
  log.info(`Express server listening on port ${port}`);
});
