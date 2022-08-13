const express = require('express')
const handlebars = require('express-handlebars')

const app = express()


app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials/'
    })
)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('public'))

const fakeApi = () => [
    {name: 'Fede', lane: 'midlaner'},
    {name: 'Fede1', lane: 'topñamer'},
    {name: 'Fede2', lane: 'midlaner'},
    {name: 'Fede3', lane: 'topñamer'},
    {name: 'Fede4', lane: 'midlaner'},
    {name: 'Fede5', lane: 'topñamer'},
]
app.get('/', (req, res)=>{
    res.render('main', {listExist: true, list: fakeApi()})
})

const PORT = 3000
app.listen(PORT, err => {
    if(err) throw new Error(`Error en el servidor ${err}`)
    console.log(`Example app listening on port ${PORT}!`)
})