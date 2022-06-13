class Usuario{
    constructor (nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(){
        
    }

}