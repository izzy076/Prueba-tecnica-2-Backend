import app from "./app.js";

const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log('El servidor está ejecutándose correctamente, en el puerto ', port);
});