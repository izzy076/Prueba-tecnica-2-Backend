import express from "express";
import { postRoullete, openRoullete, closeRoullete, getRoulette } from "../controllers/roulettes.controller.js";
import { betController } from "../controllers/bets.controller.js";

const roulleteRouter = express.Router();

// Crear ruleta
roulleteRouter.post("/crear", postRoullete);
roulleteRouter.get("/mostrar", getRoulette);
roulleteRouter.put("/:id/open", openRoullete);
roulleteRouter.put("/:id/close", closeRoullete);
roulleteRouter.post("/:id/bet", betController); 

export default roulleteRouter;