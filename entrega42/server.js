const express = require("express");
const { Contenedor } = require("./contenedor");
const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

// const productos = JSON.parse(fs.readFileSync("../productos.txt", "utf-8"));

const {Router} = express
const routerapp = Router()

routerapp.get("/", async (req, res) => {
	const contenedor = new Contenedor("./productos.txt");
	console.log(contenedor);
	const productos = await contenedor.getAll();
	res.json({ productos });
});

routerapp.get("/:id", async (req, res) => {
	const { id } = req.params;
	const contenedor = new Contenedor("./productos.txt");
	const producto = await contenedor.getById(parseInt(id));
	console.log(producto);
	res.json({ producto });
});

routerapp.post("/", async (req, res) => {
	const objProducto = req.body;
	const contenedor = new Contenedor("./productos.txt");
	contenedor.save(objProducto);
	res.json({ message: "Producto guardado", objProducto });
});

routerapp.put("/:id", async (req, res) => {
	const { id } = req.params;
	const objProducto = req.body;
	const contenedor = new Contenedor("./productos.txt");
	contenedor.updateById({ id: parseInt(id), ...objProducto });
	res.json({ message: "Producto actualizado" });
});

routerapp.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const contenedor = new Contenedor("./productos.txt");
	contenedor.deleteById(parseInt(id));
	res.json({ message: "Producto eliminado" });
});


app.use('/api/productos', routerapp)



const PORT = process.env.PORT || 4000;
const server = app.listen(PORT,()=>{
    console.log(`server http://localhost:${PORT}`)
})

server.on("error", err=> console.log (err));
