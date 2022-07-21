const Contenedor = require("./contenedor");


const contenedor = new Contenedor("./productos.txt")

// contenedor.save({title: 'Escuadra', price: 123.45, thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Squadra_45.jpg/220px-Squadra_45.jpg' })

// contenedor.getById(2)

// contenedor.getAll()

// contenedor.deleteById(3)

contenedor.deleteAll()