const { connect } = require("node:http2");
const { io } = require("socket.io-client");

const socket = io("http://127.0.0.1:3000");

socket.on("connect", () => {
  console.log(`connected Done with my id ${socket.id}`);
});
socket.on("servermsg", (msg) => {
  console.log(msg);
});

socket.emit('send msg','hello server')