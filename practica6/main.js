const http = require('http')

console.log(http)

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('<h1>Hola Mundo</h1>')
})

const createServer = server.listen(8080, () =>{
    console.log(server.address())
    // console.log(connectedServer.adres())
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})