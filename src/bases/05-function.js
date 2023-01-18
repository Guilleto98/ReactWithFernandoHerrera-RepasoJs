function saludar(name){
    return `Hola, ${name}`
};

const saludar2 = (name) => `Hola ${name}` 

console.log(saludar2('Guillote'))
console.log(saludar('Guille'))


const getUser = ()=>{ //Debe ir el return, si no quiero que vaya el return debo poner el cuerpo de la funcion entre ()
    return{
        uid:'abc',
        username: 'Papimaster',
    }
}

console.log(getUser());


function getUserActive(name){
    return{
        uid:'abc',
        username: name,
    }
}

const getUserActive2 = (name)=>
    ({
        uid:'abc',
        username: name,
    }
    )


const userActive = getUserActive('Fernando');
console.log(userActive)