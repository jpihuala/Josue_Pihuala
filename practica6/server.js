const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send({ mensaje: 'hola mundo'})
})

let count = 0
app.get('/visitas', (req, res) =>{
    count ++
    res.send(`la cantidad de visitas es: ${count}`)
})



const PORT = 4000

const server = app.listen(PORT, () =>{
    console.log(`escuchando ${server.address().port}`)
})

server.on("error", error => console.log(`error en servidor ${error}`))