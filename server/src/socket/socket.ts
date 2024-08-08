import { Server } from "socket.io";

export const socketHandler = (io: Server) => {
  io.on("connect", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};
