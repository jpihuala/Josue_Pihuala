function mostrarLista (){
    console.log(`lista vacia`);
}

mostrarLista()

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed)


const mostrarLista2 = () => {
    console.log(`lista vacia`)
}

mostrarLista2()


const mostrarLista3 = params => {
    console.log(params)
}

const ejecutar = unaFuncion => unaFuncion();
const saludar = () => console.log("saludos")
ejecutar (saludar)