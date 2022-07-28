const express = require("express");
const fs = require("fs")
const productos = JSON.parse(fs.readFileSync("../productos.txt", "utf-8"));
const app=express();

app.get("/productos", (req, res) => {
    res.send({productos});
});

app.get("/productosRandom", (req, res) => {
    res.send(Math.random({productos}));
});

const PORT = 8080;
const server = app.listen(PORT,()=>
    console.log(`server http://localhost:${PORT}`)
);

server.on("error", err=> console.log (err));
