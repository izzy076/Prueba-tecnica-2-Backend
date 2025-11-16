import mongoose from "mongoose";


//crear funcion de conexion;

export const dbConnect = async ()=>{

    try{
        await mongoose.connect(process.env.DB_URL,{dbName:"proyecto1"});
        console.log("Database is connected")
    }catch (error) {
        console.log("Database is NOT connected", error);
    }
}