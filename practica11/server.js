const express = require ('express')
const {Server: ServerHttp} = require('http')
const {Server: ServerIo} = require('socket.io')
const app = express()
const serverHttp = new ServerHttp(app)
const serverIo = new ServerIo (serverHttp)

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: __dirname})
})


serverHttp.listen(3000, ()=>{
    console.log('Server funcionando en puerto 3000')
})