import express from "express";
import { betController } from "../controllers/bets.controller";

const betRouter = express.Router();

betRouter.post("/:id/bet", betController);

export default betRouter;