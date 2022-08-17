const express = require("express");
const app = express();
const { Contenedor } = require("./contenedor");

app.use(express.urlencoded({ express: true }));
const PORT = process.env.PORT || 8080;

const contenedor = new Contenedor('./productos.txt')

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", async (req, res) => {
	const producto = await contenedor.getAll();
	res.render("index", {
		titulo: "SHAMPOO PROMOS",
		listaProductos: producto,
		hayLista: true,
		producto: true
	});
});

app.get("/productos", async (req, res) => {
	const producto = await contenedor.getAll();
	res.render("partials/productos", {
		titulo: "SHAMPOO PROMOS",
		listaProductos: producto,
		hayLista: true,
		producto: true
	});
});

app.post("/productos", async (req, res) => {
	const objProducto = req.body;
	contenedor.save(objProducto);
	res.redirect("/productos");
});

app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server running on port ${PORT}`);
});