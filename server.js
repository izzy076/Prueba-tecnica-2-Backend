import app from "./app.js";

const port = process.env.PORT 

app.get("/",(req,res)=>
res.send("Server is Working!")
)

app.listen(port,()=>{
    console.log(`Server is being executed on http://localhost:${port}`)
});