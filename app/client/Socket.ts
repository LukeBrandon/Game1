import io from "socket.io-client";

const socket = io("http://localhost:3001/");

socket.on("connect", () => {
  console.log("Tyler");
});

socket.on("New user", (data: any) => {
  console.log(data);
});
