import { rouletteModel } from "../models/roulette.model";

// 1. Método para CREAR una ruleta -> POST
export const postRoullete = async (request, response) => {
    try {
        const newRoulette = {
            ...request.body
        }

        await rouletteModel.create(newRoulette);

        return response.status(201).json({ "mensaje": "Ruleta creada correctamente" });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error",
            "error": error.message || error
        });
    };
}

// Abrir una ruleta
export const openRoullete = async (request, response) => {
    try {
        const { id } = {
            ...request.params
        }

        const roulette = await rouletteModel.findById(id);

        if (!roulette) {
            return response.status(404).json({ "mensaje": "Ruleta no encontrada" });
        }

        roulette.isOpen = true;
        await roulette.save();

        return response.status(200).json({ "mensaje": "Ruleta abierta correctamente" });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error",
            "error": error.message || error
        });
    };
}

// Cerrar una ruleta
export const closeRoullete = async (request, response) => {
    try {
        const { id } = {
            ...request.params
        };

        const rouletteClosed = await rouletteModel.findById(id).populate("bets");

        if (!rouletteClosed || !rouletteClosed.isOpen) {
            return response.status(400).json({ "mensaje": "No se pudo cerrar esta ruleta" });
        }

        // cierre de la ruleta
        rouletteClosed.isOpen = false;

        // ganador
        const winnerNumber = Math.floor(Math.random() * 36);
        const winnerColor = winnerNumber % 2 === 0 ? "rojo" : "negro";



        rouletteClosed.winnerColor = winnerColor;
        rouletteClosed.winnerNumber = winnerNumber;

        // Evaluar las apuestas
        const resultados = rouletteClosed.bets.map(bet => {
            let payout = 0;

            if (bet.number !== null && bet.number === winnerNumber) {
                payout += bet.amount * 5;
            }

            if (bet.color !== null && bet.color === winnerColor) {
                payout += bet.amount * 1.8;
            }

            return {
                id: bet._id,
                amount: bet.amount,
                number: bet.number,
                color: bet.color,
                winner: payout > 0,
                payout
            };
        });

        await rouletteClosed.save();

        return response.status(200).json({ "mensaje": "Ruleta cerrada correctamente", ganarNumero: winnerNumber, ganarColor: winnerColor, resultados });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error",
            "error": error.message || error
        });
    };
}
