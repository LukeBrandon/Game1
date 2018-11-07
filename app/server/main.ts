import bunyan from "bunyan";
import express from "express";
import { createServer } from "http";
import path from "path";
import socketIO from "socket.io";

const log = bunyan.createLogger({
  name: "Server",
});

const app = express();
const port = 3005;


const server = createServer(app);
const io = socketIO(server);
server.listen(3001);

io.on("connection", (socket) => {
  log.info("A user connected");
  io.emit("New user", {id: Math.random()});

  socket.on("I Move", (data: any) => {
    log.info(data)
    io.emit("It Move", data);
  })
});



app.use("/", express.static(path.join(__dirname, "../../public")));

app.listen(port, () => log.info(`App listening on port ${port}!`));
