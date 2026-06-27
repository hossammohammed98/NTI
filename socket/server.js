const { Server } = require("socket.io");
const { createServer } = require("http");

const httpserver = createServer();
const io = new Server(httpserver);

io.on("connection", (socket) => {
  console.log(`the client connect on socket.id ${socket.id}`);
  socket.emit("servermsg", "welcome from the server");
});

// run server
httpserver.listen(3000, () => {
  console.log("Socket server running on port 3000");
});
