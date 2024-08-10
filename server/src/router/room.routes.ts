import express from "express";
import { getUserRooms } from "../controllers/room.controller";

const router = express.Router();

router.get("/", getUserRooms);

export default router;
