const express = require('express')


const app = express()

app.set('views', './views')
app.set('views engine', 'pug')



app.get('/', (req, res)=>{
    res.render('index.pug', {mensaje:'Hola Pug'})
})

const PORT = 3000
app.listen(PORT, err => {
    if(err) throw new Error(`Error en el servidor ${err}`)
    console.log(`Example app listening on port ${PORT}!`)
})