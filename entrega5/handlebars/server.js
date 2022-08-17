const express = require("express");
const handlebars = require('express-handlebars')
const app = express();
const { Contenedor } = require("./contenedor");

app.use(express.urlencoded({ express: true }));
const PORT = process.env.PORT || 8080;

const contenedor = new Contenedor("./productos.txt");

app.set("view engine", "hbs");
app.set("views", "./views/layouts");

app.use(express.static("public"));

app.engine(
	"hbs",
	handlebars.engine({
		extname: ".hbs",
		defaultLayout: "",
		layoutsDir: __dirname + "/views/layouts",
		partialsDir: __dirname + "/views/partials"
	})
);

app.get("/", async (req, res) => {
	const producto = await contenedor.getAll();
	res.render("index", {
		list: producto,
		listExist: true,
		producto: true
	});
});

app.get("/productos", async (req, res) => {
	const producto = await contenedor.getAll();
	res.render("productos", {
		titulo: "SHAMPOO PROMOS",
		list: producto,
		listExist: true,
		producto: true
	});
});

app.post("/productos", async (req, res) => {
	const objProducto = req.body;
	contenedor.save(objProducto);
	const listExist = true;
	res.redirect("/productos");
});

app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server running on port ${PORT}`);
});