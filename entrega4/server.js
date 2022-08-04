const express = require('express')
const app = express()
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', rutas)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log('el server')
})