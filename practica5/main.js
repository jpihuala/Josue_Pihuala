const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('Hola mundo')
})

const connectedServer = server.listen(8080, ()=>{
    console.log('server ${connectedServer.addres().port}')
})


// console.log('hola mundo')

