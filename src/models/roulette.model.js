import mongoose from "mongoose";

const rouletteSchema = new mongoose.Schema({
    _id: "",
    status: {
        type: String,
        enum: ["open", "closed"]
    },
    isOpen: {
        type: Boolean,
        default: false
    },
    bets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bets"
        }
    ],
    winnerNumber: {
        type: Number,
        default: null
    },
    winnerColor: {
        type: String,
        enum: ["rojo", "negro", null],
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const rouletteModel = mongoose.model("roulettes", rouletteSchema)