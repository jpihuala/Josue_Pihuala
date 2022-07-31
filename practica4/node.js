const fs = require('fs');

fs.readFile('./package.json', 'utf-8', (err, contenido) =>
{
    let obj = {
        contenidoSrt: contenido, //String
        contenidoObj: JSON.parse(contenido),  //Objeto
        size: contenido.length
    }
    if (err) {
        console.log(err)
    } else {
        console.log(obj)
        console.log(contenido)        
    }

    fs.writeFile('./prueba2.txt', JSON.stringify(obj, null, 2), 'utf-8', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('archivo nuevo')
        }
    })
})




// const info = {
//     contenidoStr: (contenido del archivo leido en string),
//     contenidoObj: (contenido del archivo leido en formato objeto),
//     size (tamaño del archivo)
// }

// console.log(info)