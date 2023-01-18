const characters = ['goku', 'vegeta', 'naruto'];

const [p1] = characters;

console.log(p1)


const returnArray = ()=>{
    return ['ABC', 123]
}

const [letras, numeros] = returnArray();

console.log(letras, numeros)


//TAREA

// La primera posicion del arreglo se llamara nombre y la segunda set nombre
const state= (name)=>{
    return [name, ()=> console.log('HolaMundo')];
}

const [nombre, setNombre] = state('goku');

console.log(nombre)
setNombre()