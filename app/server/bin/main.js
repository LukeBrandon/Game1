"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = __importDefault(require("bunyan"));
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const socket_io_1 = __importDefault(require("socket.io"));
const log = bunyan_1.default.createLogger({
    name: "Server",
});
const app = express_1.default();
const port = 3005;
const server = http_1.createServer(app);
const io = socket_io_1.default(server);
server.listen(3001);
io.on("connection", (socket) => {
    log.info("A user connected");
    io.emit("New user", { id: Math.random() });
    socket.on("I Move", (data) => {
        log.info(data);
        io.emit("It Move", data);
    });
});
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../../public")));
app.listen(port, () => log.info(`App listening on port ${port}!`));
//# sourceMappingURL=main.js.map