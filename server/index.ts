import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { socketHandler } from "./socket/socket";

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === "development" ? "http://localhost:5173" : "",
  },
});

app.use(express.json());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development" ? "http://localhost:5173" : "",
  })
);

socketHandler(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
