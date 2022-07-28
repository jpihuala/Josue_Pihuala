const express = require("express")
const fs = require("fs")

const productos = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 4040;
const server = app.listen(PORT,()=>
    console.log(`server http://localhost:${PORT}`)
);

server.on("error", (err) => console.log (err));
