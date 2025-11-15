import { rouletteModel } from "../models/roulette.model";

// 1. Método para CREAR un producto -> POST
export const postRoullete = async (request, response) => {
    try {
        const newRoulette = {
            ...request.body
        }

        await productModel.create(newProduct);

        return response.status(201).json({ "mensaje": "producto creado correctamente" });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error",
            "error": error.message || error
        })
    }

}
