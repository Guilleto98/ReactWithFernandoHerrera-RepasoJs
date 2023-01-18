const person = {
    name: 'Tony',
    lastname: 'Verk',
    age: 32,
    direccion:{
        city: 'New York',
        zip: 123123,
        lat: 123123,
        lng: 154342,
    }
}

const person2 = {...person};
person2.name = 'Alfredo';

console.log(person2)
console.log(person)