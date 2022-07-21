const express = require('express')

const app = express()


const PORT = 4000

const server = app.listen(PORT, () =>{
    console.log(`escuchando ${server.address().port}`)
})

server.on("error", error => console.log(`error en servidor ${error}`))