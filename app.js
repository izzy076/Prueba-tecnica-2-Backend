import express from 'express'; 
import dotenv from 'dotenv'; 
import { dbConnect } from './src/config/database.js';
import cors from 'cors'; 
import roulleteRouter from './src/routes/roullete.routes.js';
import betRouter from './src/routes/bet.routes.js';


const app = express(); 
dotenv.config(); 
connectionMongo();
const port = process.env.PORT;
dbConnect();
app.use(cors()); 

// Le indico las rutas que debe utilizar
app.use(express.json());
app.use('/roullete', roulleteRouter);
app.use('/bet', betRouter);

app.listen(port,()=>{
    console.log(`Server is being executed on http://localhost:${port}`)
});

export default app;