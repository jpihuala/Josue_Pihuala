const fs = require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }

    async save(obj){

        try{
        let data = await fs.promises.readFile(this.ruta, 'utf-8')
        let dataParse =JSON.parse(data)
            if(dataParse.length){
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataParse, {...obj, id: dataParse.length + 1 }], null, 2))

            } else{
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id: dataParse.length + 1 }], null, 2))
            } 
            console.log(`El archivo tiene el id: ${dataParse.length + 1}`)
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id){
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataParse =JSON.parse(data)
            let producto = dataParse.find(producto => producto.id === id)
            if (producto) {
                console.log(producto)
            } else {
                console.log(`no existe`)
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    async getAll(){
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataParse =JSON.parse(data)
            if (dataParse.length) {
                console.log(dataParse)
            } else {
                console.log("no hay productos")
            }
            console.log(dataParse)
        } catch (error) {
            console.log(error)
        }

    }
    async deleteById(id){
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataParse =JSON.parse(data)
            let producto = dataParse.find(producto => producto.id === id)
            if (producto) {
                let dataParseFiltrado = dataParse.filter(producto => producto.id !== id)
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataParseFiltrado, null, 2), 'utf-8') 
                console.log("producto eliminado")
            } else {
                console.log(`no existe`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll(){
        try{
            let dataParseFiltrado = []
            await fs.promises.writeFile(this.ruta, JSON.stringify(dataParseFiltrado, null, 2), 'utf-8')
            console.log("se eliminardon todos los productos")
        } catch (error) {
            console.log(error)
        }
    }
}




module.exports = Contenedor