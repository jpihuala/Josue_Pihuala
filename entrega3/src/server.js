const express = require("express")


const app=express();

app.get('/', (req, res)=>{
    res.send('<h1 style="color: #3d33ff ">Bienvenidos al servidor express</h1>')
})


let count = 0
app.get('/visitas', (req, res)=>{
    count ++
    res.send(`visitas ${count}`)
})

app.get('/fyh', (req, res)=>{
    const fyh = new Date()
    res.send(`${fyh}`)
})

const PORT = 4040;
const server = app.listen(PORT,()=>
    console.log(`server http://localhost:${PORT}`)
);

// const fs = require("fs")

// const productos = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


server.on("error", err=> console.log (err));
