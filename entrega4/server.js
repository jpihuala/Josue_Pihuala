const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log('el server')
})