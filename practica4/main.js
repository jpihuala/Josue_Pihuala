const fs = require('fs')


try {
    let fyh = new Date().toString()  //toString convierte la variable en texto
    fs.writeFileSync('./fyh.txt', fyh, 'utf-8' )
    console.log(fyh)
    let lectura = fs.readFileSync('./fyh.txt', 'utf-8')
    console.log(lectura)
} catch (error) {
    console.log(error)
}


// try {
//     let lectura = fs.readFileSync('./fyh.txt', 'utf-8')
//     console.log(lectura)
// } catch (error) {
//     console.log(error)
// }
