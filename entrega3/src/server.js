const express = require("express");
const { Contenedor } = require("./contenedor");

// const productos = JSON.parse(fs.readFileSync("../productos.txt", "utf-8"));
const app = express();

app.get("/productos", async (req, res) => {
    try {
        const contenedor = new Contenedor ('../productos.txt')
        const productos = await contenedor.getAll()
        res.send({status: 200, productos})
        
    } catch (error) {
        res.send({status: 500, error})
    }
});

app.get("/productosRandom", (req, res) => {
    const contenedor = new Contenedor ('../productos.txt')
    contenedor.getProductRandom()
        .then(producto => {
            res.send({status: 200, producto})
        })
        .catch(error => {
            res.send({status: 500, error})
        })
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT,()=>{
    console.log(`server http://localhost:${PORT}`)
})

server.on("error", err=> console.log (err));
