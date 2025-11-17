import express from "express";
import { postRoullete, openRoullete, closeRoullete } from "../controllers/roulettes.controller.js";
import { betController } from "../controllers/bets.controller.js";

const roulleteRouter = express.Router();

// Crear ruleta
roulleteRouter.post("/", postRoullete);
roulleteRouter.post("/:id/open", openRoullete);
roulleteRouter.post("/:id/close", closeRoullete);
roulleteRouter.post("/:id/bet", betController); 

export default roulleteRouter;