import { rouletteModel } from "../models/roulette.model.js";
import { betModel } from "../models/bet.model.js";

export const betController = async (request, response) => {
    try {
        const {id} = {
            ...request.params
        };

        const {amount, number, color} = {
            ...request.body
        };

        // Validación de ruletas existentes
        const roulletes = await rouletteModel.findById(id);
        if(!roulletes) {
            return response.status(404).json({ "mensaje": "Ruleta no encontrada" });
        }
        
        // Validación ruleta abierta
        if(!roulletes.isOpen) {
            return response.status(400).json({ "mensaje": "Monto inválido: ha superado el máximo permitido" });
        }
        
        if(!amount || amount) {
            return response.status(400).json({ "mensaje": "Debe apostar un número, color o ambos" });
        }
        
        if(number === undefined && !color) {
            return response.status(400).json({ "mensaje": "El número ingresado debe estar entre el 0 y el 36" });
        }
        
        if(color && !["rojo", "negro"].incluides(color.toLowerCase())) {
            return response.status(400).json({ "mensaje": "El color escogido debe ser rojo o negro" });
        }


    } catch (error) {
        
    }
}