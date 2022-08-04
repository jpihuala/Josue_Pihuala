const { Router } = require('express')
const router = Router()

const productos = []

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


router.get('/productos', (req, res) => {
    res.json(productos)
})


router.post('/productos', (req, res) => {

    const { nombre, precio, url } = req.body
    let id = productos.length + 1
    productos.push({ nombre, precio, url, id })
    res.json(productos)

})


router.get('/productos/:id', (req, res) => {
    const id = Number(req.params.id)

    if (id > productos.length) {
        res.status(404).send({ error: 'Producto no econtrado' })
        return
    }

    let productoEncontrado = productos.find(elemento => elemento.id === id)
    console.log(productoEncontrado)
    res.json(productoEncontrado)
})


router.put('/productos/:idModificar', (req, res) => {

    const idModificar = Number(req.params.idModificar)
    let productoEncontrado = productos.find(elemento => elemento.id === idModificar)

    if (!productoEncontrado) {
        res.status(404).send({ error: 'Producto no econtrado' })
        return
    }

    const nombreNuevo = req.body.nombre
    const precioNuevo = req.body.precio
    const urlNuevo = req.body.url

    productoEncontrado.nombre = nombreNuevo
    productoEncontrado.precio = precioNuevo
    productoEncontrado.url = urlNuevo

    res.json(productos)
})

router.delete('/productos/:idBorrar', (req, res) => {

    const idBorrar = Number(req.params.idBorrar)

    let productoEncontrado = productos.find(elemento => elemento.id === idBorrar)
    if (!productoEncontrado) {
        res.status(404).send({ error: 'Producto no econtrado' })
        return
    }
    let posicion = productos.indexOf(productoEncontrado)
    let itemBorrado = productos.splice((posicion), 1)
    console.log(productos)
    res.sendStatus(200)
})

module.exports = router