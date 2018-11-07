import io from "socket.io-client";

import { g } from './Game';

export const socket = io("http://localhost:3001/");

socket.on("connect", () => {
  console.log("Tyler");
});


socket.on("New user", (data: any) => {
  console.log(data);
  g.model.players[1].playerID = data.id;
});

socket.on("It Move", (data: any) => {
  const { id, x, y } = data;
  console.log(data, g.model.players[1].playerID);
  if (id === g.model.players[1].playerID) {
    g.model.players[1].x = x;
    g.model.players[1].y = y;
  }
})

