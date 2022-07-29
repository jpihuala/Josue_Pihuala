const fs = require('fs');

try {
    const data = fs.readFileSync('./package.json', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error);
}

// const info = {
//     contenidoStr: (contenido del archivo leido en string),
//     contenidoObj: (contenido del archivo leido en formato objeto),
//     size (tamaño del archivo)
// }

// console.log(info)