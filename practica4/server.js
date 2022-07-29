const fs = require ('fs');

//sobreescribir y crea automaticamente archivo
try {
    
    fs.writeFileSync('./prueba.txt', ' hola a todos', 'utf-8')
} catch (error) {
    console.log(error);
}



// const data = fs.readFileSync('./prueba.txt', 'utf-8') // crea archivo
// try carch para manejode error ////
try {
    const data = fs.readFileSync('./prueba.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error);
}

// agregar data al archivo

try {
    fs.appendFileSync('./prueba.txt', '\neste es el segundo saludo', 'utf-8');
    console.log('archvio agregado')
} catch (error) {
    console.log(error);
}


// borar archivo


// try {
//     fs.unlinkSync('./prueba.txt')
//     console.log('se borro el archivo')
// } catch (error) {
//     console.log(eror)
// }
