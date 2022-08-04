const express = require('express')
const { Contenedor } = require('./contenedor')
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const arrayProducto = []
//////////////////////////////////////////////
const {Router} = express
const routerProductos = Router()

routerProductos.get('/', (req, res)=>{
    res.render('index.js')
} )

routerProductos.post('/', (req, res)=>{
    const objProducto = req.body
    // const contenedor = new Contenedor ('./productos.txt')
    // contenedor.save(objProducto)
    res.json({
        msg:'producto guardado',
        objProducto
    })
})
routerProductos.put('/:id', (req, res) =>{
    const {id} = req.params
    const objProducto = req.body
    const contenedor = new Contenedor ('./productos.txt')
    contenedor.updateById({id:parseInt (id), ...objProducto})

    // const respuesta = updateById({id, title, price, thumbnail})
    // res.json({msj:'producto actualizado'})
})



////////////////////////////////////////////////

app.use('/api/productos', routerProductos)



const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log('el server')
})