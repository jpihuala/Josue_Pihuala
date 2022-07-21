class Usuario{
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = [];
        this._mascotas = [];
    }
    getFullName(){
        return `${this._nombre} ${this._apellido}`;
    }
    addMascota(string){
        this._mascotas.push(string);
    }
    countMascotas(){
        return this._mascotas.length;
    }
    addBook(nombreLibro, autorLibro){
        let libroAgregar ={
            nombre: nombreLibro,
            autor: autorLibro
        }

        this._libros.push(libroAgregar)
    }
    getBookNames(){
        return this._libros.map((object) => {
            return object.nombre
        })
    }


}

let usuario = new Usuario ('Josue', 'Pihuala')

usuario.addMascota('Byron')
usuario.addMascota('Ringo')

usuario.addBook('El Señor de las moscas', 'William Golding')
usuario.addBook('Fundacion', 'Issav Asimov')

console.log(usuario)

console.log(usuario.countMascotas())

console.log(usuario.getBookNames())

console.log(usuario.getFullName())

