import mongoose from "mongoose";

const betSchema  = new mongoose.Schema ({
    ammount : {
        type: Number,
        required: true,
        max: 10000
    },
    number : {
        type: Number,
        min: 0,
        max: 36,
        default: null
    },
    date: {
    type: Date,
    default: Date.now
  }
});

export const betModel = mongoose.model("bets", betSchema)