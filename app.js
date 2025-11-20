import express from 'express'; 
import dotenv from 'dotenv'; 
import { dbConnect } from './src/config/database.js';
import cors from 'cors'; 
import roulleteRouter from './src/routes/roullete.routes.js';
import betRouter from './src/routes/bet.routes.js';


const app = express(); 
dotenv.config(); 
const port = process.env.PORT;
dbConnect();

// Le indico las rutas que debe utilizar
app.use(express.json());
app.use('/roullete', roulleteRouter);
app.use('/bet', betRouter);

export default app;